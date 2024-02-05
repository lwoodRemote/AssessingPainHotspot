//SCRIPT FOR POPUP CONTAINER FUNCTIONS

// below functions are added to html onclick function
const window_pop= document.getElementById('popup_display');

function open_pop() {

    if(window_pop.style.display = 'none') {
  
      window_pop.style.display = 'block';
    }  
  
  }


  function close_pop() {

    if(window_pop.style.display = 'block'){
  
      window_pop.style.display = 'none';
    }
}

// this closes the pop up when clicking outside the pop-up window - thats why it is adding a listener to the window frame
  window.addEventListener('click', function(event) {

    if (event.target == window_pop) {

      window_pop.style.display = 'none';

    }

  })