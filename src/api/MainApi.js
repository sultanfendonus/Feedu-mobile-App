import axios from 'axios'

export default axios.create({
    baseURL : 'http://192.168.31.35:3050/api'
})