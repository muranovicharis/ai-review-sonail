document.getElementById('reviewForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    // Sammeln der Daten
    const rating = document.querySelector('input[name="rating"]:checked').value;
    const services = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);

    // Daten an das Backend senden
    const response = await fetch('http://localhost:3000/api/generate-review', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ rating, services })
    });

    const data = await response.json();

    if (data.success) {
        // Weiterleitung zur review.html mit den generierten Daten
        // Eine Möglichkeit ist die Nutzung von localStorage
        localStorage.setItem('generatedReview', data.review);
        localStorage.setItem('reviewDetails', JSON.stringify({ rating, services }));
        window.location.href = 'review.html';
    } else {
        alert('Fehler bei der Generierung der Rezension.');
    }
});
