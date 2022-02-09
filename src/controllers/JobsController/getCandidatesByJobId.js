const FILE_NAME = 'getCandidatesByJobId';
const logger = require('../../../logger/index')(FILE_NAME);

const getCandidatesByJobIds = (jobIds = [], getCandidateDetails = false) => {
    try {
        if (jobIds.length === 0) {
          logger.warn('No job ids were passed');
          return [];
        }
        // else{
        //   const filterCondition = {};


        // }

          return [];
        
        
    } catch (error) {
        throw error;
    }
};

module.exports = getCandidatesByJobIds;