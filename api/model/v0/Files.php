<?php

namespace model\v0;

use mysqli;

class Files
{

  public mysqli $conn;

  function __constructor(): void
  {
    $this -> conn = new mysqli(...SQL_CONNECTION);;
  }

  public function get(): array {
    // $conn
    // TODO
    return [
      'file1'
    ];
  }

  public function create(): array {
    // $conn
    // TODO
    return [];
  }

  public function update(): array {
    // $conn
    // TODO
    return [];
  }

  public function toggle_active(): array {
    // $conn
    // TODO
    return [];
  }

  public function delete(): array {
    // $conn
    // TODO
    return [];
  }

}
