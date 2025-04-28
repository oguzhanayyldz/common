import { ProductType } from "../events/types/product-type";
import { CurrencyCode } from "../types/currency-code";
import { ResourceName } from "../types/resourceName";
import { UnitType } from "../types/unit-type";

export interface ProductIntegrationCreated {
    id: string;
    name: string;
    sku: string;
    barcode?: string;
    description: string;
    listPrice?: number;
    price: number;
    tax: number;
    type?: ProductType;
    unitType?: UnitType;
    currency?: CurrencyCode;
    source?: ResourceName;
    category?: ProductIntegrationCategory;
    brand?: ProductIntegrationBrand;
    images?: ProductIntegrationImage[];
    combinations?: ProductIntegrationCombination[];
}

export interface ProductIntegrationCategory {
    name: string;
    code: string;
}

export interface ProductIntegrationBrand {
    name: string;
    code: string;
}

export interface ProductIntegrationImage {
    name?: string;
    url: string;
}

export interface ProductIntegrationCombination {
    id: string;
    sku: string;
    barcode: string;
    price?: number;
    attributes?: ProductIntegrationAttribute[];
}

export interface ProductIntegrationAttribute {
    name: string;
    value: string;
}