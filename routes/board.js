var express = require('express');
var router = express.Router();

// Define the calculateCellValue function
function calculateCellValue(row, col) {
  if (row === col) {
    return 1;
  } else if (row === col + 1) {
    return 2;
  } else if (row === col - 1) {
    return row-1;
  } else {
    return 0;
  }
}

router.get('/', (req, res) => {
  const query = req.query;
  console.log(`rows: ${query.rows}`);
  console.log(`cols: ${query.cols}`);
  const rows = Number(query.rows);
  const cols = Number(query.cols);

  if (
    Number.isNaN(rows) ||
    Number.isNaN(cols) ||
    rows < 1 || rows > 10 ||
    cols < 1 || cols > 10
  ) {
    res.render('board', { title: 'Board Display', query: null, calculateCellValue });
  } else {
    res.render('board', { title: 'Board Display', query, calculateCellValue });
  }
});

module.exports = router;