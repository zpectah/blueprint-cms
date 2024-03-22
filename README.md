# Blueprint React PHP CMS

## Local development

Recommended using MAMP for Apache server & MySQL.

### Virtual Hosts

Set up you virtual hosts in `<apache_directory_path>/httpd.conf`.

#### API
API endpoint is necessary for app running. The second one is for test production build endpoints.
````
<VirtualHost *:80>
  DocumentRoot "<project_directory_path>/blueprint-react-php-cms/api/"
  ServerName blueprint-cms-api
  ServerAlias blueprint-cms-api
</VirtualHost>

<VirtualHost *:80>
  DocumentRoot "<project_directory_path>/blueprint-react-php-cms/dist/api/"
  ServerName blueprint-cms-api-prod
  ServerAlias blueprint-cms-api-prod
</VirtualHost>
````

#### Admin & Client
These endpoints are set only for testing purpose.
These are also resources for deployment as each root.
````
<VirtualHost *:80>
  DocumentRoot "<project_directory_path>/blueprint-react-php-cms/dist/admin/"
  ServerName blueprint-cms-admin
  ServerAlias blueprint-cms-admin
</VirtualHost>

<VirtualHost *:80>
  DocumentRoot "<project_directory_path>/blueprint-react-php-cms/dist/client/"
  ServerName blueprint-cms-client
  ServerAlias blueprint-cms-client
</VirtualHost>
````

### Hosts

Set up your hosts in `/private/etc/hosts`

```
127.0.0.1       blueprint-cms-api
127.0.0.1       blueprint-cms-admin
127.0.0.1       blueprint-cms-client
127.0.0.1       blueprint-cms-api-prod
```

### Scripts

* ``start:admin`` Will starts local development at `http://localhost:4200/` for admin side
* ``start:client`` Will starts local development at `http://localhost:4201/` for client side
* ``build:admin`` Builds `admin/` package only (blueprint-cms-admin)
* ``build:client`` Builds `client/` package only (blueprint-cms-client)
* ``build:api`` Copy `api/` package only (blueprint-cms-api-prod)
* ``test`` Will runs test for React apps
* ``format:check`` Runs options for code formatting
* ``format:write`` Runs formatting
* ``lint`` Runs eslint for all project

### Scripts with configuration

Continue only if you know what are you doing.

As default mysql service is set `/Applications/MAMP/Library/bin/mysql`, set it to `mysql` when needed.

* ``sql:dump`` Creates sql dump in root folder
* ``sql:create:user <name> <email> <password>`` Creates test user for development purposes

