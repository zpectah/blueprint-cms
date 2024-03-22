#!/bin/bash

NAME="root";
PASSWORD="root";
DBNAME="blueprint_test"

if [ "$#" -ne 3 ]; then
    echo "Usage: $0 <name> <email> <password>"
    exit 1
fi

param1=$1
param2=$2
param3=$3

/Applications/MAMP/Library/bin/mysql -u $NAME -p$PASSWORD $DBNAME -e "INSERT INTO users (name, email, password) VALUES ('$param1', '$param2', '$param3')"
