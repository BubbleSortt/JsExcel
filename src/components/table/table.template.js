const CODES = {
  A: 65,
  Z: 90
};

function createCell() {
  return `
  <div class="cell" contenteditable></div>
  `;
}

function createCol(content) {
  return ` 
    <div class="column">${content}</div>
  `;
}

function createRow(content, info = '') {
  return `
  <div class="row">
    <div class="row-info">${info}</div>
    <div class="row-data">${content}</div>
  </div>
  `;
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index);
}

export function createTable(rowsCount = 20) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];
  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(createCol)
      .join('');

  rows.push(createRow(cols));

  const cells = new Array(colsCount)
      .fill('')
      .map(createCell)
      .join('');

  console.log(cols);
  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow(cells, i + 1));
  }

  return rows.join('');
}