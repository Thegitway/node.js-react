import { LOADING } from "./action"

export var initialState={}


export default function reduce(state=initialState,action){
     
     switch(action.type)
     {
         case LOADING:
             return action.payload
              default:
                   return state
     }
}

