class Util {
    static formatResponse(error, message, data){
        return {
            error: !!error,
            message: message || error.message || 'Unexpected Error Occured!',
            data: error ? {} : data,
        };
    }
};

module.exports = Util;