import { ResourceName } from "../types/resourceName";

export interface ProductPriceIntegrationUpdated {
    sku: string;
    barcode?: string;
    listPrice?: number;
    price: number;
    source?: ResourceName; // Hangi platform için güncelleme yapılacak
    settings: PriceUpdateSettings;
}

export interface ProductPriceUpdateConfiguration {
    enabled: boolean;
    source: string;  // Hangi platform için güncelleme yapılacak
    fields: {
        name: boolean;
        description: boolean;
        price: boolean;
        listPrice: boolean;
        tax: boolean;
        barcode: boolean;
        sku: boolean;
        status: boolean;
        images: boolean;
        combinations: boolean;
        category: boolean;
        brand: boolean;
    };
}

// Fiyat güncelleme stratejileri
export enum PriceUpdateStrategy {
    PRIORITY = "priority",
    LOWEST = "lowest",
    HIGHEST = "highest",
    AVERAGE = "average"
}

// Güncelleme sıklıkları
export enum UpdateFrequency {
    HOURLY = "hourly",
    DAILY = "daily",
    WEEKLY = "weekly",
    MANUAL = "manual"
}

// Fiyat tipleri
export enum PriceType {
    PRICE = "price",
    LIST_PRICE = "listPrice"
}

// Kaynak kuralları
export interface SourceRules {
    minMargin: number;       // Minimum kar marjı (%)
    maxDeviation: number;    // Maksimum sapma (%)
    applyTax: boolean;       // Vergi uygula
}

// Kaynak entegrasyon ayarları
export interface PriceSource {
    integrationId: string;   // Entegrasyon ID
    name: string;            // Entegrasyon adı
    enabled: boolean;        // Aktif/Pasif
    priority: number;        // Öncelik sırası
    priceType: PriceType;    // Fiyat tipi
    applyCurrency: boolean;  // Kur dönüşümü uygula
    targets: ResourceName[]; // Hedef entegrasyonlar (ResourceName)
    rules: SourceRules;      // Kaynak kuralları
}

// Gelişmiş ayarlar
export interface AdvancedSettings {
    skipOutOfStock: boolean;     // Stokta olmayan ürünleri atla
    applyToAttributes: string[]; // Özniteliklere uygula (şu an kullanılmıyor)
    updateBothPrices: boolean;   // Her iki fiyatı güncelle (liste+satış)
    notifyChanges: boolean;      // Değişiklikleri bildir
    logHistory: boolean;         // Fiyat geçmişini kaydet
    advancedTargetingMode: boolean; // Gelişmiş hedefleme modu
}

// Ana ayarlar interface'i
export interface PriceUpdateSettings {
    enabled: boolean;                // Aktif/Pasif
    strategy: PriceUpdateStrategy;   // Strateji
    sources: PriceSource[];          // Kaynak entegrasyonlar
    targetIntegrations: ResourceName[]; // Hedef entegrasyonlar (ResourceName)
    updateFrequency: UpdateFrequency;  // Güncelleme sıklığı
    updateTime: string;              // Güncelleme saati (HH:MM formatı)
    lastUpdate: string | null;       // Son güncelleme zamanı (ISO string)
    advanced: AdvancedSettings;      // Gelişmiş ayarlar
}

// Kullanım örneği:
const defaultSettings: PriceUpdateSettings = {
    enabled: false,
    strategy: PriceUpdateStrategy.PRIORITY,
    sources: [],
    targetIntegrations: [],
    updateFrequency: UpdateFrequency.DAILY,
    updateTime: "03:00",
    lastUpdate: null,
    advanced: {
        skipOutOfStock: true,
        applyToAttributes: [],
        updateBothPrices: false,
        notifyChanges: true,
        logHistory: true,
        advancedTargetingMode: false
    }
};