FROM docker:dind
USER 0
RUN apk add bash && apk add curl && apk add git && cd ~ && \
    curl -LO https://storage.googleapis.com/kubernetes-release/release/v1.20.0/bin/linux/amd64/kubectl && chmod +x ./kubectl && mv ./kubectl /usr/local/bin/kubectl && kubectl version --client && \
    curl -fsSL https://clis.cloud.ibm.com/install/linux | sh && \
    ibmcloud plugin install container-service && \
    ibmcloud plugin install container-registry && \
    ibmcloud plugin install observe-service
CMD ibmcloud plugin list
