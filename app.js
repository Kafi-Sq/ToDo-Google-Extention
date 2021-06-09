const input = document.querySelector('#input')
let ul = document.querySelector('#ul')
const reload = JSON.parse(localStorage.getItem("mySave"))
const del = document.querySelector('#del')

let mySave = []

if (reload) {
    mySave = reload
    doIt()
}


input.addEventListener('keydown', function (e) {
    if (e.code === 'Enter') {
        mySave.push(input.value)
        localStorage.setItem("mySave", JSON.stringify(mySave))
        input.value = ''
        doIt()
    }
})

function doIt() {
    list = ''
    for (let i = 0; i < mySave.length; i++) {
        list += `<li class="liStyle">${mySave[i]}</li>`
    }
    ul.innerHTML = list
}

del.addEventListener('click', function () {
    localStorage.removeItem('mySave')
    mySave = []
    doIt()
})

// let dele = function(e) {
//     localStorage.removeItem("mySave")
//     mySave.pop()    
//     doIt()
// }








