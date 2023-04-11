import axios from 'axios'

/*
    > Script criado em package.json para rodar o json-server localmente
    > Rodar API utilizando o comando 'npm run start-jserver' no terminal
*/

const api = axios.create({
    baseURL: 'http://192.168.0.12:3000'
})

export default api