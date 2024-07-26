document.getElementById('manu-close').addEventListener('click',function(){

    const mobileManu = document.getElementById('manu');
     mobileManu.classList.add("md-display-hidden");

     const openManu = document.getElementById('open-manu');
     openManu.classList.remove('md-display-hidden')
     const closeManu = document.getElementById('manu-close');
     closeManu.classList.add('md-display-hidden')
});


document.getElementById('open-manu').addEventListener('click',function(){

    const mobileManu = document.getElementById('manu');
     mobileManu.classList.remove("md-display-hidden");

     const openManu = document.getElementById('open-manu');
     openManu.classList.add('md-display-hidden');
     
     
     const closeManu = document.getElementById('manu-close');
     closeManu.classList.remove('md-display-hidden')
});
