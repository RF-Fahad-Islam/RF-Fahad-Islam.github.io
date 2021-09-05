let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=5301e38d53dc411892df571192c50d29"
let newsCards = document.getElementById("newsCards")
fetch(url, {method:"GET"})
.then(response => {
    return response.json()
}).then(data => {
    let articles = data["articles"]
    articles.forEach(news => {
        // console.log(element["urlToimage"]);
        newsCards.innerHTML += `
        <div class="col">
            <div class="card">
                <img src="${news["urlToImage"]}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"${news["title"]}</h5>
                    <p class="card-text">${news["description"]}</p>
                    <p class="text-muted">${news["publishedAt"]}</p>
                    <a href="${news["url"]}" target="_blank" class="btn btn-outline-primary">Read More</a>
                </div>
            </div>
        </div>
        `
        
    });
    // console.log(articles[0]["spurce"]);
    
})