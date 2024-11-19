
require('dotenv').config();

module.exports = {
    mongourl: process.env.MONGO_URL,
    Jwt_secret: process.env.JWT_SECRET,
};
