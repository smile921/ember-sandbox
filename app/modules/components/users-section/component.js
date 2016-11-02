import Ember from 'ember';

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

}).reopenClass(positionParams:["users"]);

