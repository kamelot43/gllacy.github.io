var link = document.querySelector(".btn-slide--wide");

var account = document.querySelector(".account");
var accountForm = account.querySelector("form");
var btnCustomUser = document.querySelector(".btn-custom--user");
var accountLogin = account.querySelector("[name = account-email]");
var accountMail = account.querySelector("[name = account-email]");
var accountPassword = account.querySelector("[name = password]");

if (link) {
  var popup = document.querySelector(".popup");
  var close = popup.querySelector(".popup-close");
  var login = popup.querySelector("[name = popup-name]");
  var mail = popup.querySelector("[name = popup-mail]");
  var form = popup.querySelector("form");
  var overlay = document.querySelector(".overlay");
  var storage = localStorage.getItem("login");

  link.addEventListener("click", function(event) {
    event.preventDefault();
    if (storage) {
      login.value = storage;
    } else {
      login.focus();
    }
    popup.classList.add("popup-show");
    overlay.classList.add("overlay-show");
    login.focus();
  });

  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("popup-show");
    popup.classList.remove("popup-error");
    overlay.classList.remove("overlay-show");
  });

  form.addEventListener("submit", function(event) {
    if (!login.value || !mail.value) {
      event.preventDefault();
      popup.classList.remove("popup-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("popup-error");
    } else {
      localStorage.setItem("login", login.value);
    }
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("popup-show")) {
        popup.classList.remove("popup-show");
        popup.classList.remove("popup-error");
        overlay.classList.remove("overlay-show");
      }
    }
  });
}

accountForm.addEventListener("submit", function(event) {
  if (!accountMail.value || !accountPassword.value) {
    event.preventDefault();
    account.classList.remove("popup-error");
    account.offsetWidth = account.offsetWidth;
    account.classList.add("popup-error");
  } else {
    localStorage.setItem("mail", accountMail.value);
  }
});

account.addEventListener("mouseleave", function(event) {
  account.classList.remove("popup-error");
});

btnCustomUser.addEventListener("mouseenter", function(event) {
  accountMail.focus();
});
