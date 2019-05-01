# bookmark-service

## Requirements

* AWS CLI already configured with Administrator permission
* [NodeJS 8.10+ installed](https://nodejs.org/en/download/)
* [Docker installed](https://www.docker.com/community-edition)


## Initial setup & deployment

**Prepare the infrastructure**

1. Create an S3 bucket
```bash
aws s3 mb s3://bookmark-service-infra-adamulvi
```

2. Edit `infra/deploy.sh` and set the Configuration options to match your environment

3. Run `make infrastructure` to deploy the infrastructure

**Deploy the application**

1. Add a `git remote` and point it at the CodeCommit repo created by `make infra`.
2. `git push` your changes and the pipeline should kick off a build


## Local development

** Run unit tests
```bash
make test
```

**Invoking function locally through local API Gateway**

```bash
make dev

or

sam local start-api
```

**Invoking function locally using a local sample payload**

```bash
sam local invoke HelloWorldFunction --event event.json
```