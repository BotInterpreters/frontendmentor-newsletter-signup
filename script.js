function redirectPage() {
  var email = document.getElementById("emailInput").value;

  if (email && validateEmail(email)) {
    window.location.href = "success.html";
    localStorage.setItem("email", email);
  } else {
    document.querySelector(".error-message").style.display = "contents";
    document.querySelector(".email-input").style.backgroundColor =
      "hsl(4, 100%, 67%, 0.3)";
    document.querySelector(".email-input").style.border =
      "2px solid rgba(204, 51, 51, 0.3)";
  }
}

function validateEmail(email) {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}


function functionGetEmail() {
    const email = localStorage.getItem('email');
    const confirmationMessage = document.getElementById("confirmationMessage");
    confirmationMessage.innerHTML = "A confirmation email has been sent to <strong>" + email + "</strong>. Please open it and click the button inside to confirm your subscription";
}

// Call the function to set the confirmation message when the page finishes loading
window.addEventListener('load', function () {
    functionGetEmail();
});

function dismissMessage(){
    window.location.href = "index.html";
}