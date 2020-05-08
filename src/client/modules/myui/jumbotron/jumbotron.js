import { LightningElement, api } from 'lwc';

export default class Jumbotron extends LightningElement {
    @api
    header = '';
    @api
    headerChild = '';
    @api
    message = '';
    @api
    jomboImageUrl = '';
    @api
    profileUrl = '';
}
