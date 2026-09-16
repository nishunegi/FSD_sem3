const fs=require("fs").promises;
async function writeFile(){
    try{
        await fs.writeFile("promise.txt","Hello students");
        console.log("File created and data written successfully");
    }
    catch(error){
        console.log("Error:",error);
    }
}

writeFile();

//read file

async function readFile(){
    try{
        const data=await fs.readFile("promise.txt","utf8");
        console.log("File content:");
        console.log(data);
    }
    catch(error){
        console.log("Error:",error);
    }
}

readFile();

//update
async function appendFile(){
    try{
        await fs.appendFile("promise.txt","\nWelcome to FSD training");
        console.log("Data appended successfully");
    }
    catch(error){
        console.log("Error:",error);
    }
}

appendFile();

//rename
async function renameFile(){
    try{
        await fs.rename("promise.txt","promise_new.txt");
        console.log("File renamed successfully");
    }
    catch(error){
        console.log("Error:",error);
    }
}

renameFile();
