import { ProductType } from "../events/types/product-type";
import { CurrencyCode } from "../types/currency-code";
import { ResourceName } from "../types/resourceName";
import { UnitType } from "../types/unit-type";

export interface ProductIntegrationCreated {
    id: string;
    name: string;
    sku: string;
    barcode: string;
    description: string;
    listPrice?: number;
    price: number;
    tax: number;
    type?: ProductType;
    unitType?: UnitType;
    currency?: CurrencyCode;
    source?: ResourceName;
    category?: {
        name: string;
        code: string;
    };
    brand?: {
        name: string;
        code: string;
    };
    images?: {
        name?: string;
        url: string;
    }[];
    combinations?: {
        id: string;
        sku: string;
        barcode: string;
        price?: number;
        attributes?: {
            name: string;
            value: string;
        }[];
    }[];
}