let btn = document.querySelector('#btn');
let navbar = document.querySelector(".navbar");

btn.addEventListener('click',function open_close(){

    let initialText = 'Menu';

    if(btn.textContent.toLowerCase().includes(initialText.toLowerCase()))
    {
    btn.textContent = 'Close';
    }
    else
    {
    btn.textContent = initialText ;
    }

    navbar.classList.toggle("show_bar");
     })
