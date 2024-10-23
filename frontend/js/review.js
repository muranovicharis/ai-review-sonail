document.addEventListener('DOMContentLoaded', function() {
    const generatedReview = localStorage.getItem('generatedReview');
    const reviewDetails = JSON.parse(localStorage.getItem('reviewDetails'));

    if (generatedReview && reviewDetails) {
        document.getElementById('generatedReview').innerText = generatedReview;
        document.getElementById('reviewDetails').innerText = `Bewertung: ${reviewDetails.rating} Sterne\nServices: ${reviewDetails.services.join(', ')}`;
    } else {
        document.getElementById('generatedReview').innerText = 'Keine Rezension gefunden.';
    }

    document.getElementById('copyButton').addEventListener('click', function() {
        const reviewText = document.getElementById('generatedReview').innerText;
        navigator.clipboard.writeText(reviewText).then(() => {
            alert('Rezension kopiert!');
        }).catch(err => {
            alert('Fehler beim Kopieren.');
        });
    });
});
