const mongoose=require('mongoose');
let Schema=mongoose.Schema;
let videoSchema=new Schema({
	id:{ type: Number, unique: true },
	title:{ type: String, unique: true },
	length:Number,
	category:String,
	format:String
})
module.exports=mongoose.model('video',videoSchema)
