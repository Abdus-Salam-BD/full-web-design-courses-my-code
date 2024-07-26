document.getElementById('show-contect').addEventListener('mouseenter', function(){
   const showMe = document.getElementById('show-me');
   showMe.classList.remove('display-hidden')
})
document.getElementById('show-contect').addEventListener('mouseleave', function(){
   const showMe = document.getElementById('show-me');
   showMe.classList.add('display-hidden')
})