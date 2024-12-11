/*
 * Modal
 *
 * Pico.css - https://picocss.com
 * Copyright 2019-2024 - Licensed under MIT
 */

// Config
const isOpenClass = "modal-is-open";
const scrollbarWidthCssVar = "--pico-scrollbar-width";



// Toggle modal
export const toggleModal = (click) => {
    click.preventDefault();
    const modal = document.getElementById(click.currentTarget.dataset.target);
    if (!modal) return;
    modal && (modal.open ? closeModal(modal) : openModal(modal));
};

// Open modal
const openModal = (modal) => {
    const { documentElement: html } = document;
    const scrollbarWidth = getScrollbarWidth();
    if (scrollbarWidth) {
        html.style.setProperty(scrollbarWidthCssVar, `${scrollbarWidth}px`);
    }
    html.classList.add(isOpenClass);
    html.dataset.modal = modal.id;
    modal.showModal();
};

// Close modal
const closeModal = (modal) => {
    const { documentElement: html } = document;
    html.classList.remove(isOpenClass);
    html.dataset.modal = null;
    modal.close();
    html.style.removeProperty(scrollbarWidthCssVar);

};


// Get scrollbar width
const getScrollbarWidth = () => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    return scrollbarWidth;
};



export const setupModals = () => {
    // Add open/close button handlers
    const togglers = document.querySelectorAll('.toggle-modal');
    for (let el of togglers) {
        el.addEventListener("click", toggleModal);
    }

}