//script.js

const api_url ="https://api.quotable.io/random";
const author = document.getElementById("author");
const quote = document.getElementById("quote");

async function getquote(url) {
    const response =await fetch(url)
    var data =await response.json();
    // console.log(data);

    quote.innerHTML =data.content;
    author.innerHTML =data.author;

}

getquote(api_url);

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + 
     "%0A--- by " + author.innerHTML, "Tweet Window", "width=600, height=400");
}


function whatsapp() {
    window.open(
      "https://wa.me/?text=" + quote.innerHTML + 
      "%0A--- by " + author.innerHTML
    )};