const $ = query => document.querySelector(query);
const _2000 = $('#_2000');
const _500 = $('#_500');
const _200 = $('#_200');
const _100 = $('#_100');
const notes = { _2000: 2000, _500: 500, _200: 200, _100: 100 };

const setButton = $('#set-button');
const debitButton = $('#debit-button');
const debitAmount = $('#debit-amount');
const alertContainer = $('.alert');
const atmTotal = $('#atm-total');

let denominationsATM;
let denominationsDebit = { _2000: 0, _500: 0, _200: 0, _100: 0 };
let amountATM;
let amountDebit;
let previousAmount;

function cleanDebit() {
  debitAmount.value = '';
  debitAmount.focus();
}

function disableSetDenominations(val) {
  function setValueAndDisable(element, value) {
    element.value = value;
    element.disabled = true;
  }

  // Sets the Total Amount
  amountATM = getATMamount();
  atmTotal.textContent = amountATM;

  if (val) {
    setValueAndDisable(_2000, denominationsATM._2000);
    setValueAndDisable(_500, denominationsATM._500);
    setValueAndDisable(_200, denominationsATM._200);
    setValueAndDisable(_100, denominationsATM._100);
  } else {
    _2000.disabled = false;
    _500.disabled = false;
    _200.disabled = false;
    _100.disabled = false;
  }
}

function disableDebit(val) {
  debitAmount.disabled = val;
  debitButton.disabled = val;
}

function getATMamount() {
  return (
    denominationsATM._2000 * 2000 +
    denominationsATM._500 * 500 +
    denominationsATM._200 * 200 +
    denominationsATM._100 * 100
  );
}

function setDenominations() {
  denominationsATM = {
    _2000: +_2000.value,
    _500: +_500.value,
    _200: +_200.value,
    _100: +_100.value
  };

  this.textContent = 'Reset';
  this.onclick = resetDenominations;

  disableSetDenominations(true);
  disableDebit(false);
  debitAmount.focus();
}

function resetDenominations() {
  this.textContent = 'Set Denominations';
  this.onclick = setDenominations;

  disableSetDenominations(false);
  disableDebit(true);
  _2000.focus();
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

  for (const key of Object.keys(denominationsDebit)) {
    table.innerHTML += `
      <tr>
        <td>${notes[key]}</td>
        <td>&times;</td>
        <td>${denominationsDebit[key]}</td>
        <td>=</td>
        <td>${notes[key] * denominationsDebit[key]}</td>
      </tr>
    `;
  }

  table.innerHTML += `
    <tr>
      <td colspan="4">Total:</td>
      <td>${amountDebit}</td>
    </tr>
  `;

  showAlert('alert-info', 'Transaction Successful!\nDenominations:');
  alertContainer.appendChild(table);

  Object.keys(denominationsDebit).forEach(key => {
    denominationsDebit[key] = 0;
  });
}

function withdraw(amount, key) {
  denominationsATM[key]--;
  denominationsDebit[key]++;
  return amount - notes[key];
}

function debit(amount) {
  if (!amount) {
    showDebit(); // Shows Denominations Information
    disableSetDenominations(true);
    return;
  } else {
    previousAmount = amount;

    if (amount >= 2000) {
      if (denominationsATM._2000) {
        amount = withdraw(amount, '_2000');
      }
    }

    if (amount >= 500 && amount < 2000) {
      if (denominationsATM._500) {
        amount = withdraw(amount, '_500');
      }
    }

    if (amount >= 200 && amount < 500) {
      if (denominationsATM._200) {
        amount = withdraw(amount, '_200');
      }
    }

    if (amount >= 100 && amount < 200) {
      if (denominationsATM._100) {
        amount = withdraw(amount, '_100');
      }
    }

    if (previousAmount === amount) {
      showAlert('alert-warning', 'Unable to dispatch');
      return;
    }

    debit(amount);
  }
}

function startDebit() {
  amountDebit = +debitAmount.value;
  cleanDebit();

  if (amountDebit < 100) {
    showAlert('alert-warning', 'Minimum debit is ₹100');
    return;
  }

  if (amountDebit % 100 !== 0) {
    showAlert(
      'alert-warning',
      'Please enter the amount in denominations of 100'
    );
    return;
  }

  if (amountDebit > amountATM) {
    showAlert(
      'alert-warning',
      'Amount unavailable \n Please enter a lower amount'
    );
    return;
  } else {
    debit(amountDebit);
  }
}

// Clicking Set Denominations Button
setButton.onclick = setDenominations;
debitButton.onclick = startDebit;

// Handling ENTER Press
_100.onkeydown = function(event) {
  if (event.keyCode === 13) setButton.click();
};

debitAmount.onkeydown = function(event) {
  if (event.keyCode === 13) debitButton.click();
};
