const express = require('express')
const app = express()
const axios = require('axios')
const port = 4000
// const BASE_URL = 'http://localhost:3000/'
// const API_KEY = '1426a505e16a448f8ca7400f53810a11' Local machine API key
const BASE_URL = 'https://scalefusion.com/'
const API_KEY = 'Scalefusion_DEV_API_KEY'

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  axios({
    method: 'GET',
    url: BASE_URL + 'api/v1/devices.json',
    headers: {
      Authorization: 'Token ' + API_KEY
    },
    timeout: 10000
  }).then(function (response) {
    console.log('Total Devices:', response.data.total_count);
    res.render('devices', { devices : response.data.devices });
  }).catch(function(error) {
    res.send('Could not fetch the Data from API')
    console.log(error);
  })
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})