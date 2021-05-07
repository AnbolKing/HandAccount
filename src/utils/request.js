import axios from 'axios';

/**
 * axios base config
 */
axios.defaults.timeout = 1000;
axios.defaults.headers.post['Content-Type'] = 'application/json';

/**
 * axios - get request
 * @param {string} url 
 * @param {object} params 
 * @returns {Promise}
 */
export const get = (url, params={}) => {
  return new Promise((resolve, reject) => {
    axios.get(url, params).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}

/**
 * axios - post request
 * @param {string} url 
 * @param {object} params 
 * @param {object} options
 * @returns {Promise}
 */
export default post = (url, data, options) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data, {
      ...options,
    }).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}