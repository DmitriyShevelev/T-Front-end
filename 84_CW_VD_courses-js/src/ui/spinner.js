export default class Spinner {
    #spinnerElement
    constructor(idSpinner) {
        this.#spinnerElement = document.getElementById(idSpinner);
        if (!this.#spinnerElement) {
            throw "Wrong Spinner ID";
        }
    }
    start() {
        this.#spinnerElement.innerHTML = '<div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>'
    }
    stop() {
        this.#spinnerElement.innerHTML = '';
    }

}