function openNav(hamburgerSelector, navSelector, overlaySelector) {
    const hamburger = document.querySelector(hamburgerSelector);
    const nav = document.querySelector(navSelector);
    const overlay = document.querySelector(overlaySelector);

    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
    overlay.classList.toggle('active');
}


export function nav(hamburgerSelector, navSelector, overlaySelector) {
    const hamburger = document.querySelector(hamburgerSelector);
    const nav = document.querySelector(navSelector);
    const overlay = document.querySelector(overlaySelector);

    hamburger.addEventListener('click', (e) => {
        openNav(hamburgerSelector, navSelector, overlaySelector);
    });

    document.addEventListener('click', (e) => {
        if(nav.classList.contains('active') && e.target === overlay){
            nav.classList.remove('active');
            overlay.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}
