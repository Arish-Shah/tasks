import { $, combinations } from './util';

const $2000 = $('#_2000');
const $500 = $('#_500');
const $200 = $('#_200');
const $100 = $('#_100');

const setButton = $('#set-button');
const debitButton = $('#debit-button');
const debitAmountInput = $('#debit-amount');
const alertContainer = $('.alert');
const atmTotal = $('#atm-total');

let atmNotes;
let ATMAmount;
let debitAmount;

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
    setValueAndDisable($2000, atmNotes[2000]);
    setValueAndDisable($500, atmNotes[500]);
    setValueAndDisable($200, atmNotes[200]);
    setValueAndDisable($100, atmNotes[100]);
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
  Object.keys(atmNotes).forEach(key => {
    sum = sum + key * atmNotes[key];
  });
  return sum;
}

function setDenominations() {
  atmNotes = {
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
  const classNames = ['alert-warning', 'alert-info', 'alert-danger'];

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

function showDebit(noteObj) {
  const table = document.createElement('table');
  table.className = 'table table-sm mt-3';

  for (const key of Object.keys(noteObj).reverse()) {
    table.innerHTML += `
      <tr>
        <td>${key}</td>
        <td>&times;</td>
        <td>${noteObj[key]}</td>
        <td>=</td>
        <td>${key * noteObj[key]}</td>
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

function debit(amount) {
  const results = []; // All unique result combinations

  for (let i = 0; i < combinations.length; i++) {
    const prevAmount = amount; // Keep the backup of Amount
    const tempNotes = { ...atmNotes }; // Get current ATM notes
    const resultNotes = {};
    const notes = combinations[i]; // Getting i[th] combination of notes

    for (const note of notes) {
      while (amount >= note && tempNotes[note] > 0) {
        amount = amount - note;
        tempNotes[note]--;
        resultNotes[note] = resultNotes[note] || 0;
        resultNotes[note]++;
      }
    }

    // Checking if the object is unique and pushing
    if (amount === 0) {
      const index = results.findIndex(r => {
        return (
          resultNotes[2000] === r[2000] &&
          resultNotes[500] === r[500] &&
          resultNotes[200] === r[200] &&
          resultNotes[100] === r[100]
        );
      });

      if (index <= -1) {
        results.push(resultNotes);
      }
    }

    // Resetting Amount for next iteration
    amount = prevAmount;
  }

  if (!results.length) {
    showAlert('alert-danger', 'Transaction Failed');
    return -1;
  } else if (results.length === 1) {
    return results[0];
  } else {
    // Getting the result with max types of notes - NOT THE BEST APPROACH
    let returnNotes = results[0];

    results.forEach(r => {
      if (Object.keys(r).length >= Object.keys(returnNotes).length) {
        returnNotes = r;
      }
    });

    return returnNotes;
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
    const debitNotes = debit(debitAmount);

    if (debitNotes !== -1) {
      // Subtract the returned Result from ATM Denominations
      Object.keys(atmNotes).forEach(key => {
        const sub = debitNotes[key] || 0;
        atmNotes[key] -= sub;
      });

      showDebit(debitNotes);
      disableSetDenominations(true);
    }
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
