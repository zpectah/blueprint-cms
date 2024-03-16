<?php

class RequestProvider
{

  public function create_response (): array {
    $method = $_SERVER['REQUEST_METHOD'];


    return [
      'data' => 'Some data here',
      // TODO
      'method' => $method,
      'test_x' => PROJECT['name']
    ];
  }

}
