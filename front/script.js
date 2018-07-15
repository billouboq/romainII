// elements
const input = document.querySelector(".number-input");
const btn = document.querySelector(".submit-btn");
const result = document.querySelector(".result");

// server config
const config = {
  server: "http://127.0.0.1:3000",
};

// get romain number
const StreamSource = new EventSource(config.server + "/subscribe");

// this is where we have our romain number converted
StreamSource.addEventListener(
  "message",
  event => {
    result.innerHTML = event.data;
    btn.disabled = false;
  },
  false
);

// ask for romain number
const askForConversion = number =>
  fetch(config.server + "/askForConversion", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ number }),
  });

// listeners
btn.addEventListener("click", async () => {
  await askForConversion(input.value);
  btn.disabled = true;
});
