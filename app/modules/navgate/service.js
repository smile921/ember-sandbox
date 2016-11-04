import Ember from 'ember';
import set from 'ember-metal/set';
import get from 'ember-metal/get';
import computed from 'ember-computed';
import styles from '../application/styles';


export default Ember.Service.extend({
    isShow:false,
    navClassName:computed('isShow', function(){
        //let baseClassName = get(styles,'nav-menu');
        let baseClassName = styles.nav_menu;
        const isShow = get(this,'isShow');
        return get(this, 'isShow')
            ? `${baseClassName} get(styles,'isShow')` : baseClassName ;
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
