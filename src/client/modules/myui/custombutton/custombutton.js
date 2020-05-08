import { LightningElement, api } from 'lwc';

export default class CustomButton extends LightningElement {
    @api
    buttonValue = 'ButtonValue';
    @api
    buttonHref = '#button';
    @api
    buttonStyle = 'danger';
    buttonClass;
    connectedCallback() {
        this.buttonClass = 'button ' + this.buttonStyle;
    }
}
