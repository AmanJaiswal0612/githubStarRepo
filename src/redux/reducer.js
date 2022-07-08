import { ADDREPO, ADDTIME } from "./action"




const initialState= {
    repo:[],
    time:0
}



export default (state = initialState, { type, payload }) => {
  switch (type) {

  case ADDREPO:
    return { ...state, repo:[...state.repo,...payload]}
  case ADDTIME:
    return {...state,time:payload}
  default:
    return state
  }
}
