<?php

const SQL = [
  'local' => [
    'server' => 'localhost',
    'name' => '<database_name>',
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

// TODO - set by current environment
const ENV_SQL = SQL['local'];
