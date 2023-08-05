// Create a new link element for Bootstrap CSS
var bootstrapCssLink = document.createElement('link');
bootstrapCssLink.rel = 'stylesheet';
bootstrapCssLink.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css';
document.head.appendChild(bootstrapCssLink);


const nav =document.querySelector('.navbar')
fetch('navbar.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
})


const div =document.querySelector('.footer')
fetch('footer.html')
.then(res=>res.text())
.then(data=>{
    div.innerHTML=data
})




// Create a new script element for jQuery
var jqueryScript = document.createElement('script');
jqueryScript.src = 'https://code.jquery.com/jquery-3.5.1.slim.min.js';
document.head.appendChild(jqueryScript);

// Create a new script element for Popper.js
var popperScript = document.createElement('script');
popperScript.src = 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js';
document.head.appendChild(popperScript);

// Create a new script element for Bootstrap
var bootstrapScript = document.createElement('script');
bootstrapScript.src = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js';
document.head.appendChild(bootstrapScript);


