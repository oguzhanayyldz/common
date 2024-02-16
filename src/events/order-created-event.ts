import { OrderProductCretedEvent } from "./order-product-created-event";
import { Subjects } from "./subjects";
import { OrderStatus } from "./types/order-status";
import { OrderType } from "./types/order-type";
import { PaymentType } from "./types/payment-type";

export interface OrderCreatedEvent {
    subject: Subjects.OrderCreated;
    data: {
        id: string;
        uuid: string;
        user: string;
        version: number;
        customer?: {
            id: string;
            uuid: string;
            version: number;
            name: string;
            surname: string;
            code?: string;
            email: string;
            gender?: string;
            disctrict?: string;
            country?: string,
            postalCode?: string,
            identityNumber?: string,
            taxNumber?: string,
            taxOffice?: string
        },
        payment?: {
            id: string;
            uuid: string;
            version: number;
            bankName?: string;
            bankCode?: string;
            paymentCode?: string;
            paymentType?: PaymentType,
            date?: Date
        }
        orderCargo?: {
            id: string;
            uuid: string;
            version: number;
            name: string;
            shippingNumber?: string;
            trackingNumber?: string;
            printLink?: string;
            trackingLink?: string;
            senderNumber?: string;
            sentDate?: Date;
            shippedDate?: Date;
            deliveredDate?: Date;
        }
        purchaseNumber: string;
        platformNumber: string;
        platform: string;
        docSerial?: string;
        type?: OrderType,
        status?: OrderStatus,
        total: number;
        totalWithOutTax?: number;
        taxTotal?: number;
        costTotal?: number;
        commissionTotal?: number;
        discountTotal?: number;
        invoiceTotal?: number;
        creditTotal?: number;
        shippingTotal?: number;
        shippingTaxRate?: number;
        date: Date;
        uniqueCode?: string | null;
        orderProducts?: OrderProductCretedEvent[]
    };
}