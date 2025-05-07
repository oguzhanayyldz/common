import { CurrencyCode } from "../types/currency-code";
import { UnitType } from "../types/unit-type";
import { Subjects } from "./subjects";
import { ProductStatus } from "./types/product-status";
import { ProductType } from "./types/product-type";
import { FixStatus } from '../types/fix-status';
import { AttributesType } from '../types/attributes-type';

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
    barcode: string | null;
    sku: string;
    name: string;
    description: string;
    image: string;
    currency: CurrencyCode;
    tax: number;
    status: ProductStatus;
    type: ProductType;
    unitType: UnitType;
    erpId?: string | null;
    combinations?: ProductCreatedEventDataListItemCombination[];
    packages?: ProductCreatedEventDataListItemPackage[];
    related?: ProductCreatedEventDataListItemRelated;
    uniqueCode?: string | null;
    creationDate?: Date;
    updatedOn?: Date;
}

export interface ProductCreatedEventDataListItemCombination {
    id: string;
    uuid: string;
    user: string;
    version: number;
    barcode: string;
    sku: string;
    status: FixStatus;
    erpId?: string | null;
    sort?: number | null;
    attributes?: AttributesType;
    uniqueCode?: string | null;
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