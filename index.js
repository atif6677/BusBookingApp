const express = require('express');
const app = express();
const db = require('./utils/db-connection'); 
const usersRoutes = require('./routes/usersRoutes');
const bussesRoutes = require('./routes/bussesRoutes');
app.use(express.json()); // Middleware to parse JSON bodies


app.get('/', (req, res) => {
  res.send('Hello, World!');
}); 

app.use("/users", usersRoutes);
app.use("/busses", bussesRoutes);


const port =3000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
