import { CurrencyCode } from "../types/currency-code";
import { UnitType } from "../types/unit-type";
import { Subjects } from "./subjects";
import { ProductStatus } from "./types/product-status";
import { ProductType } from "./types/product-type";
import { FixStatus } from '../types/fix-status';
import { AttributesType } from '../types/attributes-type';
import { ResourceName } from '../types/resourceName';

export interface ProductCreatedEvent {
    subject: Subjects.ProductCreated;
    data: ProductCreatedEventData;
}

export interface ProductCreatedEventData {
    list: ProductCreatedEventDataListItem[];
}

export interface ProductCreatedEventDataListItem {
    id: string;
    uuid: string;
    user: string;
    version: number;
    barcode: string;
    sku: string;
    name: string;
    description?: string;
    image?: string;
    currency?: string;
    tax: number;
    status: ProductStatus;
    type: ProductType;
    unitType?: string;
    erpId?: string;
    creationDate: Date;
    updatedOn: Date;
    uniqueCode: string;
    brand?: string;
    source?: ResourceName;
    sourceData?: Record<string, any>;
    combinations?: ProductCreatedEventDataListItemCombination[];
}

export interface ProductCreatedEventDataListItemCombination {
    id: string;
    uuid: string;
    user: string;
    version: number;
    barcode: string;
    sku: string;
    status: FixStatus;
    erpId?: string;
    attributes?: Record<string, any>;
    sort?: number;
    uniqueCode: string;
    source?: ResourceName;
    sourceData?: Record<string, any>;
}

export interface ProductCreatedEventDataListItemPackage {
    id: string;
    uuid: string;
    user: string;
    version: number;
    quantity: number;
    price: number;
    status: FixStatus;
    product: string;
    packageProduct: string;
    uniqueCode?: string | null;
    action?: 'create' | 'update';
}

export interface ProductCreatedEventDataListItemRelated {
    id: string;
    uuid: string;
    user: string;
    version: number;
    product: string;
    relatedProduct: string;
    uniqueCode?: string | null;
}