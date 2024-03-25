import axios from "axios";

const axiosInstance = axios.create({
	// baseURL: "https://idealibs.cyclic.app",
	baseURL: "https://8cc2-182-2-78-196.ngrok-free.app",
	headers: {
		"Content-Type": "application/json",
		"ngrok-skip-browser-warning": "64920",
	},
});

export default axiosInstance;
