'use strict';


class Game{
   constructor(canvas){
      this.canvas = canvas;
      this.ctx = this.canvas.getContext('2d');
      this.player;
      this.enemies = [];
   }

   startLoop(){
      //console.log('out of loop');
      const loop = () => {
         //console.log('in');
         //update
         this.updateCanvas();
         //clear
         this.clearCanvas();
         //draw
         this.drawCanvas();

         window.requestAnimationFrame(loop);
      }
      window.requestAnimationFrame(loop);
   };

   updateCanvas(){

   }

   clearCanvas(){
      this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
   };

   drawCanvas(){

   }
};