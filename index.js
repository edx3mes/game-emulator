// DEFAULT VARIABLES

// CANVAS DATA
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// GAME DATA
var playerImg = new Image();
var enemyImg = new Image();
var logoImg = new Image();
var sceneImg = new Image();
var pause = false;
var titleGame = "";
var background = "lightgray";
var fontColor = "white";
var gameSelected = "";
var scene = "";
var melodyGame = "";
var audioGame = null;
var audioAction = null;
var gameOverSound = "";
var audioActionData = { up:'', left:'', right:'', down: '', action_x: '', action_o: '' };

// DEFAULT DATA 
var titleData = { x: 0, y: 0, w: 0, h: 0 };
var logoData = { x: 0, y: 0, w: 0, h: 0 };
var playerData = { x: 0, y: 0, w: 0, h: 0 };
var enemyData = { x: 0, y: 0, w: 0, h: 0 };
var gameOverData = { x: 0, y: 0, w: 0, h: 0 };

// DOCUMENT READY GET EVENTS
$(document).ready(function () {
  let { x, y, w, h } = { ...playerData };

  $('#left').click(function () {
    x -= 1;
    playAudioWithActions('left');
    console.log('press left', x);
  });
  
  $('#down').click(function () {
    x += 1;
    playAudioWithActions('down');
    console.log('press right', x);
  });

  $('#right').click(function () {
    x += 1;
    playAudioWithActions('right');
    console.log('press right', x);
  });

  $('#up').click(function () {
    y -= 1;
    playAudioWithActions('up');
    console.log('press up', y);
  });
  
  $('#action_o').click(function () {
    playAudioWithActions('action_o');
    console.log('press o', y);
  });
  
  $('#action_x').click(function () {
    playAudioWithActions('action_x');
    console.log('press x', y);
  });

  $('#start').click(function () {
    playAudioWithActions('start');
    console.log('start');
  });

  $('#cantridge').change();
})


//EVENT KEYBOARD
$(document).keydown(function (e) {
  if (!pause) {

    switch (e.keyCode) {
      case 32: // SPACE
        $('#up').click();
        $('#up li:first').mouseenter().mouseleave();
        // console.log('press space');
        break;
      case 37: // LEFT
        $('#left').click();
        $('#left li:first').mouseenter().mouseleave();
        // console.log('press left');
        break;
      case 39: // RIGHT
        $('#right').click();
        $('#right li:first').mouseenter().mouseleave();
        //console.log('press right');
        break;
      case 13: // ENTER
        //console.log('press enter');
        $('#start').click();
        pause = !pause;
        gameStart();
        break;
    }
  }
});

