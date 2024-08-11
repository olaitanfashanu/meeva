function loadHTML(url, elementId) {
    // Use the Fetch API to get the content of the URL
    fetch(url)
        .then(response => response.text())  // Check if the response is OK
        .then(data => {
            // Find the element by its ID and set its innerHTML to the loaded HTML content
            document.getElementById(elementId).innerHTML = data;
        })
        // Log any errors to the console
        .catch(error =>
            console.error('Error loading HTML:', error));

}

document.addEventListener("DOMContentLoaded",function() {
    loadHTML('header.html', 'header');
    loadHTML('footer.html', 'footer');
});





function submitForm() {
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value
    };
}
    
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



function submitFormContact() {
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        tel: document.getElementById('tel').value,
        text: document.getElementById('text').value

    };
    }
        
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
    
    
       