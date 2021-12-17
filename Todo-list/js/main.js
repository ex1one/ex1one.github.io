let list = document.getElementById('myUL'),
    itemList = document.querySelectorAll('.item-list')

function addElement () {     
        itemList.forEach(e => {
            let span = document.createElement('span')
            span.textContent = 'x'
            span.className = 'close'
            
            e.appendChild(span)
        })
}

addElement()

list.addEventListener('click', (e) => {
    if(e.target.closest('.close')){
        removeNod(e.target)
    }
})

function removeNod (e){
    let div = e.parentElement
    div.remove()
}

list.addEventListener('click', (e) => {
    if(e.target.closest('.item-list')){
        activeClass(e.target)
    }
})

const activeClass = (n) => {
    n.classList.toggle('active')
}

function newElement(){
    const input = document.getElementById('myInput')

    let createNewElement = document.createElement('li')
    createNewElement.textContent = input.value
    createNewElement.className = 'item-list'

    let span = document.createElement('span')
    span.textContent = 'x'
    span.className = 'close'

    createNewElement.appendChild(span)

    
    if (input.value === ''){
        alert('Введите заголовок')
    } else {
        list.appendChild(createNewElement)
    }
}