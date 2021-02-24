const form = document.getElementById("form");
const input = document.getElementById("input");
const toolEl = document.getElementById("tool");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    toDosEl();

});

function toDosEl() {
    const toMet = input.value;

    if (toMet) {
        const topText = document.createElement("li");
        topText.innerText = toMet;

        topText.addEventListener("click", () => {
            topText.classList.toggle("completed");
            localStore();
        });

        topText.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            topText.remove();

            localStore();
        });
        toolEl.appendChild(topText);
        input.value = "";

    }

    localStore();
}

function localStore() {
    const toTile = document.querySelectorAll("li");
    const toDos = [];

    toTile.forEach((todo) => {
        toDos.push({
            text: todo.innerText,
            completed: todo.classList.contains("completed")
        });
    })
    localStorage.setItem("toDos", JSON.stringify(toDos));
}
