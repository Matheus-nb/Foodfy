module.exports = {
    arrayFix(array) {
        const newArray = []
        let id = 0
        
        for(let it of array) {
            if(it != "") {
                newArray[id] = it
                id++
            }
        }
        
        return newArray;
    },
    
    dbArrayFix(array) {
        let fix = []
        
        fix = array.toString().split('"').toString().replace(/{/g, "").replace(/,/, "").replace(/,}/g, "").split(",,,")
        for(let i=0; i < fix.length; i++){
            fix[i] = fix[i].charAt(0).toUpperCase() + fix[i].slice(1)
        }
        
        return fix;
    }
}