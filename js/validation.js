//bootstrap 表單驗證
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

//三個方案其中一個變橘色,另外兩個就是白色
$(document).ready(function(){
    $('.btn-outline-success').click(function(e){
        $(this).addClass('check').parent('div').siblings().find('label').removeClass('check');
    })
})

//方案是否有選
const checkTypeChoose = ()=>{
    if($('.btn-outline-success').hasClass('check') == false){
            alert('請先選擇方案～～唷');
            return;
    }
}
const submitBtn = document.querySelector('button[type="submit"]');
submitBtn.addEventListener('click',function(e){
    checkTypeChoose();
}) 

