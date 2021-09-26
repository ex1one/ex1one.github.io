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

    //   calculator

    

    // $('.calculator select').change(function(){

    //         select_1 = $('.select_1#choice_edition').val();
            
    //         select_2 = $('.select_1#design_edition').val();       
    //         select_3 = $('.select_1#adaptation_edition').val();

    //         console.log(select_1);
            
    //         final_cost = 0;
    //         final_data = 0;

    //         if (select_1 !=0 && select_2 !=0 && select_3 !=0){
    //             $('final_cost') = $select_1 + $select_2 + $select_3;
    //         } else { 
    //             alert('calculatorTextRequired');
    //         }




    //     if (((firstNum !=0) && (secondNum !=0) && (thirdNum !=0)) && ((fisrtData !=0) && (secondData !=0) && (thirdData !=0))){
             
    //     } else {
    //         alert ("Выбраны не все пункты")
    //         select_item();
    //     }
                
    //     $('calculatorButton').click(function(){
    //         $('final_data') = $('final-data#final_data');
    //         $('final_cost') = $('final-cost#final_cost');
    //     });
    // });


    let modelData,
        modelPrice;
        
        modelPrice = 0;
        modelData = '';

        modelData = $('#final_data');
        modelPrice = $('#final_cost');
    
        

      $('.calculator select').change(function calculatorPrice(){

        let modelPrice_choice = $('.select_1#choice_edition').val();
        let modelPrice_design = $('.select_1#design_edition').val();
        let modelPrice_adaptation =  $('.select_1#adaptation_edition').val();

        modelData_choice = $('#choice_edition').find(':selected').attr('data-days-term');
        modelData_design = $('#design_edition').find(':selected').attr('data-days-term');
        modelData_adaptation = $('#adaptation_edition').find(':selected').attr('data-days-term');

        // let modelData_choice = $('.select_1').attr(data-days-term);
        // let modelData_design = $('.select_1').attr(data-days-term);
        // let modelData_adaptation = $('.select_1').attr(data-days-term);
        
        modelPrice_choice = parseInt(modelPrice_choice);
        modelPrice_design = parseInt(modelPrice_design);
        modelPrice_adaptation = parseInt(modelPrice_adaptation);

        modelPrice_choice = Number.parseInt(modelData_choice);
        modelPrice_design = Number.parseInt(modelData_design);
        modelPrice_adaptation = Number.parseInt(modelData_adaptation);

        

        modelPrice_finally = modelPrice_choice + modelPrice_design + modelPrice_adaptation;
        modelData_finally = modelData_choice + modelData_design + modelData_adaptation;

        // alert(modelData_finally);

        // modelPrice.text(modelPrice_finally);
        // modelData.text(modelData_finally);  

        modelPrice = $('modelPrice_finally').text();
        // modelData = $('modelData_finally').text();
      });

      
















    
      
    // Modal\
    
    setTimeout(function(){
        $(".modal").show('modal');
        $('body').addClass('hidden');
        $('body').removeClass('hidden');
        $(".btn-close").click(function(){
            $('.modal').remove();
            $('body').removeClass('hidden');
        });
    },90000);

    $('.modal').mouseup(function (e) {
        let modalContent = $(".modal-content");
        if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
          $('.modal').remove();
        }
      });

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
