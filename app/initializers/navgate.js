export function initialize( application ) {
    application.inject('route', 'navgate', 'service:navgate');
    application.inject('component', 'navgate', 'service:navgate');
    application.inject('controller', 'navgate', 'service:navgate');
}

export default {
  name: 'navgate',
  initialize
};
