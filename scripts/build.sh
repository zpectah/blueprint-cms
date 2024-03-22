#!/bin/bash

nx build admin --mode production --emptyOutDir
nx build client --mode production --emptyOutDir
node ./scripts/resources/post_build_htaccess.mjs admin
node ./scripts/resources/post_build_htaccess.mjs client
node ./scripts/resources/build_api.mjs
