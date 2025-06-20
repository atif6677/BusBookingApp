const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../utils/db-connection');

const Users = sequelize.define('Users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },    
    name: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true
    }
});

const Busses = sequelize.define('Busses', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  busNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  totalSeats: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  availableSeats: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});


const Booking = sequelize.define('Booking', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
        model: Users,
        key: 'id'
        }
    },
    busId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
        model: Busses,
        key: 'id'
        }
    },
    seatNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

const Payments = sequelize.define('Payments', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
    bookingId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
        model: Booking,
        key: 'id'
        }
    },
    amountPaid: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    paymentStatus: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
});



module.exports = {
    Users,
    Busses,
    Booking,
    Payments
};
