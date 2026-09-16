const fs=require('fs');
fs.writeFile(
    'sample.txt','Welcome to Full Stack Development',(err)=>{
        if(err){
            console.log('Error creating file:',err);
            return;
        }
        console.log('File created successfully');
    }
)
fs.readFile('sample.txt','utf8',(err,data)=>{
    if(err){
        console.log('Error reading file:',err);
        return;
    }
    console.log('File content:');
    console.log(data);
})

//append

fs.appendFile('sample.txt','\nSemester: 3',(err)=>{
    if(err){
        console.log('Error updating file:',err);
    }
    else{
        console.log('\nFile updated successfully');
    }
})

//updated read
fs.readFile('sample.txt','utf8',(err,data)=>{
    if(err){
        console.log('Error reading file:',err);
        return;
    }
})

//delete

fs.unlink('example.txt',(err)=>{
    if(err){
        console.error('Error deleting file:',err);
    }
    else{
        console.log('\nFile deleted successfully');
    }
})