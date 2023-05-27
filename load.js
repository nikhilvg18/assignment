const express = require('express');
const students = require('./students.json');

const app = express();

// Endpoint: GET /api/students
app.get('/api/students', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const data = students.slice(startIndex, endIndex);

  res.json({
    data,
    page,
    pageSize,
    totalPages: Math.ceil(students.length / pageSize),
    totalCount: students.length
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});