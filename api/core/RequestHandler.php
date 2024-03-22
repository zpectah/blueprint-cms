<?php

namespace core;

class RequestHandler
{

  private function data_router($model, $action, $value): array {


    return [
      'data' => 'data'
    ];
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
    $action = $attributes[2] ?? false;
    $value = $attributes[3] ?? false;

    $data = $this -> data_router($model, $action, $value);

    if ($version === CURRENT_VERSION) {
      return [
        'data' => $data,
        // META
        'method' => $method,
        'version' => $version,
        'model' => $model,
        'action' => $action,
        'value' => $value,
        // DEBUG
        'env' => ENV,
      ];
    } else {
      return [
        'status' => 400,
        'message' => 'UNSUPPORTED_API_VERSION'
      ];
    }
  }

}
