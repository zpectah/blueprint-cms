<?php

const DEBUG = ENV === 'development';

const META = [
  'name' => 'Project name',
  'description' => 'Project description',
];

const CRYPT_METHOD = PASSWORD_ARGON2ID;
const CRYPT_METHOD_OPTIONS = [
  'memory_cost' => 2048,
  'time_cost' => 4,
  'threads' => 3
];
