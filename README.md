# Node Shell Async
You can use shell command in Node.js

## Getting Started
#### Install
``` bash
$ npm i --save node-shell-async
```

#### Usage
``` javascript
const NSH = require('node-shell-script');

const nsh = new NSH();
nsh.date().then((data) => console.log(data));
/// 2019년 10월  9일 수요일 14시 40분 20초 KST
```

## API
- date
- cal