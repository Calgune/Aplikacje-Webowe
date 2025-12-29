const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
    dialect : 'sqlite',
    storage : 'database.db'
})

const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});


sequelize.sync();
module.exports = User;
