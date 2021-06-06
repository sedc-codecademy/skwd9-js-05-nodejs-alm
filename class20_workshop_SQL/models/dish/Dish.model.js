const { Sequelize, DataTypes } = require('sequelize')
const db = require('../../common/database/db.config')

const Dish = db.define('dish', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: 'dishes'
})

module.exports = Dish;

// animal => animals
// dish => dishs => dishes