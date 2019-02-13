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
   };

   buildSplashScreen();
};

window.addEventListener('load', main);
//Fuerza a cargar el script 