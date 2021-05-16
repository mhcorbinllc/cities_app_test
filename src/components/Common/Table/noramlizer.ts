export type KeyValuePairs = {
    key: any
    value: any
}

export const normalize = (obj: any): KeyValuePairs[] => {
    if (typeof obj == "object" && !Array.isArray(obj)) {
        let newArray: KeyValuePairs[] = []
        const keys = Object.keys(obj)
        keys.forEach(k => {
            if (Array.isArray(obj[k])) {
                obj[k].forEach((v: any) => {
                    newArray.push({ key: k, value: v })
                })
            } 
        })
        return newArray
    } else {
        return []
    }
}