import axios from "axios";

const authEndpoint = process.env.REACT_APP_AUTHENDPOINT;
const clientId = process.env.REACT_APP_CLIENID;
const redirectUrl = process.env.REACT_APP_REDIRECTURL;

const scope = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
   "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
   baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
   apiClient.interceptors.request.use(async function (config) {
      config.headers.Authorization = "Bearer " + token;
      return config;
   });
};

export default apiClient;
