import { create, subtract } from './ui';
import {
  setDenominations,
  disable,
  enable,
  getATMAmount,
  showAlert,
  debit,
  showDebit
} from './app';

const $denominations = [2000, 500, 200, 100];

const $table = document.querySelector('.table');
const [$inputArray, $inputObject, $balance, $setButton] = create(
  $table,
  $denominations
);
let $set = false;
let $atmNotes;

const $debitAmountInput = document.querySelector('#debit-input');
const $debitButton = document.querySelector('#debit-button');
let $debitNotes;

const $alert = document.querySelector('#alert');

$setButton.onclick = function() {
  if (!$set) {
    $atmNotes = setDenominations($inputObject);
    disable($inputArray);
    enable([$debitAmountInput, $debitButton]);
    $balance.textContent = getATMAmount($atmNotes);
    $debitAmountInput.focus();
    this.textContent = 'Reset';
    $set = true;
  } else {
    disable([$debitAmountInput, $debitButton]);
    enable($inputArray);
    $inputArray[0].focus();
    this.textContent = 'Set Denominations';
    $set = false;
  }
};

$debitButton.onclick = function() {
  const atmAmount = getATMAmount($atmNotes);
  const debitAmount = Number($debitAmountInput.value);

  if (debitAmount < 100) {
    showAlert($alert, 'alert-warning', 'Minimum debit is ₹100');
    return;
  }

  if (debitAmount % 100 !== 0) {
    showAlert(
      $alert,
      'alert-warning',
      'Please enter the amount in denominations of 100'
    );
    return;
  }

  if (atmAmount < debitAmount) {
    showAlert($alert, 'alert-warning', 'Amount Unavailable');
    return;
  }

  $debitNotes = debit($denominations, $atmNotes, debitAmount);

  if ($debitNotes === -1) {
    showAlert($alert, 'alert-warning', 'Transaction Failed');
    return;
  }

  subtract($atmNotes, $debitNotes, $inputObject);
  $atmNotes = setDenominations($inputObject);
  $balance.textContent = getATMAmount($atmNotes);
  showDebit($alert, $debitNotes, debitAmount);
};

// Handling ENTER Press on Inputs
$inputArray[$inputArray.length - 1].onkeydown = function(event) {
  if (event.keyCode === 13) $setButton.click();
};

$debitAmountInput.onkeydown = function(event) {
  if (event.keyCode === 13) $debitButton.click();
};

$inputArray[0].focus();
