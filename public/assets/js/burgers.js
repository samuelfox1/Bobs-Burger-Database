// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".devoure-status").on("click", function (event) {
    var id = $(this).data("id");
    // var devoured = $(this).data("newsleep");
    var devoured = $(this).data("devoured");

    var updateDevoured = {
      devoured: devoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: updateDevoured
    }).then(
      function () {
        console.log("changed status to", devoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".order-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newOrder = {
      name: $("#ca").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newOrder
    }).then(
      function () {
        console.log("created new order");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-order").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted order", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
