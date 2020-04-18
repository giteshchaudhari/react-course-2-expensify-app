// const person={
//    name:"andrew", 
//     age:34,
//     location:{
//         city:'bhusawal',
//         temp:92
//     }
// }
// const {name:r='ano',age}=person;
// console.log(`${r} is ${age}`)
// const {temp:t,city:f}=person.location;
// console.log(`its ${f} ${t}`)

// const book={
//     title:'Ego is the enemy',
//     author:'ryan',
//     publisher:{
//         name:'pefrrd'
//     }
// }

// const {name:publisherName='self-published'}=book.publisher;


// console.log(publisherName);


//
//array destrcturing
//


const address=['1299 s juniper Street', 'bhusawal',
                'jalgaon','654533'];
const [,city,state]=address;
        
console.log(`u r in ${city} ${state}.`);

const item=['cofee','34','434','3234']
const [it,,medium,]=item
console.log(`A medium ${it} costs $${medium}`)