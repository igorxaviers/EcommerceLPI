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

/***/ "./src/views/produto/Listagem.js":
/*!***************************************!*\
  !*** ./src/views/produto/Listagem.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"../../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _CadastroEdit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CadastroEdit */ \"./src/views/produto/CadastroEdit.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var _Listagem_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Listagem.css */ \"./src/views/produto/Listagem.css\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\nvar Listagem = /*#__PURE__*/function (_React$Component) {\n  _inherits(Listagem, _React$Component);\n\n  var _super = _createSuper(Listagem);\n\n  function Listagem(props) {\n    var _this;\n\n    _classCallCheck(this, Listagem);\n\n    _this = _super.call(this, props);\n\n    _defineProperty(_assertThisInitialized(_this), \"componentDidMount\", function () {\n      _this.setState({\n        loading: true\n      });\n\n      axios__WEBPACK_IMPORTED_MODULE_2___default().get('Listar').then(function (response) {\n        console.log(response.data);\n\n        _this.setState({\n          produtos: response.data\n        });\n      }).catch(function (error) {\n        console.log(error);\n      }).finally(function () {\n        _this.setState({\n          loading: false\n        });\n\n        console.log('Finalizado');\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"excluirProduto\", function (id) {\n      axios__WEBPACK_IMPORTED_MODULE_2___default()[\"delete\"]('Excluir/' + id).then(function (response) {\n        var data = response.data;\n\n        if (data.sucesso) {\n          var produtos = _this.state.produtos.filter(function (produto) {\n            return produto.id !== id;\n          });\n\n          console.log(produtos);\n\n          _this.setState({\n            produtos: produtos\n          });\n\n          console.log(_this.state.produtos);\n          react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success(data.mensagem);\n        } else {\n          react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(data.mensagem);\n          console.log('uai');\n        }\n\n        console.log(response.data);\n      }).catch(function (error) {\n        console.log(error);\n      }).finally(function () {\n        console.log('Finalizado');\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"getColor\", function (estoque) {\n      if (estoque > 20) {\n        return 'border-success';\n      } else if (estoque > 10) {\n        return 'border-warning';\n      } else {\n        return 'border-danger';\n      }\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"showLoading\", function () {//return 4 times the same div\n    });\n\n    _this.state = {\n      produtos: [],\n      loadging: false\n    };\n    return _this;\n  }\n\n  _createClass(Listagem, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var saida = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CadastroEdit__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", null, \"Listagem de Produtos\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"p-5\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"col-12\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"row border-0 bg-light rounded my-5 \"\n      }, this.state.loading ? Array.from(Array(4).keys()).map(function (i) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n          className: \"produto loading py-2 mb-3 bg-white shadow-sm row flex-wrap align-items-center\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n          className: \"col-auto placeholder-glow\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n          className: \"placeholder \",\n          style: {\n            height: 160,\n            width: 160,\n            borderRadius: 10\n          }\n        }, \" \")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n          className: \"col row ps-5 placeholder-glow\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", {\n          className: \"placeholder my-3 rounded-3\"\n        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n          className: \"p-0\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n          className: \"placeholder mb-2 rounded-3\",\n          style: {\n            height: 30,\n            width: 100\n          }\n        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n          className: \"p-0\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n          className: \"placeholder mb-2 rounded-3\",\n          style: {\n            height: 30,\n            width: 200\n          }\n        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n          className: \"p-0 mb-4\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n          className: \"placeholder mb-2 rounded-3\",\n          style: {\n            height: 30,\n            width: 240\n          }\n        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n          className: \"p-0 row justify-content-end\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n          className: \"placeholder w-10 mb-2 me-3 rounded-3\",\n          style: {\n            width: 80,\n            height: 35\n          }\n        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n          className: \"placeholder w-10 mb-2 me-3 rounded-3\",\n          style: {\n            width: 80,\n            height: 35\n          }\n        }))));\n      }) : this.state.produtos.map(function (produto) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n          className: \"produto p-3 mb-3 bg-white shadow-sm row flex-wrap align-items-center\",\n          key: produto.id\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n          className: \"col-auto\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n          src: \"https://via.placeholder.com/200\",\n          className: \"col-auto\",\n          style: {\n            height: 160,\n            width: 160,\n            borderRadius: 10\n          }\n        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n          className: \"col row ps-3\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", null, produto.nome), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n          className: \"preco\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", {\n          className: \"fas fa-dollar-sign\"\n        }), \"R$ \", produto.preco), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n          className: \"p-0\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n          className: \"badge-estoque \".concat(_this2.getColor(produto.estoque))\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", {\n          className: \"fas fa-boxes\"\n        }), \"Qtd. Estoque \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n          className: \"estoque\"\n        }, produto.estoque))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", {\n          className: \"fas fa-list\"\n        }), \"Categoria: \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"strong\", null, produto.categoria.nome)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n          className: \"row justify-content-end\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n          className: \"btn btn-primary col-auto mr-3\",\n          onClick: function onClick() {\n            return console.log('editas');\n          }\n        }, \"Editar\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n          className: \"btn btn-danger col-auto\",\n          onClick: function onClick() {\n            return _this2.excluirProduto(produto.id);\n          }\n        }, \"Exlcuir\"))));\n      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {\n        position: \"bottom-right\",\n        theme: \"colored\"\n      }));\n      return saida;\n    }\n  }]);\n\n  return Listagem;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Listagem);\nreact_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Listagem, null), document.getElementById('root'));\n\n//# sourceURL=webpack://clientapp/./src/views/produto/Listagem.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "2e2ff6d3c8291ff0c17d"; }
/******/ }();
/******/ 
/******/ }
);