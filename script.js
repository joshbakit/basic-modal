const modalBtn = document.querySelector('.btn-modal');
const modalOverlay = document.querySelector('.modal-overlay');
const btnClose = document.querySelector('.btn-close');

modalBtn.addEventListener('click', function(){
    modalOverlay.classList.remove("show-modal")
});

btnClose.addEventListener('click', function() {
    modalOverlay.classList.add("show-modal")
});