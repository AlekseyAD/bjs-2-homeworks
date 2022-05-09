'use strict';

function solveEquation(a, b, c) {
  let arr = [];
  let D = Math.pow(b, 2) - 4 * a * c;
    if(D < 0) {
      return arr;
    }
    if(D > 0) {
      arr[0] = (( -b + Math.sqrt(D)) / (2 * a));
      arr[1] = (( -b - Math.sqrt(D)) / (2 * a));
    }
    else if (D === 0) {
      arr[0] = -b / (2 * a);
    }
    return arr;
  }

  function calculateTotalMortgage(percent, contribution, amount, date) {
    // Общая стоимость кредита
    let totalAmount = 0;
    // Актуальная дата
    let actualDate = new Date();
    // Процентная ставка деленная на сто
    let loanRate = parseFloat(percent) / 100;
    // Первоначальный взнос
    let firstPayment = parseFloat(contribution);
    // Сумма кредита
    let objectPrice = parseFloat(amount);

    let loanParams = {
      rate: loanRate / 12,
      loanAmount: 0,
      monthsCount: 0,
      fullCostOfFunds: 0
      }
    // 2. Проконтролируйте корректность введенных данных.
    if (Number.isNaN(loanRate)) {
      return totalAmount = `Параметр \"Процентная ставка\" содержит неправильное значение \"${percent}\"`;
    }
    else if (Number.isNaN(firstPayment)) {
      return totalAmount = `Параметр \"Начальный взнос\" содержит неправильное значение \"${contribution}\"`;
    } 
    else if (Number.isNaN(objectPrice)) {
      return totalAmount = `Параметр \"Общая стоимость\" содержит неправильное значение \"${amount}\"`; 
    }
    else if ((date.getFullYear() <= actualDate.getFullYear()) && (date.getMonth() > 12) && (date.getMonth() <= 0) && (date.getDate() > 32) && (date.getDate() <= 1)) {
      return totalAmount = 'Неверный формат даты. Дату необходимо указать в следующем формате - ДД.ММ.ГГГГ.';
    }
    
    if (actualDate.getTime() - date.getTime() < 0) {
      // 3. Посчитайте тело кредита: сумма, которую необходимо вернуть банку (сумма кредита минус первоначальный взнос).
      loanParams.loanAmount = objectPrice - firstPayment;
      // 4. Посчитайте на какой срок был выдан кредит (в месяцах).
      loanParams.monthsCount = (date.getFullYear() - actualDate.getFullYear()) * 12 + date.getMonth() - actualDate.getMonth();
    
      // Проверяем вводимые данные на наличие срока кредита более месяца
      if (loanParams.monthsCount == 0) {
        //console.log(totalAmount);
        return totalAmount = 'Слишком короткий срок';
    }
    // 5. Eжемесячная оплата рассчитывается по формуле: Платеж = S * (P + (P / (((1 + P)^n) - 1)))
    let annuityPayment = loanParams.loanAmount * (loanParams.rate + (loanParams.rate / (((1 + loanParams.rate) ** loanParams.monthsCount) - 1)));

    //6. Посчитайте общую сумму, которую придется заплатить клиенту.
    //7. Округлите результат до двух значений после запятой.
    loanParams.fullCostOfFunds = (annuityPayment * loanParams.monthsCount).toFixed(2);
    
    totalAmount = parseFloat(loanParams.fullCostOfFunds);
    }
    else {
      totalAmount = 'Дата должна быть больше текущей';
    }
    //console.log(totalAmount);
    return totalAmount;
  }