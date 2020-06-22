// the mobile view navbar
const open = document.querySelector('.mobile-menu');
const close = document.querySelector('.close');
const show = document.querySelector('#nav');
const mustGo = document.querySelector('.landing');

show.style.display = 'none';

open.addEventListener('click', () =>{
  show.style.display = 'block';
  mustGo.style.display = 'none';
  open.style.display = 'none';
  close.style.display = 'block';
  document.body.style.backgroundColor = 'rgb(57, 68, 80)';
});

close.addEventListener('click', ()=>{
    mustGo.style.display = 'block';
    show.style.display = 'none';
    open.style.display = 'block';
    close.style.display = 'none';
    document.body.style.backgroundColor = 'black';
});

