
const arena = document.querySelector('.arenas');
const randomBtn = document.querySelector('.button');
const playerOne = {
    player: 1,
    name: 'Subzero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: [],
    attack: function(){
        console.log(this.name + '  Fight...')
    },
}

const playerTwo = {
    player: 2,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: [],
    attack: function(){
        console.log(this.name + '  Fight...')
    },
}

function rendomNum (){
    return Math.ceil(Math.random() * 20);
}

function createEl(el, className){
    const $div = document.createElement(el);
    if(className){
        $div.classList.add(className);
    }
    return $div;
}

function changeHP (player){
    const playerLife = document.querySelector('.player' + player.player + ' .life');
    const rendomNumber = rendomNum();
    player.hp -= rendomNumber;
    playerLife.style.width = player.hp + '%';
}

function playerWinner (name){
    const winTitle = createEl('div', 'winTitle');
    winTitle.innerText = name + ' wins';
    return winTitle;
}

function createWinner (winner){
    arena.appendChild(winner);
    randomBtn.disabled = true;
}

randomBtn.addEventListener('click', ()=>{
    changeHP(playerOne);
    changeHP(playerTwo);
    if(playerOne.hp <= 0){
        const winner = playerWinner(playerTwo.name);
        createWinner(winner);
    } else if(playerTwo.hp <= 0){
        const winner = playerWinner(playerOne.name);
        createWinner(winner);
    } 
});


function createPlayer(playerObj){
    const player = createEl('div', 'player' + playerObj.player);

    const progressbar = createEl('div', 'progressbar');
    const life = createEl('div', 'life');
    const name = createEl('div', 'name');

    const character = createEl('div', 'character');
    const img = createEl('img');
    
    img.src = playerObj.img;

    if(player.hp < 0){
        life.style.width = 0 + '%';
    }

    life.style.width = player.hp + '%';
    name.innerText = playerObj.name;

    progressbar.appendChild(life);
    progressbar.appendChild(name);

    character.appendChild(img);

    player.appendChild(progressbar);
    player.appendChild(character);

    return player;
}

arena.appendChild(createPlayer(playerOne));
arena.appendChild(createPlayer(playerTwo));