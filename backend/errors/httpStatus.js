export const success = {'success':true,'status':200}

export const notFound=(str='Entity')=> {return {'success':false,'status':404,'message':`${str} not found`}}

export const badRequest={'success':false,'status':400,'message':'Bad request'}


export const idMissing=(field='_id')=>{return {'success':false,status:400,'message':`the field ${field} must be provided`}}

export const created=(data={},str='Object')=>{return {
     'success':true,status:201,'message':`${str} created`,data:data}}

export const found=(data={},str='',leng=0)=>{return {
     'success':true,status:200,message:`got ${leng} ${str}`,'data':data
}}

export const notUUID=(field='_id')=>{return {
          'success':false,status:404,'message':`the ${field} provided is incorrect`}}

export const updated=(data={},str='')=>{return { 
               'success':true, status:200,'message':`${str} updated`,data:data}}
export const deleted=(data,leng=0)=>{
     return {status:200,message:`${leng} item deleted`,
     data:data}
}