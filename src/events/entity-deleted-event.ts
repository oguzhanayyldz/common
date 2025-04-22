import { Subjects } from "./subjects";

export interface EntityDeletedEvent {
    subject: Subjects.EntityDeleted;
    data: {
        id: string;
        entity: string;
        userId?: string;
        metadata?: any;
    };
}