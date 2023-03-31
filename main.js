// const axios = require('axios');

// //Make a request
// axios.get('https://catfact.ninja/facts')
// .then(function (response) {
//     // handle success
//     console.log(response)
//     console.log(response.data)
//     console.log('# of facts:',response.data.total);
// })
// .catch(function (error) {
//     // handle error
//     console.log(error);
// })
// .finally(function () {
//     // always executed
    
// })

// async function getNumberOfFollowers() {

//     let res = await axios.get('https://api.github.com/users/TwisterDK');
  
//     let nOfFollowers = res.data.followers;
//     let location = res.data.location;
//     let name = res.data.name;
  
//     console.log(`# of followers: ${nOfFollowers}`)
//     console.log(`Location: ${location}`)
//     console.log(`Name: ${name}`)
//   }
  
//   getNumberOfFollowers();

require('dotenv').config()

  var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'http://distribution.virk.dk/cvr-permanent/virksomhed/_search',
  params: {q: 'Vrvirksomhed.cvrNummer:31596106'},
  headers: {
    Accept: '*/*',
    Authorization: `Basic ${process.env.CVR_ENCODEDTOKEN}`
  }
};

axios.request(options).then(function (response) {
  console.log(response.data.hits.hits);
}).catch(function (error) {
  console.error(error);
});
  