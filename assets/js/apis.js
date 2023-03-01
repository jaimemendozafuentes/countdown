const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://50k-radio-stations.p.rapidapi.com/get/genres',
  params: {keyword: 'music'},
  headers: {
    'X-RapidAPI-Key': '4420dcef09msh5c6702642303b8bp1be41cjsn53dfe9dd9481',
    'X-RapidAPI-Host': '50k-radio-stations.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
