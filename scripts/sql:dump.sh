#!/bin/bash

NAME="root";
PASSWORD="root";
DBNAME="blueprint_test"

/Applications/MAMP/Library/bin/mysqldump -u $NAME -p$PASSWORD $DBNAME > sql_dump.sql;
