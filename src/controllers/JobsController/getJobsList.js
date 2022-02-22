const { Op, Sequelize } = require('sequelize');
const _ = require('lodash');
const { ACLResponse } = require('../../common/middleware');
const {
  AtsJobModel,
  AtsMasterJobBoardsModel,
  AtsJobBoardsModel,
  mainDbSequelizeInstance,
  KmUserDetailsModel,
} = require('../../../database/models/mainDb');
const { getHighestRole, promiseErrorCatchFunction } = require('../../../lib/common/Util');
const { mainDb } = require('../../../config/tableConstant');
const getCandidatesByJobIds = require('./getCandidateCountStatusByJobId');

const FILE_NAME = 'getJobsList';
const logger = require('../../../logger/index')(FILE_NAME);

const DEFAULT_JOBS_PER_PAGE_LIMIT = 10;

// Fetching job board list
const fetchJobBoardList = async (jobIds = []) => {
  try {
    if (!Array.isArray(jobIds) || jobIds.length === 0) {
      logger.warn('No jobids are passed.');
      return [];
    }

    const whereCondition = {};
    whereCondition[Op.and] = [];

    // In JobIds condition
    whereCondition[Op.and].push({ JOB_ID: { [Op.in]: jobIds } });

    // In status condition
    whereCondition[Op.and].push({ STATUS: { [Op.in]: [0, 1] } });

    // delete_status = 0 condition
    whereCondition[Op.and].push({ DELETE_REQUEST: 0 });

    const {promiseError,  ...jobBoardData} =
      await AtsJobBoardsModel.findAll({
        attributes: ['JOB_ID'],
        where: whereCondition,
        include: [
          {
            model: AtsMasterJobBoardsModel,
            attributes: ['JB_NAME', 'ICON_URL'],
          },
        ],
        raw: true,
      }).catch(promiseErrorCatchFunction);

    if (promiseError) throw promiseError;
    const jobPublished = {};
    Object.keys(jobBoardData).map(key => {
      const { JOB_ID } = jobBoardData[key];
      const boardName = jobBoardData[key]['ats_master_job_board.JB_NAME'];
      if(!jobPublished[JOB_ID])
        jobPublished[JOB_ID] = [];
      jobPublished[JOB_ID].push(boardName);
      return 0;
    });

    return jobPublished;
  } catch (error) {
    logger.error(error);
    return {};
  }
  
}

// Fetching Job List
const fetchJobList = async (filterCondition, page, limit) => {
        const { promiseError, count, rows } = await AtsJobModel.findAndCountAll({
          attributes: [
            'JOB_ID', 'UNIQUE_JOB_ID', 'NAUKRI_JOB_ID', 
            'JOB_TITLE', 'CREATED_ON', 'JOB_STATUS',
            'NO_OF_POSITION', 'OPEN_TILL_DATE', 'DELETE_STATUS'],
          where: filterCondition,
          include: [
            {
              model: KmUserDetailsModel,
              attributes: ['FULL_NAME'],
              required: false,
            },
          ],
          order: [['JOB_ID', 'DESC']],
          offset: (page) * limit,
          limit,
        }).catch(promiseErrorCatchFunction);
        if(promiseError)
            throw promiseError;
        
        const jobIds = _.map(rows, 'JOB_ID');
        const promiseArray = [];
        promiseArray.push(
          getCandidatesByJobIds({jobIds}, (err, candidateStatusList) =>
            err ? [] : candidateStatusList
          )
        );
        promiseArray.push(fetchJobBoardList(jobIds));
        const [candidateJobCountStatusList, publishedBoards] =
          await Promise.all(promiseArray);
        const jobDataList = _.map(rows, (job) => {
          const jobObj = {
            ...job.toJSON(),
            FULL_NAME: job.km_user_detail.FULL_NAME,
            countStatus: candidateJobCountStatusList[job.JOB_ID],
            publishedBoards: publishedBoards[job.JOB_ID] || [],
          };
          delete jobObj.km_user_detail
          return jobObj;
        });
        return { count, jobDataList, publishedBoards, jobIds };
}

const getJobsList = (data, auth, callback) => {
  ACLResponse(auth, async (err, { allJobsVisibility }) => {
    if (err) callback(err);
    else {
      try {
        const { org_id: orgId, user_id: userId, role_ids: roleIds } = auth;
        const { isAdmin, highestRole } = getHighestRole(roleIds);
        const {
          filterData = {},
          searchQuery = '',
          page = 1,
          limit = DEFAULT_JOBS_PER_PAGE_LIMIT,
        } = data;
        const filterCondition = {};
        filterCondition[Op.and] = [];

        filterCondition[Op.and].push({ ORG_ID: orgId });

        // Active Job
        filterCondition[Op.and].push({
          DELETE_STATUS: { [Op.in]: [0, 2] },
        });

        // Searching job By Name
        if (searchQuery)
          filterCondition[Op.and].push({
            JOB_TITLE: {
              [Op.like]: `%${searchQuery}%`,
            },
          });

        // Filter Applied
        if (filterData) {
          _.map(filterData, (value, key) => {
            const filterObj = {};
            filterObj[key] = value;
            filterCondition[Op.and].push(filterObj);
          });
        }

        if (!isAdmin && !allJobsVisibility) {
          const tempSQL = mainDbSequelizeInstance.dialect.queryGenerator
            .selectQuery(mainDb.ATS_HIRING_TEAM, {
              attributes: ['JOB_ID'],
              where: {
                USER_ID: userId,
                ROLE: highestRole,
                DELETE_STATUS: 0,
              },
            })
            .slice(0, -1);
          filterCondition[Op.and].push({
            [Op.or]: [
              { CREATED_BY: userId },
              {
                JOB_ID: {
                  [Op.in]: Sequelize.literal(`(${tempSQL})`),
                },
              },
            ],
          });
        };

        const { count, jobDataList, jobIds, jobBoards } = await fetchJobList(
          filterCondition,
          page,
          limit
        );

        return callback(false, {
          jobDataList,
          totalJobs: count,
          jobIds,
          jobBoards,
        });
      } catch (error) {
        logger.error(error);
        return callback(error);
      }
    }
    return 0;
  });
};

module.exports = getJobsList;
