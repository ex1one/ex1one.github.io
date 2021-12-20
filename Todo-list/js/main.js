let list = document.getElementById('myUL'),
    itemList = document.querySelectorAll('.item-list')

const inputApply = document.getElementById('apply'),
      inputDelete = document.getElementById('delete'),
      inputDeleteAll = document.getElementById('deleteAll'),
      inputDiv = document.querySelector('.div-input')

let newItemList = document.getElementsByClassName('item-list')      

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
    show(n)
}

function show(n){
    if (n.classList.contains('active')){
        inputDiv.classList.remove('hide')
    }
    // for(let i = 0; i < newItemList.length; i++){
    //     if (newItemList[i].classList.contains('active')){
    //         inputDiv.classList.remove('hide')
    //     } else{
    //         inputDiv.classList.add('hide')
    //     }
    // }    
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

function applyElements(){
    console.log('Выполненно')
}

// function removeElements(){
    // list.addEventListener('click', (e) => {
    //     if (e.target.closest('.item-list')){
            // if(e.target.classList.contains('active')){
            //     removeElements(e.target)
            // }
    //     }
    // })
// }

// let newItemList = document.getElementsByClassName('item-list')

function activeAll() {
    // while(newItemList.classList.contains('active')){
    //     inputDiv.classList.remove('hide')
    // }
    if(newItemList.classList.contains('active')){
        inputDiv.classList.remove('hide')
    }
    // inputDiv.classList.remove('hide')
    for(let i = 0; i < newItemList.length; i++){
        newItemList[i].classList.add('active')
    }
}

function removeAll () {
    while (newItemList.length){
        // newItemList[0].parentNode.removeChild(newItemList[0])
        newItemList[0].remove()
    }
}
