const path = require('path');
const fs = require('fs');

exports.default = (function () {
  let count = 0;

  const txtPath = path.resolve(__dirname, '../', 'list.txt');

  // 查找文件，清理内容
  try {
    fs.accessSync(txtPath);
  } catch (e) {
    fs.appendFileSync(txtPath, '', { encoding: 'utf-8' });
  }
  fs.writeFileSync(txtPath, '');

  return function (source) {
    count++;
    fs.appendFileSync(txtPath, `${this.resourcePath} \n`);
    return source;
  };
}());
