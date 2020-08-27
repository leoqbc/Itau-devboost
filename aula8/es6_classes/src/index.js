import VideoPlayer from './player/VideoPlayer';
import DOMInjector from './dom/Injector';

const player2 = new VideoPlayer({
    elementId: 'body #video', 
    srcLink: 'https://www.w3schools.com/html/mov_bbb.mp4', 
    videoWidth: 800, 
    videoHeight: 600
});

const domInjector = new DOMInjector;
domInjector.inject(player2.elementId, player2.render());

console.log(player2.elementId);
console.log(player2.srcLink);
console.log(player2.videoWidth);
console.log(player2.videoHeight); // height hight length - termina F