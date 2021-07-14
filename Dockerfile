### STAGE 1: Build ###
FROM teracy/angular-cli AS build
WORKDIR /opt/app
COPY . .
RUN ng build

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /opt/app/dist/my-app /usr/share/nginx/html
