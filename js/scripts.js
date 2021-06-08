$(document).ready(function() {
  $("form#test-form").submit(function(event) {
    event.preventDefault();

    let questionsArray = [$(q1).val(), $(q2).val(), $(q3).val(), $(q4).val()];
    
    
    // array.forEach(function(elements) {

    //   array.push(question1);
    //   // array.push(question2);
    //   // array.push(question3);
    //   // array.push(question4);
    //   console.log("element: " + question1);
      
    // });
    console.log("array: " + questionsArray);
  });
});
