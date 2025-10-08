// poc_login.js
const CORRECT_PASSWORD = "byexample"; // change to your password

document.getElementById("submit").addEventListener("click", function() {
  const entered = document.getElementById("password").value;

  if (entered === CORRECT_PASSWORD) {
    // redirect to pocjob.html in same folder
    window.location.href = "pocjob.html";
  } else {
    alert("Incorrect password. Try again.");
  }
});
