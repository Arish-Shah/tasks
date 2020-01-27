import { getArrangements } from './util';

export function setDenominations(inputs, denominations) {
  const notes = {};
  inputs.forEach((el, index) => {
    notes[denominations[index]] = Number(el.value);
  });
  return notes;
}

function setInputs(elements, val) {
  elements.forEach(el => (el.disabled = val));
}

export function disable(elements) {
  setInputs(elements, !false);
}

export function enable(elements) {
  setInputs(elements, !true);
}

export function getATMAmount(atmNotes) {
  let amount = 0;
  Object.keys(atmNotes).forEach(note => {
    amount += note * atmNotes[note];
  });
  return amount;
}

export function showAlert(element, className, message) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }

  element.className = `alert ${className}`;
  element.innerText = message;
}

export function debit(denominations, atmNotes, debitAmount) {
  const arrangements = getArrangements(Object.keys(denominations));
  console.log(arrangements);
}
