import Route from 'ember-route';
import inject from 'ember-service/inject';
import {isNone} from 'ember-utils';
import get from 'ember-metal/get';
import set from 'ember-metal/set';
import {reads} from 'ember-computed';
import {setProperties} from 'ember-metal/set';


export default Route.extend({
  ajax: inject(),

     setupController(controller) {
         this._super(controller);
         //debugger;
         if(isNone(get(this, 'ajax.headers.Authorization'))){
             controller.set('remindAuth', '别忘了做鉴权哦，否则每小时只能请求69次 呢 ~');
         }

         setProperties(controller, {
             isShow: reads('navgate.isShow'),
             navClassName:reads('navgate.navClassName') 
         });
     },
    renderTemplate(controller, model){
        //debugger;
        this._super(controller,model);
        this.render('application/navgate',{into:'application',outlet:'navgate'});
    }

});
