import axios from "axios";
export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID NnNPWmdhy1P8XFzlSNQYgmCa-ioqRp0rc_59S1Mh-dQ",
    },
});