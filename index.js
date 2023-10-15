fetch('page/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    });

fetch('page/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });

fetch('page/home.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('content').innerHTML = data;
    });