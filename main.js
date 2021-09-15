function answer () {
     let calculator = confirm ("Рассчитать стоимость сайта?")

   if (calculator == true) {
        select_item();
    };
};

let firstNum = 0;
let secondNum = 0;
let thirdNum = 0;

answer();



    function select_item  () {
         let typeSite = prompt ("Выберите пункт: Тип сайта, Дизайн, Адаптивность.")
         if (typeSite == null){}
           else if (typeSite === "Тип сайта"){
                choice();
            }   else if (typeSite === "Дизайн") {
                design();
            } else if (typeSite === "Адаптивность") {
                adaptation();
            }  else  {
                alert("Выбран Неверный пункт.");
                select_item();
            };   
};


function choice (){


    let a = prompt ("Сайт-визитка, Корпоративный, Лэндинг.")
    if (a == null){}
                else if (a === "Сайт-визитка"){
                    firstNum = 1;
                } else if (a === "Корпоративный"){
                    firstNum = 2;
                } else if (a === "Лэндинг"){
                    firstNum = 3;
                } else {
                    alert("Выбран Неверный пункт.")
                    choice();
                };

                if ((firstNum !=0 && (secondNum !=0 || thirdNum !=0))){
                    secondChecking();
                } else  {
                    alert("Выбраны не все пункты");
                    select_item();
                }
                return firstNum;   
                
};

function design (){


    let a = prompt ("Разработка, Макет, Шаблон.")
    if (a == null){}
                else if (a === "Разработка"){
                    secondNum = 1;
                } else if (a === "Макет"){
                    secondNum = 2;
                } else if (a === "Шаблон"){
                    secondNum = 3;
                } else {
                    alert("Выбран Неверный пункт.")
                    design();
                };

                if ((secondNum !=0 && (firstNum !=0 || thirdNum !=0))){
                    secondChecking();
                } else {
                    alert("Выбраны не все пункты");
                    select_item();
                }
                return secondNum;   
                
};

function adaptation (){


    let a = prompt ("Резиновый, Адаптивный, PP.")
    if (a == null){}
                else if (a === "Резиновый"){
                    thirdNum = 1;
                } else if (a === "Адаптивный"){
                    thirdNum = 2;
                } else if (a === "PP"){
                    thirdNum = 3;
                } else {
                    alert("Выбран Неверный пункт.")
                    adaptation();
                };

                if ((thirdNum !=0 && (firstNum !=0 || secondNum !=0))){
                    secondChecking();
                } else {
                    alert("Выбраны не все пункты");
                    select_item();
                }
                return thirdNum;           
};  

function secondChecking (){
    if ((firstNum !=0) && (secondNum !=0) && (thirdNum !=0)){
        checking();
    } else {
        alert ("Выбраны не все пункты")
        select_item();
    }
}

function checking (){

    let all;
    all = firstNum + secondNum + thirdNum;
    alert (all + "Стоимость сайта.");

    let checkAgain = confirm ("Рассчитать стоимость сайта ещё раз?")
    if (checkAgain == null){}
     if (checkAgain != true){ 
     } else {
         answer();
     }
}   










       

