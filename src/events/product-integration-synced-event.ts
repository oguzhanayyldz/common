import { Subjects } from './subjects';
import { ProductIntegrationCreated } from '../interfaces/product-integration-created.interface';
import { ResourceName } from '../types/resourceName';

/**
 * @description Entegrasyondan senkronize edilen ürün listesi olayı
 * @interface ProductIntegrationSyncedEvent
 */
export interface ProductIntegrationSyncedEvent {
  subject: Subjects.ProductIntegrationSynced;
  data: {
    source: ResourceName;
    userId: string;
    products: ProductSyncedData[];
    timestamp: Date;
  };
} 

export interface ProductSyncedData {
    id: string;
    name: string;
    sku: string;
    barcode?: string;
    code?: string;
    listPrice?: number;
}