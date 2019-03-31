## A fully dockerized app containing development and production build files

## Development

In the project directory you can run:
```bash
docker-compose up -d --build
```

Replace in docker-compose.yml the volumes paths with yours

Note: In case of 502 timeout just rerun the above command

## Production

WE are using Travis, Docker hub and AWS to deploy our app. Make sure you have an account to each one of them before you start. Replace in .travis.yml the docker images tags. 

e.g. "xaniapaliou/multi-client" should change to "yours-repository/yours-image-name"

### Enjoy!!!