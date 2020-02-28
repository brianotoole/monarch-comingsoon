$(function() {
  $(".form").submit(function(e) {
    e.preventDefault();
    var href = $(this).attr("action");
    var validForm = true; // Set initial state of valid form to true
    var inputArray = $(this).find("input.required"); // Find all required inputs and store them in array

    // Simple check for all inputs to make sure the value is not empty
    inputArray.each(function(item) {
      if ($(this).val() == "") {
        validForm = false;
        $(".mc_embed_signup .error-message").show(); // if empty, show error message
        $(".mc_embed_signup input.required").addClass("error"); // and highlight empty inputs
      }
    });

    if (validForm == true) {
      var formContainer = $(".mc_embed_signup");
      $.ajax({
        type: "POST",
        dataType: "json",
        url: href,
        data: $(this).serialize(),
        success: function(response) {
          if (response.status == "success") {
            console.log("submitted");
            $(formContainer).hide(); // Hide the initial form
            $(".success-message").show(); // Show the checkmark
            $("svg").addClass("active"); // Start animation of checkmark
          } else {
            alert("An error occured: " + response.message);
          }
        }
      });
    }
  });
});
