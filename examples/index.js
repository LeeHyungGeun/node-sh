const NSH = require('../dist/node-sh');
const sh = new NSH();

sh.date().then((data) => console.log(data));
sh.cal().then((data) => console.log(data));
