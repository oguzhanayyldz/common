import { FixStatus } from "../types/fix-status";
import { Subjects } from "./subjects";

export interface UserCreatedEvent {
    subject: Subjects.UserCreated;
    data: {
        id: string;
        uuid: string;
        version: number;
        name: string;
        surname: string;
        email: string;
        status: FixStatus;
        uniqueCode: string;
        creationDate: Date;
        updatedOn: Date;
    };
}