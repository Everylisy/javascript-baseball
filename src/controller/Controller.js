const InputView = require('../view/inputView');
const validator = require('../utils/InputValidator');

class Controller {
  #carNamesArr;

  constructor() {
    this.#carNamesArr;
  }

  start() {
    this.inputCarName();
  }

  inputCarName() {
    InputView.readCarName(this.getCarName.bind(this));
  }

  getCarName(name) {
    try {
      this.#carNamesArr = name.split(',');
      validator.checkCarName(this.#carNamesArr);
    } catch {
      this.inputCarName();
    }
  }
}

module.exports = Controller;
