import { Subjects } from "./subjects";
import { ResourceName } from "../types/resourceName";
import { ProductPriceIntegrationUpdated } from "../interfaces/product-price-integration-updated.interface";
import { ProductUpdateConfiguration } from "./product-integration-created-event";

export interface ProductPriceIntegrationUpdatedEvent {
    subject: Subjects.ProductPriceIntegrationUpdated;
    data: {
        requestId: string;
        userId: string;
        products: ProductPriceIntegrationUpdated[];
        source?: ResourceName;
        updateConfiguration?: ProductUpdateConfiguration; 
    }
}