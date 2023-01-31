export function openModal(modalSelector, overlaySelector) {
    const modal = document.querySelector(modalSelector);
    const overlay = document.querySelector(overlaySelector);

    modal.classList.add('active');
    overlay.classList.add('active');
}

export function closeModal(modalSelector, overlaySelector) {
    const modal = document.querySelector(modalSelector);
    const overlay = document.querySelector(overlaySelector);

    modal.classList.remove('active');
    overlay.classList.remove('active');
}

export function modal(triggerSelector, modalSelector, overlaySelector) {
    const modalTrigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelector, overlaySelector));
    });

    modal.addEventListener('click', (e) => {
        if (e.target.getAttribute('data-close') == "") {
            closeModal(modalSelector, overlaySelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('active')) { 
            closeModal(modalSelector, overlaySelector);
        }
    });
}