//SELECT GAME
$('#cantridge').change(function () {
  console.log('you selected this cantridge', $(this).val());

  playerImg = new Image();
  enemyImg = new Image();
  logoImg = new Image();
  pause = false;
  titleGame = "";
  background = "lightgray";
  fontColor = "white";

  titleData = { x: 0, y: 0, w: 0, h: 0 };
  logoData = { x: 0, y: 0, w: 0, h: 0 };
  playerData = { x: 0, y: 0, w: 0, h: 0 };
  enemyData = { x: 0, y: 0, w: 0, h: 0 };

  gameSelected = $(this).val();
  let logo_src = "";
  let player_src = "";
  let enemy_src = "";
  clearCanvas();

  switch (gameSelected) {
  
    case 'car':
      melodyGame = "https://codeskulptor-demos.commondatastorage.googleapis.com/descent/background%20music.mp3";
      titleData = { x: 110, y: 50, w: 50, h: 50 };
      logoData = { x: 110, y: 100, w: 50, h: 50 };
      playerData = { x: 110, y: -250, w: 25, h: 25 };
      enemyData = { x: 110, y: 300, w: 50, h: 50 };
      audioActionData = { 
                          up: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3',
                          left: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3',
                          right: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3',
                          start: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3'
                        };
  
      titleGame = "[ Car ]";
      background = "blue";
      fontColor = "white";
      logo_src = "https://static.vecteezy.com/system/resources/previews/001/193/859/original/sedan-car-png.png"
      player_src = "https://static.vecteezy.com/system/resources/previews/001/193/859/original/sedan-car-png.png";
      enemy_src = "https://w7.pngwing.com/pngs/457/658/png-transparent-car-top-view-blue-convertible-coupe-illustration-compact-car-blue-plan-thumbnail.png";
      break;
  
    case 'dash':
      melodyGame = "https://codeskulptor-demos.commondatastorage.googleapis.com/descent/background%20music.mp3";
      titleData = { x: 110, y: 50, w: 50, h: 50 };
      logoData = { x: 110, y: 100, w: 50, h: 50 };
      playerData = { x: 110, y: -250, w: 25, h: 25 };
      enemyData = { x: 110, y: 300, w: 50, h: 50 };
      audioActionData = { 
                          up: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3',
                          left: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3',
                          right: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3',
                          start: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3'
                        };
  
      titleGame = "[ Dash ]";
      background = "red";
      logo_src = "https://images.vexels.com/media/users/3/301763/isolated/lists/a14b2ed6485fffeb2015f80d6fa62a5d-personaje-de-kawaii-de-dibujos-animados-de-naves-espaciales.png";
      player_src = "https://images.vexels.com/media/users/3/301763/isolated/lists/a14b2ed6485fffeb2015f80d6fa62a5d-personaje-de-kawaii-de-dibujos-animados-de-naves-espaciales.png";
      enemy_src = "https://w7.pngwing.com/pngs/198/328/png-transparent-cartoon-spacecraft-cartoon-hand-painted-flashing-science-fiction-spacecraft-watercolor-painting-cartoon-character-light-fixture.png";
      break;
  
    case 'jump':
  
      melodyGame = "https://codeskulptor-demos.commondatastorage.googleapis.com/descent/background%20music.mp3";
      titleData = { x: 110, y: 50, w: 50, h: 50 };
      logoData = { x: 110, y: 100, w: 50, h: 50 };
      playerData = { x: 110, y: -250, w: 25, h: 25 };
      enemyData = { x: 110, y: 300, w: 50, h: 50 };
      audioActionData = { 
                          up: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3',
                          left: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3',
                          right: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3',
                          start: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3'
                        };
  
      titleGame = "[ Jump ]";
      background = "green";
      fontColor = "white";
  
      logo_src = "https://png.pngtree.com/png-vector/20221214/ourmid/pngtree-neon-square-border-with-effect-png-image_6523023.png";
      player_src = "https://www.pngall.com/wp-content/uploads/5/Sports-Ball-Transparent.png";
      enemy_src = "";
  
      break;
  
    default:
        if (audioGame !== null) {
        audioGame.pause();
      }
      melodyGame = "";
      titleData = { x: 65, y: 60, w: 50, h: 50 };
      logoData = { x: 110, y: 100, w: 50, h: 50 };
      playerData = { x: 110, y: -250, w: 25, h: 25 };
      enemyData = { x: 110, y: 300, w: 50, h: 50 };
        
      background = "gray";
      titleGame = "Select an cantridge";
      fontColor = "white";
  
      logo_src = "https://upload.wikimedia.org/wikipedia/commons/8/88/Gba-cartridge.png";
      player_src = "https://www.pngall.com/wp-content/uploads/5/Sports-Ball-Transparent.png";
      enemy_src = "";
      break;
  }
  
  if (logo_src !== "") {
    logoImg.src = logo_src;
  }

  if (player_src !== "") {
    playerImg.src = player_src;
  }

  if (enemy_src !== "") {
    enemyImg.src = enemy_src;
  }

  if (melodyGame !== "") {
    if (audioGame !== null) {
      audioGame.pause();
    }
    audioGame = new Audio(melodyGame);
    playAudioLoop();
  }

  if (gameSelected !== '') {
    $('#icon').html('<i class="fa fa-toggle-on text-success"></i>');
  } else {
    $('#icon').html('<i class="fa fa-toggle-off text-danger"></i>');
  }

  drawTitle(logo_src, titleGame, titleData.x, titleData.y, logoData.x, logoData.y, logoData.w, logoData.h);

})

