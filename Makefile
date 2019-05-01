
dev:
	sam local start-api

build:
	npm run build

test: build
	npm run test

infrastructure:
	(cd infra && ./deploy.sh)
