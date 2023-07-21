import { ObjectId } from "bson";

//NOTE - Veriler ile unique bir string yaratıyor. 
// Veritabanı içerisinde benzer kayıtların oluşmamsı için kullanılır
export const createUniqueCode = (obj: any): string  => {
    let uniqueCode: string = ``;
    for (const i in obj) {
        if (obj[i] !== undefined && obj[i] !== null) {
            let str = getRefDataId(obj[i]);
            uniqueCode += `${str.trim()}-`;
        }
    }
    let lastIndex = uniqueCode.lastIndexOf("-");
    if (lastIndex !== -1 && lastIndex === uniqueCode.length - 1) {
        uniqueCode = uniqueCode.slice(0, lastIndex);
    }
    return uniqueCode;
}

//NOTE - Uzunluk değeri alarak o uzunlukta random bir string oluşturur.
export const generateRandomString = (length: number): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }
    return randomString;
}

//NOTE - ObjectId tipinde olan yani referans olan değerleri string tipine dönüştürür.
// Aynı şekilde eğer bir obje ise içerisindeki id alanına ulaşarak geri döner.
export const getRefDataId = (data: any): string => {
    //NOTE - ObjectId'yi doğrulayalım
    if (ObjectId.isValid(data)) {
        if (data.id) {
            return data.id.toString();
        } else {
            return data.toString();
        }
        //NOTE - Doğrulanmış ObjectId ile devam edin
    } else if (typeof data == "object") {
        return data.id.toString();
    } else if (typeof data == "string") {
        return data;
    }
    return "";
}

//NOTE - Raflarda bulunan barkodları decode ederek hangi depo, raf, satır ve stun olduğunu döner.
export const encodeShelfBarcode = (barcode: string): {warehouse: number, shelf: number, row: number, column: number } | null => {
    let splitStr = barcode.split("X");
    if (splitStr.length == 4) {
        for ( var split of splitStr ) {
            if (!parseIntTry(split)){
                return null;
            }
        }
        return {
            warehouse: parseInt(splitStr[0]),
            shelf: parseInt(splitStr[1]),
            row: parseInt(splitStr[2]),
            column: parseInt(splitStr[3])
        }
    }
    return null;
}

//NOTE - Bir rafın içerisinde bulunan tüm kolonların alacağı rafları sırası ile verir.
export const createShelfBarcodes = (shelf: { warehouseAlternativeId: number, alternativeId: number, row: number, column: number }): string[] => {
    let barcodes: string[] = [];
    for (var r = 1; r <= shelf.row; r++) {
        for (var c = 1; c <= shelf.column; c++) {
            let barcode = `${shelf.warehouseAlternativeId}X${shelf.alternativeId}X${r}X${c}`;
            barcodes.push(barcode);
        } 
    }
    return barcodes;
}

//NOTE - Güvenli bir şekilde parseInt yapmak için bu metod kullanılır.
export const parseIntTry = (value: string) => {
    const parsedValue = parseInt(value);

    //NOTE- parsedValue NaN ise veya dönüştürme başarısız olursa, false döndürülecek.
    if (isNaN(parsedValue)) {
        return false;
    }

    return parsedValue;
}

//NOTE - Güvenli bir şekilde parseFloat yapmak için bu metod kullanılır.
export const parseFloatTry = (value: string) => {
    const parsedValue = parseFloat(value);

    //NOTE- parsedValue NaN ise veya dönüştürme başarısız olursa, false döndürülecek.
    if (isNaN(parsedValue)) {
        return false;
    }

    return parsedValue;
}