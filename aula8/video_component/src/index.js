import VideoPlayer from './player/VideoPlayer';
import DOMInjector from './dom/Injector';

const player2 = new VideoPlayer({
    elementId: '#video',
    injector: new DOMInjector,
    videoWidth: 1440,
    videoHeight: 920,
    sourceLinks: [
        {
            src: 'https://www.w3schools.com/html/mov_bbb.mp4',
            type: 'video/mp4'
        },
        {
            src: 'https://www.w3schools.com/html/mov_bbb.ogg',
            type: 'video/ogg'
        }
    ]
});

player2.init();

console.log(player2.elementId);
console.log(player2.videoWidth);
console.log(player2.videoHeight); // height hight length - termina F