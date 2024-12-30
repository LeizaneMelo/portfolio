const toggleBtn = document.querySelector('.toggle-icon');
const dropDownMenu = document.querySelector('.dropdown_menu');
const toggleIcon = document.querySelector('.toggle-icon i');


toggleBtn.onclick = function(){
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleIcon.classList = isOpen ? 'bx bx-x' : 'bx bx-menu';
}
