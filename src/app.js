let hovericon = document.querySelector('.hovericon')  
let p = document.querySelectorAll('.design p') 
hovericon.addEventListener('mouseover',()=>{
  p.forEach(element => {
    element.classList.remove('ops')
  });
}) 
hovericon.addEventListener('mouseout',()=>{
  p.forEach(element => {
    element.classList.add('ops')
  });
}) 

