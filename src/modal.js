(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    openModalBtnMob: document.querySelector('[data-modal-open-mob]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
refs.openModalBtnMob.addEventListener('click', toggleModal);
    
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();