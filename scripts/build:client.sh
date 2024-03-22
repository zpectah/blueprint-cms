#!/bin/bash

nx build client --mode production --emptyOutDir
node ./scripts/resources/post_build_htaccess.mjs client
