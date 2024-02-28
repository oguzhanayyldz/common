export interface OrderProductUpdatedEvent {
    id: string;
    uuid: string;
    version: number;
    product?: string,
    combination?: string;
    quantity?: number;
    name?: string;
    sku?: string;
    barcode?: string;
    code?: string;
    price?: number;
    priceWithoutTax?: number;
    taxPrice?: number;
    tax?: number;
    priceTotal?: number;
    taxTotal?: number;
    discount?: number;
    discountTotal?: number;
    commissionPrice?: number;
    commissionTotal?: number;
    costPrice?: number;
    costTotal?: number;
    cancelled?: boolean;
    cancelledQuantity?: number;
    returned?: boolean;
    returnedQuantity?: number;
    uniqueCode?: string | null;
    deleted?: boolean;
    deletionDate?: Date | null;
}