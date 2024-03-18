import axios from "axios";
import * as config from '../config/api-config';

const authData  = JSON.parse(localStorage.getItem('USER_AUTH'));
const authToken = authData == null ? null : authData.accessToken
axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`

export const postCadastrarBlob = (data) => {
    return axios.post(config.getApiUrl() + '/cursos', data)
        .then(
        response => { return response.data; }
    )
}

export const getBlobs = (data) => {
    return axios.get(config.getApiUrl() + '/cursos', data)
        .then(
            response => { return response.data; }
        )
}
export const getNoticiaId = (id) => {
    return axios.get (config.getApiUrl() + `/cursos/${id}` )
    .then(
        response =>{
            return response.data;
        }
    )
}

export const verificaMatricula = (data) => {
    return axios.post(config.getApiUrl() +'/VerificarMatricula', data)
        .then(
            response => { return response.data; }
        )
}
export const getAlunosPorCurso = (id) => {
    return axios.get (config.getApiUrl() +`/BuscarMatriculaPorCurso/${id}` )
    .then(
        response =>{
            return response.data;
        }
    )
}
export const cadastrarNota = (data) => {
    return axios.put(config.getApiUrl() , data)
    .then(
        response =>{
            return response.data;
        }
    )
}
export const getHistorico = (id) => {
    return axios.get (config.getApiUrl() +`/BuscarMatriculaPorAluno/${id}` )
    .then(
        response =>{
            return response.data;
        }
    )
}


export const matricularAluno = (data) => {
    return axios.post(config.getApiUrl() +'/PreMatricula', data)
        .then(
            response => { return response.data; }
        )
}





// export const getNoticiaId = (id,data) => {
//     return axios.get(config.getApiUrl() + '/Noticias' +id  , data)
//         .then(
//             response => { return response.data; }
//         )
//     }



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

