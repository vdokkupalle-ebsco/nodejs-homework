const reverseString =  (str)=>{
    if(!str) return;
    return str.toString().trim().split("").reverse().join("");
}

export default reverseString;