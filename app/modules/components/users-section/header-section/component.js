import Ember from 'ember';

export default Ember.Component.extend({
    classNames:['card-header'],
    tagName:'header'
}).reopenClass({ positionalParams:['currentUser']});
