"use strict";

(function _callee() {
  var database, Produto, resultado, novoProduto;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          database = require("./db");
          Produto = require("./produto");
          _context.prev = 2;
          _context.next = 5;
          return regeneratorRuntime.awrap(database.sync());

        case 5:
          resultado = _context.sent;
          console.log(resultado);
          _context.next = 12;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](2);
          console.log(_context.t0);

        case 12:
          _context.next = 14;
          return regeneratorRuntime.awrap(Produto.create({
            nome: "Teclado USB",
            preco: 30,
            descricao: "teclado gamer"
          }));

        case 14:
          novoProduto = _context.sent;
          console.log(novoProduto);

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 9]]);
})();