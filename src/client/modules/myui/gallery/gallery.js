import { LightningElement, track } from 'lwc';
import { projects } from '../../utils/projects';

export default class Gallery extends LightningElement {
    @track
    showPopup = false;
    @track
    bodyMessage = 'bodymessage';
    @track
    headerText = 'LWC';
    @track
    projectData = [];
    @track
    projectLinks = [];

    connectedCallback() {
        for (const project in projects) {
            // eslint-disable-next-line no-prototype-builtins
            if (projects.hasOwnProperty(project)) {
                const element = projects[project];
                this.projectData.push(element);
            }
        }
    }

    handlePopupEvent(event) {
        this.headerText = projects[event.target.dataset.project].title;
        this.bodyMessage = projects[event.target.dataset.project].description;
        this.projectLinks = projects[event.target.dataset.project].projectLinks;
        this.showPopup = true;
    }

    closeModalHandler() {
        this.showPopup = false;
    }
}
