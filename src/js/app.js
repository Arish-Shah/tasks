import { getArrangements } from './util';

export function setDenominations(inputs) {
  const notes = {};
  Object.keys(inputs).forEach(key => {
    notes[key] = Number(inputs[key].value);
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
  // Checks if the Array contains that Object
  function notHas(arr, obj) {
    let flag = 1;
    arr.forEach(arrObj => {
      if (JSON.stringify(arrObj) === JSON.stringify(obj)) {
        flag = 0;
      }
    });

    return flag ? true : false;
  }

  const arrangements = getArrangements(denominations);
  const results = [];

  for (let i = 0; i < arrangements.length; i++) {
    const amount = debitAmount; // Keep Backup of Amount
    const tempNotes = { ...atmNotes }; // Get notes
    const resultNotes = {}; // For storing the resultant notes
    const notes = arrangements[i]; // Getting ith combination of notes

    // Deducts all possiblities
    // for (const note of notes) {
    //   while (amount >= note && tempNotes[note] > 0) {
    //     amount = amount - note;
    //     tempNotes[note]--;
    //     resultNotes[note] = resultNotes[note] || 0;
    //     resultNotes[note]++;
    //   }
    // }

    // Deducts once then restarts
    while (amount > 0) {
      const prevAmount = amount;

      for (const note of notes) {
        if (tempNotes[note] > 0 && amount >= note) {
          amount = amount - note;
          tempNotes[note]--;
          resultNotes[note] = resultNotes[note] || 0;
          resultNotes[note]++;
        }
      }

      if (prevAmount === amount) break;
    }

    // Checking if the object is unique
    if (amount === 0) {
      if (notHas(results, resultNotes)) {
        results.push(resultNotes);
      }
    }
  }

  if (!results.length) {
    return -1;
  } else if (results.length === 1) {
    return results[0];
  } else {
    // Result with max types of notes - NOT THE BEST APPROACH
    let returnNotes = results[0];

    results.forEach(r => {
      if (Object.keys(r).length >= Object.keys(returnNotes).length) {
        returnNotes = r;
      }
    });

    console.log(results);

    return returnNotes;
  }
}

export function showDebit(element, debitNotes, debitAmount) {
  const table = document.createElement('table');
  table.className = 'table table-sm mt-3';

  for (const key of Object.keys(debitNotes).reverse()) {
    table.innerHTML += `
      <tr>
        <td>${key}</td>
        <td>&times;</td>
        <td>${debitNotes[key]}</td>
        <td>=</td>
        <td>${key * debitNotes[key]}</td>
      </tr>
    `;
  }

  table.innerHTML += `
    <tr>
      <td colspan="4">Total:</td>
      <td>${debitAmount}</td>
    </tr>
  `;

  showAlert(element, 'alert-info', 'Transaction Successful!\nDenominations:');
  element.appendChild(table);
}
