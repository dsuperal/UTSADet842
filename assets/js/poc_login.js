// poc_login.js
const CORRECT_PASSWORD = "godfather"; // change to your password

document.getElementById("submit").addEventListener("click", function() {
  const urlParams = new URL(window.location.toLocaleString()).searchParams;
  const target = url.get('target');
  const entered = document.getElementById("password").value;

  if (entered === CORRECT_PASSWORD) {
    // redirect to ?target= in same folder
    window.location.href = target;
  } else {
    alert("Incorrect password. Try again.");
  }
});
