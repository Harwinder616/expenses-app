

import * as firebase from 'firebase';
import sagar from '../comp/sagar';
import moment from 'moment'
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyDBzzUviKY0zFcAr4bbT3YOb5WnsOjCDCQ",
  authDomain: "expensify-app-70c94.firebaseapp.com",
  databaseURL: "https://expensify-app-70c94.firebaseio.com",
  projectId: "expensify-app-70c94",
  storageBucket: "",
  messagingSenderId: "809057229787",
  appId: "1:809057229787:web:1a2b10061aafc410"
};
// Initialize Firebase                                                      
firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

  firebase.database().ref('expenses').on('value',(snapshot)=>{
    const expenses=[];
    snapshot.forEach((child)=>{
      expenses.push({
        id:child.key,
        ...child.val()
      })

    })
    console.log(expenses);
  })



firebase.database().ref('expenses/-LjfAQGmFIP0kxQtPvX7').remove()


  
 firebase.database().ref().set({name:'harwinder',
age:26,
job:{title:'software-manager',
company:'amazon'

},
location:{city:'mukerian',
    village:'trs'

}

}).then(()=>{
    console.log('data is saved!')
}).catch((error)=>{
    console.log('error:',error)
})
firebase.database().ref('age').set(28);
firebase.database().ref('location/city').set('tanda');

firebase.database().ref('attributes').set({
    height:'6.2 inches',
    weight:96
}).then(()=>{
    console.log('data!')
}).catch((error)=>{
    console.log('error is:',error)
});
firebase.database().ref().update({
  age:39,
  'job/company':'google'

})

firebase.database().ref('age')
.remove()
  .then(function() {
    console.log("Remove succeeded.")
  })
  .catch(function(error) {
    console.log("Remove failed: " + error.message)
  });