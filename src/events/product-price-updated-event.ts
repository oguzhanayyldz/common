import { Subjects } from "./subjects";
import { ResourceName } from "../types/resourceName";
import { PriceUpdateSettings, ProductPriceIntegrationUpdated } from "../interfaces/product-price-integration-updated.interface";
import { CurrencyCode } from "../types/currency-code";

export interface ProductPriceUpdatedEvent {
    subject: Subjects.ProductPriceUpdated;
    data: {
        requestId: string;
        userId: string;
        data: ProductPriceIntegrationUpdated[];
    }
}

export interface ProductPriceUpdated {
    id: string,
    product: string,
    combination?: string,
    price: number,
    listPrice?: number,
    currency?: CurrencyCode,
    version: number,  // Version bilgisini de ekleyin
    source: ResourceName,
    sourceTimestamp: Date,
    updateRequestId?: string
}