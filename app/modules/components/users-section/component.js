import Ember from 'ember';
import set from 'ember-metal/set'

export default Ember.Component.extend({
    currentUser: null,
    actions: {
        selectUser(user) {
            set(this, 'currentUser', user);
        },

        clearUser() {
            set(this, 'currentUser', null);
        }
    }

}).reopenClass({positionalParams:["users"]});

