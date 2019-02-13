const main = () => {

   const buildDom = (html) => {
      const main = document.querySelector('main');
      main.innerHTML = html;
   };

   const buildSplashScreen = () => {
      const buildSplashScreen = buildDom(`
         <section class="splash-screen">
            <h1>hola</h1>
            <button>Start</button>
         </section>
      `)
      const startButton = document.querySelector('button');
      startButton.addEventListener('click', buidGameScreen);
   };

   const buidGameScreen = () => {
      const gameScreen = buildDom(`
         <section class="game-screen">
            <canvas></canvas>
         </section>
      `)

      const width = document.querySelector('.game-screen').offsetWidth;
      const height = document.querySelector('.game-screen').offsetHeight;
   
      const canvasElement = document.querySelector('canvas');
   
      canvasElement.setAttribute('width', width);
      canvasElement.setAttribute('height', height);

      //setTimeout(buidGameOver, 3000);

      const game = new Game(canvasElement);
      game.startLoop();

      const setPlayerDirection = (event) => {
         if(event.code === 'ArrowUp'){
            game.player.setDirection(-1);
         } else if(event.code === 'ArrowDown'){
            game.player.setDirection(1);
         };
      };

      document.addEventListener('keydown', setPlayerDirection);

   };

   const buidGameOver = () => {
      const gameOverScreen = buildDom(`
         <section class="game-over">
            <h1>Game Over Screen</h1>
            <button>Restart</button>
         </sectio>
      `)

      const restartButton = document.querySelector('button');
      restartButton.addEventListener('click', buidGameScreen);
   };


   buildSplashScreen();
};

window.addEventListener('load', main);
//Fuerza a cargar el script 