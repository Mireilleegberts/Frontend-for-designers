/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/
var slider = document.querySelector('main');
//var back = document.querySelector('main .back');
var next = document.querySelector('main .next');


//actie !
next.addEventListener("click",function(){
    slider.classList.add('volgende');
    console.log('volgende slide');
  }
);

//straks aanzetten
//back.addEventListener("click",function(){
//    slider.classList.add('vorige'); 
//  }
//);




