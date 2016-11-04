import Ember from 'ember';
import set from 'ember-metal/set';
import get from 'ember-metal/get';
import computed from 'ember-computed';
import styles from '../application/styles';


export default Ember.Service.extend({
    isShow:false,
    navClassName:computed('isShow', function(){
        const baseClassName = get(styles,'nav-menu');
        return get(this, 'isShow')
            ? `${baseCalssName} get(styles,'show')` : baseCalssName ;
    }),
        show(context){
            debugger;
            set( context||this,'isShow',true);
        },
        hide(context){
            set(context||this, 'isShow', false);
        },
        toggle(context){
            if(context) context.toggleProperty('isShow');
            else
            this.toggleProperty('isShow');
        }
});
