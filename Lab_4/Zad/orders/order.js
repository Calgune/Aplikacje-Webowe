const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
    dialect : 'sqlite',
    storage : 'database.db'
})

const Order = sequelize.define('Order', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    bookId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

sequelize.sync();
module.exports = Order;
