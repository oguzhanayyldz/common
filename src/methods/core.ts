const createUniqueCode = async (obj: any) => {
    let uniqueCode = ``;
    for (const i in obj) {
        uniqueCode += `${obj[i].toString()}-`;
    }
    let lastIndex = uniqueCode.lastIndexOf("-");
    if (lastIndex !== -1 && lastIndex === uniqueCode.length - 1) {
        uniqueCode = uniqueCode.slice(0, lastIndex);
    }
    return uniqueCode;
}

export { createUniqueCode };