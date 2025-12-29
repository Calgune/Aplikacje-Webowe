const { Sequelize, DataTypes } = require("sequelize");

// ORM (Object Realtional Mapping) pozwala pisać JS zamiast SQL
// Sequelize - silnik połączenia z bazą
// DataTypes typy danych kolumn

// łączenie z bazą jeśli nie istnieje tworzy ją (plik database.db)
const sequelize = new Sequelize({
    dialect : 'sqlite',
    storage : 'database.db'
})

// obiekt w js reprezentujący tabele w bazie
const Book = sequelize.define('Book', {
    // "id" doda się samo (zrobi to sequlize)
    id: { 
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
        
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

// synchronizacja bazy
// czy istnieje:
// jeśli nie to ją tworzy
// jeśli tak to nic nie robi
sequelize.sync();

// pozwala w innym pliku użyć np:
// const Book = require('./book'); 
// oraz potem:
// Book.findAll();
// Book.create(...);
// Book.findByPk(1);
module.exports = Book;
