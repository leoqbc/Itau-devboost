export default class VideoPlayer {
    constructor({ elementId, srcLink, videoWidth = 800, videoHeight = 600 }) {
        this.elementId = elementId;
        this.srcLink = srcLink;
        this.videoWidth = videoWidth;
        this.videoHeight = videoHeight;
    }

    render() {
        return `
        <video width="${this.videoWidth}" height="${this.videoHeight}" controls>
            <source src="${this.srcLink}">
        </video>
        `;    
    }
}