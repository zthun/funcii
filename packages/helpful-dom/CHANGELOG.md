# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.11.1](https://github.com/zthun/helpful/compare/v3.11.0...v3.11.1) (2024-03-01)


### Bug Fixes

* actual attribute name should be the passed value, not literal 'name' ([931cf06](https://github.com/zthun/helpful/commit/931cf06af25dbda87754a1f1c0e18ff34a7461ba))



## [3.11.0](https://github.com/zthun/helpful/compare/v3.10.1...v3.11.0) (2024-03-01)


### Features

* component render adds the signature for components built with component shadow ([66dd868](https://github.com/zthun/helpful/commit/66dd868ed2bcc522f3c444513d5be98e988aedfa))
* easily construct a web component without boilerplate using a the component shadow decorator ([1997273](https://github.com/zthun/helpful/commit/19972731be97daa1e4a40bd7255387cd12943596))
* stringify attribute makes it easier to convert values to interpolated xml attribute values ([6c63f48](https://github.com/zthun/helpful/commit/6c63f48c39a32aaa51cb078f5946031ce03b9f0b))



## [3.10.1](https://github.com/zthun/helpful/compare/v3.10.0...v3.10.1) (2024-02-27)


### Bug Fixes

* booleans can now have proper fallbacks in attributes ([25f1336](https://github.com/zthun/helpful/commit/25f13367bcc3120bf146d23705194ee1709cc76e))



## [3.10.0](https://github.com/zthun/helpful/compare/v3.9.0...v3.10.0) (2024-02-25)


### Features

* component attribute allows web component properties backed by attributes ([14d327e](https://github.com/zthun/helpful/commit/14d327e245677d7842afbd6042a83b3c57626be1))



## [3.9.0](https://github.com/zthun/helpful/compare/v3.8.0...v3.9.0) (2024-02-21)


### Features

* you can now set an auto data attribute on an Element if you mark the property to do so ([822d961](https://github.com/zthun/helpful/commit/822d961b00f56a3d6201a47a4b90de1988052b86))



## [3.8.0](https://github.com/zthun/helpful/compare/v3.7.3...v3.8.0) (2024-02-20)


### Features

* property change events help with tracking when properties on a web component change ([3bd79e3](https://github.com/zthun/helpful/commit/3bd79e3e06a44c9c03b6b086562b7380e6035dfd))
* web component life cycle event interfaces help define the lifecycle events in components ([f70e3d6](https://github.com/zthun/helpful/commit/f70e3d67275f62c66b2ddb4a2bc7e91eca6a4614))



## [3.7.3](https://github.com/zthun/helpful/compare/v3.7.2...v3.7.3) (2024-02-20)


### Bug Fixes

* registerCustomElements can now extend build in elements properly ([0328385](https://github.com/zthun/helpful/commit/03283857f509461a3cf4ec2e8f3300ea8d8624bc))



## [3.7.2](https://github.com/zthun/helpful/compare/v3.7.1...v3.7.2) (2024-02-19)


### Bug Fixes

* helpful dom should now reference the correct version of helpful-fn ([71ce836](https://github.com/zthun/helpful/commit/71ce836694519e37a66d34d87c49dad28b5f0142))



## [3.7.1](https://github.com/zthun/helpful/compare/v3.7.0...v3.7.1) (2024-02-19)


### Bug Fixes

* new functions are now exported ([c9dafda](https://github.com/zthun/helpful/commit/c9dafdaba984d4254490d7c7c009f1f8753fb51a))



## [3.7.0](https://github.com/zthun/helpful/compare/v3.6.0...v3.7.0) (2024-02-19)


### Features

* css variable allows you to construct a var reference easily without interpolation ([78f43a2](https://github.com/zthun/helpful/commit/78f43a2a76525cf928287adc6cf697fc861aa0c6))
* mutate attribute either removes an attribute for a null value or sets for a defined value ([26ee3c3](https://github.com/zthun/helpful/commit/26ee3c3a26754bc5b867b93b478f181b84f5f68c))
* query attribute adds support for getAttribute with a fallback ([1140927](https://github.com/zthun/helpful/commit/114092758d823f7f5a2629bdfe4a942cf1fda10a))



## [3.5.0](https://github.com/zthun/helpful/compare/v3.4.0...v3.5.0) (2024-02-16)


### Features

* helpful-dom adds methods that help with browser only capabilities ([4117423](https://github.com/zthun/helpful/commit/4117423d6c6a05f780abb44874f7d8e8bdee2490))
