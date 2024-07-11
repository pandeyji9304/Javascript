// function milna (permision){
//     return new Promise ((resolve, reject)=>{
//         if(!permision){
//             return reject ("ghr walo ko pta chl gya ")
//         }
//         resolve  ("Znmd")
//     })
// }

// function movie(movie){
//     return new Promise ((resolve, reject)=>{
//         if(movie!="Znmd"){
//             reject ("akele chala jana")
//         }
//         resolve ("ok")
//     })
// }

// milna(true).then((data)=>{
//     console.log(data);
//     return movie(data)
// }).then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })

function download(Url){
 return new Promise ((resolve, reject)=>{
    const url=Url.split(".")[0]
    if(!url=="https"){
        return reject ("url glt hai")
    }
    setTimeout(()=>{
        const data = Url.split("/").pop()
        console.log(data);
        resolve (data)
    },3000)
 })
}


function compress(moviename){
    return new Promise ((resolve, reject)=>{
       const ext  = moviename.split(".").pop()
       if(ext !="mp4"){
        return reject ("wrong movie ext")
       }

       setTimeout(()=>{
        const movie_name = moviename.split(".")[0] 
        let compressedmovie=movie_name+".zip"
        console.log(compressedmovie);
        resolve(compressedmovie)
       },4000)
    })
   }


   function upload(zipmovie){
    return new Promise ((resolve, reject)=>{
       const ext  = zipmovie.split(".").pop()
       if(ext !== "zip"){
        return reject ("wrong movie not compress")
       }

       setTimeout(()=>{
       
        let newUrl="https://www.chitkara.com/"+zipmovie
        
        resolve(newUrl)
       },4000)
    })
   }

   download("http://www.movies.com/kalki.mp4").then((data)=>{
        return compress(data)
   })
   .then((data)=>{
    return upload(data)
   })
   .then((data)=>{
    console.log(`movie sucessfully uploaded "${data}`);
   })
   .catch((err)=>{
    console.log(err);
   })

