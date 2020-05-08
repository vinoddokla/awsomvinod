import { LightningElement, api, track } from 'lwc';

export default class SocialLink extends LightningElement {
    @api
    socialHref = 'http://github.com/';
    @api
    socialIcon = 'github';
    @track
    socailClass = 'basic';

    connectedCallback() {
        this.socailClass += ' ' + this.socialIcon;
    }
}
