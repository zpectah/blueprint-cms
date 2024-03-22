<?php

namespace core;

use model\v0\Files;
use model\v0\Posts;
use model\v0\Users;

class RequestHandler
{

  private function data_router_v0($params, $method, $model, $model_value, $attr1, $attr1_value): array {
    $response = [];
    $modelClass = null;

    switch ($model) {

      case 'files':
        $modelClass = new Files();
        break;

      case 'posts':
        $modelClass = new Posts();
        break;

      case 'users':
        $modelClass = new Users();
        break;

      default:
        break;

    }

    if ($modelClass) {
      switch ($method) {

        case 'GET':
          $response = $modelClass -> get();
          break;

        case 'PUT':
          $response = $modelClass -> create();
          break;

        case 'PATCH':
          $response = $modelClass -> update();
          break;

        case 'UPDATE':
          $response = $modelClass -> toggle_active();
          break;

        case 'DELETE':
          $response = $modelClass -> delete();
          break;

        default:
          http_response_code(501);
          $response = null;
          break;

      }

      return $response;
    } else {
      return [];
    }

  }

  public function create_response (): array {
    $method = $_SERVER['REQUEST_METHOD'];
    $query = $_SERVER['QUERY_STRING'];
    $url = $_GET['url'] ?? '';

    $attributes = array_filter(explode('/', $url));
    $params = [];
    parse_str($query, $params);

    $version = $attributes[0] ?? false;
    $model = $attributes[1] ?? false;
    $model_value = $attributes[2] ?? false;
    $attr1 = $attributes[3] ?? false;
    $attr1_value = $attributes[4] ?? false;

    $debug = [
      'env' => ENV,
      'method' => $method,
      'version' => $version,
      'model' => $model,
      'model_value' => $model_value,
      'attr1' => $attr1,
      'attr1_value' => $attr1_value,
      'params' => $params,
    ];

    if ($version === 'v0') {
      $data = $this -> data_router_v0($params, $method, $model, $model_value, $attr1, $attr1_value);

      http_response_code(200);

      return [
        'data' => $data,
        'debug' => DEBUG ? $debug : false,
      ];
    } else {

      http_response_code(501);

      return [
        'data' => null,
        'debug' => $debug,
      ];
    }
  }

}
