import axios from 'axios';


const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    const apiUrl = "tbd"

    return axios.create({
        baseURL: apiUrl,
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        }
    });
};

export default axiosWithAuth;