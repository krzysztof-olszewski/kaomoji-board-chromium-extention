const kaomojiList = [
    "¯\_(ツ)_/¯", 
    "(❁´◡`❁)", 
    "(●'◡'●)", 
    "ヾ(≧▽≦*)o",
    "ヾ(≧▽≦*)o",
    "φ(*￣0￣)",
    "q(≧▽≦q)",
    "ψ(｀∇´)ψ",
    "（￣︶￣）↗",
    "*^____^*",
    "(～￣▽￣)～",
    "( •̀ ω •́ )✧",
    "[]~(￣▽￣)~*"
];

window.onload = () => {
    loadItems();
    loadEvents();
}

let container = document.getElementById("item-box");

const loadItems = () => {
    for (const item of kaomojiList) {
        let div = document.createElement("div");
        div.classList.add("grid-item", "tooltip");
        div.innerHTML = item;
        container.appendChild(div);
    }
}

const loadEvents = () => {
    let gridItems = document.querySelectorAll('.grid-item')
    for (const item of gridItems) {
        item.addEventListener('click', () => {
            onClickItem(item.innerHTML);
        });
    }
}

const onClickItem = (value) => {
    console.log(value);
    navigator.clipboard.writeText(value)
        .then(() => {
            let snackbar = document.getElementById("snackbar");
            snackbar.className = "show";
            setTimeout(() => { 
                snackbar.className = snackbar.className.replace("show", ""); 
            }, 1500);
        })
        .catch(err => {
            console.log('Something went wrong', err);
        });
}