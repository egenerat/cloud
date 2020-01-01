docker build -t egenerat/routing/app1-0.1 app1-0.1
docker build -t egenerat/routing/app1-0.2 app1-0.2

docker rm -f app1-0.1
docker rm -f app1-0.2

docker run -d -P --name app1-0.1 egenerat/routing/app1-0.1
docker run -d -P --name app1-0.2 egenerat/routing/app1-0.2

