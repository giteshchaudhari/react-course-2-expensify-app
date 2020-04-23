import  firebase from 'firebase/app';
import 'firebase/database'

const firebaseConfig = {
    apiKey:process.env.FIREBASE_API_KEY,
    authDomain:process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL:process.env.FIREBASE_DATABASE_URL,
    projectId:process.env.FIREBASE_PROJECT_ID,
    storageBucket:process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId:process.env.FIREBASE_MESSAGING_SENDER_ID,
  };

firebase.initializeApp(firebaseConfig);
const database=firebase.database(); 

export {firebase,database as default};




















// database.ref('expenses').on('child_removed',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val())
// })


// database.ref('expenses').on('child_changed',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val())
// })

// database.ref('expenses').push({
//     description:'first',
//     note:' ',
//     amount:234,
//     createdAt:23243
// })
// database.ref('expenses').on('child_added',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val())
// })

// database.ref('expenses')
//         .once('value')
//         .then((snapshot)=>{
//             const expenses=[];

//             snapshot.forEach((childsnapshot)=>{
//                 expenses.push({
//                     id:childsnapshot.key,
//                     ...childsnapshot.val()
//                 })
//             })
//             console.log(expenses);
//  })


// // //  database.ref('expenses')
// // //         .on('value',(snapshot)=>{
// // //         const expenses=[];

// // //         snapshot.forEach((childsnapshot)=>{
// // //             expenses.push({
// // //                 id:childsnapshot.key,
// // //                 ...childsnapshot.val()
// // //             })
// // //      })
// // //         console.log(expenses);
// // //  })




// database.ref('notes/-M5Wuw8ot60LxT97_CPG').remove()



// database.ref('notes').push({
//     title:'coures',
//     body:'firebase'
// })



// database.ref().set({
//       name:'Gitesh',
//       age:34,
//       job:"software developer",
//       location:{
//           city:'bhusawal',
//           country:'Indiapakistan',
//       }
// }).then(()=>{
//     console.log('Data is saved')
// }).catch((error)=>{ 
//     console.log("error: ",error)
// })

// database.ref().on('value',(snapshot)=>{
//         const val=snapshot.val()
//         console.log(`${val.name} is a ${val.job} at ${val.location.city}`)
// })
// const onchange=database.ref().on('value',(snapshot)=>{
//     console.log(snapshot.val())
// })

// setTimeout(()=>{
//     database.ref('age').set(35)
// },3000)


// setTimeout(()=>{
//     database.ref().off(onchange);
// },6000)


// setTimeout(()=>{
//     database.ref('age').set(36)
// },9000)


// database.ref()
//     .once('value')
//     .then((snapshot)=>{
//         const val=snapshot.val();
//         console.log(val);
//     })
//     .catch((e)=>{
//         console.log("error :", e)
//     })

// database.ref().update({
//     job:'teacher',
//     'location/city':'jalgaon'
// })
// database.ref().remove().then(()=>{
//     console.log("data is removed")
// }).catch((e)=>{
//     console.log("erroe : ",e)
// })
// database.ref().set(null)
// database.ref('age').set(100)
// database.ref('location/city').set('jalgaon')

// database.ref('attribute').set({
//     weight:"75kg",
//     height:167 
// }).then(()=>{
//     console.log('Data is saved')
// }).catch((error)=>{ 
//     console.log("error: ",error)
// })
// database.ref().set(null)