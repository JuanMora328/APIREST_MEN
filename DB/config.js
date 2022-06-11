const mongoose = require('mongoose');
const DBURL = 'mongodb+srv://admin:oNYg2qDSGmrDscgQ@services.noiek.mongodb.net/equipos';
const dbConnection = () => {

    try {
        
        mongoose.connect(DBURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            
        });

        console.log('DB ONLINE');

    } catch (error) {
        console.log(error);
        throw new Error('Error en el momento de iniciar la BD');
    }

}

module.exports = {
    dbConnection
}