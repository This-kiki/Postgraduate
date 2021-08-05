import store from '../store/index.js'


const common = {
  getToken() {
    store.commit('setToken',{
      token:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJ3dXN0aGVscGVyIiwic3R1TnVtIjoiMjAxODEzMTM3MDMxIiwiaXNzIjoibGhzdHVkaW8iLCJpYXQiOjE2MTI0Mjk4MTd9.GEuObq5GB4QzegDZXAaXqXQZgRqr59J6Esq-9-XcTzE',
    })
  
    http.setservice()
  }
};
export default common;