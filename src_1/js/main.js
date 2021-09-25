$(document).ready(function(){

    new WOW (). init (); 

    $(window).scroll(function(){
        let scrollDistance = $(window).scrollTop();

        $(".section").each((i, el) =>{
            if ($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
                $("nav a").each((i, el) =>{
                    if ($(el).hasClass("active")){
                        $(el).removeClass("active");
                    }
                });

                $('nav li:eq('+ i +')').find('a').addClass('active');
            }
        });
    });

    $(document).ready(function() {
        $('.image-link').magnificPopup({type:'image'});
      });
      
      $('.slider').slick();

    // let options = {threshold: [0,5]};
    //     let observer = new IntersectionObserver(onEntry, options);
    //     let elements = $('.element-animation');
    //     elements.each((i, el) => {
    //         observer.observe(el);
    //     });
        
    //     function onEntry(entry){
    //         entry.forEach(change =>{
    //             if (change.isIntersecting){

    //                 change.target.classList.add('show-animation');
    //                 change.targer.src = change.target.dataset.src;
    //             }
    //         });
    //     }


    //   calculator

    

    $('.calculator select').change(function(){

            select_1 = $('.select_1#choice_edition').val();
            data_term_days = $(data-term-days).val();
            select_2 = $('.select_1#design_edition').val();       
            select_3 = $('.select_1#adaptation_edition').val();

            console.log(select_1, data_term_days);
            
            final_cost = 0;
            final_data = 0;

            if (select_1 !=0 && select_2 !=0 && select_3 !=0){
                $('final_cost') = $select_1 + $select_2 + $select_3;
            } else { 
                alert('calculatorTextRequired');
            }




        if (((firstNum !=0) && (secondNum !=0) && (thirdNum !=0)) && ((fisrtData !=0) && (secondData !=0) && (thirdData !=0))){
             
        } else {
            alert ("Выбраны не все пункты")
            select_item();
        }
                
        $('calculatorButton').click(function(){
            $('final_data') = $('final-data#final_data');
            $('final_cost') = $('final-cost#final_cost');
        });
    });

    
      
    // Modal\
    
    // setTimeout(function(){
    //     $(".modal").show('modal');
    // },1000);

   

    // Animation

    $('.title-statistics').each(function(){
        $(this).prop('Counter', 0).animate ({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step:function(now){
                $(this).text(Math.ceil(now));
            }
        });
    });
});













       

