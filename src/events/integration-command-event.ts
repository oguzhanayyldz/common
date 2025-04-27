import { ResourceName } from "../types/resourceName";
import { Subjects } from "./subjects";

export interface IntegrationCommandEvent {
    subject: Subjects.IntegrationCommand;
    data: {
        user: string;
        platform: ResourceName;
        merchantId: string;
        command: string;
        params?: any;
        payload?: {
            credentials: Record<string, any>;
            integrationId: string;
        };
    };
}