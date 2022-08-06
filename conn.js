const mongoose = require("mongoose");
const DB = "mongodb://localhost:27017/database"

mongoose.connect(DB, {
    // useCreateIndex: true,
    // useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
    
}).then(() => {
    console.log("connected start")
}).catch((error) => {
    console.log(error.message);
})