function playAudioLoop() {
	if( audioGame !== null ) {
    audioGame.addEventListener('ended', () => {
      playAudioLoop();
    });
    audioGame.play();
  }
};

function playAudioWithActions(action = '') {
  if(gameSelected !== '') {
   var audioAction = null;
    if (action !== '') {
      switch (action) {
        case 'up':
          audioAction = new Audio(audioActionData.up);
          break;
        case 'left':
          audioAction = new Audio(audioActionData.left);
          break;
        case 'right':
          audioAction = new Audio(audioActionData.right);
          break;
        case 'start':
          audioAction = new Audio(audioActionData.start);
          break;
        }
        audioAction.play();
    }
  }
}

function enemyUpdate() {
  switch (gameSelected) {
    case 'car':

      break;
    case 'dash':

      break;
    case 'jump':

      break;
  }
}

function update() {
  if (pause) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (detectCollision(playerImg, enemyImg, playerData.x, playerData.y, enemyData.x, enemyData.y)) {
      console.log('stop');
      alert('GAME OVER')
    } else {
      setTimeout(() => {
        requestAnimationFrame(draw);
      }, 10);
    }
  }
}

// DEFAULT FUNCTIONS
function gameRefresh() {

}

function gamePause() {
  pause = !pause;
}

function gameStart() {
  pause = false;
  restartGame();
  update();
}

function gameOver() {

  pause = true;
  if (audioGame !== null) {
    audioGame.pause();
  }

  let audioGameOver = null;
  if (gameOverSound !== '') {
    audioGameOver = new Audio(gameOverSound);
    audioGameOver.play();
  }

  melodyGame = "";
  titleData = { x: 65, y: 60, w: 50, h: 50 };
  logoData = { x: 110, y: 100, w: 50, h: 50 };
  playerData = { x: 110, y: -250, w: 25, h: 25 };
  enemyData = { x: 110, y: 300, w: 50, h: 50 };
  titleGame = "";
  background = "gray";
  titleGame = "Game Over!";
  logo_src = "";

  drawTitle(logo_src, titleGame, titleData.x, titleData.y, logoData.x, logoData.y, logoData.w, logoData.h);
}

function restartGame() {
  switch (gameSelected) {
    case 'car':

      break;
    case 'dash':

      break;
    case 'jump':

      break;
  }
}

// MACHINE
function drawImages(img, x, y, w, h) {
  ctx.drawImage(img, x, y, w, h);
}

function drawTitle(urlImg = '', text = '', titleX, titleY, x = 0, y = 0, w = 25, h = 25) {
  if (background !== '') {
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  if (text !== '') {

    if (urlImg !== '') {
      logoImg.src = urlImg;
      logoImg.onload = function () {
        ctx.fillStyle = fontColor;
        ctx.fillRect(logoImg, x, y, w, h);
        ctx.drawImage(logoImg, x, y, w, h);
      };
    }

    ctx.fillStyle = fontColor;
    ctx.font = "15px Arial";
    ctx.fillText(`${text} `, titleX, titleY);
    ctx.font = "10px Arial";
    ctx.fillText("[ Press Start Or Enter ] ", 90, 200);

  } else {

    ctx.fillStyle = fontColor;
    ctx.font = "15px Arial";
    ctx.fillText(`You must select cantridge`, titleX, titleY);

  }

}

function animationScenceController(action = '', array_img = []) {

}

function animationEnemyController(action = '', array_img = []) {

}

function animationController(key, array_img = []) {
  switch (key) {
    case "up":

      break;
    case "left":

      break;
    case "right":

      break;
    case "start":

      break;
  }
}

function animationCollision(array_img_collision = []) {

}

function detectCollisions(imageData1, imageData2, playerX, playerY, enemyX, enemyY) {
  for (let i = 0; i < imageData1.data.length; i += 4) {
    const x = (i / 4) % imageData1.width;
    const y = Math.floor(i / (4 * imageData1.width));
    if (
      x + playerX >= playerY &&
      x + playerX < playerY + imageData2.width &&
      y + playerY >= enemyY &&
      y + playerY < enemyY + imageData2.height
    ) {
      return true;
    }
  }
  return false;
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

