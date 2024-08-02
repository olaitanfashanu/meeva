function loadHTML(url, elementId) {
    fetch(url).then(response => response.text()).then(data => {
        document.getElementById(elementId).innerHTML = data;}).catch(error =>
            console.error('Error loading HTML:', error));

}

document.addEventListener("DOMContentLoaded",function() {
    loadHTML('header.html', 'header');
    loadHTML('footer.html', 'footer');
});






document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value
    };
    
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
