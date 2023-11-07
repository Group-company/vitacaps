const menuButton = document.querySelector('.menu-button');
const navList = document.querySelector('.links');

menuButton.addEventListener('click', () => {
    console.log("foii")
  navList.classList.toggle('active');
  menuButton.classList.toggle('active');
});
