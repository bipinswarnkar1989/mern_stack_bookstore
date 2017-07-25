'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bookServer = require('../controllers/book.server.controller');

var _bookServer2 = _interopRequireDefault(_bookServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();

router.route('/').get((req, res) => {
  return res.json({ message: 'Api working' });
});

exports.default = router;
//# sourceMappingURL=book.server.route.js.map