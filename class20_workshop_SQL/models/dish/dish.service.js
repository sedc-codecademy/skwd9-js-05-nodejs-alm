const ts = require("../../common/db/text-service");
const { v4: uuidv4 } = require("uuid");
const Dish = require("./Dish.model");
const db = require("../../common/database/db.config");
const { QueryTypes } = require("sequelize");

class DishService {
  static getAllDishes() {
    // return db.query("SELECT * FROM dishes", { type: QueryTypes.SELECT });
    return Dish.findAll()
  }

  static getDish(id) {
    // return db.query("SELECT * FROM dishes WHERE id = :id LIMIT 1", {
    //   type: QueryTypes.SELECT,
    //   replacements: { id: id },
    // });
    return Dish.findByPk(id);
  }

  static createDish(data) {
    return Dish.create(data);
  }

  static updateDish(id, data) {
    Dish.update(
      { name: data.name, price: data.price },
      {
        where: {
          id: id,
        },
      }
    );
  }

  static deleteDish(id) {
    return Dish.destroy({
      where: {
        id: id,
      },
    });
  }
}

module.exports = DishService;
