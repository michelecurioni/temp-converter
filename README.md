# Temperature Converter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.12.

## Development
The easiest way to develop and test locally is by using an existing Docker image with all the Angular dependencies installed.
I use the following command to start such a container:
```
docker container run --rm -v $(pwd):/opt -w /opt -p 4200:4200 teracy/angular-cli  ng serve --host=0.0.0.0
```
To view the webapp open browser at address localhost:4200  
You can then modify the application code and changes will automatically reflect in the browser  

## Build

To build a distributable version of the application use the following command:
```
docker build -t temperature-converter .
```
This will create the distributable files under dist folder, as well as a docker image that can be used as the runtime version.  
The docker image runs the webapp in nginx.
You could test the docker image locally by running:
```
docker run --name temperature-container -d -p 8080:80 temperature-converter
```
and then opening the browser at address localhost:8080
