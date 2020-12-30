kubectl delete secret ibmcloud-details -n tekton-pipelines
kubectl delete task sonarqube-task-ref -n tekton-pipelines
kubectl delete task node-task-ref -n tekton-pipelines
kubectl delete pipeline sonarqube-pipeline-ref -n tekton-pipelines
kubectl delete pipelinerun pipeline-run -n tekton-pipelines

kubectl create -f secret.yaml -n tekton-pipelines
kubectl create -f task-sonarqube.yaml -n tekton-pipelines
kubectl create -f task-node.yaml -n tekton-pipelines
kubectl create -f pipeline.yaml -n tekton-pipelines
kubectl create -f pipelinerun.yaml -n tekton-pipelines