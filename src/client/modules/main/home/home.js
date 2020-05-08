import { LightningElement, track } from 'lwc';

export default class Home extends LightningElement {
    @track
    showHeader = true;
    @track
    showJumbotron = true;
    @track
    showGallery = true;
    @track
    showPopup = true;
    @track
    showFooter = true;
}
