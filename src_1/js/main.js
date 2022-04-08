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
       
        if (((modelPrice_choice !=0) && (modelPrice_design !=0) && (modelPrice_adaptation !=0)) && ((modelData_choice !=0) && (modelData_design !=0) && (modelData_adaptation !=0)) ) {
            modelPrice_finally = modelPrice_choice + modelPrice_design + modelPrice_adaptation;
            modelData_finally = modelData_choice + modelData_design + modelData_adaptation;
            $('#final_cost').text(modelPrice_finally);
            $('#final_data').text(modelData_finally);
            $('#calculatorTextRequired').hide();
            $('.calculatorIcon').hide();
        }  else {
            calculatorShowBility();
            $('#calculatorTextRequired').show();
        }
        
        function calculatorShowBility(){
            if ($("#choice_edition").val()) {  
                $('.calculatorIconFirst').hide()
            } else {
                $('.calculatorIconFirst').show()
            } if ($("#design_edition").val()){
                $('.calculatorIconSecond').hide()
            } else {
                $('.calculatorIconSecond').show()
            } if ($("#adaptation_edition").val()){
                $('.calculatorIconThird').hide()
            } else {
                $('.calculatorIconThird').show()
            }
        };     
      });

     
    // Modal\
    
    setTimeout(function(){
        $(".modalWindow").show('modal');
        $('body').addClass('hidden');
        $(".btn-close").click(function(){
            $('.modal').hide();
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

    let options = {threshold: [1]};
      let observer = new IntersectionObserver(onEntry, options);
      let elements = $('.title-statistics');
      elements.each((i,el) => {
        observer.observe(el);
      });

      function onEntry (entry) {
          entry.forEach(change => {
            if (change.isIntersecting){
                runNumbers();
            }
          });
      }

    function runNumbers(){
        $('.title-statistics').each(function (){
            $(this).prop('Counter', 0).animate ({
                Counter: $(this).text()
            }, {
                duration: 4500,
                easing: 'swing',
                step:function(now){
                    $(this).text(Math.ceil(now));
                }
            });
        }); 
    } 

    // ajax

    $('#form').submit(function(event){
        event.preventDefault();

        $.ajax({
            type: "POST", 
            url: "php/mail.php",
            data: $(this).serialize(),
            cache: false,
            dataType: 'html',
            beforeSend: function(){
                $('#input-submit').prop("disabled", true);
                $('.spinner-one').show();
            },
            success: function () {
                $('#modalAnswer').show();
                $('.spinner-one').hide();
                $('body').addClass('hidden');
                $('#input-submit').prop("disabled", false);
            } 
        });
        
        $('#btn-modal-close').on("click", function(event){
            event.preventDefault();

            $('#modalAnswer').hide();
            $('body').removeClass('hidden');

        });
    });

    $('#form_modal_window').submit(function(event){
        event.preventDefault();

        $.ajax({
            type: "POST", 
            url: "php/mail.php",
            data: $(this).serialize(),
            cache: false,
            dataType: 'html',
            beforeSend: function(){
                $('#input_submit_1').prop("disabled", true);
                $('.spinner-two').show();
            },
            success: function () {
                $('#modal').hide();
                $('#modalAnswer').show();
                $('.spinner-two').hide();
                $('body').addClass('hidden');
                $('#input_submit_1').prop("disabled", false);
            } 
        });
        
        $('#btn-modal-close').on("click", function(event){
            event.preventDefault();

            $('#modalAnswer').hide();
            $('body').removeClass('hidden');

        });
    });
});
