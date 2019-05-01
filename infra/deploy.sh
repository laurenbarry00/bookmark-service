#!/usr/bin/env bash

# Configuration
CodeCommitRepoName=bookmark-service
StackName=bookmark-service-infra
BucketName=bookmark-service-infra-adamulvi

# Package and deploy
aws cloudformation package \
--template-file service.yml \
--s3-bucket ${BucketName} \
--output-template-file packaged-${StackName}-template.yml

aws cloudformation deploy \
--stack-name ${StackName} \
--template-file packaged-${StackName}-template.yml \
--parameter-overrides \
"CodeCommitRepoName=${CodeCommitRepoName}" \
--s3-bucket ${BucketName} \
--capabilities CAPABILITY_IAM
