import { Subjects } from "./subjects";
import { ProductStatus } from "./types/product-status";
import { ProductType } from "./types/product-type";
import { UnitType } from "../types/unit-type";
import { CurrencyCode } from "../types/currency-code";
import { FixStatus } from '../types/fix-status';
import { AttributesType } from '../types/attributes-type';
import { ResourceName } from '../types/resourceName';

export interface ProductUpdatedEvent {
    subject: Subjects.ProductUpdated;
    data: ProductUpdatedEventData;
}

export interface ProductUpdatedEventData {
    list: ProductUpdatedEventDataListItem[];
}

export interface ProductUpdatedEventDataListItem {
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
    status: FixStatus;
    type: ProductType;
    unitType?: string;
    erpId?: string;
    uniqueCode: string;
    brand?: string;
    source?: ResourceName;
    sourceData?: Record<string, any>;
    combinations?: ProductUpdatedEventDataListItemCombination[];
    deleted?: boolean;
    deletionDate?: Date;
}

export interface ProductUpdatedEventDataListItemCombination {
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
    action: 'create' | 'update' | 'delete';
}

export interface ProductUpdatedEventDataListItemPackage {
    id: string;
    uuid: string;
    user: string;
    version: number;
    quantity: number;
    price: number;
    status: FixStatus;
    deleted?: boolean;
    deletionDate?: Date | null;
    product: string;
    packageProduct: string;
    uniqueCode?: string | null;
    action?: 'create' | 'update';
}

export interface ProductUpdatedEventDataListItemRelated {
    id: string;
    uuid: string;
    user: string;
    version: number;
    deleted?: boolean;
    deletionDate?: Date | null;
    product: string;
    relatedProduct: string;
    uniqueCode?: string | null;
}