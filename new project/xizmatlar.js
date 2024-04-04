const shortBtn = document.getElementById('short-btn');
const reloadBtn = document.getElementById('reload-btn');


shortBtn.addEventListener('click', ()=>{
   const longUrl =document.getElementById('longUrl').value;
   const apiUrl= `https://www.shorturl.at/#google_vignette=${encodeURIComponent(longUrl)}`
    const ShortUrlTextarea =document.getElementById("shortUrl");


    fetch(apiUrl)
    .then(Response => Response.text())
    .then(data =>ShortUrlTextarea.value = data)
    .catch(error => ShortUrlTextarea.value = "Error : Anunable to shorten URL");
})

reloadBtn.addEventListener('click', ()=> location.reload());




