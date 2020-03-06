/* DEFAULT CONNECTION */

const URL = 'http://localhost:3000'

const register = (payload) => {
    return $.ajax({
        type: 'POST',
        data: {
            email: payload.email,
            password: payload.password
        },
        url: `${URL}/register`,
    })
}

const login = (payload) => {
    return $.ajax({
        type: 'POST',
        data: {
            email: payload.email,
            password: payload.password
        },
        url: `${URL}/login`
    })
}

const fetchCookingPlans = () => {
    return $.ajax({
        type: 'GET',
        headers: {
            token: localStorage.getItem('token')
        },
        url: `${URL}/cookplans`
    })
}

const addCookingPlans = (payload) => {
    return $.ajax({
        type: 'POST',
        headers: {
            token: localStorage.getItem('token')
        },
        url: `${URL}/cookplans`,
        data: {
            name: payload.name,
            goal: payload.goal,
            cooking_date: payload.cooking_date
        }
    })
}

const logOut = () => {
    return localStorage.removeItem('token')
}

// if using google

const logOut = () => {
    let auth2 = gapi.auth2.getAuthInstance();
    auth2.logOut.then(() => {
        localStorage.removeItem('token');
    })
}
