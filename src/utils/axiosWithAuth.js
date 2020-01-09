import axios from 'axios';


const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    // const apiUrl = process.env.DB_URL
    const apiUrl = 'https://mud-test-ag.herokuapp.com'

    return axios.create({
        baseURL: apiUrl,
        headers: {
            "Content-Type": "application/json",
            ['X-CSFRToken']: `token`
        }
    });
};

export default axiosWithAuth;