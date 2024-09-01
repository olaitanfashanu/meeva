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



const form = document.getElementById('getForm');
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData))
    });

    const result = await response.json();
    console.log(result);
   
});


const form = document.getElementById('formContact');
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData))
    });

    const result = await response.json();
    console.log(result);
   
});
 