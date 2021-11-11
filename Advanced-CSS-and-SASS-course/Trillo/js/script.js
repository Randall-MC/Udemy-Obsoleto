/* CHAT */
const toggle = document.getElementById('user-nav__icon-box'),
    chat = document.getElementById('chat');

function hasClass() {
    return chat.classList.contains('active')
}

// CAN'T SELECT OTHER ELEMENTS
// toggle.addEventListener('click', ()=> {
//     if(hasClass() === false) {
//         chat.classList.add('active')
//     } else {
//         chat.classList.remove('active')
//     }
// });

/* AUTOCOMPLETE */
const input = document.getElementById("autocomplete-input"),
    list = document.getElementById("autocomplete-list");

input.addEventListener("keyup", (event) => {
    let key = event.target.value;

    if(key.length > 0) {
        search(key)
    }
});

const search = (key) => {
    fetch(`https://restcountries.eu/rest/v2/name/${key}?fields=name`)
        .then((res) => res.json())
        .then((data) => {
            if(Array.isArray(data)) {
                build_list(data.map((item) => {
                    return item.name
                }))
            } else {
                build_list()
            }
        })
        .catch(e => {console.log(e)})
}

const build_list = (items = []) => {

    list.innerHTML = ""

    items.map((item) => {
        list.innerHTML += `<li class="autocomplete-item">${item}</li>`
    })
}

list.addEventListener("click", (e) => {
    if(e.target && e.target.nodeName == "LI") {
        input.value = e.target.innerHTML
        build_list()
    }
})

/* MODAL */
const open = document.getElementById("btn-open"),
    close = document.getElementById("close"),
    modal = document.getElementById("modal");

open.addEventListener("click", function(e) {
    console.log(e)
    modal.classList.add("active")
});

close.addEventListener("click", function(e) {
    console.log(e);
    modal.classList.remove("active")
});
