const calculadora = require("../models/calculadora.js");

test("somar 1 + 1 = 2", () => {
  const resultado = calculadora.somar(1, 1);
  expect(resultado).toBe(2);
});

test("somar 5 + 100 = 105", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test("somar 5 + 'banana' = 'Erro'", () => {
  const resultado = calculadora.somar(5, "banana");
  expect(resultado).toBe("Erro");
});
