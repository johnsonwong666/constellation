export default {
  setConsName(state, consName){
    state.consName = consName
  },
  setType(state, type){
    state.type = type
  },
  setErrorCode(state, errorCode){
    state.errorCode = errorCode
  },
  setData(state, data){
    state[state.type] = data
  }
}