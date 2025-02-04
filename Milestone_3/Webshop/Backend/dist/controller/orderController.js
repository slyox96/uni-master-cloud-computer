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
exports.deleteOrder = exports.updateOrder = exports.createOrder = exports.getOrderById = exports.getAllOrders = void 0;
const client_1 = require("@prisma/client");
const httpError_1 = require("../errorHandler/httpError");
const prisma = new client_1.PrismaClient();
const getAllOrders = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield prisma.order.findMany({
            include: {
                orderItems: true,
                Product: true,
            },
        });
        res.status(200).json(orders);
    }
    catch (err) {
        next(new httpError_1.httpError('Failed to fetch orders', 500));
    }
});
exports.getAllOrders = getAllOrders;
const getOrderById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { orderNumber } = req.params;
        const order = yield prisma.order.findUnique({
            where: { orderNumber },
            include: {
                orderItems: true,
                Product: true,
            },
        });
        if (!order) {
            throw new httpError_1.httpError('Order not found', 404);
        }
        res.status(200).json(order);
    }
    catch (err) {
        next(err instanceof httpError_1.httpError ? err : new httpError_1.httpError('Failed to fetch the order', 500));
    }
});
exports.getOrderById = getOrderById;
const createOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { orderNumber, totalAmount, status, paymentMethod, orderItems } = req.body;
        const order = yield prisma.order.create({
            data: {
                orderNumber,
                totalAmount,
                status,
                paymentMethod,
                orderItems: {
                    create: orderItems,
                },
            },
            include: {
                orderItems: true,
            },
        });
        res.status(201).json(order);
    }
    catch (err) {
        next(new httpError_1.httpError('Failed to create order', 500));
    }
});
exports.createOrder = createOrder;
const updateOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { orderNumber } = req.params;
        const { totalAmount, status, paymentMethod } = req.body;
        const order = yield prisma.order.update({
            where: { orderNumber },
            data: { totalAmount, status, paymentMethod },
            include: {
                orderItems: true,
            },
        });
        res.status(200).json(order);
    }
    catch (err) {
        next(new httpError_1.httpError('Failed to update order', 500));
    }
});
exports.updateOrder = updateOrder;
const deleteOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { orderNumber } = req.params;
        const order = yield prisma.order.delete({
            where: { orderNumber },
        });
        res.status(204).send();
    }
    catch (err) {
        next(new httpError_1.httpError('Failed to delete order', 500));
    }
});
exports.deleteOrder = deleteOrder;
