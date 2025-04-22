import { ResourceName } from "../types/resourceName";

export interface IntegrationCredentials {
    user: string | undefined;
    platform: ResourceName | undefined;
    integration_active: boolean | undefined;
    [key: string]: any;// Diğer platform-özel kimlik bilgilerine izin ver
}
