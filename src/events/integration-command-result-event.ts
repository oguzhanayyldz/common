import { ResourceName } from "../types/resourceName";
import { Subjects } from "./subjects";

export interface IntegrationCommandResultEvent {
    subject: Subjects.IntegrationCommandResult;
    data: {
        user: string;
        platform: ResourceName;
        command: string;
        success: boolean;
        error?: string | null,
        result?: any,
        timestamp: string;
    };
}