<?php

class RequestProvider
{

  private function get_data($attributes, $params): array {
    return [
      'data' => 'data'
    ];
  }

  public function create_response (): array {
    $method = $_SERVER['REQUEST_METHOD'];
    $queryString = $_SERVER['QUERY_STRING'];

    // Parse URL and get url attributes
    $parsedUrl = $_GET['url'] ?? '';
    $attributes = array_filter(explode('/', $parsedUrl));

    // Parse QUERY and get url params
    $params = [];
    parse_str($queryString, $params);

    $data = $this -> get_data($attributes, $params);

    return [
      'data' => $data,
      // TODO
      'method' => $method,
      'test_x' => PROJECT['name'],
      // TODO
      'attributes' => $attributes,
      'params' => $params,
    ];
  }

}
