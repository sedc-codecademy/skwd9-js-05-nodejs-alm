const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../common/database/db.config');
const OrderStatus = require('../../common/models/order-status.enum')

class Order extends Model {}

Order.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    dishName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: OrderStatus.new
    }
}, {
    sequelize,
    modelName: 'orders',
    timestamps: true,
})

module.exports = Order;