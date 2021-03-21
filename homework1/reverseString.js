module.exports = (str)=>{
    if(!str) return;
    return str.toString().trim().split("").reverse().join("");
}