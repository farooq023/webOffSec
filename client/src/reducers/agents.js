
import {LOAD_AGENTS} from '../actions/types'

const initialState={isAgents:false};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action){
    const { type, payload } = action;
  switch (type) {
    case LOAD_AGENTS:
      return { ...state, agents:payload,isAgents:true};
    default:
        return state;
  }
}

















