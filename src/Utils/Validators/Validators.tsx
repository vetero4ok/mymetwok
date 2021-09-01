export type FiledValidatorType = (value: string) => string | undefined
export const required:FiledValidatorType = (value: string) => {
    if (value) return undefined
    return 'Field required'
}
export const maxLengthCreator = (maxLength: number):FiledValidatorType => (value: string) => {
    if (value && value.length > maxLength) return `Max length is ${maxLength} symbols `
    return undefined
}
