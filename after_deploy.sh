#!/bin/bash
echo " Deployment task finished at heroku"

cd || exit
 ls
 if [ -e dist ]
 then
     echo "file exists!"
     rm -rf node_modules
     rm -rf cypress
     rm -rf src
     rm -rf tests
     echo "All files deleted"
 else
     echo "The folder with the name of dist cannot be found"
 fi