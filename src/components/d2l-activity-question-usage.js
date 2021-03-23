import '@brightspace-ui/core/components/list/list-item.js';
import '@brightspace-ui/core/components/list/list-item-content.js';
import '@brightspace-ui/core/components/inputs/input-number.js';
import '@brightspace-ui/core/components/colors/colors.js';
import '@brightspace-hmc/foundation-components/components/activity/name/d2l-activity-name';
import '@brightspace-hmc/foundation-components/components/activity/type/d2l-activity-type';

import { css, LitElement } from 'lit-element/lit-element.js';
import { html } from '@brightspace-hmc/foundation-engine/framework/lit/hypermedia-components.js';
import { heading4Styles, labelStyles } from '@brightspace-ui/core/components/typography/styles.js';
import { ActivityUsageEntity } from 'siren-sdk/src/activities/ActivityUsageEntity';
import { BaseMixin } from '../mixins/base-mixin';
import { EntityMixinLit } from 'siren-sdk/src/mixin/entity-mixin-lit';

class ActivityQuestionUsage extends EntityMixinLit(BaseMixin(LitElement)) {
	static get properties() {
		return {
		};
	}
	constructor() {
		super();
		this._items = [];
		this._setEntityType(ActivityUsageEntity);
	}

}
customElements.define('d2l-activity-question-usage', ActivityQuestionUsage);
