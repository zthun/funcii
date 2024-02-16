# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.5.0](https://github.com/zthun/helpful/compare/v3.4.0...v3.5.0) (2024-02-16)


### Features

* helpful-dom adds methods that help with browser only capabilities ([4117423](https://github.com/zthun/helpful/commit/4117423d6c6a05f780abb44874f7d8e8bdee2490))



## [3.4.0](https://github.com/zthun/helpful/compare/v3.3.1...v3.4.0) (2024-02-15)


### Features

* $global returns the globalThis object ([3674d8f](https://github.com/zthun/helpful/commit/3674d8f02d4cc861857da2f54b6c7106e1e8e17d))



## [3.3.1](https://github.com/zthun/helpful/compare/v3.3.0...v3.3.1) (2024-02-09)


### Bug Fixes

* exported serializer and deserializer ([dfd742c](https://github.com/zthun/helpful/commit/dfd742ccc68d0bec27f90b50d229d22f1a7fb2c4))



## [3.3.0](https://github.com/zthun/helpful/compare/v3.2.1...v3.3.0) (2024-02-09)


### Features

* added serializer and deserializer interfaces ([ee66a02](https://github.com/zthun/helpful/commit/ee66a024a8e2eee1b0c2bc78054379bf6f44a6da))
* deserialize-json enables schema based json deserialization ([5fb775c](https://github.com/zthun/helpful/commit/5fb775c819611a71f15b90dd17b21460b7a837a8))
* deserialize-try allows for composite deserialization ([2e2b2d0](https://github.com/zthun/helpful/commit/2e2b2d04e7ff160e56b1aa06fe9d71c654d87685))
* filter type guards now accept null and undefined as test candidates ([05a9628](https://github.com/zthun/helpful/commit/05a9628121ac3500a0bd3b0c306485279f492556))
* filter-deserialize will parse a filter from a string ([a5fd78e](https://github.com/zthun/helpful/commit/a5fd78e2c391a2e7fb408cdceab4029534f0002f))
* filter-serialize converts a filter to a human readable string ([3d0c6eb](https://github.com/zthun/helpful/commit/3d0c6ebf3d5da9aa4b2f6f984cd19f60cfb4609d))
* serialize json enables pretty printing a json object ([6b277bc](https://github.com/zthun/helpful/commit/6b277bc228554f177514ebfcff2d8acc620c2593))
* sort lists can now be serialized ([70e9f74](https://github.com/zthun/helpful/commit/70e9f74d1a841fe0d641ac19901389b0d098d934))
* static data source can now update items at an index ([d2e159e](https://github.com/zthun/helpful/commit/d2e159ed71ade6c4093f6600bedf735fc92dd00d))
* static data source can remove items ([58b826f](https://github.com/zthun/helpful/commit/58b826f692336a9dc69dd99a3d685e6ac42468ac))
* you can now insert items in a data source static ([32ce2c1](https://github.com/zthun/helpful/commit/32ce2c190c64ca447db69cca4c8de458acbf2a27))



## [3.2.1](https://github.com/zthun/helpful/compare/v3.2.0...v3.2.1) (2024-02-06)


### Bug Fixes

* undefined window should no longer fail builds on typescript apps ([b127a4c](https://github.com/zthun/helpful/commit/b127a4c9e9914d282a237c223635373d3bb816e3))



## [3.2.0](https://github.com/zthun/helpful/compare/v3.1.0...v3.2.0) (2024-01-15)


### Features

* a sort parser is used to parse a sort ([1f296f3](https://github.com/zthun/helpful/commit/1f296f336ade07445ada1238e7b9a7418e2800df))
* filter parse supports unary filters ([0e215ba](https://github.com/zthun/helpful/commit/0e215ba8b1a93786d81221d44f7b089fabb21448))
* filter parser parses collection filters ([0530a71](https://github.com/zthun/helpful/commit/0530a71ff8890916d08dfda55e125a2d2a07d5e6))
* filter parser supports logic filters ([bf32fab](https://github.com/zthun/helpful/commit/bf32fab1206cb484ecb676678d436187a50e1dce))
* logic operators can now be set dynamically ([f9b3901](https://github.com/zthun/helpful/commit/f9b390188282b2b0b2cfa9277fbec310de7e3233))
* peel allows to split strings based on token rules ([9926a5e](https://github.com/zthun/helpful/commit/9926a5eea8c9f058a76126927bd12296d9ee62c2))
* sort builder can now set all sorts at once ([cab5a3e](https://github.com/zthun/helpful/commit/cab5a3e4d836f0f56a7a510c1d01198f16b2836c))
* the filter parser can parse a binary filter from a string ([fb4b29a](https://github.com/zthun/helpful/commit/fb4b29af0d3064a4ce4742b031978e252aeac923))
* the query method now supports the sort query argument ([0b153b4](https://github.com/zthun/helpful/commit/0b153b4ab76b60d0de70c22252168473d88d3c79))
* try fallback let's you try a function and then recover with a fallback value ([799e304](https://github.com/zthun/helpful/commit/799e3040dd3553a2069ca65c239340dc11112e1c))
* you can now pass a string for a filter request ([068f145](https://github.com/zthun/helpful/commit/068f145e4615c560f018af44c262c5dc7973d874))
* you can now retrieve operators in a list ([bb601b0](https://github.com/zthun/helpful/commit/bb601b08179d3c2ac136335025f09f0fdfd3ab8f))
* you can now set the operator dynamically ([dd87361](https://github.com/zthun/helpful/commit/dd87361f41e92b71b7951079dc1269f6df7f6ea1))
* you can now set the operator dynamically for a collection filter ([4a22edf](https://github.com/zthun/helpful/commit/4a22edfb4fde34099a713af9fe69322819d01e46))



## [3.1.0](https://github.com/zthun/helpful/compare/v3.0.0...v3.1.0) (2023-11-24)


### Features

* website now has a favicon ([c7d5067](https://github.com/zthun/helpful/commit/c7d506713dc967ebccab57469cf2c7e2abbe5a47))



## [3.0.0](https://github.com/zthun/helpful/compare/v2.7.1...v3.0.0) (2023-11-24)


### ⚠ BREAKING CHANGES

* removed isDataUriType
* remove helpful-people
* helpful-obligation has been merged into helpful-fn
* remove helpful-api

### Features

* helpful-obligation has been merged into helpful-fn ([656b4f2](https://github.com/zthun/helpful/commit/656b4f295ecbe0fcb747cd1fe000782cca79c00d))
* helpful-web generates the typedoc website for helpful ([65bf17f](https://github.com/zthun/helpful/commit/65bf17fc58e9dec88f963c35e6c398cbd48ade23))
* remove helpful-people ([ae089fa](https://github.com/zthun/helpful/commit/ae089fa926f936377c437d3f21ea4675eb0758fa))
* removed isDataUriType ([a2f6fc1](https://github.com/zthun/helpful/commit/a2f6fc108919c8000e9160433943bb506330eee4))


### Bug Fixes

* count is refreshed when the scope changes ([b198f44](https://github.com/zthun/helpful/commit/b198f44e8f0a4bf726c76f6e90582af519265422))
* filter subject is now exported ([cfc97fd](https://github.com/zthun/helpful/commit/cfc97fdef705695a96f39b08cc44e4d70aac29af))


### Code Refactoring

* remove helpful-api ([22afcf2](https://github.com/zthun/helpful/commit/22afcf25d4b58cf9fd7b33d28d41d7f5e06f21ac))



## [2.7.1](https://github.com/zthun/helpful/compare/v2.7.0...v2.7.1) (2023-11-17)


### Bug Fixes

* walk starts at the current working directory ([16c68f8](https://github.com/zthun/helpful/commit/16c68f84b2e1da4162d9aafbe57e07f949b0d81c))



## [2.7.0](https://github.com/zthun/helpful/compare/v2.6.0...v2.7.0) (2023-11-17)


### Features

* helpful-node adds extended methods that extend the current node api ([10ab9b7](https://github.com/zthun/helpful/commit/10ab9b75c0b152e4cf1e3628801c0542a1d14e7d))
* walk finds a file or folder up the directory tree ([ee252b5](https://github.com/zthun/helpful/commit/ee252b52105873c9adacfe18ccce26017896e5eb))



## [2.6.0](https://github.com/zthun/helpful/compare/v2.5.0...v2.6.0) (2023-11-13)


### Features

* helpful api sidecar now contains a health endpoint ([9b4e64b](https://github.com/zthun/helpful/commit/9b4e64ba88c483cefbad7fc15dec00f7d208ea3a))



## [2.5.0](https://github.com/zthun/helpful/compare/v2.4.0...v2.5.0) (2023-11-13)


### Features

* helpful proxy adds a declarative reverse proxy for local development ([28cf6b1](https://github.com/zthun/helpful/commit/28cf6b114b2165f4fecb353714cb22f88680e45a))
* helpful proxy allows local development of a reverse proxy without the need for nginx configs ([334c999](https://github.com/zthun/helpful/commit/334c999aad4d270f6d47283ec5b38cfd83d26f5c))


### Bug Fixes

* include the bin folder in the package ([ff020c8](https://github.com/zthun/helpful/commit/ff020c8af41e18e86c45a9625e63288449502900))



## [2.4.0](https://github.com/zthun/helpful/compare/v2.3.0...v2.4.0) (2023-11-11)


### Features

* guid module generates guids (uuids) for use ([ed37462](https://github.com/zthun/helpful/commit/ed37462917a1b9356bd2a7f26755eb1ee850628f))
* helpful-api allows you to generate common data without the need for a language adapter ([56281f7](https://github.com/zthun/helpful/commit/56281f73dab92fe82729a472f181fa5c081b6c05))



## [2.3.0](https://github.com/zthun/helpful/compare/v2.2.1...v2.3.0) (2023-09-02)


### Features

* helpful-validation contains useful validations not found in class-validator ([22969dc](https://github.com/zthun/helpful/commit/22969dc9c4d5fe521d015881ce044f1343ec5ca5))



## [2.2.1](https://github.com/zthun/helpful/compare/v2.2.0...v2.2.1) (2023-08-19)


### Bug Fixes

* create error should now respect data as well ([bbc7ae5](https://github.com/zthun/helpful/commit/bbc7ae5f9664cb6cb8234f1e452e5993ebf41a84))



## [2.2.0](https://github.com/zthun/helpful/compare/v2.1.0...v2.2.0) (2023-08-19)


### Features

* create-error extracts error information from objects ([357d95a](https://github.com/zthun/helpful/commit/357d95a761c7fac8b01de47446a7b398c2c9503b))


### Bug Fixes

* error from useMoreViewState should have better extraction ([8b8d47c](https://github.com/zthun/helpful/commit/8b8d47cd3ffd4d33f62c730d35b8ae4567d273ad))
* error message from useAsyncState should now have better extraction ([f9a765e](https://github.com/zthun/helpful/commit/f9a765ea5e174c102550665844918cfed2bf544c))



## [2.1.0](https://github.com/zthun/helpful/compare/v2.0.0...v2.1.0) (2023-08-17)


### Features

* data request can be built from query params ([908dedd](https://github.com/zthun/helpful/commit/908dedd21493efaf97df68dbc007122de5731d35))
* page builder allows a representation of a page in an api ([b83feaf](https://github.com/zthun/helpful/commit/b83feaf4e26d38b7b9deb3231b883ee5471a9075))
* pieces of a request are removable ([4282a5b](https://github.com/zthun/helpful/commit/4282a5b750c5d82261ad483be24297bd68a7b8a0))



## [2.0.0](https://github.com/zthun/helpful/compare/v0.21.6...v2.0.0) (2023-08-15)


### ⚠ BREAKING CHANGES

* update to version 1.0.0
* stable release

### Features

* stable release ([cd0a160](https://github.com/zthun/helpful/commit/cd0a160385a131e2c8fc5bebe9a7e4ff25e00abf))
* update to version 1.0.0 ([e3c0666](https://github.com/zthun/helpful/commit/e3c06666ef0bc2c09bb2d12c2156a67533948c8f))



## [0.21.6](https://github.com/zthun/helpful/compare/v0.21.5...v0.21.6) (2023-08-15)


### Bug Fixes

* should no longer bundle @zthun/helpful-fn ([0a051fe](https://github.com/zthun/helpful/commit/0a051fed0f8896a12eb3e0fd8b3d6b4eef67fd9e))
* should no longer bundle uuid ([abcae97](https://github.com/zthun/helpful/commit/abcae97ab85b8096b5159020ffe635686bde49f0))



## [0.21.5](https://github.com/zthun/helpful/compare/v0.21.4...v0.21.5) (2023-08-12)


### Bug Fixes

* use common global ([7c155de](https://github.com/zthun/helpful/commit/7c155dee257d8361b0d5dbd61e48f5a7f979910a))



## [0.21.4](https://github.com/zthun/helpful/compare/v0.21.3...v0.21.4) (2023-08-12)


### Bug Fixes

* global declaration for node and browser ([65dba83](https://github.com/zthun/helpful/commit/65dba83afd69f314113ba96849ace5f8105452f8))



## [0.21.3](https://github.com/zthun/helpful/compare/v0.21.2...v0.21.3) (2023-08-12)

**Note:** Version bump only for package @zthun/helpful





## [0.21.2](https://github.com/zthun/helpful/compare/v0.21.1...v0.21.2) (2023-08-12)


### Bug Fixes

* fully qualify document object ([fc7e1d4](https://github.com/zthun/helpful/commit/fc7e1d465f56b2a637f3bc45e3c5c23a99d0aaa4))



## [0.21.1](https://github.com/zthun/helpful/compare/v0.21.0...v0.21.1) (2023-08-12)


### Bug Fixes

* export file select ([dc29181](https://github.com/zthun/helpful/commit/dc2918171a62b21ee7cb604f78f36b776641a030))



## [0.21.0](https://github.com/zthun/helpful/compare/v0.20.1...v0.21.0) (2023-08-12)


### Features

* file select allows users to select files from the file system ([8c97914](https://github.com/zthun/helpful/commit/8c979142fccab5afb9fa7b989035a41d7401125f))
* helpful internet has object builders for internet related entities ([068e0c8](https://github.com/zthun/helpful/commit/068e0c814f091c86dca742ccddd042dc9acb3dcf))
* window service give a dependency injectable global object ([ab1d77f](https://github.com/zthun/helpful/commit/ab1d77fd43c4fc6d8abe9d4b938055a3dc258a97))



## [0.20.1](https://github.com/zthun/helpful/compare/v0.20.0...v0.20.1) (2023-07-26)


### Bug Fixes

* last should now be set in useMoreViewState ([194189f](https://github.com/zthun/helpful/commit/194189f6c290053842b28d370a18c1d2d9060023))



## [0.20.0](https://github.com/zthun/helpful/compare/v0.19.0...v0.20.0) (2023-07-25)


### Features

* add support for complete state in useMoreViewState ([da62c7f](https://github.com/zthun/helpful/commit/da62c7fd77ce75ea54635f9d3330c9d334172016))
* useMoreViewState now supports a reset ([13e3d8e](https://github.com/zthun/helpful/commit/13e3d8e5708c8a20cffb6e35cceb4abf54f57cfb))



## [0.19.0](https://github.com/zthun/helpful/compare/v0.18.0...v0.19.0) (2023-07-25)


### Features

* useMoreState hook helps with building infinite scroll views ([ed184a6](https://github.com/zthun/helpful/commit/ed184a65e7dce98b2366a84a582eaa050d7c78e8))
* usePageViewState gives implementation for single page views ([11573e3](https://github.com/zthun/helpful/commit/11573e38a2293ccb279a9663d427fc58757525f3))



## [0.18.0](https://github.com/zthun/helpful/compare/v0.17.1...v0.18.0) (2023-07-15)


### Features

* useStateAsArray helps with single to array casting ([1ee08bb](https://github.com/zthun/helpful/commit/1ee08bb451e94f7eadeced77d730e5b2f05a75ee))



## [0.17.1](https://github.com/zthun/helpful/compare/v0.17.0...v0.17.1) (2023-07-15)

**Note:** Version bump only for package @zthun/helpful





## [0.17.0](https://github.com/zthun/helpful/compare/v0.16.2...v0.17.0) (2023-06-19)


### Features

* sleep can resolve with a value ([6653306](https://github.com/zthun/helpful/commit/665330654b8630e0b8152e9039226528e7a16db0))


### Bug Fixes

* last refresh is the source of truth ([3212729](https://github.com/zthun/helpful/commit/3212729e6c0d79ed51c46314214e490c461c519c))
* use original error if error is Error ([06107c6](https://github.com/zthun/helpful/commit/06107c63f3ee0f36e82ff4bd7837219be0f3ecd3))



## [0.16.2](https://github.com/zthun/helpful/compare/v0.16.1...v0.16.2) (2023-06-18)


### Bug Fixes

* static errors reject after the delay ([6e3336e](https://github.com/zthun/helpful/commit/6e3336e1510d2f58da3bb8f9d69cee8022fa6cea))



## [0.16.1](https://github.com/zthun/helpful/compare/v0.16.0...v0.16.1) (2023-06-18)

**Note:** Version bump only for package @zthun/helpful





## [0.16.0](https://github.com/zthun/helpful/compare/v0.15.1...v0.16.0) (2023-06-18)


### Features

* data source can now have an error state ([b00eecd](https://github.com/zthun/helpful/commit/b00eecdbf799aed3feae542c3cef5624c33fd363))



## [0.15.1](https://github.com/zthun/helpful/compare/v0.15.0...v0.15.1) (2023-06-14)


### Bug Fixes

* agender is not a material icon ([7f3a2ba](https://github.com/zthun/helpful/commit/7f3a2ba3f0df605a3d181bd05842814b5c343e12))
* split font awesome into correct families ([5e733cb](https://github.com/zthun/helpful/commit/5e733cbaf939ea6b6b706b5c3acbfb3b86ef3094))



## [0.15.0](https://github.com/zthun/helpful/compare/v0.14.2...v0.15.0) (2023-06-14)


### Features

* person now has a console preference ([d5c159e](https://github.com/zthun/helpful/commit/d5c159e6c811b972d8e93ffbac3c6d3ad653d8df))



## [0.14.2](https://github.com/zthun/helpful/compare/v0.14.1...v0.14.2) (2023-06-12)


### Bug Fixes

* ambassador state with initial now has a guarantee for the reducer value ([fee8298](https://github.com/zthun/helpful/commit/fee8298ce89f8cb6fc0d6dcefc3833f2a6e2909a))



## [0.14.1](https://github.com/zthun/helpful/compare/v0.14.0...v0.14.1) (2023-06-12)


### Bug Fixes

* return type of async state should now include the reducer ([d0fb77a](https://github.com/zthun/helpful/commit/d0fb77a4163c4680164ca8fbb4eab5fa855aec28))
* the ambassador state should now respect the reducer function ([9071eb3](https://github.com/zthun/helpful/commit/9071eb37236205474ac13d3509a51d06d2cc4d66))



## [0.14.0](https://github.com/zthun/helpful/compare/v0.13.0...v0.14.0) (2023-06-11)


### Features

* additional people metadata ([bf6d4e2](https://github.com/zthun/helpful/commit/bf6d4e23a2387038d65963e9b7f889d0a8db906b))
* people data source now supports options ([493136d](https://github.com/zthun/helpful/commit/493136df6b3fb27beb6d37a08e979a816cd3aff9))



## [0.13.0](https://github.com/zthun/helpful/compare/v0.12.0...v0.13.0) (2023-06-11)


### Features

* support fallbacks for asStateData ([ca77d75](https://github.com/zthun/helpful/commit/ca77d75a62b11593513a054d0fc510588e6c140c))



## [0.12.0](https://github.com/zthun/helpful/compare/v0.11.1...v0.12.0) (2023-06-10)


### Features

* added person information ([0a159da](https://github.com/zthun/helpful/commit/0a159dac5229b4a829e7b0772f88069e48c8cfd4))
* well known classes give icon classes for common features ([a1cfac4](https://github.com/zthun/helpful/commit/a1cfac4a8c28ebf61aca4c91ee5d7dc285b304b0))



## [0.11.1](https://github.com/zthun/helpful/compare/v0.11.0...v0.11.1) (2023-06-10)


### Bug Fixes

* paths for gender and sex ([8490a7f](https://github.com/zthun/helpful/commit/8490a7f3cf761d38fbfaf459fae6d860a4c4bfe2))



## [0.11.0](https://github.com/zthun/helpful/compare/v0.10.0...v0.11.0) (2023-06-10)


### Features

* single sort initial can now be undefined ([8895606](https://github.com/zthun/helpful/commit/8895606e1d69a9690e71b6bc12e17def9c29db42))
* sorter subjects can be undefined ([9a79ebb](https://github.com/zthun/helpful/commit/9a79ebb4ea08e4b2dc7c68c2d5cfe1f626f4d70c))
* the none sorter turns off sorting ([ea14053](https://github.com/zthun/helpful/commit/ea14053c0dab14d8ad1f6c8b9ac197052aa4cd09))



## [0.10.0](https://github.com/zthun/helpful/compare/v0.9.0...v0.10.0) (2023-06-10)


### Features

* added a sorter to perform a sort order algorithm when constructing sorts ([ffd784c](https://github.com/zthun/helpful/commit/ffd784c274bc5b6ddd9283ca3678c4bbf05da6ef))
* helpful people generates large amount of random data ([38c2a2f](https://github.com/zthun/helpful/commit/38c2a2ff09a868939cba9b58faf83fc48ce434ad))
* metadata describes information about the data ([e0321f5](https://github.com/zthun/helpful/commit/e0321f52656b2996f3924c83e9e1dfb6ad7677d6))



## [0.9.0](https://github.com/zthun/helpful/compare/v0.8.2...v0.9.0) (2023-05-15)


### Features

* brands exports all available brands in an array ([84e8a25](https://github.com/zthun/helpful/commit/84e8a25a63e5d865b4587b8878bdb1c59202e8e3))
* keyboard-activate hook helps with performing onclick events with the keyboard ([8c9b980](https://github.com/zthun/helpful/commit/8c9b9801386613783c5cc91bc5e6a531d8828585))


### Bug Fixes

* count on the static data source should now respect the delay ([accbbf1](https://github.com/zthun/helpful/commit/accbbf1d31bca9d54140cc175bac7e5223b69725))



## [0.8.2](https://github.com/zthun/helpful/compare/v0.8.1...v0.8.2) (2023-05-13)


### Bug Fixes

* useAsyncState should now set the state to loading when refreshed ([12763b3](https://github.com/zthun/helpful/commit/12763b31c00a4699c11642c0064f7301024a141a))



## [0.8.1](https://github.com/zthun/helpful/compare/v0.8.0...v0.8.1) (2023-05-13)


### Bug Fixes

* export the new options object ([811f6c1](https://github.com/zthun/helpful/commit/811f6c15e193bfc5cf42e452c9ccb738303145fc))



## [0.8.0](https://github.com/zthun/helpful/compare/v0.7.0...v0.8.0) (2023-05-13)


### Features

* added support for delays in the static source ([082d892](https://github.com/zthun/helpful/commit/082d892df54bb678339e8a535e542b257ebafe5e))



## [0.7.0](https://github.com/zthun/helpful/compare/v0.6.0...v0.7.0) (2023-05-13)


### Features

* count buckets calculates the number of buckets you would need to store x items ([d9fd9dc](https://github.com/zthun/helpful/commit/d9fd9dc9b8f1c85fc2ce745fe2ae618e699e6f75))



## [0.6.0](https://github.com/zthun/helpful/compare/v0.5.0...v0.6.0) (2023-05-13)


### Features

* helpful brands are useful for sample data for demos ([eb121c8](https://github.com/zthun/helpful/commit/eb121c881a8ea4dfde7b7461316c083f4f8535d9))



## [0.5.0](https://github.com/zthun/helpful/compare/v0.4.1...v0.5.0) (2023-04-23)


### Features

* added side anchor ([0e3bebc](https://github.com/zthun/helpful/commit/0e3bebc410db86be5d12f82b74e4dfb72f17863e))



## [0.4.1](https://github.com/zthun/helpful/compare/v0.4.0...v0.4.1) (2023-04-23)


### Bug Fixes

* export orientation and anchor ([3df0fd0](https://github.com/zthun/helpful/commit/3df0fd0e7bf405a0e865a541391ef8778f8bffaf))



## [0.4.0](https://github.com/zthun/helpful/compare/v0.3.0...v0.4.0) (2023-04-23)


### Features

* added an anchor enum ([ef0caf8](https://github.com/zthun/helpful/commit/ef0caf8af58aec4a91ccbe058ba35cc7245ea409))
* added an orientation enum ([b162132](https://github.com/zthun/helpful/commit/b162132ac975a5fd20b9adb982054d5acea5efa5))
* added helpful react for common hooks ([845e9a3](https://github.com/zthun/helpful/commit/845e9a3b0ee99161d0cd4002f240299efd0229e9))
* helpful react ([480330a](https://github.com/zthun/helpful/commit/480330aad6fba340862f53c801cf149d7f4ad660))



## [0.3.0](https://github.com/zthun/helpful/compare/v0.2.0...v0.3.0) (2023-02-28)


### Features

* added support to create GUIDs ([3d08fce](https://github.com/zthun/helpful/commit/3d08fce79ef53795c35bcd799d6750d81d9a8f03))



## [0.2.0](https://github.com/zthun/helpful/compare/v0.1.0...v0.2.0) (2023-02-24)


### Features

* binary filters allow for two way relationship comparisons ([6598141](https://github.com/zthun/helpful/commit/6598141eb4936088f81f54255084ac12859268e7))
* collection filters enable in/not-in queries ([9f1f129](https://github.com/zthun/helpful/commit/9f1f1293282e9b423c9e10b0c111c2e4a897f5c2))
* data filter fields applies a filter on object fields or the object itself ([87808c4](https://github.com/zthun/helpful/commit/87808c47589f206eba02e4d8d0f6de1d2d9d9408))
* data request defines the criteria for data retrieval ([2905cb0](https://github.com/zthun/helpful/commit/2905cb0f943e01b016def585afd5802840e5ee1e))
* data search is a match style which uses raw query strings as the filter criteria ([82908cd](https://github.com/zthun/helpful/commit/82908cddb3b9f761413db5020d32554431904364))
* data source async allows in-memory queries on async data ([a73190d](https://github.com/zthun/helpful/commit/a73190d0f5296598ab26293d689a4c7c7631c292))
* data source can do multi sort on data elements ([ce1d5eb](https://github.com/zthun/helpful/commit/ce1d5ebc7eb35fc4b7003d5e7e4e18383b4bf7b1))
* data source is the heart of the source pattern ([fcda4cc](https://github.com/zthun/helpful/commit/fcda4ccff049b3cccb521b6bc316c80d30008ec2))
* data source static allows in memory querying on a data array ([935a338](https://github.com/zthun/helpful/commit/935a338a01b707bb2afc11b6b182ab352e9ef964))
* each binary filter can map to comparators ([dbd9e4a](https://github.com/zthun/helpful/commit/dbd9e4ad4c0818869fbc326dedd2d50fcc9539c9))
* filters allow you to cull data down to a targeted set ([b82afc6](https://github.com/zthun/helpful/commit/b82afc64ddcb760bd7f21fc472b9fa7399d55864))
* logic filters allow for and/or clauses ([ac7d46e](https://github.com/zthun/helpful/commit/ac7d46ec83300c83b6511291896b7f2780d2139d))
* match describes how to match data against a custom defined filter ([5cf7b0c](https://github.com/zthun/helpful/commit/5cf7b0c28d12543bbb508836d6370356f5e97fda))
* sort lets you build a list of subject sorts in a specified order ([1777d99](https://github.com/zthun/helpful/commit/1777d99d9f270b1c849dc887ad6c04c435c6ff26))
* unary filters allow for null/non-null checks ([04a1c98](https://github.com/zthun/helpful/commit/04a1c98a07a0d09f8d8710fcfea4c11f40f1356d))



## 0.1.0 (2023-02-23)


### Features

* assert lets you build a list of assertions that must be true before continuing ([b22b665](https://github.com/zthun/helpful/commit/b22b6651e3f780bf87241fe529d358244cbadba1))
* first defined retrieves the first defined item in an array ([96a59f9](https://github.com/zthun/helpful/commit/96a59f92e255c85b81f790516603a2f6ce90793d))
* joinList joins non null values ([f83ad8a](https://github.com/zthun/helpful/commit/f83ad8ab21b694bd644147c0d687a8eaf9e38304))
* obligation adds required and optional to assert correct values ([ebff13d](https://github.com/zthun/helpful/commit/ebff13da42fffe12435464c081851ec8bec8d6c0))
* setFirst adds support for mapping a value to an initial item in an array ([43b51a0](https://github.com/zthun/helpful/commit/43b51a0b04faf26343eeeb19a872b96c8955a582))
* sleep is a basic set timeout that waits for a specific set of milliseconds ([ca28b70](https://github.com/zthun/helpful/commit/ca28b70ba8ad08b9e406f5f8523b5ed4fd2db6da))
