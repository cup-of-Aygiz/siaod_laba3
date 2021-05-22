const KMPMaskCreate = (str) => {
    let maskArray = [str.length].fill(0)
    let iteratorI = 1
    let iteratorJ = 0
    while (iteratorI < str.length) {
        if (str[iteratorI] === str[iteratorJ]) {
            maskArray[iteratorI] = iteratorJ + 1
            iteratorJ += 1
            iteratorI += 1
        } else {
            if (iteratorJ === 0) {
                maskArray[iteratorI] = 0
                iteratorI += 1
            } else {
                iteratorJ = maskArray[iteratorJ - 1]
            }
        }
    }
    return maskArray
}

export const KMPSearch = (str, soughtStr) => {
    let i = 0
    let j = 0
    const soughtStringMask = KMPMaskCreate(soughtStr)
    while (i < str.length) {
        if (str[i] === soughtStr[j]) {
            i++
            j++
            if (j === soughtStr.length)
                return i - soughtStr.length
        } else {
            if (j > 0) {
                j = soughtStringMask[j - 1]
            } else
                i++
        }
    }
    return -1
}
