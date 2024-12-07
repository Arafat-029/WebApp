// Toggle heart color on click
document.querySelectorAll('.toggle-heart').forEach((btn) => {
    btn.addEventListener('click', function () {
        this.classList.toggle('active');
        const icon = this.querySelector('i');
        if (this.classList.contains('active')) {
            icon.classList.replace('bi-heart', 'bi-heart-fill');
        } else {
            icon.classList.replace('bi-heart-fill', 'bi-heart');
        }
    });
});



document.addEventListener('DOMContentLoaded', function () {
  const productModal = document.getElementById('productModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalPrice = document.getElementById('modalPrice');
  const modalDescription = document.getElementById('modalDescription');
  const modalImage = document.getElementById('modalImage');

  // Ajouter un événement sur tous les boutons "View"
  const viewButtons = document.querySelectorAll('.btn-view');
  viewButtons.forEach(button => {
    button.addEventListener('click', function () {
      // Récupérer les données du bouton
      const title = this.getAttribute('data-title');
      const category = this.getAttribute('data-category');
      const price = this.getAttribute('data-price');
      const description = this.getAttribute('data-description');
      const image = this.getAttribute('data-image');

      // Mettre à jour les éléments du modal
      modalTitle.textContent = title;
      modalCategory.textContent = `Category: ${category}`;
      modalPrice.textContent = `Price: ${price}`;
      modalDescription.textContent = description;
      modalImage.src = image;
    });
  });
});




document.querySelectorAll('.size-option').forEach((button) => {
    button.addEventListener('click', function () {
        // Retirer la classe "active" des autres boutons
        document.querySelectorAll('.size-option').forEach((btn) => btn.classList.remove('active'));
        // Ajouter la classe "active" au bouton sélectionné
        this.classList.add('active');
    });
});
