import { DECREASE, INCREASE, RESET } from "./ActionType"

export const increase=(payload)=>{
    return{
        type:INCREASE,
        payload:payload
    }
}

export const decrease=()=>{
    return{
        type:DECREASE
    }
}

export const reset=()=>{
    return{
        type:RESET
    }
}