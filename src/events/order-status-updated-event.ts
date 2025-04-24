import { OrderProductCretedEvent } from "./order-product-created-event";
import { Subjects } from "./subjects";
import { OrderStatus } from "./types/order-status";
import { OrderType } from "./types/order-type";
import { PaymentType } from "./types/payment-type";

export interface OrderStatusUpdatedEvent {
    subject: Subjects.OrderUpdated;
    data: {
        id: string;
        uuid: string;
        user: string;
        version: number;
        status: OrderStatus;
    };
}