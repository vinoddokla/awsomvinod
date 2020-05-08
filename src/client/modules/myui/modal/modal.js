import { LightningElement, api } from 'lwc';

export default class Modal extends LightningElement {
    @api
    bodyMessage = '';
    @api
    header = '';
    @api
    projectLinks = [
        {
            title: 'Integration',
            href: 'https://www.google.com'
        },
        {
            title: 'Metadata',
            href: 'https://www.google.com'
        }
    ];

    handleModalClose() {
        this.dispatchEvent(new CustomEvent('closemodal'));
    }
}
