document.addEventListener("DOMContentLoaded", function () {
    fetch('/html/footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Could not load footer');
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('footer').innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading footer:', error);
        });
});
