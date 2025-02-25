"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getAllProducts = void 0;
const client_1 = require("@prisma/client");
const httpError_1 = require("../errorHandler/httpError");
const prisma = new client_1.PrismaClient();
const getAllProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield prisma.product.findMany();
        res.status(200).json(products);
    }
    catch (err) {
        next(new httpError_1.httpError('Failed to fetch products', 500));
    }
});
exports.getAllProducts = getAllProducts;
const getProductById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield prisma.product.findUnique({
            where: { id: Number(req.params.id) },
        });
        if (!product) {
            throw new httpError_1.httpError('Produkt nicht gefunden', 404);
        }
        res.status(200).json(product);
    }
    catch (error) {
        next(error instanceof httpError_1.httpError ? error : new httpError_1.httpError('Fehler beim Abrufen des Produkts', 500));
    }
});
exports.getProductById = getProductById;
const createProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, price, stock, category, image } = req.body;
        const product = yield prisma.product.create({
            data: { name, description, price, stock, category, image },
        });
        res.status(201).json(product);
    }
    catch (err) {
        next(new httpError_1.httpError('Failed to create product', 500));
    }
});
exports.createProduct = createProduct;
const updateProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, description, price, stock, category, image } = req.body;
        const updatedProduct = yield prisma.product.update({
            where: { id: parseInt(id) },
            data: { name, description, price, stock, category, image },
        });
        res.status(200).json(updatedProduct);
    }
    catch (err) {
        next(new httpError_1.httpError('Failed to update product', 500));
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield prisma.product.delete({
            where: { id: parseInt(id) },
        });
        res.status(204).send();
    }
    catch (err) {
        next(new httpError_1.httpError('Failed to delete product', 500));
    }
});
exports.deleteProduct = deleteProduct;
