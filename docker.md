## Cleanup for old docker versions
### Clean all the exited containers
```
docker ps --filter "status=exited" |awk '{print $1}' | grep -v CONTAINER | xargs --no-run-if-empty docker rm
```
Filter with `months ago` if needed to keep the most recent ones

### Clean all the dangling images
```
docker rmi $(docker images --filter "dangling=true" -q --no-trunc)
```

## New way:
https://docs.docker.com/engine/reference/commandline/image_prune/
API 1.25+

# Issues and solutions

Issue | Solution
--- | ---
`bash: ps: command not found` | `RUN apt-get update && apt-get install -y procps`
