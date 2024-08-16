

// MA-Tax-Calculator Problem: Create a simple tax calculator that calculates the amount of taxes due in Massachusetts based on a user’s income input.
// Problem Notes: 5% for income up to $50,000 - 5.5% for income between $50,001 and $100,000 - 6% for income above $100,000

document.addEventListener('DOMContentLoaded', () => {
    const incomeInput = document.getElementById('income');
    const calculateButton = document.getElementById('calculate');
    const resultDiv = document.getElementById('result');
  
    calculateButton.addEventListener('click', () => {
      const income = parseFloat(incomeInput.value);
      if (isNaN(income) || income < 0) {
        resultDiv.textContent = 'Please enter a valid income.';
        return;
      }
  
      const tax = calculateTax(income);
      resultDiv.textContent = `Estimated tax: $${tax.toFixed(2)}`;
    });
  
    function calculateTax(income) {
      let tax = 0;
  
      if (income <= 50000) {
        tax = income * 0.05;
      } else if (income <= 100000) {
        tax = 50000 * 0.05 + (income - 50000) * 0.055;
      } else {
        tax = 50000 * 0.05 + 50000 * 0.055 + (income - 100000) * 0.06;
      }
  
      return tax;
    }
  });