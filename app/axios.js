import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "https://idealibs.cyclic.app",
	headers: {
		"Content-Type": "application/json",
	},
});

export default axiosInstance;
