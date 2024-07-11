function download(URL, cb){  //url ---->http://www.movies.com/kalki.mp4
    
   let a = URL.split(":")[0]
    if(a!="http"){
            returncb("invalid URl",null)
    }

    setTimeout(()=>{
        let dfile=URL.split("/").pop();
        console.log(dfile);
        cb(null,dfile);
    },3000)

}

function  compress(file, cb){
    //kalki.mp4----->kalki.kalki.zip
    setTimeout(()=>{
        let movie=file.split(".")[0];
        let cfile=movie+".zip";
        console.log(movie);
        cb(null, cfile);
    },1000)

}

function upload(cfile, cb){
    setTimeout(()=>{
        let newURL ="http://chitkara.com/" +cfile
        cb(newURL)
    },5000)

}

download("http://www.movies.com/kalki.mp4",function(err,data){
            if(err) return console.log(err);

        compress(data, function(err,data){
            if(err) return console.log(err);

        upload(data,function (data){
            if(err) return console.log(err);
            
        console.log("file uploaded at" +" " +data);
        })
    })
})  



