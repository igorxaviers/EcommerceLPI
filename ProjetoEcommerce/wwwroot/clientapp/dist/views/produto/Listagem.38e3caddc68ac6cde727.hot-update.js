"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateclientapp"]("produto/Listagem",{

/***/ "./src/views/produto/CadastroEdit.js":
/*!*******************************************!*\
  !*** ./src/views/produto/CadastroEdit.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"../../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var _Listagem_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Listagem.css */ \"./src/views/produto/Listagem.css\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nvar CadatroEdit = /*#__PURE__*/function (_React$Component) {\n  _inherits(CadatroEdit, _React$Component);\n\n  var _super = _createSuper(CadatroEdit);\n\n  function CadatroEdit(props) {\n    var _this;\n\n    _classCallCheck(this, CadatroEdit);\n\n    _this = _super.call(this, props);\n\n    _defineProperty(_assertThisInitialized(_this), \"handleChange\", function (e) {\n      var target = e.target;\n      var value = target.value;\n      var name = target.name;\n\n      _this.setState(_defineProperty({}, name, value));\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleSelect\", function (e) {\n      var categoria_id = parseInt(e.target.value);\n\n      _this.setState({\n        categoria_id: categoria_id\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"salvarProduto\", function () {\n      _this.setState({\n        loading: true\n      });\n\n      var produto = {\n        id: Number(_this.state.id),\n        nome: _this.state.nome,\n        preco: Number(_this.state.preco),\n        estoque: Number(_this.state.estoque),\n        categoria_id: Number(_this.state.categoria_id)\n      };\n      console.log(produto);\n      axios__WEBPACK_IMPORTED_MODULE_2___default().post('Salvar', produto).then(function (response) {\n        var data = response.data;\n\n        if (data.sucesso) {\n          react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(data.mensagem, {\n            position: \"bottom-right\",\n            theme: \"colored\"\n          });\n\n          _this.props.pai.setState({\n            show: false\n          });\n        } else {\n          react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(data.mensagem, {\n            position: \"bottom-right\",\n            theme: \"colored\"\n          });\n        }\n      }).catch(function (error) {\n        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error('Erro ao cadastrar produto!', {\n          position: \"bottom-right\",\n          theme: \"colored\"\n        });\n      }).finally(function () {\n        _this.setState({\n          loading: false\n        });\n      });\n    });\n\n    _this.state = {\n      id: '0',\n      nome: '',\n      preco: '',\n      estoque: '',\n      categoria_id: '1',\n      categorias: [{\n        id: 1,\n        nome: 'Hardware'\n      }, {\n        id: 2,\n        nome: 'Periféricos'\n      }, {\n        id: 3,\n        nome: 'Cadeiras/Mesas'\n      }, {\n        id: 4,\n        nome: 'Monitores'\n      }, {\n        id: 5,\n        nome: 'Notebooks'\n      }],\n      loading: false,\n      show: false\n    };\n    return _this;\n  }\n\n  _createClass(CadatroEdit, [{\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      console.log('componentDidUpdate');\n    }\n  }, {\n    key: \"shouldComponentUpdate\",\n    value: function shouldComponentUpdate() {\n      return this.props.pai.produto != null ? true : false;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var saida = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: 'col-lg-6 modal-produto ' + (this.props.pai.state.show ? '' : 'd-none')\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"modal-header\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h5\", {\n        className: \"modal-title\"\n      }, \"Cadastro de Produto\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n        type: \"button\",\n        className: \"close\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", {\n        className: \"fas fa-times\",\n        onClick: function onClick() {\n          return _this2.props.pai.setState({\n            show: false\n          });\n        }\n      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"modal-body\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"form\", {\n        className: \"user\",\n        id: \"form-produto\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"form-group\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, \"Nome do produto\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n        type: \"text\",\n        name: \"nome\",\n        className: \"form-control\",\n        placeholder: \"Nome do produto\",\n        value: this.state.nome,\n        onChange: this.handleChange,\n        required: true\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"form-group\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, \"Pre\\xE7o do produto\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n        type: \"number\",\n        name: \"preco\",\n        className: \"form-control\",\n        placeholder: \"Pre\\xE7o\",\n        value: this.state.preco,\n        onChange: this.handleChange,\n        required: true\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"form-group\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, \"Estoque do produto\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n        type: \"number\",\n        name: \"estoque\",\n        className: \"form-control\",\n        placeholder: \"Estoque\",\n        value: this.state.estoqe,\n        onChange: this.handleChange,\n        required: true\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, \"Categoria do produto\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"select\", {\n        className: \"form-select\",\n        name: \"categoria\",\n        onChange: this.handleSelect\n      }, this.state.categorias.map(function (categoria) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n          key: categoria.id,\n          value: categoria.id\n        }, categoria.nome);\n      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"modal-footer border-top mt-4 mx-0\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n        type: \"button\",\n        className: \"btn btn-lg btn-primary col-auto\" + (this.state.loading ? \"disable\" : \"\"),\n        onClick: this.salvarProduto\n      }, this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", {\n        className: \"fas fa-circle-notch fa-spin\"\n      }) : \"\", \"Salvar Produto\"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, null));\n      return saida;\n    }\n  }]);\n\n  return CadatroEdit;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CadatroEdit);\n\n//# sourceURL=webpack://clientapp/./src/views/produto/CadastroEdit.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "8243afbff9b55eb725c1"; }
/******/ }();
/******/ 
/******/ }
);