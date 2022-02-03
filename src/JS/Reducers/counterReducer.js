import {
  TOGGLE,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  RESET_COUNTER,
  ADD_TEXT
} from "../ActionTypes/constantsCounter";
const initialState = {
  texts:[]
};

/*
-->incre
state={
    isVisible: false,
  counter:1
}

-->incre
state={
    isVisible: false,
  counter:2
}

-->decre
{
    isVisible: false,
  counter:1
}

*/
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE:
      return { ...state, isVisible: !state.isVisible };
    case INCREMENT_COUNTER:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT_COUNTER:
      return { ...state, counter: state.counter - 1 };
      case RESET_COUNTER:
      return { ...state, counter: 0 };
      case ADD_TEXT:
        return { ...state,texts:[...state.texts,{desc:action.payload,id:state.texts.length}] };
    default:
      return state;
  }
};
