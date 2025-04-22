import { ResourceName } from "../types/resourceName";

export class IntegrationCredentials {
    public user: string | undefined;
    public platform: ResourceName | undefined;
    public integration_active: boolean | undefined;
    [key: string]: any;
}
