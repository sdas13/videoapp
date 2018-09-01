const mongoose=require('mongoose');
let Schema=mongoose.Schema;
let videoSchema=new Schema({
	Id:{ type: Number, unique: true },
	Title:{ type: String, unique: true },
	Length:Number,
	Category:String,
	Format:String
})
module.exports=mongoose.model('video',videoSchema)
