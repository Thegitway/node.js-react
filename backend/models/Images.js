import  mongoose from 'mongoose'

export const ImageSchema= new mongoose.Schema({
     byte: {
          type: String,
          required: true,
          set: (val) => {
            if (typeof val === "string") {
              const rawBase64 = val.replace(/data:image\/\w+;base64,/, "");
              return rawBase64
            }
            return val;
          },
     },
     mimeType:String,
     name:String
},{timestamps:true})


export default mongoose.model('Images',ImageSchema)