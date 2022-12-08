const fromEl = document.querySelector(".main-form");
const output = document.getElementById("output");
fromEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(fromEl);
  const data = Object.fromEntries(formData);
  output.innerText = JSON.stringify(data);
});
