import { ResourceName } from '@xmoonx/common';

/**
 * Platformlar arası ortak ürün veri modeli
 * Bu model, farklı entegrasyon platformlarına aktarılacak ürün verilerini standartlaştırır.
 */
export interface CommonProductExport {
  // Temel ürün bilgileri
  id: string;                   // Moon sistemindeki ID
  externalId?: string;          // Entegrasyon platformundaki ID (varsa)
  name: string;                 // Ürün adı
  description?: string;         // Ürün açıklaması
  sku: string;                  // SKU kodu
  barcode?: string;             // Barkod
  
  // Kategori bilgileri
  category?: {
    name: string;
    code?: string;
  };
  
  // Fiyat bilgileri
  price: number;                // Ana fiyat
  listPrice?: number;           // Liste fiyatı (önerilen satış fiyatı)
  currency: string;             // Para birimi
  tax?: number;                 // Vergi oranı
  
  // Stok bilgileri
  stock?: number;               // Stok miktarı
  
  // Resim bilgileri
  images?: Array<{
    url: string;
    main?: boolean;             // Ana resim mi?
    order?: number;             // Sıralama
  }>;
  
  // Varyant bilgileri
  variants?: Array<{
    id: string;                 // Varyant ID
    sku: string;                // Varyant SKU
    barcode?: string;           // Varyant barkod
    price?: number;             // Varyant özel fiyatı (yoksa ana ürün fiyatı kullanılır)
    stock?: number;             // Varyant stok miktarı
    attributes: Array<{
      name: string;
      value: string;
    }>;
    images?: Array<{
      url: string;
      order?: number;
    }>;
  }>;
  
  // Platform spesifik ek alanlar
  metadata?: Record<string, any>;
}

/**
 * Ürün aktarım isteği için girdi modeli
 */
export interface ProductExportRequest {
  // Aktarılacak ürün ID'si
  productId: string;
  
  // Hedef platform
  platform: ResourceName;
  
  // İşlem türü (create, update)
  operation: 'create' | 'update';
  
  // Platform spesifik ek parametreler
  platformParams?: Record<string, any>;
}

/**
 * Ürün aktarım sonucu için çıktı modeli
 */
export interface ProductExportResult {
  // İşlem başarılı mı?
  success: boolean;
  
  // Platformda oluşan ID
  externalId?: string;
  
  // Hata mesajı (başarısız olduğunda)
  error?: string;
  
  // Platforma özgü yanıt verileri
  platformResponse?: Record<string, any>;
} 