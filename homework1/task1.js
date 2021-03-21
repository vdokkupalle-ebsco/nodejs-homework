const reverseString = require("./reverseString");

const printOutput = (data)=>{
    process.stdout.write(data);
    process.stdout.write("\n\n\n");
    prompt();
}

const onReadData = (data)=>{
    const reversedString = reverseString(data);
    printOutput(reversedString);
}

const prompt = ()=>{
    process.stdout.write("Enter a text!\n");
}


prompt();
process.stdin.on('data',onReadData);
