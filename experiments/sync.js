const fs=require('fs');
fs.writeFileSync('secastudent.txt', 'this is the experiment no 2 in fsd workshop','utf8');
console.log('file is written successfully');
//read
const data=fs.readFileSync("secastudent.txt",'utf8');
console.log('file content is given as:',data);
//append
fs.appendFileSync('secastudent.txt','\n This is the new line added','utf8');
console.log('File is appended');

// fs.unlinkSync('example.txt');
// console.log('File is deleted');

fs.rmdirSync('samplefolder');
console.log('new folder is created');

if(fs.existsSync('secastudent.txt')){
    console.log('file exists');
}
else{
    console.log('file not found, need to create this file');
}