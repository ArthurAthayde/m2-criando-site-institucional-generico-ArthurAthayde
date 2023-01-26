/* ------------------------------- Coloque sua lógica aqui ------------------------------- */

function renderModal() {
    const button = document.querySelector('.openModalBtn');
    const modal = document.querySelector('.modal__container');

    button.addEventListener('click', () => {
        modal.showModal();

        closeModal()
    })
}

function renderModalSpan() {
    const span = document.getElementById('openModalSpan');
    const modal = document.querySelector('.modal__container');


    span.addEventListener('click', () => {
        console.log('oi');
        modal.showModal();

        closeModal()
    })
}

function closeModal() {
    const closeBtn = document.querySelector('.closeBtn');
    const modal = document.querySelector('.modal__container');

    closeBtn.addEventListener('click', () => {
        modal.close()
    })
}

renderModal()
renderModalSpan()