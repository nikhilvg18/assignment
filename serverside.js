// Endpoint: GET /api/students/filter
app.get('/api/students/filter', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;
    const filterBy = req.query.filterBy;
    const filterValue = req.query.filterValue;
  
    const filteredStudents = students.filter(student => {
      // Assuming case-insensitive filtering by name
      if (filterBy === 'name') {
        return student.name.toLowerCase().includes(filterValue.toLowerCase());
      }
      // Add more conditions for other filterable columns if needed
  
      return false;
    });
  
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const data = filteredStudents.slice(startIndex, endIndex);
  
    res.json({
      data,
      page,
      pageSize,
      totalPages: Math.ceil(filteredStudents.length / pageSize),
      totalCount: filteredStudents.length
    });
  });