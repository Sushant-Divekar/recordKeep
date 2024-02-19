

const mongoose=require('mongoose')

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/recordkeepnow').then(()=>console.log("connect to db"))
    // await mongoose.connect('mongodb+srv://sushantdivekar:w944tOH3NaHEFsqu@cluster0.oygpxse.mongodb.net/recordkeepnow?retryWrites=true&w=majority')
    //w944tOH3NaHEFsqu
    
}

module.exports=main