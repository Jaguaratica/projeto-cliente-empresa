document.addEventListener("DOMContentLoaded", () => {
  const btnEntrar = document.querySelector(".hedrBtnCadast");
  const loginSection = document.querySelector(".login-section");

  if (!btnEntrar || !loginSection) return;

  btnEntrar.addEventListener("click", () => {
    loginSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});