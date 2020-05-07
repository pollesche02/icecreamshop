$(function (){ 
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newEaten = $(this).data("newEaten");
  
      var newEatenState = {
        devoured: newEaten
      };
  
      // Send the PUT request.
      $.ajax("/api/icecream/" + id, {
        type: "PUT",
        data: newEatenState
      }).then(
        function() {
          console.log("changed Eaten to", newEaten);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newicecream = {
        name: $("#ice").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/icecream", {
        type: "POST",
        data: newicecreamChoice
      }).then(
        function() {
          console.log("created new icecreamChoice");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
  });