import { ProductImageIntegrationUpdated } from '../interfaces/product-image-integration-updated.interface';
export enum Subjects {
    // Product Events
    ProductCreated = 'product.created',
    ProductUpdated = 'product.updated',
    ProductDeleted = 'product.deleted',
    ProductPriceUpdated = 'product.price.updated',
    ProductIntegrationCreated = 'product.integration.created',
    ProductPriceIntegrationUpdated = 'product.price.integration.updated',

    // Catalog Events
    CatalogMappingCreated = 'catalog.mapping.created',
    CatalogMappingUpdated = 'catalog.mapping.updated',
    CatalogMappingDeleted = 'catalog.mapping.deleted',
    CatalogMappingPriceUpdated = 'catalog.mapping.price.updated',

    // Combination Events
    CombinationCreated = 'combination.created',
    CombinationUpdated = 'combination.updated',
    CombinationDeleted = 'combination.deleted',

    // Integration Events
    IntegrationCreated = 'integration.created',
    IntegrationUpdated = 'integration.updated',
    IntegrationDeleted = 'integration.deleted',
    IntegrationSyncStarted = 'integration.sync.started',
    IntegrationSyncCompleted = 'integration.sync.completed',
    IntegrationSyncFailed = 'integration.sync.failed',

    // Image Events
    ImageCreated = 'image.created',
    ImageUpdated = 'image.updated',
    ImageDeleted = 'image.deleted',
    ImageUploadCompleted = 'image.upload.completed',
    ImageUploadFailed = 'image.upload.failed',
    ImportImagesFromUrlsCompleted = 'import.images.from.urls.completed',

    // Additional events
    ProductStockCreated = "product:stock:created",
    ProductStockUpdated = "product:stock:updated",
    PackageProductLinkCreated = "package:product:link:created",
    PackageProductLinkUpdated = "package:product:link:updated",
    RelationProductLinkCreated = "relation:product:link:created",
    RelationProductLinkUpdated = "relation:product:link:updated",
    UserCreated = "user:created",
    UserUpdated = "user:updated",
    StockCreated = "stock:created",
    StockUpdated = "stock:updated",
    OrderCreated = "order:created",
    OrderUpdated = "order:updated",
    OrderStatusUpdated = "order:status:updated",
    IntegrationCommand = "integration:command",
    IntegrationCommandResult = "integration:command:result",
    EntityDeleted = "entity:deleted",
    ImportImagesFromUrls = 'cdn:import-images-from-urls',
    DeleteProductImages = 'cdn:delete-product-images',
    DeleteProductImagesCompleted = 'cdn:delete-product-images-completed',
    ProductStockIntegrationUpdated = "product:stock:integration:updated",
    ProductImageIntegrationUpdated = "product:image:integration:updated",
}
