# Blueprint React PHP CMS

## Local development

Recommended using MAMP for Apache server & MySQL.

### Virtual Hosts

Set up you virtual hosts in `<apache_directory_path>/httpd.conf`.

#### API
API endpoint is necessary for app running.
````
<VirtualHost *:80>
  DocumentRoot "<project_directory_path>/blueprint-react-php-cms/api/"
  ServerName blueprint-cms-api
  ServerAlias blueprint-cms-api
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
```

### Scripts

* ``start:admin`` Will starts local development at `http://localhost:4200/` for admin side
* ``start:client`` Will starts local development at `http://localhost:4201/` for client side
* ``build:admin`` Builds `admin/` package only (blueprint-cms-admin)
* ``build:client`` Builds `client/` package only (blueprint-cms-client)
* ``test`` Will runs test for React apps
* ``format:check`` Runs options for code formatting
* ``format:write`` Runs formatting

