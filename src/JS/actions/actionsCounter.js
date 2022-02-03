import {TOGGLE,INCREMENT_COUNTER,ADD_TEXT,DECREMENT_COUNTER,RESET_COUNTER} from "../ActionTypes/constantsCounter"


export const toggle=()=>{
    return {type:TOGGLE}
}

export const Increment=()=>{
    return {type:INCREMENT_COUNTER}
}

export const Decrement=()=>{
    return {type:DECREMENT_COUNTER}
}

export const Reset=()=>{
    return {type:RESET_COUNTER}
}

export const addText=(input)=>{
    return {type:ADD_TEXT,payload:input}
}