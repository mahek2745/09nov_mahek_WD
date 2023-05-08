// let btn = document.querySelector('.bar_icon1')
// let sidebar = document.querySelector(".side_menu")

// btn.addEventListener('click', function open_close(){

//     sidebar.classList.toggle("show_sidemenu")

// })



$(document).ready(function()
{
    $('#slider').cycle('scrollRight');
})

$(document).ready(function(){
    $('.bar_icon1').click(function(){
        $('.side_menu').toggle('slow');
    })
});


  
