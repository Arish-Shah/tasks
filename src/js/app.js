const $ = query => document.querySelector(query);
const _2000 = $('#_2000');
const _500 = $('#_500');
const _200 = $('#_200');
const _100 = $('#_100');

const setButton = $('#set-button');
const debitButton = $('#debit-button');
const debitAmount = $('#debit-amount');
const alertContainer = $('.alert');

let denominations;
let _amount;

function disableSetDenominations(val) {
  function setValueAndDisable(element, value) {
    element.value = value;
    element.disabled = true;
  }

  if (val) {
    setValueAndDisable(_2000, denominations._2000);
    setValueAndDisable(_500, denominations._500);
    setValueAndDisable(_200, denominations._200);
    setValueAndDisable(_100, denominations._100);
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

function setDenominations() {
  denominations = {
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

function debit() {
  _amount = +debitAmount.value;
}

// Clicking Set Denominations Button
setButton.onclick = setDenominations;
debitButton.onclick = debit;
