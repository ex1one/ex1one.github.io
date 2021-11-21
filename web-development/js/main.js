// class Subject {
//     constructor() {
//         this.observers= []
//     }
//     subscribe(observer) {
//         this.observers.push(observer)
//     }
//     unsubscribe(observer) {
//         this.observers = this.observers.filter(obs => obs !== this.observer)
//     }
//     fire (action) { 
//         this.observers.forEach(observer => {
//             observer.update(action)
//         })
//     }
// }

// class Observer {
//     constructor(state = 1) {
//         this.state = state
//         this.initialState = state
//     }

//     update(action) {
//         switch(action.type) {
//             case 'Increment':
//                 this.state = ++this.state
//                 break
//                 case 'DECREMENT':
//                     this.state = --this.state
//                     break
//                 case 'ADD':
//                     this.state += action.payload
//                     break
//                 default: this.state = this.initialSate
//         }
//     }
// }

// const stream$ = new Subject()

// const obs1 = new Observer()
// const obs2 = new Observer(42)

// stream$.subscribe(obs1)
// stream$.subscribe(obs2)

// stream$.fire({type: 'Increment'})
// stream$.fire({type: 'Increment'})
// stream$.fire({type: 'DECREMENT'})
// stream$.fire({type: 'ADD', payload : 10})

// console.log(obs1.state)
// console.log(obs2.state)

// function onEntry (entry) {
//     entry.forEach(change => {
//       if (change.isIntersecting){
//           runNumbers();
//       }
//     });
// }

// let options = {threshold: [1]};
// let observer = new IntersectionObserver(onEntry, options);
// let elements = document.querySelectorAll('.item-list');

// elements.forEach((i, el) => {
//     observer.observe(el);
// });

// let onEntry = entry => {
//     entry.forEach(change => {
//         if (change.isIntersecting){

//         }  
//     })
// }




window.addEventListener('scroll', () => {
     let scrollDistance = window.scrollY;

    document.querySelectorAll('.section').forEach((el, i) => {  
        if (el.offsetTop - document.querySelector('.navigation').clientHeight <= scrollDistance) {
            document.querySelectorAll('.navigation a').forEach((el) => {
                if (el.classList.contains('active')) {
                    el.classList.remove('active')
                }
            });
            document.querySelectorAll('.navigation li')[i].querySelector('a').classList.add('active')
        }
    });
});

const menuIcon = document.getElementById('menuIcon'),
      menuBody = document.querySelector('.menuBurger')

const itemClick = document.querySelectorAll('.item-click')



menuIcon.addEventListener('click', () => {

    document.body.classList.toggle('lock')
    menuBody.classList.toggle('_active')
    menuIcon.classList.toggle('_active')

})

itemClick.forEach(e => {
    e.addEventListener('click', () => {
        if (menuBody.classList.contains('_active')) {
            document.body.classList.remove('lock')
                menuBody.classList.remove('_active')
                menuIcon.classList.remove('_active')
        }
    })
}
)

//SEARCH

const formSearch = document.querySelector('.search'),
      formContainer = document.querySelector('.form-search'),
      menu = document.querySelector('.menu'),
      searchClose = document.querySelector('.search-icon-close')

formSearch.addEventListener('click', () => {
    formContainer.classList.remove('hide')
    menu.classList.add('hide')

    searchClose.addEventListener('click', () => {
        formContainer.classList.add('hide')
        menu.classList.remove('hide')
    })
})

// document.querySelector('.search_input').oninput = function () {
//     let val = this.value.trim();
//     let coincidences = document.body
//     if (val != '') {
//         coincidences.forEach(function (elem){
//             if(elem.innerText.search(val) == -1){
//                 elem.classList.add('hide')
//             }
//             else {
//                 elem.classList.remove('hide')
//             }
//         })
//     } else {
//         coincidences.forEach(function (elem){
//             elem.classList.remove('hide')
//     })
//     }
// }

// let input,search,pr,result,result_arr, locale_HTML, result_store;

// locale_HTML = document.body.innerHTML;   // сохраняем в переменную весь body (Исходный)

// function FindOnPage(name, status) {

// 	input = document.querySelector('.search_input').value; //получаем значение из поля в html
	
// 	if(input.length < 3 && status == true) {
// 		alert('Для поиска вы должны ввести три или более символов');
// 		function FindOnPageBack() { document.body.innerHTML = locale_HTML; }   //обнуляем стили
// 	}
        
//         if(input.length>=3)
// 	{
//               function FindOnPageGo() {
//                      search = '/' + input + '/g';  //делаем из строки регуярное выражение
// 		     pr = document.body.innerHTML;   // сохраняем в переменную весь body
// 		     result = pr.match(/>(.*?)</g);  //отсекаем все теги и получаем только текст
// 		     result_arr = [];   //в этом массиве будем хранить результат работы (подсветку)

//              var warning = true;
//              for(var i=0;i<result.length;i++) {
//              if(result[i].match(eval(search))!=null) {
//                      warning = false;
//                  }
//              }
//              if(warning == true) {
//                  alert('Не найдено ни одного совпадения');
//              }

//             for(var i=0; i<result.length;i++) {
// 		        result_arr[i] = result[i].replace(eval(search), '<span style="background-color:yellow;">'+ input +'</span>'); //находим нужные элементы, задаем стиль и сохраняем в новый массив
// 			}
// 		     for(var i=0; i < result.length;i++) {
// 			pr=pr.replace(result[i],result_arr[i])  //заменяем в переменной с html текст на новый из новогом ассива
// 			}
// 		     document.body.innerHTML = pr;  //заменяем html код
//               }
//         }
//         function FindOnPageBack() { document.body.innerHTML = locale_HTML; }   //обнуляем стили
//         if(status) { FindOnPageBack(); FindOnPageGo(); } //чистим прошлое и Выделяем найденное
// 	if(!status) { FindOnPageBack(); } //Снимаем выделение
// }
