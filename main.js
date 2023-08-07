// With out animation
/*setTimeout(function() {
  document.querySelector('.splash').style.display = 'none';
}, 3000);
*/
// with animation
onload = init;

function init(){
    let elem = document.querySelector(".splash");
    setTimeout(slideUp, 1000);

    function slideUp(){
        elem.style.top = "-200vh";
    }
}
/* nav bar*/
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}