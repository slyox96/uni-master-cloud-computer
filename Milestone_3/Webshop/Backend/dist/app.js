"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const orderRoutes_1 = __importDefault(require("./routes/orderRoutes"));
const httpError_1 = require("./errorHandler/httpError");
const app = (0, express_1.default)();
const PORT = process.env.BACKEND_PORT || 3000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost';
const CORS_PORT = process.env.CORS_PORT || 5173;
const corsOptions = {
    origin: `${CORS_ORIGIN}:${CORS_PORT}`,
    methods: process.env.CORS_METHODS,
    allowedHeaders: process.env.CORS_ALLOWED_HEADERS
};
app.use((0, cors_1.default)(corsOptions));
app.use(body_parser_1.default.json());
app.use('/api/products', productRoutes_1.default);
app.use('/api/orders', orderRoutes_1.default);
app.use((error, req, res, next) => {
    if (res.headersSent) {
        return next(error);
    }
    if (error instanceof httpError_1.httpError) {
        res.status(error.code).json({ message: error.message });
    }
    else {
        res.status(500).json({ message: 'An unknown error occurred!' });
    }
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
