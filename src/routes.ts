import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserControllers";
import { ListUsersController } from "../controllers/ListUserControllers";
import { DeleteUserController } from "../controllers/DeleteUserControllers";
import { UpdateUserController } from "../controllers/UpdateUserControllers";
import { CreateCategoriasController } from "../controllers/CreateCategoriasController";
import { ListCategoriasController } from "../controllers/ListCategoriasController";
import { DeleteCategoriasController } from "../controllers/DeleteCategoriasController";
import { UpdateCategoriasController } from "../controllers/UpdateCategoriasController";
import { CreateClientesController } from "../controllers/CreateClientesController";
import { ListClientesController } from "../controllers/ListClientesController";
import { DeleteClientesController } from "../controllers/DeleteClientesController";
import { UpdateClientesController } from "../controllers/UpdateClientesController";
import { CreateProdutosController } from "../controllers/CreateProdutosController";
import { ListProdutosController } from "../controllers/ListProdutosController";
import { DeleteProdutosController } from "../controllers/DeleteProdutosController";
import { UpdateProdutosController } from "../controllers/UpdateProdutosController";
import { CreateVendasController } from "../controllers/CreateVendasController";
import { ListVendasController } from "../controllers/ListVendasController";
import { DeleteVendasController } from "../controllers/DeleteVendasController";
import { UpdateVendasController } from "../controllers/UpdateVendasController";


import {AuthenticateUserController} from "../controllers/AuthenticateUserController";

import { ensureAdmin} from "../middlewares/ensureAdmin";
import { ensureAuthenticated} from "../middlewares/ensureAuthenticated";

const createUserController  = new CreateUserController();
const listUsersController  = new ListUsersController();
const deleteUserController = new DeleteUserController();
const updateUserController = new UpdateUserController();
const createCategoriasController  = new CreateCategoriasController();
const listCategoriasController  = new ListCategoriasController();
const deleteCategoriasController  = new DeleteCategoriasController();
const updateCategoriasController  = new UpdateCategoriasController();
const createClientesController  = new CreateClientesController();
const listClientesController  = new ListClientesController();
const deleteClientesController  = new DeleteClientesController();
const updateClientesController  = new UpdateClientesController();
const createProdutosController  = new CreateProdutosController();
const listProdutosController  = new ListProdutosController();
const deleteProdutosController  = new DeleteProdutosController();
const updateProdutosController  = new UpdateProdutosController();
const createVendasController  = new CreateVendasController();
const listVendasController  = new ListVendasController();
const deleteVendasController  = new DeleteVendasController();
const updateVendasController  = new UpdateVendasController();

const autenticationUserController  = new AuthenticateUserController();

const router = Router();

router.post("/users", createUserController.handle);
router.post("/login", autenticationUserController.handle);
router.get("/users",ensureAuthenticated, ensureAdmin, listUsersController.handle);

router.use(ensureAdmin)
router.delete("/users/:id", deleteUserController.handle);
router.put("/users", updateUserController.handle);

router.post("/categorias", createCategoriasController.handle);
router.get("/categorias", listCategoriasController.handle);
router.delete("/categorias/:id", deleteCategoriasController.handle);
router.put("/categorias", updateCategoriasController.handle);
router.post("/clientes", createClientesController.handle);
router.get("/clientes", listClientesController.handle);
router.delete("/clientes/:id", deleteClientesController.handle);
router.put("/clientes", updateClientesController.handle);
router.post("/produtos", createProdutosController.handle);
router.get("/produtos", listProdutosController.handle);
router.delete("/produtos/:id", deleteProdutosController.handle);
router.put("/produtos", updateProdutosController.handle);
router.post("/vendas", createVendasController.handle);
router.get("/vendas", listVendasController.handle);
router.delete("/vendas/:id", deleteVendasController.handle);
router.put("/vendas", updateVendasController.handle);

export {router}