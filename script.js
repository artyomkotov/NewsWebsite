document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
 
    const form = event.target;
 
    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
            'Accept': 'applications/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Message sent!');
        } else {
            alert('There was a problem with your submission. Please try again.');
        }
    }).catch(error => {
        alert('There was a problem with your submission. Please try again.');
    });
});

// Dette er script jeg fikk fra Faizan for å koble sammen google sheets og html css. Endret litt på den sånn at den passer koden jeg har siden den brukte noen ids jeg ikke har i htmlen min. 
// Jeg erstattet den delen med en alart istedenfor, det er en enkel måte å vise at alt virker.