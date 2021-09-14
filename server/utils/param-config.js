const { v4: uuidv4 } = require('uuid');

const params = fileName => {
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];
  
    const imageParams = {
      Bucket: 'user-images-d1959b8f-9f8c-4e85-8e98-220ea1fe1013',
      Key: `${uuidv4()}.${fileType}`,
      Body: fileName.buffer
    };
  
    return imageParams;
  };

  module.exports = params;