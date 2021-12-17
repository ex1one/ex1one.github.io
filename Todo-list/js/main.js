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

function removeNod (){
    let close = document.querySelectorAll('.close')
    // let div = this.parentElement
    // div.remove()
    
    for (let i =0; i < close.length; i++){
        close[i].onclick = function(){
            let div = this.parentElement
            div.remove()
        }
    }
}

removeNod()

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