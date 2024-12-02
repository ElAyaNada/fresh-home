let input_menage = document.getElementById('input_menage');
let input_cuisine = document.getElementById('input_cuisine');
let input_baby = document.getElementById('input_baby');
let menage = document.getElementById("menage");
let cuisine = document.getElementById('cuisine');
let baby = document.getElementById('baby');
let urgent =document.getElementById('urgent');
let background = document.querySelector('body');
let image = document.getElementById('img');
let label = document.getElementsByClassName('darkmode');
menage.style.display ="none";
cuisine.style.display ="none";
baby.style.display ="none";
urgent.style.display ="none";
let ischow=true;
let ischow1=true;
let ischow2=true;
let DarkMode = false ;

function darkMode() {
    if (!DarkMode) {  
        background.style.backgroundColor = 'black';
         DarkMode = true;
        image.src='https://img.icons8.com/?size=160&id=q4yXFoEnYRH7&format=png';
        background.style.color='#eed8b0';
        
    }
    else{
        background.style.backgroundColor = '#eed8b0';
        DarkMode = false; 
        image.src = 'https://cdn-icons-png.flaticon.com/512/6714/6714978.png';
        background.style.color='black';
    }
   }
input_menage.addEventListener("change",function (){
    if(ischow){
    menage.style.display ="block";
ischow=false;}
else{
    menage.style.display ="none";
    ischow=true;
}
   })
   input_cuisine.addEventListener("change",function (){
    if(ischow1){
        cuisine.style.display ="block";
    ischow1=false;}
    else{
        cuisine.style.display ="none";
        ischow1=true;
    }
   })
   input_baby.addEventListener("change",function (){ 
    if(ischow2){
    baby.style.display ="block";
ischow2=false;}
else{
    baby.style.display ="none";
    ischow2=true;
}
   })