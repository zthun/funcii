import {
  HttpReverseProxy,
  HttpReverseProxyOptions,
  HttpsServerOptions,
  LetsEncryptSelfSignedOptions,
  LetsEncryptUsingSelfSigned,
  Logger,
  RouteRegistrationOptions
} from 'http-reverse-proxy-ts';
import { join } from 'path';
import { cwd } from 'process';
import { ZProxyConfigSearch } from './proxy-config/proxy-config-search';

(async function main() {
  const log = new Logger();
  log.info(null, `Current working directory: ${cwd()}`);

  const explorer = new ZProxyConfigSearch();
  const config = await explorer.search();

  const letsEncryptOptions: LetsEncryptSelfSignedOptions = {
    country: config.security.country,
    locality: config.security.city,
    organizationName: config.security.organization,
    state: config.security.state
  };

  const httpsOptions: HttpsServerOptions = {
    certificates: {
      certificateStoreRoot: './.certificates'
    }
  };

  const options: HttpReverseProxyOptions = {
    letsEncryptOptions,
    httpsOptions,
    log
  };

  const registrationOptions: RouteRegistrationOptions = {
    https: {
      redirectToHttps: true,
      letsEncrypt: {
        email: config.security.email,
        production: false
      }
    }
  };

  const proxy = new HttpReverseProxy(options, LetsEncryptUsingSelfSigned);

  config.domains.forEach((d) => {
    Object.keys(d.paths).forEach((p) => {
      const endpoint = join(d.name, p);
      const forward = d.paths[p];
      log.info(null, `Adding route, ${endpoint}, to ${forward}`);
      proxy.addRoute(endpoint, forward, registrationOptions);
    });
  });

  log.info(null, 'Proxy server started');
})();
