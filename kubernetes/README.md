# Kubernetes

k8s

Documentation: https://kubernetes.io/

## Install on local machine
- Minikube https://kubernetes.io/docs/setup/minikube/
- or MicroK8s (via snapd) https://microk8s.io/

Equivalent for OpenShift:
- Minishift https://docs.okd.io/latest/minishift/getting-started/index.html

### Manjaro

```
sudo pacman -Syyu kubectl minikube
```

Then
```
minikube start
```

## Web UI (dashboard)
https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/

or

```
minikube dashboard
```

## Create objects

```
kubectl apply -f <file or URL>
```


## Run commands inside of a running container

If the pod contains only one container
```
kubectl exec -it <pod name> -- /bin/bash
```

Else, specify the container name too
```
kubectl exec -it <pod name> --container <container name> -- /bin/bash
```

## Debug

To connect to the Minikube VM
```
minikube ssh
```

To interact with the Minikube's docker daemon from the docker CLI on the host machine
```
eval $(minikube docker-env)
```
