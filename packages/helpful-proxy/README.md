# Helpful Proxy

Doing local development can be challenging when your development environment differs from a production environment. When
working with websites, users will usually navigate to your domain. Most websites use a bunch of configuration and
variables to construct an environment, which can be very tricky and prone to error.

> The best configuration is no configuration.

It would be nice if we could mimic our local development environment to look similar to production, with just a simple
change of adding one subdomain to our domain.

Helpful proxy bridges that gap by providing a docker container which routes artificial DNS addresses to your local
system and then, along with something like docker compose, you can simulate an experience similar to what a production
environment does. It also adds support for https with a self signed certificate so you can also add check for how your
site operates using TLS.

## Installation

You can install this through NPM or Yarn, but this is meant to be ran through a docker container in a compose setting.

```sh
npm install @zthun/helpful-proxy --dev
yarn add @zthun/helpful-proxy --dev
```

## Usage

This is best used in a mono repo that contains your frontend plus your backend, but can be useful whenever you have the
need for more than one service running for an application to debug, and it includes multiple access points.

The following is a sample app written in node that has a frontend and a backend all in the same repository. Assume that
the frontend and backend packages have scripts named debug that run a dev server and a nodemon application respectively.

```yaml
services:
  # The app proxy here represents the ingress into your system locally.
  app-proxy:
    image: zthun/helpful-proxy
    ports:
      - 80:80
      - 443:443
    volumes:
      - ./.config:/.config
    depends_on:
      - app-frontend
      - app-backend
  # This is your frontend application.  We map the current repository directly into
  # the container and run the debug script.
  app-frontend:
    image: node:lts
    volumes:
      - ./:/usr/dev
    working_dir: /usr/dev
    command: npm --workspace app-frontend run debug
  # Same for the backend application.  We map the current repository directly into
  # the container and run the debug script.
  app-backend:
    image: node:lts
    volumes:
      - ./:/usr/dev
    working_dir: /usr/dev
    command: npm --workspace app-backend run debug
    depends_on:
      - app-database
    environment:
      - DATABASE_URL=mongo://app-database
  # Just here for the sake of completion.  Simply layered application.
  app-database:
    image: mongo:7
```

_Notice the mapping to the .config directory_. We need to actually map the proxy paths.

Inside the .config directory in your repository, create a new file, **helpful-proxyrc.js**. The domain, app.com is just
a placeholder here. Replace the domain with whatever you want it to be.

```js
// A few assumptions being made here.  Normal http requests to
// static content will run on port 80 if your frontend is using
// an nginx docker container with no configuration.  We'll just assume
// your backend runs on port 3000, but this can be anything.  It is also
// assumed that your frontend is connecting to your backend rest service
// and those all route on the same domain with an /api path.
module.exports = {
  domains: [
    {
      name: `local.app.com`,
      paths: {
        '/': 'app-frontend:80'
        '/api': 'app-backend:3000/api'
      }
    }
  ]
};
```

The final step is to make sure that local.app.com routes to your localhost. We can use our hosts file to make sure our
operating system fakes this DNS lookup.

On mac and linux, the hosts file is located at /ect/hosts and on Windows, it's located on
C:\\Windows\\System32\\drivers\\etc\\hosts.

```ini
##
# Host Database
#
# localhost is used to configure the loopback interface
# when the system is booting.  Do not change this entry.
##
127.0.0.1       localhost

# My Local Apps
127.0.0.1       local.app.com

::1             localhost
```

Restart your terminal and IDE and run the compose file.

```sh
docker compose up
```

Now open your browser and navigate to local.app.com. You should see your application frontend running and it should be
able to connect to your backend.

## Limitations

The proxy, under the hood uses a self signed certificate, and, depending on your browser settings, you may have to allow
this cert through. In certain versions of different browsers, it may not even let you bypass this. If you encounter
this, you can simply open the same url in Firefox or Chrome using private browsing and there should be an option to
white list the self signed certificate for the current session.
