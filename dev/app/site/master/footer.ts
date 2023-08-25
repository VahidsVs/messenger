import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { 
    GetData,
    getLanguage,
    getTranslate,
    getDirectionFromLanguage
 } from '../../cms_general';
import * as ko from 'knockout';

@customElement('cms-footer')
class CmsFooter extends LitElement {
    createRenderRoot() {
        return this;
    }

    private Model = {
        translate: {
            copyright: ko.observable(),
        },
        data: {
            CurrentDate: ko.observable(),
        },
    }

    constructor() {
        super();

        this.Model.data.CurrentDate(new Date().getFullYear());
        this.Model.translate.copyright(getTranslate('copyright'));
    }

    firstUpdated(changedProperties: any) {

        $(() => {

        })

        ko.applyBindings(this.Model, document.getElementById("pnlFooter"));
    }

    render() {
        return html`
<div class="text-center" id="pnlFooter">
    <span data-bind="text: translate.copyright"></span>
</div>
        `;
    }
}