const input = document.querySelector('#input')
let ul = document.querySelector('#ul')



input.addEventListener('keydown', function (e) {
    if (e.code === 'Enter') {

        let li = document.createElement('li')
        li.classList.add('liStyle')
        li.innerText = input.value
        ul.appendChild(li)
        input.value = ''

        li.addEventListener('click', function () {
            ul.removeChild(li)
        })
    }

})


