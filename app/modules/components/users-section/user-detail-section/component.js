import Ember from 'ember';
export default Ember.Component.extend({
    tagName:'div',
    classNames:['cell','-80f12']
}).reopenClass({ positionalParams:['currentUser']});
