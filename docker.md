## Cleanup for old docker versions
### Clean all the exited containers
```
docker ps --filter "status=exited" |awk '{print $1}' | xargs --no-run-if-empty docker rm
```
Filter with `months ago` if needed to keep the most recent ones

### Clean all the dangling images
```
docker rmi $(docker images --filter "dangling=true" -q --no-trunc)
```

## New way:
https://docs.docker.com/engine/reference/commandline/image_prune/
API 1.25+