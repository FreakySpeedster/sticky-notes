import Component from '@ember/component';

export default Component.extend({
    attributeBindings: ['isActive'],
    isActive: false,
    actions: {
        highlight: function() {
            this.toggleProperty('isActive');
        }
    }
});
