import axios from 'axios';

const URL_API = "https://phongallpostapi.herokuapp.com/api/post";

const URL_API_LOGIN = "http://localhost:3000/users/login";

const URL_API_SIGNUP = "http://localhost:3000/signup";

const URL_API_GET_BOOK = "http://localhost:3000/books";

const URL_API_CATEGORY_POST = "https://phongallpostapi.herokuapp.com/api/category/";

const URL_API_COUNT = "https://phongallpostapi.herokuapp.com/api/countPost";



export async function getPostFromAPI(authorization) {
    const respones = await axios ({
        method: 'GET',
        url: URL_API_GET_BOOK,
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${authorization}`
        }
    });
    return respones;
    
}

export async function getTotalPostFromAPI() {
    const respones = await axios.get(URL_API_COUNT);
    return respones;
}


export async function getCategoryPostFromAPI(category) {
    const respones = await axios.get(URL_API_CATEGORY_POST + category);
    return respones;
}

// export async function getSpecificPostFromAPI(id) {
//     const respones = await axios.get(URL_API_SPECIFIC_POST + id);
//     return respones;
// }

export async function authLoginAPI(dataAuth) {
    
    const status = await axios({
        method: 'POST',
        url: URL_API_LOGIN,
        headers: {
            'content-type': 'application/json'
        },
        data: JSON.stringify(dataAuth)
    });

    return status;
}


export async function authSignUpAPI(dataAuth) {

    const status = await axios({
        method: 'POST',
        url: URL_API_SIGNUP,
        headers: {
            'content-type': 'application/json'
        },
        data: JSON.stringify(dataAuth)
    });

    return status;
}