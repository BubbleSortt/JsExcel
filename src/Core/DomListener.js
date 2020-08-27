import {capitalize} from '@core/utils';

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No $root provided for DomListener');
    }
    this.$root = $root;
    this.listeners = listeners;
    this.test = 'privv';
  }

  initDOMListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener);
      if (!this[method]) {
        const name = this.name || '';
        throw new Error(
            `Method ${method} is not implemented in ${name} component`
        );
      }
      this[method] = this[method].bind(this);
      this.$root.on(listener, this[method]);
    });
  }

  removeDOMListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener);
      this.$root.removeListener(listener, this[method]);
    });

    // if (!this[method]) {
    //   const name = this.name || '';
    //   throw new Error(
    //    `Cannot remove ${method} because it there isn't in  ${name} component`
    //   );
    // }
    // const indexOfEvent = this.listeners.indexOf(eventName);
    // this.listeners.splice(indexOfEvent, 1);
    // this.$root.removeListener(eventName, this[method].bind(this));
    // console.log(this, indexOfEvent);
  }
}

function getMethodName(eventName) {
  return 'on' + capitalize(eventName);
}