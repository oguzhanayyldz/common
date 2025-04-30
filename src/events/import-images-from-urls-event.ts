import { Subjects } from "./subjects";

export interface ImportImagesFromUrlsEvent {
    subject: Subjects.ImportImagesFromUrls;
    data: {
        requestId: string;
        userId: string;
        productId?: string;
        urls: string[];
        options?: {
            width?: number;
            height?: number;
            quality?: number;
            format?: 'jpeg' | 'png' | 'webp';
        };
    };
}