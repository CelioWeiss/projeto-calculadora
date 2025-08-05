function calcular(operador) {
  const n1 = parseFloat(document.getElementById('num1').value);
  const n2 = parseFloat(document.getElementById('num2').value);
  let resultado;
  let nomeDaOperacao;

  if (isNaN(n1) || isNaN(n2)) {
    resultado = 'Erro: números inválidos';
    nomeDaOperacao = '---';
  } else {
    switch (operador) {
      case '+':
        resultado = n1 + n2;
        nomeDaOperacao = 'Soma';
        break;
      case '-':
        resultado = n1 - n2;
        nomeDaOperacao = 'Subtração';
        break;
      case '*':
        resultado = n1 * n2;
        nomeDaOperacao = 'Multiplicação';
        break;
      case '/':
        if (n2 === 0) {
          resultado = 'Erro: divisão por zero';
          nomeDaOperacao = '---';
        } else {
          resultado = n1 / n2;
          nomeDaOperacao = 'Divisão';
        }
        break;
    }
  }

  document.getElementById('resultado').textContent = resultado;
  document.getElementById('operacao').textContent = nomeDaOperacao;
}
