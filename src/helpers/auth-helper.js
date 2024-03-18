/* função para gravar dados na LOCAL STORAGE do navegador */ 

export const signIn = (data) => {
    localStorage.setItem(
        'USER_AUTH',
        JSON.stringify(data)
    );
}


/* FUNÇÃO PARA RETORNOR DADOS GRAVADOS NA LOCAL STORAGE */

export const getNomeUsuario = () => {
    return JSON.parse(localStorage.getItem('USER_AUTH')).nome;
}

export const getAccessToken = () => {
    return JSON.parse(localStorage.getItem('USER_AUTH')).accessToken;
}

export const getAccessPerfil = () => {
    return JSON.parse(localStorage.getItem('USER_AUTH')).perfilEnum;
}


/* FUNÇÃO PARA APAGAR O CONTEÚDO GRAVADO NA LOCAL STORAGE */

export const signOut = () => {
    return localStorage.removeItem('USER_AUTH');
}

/* VERIFICAR SE ESTA LOGADO */

export const isLoggedIn = () => {
    return localStorage.getItem('USER_AUTH') != null;
}
