const constants = require('../generator-nodejs-constants');

const SERVER_NODEJS_DIR = `${constants.SERVER_NODEJS_SRC_DIR}/`;

const serverFiles = {
    common: [
        {
            path: SERVER_NODEJS_DIR,
            templates: ['dummy.txt']
        }
    ],
    other: [
        {
            templates: ['package.json']
        }
    ]
};

function writeFiles() {
    return {
        writeSameFiles() {
            this.writeFilesToDisk(serverFiles, this, false);
        }
    };
}

module.exports = {
    writeFiles
};
