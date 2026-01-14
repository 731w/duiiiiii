let buttons = document.querySelectorAll(".btn");
let index = 0;

window.addEventListener("message", (e) => {
    if (e.data.type === "move") {
        buttons[index].classList.remove("active");
        index = (index + e.data.dir + buttons.length) % buttons.length;
        buttons[index].classList.add("active");
    }

    if (e.data.type === "select") {
        fetch(`https://alpha/${buttons[index].dataset.action}`, {
            method: "POST",
            body: "{}"
        });
    }
});
