export function create(table, denominations) {
  let inputArray = [];
  let inputObject = {};
  let balance;
  let button;
  let tr;

  // Adding Inputs
  denominations.forEach(denomination => {
    tr = document.createElement('tr');
    tr.innerHTML = `
      <td><h5>${denomination}</h5></td>
      <td><h5>&times;</h5></td>
      <td>
        <input
          type="number"
          placeholder="0"
          id="_${denomination}"
          class="form-control"
        />
      </td>
    `;
    table.appendChild(tr);
    inputArray.push(table.querySelector(`#_${denomination}`));
    inputObject[denomination] = table.querySelector(`#_${denomination}`);
  });

  // Adding Balance
  tr = document.createElement('tr');
  tr.innerHTML = `
    <td colspan="2">Balance:</td>
    <td id="atm-total">0</td>
  `;
  table.appendChild(tr);
  balance = tr.querySelector('#atm-total');

  // Adding Set Denominations Button
  tr = document.createElement('tr');
  tr.innerHTML = `
    <td colspan="3">
      <button class="btn btn-primary" id="set-button">
        Set Denominations
      </button>
    </td>
  `;
  table.appendChild(tr);
  button = tr.querySelector('#set-button');

  return [inputArray, inputObject, balance, button];
}

export function subtract(atmNotes, debitNotes, inputObject) {
  Object.keys(atmNotes).forEach(note => {
    const subValue = debitNotes[note] || 0;
    atmNotes[note] -= subValue;
    inputObject[note].value = atmNotes[note];
  });
}
