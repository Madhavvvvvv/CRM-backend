
const mongoose = require('mongoose');

const connection = async (userName,password) =>{

    const URL =`mongodb+srv://madhav:madhav@cluster0.5ezvmkq.mongodb.net/`
    console.log("Database connected successfully");
    try {

     await   mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser:true})
        
    } catch (error) {
        console.log('Error while connecting the database',error);
    }
}

module.exports = connection