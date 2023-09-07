let btn_Login = document.querySelector(".login-btn");
let form = document.querySelector(".form");
let action = document.querySelector(".action");
let success = document.querySelector(".success");
let success__title = document.querySelector(".success__title");
let success__close = document.querySelector(".success__close");
let code_1 = document.querySelector("#input1");
let code_2 = document.querySelector("#input2");
let code_3 = document.querySelector("#input3");
let code_4 = document.querySelector("#input4");
let card = document.querySelector(".card");

let s_random = Math.random();
let random = Math.floor(s_random * 10000);
success__title.textContent = random;
let n = JSON.stringify(random);

btn_Login.addEventListener(
  "click",
  function () {
    setTimeout(function () {
      btn_Login.setAttribute("style", "top: 18rem;");
    }, 50);
    btn_Login.textContent = "ورود";
    form.setAttribute("style", "top: 3rem;");
    setTimeout(function () {
      success.setAttribute("style", "top: 3rem;");
    }, 2500);
    setTimeout(function () {
      success.setAttribute("style", "top: -3rem;");
    }, 4500);
    setTimeout(function () {
      code_1.value = n.charAt(0);
      code_2.value = n.charAt(1);
      code_3.value = n.charAt(2);
      code_4.value = n.charAt(3);
    }, 3350);
  },
  false
);

success__close.addEventListener(
  "click",
  function () {
    success.setAttribute("style", "top: -3rem;");
  },
  false
);

action.addEventListener(
  "click",
  function () {
    if (
      code_1.value == n.charAt(0) &&
      code_2.value == n.charAt(1) &&
      code_3.value == n.charAt(2) &&
      code_4.value == n.charAt(3)
    ) {
      action.addEventListener(
        "click",
        function () {
          card.setAttribute("style", "top: 3rem;");
          setTimeout(function () {
            card.setAttribute("style", "top: -15rem;");
          }, 3500);
        },
        false
      );
    } else {
      alert("نو بادی نو");
    }
  },
  false
);
