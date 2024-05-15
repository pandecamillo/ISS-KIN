const btnMenu = document.getElementById('menu');
const navBar = document.getElementById('navigation')

let active = false;

btnMenu.addEventListener('click',function(){
    if(active){
        navBar.style.display = "none";
        btnMenu.src = "menu.png";
        active = false;
    }else{
        navBar.style.display = "inline";
        btnMenu.src = "closemenu.png";
        active = true;
    }
})

function goToGroup(){
    location.href = 'https://chat.whatsapp.com/KFpofXy46GqHR7anVIJyP0'
}
