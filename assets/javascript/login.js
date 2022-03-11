const passIcon = document.querySelector(".modal__password--icon");
const password = document.querySelector(".modal__input--password");
const alertEmail = document.querySelector(".input__caption--alert");
const emailInput = document.querySelector(".modal__input--email");
const enterBtn = document.querySelector(".modal__enter-btn");

enterBtn.addEventListener("click", submitBtn)

function submitBtn() {
  event.preventDefault();

  fetch("https://test-final.b8one.academy/login",{
    method: 'POST',
    body: JSON.stringify({
      email:emailInput.value,
      password:password.value
    }),
    headers:{"Content-Type":"application/json; charset=UTF-8"}
  })
  .then(response => response.json()) 
  .then(json => {
    if(json === true){
      window.location.href = "./dashboard.html"
    } else {
      alertEmail.style.display = "block"
    }
  })
}

passIcon.addEventListener("click", () => {
  if (passIcon.checked === true) {
    password.setAttribute("type", "text");
  } else {
    password.setAttribute("type", "password");
  }
});
