import axios from "axios";

const axiosInstance = axios.create({
	// baseURL: "https://idealibs.cyclic.app",
	baseURL: "https://9690-36-73-33-105.ngrok-free.app",
	headers: {
		"Content-Type": "application/json",
	},
});

export default axiosInstance;
