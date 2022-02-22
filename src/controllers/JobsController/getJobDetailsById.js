const FILE_NAME = 'getJobDetailsById';
const logger = require('../../../logger/index')(FILE_NAME);
const { AtsJobModel } = require('../../../database/models/mainDb');
const { promiseErrorCatchFunction } = require('../../../lib/common/Util');

const getJobDetailsById = async (data, auth, callback) => {
  try {
    const { jobId } = data;
    const {user_id: userId } = auth;
    if (!jobId || jobId === '') throw new Error(`Invalid Job Id: ${jobId}`);
    const { promiseError, ...response } = await AtsJobModel.findAll({
      where: { JOB_ID: jobId },
      raw: true,
    }).catch(promiseErrorCatchFunction);

    if (promiseError) throw promiseError;
    if (response) callback(false, response);
    else {
      logger.debug(`Invalid Job Id passed to db from user ${userId}: ${jobId}`);
      throw new Error(
        `Invalid Job Id passed to db from user ${userId}: ${jobId}`
      );
    }
  } catch (error) {
    logger.error(error);
    callback(error);
  }
};

module.exports = getJobDetailsById;
