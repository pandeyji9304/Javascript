const apikey = '163995368f6143718ca3c0f5a30015cb';

const blogContainer = document.getElementById("blog-container");
const searchFeild = document.getElementById('search-input')
const searchButton = document.getElementById('search-button')


async function fetchRandomNews(){
    try{
            const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=20&apiKey=${apikey}`;
            const responce = await fetch(apiUrl)
            const data = await responce.json()
            return data.articles;
    
    
        }catch(error){
            console.log("Error fetching randoim news", error)
            return[]
    }
}

searchButton.addEventListener("click", async ()=>{
    const query = searchFeild.value.trim()
    if(query !== ""){
        try{
            const articles = await fetchNewsQuery(query)
                displayblogs(articles)
        }catch(error){
            console.log("Error fetching news by query", error)
        }
    }
})

async function fetchNewsQuery(query){
    try{
        const apiUrl = `https://newsapi.org/v2/everything?q=${query}&pageSize=10&apiKey=${apikey}`;
        const responce = await fetch(apiUrl)
        const data = await responce.json()
        return data.articles;


    }catch(error){
        console.log("Error fetching randoim news", error)
        return[]
}
}


function displayblogs(article){
    blogContainer.innerHTML="";
    article.forEach((article) => {
        const blogCard =  document .createElement("div");
        blogCard.classList.add("blog-card");

        const img = document.createElement("img")
        img.src = article.urlToImage;
        img.alt =  article.title;

        const title = document.createElement("h2");
        const truncatedTitle = article.title.length >30? article.title.slice(0, 30) + "...." : article.title;
        title.textContent = truncatedTitle;

        const description =  document.createElement("p")
        const truncatedDes = article.description.length >120? article.description.slice(0, 120) + "...." : article.description;
        description.textContent =truncatedDes;

        blogCard.appendChild(img)
        blogCard.appendChild(title)
        blogCard.appendChild(description)
        blogCard.addEventListener('click', () =>{
            window.open(article.url, "_blank");
        });
        
        blogContainer.appendChild(blogCard)
    })
}

(async ()=>{
    try{
        const article = await fetchRandomNews()
        displayblogs(article);
    }catch(error){
        console.error("error fetching news", error);
    }
})();