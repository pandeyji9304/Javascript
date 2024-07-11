//promise -> {}  object -> promise state -> pending, fullfiled, reject.
// filfilled and reject are setelled state 
// code run in sysnc

//let p1= new Promise ()
//p1 is object 
//.then() on sucesss & .catch() on reject  // its only use in promise
//microtasking task priority high and all are async call back 



// function sum(a,b){
//    return new Promise ((resolve, reject)=>{
//         //code to do something
//         let flag = false;
//         if(flag){
//             return reject("abba nhi mangee!!")
//          }

//         let result =a+b;
//         resolve(result);

//     })
// }



//console.log (sum(5,4));

// sum(5,4).then(function (data){
//     console.log(data);
// },function(err){
//     console.log(err);
// })


// sum (5,6).then((data)=>{
//     console.log(data);
// })
// .catch(function(err){
//     console.log(err);
// })


function mul (a,b){
    return new Promise ((resolve, reject)=>{
            let flag = false
            if(flag){
                return reject ("glt hai")
            } 1`qwA=`

            let result = a*b
            return resolve (result)
    }) 
}

mul (5,6).then((data)=>{
    console.log(data);
})
.catch(function (err){
    console.log(err);
})

