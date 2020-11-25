const axios = require('axios');

const getSupplements = () => {
  return axios.get('http://localhost:9000/supplementals')
    .then((data) => data.data)
    .catch((err) => console.log('Problem fetching supplementals: ', err));
}

const getPreworkouts = () => {
  return axios.get('http://localhost:9000/preworkouts')
    .then((data) => data.data)
    .catch((err) => console.log('Problem fetching preworkouts: ', err));
}

const getPostworkouts = () => {
  return axios.get('http://localhost:9000/postworkouts')
    .then((data) => data.data)
    .catch((err) => console.log('Problem fetching postworkouts: ', err));
}

module.exports = { getPostworkouts, getPreworkouts, getSupplements };
