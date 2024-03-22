<?php

const PATH_ROOT = './';

require PATH_ROOT . 'env.php';
require PATH_ROOT . 'config/index.php';
require PATH_ROOT . 'core/index.php';

$RequestHandler = new \core\RequestHandler;

$response = $RequestHandler -> create_response();
$encodedResponse = json_encode( $response, JSON_NUMERIC_CHECK | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES );

print_r($encodedResponse);
