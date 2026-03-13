let palletOverlay = document.querySelector(".palette-overlay");
let input=document.querySelector(".command-input");


state = {
    isOpen: false,
    activeIndex: -1,
    searchTxt: "",
  commands: [
    { title: "Open Settings", keyword: "settings" },
    { title: "Toggle Theme", keyword: "theme" },
    { title: "Create File", keyword: "create" },
    { title: "Delete File", keyword: "delete" },
    { title: "Search Project", keyword: "search" }
  ],
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

function createCommandList(arg){
    let commandList=document.querySelector(".command-list");
    commandList.innerHTML=""
    arg.forEach(function(cmmnds,index){
        let li=document.createElement("li");
        li.classList.add("command-item");
        if(index===state.activeIndex){
            li.classList.add("active");
        }
        let span=document.createElement("span");
        span.textContent=cmmnds.title
        let kbd=document.createElement("kbd");
        kbd.textContent=cmmnds.keyword
        li.appendChild(span)
        li.appendChild(kbd)
        commandList.appendChild(li)
    })
}

function renderPalette() {
    if (state.isOpen === true) {
        palletOverlay.classList.remove("hidden");
        createCommandList(state.commands)
    }
    else {
        palletOverlay.classList.add("hidden");
    }
    }

function filterPalette(){
        createCommandList(state.filterCommands)
}

window.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.key === 'k') {
        event.preventDefault();
        state.isOpen = !state.isOpen
        renderPalette()
    }
    else if(event.key==="Escape"){
        state.isOpen=false;
        renderPalette();
    }
    if(event.key==="ArrowUp"){
        if(state.activeIndex <state.filterCommands.length-1){
            state.activeIndex++;
            filterPalette();
        }
    }
    else if(event.key==="ArrowDown"){
        if(state.activeIndex>0){
            state.activeIndex--;
            filterPalette();
        }
    }
})
input.addEventListener("input",(evtObj)=>{
    state.searchTxt=evtObj.target.value;
    state.filterCommands=state.commands.filter(x=>x.title.toLowerCase().includes(state.searchTxt.toLowerCase()))
    // state.commands.forEach(x=>{
    //             if(x.toLowerCase().includes(state.searchTxt.toLowerCase())){
    //         state.filterCommands.push(x)
    //     }
    // })
    // console.log(state.filterCommands)
    state.activeIndex=0;
    filterPalette();
})