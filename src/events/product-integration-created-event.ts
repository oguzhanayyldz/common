import { Subjects } from "./subjects";
import { ProductIntegrationCreated } from '../interfaces/product-integration-created.interface';

export interface ProductIntegrationCreatedEvent {
    subject: Subjects.ProductIntegrationCreated;
    data: {
        requestId: string;
        userId: string;
        products: ProductIntegrationCreated[];
    }
}