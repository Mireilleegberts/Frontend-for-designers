/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var huis = document.querySelector('main article div.extra');
var button = document.querySelector('article button:last-of-type');

console.log('huis '+huis);

//actie !
button.addEventListener("click",function(){
    huis.classList.toggle('show'); 
    console.log('test');
  }
);



