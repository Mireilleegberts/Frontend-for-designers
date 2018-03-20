/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/
var slider = document.querySelector('main');
var back = document.querySelector('.back');
var next = document.querySelector('.next');
//var i = 0;
var currentslide = 1;


//carousel
function beweegcarousel(){
    console.log("currentslide: " + currentslide);
    
    if(currentslide == 1){
        slider.classList.add('volgende1');
        slider.classList.remove('volgende2');
        slider.classList.remove('volgende3');
        slider.classList.remove('volgende4');
    }
    if(currentslide == 2){
        slider.classList.remove('volgende1');
        slider.classList.add('volgende2');
        slider.classList.remove('volgende3');
        slider.classList.remove('volgende4');

    }

    if(currentslide == 3){
        slider.classList.remove('volgende1');
        slider.classList.remove('volgende2');
        slider.classList.add('volgende3');
        slider.classList.remove('volgende4');

    }  
    
    if(currentslide == 4){
        slider.classList.remove('volgende1');
        slider.classList.remove('volgende2');
        slider.classList.remove('volgende3');
        slider.classList.add('volgende4');
        
    

    } 
}
//actie !
next.addEventListener("click", function(){
    console.log('volgende slide + keyCode');
    currentslide++;
    if(currentslide>4){
        currentslide =1;
    }
    beweegcarousel();
    
  }
);

back.addEventListener("click", function(){
    console.log('Naar slide');
    currentslide--;
    if(currentslide<1){
        currentslide =1;
    }
    beweegcarousel();
}

);

$("body").keydown(function(e) {
  if(e.keyCode == 37) { // left
    $( ".back" ).trigger( "click" );
  }
  else if(e.keyCode == 39) { // right
    $( ".next" ).trigger( "click" );
  }
});