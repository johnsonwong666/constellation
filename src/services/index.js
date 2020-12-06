import { getData } from "./request";
export default async (store) => {
  const consName = store.state.consName
  const type = store.state.type
  const data = await getData(consName, type)
  if(data.error_code){
    store.commit('setErrorCode', data.errorCode)
    return
  }
  store.commit('setData', data)
}
