<?php

const PATH_ROOT = './';
const CURRENT_VERSION = 'v0';

require_once 'env.php';
require_once 'config/index.php';
require_once 'core/index.php';

$RequestHandler = new \core\RequestHandler;

$response = $RequestHandler -> create_response();
$encodedResponse = json_encode( $response, JSON_NUMERIC_CHECK | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES );

print_r($encodedResponse);
