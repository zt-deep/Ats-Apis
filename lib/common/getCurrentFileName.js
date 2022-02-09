const getCurrentFileName = (fileName) => {
    // const fileNameArray =
    //   fileName.indexOf('\\') > -1 ? fileName.split('\\') : fileName.split('/');
    // return fileNameArray.length > 0 ? fileNameArray.slice(fileNameArray.length - 2, fileNameArray.length).join('/') : '';
    return fileName;
}

module.exports = { getCurrentFileName }