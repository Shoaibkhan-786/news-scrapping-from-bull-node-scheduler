const path = require('path');
const fs = require('fs');
const basename = path.basename(__filename)



fs.readdirSync(__dirname).forEach(file => {
    if(file !== basename) {
        const f = file.replace('.js', '');
        const fileData =  require(path.join(__dirname, file));
        // fileObj[f] = fileData[f];
      
        
        
    }
    
});



// module.exports = fileObj;

