import Ember from 'ember';

import styles from '../../../index/styles';

export default Ember.Component.extend({
    tagName:'ul',
    styles,
    classNames:['cell','-4of12'],
    localClassNames:['user-list']
}).reopenClass({ positionalParams:['api']});
