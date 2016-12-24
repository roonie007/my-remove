# my-remove
This is a module to delete a file or a directory using real environment command RM & DEL & RMDIR (a Directory is removed recursively)

### Install
```sh
$ npm install my-remove
```
or (globally)
```sh
$ npm install my-remove -g 
```
### Example
```sh
var myremove = require("my-remove");
myremove(pathToDirectoryOrFileToRemove,function(err)
{
    if(err)
        throw err;
    console.log("removed");
});
```
