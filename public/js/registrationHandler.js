$(document).ready(function(){
  function check(){
    var Fname = $('form input#name').val()
    var Uname = $('form input#username').val()
    var Email = $('form input#email').val()
    var Password = $('form input#password').val()
    var PasswordC = $('form input#password2').val()
    var chck = true

    if (Fname === "") {
      $('.hide')[0].style.display = "block"
      chck = false
    }
    if (Uname === "") {
      $('.hide')[1].style.display = "block"
      chck = false
    }
    if (Email === "") {
      $('.hide')[2].style.display = "block"
      chck = false
    }
    if (Password === "") {
      $('.hide')[3].style.display = "block"
      chck = false
    }
    if (PasswordC === "") {
      $('.hide')[4].style.display = "block"
      chck = false
    }

    if (chck) {
      var query = {
        name      : Fname,
        username  : Uname,
        email     : Email,
        password  : Password,
        password2 : PasswordC
      }

      $.ajax({
        type: 'POST',
        url: '/users/register',
        data: query,
        success: function(data){
          location.reload()
          console.log("Success")
          console.log(data)
        }
      })
    }
  }
  $('#name').on("focus",function() {
    $('.hide')[0].style.display = "none"
  })
  $('#username').on("focus",function() {
    $('.hide')[1].style.display = "none"
  })
  $('#email').on("focus",function() {
    $('.hide')[2].style.display = "none"
  })
  $('#password').on("focus",function() {
    $('.hide')[3].style.display = "none"
  })
  $('#password2').on("focus",function() {
    $('.hide')[4].style.display = "none"
  })
  
  
  $('#name').on("blur",function() {
    if ($(this).val() === ""){
      $('.hide')[0].style.display = "block"
    }
  })
  $('#username').on("blur",function() {
    if ($(this).val() === ""){
      $('.hide')[1].style.display = "block"
    }
  })
  $('#email').on("blur",function() {
    if ($(this).val() === ""){
      $('.hide')[2].style.display = "block"
    }
  })
  $('#password').on("blur",function() {
    if ($(this).val() === ""){
      $('.hide')[3].style.display = "block"
    }
  })
  $('#password2').on("blur",function() {
    if ($(this).val() === ""){
      $('.hide')[4].style.display = "block"
    }
  })
})