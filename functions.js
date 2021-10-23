const capitaliseString = string => {
    return string[0].toUpperCase() + string.slice(1)
}

const reverseString = string => {
    const stringArray = Array.from(string)
    const newStringArray = stringArray.map((el,i) => {
        return stringArray[stringArray.length -1 - i]
    })
    return newStringArray.reduce((previous,current) => previous + current,"")
}

export { capitaliseString, reverseString }