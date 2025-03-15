import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.headers.common["key"] = '49331569-d75c2214014d7ff2c794993e6';
const params = {
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
}

function searhRequest(searchData) {
    params.q = searchData;
    return axios.get('', { params });
}

