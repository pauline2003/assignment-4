const switchButton = document.getElementById("switch");
const body = document.body;

switchButton.onclick = () => {
  switchButton.classList.toggle("off");
  if (body.classList.contains("dark")) {
    body.classList.replace("dark", "light");
  } else {
    body.classList.replace("light", "dark");
  }
};

fetch("db.json")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error("error"));
