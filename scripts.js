
const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const apiURL = "https://official-joke-api.appspot.com/random_joke";
console.log(apiURL)

async function getQuote() {

    

        
    const response = await fetch(apiURL);

    const data = await response.json();
    console.log(data)
    const quoteContent = data.punchline;
    const quoteAuthor = data.setup;
    quoteEl.innerText = quoteContent;
    authorEl.innerText = "~ " + quoteAuthor;


    console.log("data");
        
  
    

     

}

btnEl.addEventListener("click",getQuote);

