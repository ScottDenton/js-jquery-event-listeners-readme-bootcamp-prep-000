//define functions here

function getIt(){
    $('p').on('click', function(){
    alert("Hey!")
  })
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty');
  })
}

function pressIt() {
  ${'typing'}.on('keydown', function(){
    if(e.which === 71) {
      alert("The G key was pressed")
    }
  } )
}

$(document).ready(function(){


// call functions here



});
function pressIt(){
  ${'typing'} 
}