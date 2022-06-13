import  mongoose from 'mongoose'


export const ItemsSchema= new mongoose.Schema({
     name:{type:String, required:true},
     stock:{type:Number, default:0},
     price:{type:Number, required:true},
     imageId:{type: mongoose.Schema.Types.ObjectId, ref: 'Images'},
},{timestamps:true})

export default mongoose.model('Items',ItemsSchema)