import { ProductIntegrationImage } from "./product-integration-created.interface";

export interface ProductImageIntegrationUpdated {
    sku: string;
    barcode?: string;
    combinationId?: string;
    productId?: string;
    url?: ProductIntegrationImage[];
}