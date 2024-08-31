const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("connected")
}).catch(()=>{
    console.log("error");
})