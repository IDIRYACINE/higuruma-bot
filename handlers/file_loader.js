import {readdirSync} from 'node:fs';


/**
 * subdirectory names to execlude looking inside
 * @param {string} subdirectoryName 
 * @returns {boolean}
 */
function isDirectoryExecluded(subdirectoryName){
    const isExcluded = excludedSubDirectories[subdirectoryName] != undefined
    return isExcluded
}

const excludedSubDirectories = {utils : 'utils'}


/**
 * @param {string} dirPath root directory to start looking for js files under it and it's subdirectories 
 * @param {(fileDefaultImport : object)=>void} callback function to be executed on the default import of the js file ,
 * the default import is passed as a param to the callback
 *  @returns {void}
*/
export async function getAllFilesRecusrsive(dirPath, callback) {
	const subdirectories = readdirSync(dirPath)
    let files = []

    subdirectories.forEach(
        (dir)=> {
            if(!isDirectoryExecluded(dir)){
                const filePath = `${dirPath}/${dir}`
                const subFiles = readdirSync(filePath).map((file)=>  {return `${filePath}/${file}`})
                files = files.concat(subFiles)
            }
        }
    )
    
    for (let file of files) {
        let content = (await import(file)).default;
        callback(content)
    }
    

}


/**
 * @param {string} dirPath root directory to start looking for js files
 * @param {(fileDefaultImport : object)=>void} callback to be executed on the default import of the js file ,
 *  the default import is passed as a param to the callback
 * @returns {void}
 */
export async function getAllFiles(dirPath, callback) {
	const files = readdirSync(dirPath).filter(file => file.endsWith(".js"));
    for (let file of files) {
        const content = (await import(`${dirPath}/${file}`)).default;
        callback(content) 
    }
    
}

