$(document).ready(function() {
  $("form#test-form").submit(function(event) {
    event.preventDefault();
    array = [];
    
    array.forEach(function(element) {
      let q1 = $("q1").val();
      array.push(q1);
      console.log(array);
    });



  });
});
