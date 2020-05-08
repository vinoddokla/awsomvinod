import { LightningElement, track } from 'lwc';
import { socialLinks } from '../../utils/sociallinks';

export default class Footer extends LightningElement {
    @track
    socialLinkData = [];

    connectedCallback() {
        for (const socialLink in socialLinks) {
            // eslint-disable-next-line no-prototype-builtins
            if (socialLinks.hasOwnProperty(socialLink)) {
                const element = socialLinks[socialLink];
                this.socialLinkData.push(element);
            }
        }
    }
}
