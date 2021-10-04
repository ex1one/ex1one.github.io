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
 
       modelPrice_choice = 0;
       modelPrice_design = 0;
       modelPrice_adaptation = 0;

       
        
      $('#calculatorButtonSubmit').click(function(){

        let modelPrice_choice = $('.select_1#choice_edition').val() || 0;
        let modelPrice_design = $('.select_1#design_edition').val() || 0;
        let modelPrice_adaptation =  $('.select_1#adaptation_edition').val() || 0;

        let modelData_choice = $('#choice_edition').find(':selected').attr('data-days-term');
        let modelData_design = $('#design_edition').find(':selected').attr('data-days-term');
        let modelData_adaptation = $('#adaptation_edition').find(':selected').attr('data-days-term');
        
        modelPrice_choice = parseInt(modelPrice_choice);
        modelPrice_design = parseInt(modelPrice_design);
        modelPrice_adaptation = parseInt(modelPrice_adaptation);

        modelData_choice = Number.parseInt(modelData_choice);
        modelData_design = Number.parseInt(modelData_design);
        modelData_adaptation = Number.parseInt(modelData_adaptation);
       
        if ((modelPrice_choice !=0) && (modelPrice_design !=0) && (modelPrice_adaptation !=0) && (modelData_choice !=0) && (modelData_design !=0) && (modelData_adaptation !=0) ) {
            modelPrice_finally = modelPrice_choice + modelPrice_design + modelPrice_adaptation;
            modelData_finally = modelData_choice + modelData_design + modelData_adaptation;
            $('#final_cost').text(modelPrice_finally);
            $('#final_data').text(modelData_finally);
            $('#calculatorTextRequired').hide();
        } else   {
            $('#calculatorTextRequired').show();
        };
      });
     
    // Modal\
    
    setTimeout(function(){
        $(".modal").show('modal');
        $('body').addClass('hidden');
        $(".btn-close").click(function(){
            $('.modal').remove();
            $('body').removeClass('hidden');
        });
    },90000);

    $('.modal').mouseup(function (e) {
        let modalContent = $(".modal-content");
        if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
          $('.modal').remove();
          $('body').removeClass('hidden');
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

    $('#form').submit(function(event){
        event.preventDefault();

        $.ajax({
            type: "POST",
            url: "php/mail.php",
            data: $(this).serialize(),
        }).done(function(){
            $("this").find("input").val("");
            
                $('#modalAnswer').show();
                $('.spinner-one').hide();  
            $("form").trigger("reset");
        });

        if ($('ajax'))    {
             $('#modalAnswer').addClass('styleModalAnswer');
              $('#modal').hide();
        }

        return false;
    });

    // $('#input-submit').on("click", function(){
        
    //     $.ajax({
    //         type: "POST",
    //         url: "php/mail.php",
    //         data: $('#form').serialize(),
    //         dataType: 'html',
    //         beforeSend: function(){
    //             $('#input-submit').prop("disabled", true);
    //             $('.spinner-one').show();
    //         },
    //         success: function(){
    //             $('#modalAnswer').show();
    //             $('.spinner-one').hide();
    //             $('#input-submit').prop("disabled", false);
    //         },
    //     });

    //     if $('ajax')    {
    //         $('#modalAnswer').addClass('d-flex');
    //         $('#modal').hide();
    //     }
    // });

    // $('#input_submit_1').click(function(){
    //     $.ajax({
    //         type: "POST",
    //         url: "php/mail.php",
    //         data: $('.form_modal_window_1').serialize(),
    //         error: function(){$("#erconts").html("Произошла ошибка!");},
    //         beforeSend: function(){
    //             $("#erconts").html("<p style =' color: orangered;'>Отправляем данные...</p>");
    //         },
    //         success: function(result){
    //             $('#erconts').html(result);
    //             checkThis();
    //         }
    //     });
    //     return false;
    // });
    
    // $('#input_submit_1').click(function(){
    //     $('.spinner-two').show();
    // });

    // $('#input-submit').click(function(){
    //     $('.spinner-one').show();
    // });

});
