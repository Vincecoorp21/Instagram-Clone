/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction1() {
  document.querySelector('.key1').classList.toggle('show');
}

function myFunction2() {
  document.querySelector('.key2').classList.toggle('show');
}

function myFunction3() {
  document.querySelector('.key3').classList.toggle('show');
}

// Close the dropdown menu if the user clicks outside of it
// window.onclick = function (event) {
//   if (!event.target.matches('.dropbtn')) {
//     let dropdowns = document.getElementsByClassName('dropdown-content');
//     let i;
//     for (i = 0; i < dropdowns.length; i++) {
//       let openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// };
