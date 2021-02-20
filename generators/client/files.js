module.exports = {
    writeFiles
};

function writeFiles() {
    this.copy('_dummy.txt', 'src/client/dummy.txt');
}
