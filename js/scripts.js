$(document).ready(function() {
  $("form#test-form").submit(function(event) {
    event.preventDefault();
    console.log("working!")
    let array = [];
    
    array.forEach(function(element) {
      console.log("forEach loop");
    });



  });
});
