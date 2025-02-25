import { Router } from 'express';
import { getAllOrders, getOrderById, createOrder, updateOrder, deleteOrder } from '../controller/orderController';

const router = Router();

router.get('/', getAllOrders);
router.get('/:orderNumber', getOrderById);
router.post('/', createOrder);
router.put('/:orderNumber', updateOrder);
router.delete('/:orderNumber', deleteOrder);

export default router;
