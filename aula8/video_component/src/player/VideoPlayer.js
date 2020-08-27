export default class VideoPlayer {
    constructor({ 
        elementId, 
        videoWidth = null, 
        videoHeight = null, 
        controls = true, 
        injector, 
        sourceLinks = [] 
    }) {
        this.elementId = elementId;
        this.sourceLinks = sourceLinks;
        this.videoWidth = videoWidth;
        this.videoHeight = videoHeight;
        this.injector = injector;
        this.controls = controls;
    }

    addSource(srcLink) {
        this.sourceLinks.push(srcLink);
    }

    sourceStringElements() {
        return this.sourceLinks.reduce((htmlString, source) => { 
            return htmlString += `<source src="${source.src}" type="${source.type}">`;
        }, '');
    }

    set injector(injector) {
        this._injector = injector;
    }

    get injector() {
        return this._injector;
    }

    init() {
        this.injector.inject(this.elementId, this.render());
    }

    getSize(type) {
        return this[type] === null ? `` : `${type.replace('video', '').toLowerCase()}="${this[type]}"`;
    }

    hasControls() {
        return this.controls ? 'controls' : '';
    }

    render() {
        return `
        <video ${this.getSize("videoWidth")} ${this.getSize("videoHeight")} ${this.hasControls()}>
            ${this.sourceStringElements()}
        </video>
        `;    
    }
}