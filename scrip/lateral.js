
    const btnToggle = document.getElementById('btn-toggle');
    const navLinks = document.querySelectorAll('.nav-link');

    btnToggle.addEventListener('click', () => {
        sidebar.classList.toggle('expand');
    });
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
