let palletShow = document.querySelector(".palette-overlay");
state = {
    isOpen: false,
    activeIndex: -1,
    searchTxt: "",
    commands: [],
    filterCommands: []
}
// function render() {
//     if (state.isOpen===true) {
//         palletShow.classList.remove("hidden");
//     }
//     else{
//         palletShow.classList.add("hidden");

//     }

// }
// function renderPalette() {
//     state.isOpen=!state.isOpen
//     render()
// }


function renderPalette() {
    if (state.isOpen === true) {
        palletShow.classList.remove("hidden");
    }
    else {
        palletShow.classList.add("hidden");

    }
}

window.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.key === 'k') {
        event.preventDefault();
        state.isOpen = !state.isOpen
        renderPalette()
    }
    else if(event.key==="Escape"){
        state.isOpen=false;
        renderPalette()
    }
})