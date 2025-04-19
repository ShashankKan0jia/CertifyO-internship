const form = document.getElementById("form");
const formMsg = document.getElementById("form-msg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    formMsg.textContent = "Please fill in all fields.";
    formMsg.style.color = "red";
    form.classList.add("shake");
    setTimeout(() => form.classList.remove("shake"), 500);
  } else if (!validateEmail(email)) {
    formMsg.textContent = "Please enter a valid email address.";
    formMsg.style.color = "red";
    form.classList.add("shake");
    setTimeout(() => form.classList.remove("shake"), 500);
  } else {
    formMsg.textContent = "Message sent successfully!";
    formMsg.style.color = "green";
    form.reset();
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
