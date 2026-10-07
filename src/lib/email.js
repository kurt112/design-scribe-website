import emailjs from '@emailjs/browser';
import {COMPANY} from '../data/site.js';

export function sendInquiry({name, notes}) {
    return emailjs.send('service_ugv0oj7', 'template_o7z2len', {name, notes, email: COMPANY.email}, {
        publicKey: '-QovHotCx-jbZmDsJ',
        privateKey: 'uLJYOUvNsm0YfxjMzNxI4',
    });
}
