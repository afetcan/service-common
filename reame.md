# Acil Deprem Servis Ortak Kütüphanesi

<p>
      <a href="https://www.npmjs.com/package/@acildeprem/service-common"><img src="https://img.shields.io/npm/v/@acildeprem/service-common.svg?style=flat&colorA=002438&colorB=28CF8D" alt="Version"></a>
      <a href="https://www.npmjs.com/package/@acildeprem/service-common"><img src="https://img.shields.io/npm/dm/@acildeprem/service-common.svg?style=flat&colorA=002438&colorB=28CF8D" alt="Downloads"></a>
      <a href="./LICENSE"><img src="https://img.shields.io/github/license/acildeprem/service-common.svg?style=flat&colorA=002438&colorB=28CF8D" alt="License"></a>
      <a href="https://github.com/acildeprem/service-common">
      <img src="https://img.shields.io/github/stars/acildeprem/service-common.svg?style=social&label=Star&maxAge=2592000" alt="Github Stars"> </a>
</p>


`@acildeprem/service-common` paketinin amacı Fastify, Sentry gibi yeni server oluşturacağı zaman ortak olarak kullanılacak tüm kodları burada depolamaktır. Bu yapıyı projeye entegre ederken aşağıdaki adımları kullanabilirsiniz.

## NPM Paketi


### Kurulum
```bash
pnpm install @acildeprem/service-common
```

###  Kullanım
```ts
import { ... } from '@acildeprem/service-common' 
```

## Gereksinimler

- [Node.js](https://nodejs.org/en/) 18.0.0+
- [pnpm](https://pnpm.io/) 7.26.3+

## Kullandığımız teknolojiler
- [Fastify 8.2.0](https://www.fastify.io/docs/latest/)
- [SWC 1.3.32](https://swc.rs/docs/getting-started)
- [WHATWG 0.6.7](https://github.com/whatwg)
- [prom-client 14.1.1](https://github.com/siimon/prom-client)
- [Faker 7.6.0](https://fakerjs.dev/guide/)
- [Sentry 7.36.0](https://docs.sentry.io/)

## Local Geliştirme - Development

### Kurulum
```bash
pnpm install
```

### Dev
```bash
pnpm dev
```

### Build
```bash
pnpm build
```


# Linkler

- [Web Sitesi](https://acildeprem.com)
- [Discord](https://discord.acildeprem.com)
- [Twitter](https://twitter.com/acildepremcom)
