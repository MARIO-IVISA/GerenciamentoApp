import axios from "axios";
import * as config from '../config/api-config';


// const headers = {
//     'headers': {
//       'Content-Type': 'application/json'
//     }
//   }

export const postLogin = (data) => {
    return axios.post(
        config.getApiUrl() + '/login',
        data
    ).then(
        response => {
            return response.data;
        }
    )
}

export const postUsuario = (data) => {
    return axios.post(config.getApiUrl() + '/cadastro', data)
        .then(
            response => { return response.data; }
        )
}

export const getUsuario = (data) => {
    return axios.get(config.getApiUrl() + '/Usuarios', data)
        .then(
            response => { return response.data; }
        )
}




// export const postBlobs(formData) => {
//     return axios.post(config.getApiUrl() + '/Blobs/', formData, {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//     },
//   })} ;


// export async function postBlobs(formData) {
//   try {
//     const response = await axios.post(config.getApiUrl() + '/Blobs/', formData, headers) 
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// }

