import axios from 'axios';


const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    const apiUrl = "https://mud-test-ag.herokuapp.com"

    return axios.create({
        baseURL: apiUrl,
        headers: {
            "Content-Type": "application/json",
            ["X-CSRFToken"]: token
        }
    });
};

export default axiosWithAuth;