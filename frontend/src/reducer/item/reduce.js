import {ADD_ITEM, DELETE_ITEM, ITEM_TO_LIST, LOADING_ITEM, UPDATE_ITEM} from './action'

export var initialState={}


export default function reduce(state=initialState,action){
     
     switch(action.type)
     {
          case ADD_ITEM:
          return [...state,action.payload]

          case DELETE_ITEM:
               return state.filter((e)=>
                    e._id!==action.payload    
                   )

          case UPDATE_ITEM:
          return state.map((e)=>{
               if(e._id===action.payload._id)
                   {
                    return action.payload
                    }
               else return e
              })
          case ITEM_TO_LIST:
               return action.payload
          case LOADING_ITEM:
               return action.payload
          default:
          return state
     }
}

