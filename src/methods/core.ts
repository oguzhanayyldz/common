export let createUniqueCode = async (obj: any): Promise<string> => {
    let uniqueCode: string = ``;
    for (const i in obj) {
        uniqueCode += `${obj[i].toString()}-`;
    }
    let lastIndex = uniqueCode.lastIndexOf("-");
    if (lastIndex !== -1 && lastIndex === uniqueCode.length - 1) {
        uniqueCode = uniqueCode.slice(0, lastIndex);
    }
    return uniqueCode;
}