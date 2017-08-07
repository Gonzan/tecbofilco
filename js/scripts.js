// $(document).ready(function(){
//
//    // Smooth scroll
//    $('#main-nav a').smoothScroll();
//
//    // Validación de formulario
//    $("#contactForm").validate({
//       rules: {
//          firstName: {
//             required: true,
//             minlength: 2
//          },
//          lastName: {
//             required: true,
//             minlength: 2
//          },
//          email: {
//             required: true,
//             email: true
//          },
//          message: {
//             required: true,
//             minlength: 2
//          },
//       },
//       messages: {
//          firstName: {
//             required: "Por favor ingrese un nombre",
//             minlength: "Debe ingresar al menos dos caracteres"
//          },
//          lastName: {
//             required: "Por favor ingrese un apellido",
//             minlength: "Debe ingresar al menos dos caracteres"
//          },
//          email: {
//             required: "Por favor ingrese un correo electrónico",
//             email: "Por favor ingrese un correo electrónico válido"
//          },
//          message: "Por favor ingrese un mensaje"
//       },
//       submitHandler: function (form){
//          $.ajax({
//             url: 'php/form-process.php',
//             data: $("#contactForm").serialize(),
//             beforeSend: function() {
//                $('#messageSubmited').fadeOut();
//                $('#messageSubmitting').removeClass('hidden');
//                $('#preloader').show();
//             },
//             type: 'POST',
//             success: function(){
//                $('#contactForm').trigger('reset');
//                $('#messageSubmitting').addClass('hidden').fadeOut(); // reset submit button text
//                $('#messageSubmited').removeClass('hidden').fadeIn(); // reset submit button text
//                $('#preloader').hide();
//                $('#messageSubmited').delay(5000).fadeOut('slow');
//             },
//             error: function(e) {
//                console.log(e)
//             }
//          });
//       }
//    });
//
//    // Fancybox
//    $(".fancybox").fancybox({
//       helpers: {
//          title: null
//       }
//    });
//
// });
