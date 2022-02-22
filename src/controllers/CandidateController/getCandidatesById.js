const { Op, Sequelize } = require('sequelize');
const _ = require('lodash');

const FILE_NAME = 'getCandidatesById';
const logger = require('../../../logger/index')(FILE_NAME);

const {
  AtsJobMappingModel,
  KmOrgSourceHigherModel,
  AtsCandidateDetailsModel,
  AtsHiringWorkflowModel
} = require('../../../database/models/mainDb');
const { promiseErrorCatchFunction } = require('../../../lib/common/Util');
const getPlaneResponseFromSequelize = require('../../common/getPlaneResponseFromSequelize');

const getCandidatesByJobId = async (params, auth, callback) => {
  try {
    const { jobId } = params;
    if(!jobId || jobId === '') throw new Error('No JobId Found');
    const { promiseError, ...response } = await AtsJobMappingModel.findAll({
      attributes: [
        'ID',
        'CANDIDATE_ID',
        'MAPPING_STATUS',
        'SOURCE',
        'STEP',
        'STEP_STATUS',
        'SEND_LINK_STATUS',
        'SENSELOAF_SCORE',
        [
          Sequelize.fn('DATE_FORMAT', Sequelize.col('CREATED_AT'), '%d %b, %y'),
          'CREATED_AT',
        ],
        [
          Sequelize.fn('DATE_FORMAT', Sequelize.col('UPDATED_AT'), '%d %b, %y'),
          'UPDATED_AT',
        ],
      ],
      include: [
        {
          model: AtsCandidateDetailsModel,
          attributes: [
            ['ID', 'CID'],
            'FIRST_NAME',
            'LAST_NAME',
            'EMAIL',
            'MOBILE',
            'SOURCE_TYPE',
            'STEP',
            'DELETE_STATUS',
          ],
          include: [
            {
              model: KmOrgSourceHigherModel,
              attributes: ['HIGHERID', 'HIGHER_NAME'],
            },
            {
              model: AtsHiringWorkflowModel,
              attributes: ['PROCESS_NAME']
            }
          ],

          where: { DELETE_STATUS: 0 },
        },
      ],
      where: { JOB_ID: jobId, MAPPING_STATUS: { [Op.ne]: 7 } },
    }).catch(promiseErrorCatchFunction);

    const candidateList = [];
    const plainResponse = getPlaneResponseFromSequelize(response);
    _.forOwn(plainResponse, (value) => {
    const {
      ats_candidate_detail: candidateDetails,
      ...other
    } = value;
    const {km_org_source_higher: sourceName} = candidateDetails;
    candidateList.push({...other, ...candidateDetails, ...sourceName});
  });
    callback(false, candidateList);
  } catch (error) {
    logger.error(error);
    callback(error);
  }
};

module.exports = getCandidatesByJobId;
