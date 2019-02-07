const fs = require('fs');
const path = require('path');
const { isNonEmptyString } = require('./type-utils');

function validatePath (path) {
	if (!isNonEmptyString(path))
		throw new TypeError(`validatePath: path must be a string (got ${typeof path})`);
	
	return true;
}

function isFile (path) {
	validatePath(path);

	return fs.statSync(path).isFile(); 
}

function isDir (path) {
	validatePath(path);

	return fs.statSync(path).isDirectory();
}

function pathExists (path) {
	validatePath(path);

	return fs.existsSync(path) ? true : false;
}

function fileExists (path) {
	validatePath(path);

	return pathExists(path) && isFile(path);
}

function dirExists (path) {
	validatePath(path);

	return pathExists(path) && isDir(path);
}

function ensureDirExists (path) {
	validatePath(path);

	if (dirExists(path)) return true;
	if (fileExists(path)) return new Error(`ensureDirExists: a file exists at path "${path}".`);
    return fs.mkdirSync(path, { recursive: true }); 
}

function ensureParentDirExists (pathname) {
	validatePath(pathname);

	const parentDir = path.dirname(pathname);
	return ensureDirExists(parentDir);
}

module.exports = { validatePath, isFile, isDir, pathExists, fileExists, dirExists, ensureDirExists, ensureParentDirExists };
