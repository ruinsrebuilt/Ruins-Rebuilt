function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".form__message");

  messageElement.textContent = message;
  messageElement.classList.remove("form__message--success", "form__message--error");
  messageElement.classList.add(`form__message--${type}`);
}

function auth ( ) {
  var email=document.getElementById( " email " ) .value ;
 var password = document.getElementById ( " password " ) . value ;
  if ( email == " admin@gmail.com " && password == " admin123 " ) {
      window.location.assign ( " import.html " ) ;
      alert ( " Login Successfully " ) ;
 }
  else{
      alert ( " Invalid Information " ) ;
      return ;
  }
}

function setInputError(inputElement, message) {
  inputElement.classList.add("form__input--error");
  inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
  inputElement.classList.remove("form__input--error");
  inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const createAccountForm = document.querySelector("#createAccount");

  document.querySelector("#linkCreateAccount").addEventListener("click", e => {
      e.preventDefault();
      loginForm.classList.add("form--hidden");
      createAccountForm.classList.remove("form--hidden");
  });

  document.querySelector("#linkLogin").addEventListener("click", e => {
      e.preventDefault();
      loginForm.classList.remove("form--hidden");
      createAccountForm.classList.add("form--hidden");
  });

  loginForm.addEventListener("submit", e => {
      e.preventDefault();

      // Perform your AJAX/Fetch login
              /* $.ajax({
url: "test.html",
cache: false,
success: function(html){
  $("#results").append(html);
}
});


var menuId = $("ul.nav").first().attr("id");
var request = $.ajax({
url: "script.php",
type: "POST",
data: {id : menuId},
dataType: "html"
});

request.done(function(msg) {
$("#log").html( msg );
});

request.fail(function(jqXHR, textStatus) {
alert( "Request failed: " + textStatus );
});
*/

      setFormMessage(loginForm, "error", "Invalid username/password combination");
  });

  document.querySelectorAll(".form__input").forEach(inputElement => {
      inputElement.addEventListener("blur", e => {
          if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
              setInputError(inputElement, "Username must be at least 10 characters in length");
          }
      });

      inputElement.addEventListener("input", e => {
          clearInputError(inputElement);
      });
  });
});