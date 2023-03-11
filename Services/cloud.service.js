const cloudinary = require('cloudinary').v2;
const imageDataURI = require('image-data-uri');

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
  });


 module.exports = async function cloudImage(file){

    const base64Uri = imageDataURI.encode(file.buffer,file.mimetype)

    return await cloudinary.uploader.upload(base64Uri,{
      folder:file.fieldname
    })

  }

 


