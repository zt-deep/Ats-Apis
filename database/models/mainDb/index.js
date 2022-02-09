const mainDbSequelizeInstance = require('../../connection/mainDb');

/**
 * Syncing MAIN database tables with sequelize
 */
const AtsMenuActivityModel = require('./tables/AtsMenuActivity.model')(
  mainDbSequelizeInstance
);
const KmEmployeeDetailsModel = require('./tables/KmEmployeeDetails.model')(
    mainDbSequelizeInstance
);
const KmEmployeePersonalDetailsModel = require('./tables/KmEmployeePersonalDetails.model')(
    mainDbSequelizeInstance
);
const KmOrgDetailsModel = require('./tables/KmOrgDetails.model')(
  mainDbSequelizeInstance
);
const KmUserDetailsModel = require('./tables/KmUserDetails.model')(
  mainDbSequelizeInstance
);

const AtsRoleDataVisibilityModel = require('./tables/AtsMenuActivity.model')(
  mainDbSequelizeInstance
);

const AtsJobModel = require('./tables/AtsJob.model')(
  mainDbSequelizeInstance
);

const AtsJobMappingModel = require('./tables/AtsJobMapping.model')(
  mainDbSequelizeInstance
);

const AtsHiringTeamModel = require('./tables/AtsHiringTeam.model')(
  mainDbSequelizeInstance
);

const AtsMasterJobBoardsModel = require('./tables/AtsMasterJobBoards.model')(
  mainDbSequelizeInstance
);

const AtsJobBoardsModel = require('./tables/AtsJobBoards.model')(
  mainDbSequelizeInstance
);

const AtsCandidateAttachmentModel = require('./tables/candidate/AtsCandidateAttachment.model')(
  mainDbSequelizeInstance
);

const AtsCandidateDetailsModel = require('./tables/candidate/AtsCandidateDetails.model')(
    mainDbSequelizeInstance
  );

const AtsCandidateEducationModel =
  require('./tables/candidate/AtsCandidateEducation.model')(
    mainDbSequelizeInstance
  );

const AtsCandidateFolderModel =
  require('./tables/candidate/AtsCandidateFolder.model')(
    mainDbSequelizeInstance
  );

const AtsCandidateFolderMappingModel =
  require('./tables/candidate/AtsCandidateFolderMapping.model')(
    mainDbSequelizeInstance
  );

const AtsCandidateHistoryModel =
  require('./tables/candidate/AtsCandidateHistory.model')(
    mainDbSequelizeInstance
  );

const AtsCandidateJobRejectionModel =
  require('./tables/candidate/AtsCandidateJobRejection.model')(
    mainDbSequelizeInstance
  );

const AtsCandidateRawDataModel =
  require('./tables/candidate/AtsCandidateRawData.model')(
    mainDbSequelizeInstance
  );

const AtsCandidateMessageModel =
  require('./tables/candidate/AtsCandidateMessage.model')(
    mainDbSequelizeInstance
  );

const AtsCandidateNotesModel =
  require('./tables/candidate/AtsCandidateNotes.model')(
    mainDbSequelizeInstance
  );

const AtsCandidateProcessModel =
  require('./tables/candidate/AtsCandidateProcess.model')(
    mainDbSequelizeInstance
  );

const AtsCandidateRejectionTypeModel =
  require('./tables/candidate/AtsCandidateRejectionType.model')(
    mainDbSequelizeInstance
  );

const AtsCandidateReviewModel =
  require('./tables/candidate/AtsCandidateReview.model')(
    mainDbSequelizeInstance
  );

const AtsCandidateReviewCardModel =
  require('./tables/candidate/AtsCandidateReviewCard.model')(
    mainDbSequelizeInstance
  );

const AtsCandidateStatusModel =
  require('./tables/candidate/AtsCandidateStatus.model')(
    mainDbSequelizeInstance
  );

const AtsCandidateTagsModel =
  require('./tables/candidate/AtsCandidateTags.model')(
    mainDbSequelizeInstance
  );

const AtsJobCandidateAnswersModel =
  require('./tables/candidate/AtsJobCandidateAnswers.model')(mainDbSequelizeInstance);


module.exports = {
  mainDbSequelizeInstance,
  AtsMenuActivityModel,
  KmEmployeeDetailsModel,
  KmEmployeePersonalDetailsModel,
  KmOrgDetailsModel,
  KmUserDetailsModel,
  AtsRoleDataVisibilityModel,
  AtsJobModel,
  AtsJobMappingModel,
  AtsHiringTeamModel,
  AtsMasterJobBoardsModel,
  AtsJobBoardsModel,
  AtsCandidateAttachmentModel,
  AtsCandidateDetailsModel,
  AtsCandidateEducationModel,
  AtsCandidateFolderMappingModel,
  AtsCandidateFolderModel,
  AtsCandidateHistoryModel,
  AtsCandidateJobRejectionModel,
  AtsCandidateRawDataModel,
  AtsCandidateMessageModel,
  AtsCandidateNotesModel,
  AtsCandidateProcessModel,
  AtsCandidateRejectionTypeModel,
  AtsCandidateReviewModel,
  AtsCandidateReviewCardModel,
  AtsCandidateStatusModel,
  AtsCandidateTagsModel,
  AtsJobCandidateAnswersModel,
};
