const express = require('express');
const app = express();
const port = 3000;



const user = {
    name: 'John',
    age: 30,
    email: 'test@gmail.com',
    subjects: ['Math', 'English', 'Science']
};


app.get('/', (req, res) => {
    res.json(user);
});

app.get('/name', (req, res) => {
    res.json(user.name);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});