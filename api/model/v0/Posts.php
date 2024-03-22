<?php

namespace model\v0;

use mysqli;

class Posts
{

  function __constructor(): void
  {}

  public function get(): array {
    $conn = new mysqli(...SQL_CONNECTION);
    $conn -> set_charset("utf8");

    // prepare
    $query = ('SELECT id, name, title, updated FROM posts WHERE active = ?');
    $types = 'i';
    $args = [1];

    // execute
    $stmt = $conn -> prepare($query);
    $stmt -> bind_param($types, ...$args);
    $stmt -> execute();
    $result = $stmt -> get_result();
    $stmt -> close();

    $conn -> close();

    // $conn
    // TODO
    return [
      ...$result
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
