import axios from "axios";
import * as config from '../config/api-config';

const authData  = JSON.parse(localStorage.getItem('USER_AUTH'));
const authToken = authData == null ? null : authData.accessToken
axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`

// export const postCadastrarBlob = (data) => {
//     return axios.post('http://localhost:5170/api/cursos', data)
//         .then(
//         response => { return response.data; }
//     )
// }

// export const getBlobs = (data) => {
//     return axios.get('http://localhost:5170/api/cursos', data)
//         .then(
//             response => { return response.data; }
//         )
// }
// export const getNoticiaId = (id) => {
//     return axios.get (`http://localhost:5170/api/cursos/${id}` )
//     .then(
//         response =>{
//             return response.data;
//         }
//     )
// }
export const postCadastrarBlob = (data) => {
    return axios.post(config.getApiUrl() + '/cadastrarCursos', data)
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
    return axios.post(config.getApiUrl() +'/Matriculas/VerificarMatricula', data)
        .then(
            response => { return response.data; }
        )
}
export const getAlunosPorCurso = (id) => {
    return axios.get (config.getApiUrl() +`/Matriculas/BuscarMatriculaPorCurso/${id}` )
    .then(
        response =>{
            return response.data;
        }
    )
}
export const cadastrarNota = (data) => {
    return axios.put(config.getApiUrl() + '/Matriculas', data)
    .then(
        response =>{
            return response.data;
        }
    )
}
export const getHistorico = (id) => {
    return axios.get (config.getApiUrl() +`/Matriculas/BuscarMatriculaPorAluno/${id}` )
    .then(
        response =>{
            return response.data;
        }
    )
}


export const matricularAluno = (data) => {
    return axios.post(config.getApiUrl() +'/MatricularAluno', data)
        .then(
            response => { return response.data; }
        )
}


// export const verificaMatricula = (data) => {
//     return axios.post('http://localhost:5166/api/Matriculas/VerificarMatricula', data)
//         .then(
//             response => { return response.data; }
//         )
// }
// export const getAlunosPorCurso = (id) => {
//     return axios.get (`http://localhost:5166/api/Matriculas/BuscarMatriculaPorCurso/${id}` )
//     .then(
//         response =>{
//             return response.data;
//         }
//     )
// }
// export const cadastrarNota = (data) => {
//     return axios.put('http://localhost:5166/api/Matriculas' , data)
//     .then(
//         response =>{
//             return response.data;
//         }
//     )
// }
// export const getHistorico = (id) => {
//     return axios.get (`http://localhost:5166/api/Matriculas/BuscarMatriculaPorAluno/${id}` )
//     .then(
//         response =>{
//             return response.data;
//         }
//     )
// }


// export const matricularAluno = (data) => {
//     return axios.post('http://localhost:5166/api/Matriculas', data)
//         .then(
//             response => { return response.data; }
//         )
// }


