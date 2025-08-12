const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../cloudinary');

const storage = new CloudinaryStorage({
  cloudinary,
  params: async () => ({
    folder: 'edzest/events',
    resource_type: 'image',
    allowed_formats: ['jpg','jpeg','png','webp'],
    transformation: [{ quality: 'auto' }, { fetch_format: 'auto' }],
  }),
});

module.exports = multer({ storage });
