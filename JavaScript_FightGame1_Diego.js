//My variables
let damage = 10;
let enemy1health = 100;
//Player variables
let cash = 0;
let player1health = 100;
let enemyDamage = 10;
//Health and money function
        setInterval(function()
        {
            document.getElementById("cash").innerHTML = cash;
            let healthvariable = document.getElementById("health")
            healthvariable.value = enemy1health;

            if (enemy1health <= 1)
                {
                    enemy1health = 100;
                    let amountgiven = Math.floor(Math.random() * 200 + 1);
                    cash += amountgiven;
                    player1health ++;
                }
        }, 1);

//Damage the enemy
function attackEnemy()
{
    enemy1health -= damage;
    enemyDamage = 80;
}
//Player health function
setInterval(function()
        {
            document.getElementById("cash").innerHTML = cash;
            let playerhealthvariable = document.getElementById("playerHealth")
            playerhealthvariable.value = player1health;

            if (player1health <= 1)
                {
                    player1health = 2;
                    let amountgiven = Math.floor(Math.random() * 100 + 1);
                    cash -= amountgiven;
                    alert("YOU LOSE!")
                }
        }, 1);

//Timer set
const timeH = document.querySelector('h1');
let timeSecond = 10;

function endTime()
{
    timeH.innerHTML = 'INCOMING ATTACK!'
    player1health -= enemyDamage;
    timeSecond = 10;
}

//Inconming enemy damage
function startMatch()
{
    displayTime(timeSecond)

const countdown = setInterval (()=>{
    timeSecond--;
    displayTime(timeSecond);
    if(timeSecond <= 0 || timeSecond < 1){
        endTime();
        clearInterval(countdown);
    }
},1000)

function displayTime(second){
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timeH.innerHTML= `${min<10 ? '0': ''}${min}:${sec<10?'0':''}${sec}`
}
}

//Block Incoming damage
function blockEnemy()
{
    enemyDamage = 0;
}
//Restart the match
function restartMatch()
{
    player1health = 90
    enemy1health = 100
    timeSecond = 15
    enemyDamage = 60
    startMatch();
}

