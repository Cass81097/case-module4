"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../../data-source");
const order_1 = require("../../entity/product/order");
class OrderService {
    constructor() {
        this.getAll = async () => {
            return this.repository.find();
        };
        this.add = async (index) => {
            return this.repository.save(index);
        };
        this.delete = async (id) => {
            return await this.repository.delete(id);
        };
        this.findById = async (id) => {
            return await this.repository.findOne({
                where: {
                    id: id
                },
                relations: {
                    user: true
                }
            });
        };
        this.update = async (id, data) => {
            return await this.repository.update(id, data);
        };
        this.getAllOrderByUserId = async (userId) => {
            return this.repository
                .createQueryBuilder("order")
                .leftJoinAndSelect("order.user", "user")
                .select([
                "order.id",
                "order.date",
                "order.sellingPrice",
                "order.quantity",
                "order.shippingCost",
                "order.packingCost",
                "user.id",
                "user.username",
                "user.address",
                "user.phone"
            ])
                .where("user.id = :userId", { userId })
                .getMany();
        };
        this.getAllByAsc = async () => {
            return this.repository.find({
                relations: {
                    user: true
                },
                order: {
                    sellingPrice: "ASC"
                }
            });
        };
        this.getAllByDesc = async () => {
            return this.repository.find({
                relations: {
                    user: true
                },
                order: {
                    sellingPrice: "DESC"
                }
            });
        };
        this.repository = data_source_1.AppDataSource.getRepository(order_1.Order);
    }
}
exports.default = new OrderService();
//# sourceMappingURL=orderService.js.map