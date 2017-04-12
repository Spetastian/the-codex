const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

class CodexLoader {

    constructor() {
        this.codexData = {};
    }

    initiate(callback) {
        fs.readdir(path.join(__dirname, '/codex-files/'), (err, files) => {
            files.forEach(file => {
                if(path.extname(file)==='.json') {
                    const filePath = path.join(__dirname, `/codex-files/${file}`);
                    console.log(`Loading content of file ${filePath}`);
                    fs.readFile(filePath, (err, fileContent) => {
                        if (err){
                            return callback(err);
                        }
                        try {
                            console.log(` - Calculating md5 hash of content in file ${filePath} ...`);
                            const md5sum = crypto.createHash('md5');
                            md5sum.update(fileContent);
                            const fileContentHash = md5sum.digest('hex');
                            console.log(` - Calculated md5 hash of ${filePath} : ${fileContentHash}`);
                            console.log(` - Parsing content in file ${filePath} ...`);
                            const codex = JSON.parse(fileContent);
                            this.codexData[path.basename(file, '.json')] = {
                                contentHash: fileContentHash,
                                codex
                            };
                            console.log(` - ${filePath} Done.`);
                        }
                        catch (contentError) {
                            return callback(contentError);
                        }
                    })
                }
            });
        })
        return callback(null);
    }

    get (gameId, contentHash) {
        const data = this.codexData[gameId];
        if (data && data.contentHash && data.contentHash !== contentHash) {
            return data;
        }

        return { codex: []};
    }
}

module.exports = CodexLoader;