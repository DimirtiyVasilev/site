// Add an event listener to the form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    // Get the values from the form fields
    var name = document.querySelector('#name').value;
    var email = document.querySelector('#email').value;
    var message = document.querySelector('#message').value;
    // Display an alert with the form values
    alert('Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);
  });