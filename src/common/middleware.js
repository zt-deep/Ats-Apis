// @TODO : Include all the menu and activity ids and jobs and candidate visiblity details
const verify = (req, res, next) => {
    req.auth = {
      user_id: '40',
      loginname: 'Zimyo Dev Team',
      first_name: 'Devteam',
      last_name: '',
      ph: '9999999999',
      email: 'devteam@zimyo.com',
      org_id: 16,
      sex: 'M',
      razor_id: '',
      address: 'abc testing',
      user_img:
        'https://hrmsdemo.s3.ap-south-1.amazonaws.com/16/employee/documents/2021_12_27_014849_abcd.png',
      pwdreset: 'N',
      security_salt: '9c2f343d9',
      lpwddate: '2022-02-07 15:43:27',
      creationdate: '2022-02-07 15:43:27',
      verified: 'Y',
      loggedin: '2022-02-07 15:43:29',
      noofattempt: 0,
      block: 'N',
      block_date: null,
      date_str: 'd-M-Y',
      time_str: 'H:i:s',
      subscribe: '0',
      id: 40,
      org_name: 'Zimyo Demo mohit',
      org_address: 'Ashok Nagar',
      org_city_id: 1095,
      org_state_id: 177,
      org_country_id: 101,
      active_country_id: 101,
      payroll_status: 1,
      org_type_id: 1,
      org_logo:
        'https://demo-hrms.zimyo.com/uploads/organization/162021_12_14_061614_LogoFinal.jpg',
      ng_date_str: 'dd-MMM-y',
      ng_time_str: 'HH:mm:ss',
      LAT: 0,
      LNG: 0,
      fin_year: 1,
      web_clock: true,
      auto_clock: false,
      new_payroll_status: 1,
      regularize_whithin: 31,
      expire_duration: 0,
      roles: [
        {
          ROLE_ID: 1,
          ROLE_NAME: 'Super Admin',
        },
        {
          ROLE_ID: 2,
          ROLE_NAME: 'Organizations',
        },
        {
          ROLE_ID: 4,
          ROLE_NAME: 'PMS Admin',
        },
        {
          ROLE_ID: 5,
          ROLE_NAME: 'ATS Admin',
        },
        {
          ROLE_ID: 7,
          ROLE_NAME: 'Employee',
        },
        {
          ROLE_ID: 8,
          ROLE_NAME: 'HR Admin',
        },
        {
          ROLE_ID: 12,
          ROLE_NAME: 'Hiring Manager',
        },
      ],
      role_ids: [1, 2, 4, 5, 7, 8, 12],
      PMS: 1,
      IS_ACTIVE_ATS: 1,
      employee_id: 37,
      user_emp_id: 37,
      entity_id: 16,
      emp_id: '1',
      emp_name: 'Devteam',
      email_id: 'devteam@zimyo.com',
      department: 148,
      designation: 189,
      location: 14,
      shift: 15,
      business_unit: null,
      roster_status: 0,
      bussiness_code: null,
      user_status: 0,
      reporting_emp_id: 37,
      joining_date: '2020-11-11',
      marital_status: 0,
      mobile_no: '9999999999',
      gender: 'Male',
      date_of_birth: null,
      leave_rule: 16,
      anniversary_date: null,
      department_name: 'HR',
      designation_name: 'Manager',
      location_name: 'Gurgaon',
      status: 2,
      DOJ: '11-Nov-2020',
      anv_date: null,
      dob: '',
      is_team_lead: true,
      about: '',
      org_locations_lat_lng: [],
      login_redirect: 'ats',
      subs: {
        app_ids: [1, 2, 3, 4, 6, 7, 8, 9, 10],
        end_date: '2022-12-11',
        message: '',
        force_make_payment: false,
      },
      PREFERENCES: [
        {
          APP_ID: 7,
          PREFERENCE_NAME: 'jdc_view',
          PREFERENCE_VALUE: 'list',
        },
      ],
      PURCHASED_LANGUAGE: '',
      ZIP_CODE: '',
      IN_REVIEW: '[2, 65, 99, 35]',
      INTERVIEW: '[9, 10, 83, 93, 11]',
      JOBS_PREFIX: 'AAB',
      offer_approval: 0,
      approved_by: null,
      OFFERED: '[36, 16, 81]',
      JOB_REAPPLY_DAYS: 0,
      NAUKRI_ACCESS_KEY: '533767',
      NAUKRI_SECRET_KEY: 'Zi9kkCfcLo5$vJf8gS9R(rEAMWYtha$6',
      NAUKRI_JOBPOST_STATUS: null,
      JOBS_ID: '10314-0',
      checkk: 'deep',
      color_code: '#043553',
      ORG_EMAIL: 'Satyam.kumar@yopmail.com',
      NOTIFY_INTERNALLY: 1,
      SENDER_NAME: 'Satyam technologies',
      template_type: 'c',
      ORG_EMAIL2: null,
      SENDER: null,
      RATING_SCALE: 6,
      RATING_TYPE: 1,
      SKILL_CARD: 1,
      WRKY_USERNAME: 'rajat.Uppal@zimyo.com',
      WRKY_PASSWORD: 'rajat@zimyo123',
      SENSELOAF_STATUS: 0,
      SENSELOAF_PARSING_STATUS: 0,
      SENSELOAF_PARSING_COUNT: 7,
      SENSELOAF_MATCH_COUNT: 0,
      V2_LOGIN: 1,
      IS_BLOCK: 0,
      IS_ACTIVE: 1,
      org_contact_no: '2222222222',
      IS_ORG_BLOCKED: 0,
      v2_login: 1,
      PRODUCT_THEME_COLOR: '#ffbe00',
      is_dummy: 0,
      ent_country_id: 101,
      device: 'Web',
      usr_ip: '49.36.223.143',
    };

    next();
}

const ACLResponse = (auth, callback) => {
callback(false, { allJobsVisibility: false, allCandidatesVisibility: true });
}

module.exports = {verify, ACLResponse};