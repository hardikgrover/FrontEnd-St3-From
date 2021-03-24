const wrapper = document.querySelector('.wrapper'),
form = wrapper.querySelectorAll('.form'),
submitInput = form[0].querySelector('input[type = "submit"]');

function getDataFrom(e){
    e.preventDefault();

    var formData = new FormData(form[0]);

    alert(formData.get('name'));


}

document.addEventListener('DOMContentLoaded',function(){
    submitInput.addEventListener('click',getDataFrom,false);
},false);