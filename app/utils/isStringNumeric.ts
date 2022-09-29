export interface IsStringNumeric {
    (testString: string): boolean
}

const isStringNumeric: IsStringNumeric = (testString) => {
    if (typeof testString != "string") {
        return false
    } else {
        return !isNaN(testString as any) && !isNaN(parseFloat(testString))
    }
};

export default isStringNumeric;
