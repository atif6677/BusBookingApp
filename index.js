const express = require('express');
const app = express();
const port =3000;
const db = require('./utils/db-connection'); 
const usersRoutes = require('./routes/usersRoutes');
const bussesRoutes = require('./routes/bussesRoutes');
const bookingRoutes = require('./routes/bookingRoutes'); // New import
const allModel = require('./models/allModel'); 
const { DataTypes } = require('sequelize');

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello, World!');
}); 

app.use("/users", usersRoutes);
app.use("/busses", bussesRoutes);
app.use("/bookings", bookingRoutes); // New route for bookings


db.sync({force:true})
  .then(() => {
    app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
})
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
