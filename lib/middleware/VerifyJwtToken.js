// /**
//  * @todo configuaration for no auth APIs
//  * @param {*} req 
//  * @param {*} res 
//  * @param {*} next 
//  */
// module.exports = async (req, res, next) => {
//   try {
//     req.auth = null;
//     const { token: jwtToken } = req.headers;
//     if(jwtToken) {
//       if (!jwtToken) {
//         throw new Error('Unauthorized access.');
//       } else if (req_action === 'login') {
//         session.validate(req, jwtToken, function (response) {
//           if (response.error) {
//             throw new Error(response.message);
//           } else {
//             next();
//           }
//         });
//       } else {
//         req.auth = await usr.authenticate(req, token, false);
//         if (!req.auth) {
//           throw new Error('Unauthorized access.');
//         }
//         next();
//       }
//     }
//   } catch (err) {
//     req.forceLogin = true;
//     next(err);
//   }
// };
