const mongoose = require('mongoose');

const connectDB = async () => {

    try {
        await mongoose.connect("mongodb://localhost:27017/ayman", 
            //useNewUrlParser: true,
           // useUnifiedTopology: true,
           // useFindAndModify: false,
           // useCreateIndex: true // Pour éviter les avertissements de dépréciation liés à ensureIndex()
        );
        console.log("MongoDB connecté avec succès");
    } catch (err) {
        console.error("Erreur de connexion à MongoDB:", err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
