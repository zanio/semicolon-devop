#!/bin/bash
echo " After app is deployed"
cd
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
     echo "file does not exist"
 fi