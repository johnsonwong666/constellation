import axios from 'axios'


function axiosGet(options){
  axios(`${options.url}&key=1d74cd347b169ba4422176ad1350f3b2`)
  .then((res) => {
    options.success(res.data)
  })
  .catch(err => {
    options.error(err)
  }) 
}


export {
  axiosGet
}