'use strict';
document.addEventListener('DOMContentLoaded', function() {
var rozwijanemenu = document.querySelector('.for-dropdown');
var elementlisty = document.querySelector('.dropdown');
console.log(rozwijanemenu);
console.log(elementlisty);
rozwijanemenu.addEventListener('mouseover', function() {
  elementlisty.style.display = "block";
})
rozwijanemenu.addEventListener('mouseout', function() {
  elementlisty.style.display = "none";
})


})
