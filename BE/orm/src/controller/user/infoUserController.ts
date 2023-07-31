import {Request, Response} from "express";
import infoUserService from "../../service/user/infoUserService";
import * as fs from "fs";

class InfoUserController{
    private service;

    constructor() {
        this.service = infoUserService;
    }

    findAll = async (req: Request, res: Response) => {
        let object = await this.service.getAll();
        res.json(object);
    }
    add = async (req: Request, res: Response) => {
        await this.service.add(req.body);
        res.json('complete');
    }
    delete = async (req: Request, res: Response) => {
        await this.service.delete(req.params.id)
        res.json('complete')
    }
    update = async (req: Request, res: Response) => {
        let object = await this.service.update(req.params.id, req.body)
        res.json(object)
    }
    findById = async (req: Request, res: Response) => {
        let object = await this.service.findById(req.params.id)
        res.json(object)
    }

}
export default new InfoUserController()