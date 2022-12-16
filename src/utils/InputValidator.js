const { Console } = require('@woowacourse/mission-utils');
const validator = {
  checkCarName(input) {
    if (this.checkNameLength(input)) return;
    throw Console.print('[ERROR] 입력한 자동차 이름이 유효하지 않습니다.');
  },

  checkNameLength(names) {
    function checkLength(name) {
      return 0 < name.length && name.length < 5;
    }

    return names.every(checkLength);
  },
};

module.exports = validator;
