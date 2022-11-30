import axios from "axios";

const textToAudioApi = axios.create(
    {
        baseURL: "https://ttsmp3.com"
    }
);

export default textToAudioApi;