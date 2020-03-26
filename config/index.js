require('dotenv').config();

module.exports = (printValues=false) => {
    let env_values = {
        PORT: process.env.PORT || 3000,
        NODE_ENV: process.env.NODE_ENV || 'development',    
        CONNECTION_STRING_TEST: process.env.CONNECTION_STRING_TEST,
        CONNECTION_STRING_DEVELOPMENT: process.env.CONNECTION_STRING_DEVELOPMENT
    }
    printValues && console.log('env values', env_values);
    return env_values;
};