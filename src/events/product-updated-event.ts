import { Subjects } from "./subjects";
import { ProductStatus } from "./types/product-status";
import { ProductType } from "./types/product-type";
import { UnitType } from "../types/unit-type";
import { CurrencyCode } from "../types/currency-code";
import { FixStatus } from '../types/fix-status';
import { AttributesType } from '../../build/types/attributes-type';

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
    barcode: string | null;
    sku: string;
    name: string;
    image: string;
    description: string;
    currency: CurrencyCode;
    tax: number;
    status: ProductStatus;
    type: ProductType;
    unitType: UnitType;
    erpId?: string | null;
    uniqueCode?: string | null;
    deleted?: boolean;
    deletionDate?: Date | null;
}

export interface ProductUpdatedEventDataListItemCombination {
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
    deleted?: boolean;
    deletionDate?: Date | null;
    uniqueCode?: string | null;
}