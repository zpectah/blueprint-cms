<?php

const CFG_SQL = [
  'development' => [
    'server' => 'localhost',
    'name' => 'blueprint_test',
    'user' => 'root',
    'password' => 'root',
    'port' => 3306,
  ],
  'production' => [
    'server' => 'localhost',
    'name' => '<database_name>',
    'user' => '***',
    'password' => '***',
    'port' => 3306,
  ],
];

const SQL_CONNECTION = [
  CFG_SQL[ENV]['server'],
  CFG_SQL[ENV]['user'],
  CFG_SQL[ENV]['password'],
  CFG_SQL[ENV]['name'],
  CFG_SQL[ENV]['port'],
];
