const count = document.querySelector("#number");
let num = Number.parseInt(count.innerHTML);

const buttons = document.querySelectorAll("button");

// Single event listener for all buttons
buttons.forEach((button) => {
  button.addEventListener(
    "click",
    (e) => {
      const action = e.target.id;

      if (action === "decrease") {
        num--;
      } else if (action === "reset") {
        num = 0;
      } else if (action === "increase") {
        num++;
      }

      // Update the UI with the new count
      count.innerHTML = num;
    },
    false
  );
});
