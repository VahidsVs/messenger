import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import * as ko from 'knockout';
import {
    _addressText,
    _emailLink,
    _facebookLink,
    _instagramLink,
    _linkedinLink,
    _telLink,
    _telegramLink,
    _whatsappLink,
    _addressLink,
    _emailText,
    _telText
} from '../../social_network_config';

@customElement('cms-controller')
class CmsController extends LitElement {
    createRenderRoot() {
        return this;
    }

//    static get styles() {
//        return css`
//`;
//    }

    private Model = {
        social: {
            FacebookLink: ko.observable(),
            WhatsappLink: ko.observable(),
            InstagramLink: ko.observable(),
            LinkedinLink: ko.observable(),
            TelegramLink: ko.observable(),
            EmailLink: ko.observable(),
            TelLink: ko.observable(),
            AddressLink: ko.observable(),
            EmailText: ko.observable(),
            TelText: ko.observable(),
            AddressText: ko.observable(),
        },
    }

    constructor() {
        super();

        this.Model.social.FacebookLink(_facebookLink);
        this.Model.social.WhatsappLink(_whatsappLink);
        this.Model.social.InstagramLink(_instagramLink);
        this.Model.social.LinkedinLink(_linkedinLink);
        this.Model.social.TelegramLink(_telegramLink);
        this.Model.social.EmailLink(_emailLink);
        this.Model.social.TelLink(_telLink);
        this.Model.social.AddressLink(_addressLink);
        this.Model.social.EmailText(_emailText);
        this.Model.social.TelText(_telText);
        this.Model.social.AddressText(_addressText);
    }

    @property()
    ComponentName: string;

    @state()
    ModuleRender: any;

    async performUpdate() {

        switch (this.ComponentName) {
            case "cms-accessdenied":
                this.ModuleRender = html`<cms-accessdenied></cms-accessdenied>`
                break;
            case "cms-index":
                this.ModuleRender = html`<cms-index></cms-index>`
                break;
            case "cms-myhome":
                this.ModuleRender = html`<cms-myhome></cms-myhome>`
                break;
            case "cms-profile":
                this.ModuleRender = html`<cms-profile></cms-profile>`
                break;
            case "cms-login":
                this.ModuleRender = html`<cms-login></cms-login>`
                break;
        }

        super.performUpdate();
    }

    firstUpdated(changedProperties: any) {

        $(() => {

        })
    }

    render() {
        return html`
<cms-notification></cms-notification>


<header class="myHeader">

<cms-header></cms-header>

</header>
<div class="p-2" style="min-height: calc(100vh - 96px);">

${this.ModuleRender}

</div>
<footer>

<cms-footer></cms-footer>

</footer>
        `;
    }
}