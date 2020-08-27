export default class DOMInjector {
    inject(selector, content) {
        const element = document.querySelector(selector);

        element.innerHTML = content;
    }
}