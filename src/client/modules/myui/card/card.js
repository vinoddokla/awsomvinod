import { LightningElement, api } from 'lwc';

export default class Card extends LightningElement {
    @api
    header = 'Header';
    @api
    bodyContent = 'Body Content';

    showPopupHandler() {
        this.dispatchEvent(new CustomEvent('showpopup'));
    }
}
