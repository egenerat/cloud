# Nginx reverse proxy

```docker-compose up```


```docker-compose build```
```docker-compose up --build```

# base 
The domain is not mandatory
<base href="/web/">

However, it does not work for AJAX calls for example (needs to manually get the property)
for example:
$('head base').attr('href');

Be careful to declare it in the header before any script, stylesheet, etc