const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'files');

for(let i = 0; i <= 4; i++)
{
    fs.writeFileSync(dirPath+`/directory${i}.txt`, 'Creating simple files while learning path and other fs functions');
}
fs.readdir(dirPath, (err, file)=>{
    file.forEach((item) => {

        console.log(item)
        
    });
    
})