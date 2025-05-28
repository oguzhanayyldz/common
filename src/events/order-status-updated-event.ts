import { Subjects } from "./subjects";
import { OrderStatus } from "./types/order-status";

export interface OrderStatusUpdatedEvent {
    subject: Subjects.OrderStatusUpdated;
    data: {
        id: string;
        uuid: string;
        user: string;
        version: number;
        status: OrderStatus;
        platformNumber?: string;
        platform?: string;
        metadata?: {
            shopify?: {
                orderId?: string;
                fulfillmentStatus?: string;
                financialStatus?: string;
                fulfillmentId?: string;
                [key: string]: any;
            };
            trendyol?: {
                orderNumber?: string;
                cargoTrackingNumber?: string;
                [key: string]: any;
            };
            [platform: string]: any;
        };
    };
}