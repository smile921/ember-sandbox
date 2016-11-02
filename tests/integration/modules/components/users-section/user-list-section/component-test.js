import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('users-section/user-list-section', 'Integration | Component | users section/user list section', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{users-section/user-list-section}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#users-section/user-list-section}}
      template block text
    {{/users-section/user-list-section}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
