document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("action-btn");
  const message = document.getElementById("message");
  let clicks = 0;

  button.addEventListener("click", () => {
    clicks += 1;
    message.textContent = `Clicked ${clicks} time${clicks === 1 ? "" : "s"}`;
  });
});
