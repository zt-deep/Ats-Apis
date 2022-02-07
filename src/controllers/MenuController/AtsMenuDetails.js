const { ZIMYO_ATS_APP_ID } = require('../../../config/Constants');
const { AppMenuMasterModel } = require('../../../database/models/accountsDb');
const { promiseErrorCatchFunction } = require('../../../lib/common/Util');

const FILE_NAME = 'AtsMenuDetails';
const logger = require('../../../logger/index')(FILE_NAME);

// Fetching names of app menu
const fetchMenuNames = () =>
  AppMenuMasterModel.findAll({
    attributes: ['id', 'name', 'parent_id'],
    where: {
      app_id: ZIMYO_ATS_APP_ID,
      status: 'Active',
    },
    raw: true,
  }).catch(promiseErrorCatchFunction);

const getAtsMenuDetails = async (callback) => {
    try {
        const AtsMenuDetails = await fetchMenuNames();
        return callback(false, {appMenus: AtsMenuDetails});
    } catch (error) {
        logger.error(error);
        return callback(error);
    }
}

module.exports = getAtsMenuDetails;
