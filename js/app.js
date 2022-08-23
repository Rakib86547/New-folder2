function addPlayerNameById(player){
    const playerName = document.getElementById(player);
    const getPlayerName = playerName.innerText;

    const playerNameGet = document.getElementById('playerList-1');
    playerNameGet.innerText = getPlayerName;
};

document.getElementById('select-buttun').addEventListener('click', function(){
   
    
    addPlayerNameById('player-name');
    addPlayerNameById('playerList-1');
    
});

function addPlayerNameById2(player2){
    const playerName = document.getElementById(player2);
    const getPlayerName = playerName.innerText;

    const playerNameGet = document.getElementById('playerList-2');
    playerNameGet.innerText = getPlayerName;
};

document.getElementById('select-buttun2').addEventListener('click', function(){
   
    
    addPlayerNameById2('player-name2');
    addPlayerNameById2('playerList-2');
    
});
function addPlayerNameById2(player2){
    const playerName = document.getElementById(player2);
    const getPlayerName = playerName.innerText;

    const playerNameGet = document.getElementById('playerList-2');
    playerNameGet.innerText = getPlayerName;
};

document.getElementById('select-buttun2').addEventListener('click', function(){
   
    
    addPlayerNameById2('player-name2');
    addPlayerNameById2('playerList-2');
    
});


function addPlayerNameById3(player3){
    const playerName = document.getElementById(player3);
    const getPlayerName = playerName.innerText;

    const playerNameGet = document.getElementById('playerList-3');
    playerNameGet.innerText = getPlayerName;
};

document.getElementById('select-buttun3').addEventListener('click', function(){
   
    
    addPlayerNameById3('player-name3');
    addPlayerNameById3('playerList-3');
    
});


function addPlayerNameById4(player4){
    const playerName = document.getElementById(player4);
    const getPlayerName = playerName.innerText;

    const playerNameGet = document.getElementById('playerList-4');
    playerNameGet.innerText = getPlayerName;
};

document.getElementById('select-buttun4').addEventListener('click', function(){
   
    
    addPlayerNameById4('player-name4');
    addPlayerNameById4('playerList-4');
    
});

function addPlayerNameById5(player5){
    const playerName = document.getElementById(player5);
    const getPlayerName = playerName.innerText;

    const playerNameGet = document.getElementById('playerList-5');
    playerNameGet.innerText = getPlayerName;
};

document.getElementById('select-buttun5').addEventListener('click', function(){
   
    
    addPlayerNameById5('player-name5');
    addPlayerNameById5('playerList-5');
    
});

function addPlayerNameById5(player6){
    const playerName = document.getElementById(player6);
    const getPlayerName = playerName.innerText;

    const playerNameGet = document.getElementById('playerList-6');
    playerNameGet.innerText = getPlayerName;
};

document.getElementById('select-buttun6').addEventListener('click', function(){
   
    
    addPlayerNameById5('player-name6');
    addPlayerNameById5('playerList-6');
    
    
});






document.getElementById('total-calculat-btn').addEventListener('click', function(){
    const plyarExpensesField = document.getElementById('player-expenses');
    const playerExpenseePriceString = plyarExpensesField.innerText;
    const plyaerExepensesPrice = parseFloat(playerExpenseePriceString);
    

    const managerPrice = document.getElementById('manager-price');
    const getManagerPriceString = managerPrice.innerText;
    const getManagerPrice = parseFloat(getManagerPriceString);

    const coachPrice = document.getElementById('coach-price');
    const getCoachPriceString = coachPrice.innerText;
    const getCoachPrice = parseFloat(getCoachPriceString);

   

    const totalManagementPrice = plyaerExepensesPrice + getManagerPrice + getCoachPrice;
    console.log(totalManagementPrice)
    

    
    const totalAmmountField = document.getElementById('total-ammount');
    const totalAmmount = totalAmmountField.innerHTML;
    totalAmmountField.innerText = totalManagementPrice;
})