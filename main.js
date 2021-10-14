const playerOne = {
    name: 'Subzero',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: [],
    attack: function(){
        console.log(this.name + '  Fight...')
    }
}

const playerTwo = {
    name: 'Scorpion',
    hp: 70,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: [],
    attack: function(){
        console.log(this.name + '  Fight...')
    }
}

playerOne.attack();
playerTwo.attack();

function createEl(el, className){
    const $div = document.createElement(el);
    $div.classList.add(className);
    return $div;
}

function createPlayer(player, playerClassName){
    const arena = document.querySelector('.arenas');
    const player1 = createEl('div', playerClassName);

    const progressbar = createEl('div', 'progressbar');
    const life = createEl('div', 'life');
    const name = createEl('div', 'name');

    const character = createEl('div', 'character');
    const img = createEl('img', );
    
    img.src = player.img;

    life.style.width = player.hp + '%';
    name.innerText = player.name;

    progressbar.appendChild(life);
    progressbar.appendChild(name);

    character.appendChild(img);

    player1.appendChild(progressbar);
    player1.appendChild(character);

    arena.appendChild(player1);
}

createPlayer(playerOne, 'player1');
createPlayer(playerTwo, 'player2');
