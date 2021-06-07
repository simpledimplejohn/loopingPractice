$(document).ready(function() {
  $("form#test-form").submit(function(event) {
    event.preventDefault();
    let question1 = $(q1).val();
    let question2 = $(q2).val();
    let question3 = $(q3).val();
    let question4 = $(q3).val();
    console.log("element: " + question1);
    console.log("element: " + question2);
    console.log("element: " + question3);
    console.log("element: " + question4);
    let array = [];
    array.push(question1);
    array.push(question2);
    array.push(question3);
    array.push(question4);
    console.log("array: " + array);



  });
});
