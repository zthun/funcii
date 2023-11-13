const apps = {
  api: {
    host: 'helpful-services-api',
    port: 3000
  },
  mongo: {
    host: 'helpful-mongo-admin',
    port: 8081
  },
  email: {
    host: 'helpful-email',
    port: 80
  }
};

const top = 'local.helpful.zthunworks.com';

export default {
  domains: [
    {
      name: top,
      paths: {
        '/': `${apps.api.host}:${apps.api.port}`,
        '/v2': `${apps.api.host}:${apps.api.port}`
      }
    },
    {
      name: `mongo.${top}`,
      paths: {
        '/': `${apps.mongo.host}:${apps.mongo.port}`
      }
    },
    {
      name: `email.${top}`,
      paths: {
        '/': `${apps.email.host}:${apps.email.port}`
      }
    }
  ]
};
