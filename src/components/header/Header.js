import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
  static className = 'excel__header';
  constructor($root) {
    super($root, {
      name: 'header',
      test: 'privv',
      listeners: ['input']
    });
  }
  toHTML() {
    return `<input type="text" value="Новая таблица" class="input">

            <div class="button-wrapper">
                <div class="button">
                    <i class="material-icons">exit_to_app</i>
                </div>

                <div class="button">
                    <i class="material-icons">delete</i>
                </div>
            </div>
    `;
  }

  onInput() {
    console.log(this);
  }
}