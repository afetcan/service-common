# service-common

`@acildeprem/service-common` paketinin amacı Fastify, Sentry gibi yeni server oluşturacağı zaman ortak olarak kullanılacak tüm kodları burada depolamaktır. Bu yapıyı projeye entegre ederken aşağıdaki adımları kullanabilirsiniz.
## Kurulum
```bash
pnpm install
```
## Gereksinimler

Node.js 18.0.0 veya üstü Pnpm 7.26.3

## Kullandığımız teknolojiler
- [Fastify 8.2.0](https://www.fastify.io/docs/latest/)
- [SWC 1.3.32](https://swc.rs/docs/getting-started)
- [WHATWG 0.6.7](https://github.com/whatwg)
- [prom-client 14.1.1](https://github.com/siimon/prom-client)
- [Faker 7.6.0](https://fakerjs.dev/guide/)
- [Sentry 7.36.0](https://docs.sentry.io/)

### Kurulum
```bash
pnpm install @acildeprem/service-common
```
### Kullanım
```ts
import { ... } from '@acildeprem/service-common' 
```
### Dev
```bash
pnpm dev
```
### Build
```bash
pnpm build
```