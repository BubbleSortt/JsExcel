import {$} from '@core/dom';

export class Excel {
  constructor(selector, options) {
    this.$el = $(selector);
    this.components = options.components || [];
  }

  getRoot() {
    // Создаем корневой блок(компонент-страница)
    const $root = $.create('div', 'excel');
    // Создаем компоненты в корневом блоке
    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className);
      const component = new Component($el);
      $el.html(component.toHTML());
      $root.append($el);
      return component;
    });
    return $root;
  }

  render() {
    this.$el.append(this.getRoot());
    this.components.forEach(component => {
      component.init();
      component.destroy();
    });

  }
}