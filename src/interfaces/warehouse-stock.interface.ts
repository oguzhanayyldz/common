/**
 * Bir depodaki stok bilgilerini temsil eden interface
 */
export interface WarehouseStockInfo {
  /**
   * Depo ID'si
   */
  warehouseId: string;
  
  /**
   * Depo adı
   */
  warehouseName: string;
  
  /**
   * Toplam stok miktarı
   */
  quantity: number;
  
  /**
   * Rezerve edilmiş stok miktarı
   */
  rezervedQuantity: number;
  
  /**
   * Kullanılabilir stok miktarı (quantity - rezervedQuantity)
   */
  availableQuantity: number;
  
  /**
   * Depo konumu
   */
  location?: string;
  
  /**
   * İsteğe bağlı ek meta veriler
   */
  metadata?: Record<string, any>;
}

/**
 * Depolar ile ilgili tanımlanmış anahtarlar
 */
export enum WarehouseMapKeys {
  /**
   * Varsayılan depo anahtarı
   */
  DEFAULT = 'default',
  
  /**
   * Tüm depolar toplamı için kullanılan anahtar
   */
  TOTAL = 'total'
}

/**
 * ProductStock için depo haritasının tipini tanımlar
 * Hem Map hem de Record olarak kullanılabilir olması için iki tip tanımladık
 */
export type WarehouseMap = Map<string, WarehouseStockInfo> | Record<string, WarehouseStockInfo>; 