export const createUniqueCode = (obj: any): string  => {
    let uniqueCode: string = ``;
    for (const i in obj) {
        let str = getRefDataId(obj[i]);
        uniqueCode += `${str}-`;
    }
    let lastIndex = uniqueCode.lastIndexOf("-");
    if (lastIndex !== -1 && lastIndex === uniqueCode.length - 1) {
        uniqueCode = uniqueCode.slice(0, lastIndex);
    }
    return uniqueCode;
}

export const generateRandomString = (length: number): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }
    return randomString;
}

export const getRefDataId = (data: any): string => {
    let str = '';
    if (typeof data === 'object') str = data.id;
    else str = data;
    return str;
}