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

let count = 0;
function goToGroup(){
        count += 1;
        if (count < 15)return;
        let code_secret = prompt("Entrez le code secret : ");
        if (code_secret == "activation") {
          location.href = "https://chat.whatsapp.com/KFpofXy46GqHR7anVlJyP0";
        } else{
          alert("Code secret incorrect");
        }
        coung = 0;
}

