function loadNavbar() {
    const navbarHTML = `
<nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container">
        <!-- Nom de la boutique -->
        <a class="navbar-brand" href="#">
            <span class="b">Medo </span>shop
        </a>

        <!-- Bouton toggler pour le menu Offcanvas -->
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Contenu du menu -->
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Medo Shop</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <!-- Liens de navigation -->
                <ul class="navbar-nav flex-grow-1 pe-3">
                    <li class="nav-item"><a class="nav-link active" href="index.html">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="shop.html">Shop</a></li>
                    <li class="nav-item"><a class="nav-link" href="index.html#collection">Collection</a></li>
                    <li class="nav-item"><a class="nav-link" href="contact.html">Contact Us</a></li>
                    <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
                </ul>

                <!-- Recherche, Panier et Profil (Desktop) -->
                <form class="d-flex mt-3">
                    <button class="btn btn-outline-primary d-none d-lg-block me-2 search-icon-desktop" type="button">
                        <i class="bi bi-search"></i>
                    </button>
                    <a href="cart.html" class="btn position-relative me-3 d-lg-block d-inline-block">
                        <i class="bi bi-cart"></i>
                        <span class="position-absolute top-0 start-100 translate-middle badge bg-danger" id="cart-badge-desktop">0</span>
                    </a>
                    <a href="/html/auth.html" class="btn me-3 d-lg-block d-inline-block">
                        <i class="bi bi-person-circle"></i>
                    </a>
                </form>
            </div>
        </div>
    </div>
</nav>





    `;

    document.getElementById('navbar').innerHTML = navbarHTML;

    const searchIcon = document.getElementById('searchIcon');
    const searchBar = document.getElementById('searchBar');
    
    searchIcon.addEventListener('click', function () {
        searchBar.classList.toggle('d-none');
    });
}

document.addEventListener('DOMContentLoaded', loadNavbar);

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('shadow');
    } else {
        navbar.classList.remove('shadow');
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();

    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    navLinks.forEach(link => {
        const linkPath = link.href.split('/').pop();
        
        if (currentPage === linkPath) {
            link.classList.add('active');
        }
    });
});




