yarn nx build admin && node ./scripts/resources/post_build_htaccess.mjs admin && nx build client && node ./scripts/resources/post_build_htaccess.mjs client && node ./scripts/resources/build_api.mjs
