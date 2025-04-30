import { Subjects } from "./subjects";

export interface ImportImagesFromUrlsCompletedEvent {
    subject: Subjects.ImportImagesFromUrlsCompleted;
    data: {
        requestId: string;
        productId?: string;
        userId: string;
        totalUrls: number;
        successful: number;
        failed: number;
        images: {
            id?: string;
            sourceUrl: string;
            url?: string;
            filename?: string;
            originalname?: string;
            mimetype?: string;
            size?: number;
            error?: string;
            success?: boolean;
        }[];
    };
}