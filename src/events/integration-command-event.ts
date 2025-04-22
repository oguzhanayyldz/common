import { ResourceName } from "../types/resourceName";
import { Subjects } from "./subjects";

export interface IntegrationCommandEvent {
    subject: Subjects.IntegrationCommand;
    data: {
        user: string;
        platform: ResourceName;
        merchantId: string;
        command: string;
        payload?: any;
        params?: any;
    };
}