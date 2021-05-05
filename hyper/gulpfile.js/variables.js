var args = require('yargs').argv;

/**
 * ---------------------------------------------------------------------------------------------
 * Global settings
 * ---------------------------------------------------------------------------------------------
*/

const DEFAULT_DEMO = 'html';

var FOLDER_PATHS = {
    baseSrc: "src/", // source files
    baseDist: "dist/", // build files
    baseAssets: "src/assets/", // base assets
};

const selectedDemo = DEFAULT_DEMO;

function getSrcFolderPath() {
    return FOLDER_PATHS.baseSrc + selectedDemo + "/";
}

function getDistFolderPath() {
    return FOLDER_PATHS.baseDist + selectedDemo + "/";
}

function getDistAssetFolderPath() {
    return getDistFolderPath(selectedDemo) + "assets/";
}

module.exports = {
    getSelectedDemo: function () { return selectedDemo },
    getBaseSrcPath: function () { return FOLDER_PATHS.baseSrc },
    getBaseDistPath: function () { return FOLDER_PATHS.baseDist },
    getBaseAssetsPath: function () { return FOLDER_PATHS.baseAssets },
    getSrcPath: getSrcFolderPath,
    getDistPath: getDistFolderPath,
    getDistAssetsPath: getDistAssetFolderPath
}