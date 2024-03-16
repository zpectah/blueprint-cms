<?php

const PATH_ROOT = './';

require_once 'config/index.php';
require_once 'core/index.php';

$RequestProvider = new RequestProvider;
$response = $RequestProvider -> create_response();

print_r(json_encode( $response, JSON_NUMERIC_CHECK | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES ));
