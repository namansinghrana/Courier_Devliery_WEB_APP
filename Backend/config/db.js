const mongoose = require('mongoose');


// Set the strictQuery option
mongoose.set('strictQuery', false);  // or true, depending on your preference

const connectWithDB = () => {
  mongoose.connect("mongodb+srv://SolidSnake:rxzBaKUHHQ3xOz6p@cluster0.cnem5hz.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, 
  })
    .then(() => {
      console.log('DB connected');
    })
    .catch((error) => {
      console.log('DB Error');
      console.log(error);
      process.exit(1);
    });
};

module.exports = connectWithDB;
