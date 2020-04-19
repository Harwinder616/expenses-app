const request=require('request')
const csv=require('csvtojson')
 
// csv()
// .fromStream(request.get('https://firebasestorage.googleapis.com/v0/b/hactathon2019.appspot.com/o/files%2Fmorning.csv?alt=media&token=6877e623-d681-4b2c-ab6a-20a9fc9cb4a0'))
// .subscribe((json)=>{
//     return new Promise((resolve,reject)=>{
//         console.log(json)
//     })
// },onError,onComplete);
request('https://firebasestorage.googleapis.com/v0/b/hactathon2019.appspot.com/o/files%2Fmorning.csv?alt=media&token=6877e623-d681-4b2c-ab6a-20a9fc9cb4a0', function (error, response, body) {
  
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});