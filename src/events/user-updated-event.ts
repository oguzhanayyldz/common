import { FixStatus } from "../types/fix-status";
import { Subjects } from "./subjects";

export interface UserUpdatedEvent {
    subject: Subjects.UserUpdated;
    data: {
        id: string;
        uuid: string;
        version: number;
        name: string;
        surname: string;
        email: string;
        status: FixStatus;
        parentUser?: string | null;
        uniqueCode?: string | null;
        deleted?: boolean;
        deletionDate?: Date;
    };
}