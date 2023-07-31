"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../../data-source");
const listLocation_1 = require("../../entity/location/listLocation");
class LocationService {
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
                }
            });
        };
        this.update = async (id, data) => {
            return await this.repository.update(id, data);
        };
        this.repository = data_source_1.AppDataSource.getRepository(listLocation_1.ListLocation);
    }
}
exports.default = new LocationService();
//# sourceMappingURL=locationService.js.map