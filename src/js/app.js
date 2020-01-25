const _ = query => document.querySelector(query);
const $2000 = _('#_2000');
const $500 = _('#_500');
const $200 = _('#_200');
const $100 = _('#_100');

const setButton = _('#set-button');
const debitButton = _('#debit-button');
const debitAmountInput = _('#debit-amount');
const alertContainer = _('.alert');
const atmTotal = _('#atm-total');

let atmDenominations;
let atmTempDenominations; // For keeping values during transaction
let debitDenominations = { 2000: 0, 500: 0, 200: 0, 100: 0 };
let ATMAmount;
let debitAmount;
let previousAmount;

function initDebitDenominations() {
  debitDenominations = { 2000: 0, 500: 0, 200: 0, 100: 0 };
}

function cleanDebit() {
  debitAmountInput.value = '';
  debitAmountInput.focus();
}

function disableSetDenominations(val) {
  function setValueAndDisable(element, value) {
    element.value = value;
    element.disabled = true;
  }

  // Sets the Total Amount
  ATMAmount = getATMamount();
  atmTotal.textContent = ATMAmount;

  if (val) {
    setValueAndDisable($2000, atmDenominations[2000]);
    setValueAndDisable($500, atmDenominations[500]);
    setValueAndDisable($200, atmDenominations[200]);
    setValueAndDisable($100, atmDenominations[100]);
  } else {
    $2000.disabled = false;
    $500.disabled = false;
    $200.disabled = false;
    $100.disabled = false;
  }
}

function disableDebit(val) {
  debitAmountInput.disabled = val;
  debitButton.disabled = val;
}

function getATMamount() {
  let sum = 0;
  Object.keys(atmDenominations).forEach(key => {
    sum = sum + key * atmDenominations[key];
  });
  return sum;
}

function setDenominations() {
  atmDenominations = {
    2000: Number($2000.value),
    500: Number($500.value),
    200: Number($200.value),
    100: Number($100.value)
  };

  this.textContent = 'Reset';
  this.onclick = resetDenominations;

  disableSetDenominations(true);
  disableDebit(false);
  debitAmountInput.focus();
}

function resetDenominations() {
  this.textContent = 'Set Denominations';
  this.onclick = setDenominations;

  disableSetDenominations(false);
  disableDebit(true);
  $2000.focus();
}

function showAlert(className, message) {
  const classNames = ['alert-warning', 'alert-info'];

  // Cleaning Alert and Removing Classes
  while (alertContainer.firstChild) {
    alertContainer.removeChild(alertContainer.firstChild);
  }

  classNames.forEach(cn => {
    if (alertContainer.classList.contains(cn)) {
      alertContainer.classList.remove(cn);
    }
  });

  alertContainer.classList.add(className);
  alertContainer.innerText = message;
}

function showDebit() {
  const table = document.createElement('table');
  table.className = 'table table-sm mt-3';

  for (const key of Object.keys(debitDenominations)) {
    table.innerHTML += `
      <tr>
        <td>${key}</td>
        <td>&times;</td>
        <td>${debitDenominations[key]}</td>
        <td>=</td>
        <td>${key * debitDenominations[key]}</td>
      </tr>
    `;
  }

  table.innerHTML += `
    <tr>
      <td colspan="4">Total:</td>
      <td>${debitAmount}</td>
    </tr>
  `;

  showAlert('alert-info', 'Transaction Successful!\nDenominations:');
  alertContainer.appendChild(table);
}

function withdraw(key, amount) {
  atmTempDenominations[key]--;
  debitDenominations[key]++;
  return amount - notes[key];
}

function debit(amount) {
  if (amount === 0) {
    showDebit();
    // Copy the temporary deductions from the main denominations
    atmDenominations = { ...atmTempDenominations };
    disableSetDenominations(true);
    return;
  }

  previousAmount = amount;

  if (previousAmount === amount) {
    showAlert('alert-warning', 'Transaction Failed');
    return;
  }
}

function startDebit() {
  debitAmount = Number(debitAmountInput.value);
  cleanDebit();

  if (debitAmount < 100) {
    showAlert('alert-warning', 'Minimum debit is ₹100');
    return;
  }

  if (debitAmount % 100 !== 0) {
    showAlert(
      'alert-warning',
      'Please enter the amount in denominations of 100'
    );
    return;
  }

  if (debitAmount > ATMAmount) {
    showAlert('alert-warning', 'Amount unavailable');
    return;
  } else {
    initDebitDenominations();
    atmTempDenominations = { ...atmDenominations };
    debit(debitAmount);
  }
}

// Clicking Set Denominations Button
setButton.onclick = setDenominations;
debitButton.onclick = startDebit;

// Handling ENTER Press
$100.onkeydown = function(event) {
  if (event.keyCode === 13) setButton.click();
};

debitAmountInput.onkeydown = function(event) {
  if (event.keyCode === 13) debitButton.click();
};
