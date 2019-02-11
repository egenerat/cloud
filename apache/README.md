# Apache

The goal here is to serve static files from two different folders based on the URL

With the rule
```
AliasMatch "^/resourceFromSubFolder/(.*)" "/usr/local/apache2/htdocs/subfolder/$1"
```


The URL
http://localhost/resourceFromSubFolder/index.html

serves the file `/usr/local/apache2/htdocs/subfolder/index.html`


To enable logs for alias module
```
LogLevel debug alias:trace6
```

More documentation about mod_alias: https://httpd.apache.org/docs/2.4/mod/mod_alias.html