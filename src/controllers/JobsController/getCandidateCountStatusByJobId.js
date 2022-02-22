const { Op } = require('sequelize');
const _ = require('lodash');
const { JOB_CANDIDATE_STATUS_LIST } = require('../../../config/Constants');
const { AtsJobMappingModel } = require('../../../database/models/mainDb/index');
const { promiseErrorCatchFunction } = require('../../../lib/common/Util');

const FILE_NAME = 'getCandidatesByJobId';
const logger = require('../../../logger/index')(FILE_NAME);

const getCandidateCountStatusByJobId = async (data, callback) => {
  try {
    const { jobIds } = data;
    logger.debug(jobIds);
    const statusList = {};
    const jobCandidateStatusData = {};
    if (!Array.isArray(jobIds) || jobIds.length === 0) {
      logger.warn('No job ids were passed');
      callback(false, []);
    }

    // Template for candidate count status in a job
    _.map(JOB_CANDIDATE_STATUS_LIST, (value, key) => {
      statusList[key] = { id: value.join(','), name: key, count: 0 };
    });

    // Multilevel object cannot be directly copied hence using clonDeep
    jobIds.map((id) => {
      jobCandidateStatusData[id] = _.cloneDeep(statusList);
      return 0;
    });
    const filterCondition = {};
    filterCondition[Op.and] = [];
    filterCondition[Op.and].push({
      JOB_ID: {
        [Op.in]: jobIds,
      },
    });
    filterCondition[Op.and].push({
      MAPPING_STATUS: {
        [Op.ne]: 7,
      },
    });
    const { promiseError, ...candidateStatusList } =
      await AtsJobMappingModel.findAll({
        attributes: ['CANDIDATE_ID', 'JOB_ID', 'MAPPING_STATUS'],
        where: filterCondition,
        order: [['JOB_ID', 'DESC']],
        raw: true,
      }).catch(promiseErrorCatchFunction);

    if (promiseError) throw promiseError;

    _.map(candidateStatusList, ({ JOB_ID, MAPPING_STATUS }) => {
      const status = jobCandidateStatusData[JOB_ID];
      switch (MAPPING_STATUS) {
        case 0:
          status.New.count += 1;
          status.All_Active.count += 1;
          break;
        case 1:
        case 2:
        case 3:
          status.In_Progress.count += 1;
          status.All_Active.count += 1;
          break;
        case 4:
          status.Selected.count += 1;
          break;
        case 5:
          status.Rejected.count += 1;
          break;
        case 6:
          status.Withdraw.count += 1;
          break;
        case 19:
          status.On_Hold.count += 1;
          break;
        default:
          break;
      }
      jobCandidateStatusData[JOB_ID] = { ...status };
      return 0;
    });
    return callback(false, jobCandidateStatusData);
  } catch (error) {
    logger.error(error);
    return callback(error);
  }
};

module.exports = getCandidateCountStatusByJobId;
