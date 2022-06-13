import  mongoose from 'mongoose'
const db='CrudApp'

export default mongoose.connect(`mongodb+srv://omar:OUKIL@crudapp.obqqh.mongodb.net/${db}?retryWrites=true&w=majority`,(e)=>{
     if(e)
     console.log(e?.message)
     else
     console.log(`connected to ${db} db `)
});

