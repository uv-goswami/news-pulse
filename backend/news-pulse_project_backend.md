# PROJECT SOURCE CODE

**Project Root:** `/media/user/New Volume/Internship/news-pulse/backend`

---

====================================================================================================
# FILE 1

## Relative Path
`.env`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/backend/.env`

## Source Code

```text
# Environment variables declared in this file are NOT automatically loaded by Prisma.
# Please add `import "dotenv/config";` to your `prisma.config.ts` file, or use the Prisma CLI with Bun
# to load environment variables from .env files: https://pris.ly/prisma-config-env-vars.

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

# The following `prisma+postgres` URL is similar to the URL produced by running a local Prisma Postgres
# server with the `prisma dev` CLI command, when not choosing any non-default ports or settings. The API key, unlike the
# one found in a remote Prisma Postgres URL, does not contain any sensitive information.

DATABASE_URL="postgresql://news_user:user@localhost:5432/news_pulse?schema=public"
PYTHON_CMD="/media/user/New Volume/Internship/news-pulse/scraper/venv/bin/python3"

FRONTEND_URL=http://localhost:3000

SCRAPER_TIMEOUT_MS=900000
```

====================================================================================================
# FILE 2

## Relative Path
`.gitignore`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/backend/.gitignore`

## Source Code

```text
node_modules
# Keep environment variables out of version control
.env

/generated/prisma
```

====================================================================================================
# FILE 3

## Relative Path
`package-lock.json`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/backend/package-lock.json`

## Source Code

```json
{
  "name": "backend",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "backend",
      "version": "1.0.0",
      "license": "ISC",
      "dependencies": {
        "@prisma/adapter-pg": "^7.8.0",
        "@prisma/client": "^7.8.0",
        "bcrypt": "^6.0.0",
        "dotenv": "^17.4.2",
        "pg": "^8.22.0"
      },
      "devDependencies": {
        "@fastify/cookie": "^11.0.2",
        "@fastify/cors": "^11.2.0",
        "@fastify/helmet": "^13.0.2",
        "@fastify/jwt": "^10.1.0",
        "@fastify/rate-limit": "^11.0.0",
        "@fastify/swagger": "^9.7.0",
        "@fastify/swagger-ui": "^6.0.0",
        "@types/bcrypt": "^6.0.0",
        "@types/node": "^26.0.1",
        "fastify": "^5.8.5",
        "pino-pretty": "^13.1.3",
        "prisma": "^7.8.0",
        "tsx": "^4.22.4",
        "typescript": "^6.0.3"
      }
    },
    "node_modules/@electric-sql/pglite": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/@electric-sql/pglite/-/pglite-0.4.1.tgz",
      "integrity": "sha512-mZ9NzzUSYPOCnxHH1oAHPRzoMFJHY472raDKwXl/+6oPbpdJ7g8LsCN4FSaIIfkiCKHhb3iF/Zqo3NYxaIhU7Q==",
      "devOptional": true,
      "license": "Apache-2.0"
    },
    "node_modules/@electric-sql/pglite-socket": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/@electric-sql/pglite-socket/-/pglite-socket-0.1.1.tgz",
      "integrity": "sha512-p2hoXw3Z3LQHwTeikdZNsFBOvXGqKY2hk51BBw+8NKND8eoH+8LFOtW9Z8CQKmTJ2qqGYu82ipqiyFZOTTXNfw==",
      "devOptional": true,
      "license": "Apache-2.0",
      "bin": {
        "pglite-server": "dist/scripts/server.js"
      },
      "peerDependencies": {
        "@electric-sql/pglite": "0.4.1"
      }
    },
    "node_modules/@electric-sql/pglite-tools": {
      "version": "0.3.1",
      "resolved": "https://registry.npmjs.org/@electric-sql/pglite-tools/-/pglite-tools-0.3.1.tgz",
      "integrity": "sha512-C+T3oivmy9bpQvSxVqXA1UDY8cB9Eb9vZHL9zxWwEUfDixbXv4G3r2LjoTdR33LD8aomR3O9ZXEO3XEwr/cUCA==",
      "devOptional": true,
      "license": "Apache-2.0",
      "peerDependencies": {
        "@electric-sql/pglite": "0.4.1"
      }
    },
    "node_modules/@esbuild/aix-ppc64": {
      "version": "0.28.1",
      "resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.28.1.tgz",
      "integrity": "sha512-Svl7tq8k/08+p6CXPpRjQ1fKX+1odH/BQbb48fV6fj3CWHhsoIOoY87w1oHXm0qEpkIK3ZfVgp0hed3XBXzXMQ==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "aix"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm": {
      "version": "0.28.1",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.28.1.tgz",
      "integrity": "sha512-0k2F129Xdio1TdJfzJ8sy1Q47vUD2NnwdhiAf7drUN1EBTfPf4hsFCtmMgu/6m8JSzsBrlmVjudMBQqOfG8usQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm64": {
      "version": "0.28.1",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.28.1.tgz",
      "integrity": "sha512-34EGEbCIAgosYz6goLcopX6Mo7NyGv9tfwEM2/7Ce2VcVRk568iSvniGWcUXIy7wEDR1wzolcxcriFVrWYcwBg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-x64": {
      "version": "0.28.1",
      "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.28.1.tgz",
      "integrity": "sha512-dbwY7ltSMDWsRatcRpCnES4F+im88OCUgGZjy52shC7GqHRE/cYlxNbB4Z4UpJswpcc4Qxd2oE/ufM0p61IKng==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-arm64": {
      "version": "0.28.1",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.28.1.tgz",
      "integrity": "sha512-TZbWkQY7kvTAXbXUT7uVACR5cMHsDiSz9z7ZKAX/RTq/WJEk3QyRr0wZpNhBDX+/0CtdqUIJlOiodQcta6tY3Q==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-x64": {
      "version": "0.28.1",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.28.1.tgz",
      "integrity": "sha512-zfdzgK9ACBNZLI/CyHTOx81SyNbM6YXn7rxSgX97VjyiPl9W1i4Ka4fgKECEoFCKGpvBj5qArWIGgQjOwkgskQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-arm64": {
      "version": "0.28.1",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.28.1.tgz",
      "integrity": "sha512-wG2EA8ENdEI0qhkSZMjfqrdY+ziCYCPMmtZjjIwOmXFjmyzEHn+UUxk5of+SYsjtfs3VpnlC7QLzSI5hY/rOAw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-x64": {
      "version": "0.28.1",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.28.1.tgz",
      "integrity": "sha512-i7dZ9vQgnvSCzi/rYCXNgtF/U+eKZNJBzu3eTQbRgHnM7tNSizLOkRFAl3qzVc/Op/u5YkHHa4pf/3DOYHthLQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm": {
      "version": "0.28.1",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.28.1.tgz",
      "integrity": "sha512-qVXBOHQS+d5Y722GwJzJUtOLlX7km3CraOaGormF1pDtPd2C/l1SHRPgjLunLGe51Sh5YYWKMFDyV4SxgMQYTQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm64": {
      "version": "0.28.1",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.28.1.tgz",
      "integrity": "sha512-yHs+0uc8+nvEAfAfxrWQKK5peSNzBc4PegcMO0EJ2hT71uA7vB8Ihg2e77R2P7SG5uYjPbHlLLmve4LLLRCf0g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ia32": {
      "version": "0.28.1",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.28.1.tgz",
      "integrity": "sha512-d1z4ZuP0ajrfz/FhGT4vv278rX8KnPPJx8i5+AtK7TYbx9Le9F1hyzurZpkEyjkGa9dUGhQow4C1NmeGvqxN2w==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-loong64": {
      "version": "0.28.1",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.28.1.tgz",
      "integrity": "sha512-M5sRjUVZrkm1OAPR3dlOYzNmN+loZKGVi1VUQGrwuqLcbR6qeAz+famMhjASeH3YVKvZz+zT1jlh/keC3Rj/lg==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-mips64el": {
      "version": "0.28.1",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.28.1.tgz",
      "integrity": "sha512-mRObBZeHh2OxcBFPWE/FjylkRgZdYuiTR3vaTozquCGOH14iP9oN4x4Ge81CoIDYQrXmIxpFumJBu5MtZpnQJQ==",
      "cpu": [
        "mips64el"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ppc64": {
      "version": "0.28.1",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.28.1.tgz",
      "integrity": "sha512-slScBsMAb3GFDcdrCgLwZtPYRoH2H/youv10QiZyRjmsP48fznoveWytSgCI/R0ZcUgpc0ZhIUEx6LHts8yrfQ==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-riscv64": {
      "version": "0.28.1",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.28.1.tgz",
      "integrity": "sha512-kw0owk1o0GFETUJyW0jc0G4Yzs0BHZn0JDZ8JRT088vjJYX777BAs1fDGxAC+q831qOs2DTC96mNsG2opdfyyQ==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-s390x": {
      "version": "0.28.1",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.28.1.tgz",
      "integrity": "sha512-/lAIjX8aYFRByhh6L5rYtPEDRqa9de/4V/juOXcta5frjvzXO4/sqEtyytse0g3zZFuWu5cDN0MkLz2qRDD2Ag==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-x64": {
      "version": "0.28.1",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.28.1.tgz",
      "integrity": "sha512-u/anNYF2mmVOEDwLtnQ1wOr3EZ9sTNGLWrsYGYwHWzGA3Si84IOkHXlbWTD1NB+9/1lcnweYKO54uhxZydNzfA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-arm64": {
      "version": "0.28.1",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-arm64/-/netbsd-arm64-0.28.1.tgz",
      "integrity": "sha512-oks0DYbLwWMmaakTsCb+zL4E+aHRVLom9IJZOAthMQEPiQmydXHkziYEsGYRx0uNV/IjEKGAV941JzH02pflqw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-x64": {
      "version": "0.28.1",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.28.1.tgz",
      "integrity": "sha512-aeL6lAnN89Hz43Mlh1G8ARasbuoYvSITDEx0tHh5b7jJnHcssqgjy9Yx430GDpmCa6OyrKoS0aNRjKundRizGg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-arm64": {
      "version": "0.28.1",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-arm64/-/openbsd-arm64-0.28.1.tgz",
      "integrity": "sha512-MEFJe5C3R8pwXdZ5Y21oo6m7ePiS0d9pWucn99O/wvyJZChoIQKrQDxKrGeW8F5+T0okTHesAmDeiHDTIq0V/Q==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-x64": {
      "version": "0.28.1",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.28.1.tgz",
      "integrity": "sha512-i/ZLIOafE0Z8cI/XANJAixoJL/uRAoS2xOA3rb0xN+KK0K177cMAsQYkzHtBrtMXAKuAc7HGgcWiZ/sRC1Nxgw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openharmony-arm64": {
      "version": "0.28.1",
      "resolved": "https://registry.npmjs.org/@esbuild/openharmony-arm64/-/openharmony-arm64-0.28.1.tgz",
      "integrity": "sha512-ge+Z7EXFNt2BO1oAMsVpiQ8EwndV9i1xXerAeTIK7AtPs3bKFXQM7nlRxDSIUIMeueR1CNXxqztLzdNeReKBJg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/sunos-x64": {
      "version": "0.28.1",
      "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.28.1.tgz",
      "integrity": "sha512-BEjgtECkL3vY+SaSQ6nzVfiALUeFxpawyp8Jmf5PtYhf1Ug40N1h/hxlhts+f1FvSvarEigdxS3BlSMI2PJLcQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "sunos"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-arm64": {
      "version": "0.28.1",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.28.1.tgz",
      "integrity": "sha512-lCv9eK/H6ZJWbE7bh2nw54CZ9M2nupBxJcTsdk/QQnWkdSjKGuxmmH8/GWrlT1eMmZfn4dGcCjRte397WqfQXA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-ia32": {
      "version": "0.28.1",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.28.1.tgz",
      "integrity": "sha512-zvb/mB2bSCoJOpoCBgYKKpX6YM6mJBlBUVUtVj41DlZJVEB6/0CKlRYxP5wWl1C1ILiCoAU5wZZ4q1P3qeS6Eg==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-x64": {
      "version": "0.28.1",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.28.1.tgz",
      "integrity": "sha512-bm4Mowrv+GXMlpWX++EcXw/iLyd1o3+bJkC2DkWXYVvgZCqD/bSj9ctZeAMC3cIxgjRVR2Dufaiu4YPxr5gW1A==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@fastify/accept-negotiator": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/@fastify/accept-negotiator/-/accept-negotiator-2.0.1.tgz",
      "integrity": "sha512-/c/TW2bO/v9JeEgoD/g1G5GxGeCF1Hafdf79WPmUlgYiBXummY0oX3VVq4yFkKKVBKDNlaDUYoab7g38RpPqCQ==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fastify"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fastify"
        }
      ],
      "license": "MIT"
    },
    "node_modules/@fastify/ajv-compiler": {
      "version": "4.0.5",
      "resolved": "https://registry.npmjs.org/@fastify/ajv-compiler/-/ajv-compiler-4.0.5.tgz",
      "integrity": "sha512-KoWKW+MhvfTRWL4qrhUwAAZoaChluo0m0vbiJlGMt2GXvL4LVPQEjt8kSpHI3IBq5Rez8fg+XeH3cneztq+C7A==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fastify"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fastify"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "ajv": "^8.12.0",
        "ajv-formats": "^3.0.1",
        "fast-uri": "^3.0.0"
      }
    },
    "node_modules/@fastify/cookie": {
      "version": "11.0.2",
      "resolved": "https://registry.npmjs.org/@fastify/cookie/-/cookie-11.0.2.tgz",
      "integrity": "sha512-GWdwdGlgJxyvNv+QcKiGNevSspMQXncjMZ1J8IvuDQk0jvkzgWWZFNC2En3s+nHndZBGV8IbLwOI/sxCZw/mzA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fastify"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fastify"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "cookie": "^1.0.0",
        "fastify-plugin": "^5.0.0"
      }
    },
    "node_modules/@fastify/cors": {
      "version": "11.2.0",
      "resolved": "https://registry.npmjs.org/@fastify/cors/-/cors-11.2.0.tgz",
      "integrity": "sha512-LbLHBuSAdGdSFZYTLVA3+Ch2t+sA6nq3Ejc6XLAKiQ6ViS2qFnvicpj0htsx03FyYeLs04HfRNBsz/a8SvbcUw==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fastify"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fastify"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "fastify-plugin": "^5.0.0",
        "toad-cache": "^3.7.0"
      }
    },
    "node_modules/@fastify/error": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/@fastify/error/-/error-4.2.0.tgz",
      "integrity": "sha512-RSo3sVDXfHskiBZKBPRgnQTtIqpi/7zhJOEmAxCiBcM7d0uwdGdxLlsCaLzGs8v8NnxIRlfG0N51p5yFaOentQ==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fastify"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fastify"
        }
      ],
      "license": "MIT"
    },
    "node_modules/@fastify/fast-json-stringify-compiler": {
      "version": "5.0.3",
      "resolved": "https://registry.npmjs.org/@fastify/fast-json-stringify-compiler/-/fast-json-stringify-compiler-5.0.3.tgz",
      "integrity": "sha512-uik7yYHkLr6fxd8hJSZ8c+xF4WafPK+XzneQDPU+D10r5X19GW8lJcom2YijX2+qtFF1ENJlHXKFM9ouXNJYgQ==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fastify"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fastify"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "fast-json-stringify": "^6.0.0"
      }
    },
    "node_modules/@fastify/forwarded": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/@fastify/forwarded/-/forwarded-3.0.1.tgz",
      "integrity": "sha512-JqDochHFqXs3C3Ml3gOY58zM7OqO9ENqPo0UqAjAjH8L01fRZqwX9iLeX34//kiJubF7r2ZQHtBRU36vONbLlw==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fastify"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fastify"
        }
      ],
      "license": "MIT"
    },
    "node_modules/@fastify/helmet": {
      "version": "13.0.2",
      "resolved": "https://registry.npmjs.org/@fastify/helmet/-/helmet-13.0.2.tgz",
      "integrity": "sha512-tO1QMkOfNeCt9l4sG/FiWErH4QMm+RjHzbMTrgew1DYOQ2vb/6M1G2iNABBrD7Xq6dUk+HLzWW8u+rmmhQHifA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fastify"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fastify"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "fastify-plugin": "^5.0.0",
        "helmet": "^8.0.0"
      }
    },
    "node_modules/@fastify/jwt": {
      "version": "10.1.0",
      "resolved": "https://registry.npmjs.org/@fastify/jwt/-/jwt-10.1.0.tgz",
      "integrity": "sha512-U1y8ZbxoH1Pjon3euzPJmbCkuYBM+hrQlFWLQWvKmJGCNT6mVsAolnVJdEWfXeQOKpgmuRVCIsPll5RLZxj10A==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fastify"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fastify"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@fastify/error": "^4.2.0",
        "@lukeed/ms": "^2.0.2",
        "fast-jwt": "^6.2.0",
        "fastify-plugin": "^5.0.1",
        "steed": "^1.1.3"
      }
    },
    "node_modules/@fastify/merge-json-schemas": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/@fastify/merge-json-schemas/-/merge-json-schemas-0.2.1.tgz",
      "integrity": "sha512-OA3KGBCy6KtIvLf8DINC5880o5iBlDX4SxzLQS8HorJAbqluzLRn80UXU0bxZn7UOFhFgpRJDasfwn9nG4FG4A==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fastify"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fastify"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "dequal": "^2.0.3"
      }
    },
    "node_modules/@fastify/proxy-addr": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/@fastify/proxy-addr/-/proxy-addr-5.1.0.tgz",
      "integrity": "sha512-INS+6gh91cLUjB+PVHfu1UqcB76Sqtpyp7bnL+FYojhjygvOPA9ctiD/JDKsyD9Xgu4hUhCSJBPig/w7duNajw==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fastify"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fastify"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@fastify/forwarded": "^3.0.0",
        "ipaddr.js": "^2.1.0"
      }
    },
    "node_modules/@fastify/rate-limit": {
      "version": "11.0.0",
      "resolved": "https://registry.npmjs.org/@fastify/rate-limit/-/rate-limit-11.0.0.tgz",
      "integrity": "sha512-kCs+G59SitZw9TL/ekFe+MrzXk20dEp6zPAM8WEZjFl5Ubvv5ksTbEXYr4jGlBwWAKn78q+NFsj5CN75zXLjaw==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fastify"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fastify"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@lukeed/ms": "^2.0.2",
        "fastify-plugin": "^5.0.0",
        "toad-cache": "^3.7.0"
      }
    },
    "node_modules/@fastify/send": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/@fastify/send/-/send-4.1.0.tgz",
      "integrity": "sha512-TMYeQLCBSy2TOFmV95hQWkiTYgC/SEx7vMdV+wnZVX4tt8VBLKzmH8vV9OzJehV0+XBfg+WxPMt5wp+JBUKsVw==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fastify"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fastify"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@lukeed/ms": "^2.0.2",
        "escape-html": "~1.0.3",
        "fast-decode-uri-component": "^1.0.1",
        "http-errors": "^2.0.0",
        "mime": "^3"
      }
    },
    "node_modules/@fastify/static": {
      "version": "9.1.3",
      "resolved": "https://registry.npmjs.org/@fastify/static/-/static-9.1.3.tgz",
      "integrity": "sha512-aXrYtsiryLhRxRNaxNqsn7FUISeb7rB9q4eHUPIot5aeQBLNahnz1m6thzm7JWC1poSGXS9XrX8DvuMivp2hkQ==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fastify"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fastify"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@fastify/accept-negotiator": "^2.0.0",
        "@fastify/send": "^4.0.0",
        "content-disposition": "^1.0.1",
        "fastify-plugin": "^5.0.0",
        "fastq": "^1.17.1",
        "glob": "^13.0.0"
      }
    },
    "node_modules/@fastify/swagger": {
      "version": "9.7.0",
      "resolved": "https://registry.npmjs.org/@fastify/swagger/-/swagger-9.7.0.tgz",
      "integrity": "sha512-Vp1SC1GC2Hrkd3faFILv86BzUNyFz5N4/xdExqtCgkGASOzn/x+eMe4qXIGq7cdT6wif/P/oa6r1Ruqx19paZA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fastify"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fastify"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "fastify-plugin": "^5.0.0",
        "json-schema-resolver": "^3.0.0",
        "openapi-types": "^12.1.3",
        "rfdc": "^1.3.1",
        "yaml": "^2.4.2"
      }
    },
    "node_modules/@fastify/swagger-ui": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/@fastify/swagger-ui/-/swagger-ui-6.0.0.tgz",
      "integrity": "sha512-L9c4CbXj3FnquqpCmn0IfbEeIqDUNi6QwXd23VhQj/bHEjNzDFIAy2W9I3prvSqM+mJWOElIa6uXROmcMDnfUA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fastify"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fastify"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@fastify/static": "^9.1.2",
        "fastify-plugin": "^5.0.0",
        "openapi-types": "^12.1.3",
        "rfdc": "^1.3.1",
        "yaml": "^2.4.1"
      }
    },
    "node_modules/@hono/node-server": {
      "version": "1.19.11",
      "resolved": "https://registry.npmjs.org/@hono/node-server/-/node-server-1.19.11.tgz",
      "integrity": "sha512-dr8/3zEaB+p0D2n/IUrlPF1HZm586qgJNXK1a9fhg/PzdtkK7Ksd5l312tJX2yBuALqDYBlG20QEbayqPyxn+g==",
      "devOptional": true,
      "license": "MIT",
      "engines": {
        "node": ">=18.14.1"
      },
      "peerDependencies": {
        "hono": "^4"
      }
    },
    "node_modules/@kurkle/color": {
      "version": "0.3.4",
      "resolved": "https://registry.npmjs.org/@kurkle/color/-/color-0.3.4.tgz",
      "integrity": "sha512-M5UknZPHRu3DEDWoipU6sE8PdkZ6Z/S+v4dD+Ke8IaNlpdSQah50lz1KtcFBa2vsdOnwbbnxJwVM4wty6udA5w==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/@lukeed/ms": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/@lukeed/ms/-/ms-2.0.2.tgz",
      "integrity": "sha512-9I2Zn6+NJLfaGoz9jN3lpwDgAYvfGeNYdbAIjJOqzs4Tpc+VU3Jqq4IofSUBKajiDS8k9fZIg18/z13mpk1bsA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@pinojs/redact": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/@pinojs/redact/-/redact-0.4.0.tgz",
      "integrity": "sha512-k2ENnmBugE/rzQfEcdWHcCY+/FM3VLzH9cYEsbdsoqrvzAKRhUZeRNhAZvB8OitQJ1TBed3yqWtdjzS6wJKBwg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@prisma/adapter-pg": {
      "version": "7.8.0",
      "resolved": "https://registry.npmjs.org/@prisma/adapter-pg/-/adapter-pg-7.8.0.tgz",
      "integrity": "sha512-ygb3UkerK3v8MDpXVgCISdRNDozpxh6+JVJgiIGbSr5KBgz10LLf5ejUskPGoXlsIjxsOu6nuy1JVQr2EKGSlg==",
      "license": "Apache-2.0",
      "dependencies": {
        "@prisma/driver-adapter-utils": "7.8.0",
        "@types/pg": "^8.16.0",
        "pg": "^8.16.3",
        "postgres-array": "3.0.4"
      }
    },
    "node_modules/@prisma/client": {
      "version": "7.8.0",
      "resolved": "https://registry.npmjs.org/@prisma/client/-/client-7.8.0.tgz",
      "integrity": "sha512-HFp3Dawv/3sU3JtlPha90IB+48lS7zHiH4LKZPjmcE8YH5P9DOXGPvo8dqOtO7MqLDd1p2hOWMcFlRT1DMblHw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@prisma/client-runtime-utils": "7.8.0"
      },
      "engines": {
        "node": "^20.19 || ^22.12 || >=24.0"
      },
      "peerDependencies": {
        "prisma": "*",
        "typescript": ">=5.4.0"
      },
      "peerDependenciesMeta": {
        "prisma": {
          "optional": true
        },
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@prisma/client-runtime-utils": {
      "version": "7.8.0",
      "resolved": "https://registry.npmjs.org/@prisma/client-runtime-utils/-/client-runtime-utils-7.8.0.tgz",
      "integrity": "sha512-5NQZztQ0oY/ADFkmd9gPuweH5A1/CCY8YQPorLLO0Mu6a87mY5gsnDkzmFmIHs9NFaLnZojzgddFVN4RpKYrdw==",
      "license": "Apache-2.0"
    },
    "node_modules/@prisma/config": {
      "version": "7.8.0",
      "resolved": "https://registry.npmjs.org/@prisma/config/-/config-7.8.0.tgz",
      "integrity": "sha512-HFESzd9rx2ZQxlK+TL7tu1HPvCqrHiL6LCxYykI2c34mvaUuIVVl3lYuicJD/MNnzgPnyeBEMlK4WTomJCV5jw==",
      "devOptional": true,
      "license": "Apache-2.0",
      "dependencies": {
        "c12": "3.3.4",
        "deepmerge-ts": "7.1.5",
        "effect": "3.20.0",
        "empathic": "2.0.0"
      }
    },
    "node_modules/@prisma/debug": {
      "version": "7.8.0",
      "resolved": "https://registry.npmjs.org/@prisma/debug/-/debug-7.8.0.tgz",
      "integrity": "sha512-p+QZReysDUqXC+mk17q9a+Y/qzh4c2KYliDK30buYUyfrGeTGSyfmc0AIrJRhZJrLHhRiJa9Au/J72h3C+szvA==",
      "license": "Apache-2.0"
    },
    "node_modules/@prisma/dev": {
      "version": "0.24.3",
      "resolved": "https://registry.npmjs.org/@prisma/dev/-/dev-0.24.3.tgz",
      "integrity": "sha512-ffHlQuKXZiaDt9Go0OnCTdJZrHxK0k7omJKNV86/VjpsXu5EIHZLK0T7JSWgvNlJwh56kW9JFu9v0qJciFzepg==",
      "devOptional": true,
      "license": "ISC",
      "dependencies": {
        "@electric-sql/pglite": "0.4.1",
        "@electric-sql/pglite-socket": "0.1.1",
        "@electric-sql/pglite-tools": "0.3.1",
        "@hono/node-server": "1.19.11",
        "@prisma/get-platform": "7.2.0",
        "@prisma/query-plan-executor": "7.2.0",
        "@prisma/streams-local": "0.1.2",
        "foreground-child": "3.3.1",
        "get-port-please": "3.2.0",
        "hono": "^4.12.8",
        "http-status-codes": "2.3.0",
        "pathe": "2.0.3",
        "proper-lockfile": "4.1.2",
        "remeda": "2.33.4",
        "std-env": "3.10.0",
        "valibot": "1.2.0",
        "zeptomatch": "2.1.0"
      }
    },
    "node_modules/@prisma/driver-adapter-utils": {
      "version": "7.8.0",
      "resolved": "https://registry.npmjs.org/@prisma/driver-adapter-utils/-/driver-adapter-utils-7.8.0.tgz",
      "integrity": "sha512-/Q13o0ZT0rjc1Xk0Q9KhZYwuq2EW/vSbWUBKfgEKkaCuB/Sg6bqnjmTZqC5cD4d6y1vfFAEwBRzfzoSMIVJ55A==",
      "license": "Apache-2.0",
      "dependencies": {
        "@prisma/debug": "7.8.0"
      }
    },
    "node_modules/@prisma/engines": {
      "version": "7.8.0",
      "resolved": "https://registry.npmjs.org/@prisma/engines/-/engines-7.8.0.tgz",
      "integrity": "sha512-jx3rCnNNrt5uzbkKlegtQ2GZHxSlihMCzutgT/BP6UIDF1r9tDI39hV/0T/cHZgzJ3ELbuQPXlVZy+Y1n0pcgw==",
      "devOptional": true,
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@prisma/debug": "7.8.0",
        "@prisma/engines-version": "7.8.0-6.3c6e192761c0362d496ed980de936e2f3cebcd3a",
        "@prisma/fetch-engine": "7.8.0",
        "@prisma/get-platform": "7.8.0"
      }
    },
    "node_modules/@prisma/engines-version": {
      "version": "7.8.0-6.3c6e192761c0362d496ed980de936e2f3cebcd3a",
      "resolved": "https://registry.npmjs.org/@prisma/engines-version/-/engines-version-7.8.0-6.3c6e192761c0362d496ed980de936e2f3cebcd3a.tgz",
      "integrity": "sha512-fJPQxCkLgA5EayWaW8eArgCvjJ+N+Kz3VyeNKMEeYiQC4alNkxRKFVAGxv/ZUzuJISKqdw+zGeDbS6mn6RCPOA==",
      "devOptional": true,
      "license": "Apache-2.0"
    },
    "node_modules/@prisma/engines/node_modules/@prisma/get-platform": {
      "version": "7.8.0",
      "resolved": "https://registry.npmjs.org/@prisma/get-platform/-/get-platform-7.8.0.tgz",
      "integrity": "sha512-WlxgRGnolL8VH2EmkH1R/DkKNr/mVdS3G2h42IZFFZ3eUrH9OT6t73kIOSlkkrv50wG123Iq8d96ufv5LlZktw==",
      "devOptional": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@prisma/debug": "7.8.0"
      }
    },
    "node_modules/@prisma/fetch-engine": {
      "version": "7.8.0",
      "resolved": "https://registry.npmjs.org/@prisma/fetch-engine/-/fetch-engine-7.8.0.tgz",
      "integrity": "sha512-gwB0Euiz/DDRyxFRpLXYlK3RfaZUj1c5dAYMuhZYfApg7arknJlcb9bIsOHDppJmbqYaVA+yBIiFMDBfprsNPQ==",
      "devOptional": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@prisma/debug": "7.8.0",
        "@prisma/engines-version": "7.8.0-6.3c6e192761c0362d496ed980de936e2f3cebcd3a",
        "@prisma/get-platform": "7.8.0"
      }
    },
    "node_modules/@prisma/fetch-engine/node_modules/@prisma/get-platform": {
      "version": "7.8.0",
      "resolved": "https://registry.npmjs.org/@prisma/get-platform/-/get-platform-7.8.0.tgz",
      "integrity": "sha512-WlxgRGnolL8VH2EmkH1R/DkKNr/mVdS3G2h42IZFFZ3eUrH9OT6t73kIOSlkkrv50wG123Iq8d96ufv5LlZktw==",
      "devOptional": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@prisma/debug": "7.8.0"
      }
    },
    "node_modules/@prisma/get-platform": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/@prisma/get-platform/-/get-platform-7.2.0.tgz",
      "integrity": "sha512-k1V0l0Td1732EHpAfi2eySTezyllok9dXb6UQanajkJQzPUGi3vO2z7jdkz67SypFTdmbnyGYxvEvYZdZsMAVA==",
      "devOptional": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@prisma/debug": "7.2.0"
      }
    },
    "node_modules/@prisma/get-platform/node_modules/@prisma/debug": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/@prisma/debug/-/debug-7.2.0.tgz",
      "integrity": "sha512-YSGTiSlBAVJPzX4ONZmMotL+ozJwQjRmZweQNIq/ER0tQJKJynNkRB3kyvt37eOfsbMCXk3gnLF6J9OJ4QWftw==",
      "devOptional": true,
      "license": "Apache-2.0"
    },
    "node_modules/@prisma/query-plan-executor": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/@prisma/query-plan-executor/-/query-plan-executor-7.2.0.tgz",
      "integrity": "sha512-EOZmNzcV8uJ0mae3DhTsiHgoNCuu1J9mULQpGCh62zN3PxPTd+qI9tJvk5jOst8WHKQNwJWR3b39t0XvfBB0WQ==",
      "devOptional": true,
      "license": "Apache-2.0"
    },
    "node_modules/@prisma/streams-local": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/@prisma/streams-local/-/streams-local-0.1.2.tgz",
      "integrity": "sha512-l49yTxKKF2odFxaAXTmwmkBKL3+bVQ1tFOooGifu4xkdb9NMNLxHj27XAhTylWZod8I+ISGM5erU1xcl/oBCtg==",
      "devOptional": true,
      "license": "Apache-2.0",
      "dependencies": {
        "ajv": "^8.12.0",
        "better-result": "^2.7.0",
        "env-paths": "^3.0.0",
        "proper-lockfile": "^4.1.2"
      },
      "engines": {
        "bun": ">=1.3.6",
        "node": ">=22.0.0"
      }
    },
    "node_modules/@prisma/studio-core": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@prisma/studio-core/-/studio-core-0.27.3.tgz",
      "integrity": "sha512-AADjNFPdsrglxHQVTmHFqv6DuKQZ5WY4p5/gVFY017twvNrSwpLJ9lqUbYYxEu2W7nbvVxTZA8deJ8LseNALsw==",
      "devOptional": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@radix-ui/react-toggle": "1.1.10",
        "chart.js": "4.5.1"
      },
      "engines": {
        "node": "^20.19 || ^22.12 || >=24.0",
        "pnpm": "8"
      },
      "peerDependencies": {
        "@types/react": "^18.0.0 || ^19.0.0",
        "react": "^18.0.0 || ^19.0.0",
        "react-dom": "^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/@radix-ui/primitive": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/primitive/-/primitive-1.1.3.tgz",
      "integrity": "sha512-JTF99U/6XIjCBo0wqkU5sK10glYe27MRRsfwoiq5zzOEZLHU3A3KCMa5X/azekYRCJ0HlwI0crAXS/5dEHTzDg==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/@radix-ui/react-compose-refs": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-compose-refs/-/react-compose-refs-1.1.2.tgz",
      "integrity": "sha512-z4eqJvfiNnFMHIIvXP3CY57y2WJs5g2v3X0zm9mEJkrkNv4rDxu+sg9Jh8EkXyeqBkB7SOcboo9dMVqhyrACIg==",
      "devOptional": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-primitive": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.1.3.tgz",
      "integrity": "sha512-m9gTwRkhy2lvCPe6QJp4d3G1TYEUHn/FzJUtq9MjH46an1wJU+GdoGC5VLof8RX8Ft/DlpshApkhswDLZzHIcQ==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-slot": "1.2.3"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-slot": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.2.3.tgz",
      "integrity": "sha512-aeNmHnBxbi2St0au6VBVC7JXFlhLlOnvIIlePNniyUNAClzmtAUEY8/pBiK3iHjufOlwA+c20/8jngo7xcrg8A==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-compose-refs": "1.1.2"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-toggle": {
      "version": "1.1.10",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-toggle/-/react-toggle-1.1.10.tgz",
      "integrity": "sha512-lS1odchhFTeZv3xwHH31YPObmJn8gOg7Lq12inrr0+BH/l3Tsq32VfjqH1oh80ARM3mlkfMic15n0kg4sD1poQ==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "@radix-ui/primitive": "1.1.3",
        "@radix-ui/react-primitive": "2.1.3",
        "@radix-ui/react-use-controllable-state": "1.2.2"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-use-controllable-state": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-controllable-state/-/react-use-controllable-state-1.2.2.tgz",
      "integrity": "sha512-BjasUjixPFdS+NKkypcyyN5Pmg83Olst0+c6vGov0diwTEo6mgdqVR6hxcEgFuh4QrAs7Rc+9KuGJ9TVCj0Zzg==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-use-effect-event": "0.0.2",
        "@radix-ui/react-use-layout-effect": "1.1.1"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-use-effect-event": {
      "version": "0.0.2",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-effect-event/-/react-use-effect-event-0.0.2.tgz",
      "integrity": "sha512-Qp8WbZOBe+blgpuUT+lw2xheLP8q0oatc9UpmiemEICxGvFLYmHm9QowVZGHtJlGbS6A6yJ3iViad/2cVjnOiA==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-use-layout-effect": "1.1.1"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-use-layout-effect": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-layout-effect/-/react-use-layout-effect-1.1.1.tgz",
      "integrity": "sha512-RbJRS4UWQFkzHTTwVymMTUv8EqYhOp8dOOviLj2ugtTiXRaRQS7GLGxZTLL1jWhMeoSCf5zmcZkqTl9IiYfXcQ==",
      "devOptional": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@standard-schema/spec": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@standard-schema/spec/-/spec-1.1.0.tgz",
      "integrity": "sha512-l2aFy5jALhniG5HgqrD6jXLi/rUWrKvqN/qJx6yoJsgKhblVd+iqqU4RCXavm/jPityDo5TCvKMnpjKnOriy0w==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/@types/bcrypt": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/@types/bcrypt/-/bcrypt-6.0.0.tgz",
      "integrity": "sha512-/oJGukuH3D2+D+3H4JWLaAsJ/ji86dhRidzZ/Od7H/i8g+aCmvkeCc6Ni/f9uxGLSQVCRZkX2/lqEFG2BvWtlQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/node": {
      "version": "26.0.1",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-26.0.1.tgz",
      "integrity": "sha512-fc3KiUoBt6kie0N9bIW3E47vZsuaMf0PM2AaUpLCLT0s/LvX1nxAim6Fc049cNxODPpGm6qRAuUOB86SkRuPQw==",
      "license": "MIT",
      "dependencies": {
        "undici-types": "~8.3.0"
      }
    },
    "node_modules/@types/pg": {
      "version": "8.20.0",
      "resolved": "https://registry.npmjs.org/@types/pg/-/pg-8.20.0.tgz",
      "integrity": "sha512-bEPFOaMAHTEP1EzpvHTbmwR8UsFyHSKsRisLIHVMXnpNefSbGA1bD6CVy+qKjGSqmZqNqBDV2azOBo8TgkcVow==",
      "license": "MIT",
      "dependencies": {
        "@types/node": "*",
        "pg-protocol": "*",
        "pg-types": "^2.2.0"
      }
    },
    "node_modules/@types/react": {
      "version": "19.2.17",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-19.2.17.tgz",
      "integrity": "sha512-MXfmqaVPEVgkBT/aY0aGCkRWWtByiYQXo3xdQ8r5RzuFrPiRn8Gar2tQdXSUQ2GKV3bkXckek89V8wQBY2Q/Aw==",
      "devOptional": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "csstype": "^3.2.2"
      }
    },
    "node_modules/abstract-logging": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/abstract-logging/-/abstract-logging-2.0.1.tgz",
      "integrity": "sha512-2BjRTZxTPvheOvGbBslFSYOUkr+SjPtOnrLP33f+VIWLzezQpZcqVg7ja3L4dBXmzzgwT+a029jRx5PCi3JuiA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/ajv": {
      "version": "8.20.0",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-8.20.0.tgz",
      "integrity": "sha512-Thbli+OlOj+iMPYFBVBfJ3OmCAnaSyNn4M1vz9T6Gka5Jt9ba/HIR56joy65tY6kx/FCF5VXNB819Y7/GUrBGA==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.3",
        "fast-uri": "^3.0.1",
        "json-schema-traverse": "^1.0.0",
        "require-from-string": "^2.0.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/ajv-formats": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/ajv-formats/-/ajv-formats-3.0.1.tgz",
      "integrity": "sha512-8iUql50EUR+uUcdRQ3HDqa6EVyo3docL8g5WJ3FNcWmu62IbkGUue/pEyLBW8VGKKucTPgqeks4fIU1DA4yowQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ajv": "^8.0.0"
      },
      "peerDependencies": {
        "ajv": "^8.0.0"
      },
      "peerDependenciesMeta": {
        "ajv": {
          "optional": true
        }
      }
    },
    "node_modules/asn1.js": {
      "version": "5.4.1",
      "resolved": "https://registry.npmjs.org/asn1.js/-/asn1.js-5.4.1.tgz",
      "integrity": "sha512-+I//4cYPccV8LdmBLiX8CYvf9Sp3vQsrqu2QNXRcrbiWvcx/UdlFiqUJJzxRQxgsZmvhXhn4cSKeSmoFjVdupA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "bn.js": "^4.0.0",
        "inherits": "^2.0.1",
        "minimalistic-assert": "^1.0.0",
        "safer-buffer": "^2.1.0"
      }
    },
    "node_modules/atomic-sleep": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/atomic-sleep/-/atomic-sleep-1.0.0.tgz",
      "integrity": "sha512-kNOjDqAh7px0XWNI+4QbzoiR/nTkHAWNud2uvnJquD1/x5a7EQZMJT0AczqK0Qn67oY/TTQ1LbUKajZpp3I9tQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/avvio": {
      "version": "9.2.0",
      "resolved": "https://registry.npmjs.org/avvio/-/avvio-9.2.0.tgz",
      "integrity": "sha512-2t/sy01ArdHHE0vRH5Hsay+RtCZt3dLPji7W7/MMOCEgze5b7SNDC4j5H6FnVgPkI1MTNFGzHdHrVXDDl7QSSQ==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fastify"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fastify"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@fastify/error": "^4.0.0",
        "fastq": "^1.17.1"
      }
    },
    "node_modules/aws-ssl-profiles": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/aws-ssl-profiles/-/aws-ssl-profiles-1.1.2.tgz",
      "integrity": "sha512-NZKeq9AfyQvEeNlN0zSYAaWrmBffJh3IELMZfRpJVWgrpEbtEpnjvzqBPf+mxoI287JohRDoa+/nsfqqiZmF6g==",
      "devOptional": true,
      "license": "MIT",
      "engines": {
        "node": ">= 6.0.0"
      }
    },
    "node_modules/balanced-match": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-4.0.4.tgz",
      "integrity": "sha512-BLrgEcRTwX2o6gGxGOCNyMvGSp35YofuYzw9h1IMTRmKqttAZZVU67bdb9Pr2vUHA8+j3i2tJfjO6C6+4myGTA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "18 || 20 || >=22"
      }
    },
    "node_modules/bcrypt": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/bcrypt/-/bcrypt-6.0.0.tgz",
      "integrity": "sha512-cU8v/EGSrnH+HnxV2z0J7/blxH8gq7Xh2JFT6Aroax7UohdmiJJlxApMxtKfuI7z68NvvVcmR78k2LbT6efhRg==",
      "hasInstallScript": true,
      "license": "MIT",
      "dependencies": {
        "node-addon-api": "^8.3.0",
        "node-gyp-build": "^4.8.4"
      },
      "engines": {
        "node": ">= 18"
      }
    },
    "node_modules/better-result": {
      "version": "2.9.2",
      "resolved": "https://registry.npmjs.org/better-result/-/better-result-2.9.2.tgz",
      "integrity": "sha512-WIFoBPCdnTOdk9inkE1ZRvCZ4P0CpSkAiLlchC65N7n9DcjZ3NhqkBOlafzpOVnO8ixyi37kicmSJ3ENhPZl7Q==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/bn.js": {
      "version": "4.12.4",
      "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.12.4.tgz",
      "integrity": "sha512-njR1b+ixG2ufvL9Zn9JGneW+b5GV6jqpYyPPpg4QVt723b5kJPGUczkUyWEH9BwEA74UakJZ43I4FDLBF7ci0g==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/brace-expansion": {
      "version": "5.0.6",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-5.0.6.tgz",
      "integrity": "sha512-kLpxurY4Z4r9sgMsyG0Z9uzsBlgiU/EFKhj/h91/8yHu0edo7XuixOIH3VcJ8kkxs6/jPzoI6U9Vj3WqbMQ94g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^4.0.2"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      }
    },
    "node_modules/c12": {
      "version": "3.3.4",
      "resolved": "https://registry.npmjs.org/c12/-/c12-3.3.4.tgz",
      "integrity": "sha512-cM0ApFQSBXuourJejzwv/AuPRvAxordTyParRVcHjjtXirtkzM0uK2L9TTn9s0cXZbG7E55jCivRQzoxYmRAlA==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "chokidar": "^5.0.0",
        "confbox": "^0.2.4",
        "defu": "^6.1.6",
        "dotenv": "^17.3.1",
        "exsolve": "^1.0.8",
        "giget": "^3.2.0",
        "jiti": "^2.6.1",
        "ohash": "^2.0.11",
        "pathe": "^2.0.3",
        "perfect-debounce": "^2.1.0",
        "pkg-types": "^2.3.0",
        "rc9": "^3.0.1"
      },
      "peerDependencies": {
        "magicast": "*"
      },
      "peerDependenciesMeta": {
        "magicast": {
          "optional": true
        }
      }
    },
    "node_modules/chart.js": {
      "version": "4.5.1",
      "resolved": "https://registry.npmjs.org/chart.js/-/chart.js-4.5.1.tgz",
      "integrity": "sha512-GIjfiT9dbmHRiYi6Nl2yFCq7kkwdkp1W/lp2J99rX0yo9tgJGn3lKQATztIjb5tVtevcBtIdICNWqlq5+E8/Pw==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "@kurkle/color": "^0.3.0"
      },
      "engines": {
        "pnpm": ">=8"
      }
    },
    "node_modules/chokidar": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-5.0.0.tgz",
      "integrity": "sha512-TQMmc3w+5AxjpL8iIiwebF73dRDF4fBIieAqGn9RGCWaEVwQ6Fb2cGe31Yns0RRIzii5goJ1Y7xbMwo1TxMplw==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "readdirp": "^5.0.0"
      },
      "engines": {
        "node": ">= 20.19.0"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      }
    },
    "node_modules/colorette": {
      "version": "2.0.20",
      "resolved": "https://registry.npmjs.org/colorette/-/colorette-2.0.20.tgz",
      "integrity": "sha512-IfEDxwoWIjkeXL1eXcDiow4UbKjhLdq6/EuSVR9GMN7KVH3r9gQ83e73hsz1Nd1T3ijd5xv1wcWRYO+D6kCI2w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/confbox": {
      "version": "0.2.4",
      "resolved": "https://registry.npmjs.org/confbox/-/confbox-0.2.4.tgz",
      "integrity": "sha512-ysOGlgTFbN2/Y6Cg3Iye8YKulHw+R2fNXHrgSmXISQdMnomY6eNDprVdW9R5xBguEqI954+S6709UyiO7B+6OQ==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/content-disposition": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-1.1.0.tgz",
      "integrity": "sha512-5jRCH9Z/+DRP7rkvY83B+yGIGX96OYdJmzngqnw2SBSxqCFPd0w2km3s5iawpGX8krnwSGmF0FW5Nhr0Hfai3g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/cookie": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-1.1.1.tgz",
      "integrity": "sha512-ei8Aos7ja0weRpFzJnEA9UHJ/7XQmqglbRwnf2ATjcB9Wq874VKH9kfjjirM6UhU2/E5fFYadylyhFldcqSidQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
      "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/csstype": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",
      "integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==",
      "devOptional": true,
      "license": "MIT",
      "peer": true
    },
    "node_modules/dateformat": {
      "version": "4.6.3",
      "resolved": "https://registry.npmjs.org/dateformat/-/dateformat-4.6.3.tgz",
      "integrity": "sha512-2P0p0pFGzHS5EMnhdxQi7aJN+iMheud0UhG4dlE1DLAlvL8JHjJJTX/CSm4JXwV0Ka5nGk3zC5mcb5bUQUxxMA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "*"
      }
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/deepmerge-ts": {
      "version": "7.1.5",
      "resolved": "https://registry.npmjs.org/deepmerge-ts/-/deepmerge-ts-7.1.5.tgz",
      "integrity": "sha512-HOJkrhaYsweh+W+e74Yn7YStZOilkoPb6fycpwNLKzSPtruFs48nYis0zy5yJz1+ktUhHxoRDJ27RQAWLIJVJw==",
      "devOptional": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/defu": {
      "version": "6.1.7",
      "resolved": "https://registry.npmjs.org/defu/-/defu-6.1.7.tgz",
      "integrity": "sha512-7z22QmUWiQ/2d0KkdYmANbRUVABpZ9SNYyH5vx6PZ+nE5bcC0l7uFvEfHlyld/HcGBFTL536ClDt3DEcSlEJAQ==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/denque": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/denque/-/denque-2.1.0.tgz",
      "integrity": "sha512-HVQE3AAb/pxF8fQAoiqpvg9i3evqug3hoiwakOyZAwJm+6vZehbkYXZ0l4JxS+I3QxM97v5aaRNhj8v5oBhekw==",
      "devOptional": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/depd": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
      "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/dequal": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/dequal/-/dequal-2.0.3.tgz",
      "integrity": "sha512-0je+qPKHEMohvfRTCEo3CrPG6cAzAYgmzKyxRiYSSDkS6eGJdyVJm7WaYA5ECaAD9wLB2T4EEeymA5aFVcYXCA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/destr": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/destr/-/destr-2.0.5.tgz",
      "integrity": "sha512-ugFTXCtDZunbzasqBxrK93Ik/DRYsO6S/fedkWEMKqt04xZ4csmnmwGDBAb07QWNaGMAmnTIemsYZCksjATwsA==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/dotenv": {
      "version": "17.4.2",
      "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-17.4.2.tgz",
      "integrity": "sha512-nI4U3TottKAcAD9LLud4Cb7b2QztQMUEfHbvhTH09bqXTxnSie8WnjPALV/WMCrJZ6UV/qHJ6L03OqO3LcdYZw==",
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://dotenvx.com"
      }
    },
    "node_modules/ecdsa-sig-formatter": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/ecdsa-sig-formatter/-/ecdsa-sig-formatter-1.0.11.tgz",
      "integrity": "sha512-nagl3RYrbNv6kQkeJIpt6NJZy8twLB/2vtz6yN9Z4vRKHN4/QZJIEbqohALSgwKdnksuY3k5Addp5lg8sVoVcQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/effect": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/effect/-/effect-3.20.0.tgz",
      "integrity": "sha512-qMLfDJscrNG8p/aw+IkT9W7fgj50Z4wG5bLBy0Txsxz8iUHjDIkOgO3SV0WZfnQbNG2VJYb0b+rDLMrhM4+Krw==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "@standard-schema/spec": "^1.0.0",
        "fast-check": "^3.23.1"
      }
    },
    "node_modules/empathic": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/empathic/-/empathic-2.0.0.tgz",
      "integrity": "sha512-i6UzDscO/XfAcNYD75CfICkmfLedpyPDdozrLMmQc5ORaQcdMoc21OnlEylMIqI7U8eniKrPMxxtj8k0vhmJhA==",
      "devOptional": true,
      "license": "MIT",
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/end-of-stream": {
      "version": "1.4.5",
      "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.5.tgz",
      "integrity": "sha512-ooEGc6HP26xXq/N+GCGOT0JKCLDGrq2bQUZrQ7gyrJiZANJ/8YDTxTpQBXGMn+WbIQXNVpyWymm7KYVICQnyOg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "once": "^1.4.0"
      }
    },
    "node_modules/env-paths": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/env-paths/-/env-paths-3.0.0.tgz",
      "integrity": "sha512-dtJUTepzMW3Lm/NPxRf3wP4642UWhjL2sQxc+ym2YMj1m/H2zDNQOlezafzkHwn6sMstjHTwG6iQQsctDW/b1A==",
      "devOptional": true,
      "license": "MIT",
      "engines": {
        "node": "^12.20.0 || ^14.13.1 || >=16.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/esbuild": {
      "version": "0.28.1",
      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.28.1.tgz",
      "integrity": "sha512-HrJrvZv5ayxBzPfwphOoNzkzOIIlifzk0KJrGK2c8R4+LKpMtpYLQeUdjnwjWv/LZlkH2laZk+4w78pi99D4Vw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=18"
      },
      "optionalDependencies": {
        "@esbuild/aix-ppc64": "0.28.1",
        "@esbuild/android-arm": "0.28.1",
        "@esbuild/android-arm64": "0.28.1",
        "@esbuild/android-x64": "0.28.1",
        "@esbuild/darwin-arm64": "0.28.1",
        "@esbuild/darwin-x64": "0.28.1",
        "@esbuild/freebsd-arm64": "0.28.1",
        "@esbuild/freebsd-x64": "0.28.1",
        "@esbuild/linux-arm": "0.28.1",
        "@esbuild/linux-arm64": "0.28.1",
        "@esbuild/linux-ia32": "0.28.1",
        "@esbuild/linux-loong64": "0.28.1",
        "@esbuild/linux-mips64el": "0.28.1",
        "@esbuild/linux-ppc64": "0.28.1",
        "@esbuild/linux-riscv64": "0.28.1",
        "@esbuild/linux-s390x": "0.28.1",
        "@esbuild/linux-x64": "0.28.1",
        "@esbuild/netbsd-arm64": "0.28.1",
        "@esbuild/netbsd-x64": "0.28.1",
        "@esbuild/openbsd-arm64": "0.28.1",
        "@esbuild/openbsd-x64": "0.28.1",
        "@esbuild/openharmony-arm64": "0.28.1",
        "@esbuild/sunos-x64": "0.28.1",
        "@esbuild/win32-arm64": "0.28.1",
        "@esbuild/win32-ia32": "0.28.1",
        "@esbuild/win32-x64": "0.28.1"
      }
    },
    "node_modules/escape-html": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
      "integrity": "sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/exsolve": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/exsolve/-/exsolve-1.1.0.tgz",
      "integrity": "sha512-D+42+T12DdIlJM3uepa55qGiL3sYdLBOxIl2ifQCzCHz4c7eiolaHsi3BIqEr7JxBzxv2pYZQX9kw16ziMcEmw==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/fast-check": {
      "version": "3.23.2",
      "resolved": "https://registry.npmjs.org/fast-check/-/fast-check-3.23.2.tgz",
      "integrity": "sha512-h5+1OzzfCC3Ef7VbtKdcv7zsstUQwUDlYpUTvjeUsJAssPgLn7QzbboPtL5ro04Mq0rPOsMzl7q5hIbRs2wD1A==",
      "devOptional": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://github.com/sponsors/dubzzz"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fast-check"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "pure-rand": "^6.1.0"
      },
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/fast-copy": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/fast-copy/-/fast-copy-4.0.3.tgz",
      "integrity": "sha512-58apWr0GUiDFM8+3afrO6eYwJBn9ZAhDOzG3L+/9llab/haCARS2UIfffmOurYLwbgDRs8n0rfr6qAAPEAuAQw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-decode-uri-component": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/fast-decode-uri-component/-/fast-decode-uri-component-1.0.1.tgz",
      "integrity": "sha512-WKgKWg5eUxvRZGwW8FvfbaH7AXSh2cL+3j5fMGzUMCxWBJ3dV3a7Wz8y2f/uQ0e3B6WmodD3oS54jTQ9HVTIIg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/fast-json-stringify": {
      "version": "6.4.0",
      "resolved": "https://registry.npmjs.org/fast-json-stringify/-/fast-json-stringify-6.4.0.tgz",
      "integrity": "sha512-ibRCQ0GZKJIQ+P3Et1h0LhPgp3PMTYk0MH8O+kW3lNYsvmaQww5Nn3f1jf73Q0jR1Yz3a1CDP4/NZD3vOajWJQ==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fastify"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fastify"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@fastify/merge-json-schemas": "^0.2.0",
        "ajv": "^8.12.0",
        "ajv-formats": "^3.0.1",
        "fast-uri": "^3.0.0",
        "json-schema-ref-resolver": "^3.0.0",
        "rfdc": "^1.2.0"
      }
    },
    "node_modules/fast-jwt": {
      "version": "6.2.4",
      "resolved": "https://registry.npmjs.org/fast-jwt/-/fast-jwt-6.2.4.tgz",
      "integrity": "sha512-IoQa53wI6TbARU2yelb0L44ggFQnP2qVcwswCSYHbCAWuwpr70icDb3QjG0v01I8Tt01rVGDkN/rRvpk0lKFTA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@lukeed/ms": "^2.0.2",
        "asn1.js": "^5.4.1",
        "ecdsa-sig-formatter": "^1.0.11",
        "mnemonist": "^0.40.0",
        "safe-regex2": "^5.1.0"
      },
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/fast-querystring": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/fast-querystring/-/fast-querystring-1.1.2.tgz",
      "integrity": "sha512-g6KuKWmFXc0fID8WWH0jit4g0AGBoJhCkJMb1RmbsSEUNvQ+ZC8D6CUZ+GtF8nMzSPXnhiePyyqqipzNNEnHjg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-decode-uri-component": "^1.0.1"
      }
    },
    "node_modules/fast-safe-stringify": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/fast-safe-stringify/-/fast-safe-stringify-2.1.1.tgz",
      "integrity": "sha512-W+KJc2dmILlPplD/H4K9l9LcAHAfPtP6BY84uVLXQ6Evcz9Lcg33Y2z1IVblT6xdY54PXYVHEv+0Wpq8Io6zkA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/fast-uri/-/fast-uri-3.1.2.tgz",
      "integrity": "sha512-rVjf7ArG3LTk+FS6Yw81V1DLuZl1bRbNrev6Tmd/9RaroeeRRJhAt7jg/6YFxbvAQXUCavSoZhPPj6oOx+5KjQ==",
      "devOptional": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fastify"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fastify"
        }
      ],
      "license": "BSD-3-Clause"
    },
    "node_modules/fastfall": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/fastfall/-/fastfall-1.5.1.tgz",
      "integrity": "sha512-KH6p+Z8AKPXnmA7+Iz2Lh8ARCMr+8WNPVludm1LGkZoD2MjY6LVnRMtTKhkdzI+jr0RzQWXKzKyBJm1zoHEL4Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "reusify": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/fastify": {
      "version": "5.8.5",
      "resolved": "https://registry.npmjs.org/fastify/-/fastify-5.8.5.tgz",
      "integrity": "sha512-Yqptv59pQzPgQUSIm87hMqHJmdkb1+GPxdE6vW6FRyVE9G86mt7rOghitiU4JHRaTyDUk9pfeKmDeu70lAwM4Q==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fastify"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fastify"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@fastify/ajv-compiler": "^4.0.5",
        "@fastify/error": "^4.0.0",
        "@fastify/fast-json-stringify-compiler": "^5.0.0",
        "@fastify/proxy-addr": "^5.0.0",
        "abstract-logging": "^2.0.1",
        "avvio": "^9.0.0",
        "fast-json-stringify": "^6.0.0",
        "find-my-way": "^9.0.0",
        "light-my-request": "^6.0.0",
        "pino": "^9.14.0 || ^10.1.0",
        "process-warning": "^5.0.0",
        "rfdc": "^1.3.1",
        "secure-json-parse": "^4.0.0",
        "semver": "^7.6.0",
        "toad-cache": "^3.7.0"
      }
    },
    "node_modules/fastify-plugin": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/fastify-plugin/-/fastify-plugin-5.1.0.tgz",
      "integrity": "sha512-FAIDA8eovSt5qcDgcBvDuX/v0Cjz0ohGhENZ/wpc3y+oZCY2afZ9Baqql3g/lC+OHRnciQol4ww7tuthOb9idw==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fastify"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fastify"
        }
      ],
      "license": "MIT"
    },
    "node_modules/fastparallel": {
      "version": "2.4.1",
      "resolved": "https://registry.npmjs.org/fastparallel/-/fastparallel-2.4.1.tgz",
      "integrity": "sha512-qUmhxPgNHmvRjZKBFUNI0oZuuH9OlSIOXmJ98lhKPxMZZ7zS/Fi0wRHOihDSz0R1YiIOjxzOY4bq65YTcdBi2Q==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "reusify": "^1.0.4",
        "xtend": "^4.0.2"
      }
    },
    "node_modules/fastq": {
      "version": "1.20.1",
      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.20.1.tgz",
      "integrity": "sha512-GGToxJ/w1x32s/D2EKND7kTil4n8OVk/9mycTc4VDza13lOvpUZTGX3mFSCtV9ksdGBVzvsyAVLM6mHFThxXxw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "reusify": "^1.0.4"
      }
    },
    "node_modules/fastseries": {
      "version": "1.7.2",
      "resolved": "https://registry.npmjs.org/fastseries/-/fastseries-1.7.2.tgz",
      "integrity": "sha512-dTPFrPGS8SNSzAt7u/CbMKCJ3s01N04s4JFbORHcmyvVfVKmbhMD1VtRbh5enGHxkaQDqWyLefiKOGGmohGDDQ==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "reusify": "^1.0.0",
        "xtend": "^4.0.0"
      }
    },
    "node_modules/find-my-way": {
      "version": "9.6.0",
      "resolved": "https://registry.npmjs.org/find-my-way/-/find-my-way-9.6.0.tgz",
      "integrity": "sha512-Zf4Xve4RymLl7NgaavNebZ01joJ8MfVerOG43wy7SHLO+r+K0C6d/SE0BiR7AV5V1VOCFlOP7ecdo+I4qmiHrQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.3",
        "fast-querystring": "^1.0.0",
        "safe-regex2": "^5.0.0"
      },
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/foreground-child": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/foreground-child/-/foreground-child-3.3.1.tgz",
      "integrity": "sha512-gIXjKqtFuWEgzFRJA9WCQeSJLZDjgJUOMCMzxtvFq/37KojM1BFGufqsCy0r4qSQmYLsZYMeyRqzIWOMup03sw==",
      "devOptional": true,
      "license": "ISC",
      "dependencies": {
        "cross-spawn": "^7.0.6",
        "signal-exit": "^4.0.1"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/generate-function": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/generate-function/-/generate-function-2.3.1.tgz",
      "integrity": "sha512-eeB5GfMNeevm/GRYq20ShmsaGcmI81kIX2K9XQx5miC8KdHaC6Jm0qQ8ZNeGOi7wYB8OsdxKs+Y2oVuTFuVwKQ==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "is-property": "^1.0.2"
      }
    },
    "node_modules/get-port-please": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/get-port-please/-/get-port-please-3.2.0.tgz",
      "integrity": "sha512-I9QVvBw5U/hw3RmWpYKRumUeaDgxTPd401x364rLmWBJcOQ753eov1eTgzDqRG9bqFIfDc7gfzcQEWrUri3o1A==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/giget": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/giget/-/giget-3.3.0.tgz",
      "integrity": "sha512-gzi2D96p+AMfDcmJHGDj3KJ9NRiwvlFAU5yfa3ROwWZmFUjX4P43x3BcyRaOMMLto1vUo7C+86+MFhYTl6Ryiw==",
      "devOptional": true,
      "license": "MIT",
      "bin": {
        "giget": "dist/cli.mjs"
      }
    },
    "node_modules/glob": {
      "version": "13.0.6",
      "resolved": "https://registry.npmjs.org/glob/-/glob-13.0.6.tgz",
      "integrity": "sha512-Wjlyrolmm8uDpm/ogGyXZXb1Z+Ca2B8NbJwqBVg0axK9GbBeoS7yGV6vjXnYdGm6X53iehEuxxbyiKp8QmN4Vw==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "minimatch": "^10.2.2",
        "minipass": "^7.1.3",
        "path-scurry": "^2.0.2"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
      "devOptional": true,
      "license": "ISC"
    },
    "node_modules/grammex": {
      "version": "3.1.12",
      "resolved": "https://registry.npmjs.org/grammex/-/grammex-3.1.12.tgz",
      "integrity": "sha512-6ufJOsSA7LcQehIJNCO7HIBykfM7DXQual0Ny780/DEcJIpBlHRvcqEBWGPYd7hrXL2GJ3oJI1MIhaXjWmLQOQ==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/graphmatch": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/graphmatch/-/graphmatch-1.1.1.tgz",
      "integrity": "sha512-5ykVn/EXM1hF0XCaWh05VbYvEiOL2lY1kBxZtaYsyvjp7cmWOU1XsAdfQBwClraEofXDT197lFbXOEVMHpvQOg==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/helmet": {
      "version": "8.2.0",
      "resolved": "https://registry.npmjs.org/helmet/-/helmet-8.2.0.tgz",
      "integrity": "sha512-DRgTIUgnWcJ62KyarxxziuqYxKGnR6Rgg19BlbucN/dpmJbl1XOit6qvoOX0ZT+HhWe5OUVhU/a1zpGyc1xA0Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/EvanHahn"
      }
    },
    "node_modules/help-me": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/help-me/-/help-me-5.0.0.tgz",
      "integrity": "sha512-7xgomUX6ADmcYzFik0HzAxh/73YlKR9bmFzf51CZwR+b6YtzU2m0u49hQCqV6SvlqIqsaxovfwdvbnsw3b/zpg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/hono": {
      "version": "4.12.27",
      "resolved": "https://registry.npmjs.org/hono/-/hono-4.12.27.tgz",
      "integrity": "sha512-1yrb/+w6HWQJrUCLkJ2IF5jNIPvvFkblV5RNOYl6bV+OA6p9GLcMpHFFGTosSvHvcAUibuUukRqhlYI4z32C7Q==",
      "devOptional": true,
      "license": "MIT",
      "engines": {
        "node": ">=16.9.0"
      }
    },
    "node_modules/http-errors": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.1.tgz",
      "integrity": "sha512-4FbRdAX+bSdmo4AUFuS0WNiPz8NgFt+r8ThgNWmlrjQjt1Q7ZR9+zTlce2859x4KSXrwIsaeTqDoKQmtP8pLmQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "depd": "~2.0.0",
        "inherits": "~2.0.4",
        "setprototypeof": "~1.2.0",
        "statuses": "~2.0.2",
        "toidentifier": "~1.0.1"
      },
      "engines": {
        "node": ">= 0.8"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/http-status-codes": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/http-status-codes/-/http-status-codes-2.3.0.tgz",
      "integrity": "sha512-RJ8XvFvpPM/Dmc5SV+dC4y5PCeOhT3x1Hq0NU3rjGeg5a/CqlhZ7uudknPwZFz4aeAXDcbAyaeP7GAo9lvngtA==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/iconv-lite": {
      "version": "0.7.2",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.7.2.tgz",
      "integrity": "sha512-im9DjEDQ55s9fL4EYzOAv0yMqmMBSZp6G0VvFyTMPKWxiSBHUj9NW/qqLmXUwXrrM7AvqSlTCfvqRb0cM8yYqw==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "safer-buffer": ">= 2.1.2 < 3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/ipaddr.js": {
      "version": "2.4.0",
      "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-2.4.0.tgz",
      "integrity": "sha512-9VGk3HGanVE6JoZXHiCpnGy5X0jYDnN4EA4lntFPj+1vIWlFhIylq2CrrCOJH9EAhc5CYhq18F2Av2tgoAPsYQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/is-property": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-property/-/is-property-1.0.2.tgz",
      "integrity": "sha512-Ks/IoX00TtClbGQr4TWXemAnktAQvYB7HzcCxDGqEZU6oCmb2INHuOoKxbtR+HFkmYWBKv/dOZtGRiAjDhj92g==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "devOptional": true,
      "license": "ISC"
    },
    "node_modules/jiti": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/jiti/-/jiti-2.7.0.tgz",
      "integrity": "sha512-AC/7JofJvZGrrneWNaEnJeOLUx+JlGt7tNa0wZiRPT4MY1wmfKjt2+6O2p2uz2+skll8OZZmJMNqeke7kKbNgQ==",
      "devOptional": true,
      "license": "MIT",
      "bin": {
        "jiti": "lib/jiti-cli.mjs"
      }
    },
    "node_modules/joycon": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/joycon/-/joycon-3.1.1.tgz",
      "integrity": "sha512-34wB/Y7MW7bzjKRjUKTa46I2Z7eV62Rkhva+KkopW7Qvv/OSWBqvkSY7vusOPrNuZcUG3tApvdVgNB8POj3SPw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/json-schema-ref-resolver": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/json-schema-ref-resolver/-/json-schema-ref-resolver-3.0.0.tgz",
      "integrity": "sha512-hOrZIVL5jyYFjzk7+y7n5JDzGlU8rfWDuYyHwGa2WA8/pcmMHezp2xsVwxrebD/Q9t8Nc5DboieySDpCp4WG4A==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fastify"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fastify"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "dequal": "^2.0.3"
      }
    },
    "node_modules/json-schema-resolver": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/json-schema-resolver/-/json-schema-resolver-3.0.0.tgz",
      "integrity": "sha512-HqMnbz0tz2DaEJ3ntsqtx3ezzZyDE7G56A/pPY/NGmrPu76UzsWquOpHFRAf5beTNXoH2LU5cQePVvRli1nchA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "debug": "^4.1.1",
        "fast-uri": "^3.0.5",
        "rfdc": "^1.1.4"
      },
      "engines": {
        "node": ">=20"
      },
      "funding": {
        "url": "https://github.com/Eomm/json-schema-resolver?sponsor=1"
      }
    },
    "node_modules/json-schema-traverse": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-1.0.0.tgz",
      "integrity": "sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/light-my-request": {
      "version": "6.6.0",
      "resolved": "https://registry.npmjs.org/light-my-request/-/light-my-request-6.6.0.tgz",
      "integrity": "sha512-CHYbu8RtboSIoVsHZ6Ye4cj4Aw/yg2oAFimlF7mNvfDV192LR7nDiKtSIfCuLT7KokPSTn/9kfVLm5OGN0A28A==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fastify"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fastify"
        }
      ],
      "license": "BSD-3-Clause",
      "dependencies": {
        "cookie": "^1.0.1",
        "process-warning": "^4.0.0",
        "set-cookie-parser": "^2.6.0"
      }
    },
    "node_modules/light-my-request/node_modules/process-warning": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/process-warning/-/process-warning-4.0.1.tgz",
      "integrity": "sha512-3c2LzQ3rY9d0hc1emcsHhfT9Jwz0cChib/QN89oME2R451w5fy3f0afAhERFZAwrbDU43wk12d0ORBpDVME50Q==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fastify"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fastify"
        }
      ],
      "license": "MIT"
    },
    "node_modules/long": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/long/-/long-5.3.2.tgz",
      "integrity": "sha512-mNAgZ1GmyNhD7AuqnTG3/VQ26o760+ZYBPKjPvugO8+nLbYfX6TVpJPseBvopbdY+qpZ/lKUnmEc1LeZYS3QAA==",
      "devOptional": true,
      "license": "Apache-2.0"
    },
    "node_modules/lru-cache": {
      "version": "11.5.1",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-11.5.1.tgz",
      "integrity": "sha512-RPimw/7aMdv2oqRrxKwvZXcPfwBrn/JZ2xYcY9Hus/6LaS3VOAKVWKWgNLCFSiOm1ESXinjsDlidVU7JlnCN2A==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "engines": {
        "node": "20 || >=22"
      }
    },
    "node_modules/lru.min": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/lru.min/-/lru.min-1.1.4.tgz",
      "integrity": "sha512-DqC6n3QQ77zdFpCMASA1a3Jlb64Hv2N2DciFGkO/4L9+q/IpIAuRlKOvCXabtRW6cQf8usbmM6BE/TOPysCdIA==",
      "devOptional": true,
      "license": "MIT",
      "engines": {
        "bun": ">=1.0.0",
        "deno": ">=1.30.0",
        "node": ">=8.0.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wellwelwel"
      }
    },
    "node_modules/mime": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/mime/-/mime-3.0.0.tgz",
      "integrity": "sha512-jSCU7/VB1loIWBZe14aEYHU/+1UMEHoaO7qxCOVJOw9GgH72VAWppxNcjU+x9a2k3GSIBXNKxXQFqRvvZ7vr3A==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "mime": "cli.js"
      },
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/minimalistic-assert": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/minimalistic-assert/-/minimalistic-assert-1.0.1.tgz",
      "integrity": "sha512-UtJcAD4yEaGtjPezWuO9wC4nwUnVH/8/Im3yEHQP4b67cXlD/Qr9hdITCU1xDbSEXg2XKNaP8jsReV7vQd00/A==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/minimatch": {
      "version": "10.2.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-10.2.5.tgz",
      "integrity": "sha512-MULkVLfKGYDFYejP07QOurDLLQpcjk7Fw+7jXS2R2czRQzR56yHRveU5NDJEOviH+hETZKSkIk5c+T23GjFUMg==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "brace-expansion": "^5.0.5"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/minimist": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.8.tgz",
      "integrity": "sha512-2yyAR8qBkN3YuheJanUpWC5U3bb5osDywNB8RzDVlDwDHbocAJveqqj1u8+SVD7jkWT4yvsHCpWqqWqAxb0zCA==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/minipass": {
      "version": "7.1.3",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-7.1.3.tgz",
      "integrity": "sha512-tEBHqDnIoM/1rXME1zgka9g6Q2lcoCkxHLuc7ODJ5BxbP5d4c2Z5cGgtXAku59200Cx7diuHTOYfSBD8n6mm8A==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "engines": {
        "node": ">=16 || 14 >=14.17"
      }
    },
    "node_modules/mnemonist": {
      "version": "0.40.4",
      "resolved": "https://registry.npmjs.org/mnemonist/-/mnemonist-0.40.4.tgz",
      "integrity": "sha512-ZAv+KNavneRVzu4tUeOgzkScI3W5BGwZ3rkxIpKtzzVgfTtWQFN1CgX0U72cyvyh3iTuHL3SiSmrQxTlryEIcw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "obliterator": "^2.0.4"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/mysql2": {
      "version": "3.15.3",
      "resolved": "https://registry.npmjs.org/mysql2/-/mysql2-3.15.3.tgz",
      "integrity": "sha512-FBrGau0IXmuqg4haEZRBfHNWB5mUARw6hNwPDXXGg0XzVJ50mr/9hb267lvpVMnhZ1FON3qNd4Xfcez1rbFwSg==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "aws-ssl-profiles": "^1.1.1",
        "denque": "^2.1.0",
        "generate-function": "^2.3.1",
        "iconv-lite": "^0.7.0",
        "long": "^5.2.1",
        "lru.min": "^1.0.0",
        "named-placeholders": "^1.1.3",
        "seq-queue": "^0.0.5",
        "sqlstring": "^2.3.2"
      },
      "engines": {
        "node": ">= 8.0"
      }
    },
    "node_modules/named-placeholders": {
      "version": "1.1.6",
      "resolved": "https://registry.npmjs.org/named-placeholders/-/named-placeholders-1.1.6.tgz",
      "integrity": "sha512-Tz09sEL2EEuv5fFowm419c1+a/jSMiBjI9gHxVLrVdbUkkNUUfjsVYs9pVZu5oCon/kmRh9TfLEObFtkVxmY0w==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "lru.min": "^1.1.0"
      },
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/node-addon-api": {
      "version": "8.9.0",
      "resolved": "https://registry.npmjs.org/node-addon-api/-/node-addon-api-8.9.0.tgz",
      "integrity": "sha512-ekZMeaaIzSQTSpr7X2X3iJM7lTzgnx8ahAG9pJfT/7+14mlEM8ZYQ9cgCDvSSRbReFK0oHli3WrZdCiRsgAT9Q==",
      "license": "MIT",
      "engines": {
        "node": "^18 || ^20 || >= 21"
      }
    },
    "node_modules/node-gyp-build": {
      "version": "4.8.4",
      "resolved": "https://registry.npmjs.org/node-gyp-build/-/node-gyp-build-4.8.4.tgz",
      "integrity": "sha512-LA4ZjwlnUblHVgq0oBF3Jl/6h/Nvs5fzBLwdEF4nuxnFdsfajde4WfxtJr3CaiH+F6ewcIB/q4jQ4UzPyid+CQ==",
      "license": "MIT",
      "bin": {
        "node-gyp-build": "bin.js",
        "node-gyp-build-optional": "optional.js",
        "node-gyp-build-test": "build-test.js"
      }
    },
    "node_modules/obliterator": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/obliterator/-/obliterator-2.0.5.tgz",
      "integrity": "sha512-42CPE9AhahZRsMNslczq0ctAEtqk8Eka26QofnqC346BZdHDySk3LWka23LI7ULIw11NmltpiLagIq8gBozxTw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/ohash": {
      "version": "2.0.11",
      "resolved": "https://registry.npmjs.org/ohash/-/ohash-2.0.11.tgz",
      "integrity": "sha512-RdR9FQrFwNBNXAr4GixM8YaRZRJ5PUWbKYbE5eOsrwAjJW0q2REGcf79oYPsLyskQCZG1PLN+S/K1V00joZAoQ==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/on-exit-leak-free": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/on-exit-leak-free/-/on-exit-leak-free-2.1.2.tgz",
      "integrity": "sha512-0eJJY6hXLGf1udHwfNftBqH+g73EU4B504nZeKpz1sYRKafAghwxEJunB2O7rDZkL4PGfsMVnTXZ2EjibbqcsA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "wrappy": "1"
      }
    },
    "node_modules/openapi-types": {
      "version": "12.1.3",
      "resolved": "https://registry.npmjs.org/openapi-types/-/openapi-types-12.1.3.tgz",
      "integrity": "sha512-N4YtSYJqghVu4iek2ZUvcN/0aqH1kRDuNqzcycDxhOUpg7GdvLa2F3DgS6yBNhInhv2r/6I0Flkn7CqL8+nIcw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "devOptional": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-scurry": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/path-scurry/-/path-scurry-2.0.2.tgz",
      "integrity": "sha512-3O/iVVsJAPsOnpwWIeD+d6z/7PmqApyQePUtCndjatj/9I5LylHvt5qluFaBT3I5h3r1ejfR056c+FCv+NnNXg==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "lru-cache": "^11.0.0",
        "minipass": "^7.1.2"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/pathe": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/pathe/-/pathe-2.0.3.tgz",
      "integrity": "sha512-WUjGcAqP1gQacoQe+OBJsFA7Ld4DyXuUIjZ5cc75cLHvJ7dtNsTugphxIADwspS+AraAUePCKrSVtPLFj/F88w==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/perfect-debounce": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/perfect-debounce/-/perfect-debounce-2.1.0.tgz",
      "integrity": "sha512-LjgdTytVFXeUgtHZr9WYViYSM/g8MkcTPYDlPa3cDqMirHjKiSZPYd6DoL7pK8AJQr+uWkQvCjHNdiMqsrJs+g==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/pg": {
      "version": "8.22.0",
      "resolved": "https://registry.npmjs.org/pg/-/pg-8.22.0.tgz",
      "integrity": "sha512-8wih1vVIBMxoUM2oB4soJsD9tDnDpLv4OXBJ+EJzFsvycD+lfyIreC2gGHq78f8jbLLt+bvlPTFdFZfJkOuzAA==",
      "license": "MIT",
      "dependencies": {
        "pg-connection-string": "^2.14.0",
        "pg-pool": "^3.14.0",
        "pg-protocol": "^1.15.0",
        "pg-types": "2.2.0",
        "pgpass": "1.0.5"
      },
      "engines": {
        "node": ">= 16.0.0"
      },
      "optionalDependencies": {
        "pg-cloudflare": "^1.4.0"
      },
      "peerDependencies": {
        "pg-native": ">=3.0.1"
      },
      "peerDependenciesMeta": {
        "pg-native": {
          "optional": true
        }
      }
    },
    "node_modules/pg-cloudflare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/pg-cloudflare/-/pg-cloudflare-1.4.0.tgz",
      "integrity": "sha512-Vo7z/6rrQYxpNRylp4Tlob2elzbh+N/MOQbxFVWCxS7oEx6jF53GTJFxK2WWpKuBRkmiin4Mt+xofFDjx09R0A==",
      "license": "MIT",
      "optional": true
    },
    "node_modules/pg-connection-string": {
      "version": "2.14.0",
      "resolved": "https://registry.npmjs.org/pg-connection-string/-/pg-connection-string-2.14.0.tgz",
      "integrity": "sha512-XwWDGcLRGCXAR8F/AM5bG7Q+A3Wm2s6QeEjlOKZLlH3UYcguiqCWKyWXVag5TLTIjR7oOJUY8kcADaZgWPyLeg==",
      "license": "MIT"
    },
    "node_modules/pg-int8": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/pg-int8/-/pg-int8-1.0.1.tgz",
      "integrity": "sha512-WCtabS6t3c8SkpDBUlb1kjOs7l66xsGdKpIPZsg4wR+B3+u9UAum2odSsF9tnvxg80h4ZxLWMy4pRjOsFIqQpw==",
      "license": "ISC",
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/pg-pool": {
      "version": "3.14.0",
      "resolved": "https://registry.npmjs.org/pg-pool/-/pg-pool-3.14.0.tgz",
      "integrity": "sha512-gKtPkFdQPU3DksooVLi9LsjZxrsBUZIpa+7aVx+LV5pNh0KzP4Zleud2po+ConrxbuXGBJ6Hfer6hdgpIBpBaw==",
      "license": "MIT",
      "peerDependencies": {
        "pg": ">=8.0"
      }
    },
    "node_modules/pg-protocol": {
      "version": "1.15.0",
      "resolved": "https://registry.npmjs.org/pg-protocol/-/pg-protocol-1.15.0.tgz",
      "integrity": "sha512-cq9sECI5s0+uPUXjbz8ioyPJni6RzsRib0US67i5IoTZKw8fNeYlVE7u8F4dG7vEJJtc5wdD1K189lCCUwqWTQ==",
      "license": "MIT"
    },
    "node_modules/pg-types": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/pg-types/-/pg-types-2.2.0.tgz",
      "integrity": "sha512-qTAAlrEsl8s4OiEQY69wDvcMIdQN6wdz5ojQiOy6YRMuynxenON0O5oCpJI6lshc6scgAY8qvJ2On/p+CXY0GA==",
      "license": "MIT",
      "dependencies": {
        "pg-int8": "1.0.1",
        "postgres-array": "~2.0.0",
        "postgres-bytea": "~1.0.0",
        "postgres-date": "~1.0.4",
        "postgres-interval": "^1.1.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/pg-types/node_modules/postgres-array": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/postgres-array/-/postgres-array-2.0.0.tgz",
      "integrity": "sha512-VpZrUqU5A69eQyW2c5CA1jtLecCsN2U/bD6VilrFDWq5+5UIEVO7nazS3TEcHf1zuPYO/sqGvUvW62g86RXZuA==",
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/pgpass": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/pgpass/-/pgpass-1.0.5.tgz",
      "integrity": "sha512-FdW9r/jQZhSeohs1Z3sI1yxFQNFvMcnmfuj4WBMUTxOrAyLMaTcE1aAMBiTlbMNaXvBCQuVi0R7hd8udDSP7ug==",
      "license": "MIT",
      "dependencies": {
        "split2": "^4.1.0"
      }
    },
    "node_modules/pino": {
      "version": "10.3.1",
      "resolved": "https://registry.npmjs.org/pino/-/pino-10.3.1.tgz",
      "integrity": "sha512-r34yH/GlQpKZbU1BvFFqOjhISRo1MNx1tWYsYvmj6KIRHSPMT2+yHOEb1SG6NMvRoHRF0a07kCOox/9yakl1vg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@pinojs/redact": "^0.4.0",
        "atomic-sleep": "^1.0.0",
        "on-exit-leak-free": "^2.1.0",
        "pino-abstract-transport": "^3.0.0",
        "pino-std-serializers": "^7.0.0",
        "process-warning": "^5.0.0",
        "quick-format-unescaped": "^4.0.3",
        "real-require": "^0.2.0",
        "safe-stable-stringify": "^2.3.1",
        "sonic-boom": "^4.0.1",
        "thread-stream": "^4.0.0"
      },
      "bin": {
        "pino": "bin.js"
      }
    },
    "node_modules/pino-abstract-transport": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/pino-abstract-transport/-/pino-abstract-transport-3.0.0.tgz",
      "integrity": "sha512-wlfUczU+n7Hy/Ha5j9a/gZNy7We5+cXp8YL+X+PG8S0KXxw7n/JXA3c46Y0zQznIJ83URJiwy7Lh56WLokNuxg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "split2": "^4.0.0"
      }
    },
    "node_modules/pino-pretty": {
      "version": "13.1.3",
      "resolved": "https://registry.npmjs.org/pino-pretty/-/pino-pretty-13.1.3.tgz",
      "integrity": "sha512-ttXRkkOz6WWC95KeY9+xxWL6AtImwbyMHrL1mSwqwW9u+vLp/WIElvHvCSDg0xO/Dzrggz1zv3rN5ovTRVowKg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "colorette": "^2.0.7",
        "dateformat": "^4.6.3",
        "fast-copy": "^4.0.0",
        "fast-safe-stringify": "^2.1.1",
        "help-me": "^5.0.0",
        "joycon": "^3.1.1",
        "minimist": "^1.2.6",
        "on-exit-leak-free": "^2.1.0",
        "pino-abstract-transport": "^3.0.0",
        "pump": "^3.0.0",
        "secure-json-parse": "^4.0.0",
        "sonic-boom": "^4.0.1",
        "strip-json-comments": "^5.0.2"
      },
      "bin": {
        "pino-pretty": "bin.js"
      }
    },
    "node_modules/pino-std-serializers": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/pino-std-serializers/-/pino-std-serializers-7.1.0.tgz",
      "integrity": "sha512-BndPH67/JxGExRgiX1dX0w1FvZck5Wa4aal9198SrRhZjH3GxKQUKIBnYJTdj2HDN3UQAS06HlfcSbQj2OHmaw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/pkg-types": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/pkg-types/-/pkg-types-2.3.1.tgz",
      "integrity": "sha512-y+ichcgc2LrADuhLNAx8DFjVfgz91pRxfZdI3UDhxHvcVEZsenLO+7XaU5vOp0u/7V/wZ+plyuQxtrDlZJ+yeg==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "confbox": "^0.2.4",
        "exsolve": "^1.0.8",
        "pathe": "^2.0.3"
      }
    },
    "node_modules/postgres": {
      "version": "3.4.7",
      "resolved": "https://registry.npmjs.org/postgres/-/postgres-3.4.7.tgz",
      "integrity": "sha512-Jtc2612XINuBjIl/QTWsV5UvE8UHuNblcO3vVADSrKsrc6RqGX6lOW1cEo3CM2v0XG4Nat8nI+YM7/f26VxXLw==",
      "devOptional": true,
      "license": "Unlicense",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "type": "individual",
        "url": "https://github.com/sponsors/porsager"
      }
    },
    "node_modules/postgres-array": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/postgres-array/-/postgres-array-3.0.4.tgz",
      "integrity": "sha512-nAUSGfSDGOaOAEGwqsRY27GPOea7CNipJPOA7lPbdEpx5Kg3qzdP0AaWC5MlhTWV9s4hFX39nomVZ+C4tnGOJQ==",
      "license": "MIT",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/postgres-bytea": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/postgres-bytea/-/postgres-bytea-1.0.1.tgz",
      "integrity": "sha512-5+5HqXnsZPE65IJZSMkZtURARZelel2oXUEO8rH83VS/hxH5vv1uHquPg5wZs8yMAfdv971IU+kcPUczi7NVBQ==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/postgres-date": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/postgres-date/-/postgres-date-1.0.7.tgz",
      "integrity": "sha512-suDmjLVQg78nMK2UZ454hAG+OAW+HQPZ6n++TNDUX+L0+uUlLywnoxJKDou51Zm+zTCjrCl0Nq6J9C5hP9vK/Q==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/postgres-interval": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/postgres-interval/-/postgres-interval-1.2.0.tgz",
      "integrity": "sha512-9ZhXKM/rw350N1ovuWHbGxnGh/SNJ4cnxHiM0rxE4VN41wsg8P8zWn9hv/buK00RP4WvlOyr/RBDiptyxVbkZQ==",
      "license": "MIT",
      "dependencies": {
        "xtend": "^4.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/prisma": {
      "version": "7.8.0",
      "resolved": "https://registry.npmjs.org/prisma/-/prisma-7.8.0.tgz",
      "integrity": "sha512-yfN4yrw7HV9kEJhoy1+jgah0jafEIQsf7uWouSsM8MvJtlubsk+kM7AIBWZ8+GJl74Yj3c+nbYqBkMOxtsZ3Lw==",
      "devOptional": true,
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@prisma/config": "7.8.0",
        "@prisma/dev": "0.24.3",
        "@prisma/engines": "7.8.0",
        "@prisma/studio-core": "0.27.3",
        "mysql2": "3.15.3",
        "postgres": "3.4.7"
      },
      "bin": {
        "prisma": "build/index.js"
      },
      "engines": {
        "node": "^20.19 || ^22.12 || >=24.0"
      },
      "peerDependencies": {
        "better-sqlite3": ">=9.0.0",
        "typescript": ">=5.4.0"
      },
      "peerDependenciesMeta": {
        "better-sqlite3": {
          "optional": true
        },
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/process-warning": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/process-warning/-/process-warning-5.0.0.tgz",
      "integrity": "sha512-a39t9ApHNx2L4+HBnQKqxxHNs1r7KF+Intd8Q/g1bUh6q0WIp9voPXJ/x0j+ZL45KF1pJd9+q2jLIRMfvEshkA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fastify"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fastify"
        }
      ],
      "license": "MIT"
    },
    "node_modules/proper-lockfile": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/proper-lockfile/-/proper-lockfile-4.1.2.tgz",
      "integrity": "sha512-TjNPblN4BwAWMXU8s9AEz4JmQxnD1NNL7bNOY/AKUzyamc379FWASUhc/K1pL2noVb+XmZKLL68cjzLsiOAMaA==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.2.4",
        "retry": "^0.12.0",
        "signal-exit": "^3.0.2"
      }
    },
    "node_modules/proper-lockfile/node_modules/signal-exit": {
      "version": "3.0.7",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.7.tgz",
      "integrity": "sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ==",
      "devOptional": true,
      "license": "ISC"
    },
    "node_modules/pump": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/pump/-/pump-3.0.4.tgz",
      "integrity": "sha512-VS7sjc6KR7e1ukRFhQSY5LM2uBWAUPiOPa/A3mkKmiMwSmRFUITt0xuj+/lesgnCv+dPIEYlkzrcyXgquIHMcA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "end-of-stream": "^1.1.0",
        "once": "^1.3.1"
      }
    },
    "node_modules/pure-rand": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/pure-rand/-/pure-rand-6.1.0.tgz",
      "integrity": "sha512-bVWawvoZoBYpp6yIoQtQXHZjmz35RSVHnUOTefl8Vcjr8snTPY1wnpSPMWekcFwbxI6gtmT7rSYPFvz71ldiOA==",
      "devOptional": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://github.com/sponsors/dubzzz"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fast-check"
        }
      ],
      "license": "MIT"
    },
    "node_modules/quick-format-unescaped": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/quick-format-unescaped/-/quick-format-unescaped-4.0.4.tgz",
      "integrity": "sha512-tYC1Q1hgyRuHgloV/YXs2w15unPVh8qfu/qCTfhTYamaw7fyhumKa2yGpdSo87vY32rIclj+4fWYQXUMs9EHvg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/rc9": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/rc9/-/rc9-3.0.1.tgz",
      "integrity": "sha512-gMDyleLWVE+i6Sgtc0QbbY6pEKqYs97NGi6isHQPqYlLemPoO8dxQ3uGi0f4NiP98c+jMW6cG1Kx9dDwfvqARQ==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "defu": "^6.1.6",
        "destr": "^2.0.5"
      }
    },
    "node_modules/react": {
      "version": "19.2.7",
      "resolved": "https://registry.npmjs.org/react/-/react-19.2.7.tgz",
      "integrity": "sha512-HNe9WslTbXmFK8o8cmwgAeJFSBvt1bPdHCVKtaaV+WlAN36mpT4hcRpwbf3fY56ar2oIXzsBpOAiIRHAdY0OlQ==",
      "devOptional": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "19.2.7",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-19.2.7.tgz",
      "integrity": "sha512-t0BRVXvbiE/o20Hfw669rLbMCDWtYZLvmJigy2f0MxsXF+71pxhR3xOkspmsO8h3ZlNzyibAmtCa3l4lYKk6gQ==",
      "devOptional": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "scheduler": "^0.27.0"
      },
      "peerDependencies": {
        "react": "^19.2.7"
      }
    },
    "node_modules/readdirp": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-5.0.0.tgz",
      "integrity": "sha512-9u/XQ1pvrQtYyMpZe7DXKv2p5CNvyVwzUB6uhLAnQwHMSgKMBR62lc7AHljaeteeHXn11XTAaLLUVZYVZyuRBQ==",
      "devOptional": true,
      "license": "MIT",
      "engines": {
        "node": ">= 20.19.0"
      },
      "funding": {
        "type": "individual",
        "url": "https://paulmillr.com/funding/"
      }
    },
    "node_modules/real-require": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/real-require/-/real-require-0.2.0.tgz",
      "integrity": "sha512-57frrGM/OCTLqLOAh0mhVA9VBMHd+9U7Zb2THMGdBUoZVOtGbJzjxsYGDJ3A9AYYCP4hn6y1TVbaOfzWtm5GFg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 12.13.0"
      }
    },
    "node_modules/remeda": {
      "version": "2.33.4",
      "resolved": "https://registry.npmjs.org/remeda/-/remeda-2.33.4.tgz",
      "integrity": "sha512-ygHswjlc/opg2VrtiYvUOPLjxjtdKvjGz1/plDhkG66hjNjFr1xmfrs2ClNFo/E6TyUFiwYNh53bKV26oBoMGQ==",
      "devOptional": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/remeda"
      }
    },
    "node_modules/require-from-string": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/require-from-string/-/require-from-string-2.0.2.tgz",
      "integrity": "sha512-Xf0nWe6RseziFMu+Ap9biiUbmplq6S9/p+7w7YXP/JBHhrUDDUhwa+vANyubuqfZWTveU//DYVGsDG7RKL/vEw==",
      "devOptional": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/ret": {
      "version": "0.5.0",
      "resolved": "https://registry.npmjs.org/ret/-/ret-0.5.0.tgz",
      "integrity": "sha512-I1XxrZSQ+oErkRR4jYbAyEEu2I0avBvvMM5JN+6EBprOGRCs63ENqZ3vjavq8fBw2+62G5LF5XelKwuJpcvcxw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/retry": {
      "version": "0.12.0",
      "resolved": "https://registry.npmjs.org/retry/-/retry-0.12.0.tgz",
      "integrity": "sha512-9LkiTwjUh6rT555DtE9rTX+BKByPfrMzEAtnlEtdEwr3Nkffwiihqe2bWADg+OQRjt9gl6ICdmB/ZFDCGAtSow==",
      "devOptional": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/reusify": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.1.0.tgz",
      "integrity": "sha512-g6QUff04oZpHs0eG5p83rFLhHeV00ug/Yf9nZM6fLeUrPguBTkTQOdpAWWspMh55TZfVQDPaN3NQJfbVRAxdIw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "iojs": ">=1.0.0",
        "node": ">=0.10.0"
      }
    },
    "node_modules/rfdc": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/rfdc/-/rfdc-1.4.1.tgz",
      "integrity": "sha512-q1b3N5QkRUWUl7iyylaaj3kOpIT0N2i9MqIEQXP73GVsN9cw3fdx8X63cEmWhJGi2PPCF23Ijp7ktmd39rawIA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/safe-buffer": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
      "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/safe-regex2": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/safe-regex2/-/safe-regex2-5.1.1.tgz",
      "integrity": "sha512-mOSBvHGDZMuIEZMdOz/aCEYDCv0E7nfcNsIhUF+/P+xC7Hyf3FkvymqgPbg9D1EdSGu+uKbJgy09K/RKKc7kJA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fastify"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fastify"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "ret": "~0.5.0"
      },
      "bin": {
        "safe-regex2": "bin/safe-regex2.js"
      }
    },
    "node_modules/safe-stable-stringify": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/safe-stable-stringify/-/safe-stable-stringify-2.5.0.tgz",
      "integrity": "sha512-b3rppTKm9T+PsVCBEOUR46GWI7fdOs00VKZ1+9c1EWDaDMvjQc6tUwuFyIprgGgTcWoVHSKrU8H31ZHA2e0RHA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/scheduler": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.27.0.tgz",
      "integrity": "sha512-eNv+WrVbKu1f3vbYJT/xtiF5syA5HPIMtf9IgY/nKg0sWqzAUEvqY/xm7OcZc/qafLx/iO9FgOmeSAp4v5ti/Q==",
      "devOptional": true,
      "license": "MIT",
      "peer": true
    },
    "node_modules/secure-json-parse": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/secure-json-parse/-/secure-json-parse-4.1.0.tgz",
      "integrity": "sha512-l4KnYfEyqYJxDwlNVyRfO2E4NTHfMKAWdUuA8J0yve2Dz/E/PdBepY03RvyJpssIpRFwJoCD55wA+mEDs6ByWA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fastify"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fastify"
        }
      ],
      "license": "BSD-3-Clause"
    },
    "node_modules/semver": {
      "version": "7.8.5",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.8.5.tgz",
      "integrity": "sha512-Y7/KDsb8LjooZpwaqGyulO6DQlksgCncchHGk+sZIY4SBvUocMBEFH5Ur1fI4dV+Jvl0w6cjvucaIi40puRioA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/seq-queue": {
      "version": "0.0.5",
      "resolved": "https://registry.npmjs.org/seq-queue/-/seq-queue-0.0.5.tgz",
      "integrity": "sha512-hr3Wtp/GZIc/6DAGPDcV4/9WoZhjrkXsi5B/07QgX8tsdc6ilr7BFM6PM6rbdAX1kFSDYeZGLipIZZKyQP0O5Q==",
      "devOptional": true
    },
    "node_modules/set-cookie-parser": {
      "version": "2.7.2",
      "resolved": "https://registry.npmjs.org/set-cookie-parser/-/set-cookie-parser-2.7.2.tgz",
      "integrity": "sha512-oeM1lpU/UvhTxw+g3cIfxXHyJRc/uidd3yK1P242gzHds0udQBYzs3y8j4gCCW+ZJ7ad0yctld8RYO+bdurlvw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/setprototypeof": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
      "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "devOptional": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/signal-exit": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-4.1.0.tgz",
      "integrity": "sha512-bzyZ1e88w9O1iNJbKnOlvYTrWPDl46O1bG0D3XInv+9tkPrxrN8jUUTiFlDkkmKWgn1M6CfIA13SuGqOa9Korw==",
      "devOptional": true,
      "license": "ISC",
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/sonic-boom": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/sonic-boom/-/sonic-boom-4.2.1.tgz",
      "integrity": "sha512-w6AxtubXa2wTXAUsZMMWERrsIRAdrK0Sc+FUytWvYAhBJLyuI4llrMIC1DtlNSdI99EI86KZum2MMq3EAZlF9Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "atomic-sleep": "^1.0.0"
      }
    },
    "node_modules/split2": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/split2/-/split2-4.2.0.tgz",
      "integrity": "sha512-UcjcJOWknrNkF6PLX83qcHM6KHgVKNkV62Y8a5uYDVv9ydGQVwAHMKqHdJje1VTWpljG0WYpCDhrCdAOYH4TWg==",
      "license": "ISC",
      "engines": {
        "node": ">= 10.x"
      }
    },
    "node_modules/sqlstring": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/sqlstring/-/sqlstring-2.3.3.tgz",
      "integrity": "sha512-qC9iz2FlN7DQl3+wjwn3802RTyjCx7sDvfQEXchwa6CWOx07/WVfh91gBmQ9fahw8snwGEWU3xGzOt4tFyHLxg==",
      "devOptional": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/statuses": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.2.tgz",
      "integrity": "sha512-DvEy55V3DB7uknRo+4iOGT5fP1slR8wQohVdknigZPMpMstaKJQWhwiYBACJE3Ul2pTnATihhBYnRhZQHGBiRw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/std-env": {
      "version": "3.10.0",
      "resolved": "https://registry.npmjs.org/std-env/-/std-env-3.10.0.tgz",
      "integrity": "sha512-5GS12FdOZNliM5mAOxFRg7Ir0pWz8MdpYm6AY6VPkGpbA7ZzmbzNcBJQ0GPvvyWgcY7QAhCgf9Uy89I03faLkg==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/steed": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/steed/-/steed-1.1.3.tgz",
      "integrity": "sha512-EUkci0FAUiE4IvGTSKcDJIQ/eRUP2JJb56+fvZ4sdnguLTqIdKjSxUe138poW8mkvKWXW2sFPrgTsxqoISnmoA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fastfall": "^1.5.0",
        "fastparallel": "^2.2.0",
        "fastq": "^1.3.0",
        "fastseries": "^1.7.0",
        "reusify": "^1.0.0"
      }
    },
    "node_modules/strip-json-comments": {
      "version": "5.0.3",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-5.0.3.tgz",
      "integrity": "sha512-1tB5mhVo7U+ETBKNf92xT4hrQa3pm0MZ0PQvuDnWgAAGHDsfp4lPSpiS6psrSiet87wyGPh9ft6wmhOMQ0hDiw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=14.16"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/thread-stream": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/thread-stream/-/thread-stream-4.2.0.tgz",
      "integrity": "sha512-e2zZ96wSChazBsbENf/Pcm/4swHt2cEKQ92rhUjkL9GCKiTDJIaTBenjE/m9DXi0QBmTMDkFDdOomUy20A1tDQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "real-require": "^1.0.0"
      },
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/thread-stream/node_modules/real-require": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/real-require/-/real-require-1.0.0.tgz",
      "integrity": "sha512-P4nbQYQfePJxRSmY+v/KINxVucm4NF3p3s7pJveMTtom52FR4YGltUQLB8idDXwDDWW+eYrWDFbuzUnjoWHF7g==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/toad-cache": {
      "version": "3.7.1",
      "resolved": "https://registry.npmjs.org/toad-cache/-/toad-cache-3.7.1.tgz",
      "integrity": "sha512-5DXWzE4Vz7xNHsv+xQ+MGfJYyC78Aok3tEr0MNwHoRf7vZnga1mQXZ4/Nsodld4VR6Wd+VhfmqnNrsRJyYPfrQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/toidentifier": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
      "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.6"
      }
    },
    "node_modules/tsx": {
      "version": "4.22.4",
      "resolved": "https://registry.npmjs.org/tsx/-/tsx-4.22.4.tgz",
      "integrity": "sha512-X8EX+XV4QR5xCsrgxaED954zTDfY8KqlDtskKEL0cHhyS/P8b4IFOvGDQpsC9Q1XnLq915wEfwwY/zzskCtmhg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "esbuild": "~0.28.0"
      },
      "bin": {
        "tsx": "dist/cli.mjs"
      },
      "engines": {
        "node": ">=18.0.0"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      }
    },
    "node_modules/typescript": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-6.0.3.tgz",
      "integrity": "sha512-y2TvuxSZPDyQakkFRPZHKFm+KKVqIisdg9/CZwm9ftvKXLP8NRWj38/ODjNbr43SsoXqNuAisEf1GdCxqWcdBw==",
      "devOptional": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/undici-types": {
      "version": "8.3.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-8.3.0.tgz",
      "integrity": "sha512-j375ScV60dom+YkPFIfTLcOiPxkN/buHz5GobjLhixFuANaNs3C9l4GmrWqejgXWJ7BbJcFYpTEUkS1Ge8bpZQ==",
      "license": "MIT"
    },
    "node_modules/valibot": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/valibot/-/valibot-1.2.0.tgz",
      "integrity": "sha512-mm1rxUsmOxzrwnX5arGS+U4T25RdvpPjPN4yR0u9pUBov9+zGVtO84tif1eY4r6zWxVxu3KzIyknJy3rxfRZZg==",
      "devOptional": true,
      "license": "MIT",
      "peerDependencies": {
        "typescript": ">=5"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "devOptional": true,
      "license": "ISC",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/xtend": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz",
      "integrity": "sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ==",
      "license": "MIT",
      "engines": {
        "node": ">=0.4"
      }
    },
    "node_modules/yaml": {
      "version": "2.9.0",
      "resolved": "https://registry.npmjs.org/yaml/-/yaml-2.9.0.tgz",
      "integrity": "sha512-2AvhNX3mb8zd6Zy7INTtSpl1F15HW6Wnqj0srWlkKLcpYl/gMIMJiyuGq2KeI2YFxUPjdlB+3Lc10seMLtL4cA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "yaml": "bin.mjs"
      },
      "engines": {
        "node": ">= 14.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/eemeli"
      }
    },
    "node_modules/zeptomatch": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/zeptomatch/-/zeptomatch-2.1.0.tgz",
      "integrity": "sha512-KiGErG2J0G82LSpniV0CtIzjlJ10E04j02VOudJsPyPwNZgGnRKQy7I1R7GMyg/QswnE4l7ohSGrQbQbjXPPDA==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "grammex": "^3.1.11",
        "graphmatch": "^1.1.0"
      }
    }
  }
}
```

====================================================================================================
# FILE 4

## Relative Path
`package.json`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/backend/package.json`

## Source Code

```json
{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "tsx watch src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js"
  },
  "prisma": {
    "seed": "tsx prisma/seed.ts"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "module",
  "dependencies": {
    "@prisma/adapter-pg": "^7.8.0",
    "@prisma/client": "^7.8.0",
    "bcrypt": "^6.0.0",
    "dotenv": "^17.4.2",
    "pg": "^8.22.0"
  },
  "devDependencies": {
    "@fastify/cookie": "^11.0.2",
    "@fastify/cors": "^11.2.0",
    "@fastify/helmet": "^13.0.2",
    "@fastify/jwt": "^10.1.0",
    "@fastify/rate-limit": "^11.0.0",
    "@fastify/swagger": "^9.7.0",
    "@fastify/swagger-ui": "^6.0.0",
    "@types/bcrypt": "^6.0.0",
    "@types/node": "^26.0.1",
    "fastify": "^5.8.5",
    "pino-pretty": "^13.1.3",
    "prisma": "^7.8.0",
    "tsx": "^4.22.4",
    "typescript": "^6.0.3"
  }
}
```

====================================================================================================
# FILE 5

## Relative Path
`prisma.config.ts`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/backend/prisma.config.ts`

## Source Code

```ts
// This file was generated by Prisma, and assumes you have installed the following:
// npm install --save-dev prisma dotenv
import "dotenv/config";
import { defineConfig } from "prisma/config";

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error("DATABASE_URL environment variable is not set.");
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
  },
  datasource: {
    url: databaseUrl,
  },
});
```

====================================================================================================
# FILE 6

## Relative Path
`tsconfig.json`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/backend/tsconfig.json`

## Source Code

```json
{
  "compilerOptions": {
    "module": "nodenext",
    "moduleResolution": "nodenext",
    "resolvePackageJsonExports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "declaration": true,
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true,
    "target": "ES2023",
    "sourceMap": true,
    "outDir": "./dist",
    "incremental": true,
    "skipLibCheck": true,
    "strictNullChecks": true,
    "forceConsistentCasingInFileNames": true,
    "noImplicitAny": false,
    "strictBindCallApply": false,
    "noFallthroughCasesInSwitch": false
  }
}
```

====================================================================================================
# FILE 7

## Relative Path
`generated/prisma/browser.ts`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/backend/generated/prisma/browser.ts`

## Source Code

```ts

/* !!! This is code generated by Prisma. Do not edit directly. !!! */
/* eslint-disable */
// biome-ignore-all lint: generated file
// @ts-nocheck 
/*
 * This file should be your main import to use Prisma-related types and utilities in a browser. 
 * Use it to get access to models, enums, and input types.
 * 
 * This file does not contain a `PrismaClient` class, nor several other helpers that are intended as server-side only.
 * See `client.ts` for the standard, server-side entry point.
 *
 * 🟢 You can import this file directly.
 */

import * as Prisma from './internal/prismaNamespaceBrowser.ts'
export { Prisma }
export * as $Enums from './enums.ts'
export * from './enums.ts';
/**
 * Model IngestJob
 * 
 */
export type IngestJob = Prisma.IngestJobModel
/**
 * Model Cluster
 * 
 */
export type Cluster = Prisma.ClusterModel
/**
 * Model Article
 * 
 */
export type Article = Prisma.ArticleModel
/**
 * Model User
 * 
 */
export type User = Prisma.UserModel
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = Prisma.RefreshTokenModel
```

====================================================================================================
# FILE 8

## Relative Path
`generated/prisma/client.ts`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/backend/generated/prisma/client.ts`

## Source Code

```ts

/* !!! This is code generated by Prisma. Do not edit directly. !!! */
/* eslint-disable */
// biome-ignore-all lint: generated file
// @ts-nocheck 
/*
 * This file should be your main import to use Prisma. Through it you get access to all the models, enums, and input types.
 * If you're looking for something you can import in the client-side of your application, please refer to the `browser.ts` file instead.
 *
 * 🟢 You can import this file directly.
 */

import * as process from 'node:process'
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'
globalThis['__dirname'] = path.dirname(fileURLToPath(import.meta.url))

import * as runtime from "@prisma/client/runtime/client"
import * as $Enums from "./enums.ts"
import * as $Class from "./internal/class.ts"
import * as Prisma from "./internal/prismaNamespace.ts"

export * as $Enums from './enums.ts'
export * from "./enums.ts"
/**
 * ## Prisma Client
 * 
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more IngestJobs
 * const ingestJobs = await prisma.ingestJob.findMany()
 * ```
 * 
 * Read more in our [docs](https://pris.ly/d/client).
 */
export const PrismaClient = $Class.getPrismaClientClass()
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>
export { Prisma }

/**
 * Model IngestJob
 * 
 */
export type IngestJob = Prisma.IngestJobModel
/**
 * Model Cluster
 * 
 */
export type Cluster = Prisma.ClusterModel
/**
 * Model Article
 * 
 */
export type Article = Prisma.ArticleModel
/**
 * Model User
 * 
 */
export type User = Prisma.UserModel
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = Prisma.RefreshTokenModel
```

====================================================================================================
# FILE 9

## Relative Path
`generated/prisma/commonInputTypes.ts`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/backend/generated/prisma/commonInputTypes.ts`

## Source Code

```ts

/* !!! This is code generated by Prisma. Do not edit directly. !!! */
/* eslint-disable */
// biome-ignore-all lint: generated file
// @ts-nocheck 
/*
 * This file exports various common sort, input & filter types that are not directly linked to a particular model.
 *
 * 🟢 You can import this file directly.
 */

import type * as runtime from "@prisma/client/runtime/client"
import * as $Enums from "./enums.ts"
import type * as Prisma from "./internal/prismaNamespace.ts"


export type StringFilter<$PrismaModel = never> = {
  equals?: string | Prisma.StringFieldRefInput<$PrismaModel>
  in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>
  notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>
  lt?: string | Prisma.StringFieldRefInput<$PrismaModel>
  lte?: string | Prisma.StringFieldRefInput<$PrismaModel>
  gt?: string | Prisma.StringFieldRefInput<$PrismaModel>
  gte?: string | Prisma.StringFieldRefInput<$PrismaModel>
  contains?: string | Prisma.StringFieldRefInput<$PrismaModel>
  startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>
  endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>
  mode?: Prisma.QueryMode
  not?: Prisma.NestedStringFilter<$PrismaModel> | string
}

export type DateTimeFilter<$PrismaModel = never> = {
  equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>
  in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>
  notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>
  lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>
  lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>
  gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>
  gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>
  not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string
}

export type DateTimeNullableFilter<$PrismaModel = never> = {
  equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null
  in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null
  notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null
  lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>
  lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>
  gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>
  gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>
  not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
}

export type IntNullableFilter<$PrismaModel = never> = {
  equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null
  in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null
  notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null
  lt?: number | Prisma.IntFieldRefInput<$PrismaModel>
  lte?: number | Prisma.IntFieldRefInput<$PrismaModel>
  gt?: number | Prisma.IntFieldRefInput<$PrismaModel>
  gte?: number | Prisma.IntFieldRefInput<$PrismaModel>
  not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null
}

export type StringNullableFilter<$PrismaModel = never> = {
  equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null
  in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null
  notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null
  lt?: string | Prisma.StringFieldRefInput<$PrismaModel>
  lte?: string | Prisma.StringFieldRefInput<$PrismaModel>
  gt?: string | Prisma.StringFieldRefInput<$PrismaModel>
  gte?: string | Prisma.StringFieldRefInput<$PrismaModel>
  contains?: string | Prisma.StringFieldRefInput<$PrismaModel>
  startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>
  endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>
  mode?: Prisma.QueryMode
  not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null
}

export type SortOrderInput = {
  sort: Prisma.SortOrder
  nulls?: Prisma.NullsOrder
}

export type StringWithAggregatesFilter<$PrismaModel = never> = {
  equals?: string | Prisma.StringFieldRefInput<$PrismaModel>
  in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>
  notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>
  lt?: string | Prisma.StringFieldRefInput<$PrismaModel>
  lte?: string | Prisma.StringFieldRefInput<$PrismaModel>
  gt?: string | Prisma.StringFieldRefInput<$PrismaModel>
  gte?: string | Prisma.StringFieldRefInput<$PrismaModel>
  contains?: string | Prisma.StringFieldRefInput<$PrismaModel>
  startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>
  endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>
  mode?: Prisma.QueryMode
  not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string
  _count?: Prisma.NestedIntFilter<$PrismaModel>
  _min?: Prisma.NestedStringFilter<$PrismaModel>
  _max?: Prisma.NestedStringFilter<$PrismaModel>
}

export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
  equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>
  in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>
  notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>
  lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>
  lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>
  gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>
  gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>
  not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
  _count?: Prisma.NestedIntFilter<$PrismaModel>
  _min?: Prisma.NestedDateTimeFilter<$PrismaModel>
  _max?: Prisma.NestedDateTimeFilter<$PrismaModel>
}

export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
  equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null
  in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null
  notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null
  lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>
  lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>
  gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>
  gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>
  not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
  _count?: Prisma.NestedIntNullableFilter<$PrismaModel>
  _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>
  _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>
}

export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
  equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null
  in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null
  notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null
  lt?: number | Prisma.IntFieldRefInput<$PrismaModel>
  lte?: number | Prisma.IntFieldRefInput<$PrismaModel>
  gt?: number | Prisma.IntFieldRefInput<$PrismaModel>
  gte?: number | Prisma.IntFieldRefInput<$PrismaModel>
  not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
  _count?: Prisma.NestedIntNullableFilter<$PrismaModel>
  _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>
  _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>
  _min?: Prisma.NestedIntNullableFilter<$PrismaModel>
  _max?: Prisma.NestedIntNullableFilter<$PrismaModel>
}

export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
  equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null
  in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null
  notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null
  lt?: string | Prisma.StringFieldRefInput<$PrismaModel>
  lte?: string | Prisma.StringFieldRefInput<$PrismaModel>
  gt?: string | Prisma.StringFieldRefInput<$PrismaModel>
  gte?: string | Prisma.StringFieldRefInput<$PrismaModel>
  contains?: string | Prisma.StringFieldRefInput<$PrismaModel>
  startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>
  endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>
  mode?: Prisma.QueryMode
  not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
  _count?: Prisma.NestedIntNullableFilter<$PrismaModel>
  _min?: Prisma.NestedStringNullableFilter<$PrismaModel>
  _max?: Prisma.NestedStringNullableFilter<$PrismaModel>
}

export type JsonFilter<$PrismaModel = never> =
| Prisma.PatchUndefined<
    Prisma.Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
    Required<JsonFilterBase<$PrismaModel>>
  >
| Prisma.OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

export type JsonFilterBase<$PrismaModel = never> = {
  equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter
  path?: string[]
  mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>
  string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>
  string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>
  string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>
  array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null
  array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null
  array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null
  lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>
  lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>
  gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>
  gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>
  not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter
}

export type IntFilter<$PrismaModel = never> = {
  equals?: number | Prisma.IntFieldRefInput<$PrismaModel>
  in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>
  notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>
  lt?: number | Prisma.IntFieldRefInput<$PrismaModel>
  lte?: number | Prisma.IntFieldRefInput<$PrismaModel>
  gt?: number | Prisma.IntFieldRefInput<$PrismaModel>
  gte?: number | Prisma.IntFieldRefInput<$PrismaModel>
  not?: Prisma.NestedIntFilter<$PrismaModel> | number
}

export type JsonWithAggregatesFilter<$PrismaModel = never> =
| Prisma.PatchUndefined<
    Prisma.Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
    Required<JsonWithAggregatesFilterBase<$PrismaModel>>
  >
| Prisma.OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
  equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter
  path?: string[]
  mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>
  string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>
  string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>
  string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>
  array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null
  array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null
  array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null
  lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>
  lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>
  gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>
  gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>
  not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter
  _count?: Prisma.NestedIntFilter<$PrismaModel>
  _min?: Prisma.NestedJsonFilter<$PrismaModel>
  _max?: Prisma.NestedJsonFilter<$PrismaModel>
}

export type IntWithAggregatesFilter<$PrismaModel = never> = {
  equals?: number | Prisma.IntFieldRefInput<$PrismaModel>
  in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>
  notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>
  lt?: number | Prisma.IntFieldRefInput<$PrismaModel>
  lte?: number | Prisma.IntFieldRefInput<$PrismaModel>
  gt?: number | Prisma.IntFieldRefInput<$PrismaModel>
  gte?: number | Prisma.IntFieldRefInput<$PrismaModel>
  not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number
  _count?: Prisma.NestedIntFilter<$PrismaModel>
  _avg?: Prisma.NestedFloatFilter<$PrismaModel>
  _sum?: Prisma.NestedIntFilter<$PrismaModel>
  _min?: Prisma.NestedIntFilter<$PrismaModel>
  _max?: Prisma.NestedIntFilter<$PrismaModel>
}

export type BoolFilter<$PrismaModel = never> = {
  equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>
  not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean
}

export type BoolWithAggregatesFilter<$PrismaModel = never> = {
  equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>
  not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
  _count?: Prisma.NestedIntFilter<$PrismaModel>
  _min?: Prisma.NestedBoolFilter<$PrismaModel>
  _max?: Prisma.NestedBoolFilter<$PrismaModel>
}

export type NestedStringFilter<$PrismaModel = never> = {
  equals?: string | Prisma.StringFieldRefInput<$PrismaModel>
  in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>
  notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>
  lt?: string | Prisma.StringFieldRefInput<$PrismaModel>
  lte?: string | Prisma.StringFieldRefInput<$PrismaModel>
  gt?: string | Prisma.StringFieldRefInput<$PrismaModel>
  gte?: string | Prisma.StringFieldRefInput<$PrismaModel>
  contains?: string | Prisma.StringFieldRefInput<$PrismaModel>
  startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>
  endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>
  not?: Prisma.NestedStringFilter<$PrismaModel> | string
}

export type NestedDateTimeFilter<$PrismaModel = never> = {
  equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>
  in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>
  notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>
  lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>
  lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>
  gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>
  gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>
  not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string
}

export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
  equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null
  in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null
  notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null
  lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>
  lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>
  gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>
  gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>
  not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
}

export type NestedIntNullableFilter<$PrismaModel = never> = {
  equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null
  in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null
  notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null
  lt?: number | Prisma.IntFieldRefInput<$PrismaModel>
  lte?: number | Prisma.IntFieldRefInput<$PrismaModel>
  gt?: number | Prisma.IntFieldRefInput<$PrismaModel>
  gte?: number | Prisma.IntFieldRefInput<$PrismaModel>
  not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null
}

export type NestedStringNullableFilter<$PrismaModel = never> = {
  equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null
  in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null
  notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null
  lt?: string | Prisma.StringFieldRefInput<$PrismaModel>
  lte?: string | Prisma.StringFieldRefInput<$PrismaModel>
  gt?: string | Prisma.StringFieldRefInput<$PrismaModel>
  gte?: string | Prisma.StringFieldRefInput<$PrismaModel>
  contains?: string | Prisma.StringFieldRefInput<$PrismaModel>
  startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>
  endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>
  not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null
}

export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
  equals?: string | Prisma.StringFieldRefInput<$PrismaModel>
  in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>
  notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>
  lt?: string | Prisma.StringFieldRefInput<$PrismaModel>
  lte?: string | Prisma.StringFieldRefInput<$PrismaModel>
  gt?: string | Prisma.StringFieldRefInput<$PrismaModel>
  gte?: string | Prisma.StringFieldRefInput<$PrismaModel>
  contains?: string | Prisma.StringFieldRefInput<$PrismaModel>
  startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>
  endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>
  not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string
  _count?: Prisma.NestedIntFilter<$PrismaModel>
  _min?: Prisma.NestedStringFilter<$PrismaModel>
  _max?: Prisma.NestedStringFilter<$PrismaModel>
}

export type NestedIntFilter<$PrismaModel = never> = {
  equals?: number | Prisma.IntFieldRefInput<$PrismaModel>
  in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>
  notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>
  lt?: number | Prisma.IntFieldRefInput<$PrismaModel>
  lte?: number | Prisma.IntFieldRefInput<$PrismaModel>
  gt?: number | Prisma.IntFieldRefInput<$PrismaModel>
  gte?: number | Prisma.IntFieldRefInput<$PrismaModel>
  not?: Prisma.NestedIntFilter<$PrismaModel> | number
}

export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
  equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>
  in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>
  notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>
  lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>
  lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>
  gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>
  gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>
  not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
  _count?: Prisma.NestedIntFilter<$PrismaModel>
  _min?: Prisma.NestedDateTimeFilter<$PrismaModel>
  _max?: Prisma.NestedDateTimeFilter<$PrismaModel>
}

export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
  equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null
  in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null
  notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null
  lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>
  lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>
  gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>
  gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>
  not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
  _count?: Prisma.NestedIntNullableFilter<$PrismaModel>
  _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>
  _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>
}

export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
  equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null
  in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null
  notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null
  lt?: number | Prisma.IntFieldRefInput<$PrismaModel>
  lte?: number | Prisma.IntFieldRefInput<$PrismaModel>
  gt?: number | Prisma.IntFieldRefInput<$PrismaModel>
  gte?: number | Prisma.IntFieldRefInput<$PrismaModel>
  not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
  _count?: Prisma.NestedIntNullableFilter<$PrismaModel>
  _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>
  _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>
  _min?: Prisma.NestedIntNullableFilter<$PrismaModel>
  _max?: Prisma.NestedIntNullableFilter<$PrismaModel>
}

export type NestedFloatNullableFilter<$PrismaModel = never> = {
  equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null
  in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null
  notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null
  lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>
  lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>
  gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>
  gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>
  not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null
}

export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
  equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null
  in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null
  notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null
  lt?: string | Prisma.StringFieldRefInput<$PrismaModel>
  lte?: string | Prisma.StringFieldRefInput<$PrismaModel>
  gt?: string | Prisma.StringFieldRefInput<$PrismaModel>
  gte?: string | Prisma.StringFieldRefInput<$PrismaModel>
  contains?: string | Prisma.StringFieldRefInput<$PrismaModel>
  startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>
  endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>
  not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
  _count?: Prisma.NestedIntNullableFilter<$PrismaModel>
  _min?: Prisma.NestedStringNullableFilter<$PrismaModel>
  _max?: Prisma.NestedStringNullableFilter<$PrismaModel>
}

export type NestedJsonFilter<$PrismaModel = never> =
| Prisma.PatchUndefined<
    Prisma.Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
    Required<NestedJsonFilterBase<$PrismaModel>>
  >
| Prisma.OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

export type NestedJsonFilterBase<$PrismaModel = never> = {
  equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter
  path?: string[]
  mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>
  string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>
  string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>
  string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>
  array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null
  array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null
  array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null
  lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>
  lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>
  gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>
  gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>
  not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter
}

export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
  equals?: number | Prisma.IntFieldRefInput<$PrismaModel>
  in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>
  notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>
  lt?: number | Prisma.IntFieldRefInput<$PrismaModel>
  lte?: number | Prisma.IntFieldRefInput<$PrismaModel>
  gt?: number | Prisma.IntFieldRefInput<$PrismaModel>
  gte?: number | Prisma.IntFieldRefInput<$PrismaModel>
  not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number
  _count?: Prisma.NestedIntFilter<$PrismaModel>
  _avg?: Prisma.NestedFloatFilter<$PrismaModel>
  _sum?: Prisma.NestedIntFilter<$PrismaModel>
  _min?: Prisma.NestedIntFilter<$PrismaModel>
  _max?: Prisma.NestedIntFilter<$PrismaModel>
}

export type NestedFloatFilter<$PrismaModel = never> = {
  equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>
  in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>
  notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>
  lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>
  lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>
  gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>
  gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>
  not?: Prisma.NestedFloatFilter<$PrismaModel> | number
}

export type NestedBoolFilter<$PrismaModel = never> = {
  equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>
  not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean
}

export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
  equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>
  not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
  _count?: Prisma.NestedIntFilter<$PrismaModel>
  _min?: Prisma.NestedBoolFilter<$PrismaModel>
  _max?: Prisma.NestedBoolFilter<$PrismaModel>
}
```

====================================================================================================
# FILE 10

## Relative Path
`generated/prisma/enums.ts`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/backend/generated/prisma/enums.ts`

## Source Code

```ts

/* !!! This is code generated by Prisma. Do not edit directly. !!! */
/* eslint-disable */
// biome-ignore-all lint: generated file
// @ts-nocheck 
/*
* This file exports all enum related types from the schema.
*
* 🟢 You can import this file directly.
*/



// This file is empty because there are no enums in the schema.
export {}
```

====================================================================================================
# FILE 11

## Relative Path
`generated/prisma/models.ts`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/backend/generated/prisma/models.ts`

## Source Code

```ts

/* !!! This is code generated by Prisma. Do not edit directly. !!! */
/* eslint-disable */
// biome-ignore-all lint: generated file
// @ts-nocheck 
/*
 * This is a barrel export file for all models and their related types.
 *
 * 🟢 You can import this file directly.
 */
export type * from './models/IngestJob.ts'
export type * from './models/Cluster.ts'
export type * from './models/Article.ts'
export type * from './models/User.ts'
export type * from './models/RefreshToken.ts'
export type * from './commonInputTypes.ts'
```

====================================================================================================
# FILE 12

## Relative Path
`generated/prisma/internal/class.ts`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/backend/generated/prisma/internal/class.ts`

## Source Code

```ts

/* !!! This is code generated by Prisma. Do not edit directly. !!! */
/* eslint-disable */
// biome-ignore-all lint: generated file
// @ts-nocheck 
/*
 * WARNING: This is an internal file that is subject to change!
 *
 * 🛑 Under no circumstances should you import this file directly! 🛑
 *
 * Please import the `PrismaClient` class from the `client.ts` file instead.
 */

import * as runtime from "@prisma/client/runtime/client"
import type * as Prisma from "./prismaNamespace.ts"


const config: runtime.GetPrismaClientConfig = {
  "previewFeatures": [],
  "clientVersion": "7.8.0",
  "engineVersion": "3c6e192761c0362d496ed980de936e2f3cebcd3a",
  "activeProvider": "postgresql",
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Get a free hosted Postgres database in seconds: `npx create-db`\n\ngenerator client {\n  provider = \"prisma-client\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\n// ============================================================\n// CORE TABLES – Required for News Pulse\n// ============================================================\n\nmodel IngestJob {\n  id                String    @id @default(uuid())\n  status            String    @default(\"pending\")\n  triggeredBy       String    @map(\"triggered_by\")\n  triggeredAt       DateTime  @default(now()) @map(\"triggered_at\")\n  startedAt         DateTime? @map(\"started_at\")\n  finishedAt        DateTime? @map(\"finished_at\")\n  articlesFetched   Int?      @map(\"articles_fetched\")\n  clustersGenerated Int?      @map(\"clusters_generated\")\n  errorMessage      String?   @map(\"error_message\")\n  clusters          Cluster[]\n\n  @@index([status])\n  @@map(\"ingest_jobs\")\n}\n\nmodel Cluster {\n  id                String     @id @default(uuid())\n  label             String\n  topTerms          Json       @default(\"[]\") @map(\"top_terms\")\n  articleCount      Int        @default(0) @map(\"article_count\")\n  earliestArticleAt DateTime?  @map(\"earliest_article_at\")\n  latestArticleAt   DateTime?  @map(\"latest_article_at\")\n  ingestJobId       String?    @map(\"ingest_job_id\")\n  createdAt         DateTime   @default(now()) @map(\"created_at\")\n  updatedAt         DateTime   @updatedAt @map(\"updated_at\")\n  ingestJob         IngestJob? @relation(fields: [ingestJobId], references: [id], onDelete: SetNull)\n  articles          Article[]\n\n  @@index([label])\n  @@index([latestArticleAt(sort: Desc)])\n  @@index([earliestArticleAt])\n  @@index([ingestJobId])\n  @@map(\"clusters\")\n}\n\nmodel Article {\n  id          String   @id @default(uuid())\n  clusterId   String?  @map(\"cluster_id\")\n  url         String   @unique\n  urlHash     String   @unique @map(\"url_hash\")\n  headline    String\n  summary     String?\n  bodyText    String?  @map(\"body_text\")\n  sourceName  String   @map(\"source_name\")\n  sourceUrl   String   @map(\"source_url\")\n  publishedAt DateTime @map(\"published_at\")\n  fetchedAt   DateTime @default(now()) @map(\"fetched_at\")\n  cluster     Cluster? @relation(fields: [clusterId], references: [id], onDelete: SetNull)\n\n  @@index([clusterId])\n  @@index([publishedAt(sort: Desc)])\n  @@index([sourceName])\n  @@index([fetchedAt(sort: Desc)])\n  @@map(\"articles\")\n}\n\n// ============================================================\n// OPTIONAL AUTH TABLES – Add only if JWT authentication is enabled\n// The assessment does not require authentication.\n// These tables can be safely ignored or removed.\n// ============================================================\n\nmodel User {\n  id            String         @id @default(uuid())\n  email         String         @unique\n  passwordHash  String         @map(\"password_hash\")\n  role          String         @default(\"viewer\")\n  createdAt     DateTime       @default(now()) @map(\"created_at\")\n  lastLoginAt   DateTime?      @map(\"last_login_at\")\n  refreshTokens RefreshToken[]\n\n  @@map(\"users\")\n}\n\nmodel RefreshToken {\n  id        String    @id @default(uuid())\n  tokenHash String    @unique @map(\"token_hash\")\n  userId    String    @map(\"user_id\")\n  family    String\n  isUsed    Boolean   @default(false) @map(\"is_used\")\n  expiresAt DateTime  @map(\"expires_at\")\n  createdAt DateTime  @default(now()) @map(\"created_at\")\n  revokedAt DateTime? @map(\"revoked_at\")\n  user      User      @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@index([userId])\n  @@index([family])\n  @@index([expiresAt])\n  @@map(\"refresh_tokens\")\n}\n",
  "runtimeDataModel": {
    "models": {},
    "enums": {},
    "types": {}
  },
  "parameterizationSchema": {
    "strings": [],
    "graph": ""
  }
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"IngestJob\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"triggeredBy\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"triggered_by\"},{\"name\":\"triggeredAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"triggered_at\"},{\"name\":\"startedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"started_at\"},{\"name\":\"finishedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"finished_at\"},{\"name\":\"articlesFetched\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"articles_fetched\"},{\"name\":\"clustersGenerated\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"clusters_generated\"},{\"name\":\"errorMessage\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"error_message\"},{\"name\":\"clusters\",\"kind\":\"object\",\"type\":\"Cluster\",\"relationName\":\"ClusterToIngestJob\"}],\"dbName\":\"ingest_jobs\"},\"Cluster\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"label\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"topTerms\",\"kind\":\"scalar\",\"type\":\"Json\",\"dbName\":\"top_terms\"},{\"name\":\"articleCount\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"article_count\"},{\"name\":\"earliestArticleAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"earliest_article_at\"},{\"name\":\"latestArticleAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"latest_article_at\"},{\"name\":\"ingestJobId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"ingest_job_id\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"},{\"name\":\"ingestJob\",\"kind\":\"object\",\"type\":\"IngestJob\",\"relationName\":\"ClusterToIngestJob\"},{\"name\":\"articles\",\"kind\":\"object\",\"type\":\"Article\",\"relationName\":\"ArticleToCluster\"}],\"dbName\":\"clusters\"},\"Article\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"clusterId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"cluster_id\"},{\"name\":\"url\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"urlHash\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"url_hash\"},{\"name\":\"headline\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"summary\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"bodyText\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"body_text\"},{\"name\":\"sourceName\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"source_name\"},{\"name\":\"sourceUrl\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"source_url\"},{\"name\":\"publishedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"published_at\"},{\"name\":\"fetchedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"fetched_at\"},{\"name\":\"cluster\",\"kind\":\"object\",\"type\":\"Cluster\",\"relationName\":\"ArticleToCluster\"}],\"dbName\":\"articles\"},\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"passwordHash\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"password_hash\"},{\"name\":\"role\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"lastLoginAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"last_login_at\"},{\"name\":\"refreshTokens\",\"kind\":\"object\",\"type\":\"RefreshToken\",\"relationName\":\"RefreshTokenToUser\"}],\"dbName\":\"users\"},\"RefreshToken\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"tokenHash\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"token_hash\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"user_id\"},{\"name\":\"family\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"isUsed\",\"kind\":\"scalar\",\"type\":\"Boolean\",\"dbName\":\"is_used\"},{\"name\":\"expiresAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"expires_at\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"revokedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"revoked_at\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"RefreshTokenToUser\"}],\"dbName\":\"refresh_tokens\"}},\"enums\":{},\"types\":{}}")
config.parameterizationSchema = {
  strings: JSON.parse("[\"where\",\"orderBy\",\"cursor\",\"ingestJob\",\"cluster\",\"articles\",\"_count\",\"clusters\",\"IngestJob.findUnique\",\"IngestJob.findUniqueOrThrow\",\"IngestJob.findFirst\",\"IngestJob.findFirstOrThrow\",\"IngestJob.findMany\",\"data\",\"IngestJob.createOne\",\"IngestJob.createMany\",\"IngestJob.createManyAndReturn\",\"IngestJob.updateOne\",\"IngestJob.updateMany\",\"IngestJob.updateManyAndReturn\",\"create\",\"update\",\"IngestJob.upsertOne\",\"IngestJob.deleteOne\",\"IngestJob.deleteMany\",\"having\",\"_avg\",\"_sum\",\"_min\",\"_max\",\"IngestJob.groupBy\",\"IngestJob.aggregate\",\"Cluster.findUnique\",\"Cluster.findUniqueOrThrow\",\"Cluster.findFirst\",\"Cluster.findFirstOrThrow\",\"Cluster.findMany\",\"Cluster.createOne\",\"Cluster.createMany\",\"Cluster.createManyAndReturn\",\"Cluster.updateOne\",\"Cluster.updateMany\",\"Cluster.updateManyAndReturn\",\"Cluster.upsertOne\",\"Cluster.deleteOne\",\"Cluster.deleteMany\",\"Cluster.groupBy\",\"Cluster.aggregate\",\"Article.findUnique\",\"Article.findUniqueOrThrow\",\"Article.findFirst\",\"Article.findFirstOrThrow\",\"Article.findMany\",\"Article.createOne\",\"Article.createMany\",\"Article.createManyAndReturn\",\"Article.updateOne\",\"Article.updateMany\",\"Article.updateManyAndReturn\",\"Article.upsertOne\",\"Article.deleteOne\",\"Article.deleteMany\",\"Article.groupBy\",\"Article.aggregate\",\"user\",\"refreshTokens\",\"User.findUnique\",\"User.findUniqueOrThrow\",\"User.findFirst\",\"User.findFirstOrThrow\",\"User.findMany\",\"User.createOne\",\"User.createMany\",\"User.createManyAndReturn\",\"User.updateOne\",\"User.updateMany\",\"User.updateManyAndReturn\",\"User.upsertOne\",\"User.deleteOne\",\"User.deleteMany\",\"User.groupBy\",\"User.aggregate\",\"RefreshToken.findUnique\",\"RefreshToken.findUniqueOrThrow\",\"RefreshToken.findFirst\",\"RefreshToken.findFirstOrThrow\",\"RefreshToken.findMany\",\"RefreshToken.createOne\",\"RefreshToken.createMany\",\"RefreshToken.createManyAndReturn\",\"RefreshToken.updateOne\",\"RefreshToken.updateMany\",\"RefreshToken.updateManyAndReturn\",\"RefreshToken.upsertOne\",\"RefreshToken.deleteOne\",\"RefreshToken.deleteMany\",\"RefreshToken.groupBy\",\"RefreshToken.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"tokenHash\",\"userId\",\"family\",\"isUsed\",\"expiresAt\",\"createdAt\",\"revokedAt\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"not\",\"contains\",\"startsWith\",\"endsWith\",\"email\",\"passwordHash\",\"role\",\"lastLoginAt\",\"every\",\"some\",\"none\",\"clusterId\",\"url\",\"urlHash\",\"headline\",\"summary\",\"bodyText\",\"sourceName\",\"sourceUrl\",\"publishedAt\",\"fetchedAt\",\"label\",\"topTerms\",\"articleCount\",\"earliestArticleAt\",\"latestArticleAt\",\"ingestJobId\",\"updatedAt\",\"string_contains\",\"string_starts_with\",\"string_ends_with\",\"array_starts_with\",\"array_ends_with\",\"array_contains\",\"status\",\"triggeredBy\",\"triggeredAt\",\"startedAt\",\"finishedAt\",\"articlesFetched\",\"clustersGenerated\",\"errorMessage\",\"is\",\"isNot\",\"connectOrCreate\",\"upsert\",\"createMany\",\"set\",\"disconnect\",\"delete\",\"connect\",\"updateMany\",\"deleteMany\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
  graph: "nQIwUA0HAAC1AQAgYgAAswEAMGMAAAcAEGQAALMBADBlAQAAAAGWAQEAmwEAIZcBAQCbAQAhmAFAAJwBACGZAUAAnQEAIZoBQACdAQAhmwECALQBACGcAQIAtAEAIZ0BAQCxAQAhAQAAAAEAIA4DAAC5AQAgBQAAugEAIGIAALYBADBjAAADABBkAAC2AQAwZQEAmwEAIWtAAJwBACGJAQEAmwEAIYoBAAC3AQAgiwECALgBACGMAUAAnQEAIY0BQACdAQAhjgEBALEBACGPAUAAnAEAIQUDAACKAgAgBQAAiwIAIIwBAAC7AQAgjQEAALsBACCOAQAAuwEAIA4DAAC5AQAgBQAAugEAIGIAALYBADBjAAADABBkAAC2AQAwZQEAAAABa0AAnAEAIYkBAQCbAQAhigEAALcBACCLAQIAuAEAIYwBQACdAQAhjQFAAJ0BACGOAQEAsQEAIY8BQACcAQAhAwAAAAMAIAEAAAQAMAIAAAUAIA0HAAC1AQAgYgAAswEAMGMAAAcAEGQAALMBADBlAQCbAQAhlgEBAJsBACGXAQEAmwEAIZgBQACcAQAhmQFAAJ0BACGaAUAAnQEAIZsBAgC0AQAhnAECALQBACGdAQEAsQEAIQEAAAAHACAPBAAAsgEAIGIAALABADBjAAAJABBkAACwAQAwZQEAmwEAIX8BALEBACGAAQEAmwEAIYEBAQCbAQAhggEBAJsBACGDAQEAsQEAIYQBAQCxAQAhhQEBAJsBACGGAQEAmwEAIYcBQACcAQAhiAFAAJwBACEEBAAAiQIAIH8AALsBACCDAQAAuwEAIIQBAAC7AQAgDwQAALIBACBiAACwAQAwYwAACQAQZAAAsAEAMGUBAAAAAX8BALEBACGAAQEAAAABgQEBAAAAAYIBAQCbAQAhgwEBALEBACGEAQEAsQEAIYUBAQCbAQAhhgEBAJsBACGHAUAAnAEAIYgBQACcAQAhAwAAAAkAIAEAAAoAMAIAAAsAIAEAAAADACABAAAACQAgAQAAAAMAIAEAAAABACAGBwAAiAIAIJkBAAC7AQAgmgEAALsBACCbAQAAuwEAIJwBAAC7AQAgnQEAALsBACADAAAABwAgAQAAEQAwAgAAAQAgAwAAAAcAIAEAABEAMAIAAAEAIAMAAAAHACABAAARADACAAABACAKBwAAhwIAIGUBAAAAAZYBAQAAAAGXAQEAAAABmAFAAAAAAZkBQAAAAAGaAUAAAAABmwECAAAAAZwBAgAAAAGdAQEAAAABAQ0AABUAIAllAQAAAAGWAQEAAAABlwEBAAAAAZgBQAAAAAGZAUAAAAABmgFAAAAAAZsBAgAAAAGcAQIAAAABnQEBAAAAAQENAAAXADABDQAAFwAwCgcAAPoBACBlAQC_AQAhlgEBAL8BACGXAQEAvwEAIZgBQADBAQAhmQFAAMIBACGaAUAAwgEAIZsBAgD5AQAhnAECAPkBACGdAQEA2wEAIQIAAAABACANAAAaACAJZQEAvwEAIZYBAQC_AQAhlwEBAL8BACGYAUAAwQEAIZkBQADCAQAhmgFAAMIBACGbAQIA-QEAIZwBAgD5AQAhnQEBANsBACECAAAABwAgDQAAHAAgAgAAAAcAIA0AABwAIAMAAAABACAUAAAVACAVAAAaACABAAAAAQAgAQAAAAcAIAoGAAD0AQAgGgAA9QEAIBsAAPgBACAcAAD3AQAgHQAA9gEAIJkBAAC7AQAgmgEAALsBACCbAQAAuwEAIJwBAAC7AQAgnQEAALsBACAMYgAArAEAMGMAACMAEGQAAKwBADBlAQCLAQAhlgEBAIsBACGXAQEAiwEAIZgBQACNAQAhmQFAAI4BACGaAUAAjgEAIZsBAgCtAQAhnAECAK0BACGdAQEAowEAIQMAAAAHACABAAAiADAZAAAjACADAAAABwAgAQAAEQAwAgAAAQAgAQAAAAUAIAEAAAAFACADAAAAAwAgAQAABAAwAgAABQAgAwAAAAMAIAEAAAQAMAIAAAUAIAMAAAADACABAAAEADACAAAFACALAwAA8gEAIAUAAPMBACBlAQAAAAFrQAAAAAGJAQEAAAABigGAAAAAAYsBAgAAAAGMAUAAAAABjQFAAAAAAY4BAQAAAAGPAUAAAAABAQ0AACsAIAllAQAAAAFrQAAAAAGJAQEAAAABigGAAAAAAYsBAgAAAAGMAUAAAAABjQFAAAAAAY4BAQAAAAGPAUAAAAABAQ0AAC0AMAENAAAtADABAAAABwAgCwMAAOQBACAFAADlAQAgZQEAvwEAIWtAAMEBACGJAQEAvwEAIYoBgAAAAAGLAQIA4wEAIYwBQADCAQAhjQFAAMIBACGOAQEA2wEAIY8BQADBAQAhAgAAAAUAIA0AADEAIAllAQC_AQAha0AAwQEAIYkBAQC_AQAhigGAAAAAAYsBAgDjAQAhjAFAAMIBACGNAUAAwgEAIY4BAQDbAQAhjwFAAMEBACECAAAAAwAgDQAAMwAgAgAAAAMAIA0AADMAIAEAAAAHACADAAAABQAgFAAAKwAgFQAAMQAgAQAAAAUAIAEAAAADACAIBgAA3gEAIBoAAN8BACAbAADiAQAgHAAA4QEAIB0AAOABACCMAQAAuwEAII0BAAC7AQAgjgEAALsBACAMYgAApgEAMGMAADsAEGQAAKYBADBlAQCLAQAha0AAjQEAIYkBAQCLAQAhigEAAKcBACCLAQIAqAEAIYwBQACOAQAhjQFAAI4BACGOAQEAowEAIY8BQACNAQAhAwAAAAMAIAEAADoAMBkAADsAIAMAAAADACABAAAEADACAAAFACABAAAACwAgAQAAAAsAIAMAAAAJACABAAAKADACAAALACADAAAACQAgAQAACgAwAgAACwAgAwAAAAkAIAEAAAoAMAIAAAsAIAwEAADdAQAgZQEAAAABfwEAAAABgAEBAAAAAYEBAQAAAAGCAQEAAAABgwEBAAAAAYQBAQAAAAGFAQEAAAABhgEBAAAAAYcBQAAAAAGIAUAAAAABAQ0AAEMAIAtlAQAAAAF_AQAAAAGAAQEAAAABgQEBAAAAAYIBAQAAAAGDAQEAAAABhAEBAAAAAYUBAQAAAAGGAQEAAAABhwFAAAAAAYgBQAAAAAEBDQAARQAwAQ0AAEUAMAEAAAADACAMBAAA3AEAIGUBAL8BACF_AQDbAQAhgAEBAL8BACGBAQEAvwEAIYIBAQC_AQAhgwEBANsBACGEAQEA2wEAIYUBAQC_AQAhhgEBAL8BACGHAUAAwQEAIYgBQADBAQAhAgAAAAsAIA0AAEkAIAtlAQC_AQAhfwEA2wEAIYABAQC_AQAhgQEBAL8BACGCAQEAvwEAIYMBAQDbAQAhhAEBANsBACGFAQEAvwEAIYYBAQC_AQAhhwFAAMEBACGIAUAAwQEAIQIAAAAJACANAABLACACAAAACQAgDQAASwAgAQAAAAMAIAMAAAALACAUAABDACAVAABJACABAAAACwAgAQAAAAkAIAYGAADYAQAgHAAA2gEAIB0AANkBACB_AAC7AQAggwEAALsBACCEAQAAuwEAIA5iAACiAQAwYwAAUwAQZAAAogEAMGUBAIsBACF_AQCjAQAhgAEBAIsBACGBAQEAiwEAIYIBAQCLAQAhgwEBAKMBACGEAQEAowEAIYUBAQCLAQAhhgEBAIsBACGHAUAAjQEAIYgBQACNAQAhAwAAAAkAIAEAAFIAMBkAAFMAIAMAAAAJACABAAAKADACAAALACAKQQAAngEAIGIAAJoBADBjAABeABBkAACaAQAwZQEAAAABa0AAnAEAIXgBAAAAAXkBAJsBACF6AQCbAQAhe0AAnQEAIQEAAABWACAMQAAAoQEAIGIAAJ8BADBjAABYABBkAACfAQAwZQEAmwEAIWYBAJsBACFnAQCbAQAhaAEAmwEAIWkgAKABACFqQACcAQAha0AAnAEAIWxAAJ0BACECQAAA1wEAIGwAALsBACAMQAAAoQEAIGIAAJ8BADBjAABYABBkAACfAQAwZQEAAAABZgEAAAABZwEAmwEAIWgBAJsBACFpIACgAQAhakAAnAEAIWtAAJwBACFsQACdAQAhAwAAAFgAIAEAAFkAMAIAAFoAIAEAAABYACABAAAAVgAgCkEAAJ4BACBiAACaAQAwYwAAXgAQZAAAmgEAMGUBAJsBACFrQACcAQAheAEAmwEAIXkBAJsBACF6AQCbAQAhe0AAnQEAIQJBAADWAQAgewAAuwEAIAMAAABeACABAABfADACAABWACADAAAAXgAgAQAAXwAwAgAAVgAgAwAAAF4AIAEAAF8AMAIAAFYAIAdBAADVAQAgZQEAAAABa0AAAAABeAEAAAABeQEAAAABegEAAAABe0AAAAABAQ0AAGMAIAZlAQAAAAFrQAAAAAF4AQAAAAF5AQAAAAF6AQAAAAF7QAAAAAEBDQAAZQAwAQ0AAGUAMAdBAADIAQAgZQEAvwEAIWtAAMEBACF4AQC_AQAheQEAvwEAIXoBAL8BACF7QADCAQAhAgAAAFYAIA0AAGgAIAZlAQC_AQAha0AAwQEAIXgBAL8BACF5AQC_AQAhegEAvwEAIXtAAMIBACECAAAAXgAgDQAAagAgAgAAAF4AIA0AAGoAIAMAAABWACAUAABjACAVAABoACABAAAAVgAgAQAAAF4AIAQGAADFAQAgHAAAxwEAIB0AAMYBACB7AAC7AQAgCWIAAJkBADBjAABxABBkAACZAQAwZQEAiwEAIWtAAI0BACF4AQCLAQAheQEAiwEAIXoBAIsBACF7QACOAQAhAwAAAF4AIAEAAHAAMBkAAHEAIAMAAABeACABAABfADACAABWACABAAAAWgAgAQAAAFoAIAMAAABYACABAABZADACAABaACADAAAAWAAgAQAAWQAwAgAAWgAgAwAAAFgAIAEAAFkAMAIAAFoAIAlAAADEAQAgZQEAAAABZgEAAAABZwEAAAABaAEAAAABaSAAAAABakAAAAABa0AAAAABbEAAAAABAQ0AAHkAIAhlAQAAAAFmAQAAAAFnAQAAAAFoAQAAAAFpIAAAAAFqQAAAAAFrQAAAAAFsQAAAAAEBDQAAewAwAQ0AAHsAMAlAAADDAQAgZQEAvwEAIWYBAL8BACFnAQC_AQAhaAEAvwEAIWkgAMABACFqQADBAQAha0AAwQEAIWxAAMIBACECAAAAWgAgDQAAfgAgCGUBAL8BACFmAQC_AQAhZwEAvwEAIWgBAL8BACFpIADAAQAhakAAwQEAIWtAAMEBACFsQADCAQAhAgAAAFgAIA0AAIABACACAAAAWAAgDQAAgAEAIAMAAABaACAUAAB5ACAVAAB-ACABAAAAWgAgAQAAAFgAIAQGAAC8AQAgHAAAvgEAIB0AAL0BACBsAAC7AQAgC2IAAIoBADBjAACHAQAQZAAAigEAMGUBAIsBACFmAQCLAQAhZwEAiwEAIWgBAIsBACFpIACMAQAhakAAjQEAIWtAAI0BACFsQACOAQAhAwAAAFgAIAEAAIYBADAZAACHAQAgAwAAAFgAIAEAAFkAMAIAAFoAIAtiAACKAQAwYwAAhwEAEGQAAIoBADBlAQCLAQAhZgEAiwEAIWcBAIsBACFoAQCLAQAhaSAAjAEAIWpAAI0BACFrQACNAQAhbEAAjgEAIQ4GAACTAQAgHAAAmAEAIB0AAJgBACBtAQAAAAFuAQAAAARvAQAAAARwAQAAAAFxAQAAAAFyAQAAAAFzAQAAAAF0AQCXAQAhdQEAAAABdgEAAAABdwEAAAABBQYAAJMBACAcAACWAQAgHQAAlgEAIG0gAAAAAXQgAJUBACELBgAAkwEAIBwAAJQBACAdAACUAQAgbUAAAAABbkAAAAAEb0AAAAAEcEAAAAABcUAAAAABckAAAAABc0AAAAABdEAAkgEAIQsGAACQAQAgHAAAkQEAIB0AAJEBACBtQAAAAAFuQAAAAAVvQAAAAAVwQAAAAAFxQAAAAAFyQAAAAAFzQAAAAAF0QACPAQAhCwYAAJABACAcAACRAQAgHQAAkQEAIG1AAAAAAW5AAAAABW9AAAAABXBAAAAAAXFAAAAAAXJAAAAAAXNAAAAAAXRAAI8BACEIbQIAAAABbgIAAAAFbwIAAAAFcAIAAAABcQIAAAABcgIAAAABcwIAAAABdAIAkAEAIQhtQAAAAAFuQAAAAAVvQAAAAAVwQAAAAAFxQAAAAAFyQAAAAAFzQAAAAAF0QACRAQAhCwYAAJMBACAcAACUAQAgHQAAlAEAIG1AAAAAAW5AAAAABG9AAAAABHBAAAAAAXFAAAAAAXJAAAAAAXNAAAAAAXRAAJIBACEIbQIAAAABbgIAAAAEbwIAAAAEcAIAAAABcQIAAAABcgIAAAABcwIAAAABdAIAkwEAIQhtQAAAAAFuQAAAAARvQAAAAARwQAAAAAFxQAAAAAFyQAAAAAFzQAAAAAF0QACUAQAhBQYAAJMBACAcAACWAQAgHQAAlgEAIG0gAAAAAXQgAJUBACECbSAAAAABdCAAlgEAIQ4GAACTAQAgHAAAmAEAIB0AAJgBACBtAQAAAAFuAQAAAARvAQAAAARwAQAAAAFxAQAAAAFyAQAAAAFzAQAAAAF0AQCXAQAhdQEAAAABdgEAAAABdwEAAAABC20BAAAAAW4BAAAABG8BAAAABHABAAAAAXEBAAAAAXIBAAAAAXMBAAAAAXQBAJgBACF1AQAAAAF2AQAAAAF3AQAAAAEJYgAAmQEAMGMAAHEAEGQAAJkBADBlAQCLAQAha0AAjQEAIXgBAIsBACF5AQCLAQAhegEAiwEAIXtAAI4BACEKQQAAngEAIGIAAJoBADBjAABeABBkAACaAQAwZQEAmwEAIWtAAJwBACF4AQCbAQAheQEAmwEAIXoBAJsBACF7QACdAQAhC20BAAAAAW4BAAAABG8BAAAABHABAAAAAXEBAAAAAXIBAAAAAXMBAAAAAXQBAJgBACF1AQAAAAF2AQAAAAF3AQAAAAEIbUAAAAABbkAAAAAEb0AAAAAEcEAAAAABcUAAAAABckAAAAABc0AAAAABdEAAlAEAIQhtQAAAAAFuQAAAAAVvQAAAAAVwQAAAAAFxQAAAAAFyQAAAAAFzQAAAAAF0QACRAQAhA3wAAFgAIH0AAFgAIH4AAFgAIAxAAAChAQAgYgAAnwEAMGMAAFgAEGQAAJ8BADBlAQCbAQAhZgEAmwEAIWcBAJsBACFoAQCbAQAhaSAAoAEAIWpAAJwBACFrQACcAQAhbEAAnQEAIQJtIAAAAAF0IACWAQAhDEEAAJ4BACBiAACaAQAwYwAAXgAQZAAAmgEAMGUBAJsBACFrQACcAQAheAEAmwEAIXkBAJsBACF6AQCbAQAhe0AAnQEAIZ4BAABeACCfAQAAXgAgDmIAAKIBADBjAABTABBkAACiAQAwZQEAiwEAIX8BAKMBACGAAQEAiwEAIYEBAQCLAQAhggEBAIsBACGDAQEAowEAIYQBAQCjAQAhhQEBAIsBACGGAQEAiwEAIYcBQACNAQAhiAFAAI0BACEOBgAAkAEAIBwAAKUBACAdAAClAQAgbQEAAAABbgEAAAAFbwEAAAAFcAEAAAABcQEAAAABcgEAAAABcwEAAAABdAEApAEAIXUBAAAAAXYBAAAAAXcBAAAAAQ4GAACQAQAgHAAApQEAIB0AAKUBACBtAQAAAAFuAQAAAAVvAQAAAAVwAQAAAAFxAQAAAAFyAQAAAAFzAQAAAAF0AQCkAQAhdQEAAAABdgEAAAABdwEAAAABC20BAAAAAW4BAAAABW8BAAAABXABAAAAAXEBAAAAAXIBAAAAAXMBAAAAAXQBAKUBACF1AQAAAAF2AQAAAAF3AQAAAAEMYgAApgEAMGMAADsAEGQAAKYBADBlAQCLAQAha0AAjQEAIYkBAQCLAQAhigEAAKcBACCLAQIAqAEAIYwBQACOAQAhjQFAAI4BACGOAQEAowEAIY8BQACNAQAhDwYAAJMBACAcAACrAQAgHQAAqwEAIG2AAAAAAXCAAAAAAXGAAAAAAXKAAAAAAXOAAAAAAXSAAAAAAZABAQAAAAGRAQEAAAABkgEBAAAAAZMBgAAAAAGUAYAAAAABlQGAAAAAAQ0GAACTAQAgGgAAqgEAIBsAAJMBACAcAACTAQAgHQAAkwEAIG0CAAAAAW4CAAAABG8CAAAABHACAAAAAXECAAAAAXICAAAAAXMCAAAAAXQCAKkBACENBgAAkwEAIBoAAKoBACAbAACTAQAgHAAAkwEAIB0AAJMBACBtAgAAAAFuAgAAAARvAgAAAARwAgAAAAFxAgAAAAFyAgAAAAFzAgAAAAF0AgCpAQAhCG0IAAAAAW4IAAAABG8IAAAABHAIAAAAAXEIAAAAAXIIAAAAAXMIAAAAAXQIAKoBACEMbYAAAAABcIAAAAABcYAAAAABcoAAAAABc4AAAAABdIAAAAABkAEBAAAAAZEBAQAAAAGSAQEAAAABkwGAAAAAAZQBgAAAAAGVAYAAAAABDGIAAKwBADBjAAAjABBkAACsAQAwZQEAiwEAIZYBAQCLAQAhlwEBAIsBACGYAUAAjQEAIZkBQACOAQAhmgFAAI4BACGbAQIArQEAIZwBAgCtAQAhnQEBAKMBACENBgAAkAEAIBoAAK8BACAbAACQAQAgHAAAkAEAIB0AAJABACBtAgAAAAFuAgAAAAVvAgAAAAVwAgAAAAFxAgAAAAFyAgAAAAFzAgAAAAF0AgCuAQAhDQYAAJABACAaAACvAQAgGwAAkAEAIBwAAJABACAdAACQAQAgbQIAAAABbgIAAAAFbwIAAAAFcAIAAAABcQIAAAABcgIAAAABcwIAAAABdAIArgEAIQhtCAAAAAFuCAAAAAVvCAAAAAVwCAAAAAFxCAAAAAFyCAAAAAFzCAAAAAF0CACvAQAhDwQAALIBACBiAACwAQAwYwAACQAQZAAAsAEAMGUBAJsBACF_AQCxAQAhgAEBAJsBACGBAQEAmwEAIYIBAQCbAQAhgwEBALEBACGEAQEAsQEAIYUBAQCbAQAhhgEBAJsBACGHAUAAnAEAIYgBQACcAQAhC20BAAAAAW4BAAAABW8BAAAABXABAAAAAXEBAAAAAXIBAAAAAXMBAAAAAXQBAKUBACF1AQAAAAF2AQAAAAF3AQAAAAEQAwAAuQEAIAUAALoBACBiAAC2AQAwYwAAAwAQZAAAtgEAMGUBAJsBACFrQACcAQAhiQEBAJsBACGKAQAAtwEAIIsBAgC4AQAhjAFAAJ0BACGNAUAAnQEAIY4BAQCxAQAhjwFAAJwBACGeAQAAAwAgnwEAAAMAIA0HAAC1AQAgYgAAswEAMGMAAAcAEGQAALMBADBlAQCbAQAhlgEBAJsBACGXAQEAmwEAIZgBQACcAQAhmQFAAJ0BACGaAUAAnQEAIZsBAgC0AQAhnAECALQBACGdAQEAsQEAIQhtAgAAAAFuAgAAAAVvAgAAAAVwAgAAAAFxAgAAAAFyAgAAAAFzAgAAAAF0AgCQAQAhA3wAAAMAIH0AAAMAIH4AAAMAIA4DAAC5AQAgBQAAugEAIGIAALYBADBjAAADABBkAAC2AQAwZQEAmwEAIWtAAJwBACGJAQEAmwEAIYoBAAC3AQAgiwECALgBACGMAUAAnQEAIY0BQACdAQAhjgEBALEBACGPAUAAnAEAIQxtgAAAAAFwgAAAAAFxgAAAAAFygAAAAAFzgAAAAAF0gAAAAAGQAQEAAAABkQEBAAAAAZIBAQAAAAGTAYAAAAABlAGAAAAAAZUBgAAAAAEIbQIAAAABbgIAAAAEbwIAAAAEcAIAAAABcQIAAAABcgIAAAABcwIAAAABdAIAkwEAIQ8HAAC1AQAgYgAAswEAMGMAAAcAEGQAALMBADBlAQCbAQAhlgEBAJsBACGXAQEAmwEAIZgBQACcAQAhmQFAAJ0BACGaAUAAnQEAIZsBAgC0AQAhnAECALQBACGdAQEAsQEAIZ4BAAAHACCfAQAABwAgA3wAAAkAIH0AAAkAIH4AAAkAIAAAAAABowEBAAAAAQGjASAAAAABAaMBQAAAAAEBowFAAAAAAQUUAACZAgAgFQAAnAIAIKABAACaAgAgoQEAAJsCACCmAQAAVgAgAxQAAJkCACCgAQAAmgIAIKYBAABWACAAAAALFAAAyQEAMBUAAM4BADCgAQAAygEAMKEBAADLAQAwogEAAMwBACCjAQAAzQEAMKQBAADNAQAwpQEAAM0BADCmAQAAzQEAMKcBAADPAQAwqAEAANABADAHZQEAAAABZgEAAAABaAEAAAABaSAAAAABakAAAAABa0AAAAABbEAAAAABAgAAAFoAIBQAANQBACADAAAAWgAgFAAA1AEAIBUAANMBACABDQAAmAIAMAxAAAChAQAgYgAAnwEAMGMAAFgAEGQAAJ8BADBlAQAAAAFmAQAAAAFnAQCbAQAhaAEAmwEAIWkgAKABACFqQACcAQAha0AAnAEAIWxAAJ0BACECAAAAWgAgDQAA0wEAIAIAAADRAQAgDQAA0gEAIAtiAADQAQAwYwAA0QEAEGQAANABADBlAQCbAQAhZgEAmwEAIWcBAJsBACFoAQCbAQAhaSAAoAEAIWpAAJwBACFrQACcAQAhbEAAnQEAIQtiAADQAQAwYwAA0QEAEGQAANABADBlAQCbAQAhZgEAmwEAIWcBAJsBACFoAQCbAQAhaSAAoAEAIWpAAJwBACFrQACcAQAhbEAAnQEAIQdlAQC_AQAhZgEAvwEAIWgBAL8BACFpIADAAQAhakAAwQEAIWtAAMEBACFsQADCAQAhB2UBAL8BACFmAQC_AQAhaAEAvwEAIWkgAMABACFqQADBAQAha0AAwQEAIWxAAMIBACEHZQEAAAABZgEAAAABaAEAAAABaSAAAAABakAAAAABa0AAAAABbEAAAAABBBQAAMkBADCgAQAAygEAMKIBAADMAQAgpgEAAM0BADAAAkEAANYBACB7AAC7AQAgAAAAAaMBAQAAAAEHFAAAkwIAIBUAAJYCACCgAQAAlAIAIKEBAACVAgAgpAEAAAMAIKUBAAADACCmAQAABQAgAxQAAJMCACCgAQAAlAIAIKYBAAAFACAAAAAAAAWjAQIAAAABqQECAAAAAaoBAgAAAAGrAQIAAAABrAECAAAAAQcUAACNAgAgFQAAkQIAIKABAACOAgAgoQEAAJACACCkAQAABwAgpQEAAAcAIKYBAAABACALFAAA5gEAMBUAAOsBADCgAQAA5wEAMKEBAADoAQAwogEAAOkBACCjAQAA6gEAMKQBAADqAQAwpQEAAOoBADCmAQAA6gEAMKcBAADsAQAwqAEAAO0BADAKZQEAAAABgAEBAAAAAYEBAQAAAAGCAQEAAAABgwEBAAAAAYQBAQAAAAGFAQEAAAABhgEBAAAAAYcBQAAAAAGIAUAAAAABAgAAAAsAIBQAAPEBACADAAAACwAgFAAA8QEAIBUAAPABACABDQAAjwIAMA8EAACyAQAgYgAAsAEAMGMAAAkAEGQAALABADBlAQAAAAF_AQCxAQAhgAEBAAAAAYEBAQAAAAGCAQEAmwEAIYMBAQCxAQAhhAEBALEBACGFAQEAmwEAIYYBAQCbAQAhhwFAAJwBACGIAUAAnAEAIQIAAAALACANAADwAQAgAgAAAO4BACANAADvAQAgDmIAAO0BADBjAADuAQAQZAAA7QEAMGUBAJsBACF_AQCxAQAhgAEBAJsBACGBAQEAmwEAIYIBAQCbAQAhgwEBALEBACGEAQEAsQEAIYUBAQCbAQAhhgEBAJsBACGHAUAAnAEAIYgBQACcAQAhDmIAAO0BADBjAADuAQAQZAAA7QEAMGUBAJsBACF_AQCxAQAhgAEBAJsBACGBAQEAmwEAIYIBAQCbAQAhgwEBALEBACGEAQEAsQEAIYUBAQCbAQAhhgEBAJsBACGHAUAAnAEAIYgBQACcAQAhCmUBAL8BACGAAQEAvwEAIYEBAQC_AQAhggEBAL8BACGDAQEA2wEAIYQBAQDbAQAhhQEBAL8BACGGAQEAvwEAIYcBQADBAQAhiAFAAMEBACEKZQEAvwEAIYABAQC_AQAhgQEBAL8BACGCAQEAvwEAIYMBAQDbAQAhhAEBANsBACGFAQEAvwEAIYYBAQC_AQAhhwFAAMEBACGIAUAAwQEAIQplAQAAAAGAAQEAAAABgQEBAAAAAYIBAQAAAAGDAQEAAAABhAEBAAAAAYUBAQAAAAGGAQEAAAABhwFAAAAAAYgBQAAAAAEDFAAAjQIAIKABAACOAgAgpgEAAAEAIAQUAADmAQAwoAEAAOcBADCiAQAA6QEAIKYBAADqAQAwAAAAAAAFowECAAAAAakBAgAAAAGqAQIAAAABqwECAAAAAawBAgAAAAELFAAA-wEAMBUAAIACADCgAQAA_AEAMKEBAAD9AQAwogEAAP4BACCjAQAA_wEAMKQBAAD_AQAwpQEAAP8BADCmAQAA_wEAMKcBAACBAgAwqAEAAIICADAJBQAA8wEAIGUBAAAAAWtAAAAAAYkBAQAAAAGKAYAAAAABiwECAAAAAYwBQAAAAAGNAUAAAAABjwFAAAAAAQIAAAAFACAUAACGAgAgAwAAAAUAIBQAAIYCACAVAACFAgAgAQ0AAIwCADAOAwAAuQEAIAUAALoBACBiAAC2AQAwYwAAAwAQZAAAtgEAMGUBAAAAAWtAAJwBACGJAQEAmwEAIYoBAAC3AQAgiwECALgBACGMAUAAnQEAIY0BQACdAQAhjgEBALEBACGPAUAAnAEAIQIAAAAFACANAACFAgAgAgAAAIMCACANAACEAgAgDGIAAIICADBjAACDAgAQZAAAggIAMGUBAJsBACFrQACcAQAhiQEBAJsBACGKAQAAtwEAIIsBAgC4AQAhjAFAAJ0BACGNAUAAnQEAIY4BAQCxAQAhjwFAAJwBACEMYgAAggIAMGMAAIMCABBkAACCAgAwZQEAmwEAIWtAAJwBACGJAQEAmwEAIYoBAAC3AQAgiwECALgBACGMAUAAnQEAIY0BQACdAQAhjgEBALEBACGPAUAAnAEAIQhlAQC_AQAha0AAwQEAIYkBAQC_AQAhigGAAAAAAYsBAgDjAQAhjAFAAMIBACGNAUAAwgEAIY8BQADBAQAhCQUAAOUBACBlAQC_AQAha0AAwQEAIYkBAQC_AQAhigGAAAAAAYsBAgDjAQAhjAFAAMIBACGNAUAAwgEAIY8BQADBAQAhCQUAAPMBACBlAQAAAAFrQAAAAAGJAQEAAAABigGAAAAAAYsBAgAAAAGMAUAAAAABjQFAAAAAAY8BQAAAAAEEFAAA-wEAMKABAAD8AQAwogEAAP4BACCmAQAA_wEAMAAFAwAAigIAIAUAAIsCACCMAQAAuwEAII0BAAC7AQAgjgEAALsBACAGBwAAiAIAIJkBAAC7AQAgmgEAALsBACCbAQAAuwEAIJwBAAC7AQAgnQEAALsBACAACGUBAAAAAWtAAAAAAYkBAQAAAAGKAYAAAAABiwECAAAAAYwBQAAAAAGNAUAAAAABjwFAAAAAAQllAQAAAAGWAQEAAAABlwEBAAAAAZgBQAAAAAGZAUAAAAABmgFAAAAAAZsBAgAAAAGcAQIAAAABnQEBAAAAAQIAAAABACAUAACNAgAgCmUBAAAAAYABAQAAAAGBAQEAAAABggEBAAAAAYMBAQAAAAGEAQEAAAABhQEBAAAAAYYBAQAAAAGHAUAAAAABiAFAAAAAAQMAAAAHACAUAACNAgAgFQAAkgIAIAsAAAAHACANAACSAgAgZQEAvwEAIZYBAQC_AQAhlwEBAL8BACGYAUAAwQEAIZkBQADCAQAhmgFAAMIBACGbAQIA-QEAIZwBAgD5AQAhnQEBANsBACEJZQEAvwEAIZYBAQC_AQAhlwEBAL8BACGYAUAAwQEAIZkBQADCAQAhmgFAAMIBACGbAQIA-QEAIZwBAgD5AQAhnQEBANsBACEKAwAA8gEAIGUBAAAAAWtAAAAAAYkBAQAAAAGKAYAAAAABiwECAAAAAYwBQAAAAAGNAUAAAAABjgEBAAAAAY8BQAAAAAECAAAABQAgFAAAkwIAIAMAAAADACAUAACTAgAgFQAAlwIAIAwAAAADACADAADkAQAgDQAAlwIAIGUBAL8BACFrQADBAQAhiQEBAL8BACGKAYAAAAABiwECAOMBACGMAUAAwgEAIY0BQADCAQAhjgEBANsBACGPAUAAwQEAIQoDAADkAQAgZQEAvwEAIWtAAMEBACGJAQEAvwEAIYoBgAAAAAGLAQIA4wEAIYwBQADCAQAhjQFAAMIBACGOAQEA2wEAIY8BQADBAQAhB2UBAAAAAWYBAAAAAWgBAAAAAWkgAAAAAWpAAAAAAWtAAAAAAWxAAAAAAQZlAQAAAAFrQAAAAAF4AQAAAAF5AQAAAAF6AQAAAAF7QAAAAAECAAAAVgAgFAAAmQIAIAMAAABeACAUAACZAgAgFQAAnQIAIAgAAABeACANAACdAgAgZQEAvwEAIWtAAMEBACF4AQC_AQAheQEAvwEAIXoBAL8BACF7QADCAQAhBmUBAL8BACFrQADBAQAheAEAvwEAIXkBAL8BACF6AQC_AQAhe0AAwgEAIQIGAAUHBgIDAwgBBQwDBgAEAQQNAgEFDgABBw8AAAAABQYAChoACxsADBwADR0ADgAAAAAABQYAChoACxsADBwADR0ADgEDMAEBAzYBBQYAExoAFBsAFRwAFh0AFwAAAAAABQYAExoAFBsAFRwAFh0AFwEESAIBBE4CAwYAHBwAHR0AHgAAAAMGABwcAB0dAB4CBgAiQVshAUAAIAFBXAAAAAMGACYcACcdACgAAAADBgAmHAAnHQAoAUAAIAFAACADBgAtHAAuHQAvAAAAAwYALRwALh0ALwgCAQkQAQoSAQsTAQwUAQ4WAQ8YBhAZBxEbARIdBhMeCBYfARcgARghBh4kCR8lDyAmAiEnAiIoAiMpAiQqAiUsAiYuBicvECgyAik0Bio1ESs3Aiw4Ai05Bi48Ei89GDA-AzE_AzJAAzNBAzRCAzVEAzZGBjdHGThKAzlMBjpNGjtPAzxQAz1RBj5UGz9VH0JXIENdIERgIEVhIEZiIEdkIEhmBklnI0ppIEtrBkxsJE1tIE5uIE9vBlByJVFzKVJ0IVN1IVR2IVV3IVZ4IVd6IVh8Bll9Klp_IVuBAQZcggErXYMBIV6EASFfhQEGYIgBLGGJATA"
}

async function decodeBase64AsWasm(wasmBase64: string): Promise<WebAssembly.Module> {
  const { Buffer } = await import('node:buffer')
  const wasmArray = Buffer.from(wasmBase64, 'base64')
  return new WebAssembly.Module(wasmArray)
}

config.compilerWasm = {
  getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs"),

  getQueryCompilerWasmModule: async () => {
    const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.mjs")
    return await decodeBase64AsWasm(wasm)
  },

  importName: "./query_compiler_fast_bg.js"
}



export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> =
  'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never

export interface PrismaClientConstructor {
    /**
   * ## Prisma Client
   * 
   * Type-safe database client for TypeScript
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more IngestJobs
   * const ingestJobs = await prisma.ingestJob.findMany()
   * ```
   * 
   * Read more in our [docs](https://pris.ly/d/client).
   */

  new <
    Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
    LogOpts extends LogOptions<Options> = LogOptions<Options>,
    OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends { omit: infer U } ? U : Prisma.PrismaClientOptions['omit'],
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  >(options: Prisma.Subset<Options, Prisma.PrismaClientOptions> ): PrismaClient<LogOpts, OmitOpts, ExtArgs>
}

/**
 * ## Prisma Client
 * 
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more IngestJobs
 * const ingestJobs = await prisma.ingestJob.findMany()
 * ```
 * 
 * Read more in our [docs](https://pris.ly/d/client).
 */

export interface PrismaClient<
  in LogOpts extends Prisma.LogLevel = never,
  in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined,
  in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

  $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): runtime.Types.Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): runtime.Types.Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): runtime.Types.Utils.JsPromise<R>

  $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.ingestJob`: Exposes CRUD operations for the **IngestJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IngestJobs
    * const ingestJobs = await prisma.ingestJob.findMany()
    * ```
    */
  get ingestJob(): Prisma.IngestJobDelegate<ExtArgs, { omit: OmitOpts }>;

  /**
   * `prisma.cluster`: Exposes CRUD operations for the **Cluster** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clusters
    * const clusters = await prisma.cluster.findMany()
    * ```
    */
  get cluster(): Prisma.ClusterDelegate<ExtArgs, { omit: OmitOpts }>;

  /**
   * `prisma.article`: Exposes CRUD operations for the **Article** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.article.findMany()
    * ```
    */
  get article(): Prisma.ArticleDelegate<ExtArgs, { omit: OmitOpts }>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, { omit: OmitOpts }>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, { omit: OmitOpts }>;
}

export function getPrismaClientClass(): PrismaClientConstructor {
  return runtime.getPrismaClient(config) as unknown as PrismaClientConstructor
}
```

====================================================================================================
# FILE 13

## Relative Path
`generated/prisma/internal/prismaNamespace.ts`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/backend/generated/prisma/internal/prismaNamespace.ts`

## Source Code

```ts

/* !!! This is code generated by Prisma. Do not edit directly. !!! */
/* eslint-disable */
// biome-ignore-all lint: generated file
// @ts-nocheck 
/*
 * WARNING: This is an internal file that is subject to change!
 *
 * 🛑 Under no circumstances should you import this file directly! 🛑
 *
 * All exports from this file are wrapped under a `Prisma` namespace object in the client.ts file.
 * While this enables partial backward compatibility, it is not part of the stable public API.
 *
 * If you are looking for your Models, Enums, and Input Types, please import them from the respective
 * model files in the `model` directory!
 */

import * as runtime from "@prisma/client/runtime/client"
import type * as Prisma from "../models.ts"
import { type PrismaClient } from "./class.ts"

export type * from '../models.ts'

export type DMMF = typeof runtime.DMMF

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

/**
 * Prisma Errors
 */

export const PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError

export const PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError

export const PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError

export const PrismaClientInitializationError = runtime.PrismaClientInitializationError
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError

export const PrismaClientValidationError = runtime.PrismaClientValidationError
export type PrismaClientValidationError = runtime.PrismaClientValidationError

/**
 * Re-export of sql-template-tag
 */
export const sql = runtime.sqltag
export const empty = runtime.empty
export const join = runtime.join
export const raw = runtime.raw
export const Sql = runtime.Sql
export type Sql = runtime.Sql



/**
 * Decimal.js
 */
export const Decimal = runtime.Decimal
export type Decimal = runtime.Decimal

export type DecimalJsLike = runtime.DecimalJsLike

/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs
export const getExtensionContext = runtime.Extensions.getExtensionContext
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>

export type PrismaVersion = {
  client: string
  engine: string
}

/**
 * Prisma Client JS version: 7.8.0
 * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
 */
export const prismaVersion: PrismaVersion = {
  client: "7.8.0",
  engine: "3c6e192761c0362d496ed980de936e2f3cebcd3a"
}

/**
 * Utility Types
 */

export type Bytes = runtime.Bytes
export type JsonObject = runtime.JsonObject
export type JsonArray = runtime.JsonArray
export type JsonValue = runtime.JsonValue
export type InputJsonObject = runtime.InputJsonObject
export type InputJsonArray = runtime.InputJsonArray
export type InputJsonValue = runtime.InputJsonValue


export const NullTypes = {
  DbNull: runtime.NullTypes.DbNull as (new (secret: never) => typeof runtime.DbNull),
  JsonNull: runtime.NullTypes.JsonNull as (new (secret: never) => typeof runtime.JsonNull),
  AnyNull: runtime.NullTypes.AnyNull as (new (secret: never) => typeof runtime.AnyNull),
}
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export const DbNull = runtime.DbNull

/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export const JsonNull = runtime.JsonNull

/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export const AnyNull = runtime.AnyNull


type SelectAndInclude = {
  select: any
  include: any
}

type SelectAndOmit = {
  select: any
  omit: any
}

/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};

export type Enumerable<T> = T | Array<T>;

/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
  [key in keyof T]: key extends keyof U ? T[key] : never;
};

/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
  [key in keyof T]: key extends keyof U ? T[key] : never
} &
  (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {})

/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
  [key in keyof T]: key extends keyof U ? T[key] : never
} &
  K

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> =
  T extends object ?
  U extends object ?
    (Without<T, U> & U) | (Without<U, T> & T)
  : U : T


/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any>
? False
: T extends Date
? False
: T extends Uint8Array
? False
: T extends BigInt
? False
: T extends object
? True
: False


/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

/**
 * From ts-toolbelt
 */

type __Either<O extends object, K extends Key> = Omit<O, K> &
  {
    // Merge all but K
    [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
  }[K]

type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

type _Either<
  O extends object,
  K extends Key,
  strict extends Boolean
> = {
  1: EitherStrict<O, K>
  0: EitherLoose<O, K>
}[strict]

export type Either<
  O extends object,
  K extends Key,
  strict extends Boolean = 1
> = O extends unknown ? _Either<O, K, strict> : never

export type Union = any

export type PatchUndefined<O extends object, O1 extends object> = {
  [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
} & {}

/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (
  U extends unknown ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never

export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};

type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;

type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];

export type ComputeRaw<A extends any> = A extends Function ? A : {
  [K in keyof A]: A[K];
} & {};

export type OptionalFlat<O> = {
  [K in keyof O]?: O[K];
} & {};

type _Record<K extends keyof any, T> = {
  [P in K]: T;
};

// cause typescript not to expand types and preserve names
type NoExpand<T> = T extends unknown ? T : never;

// this type assumes the passed object is entirely optional
export type AtLeast<O extends object, K extends string> = NoExpand<
  O extends unknown
  ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
    | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
  : never>;

type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/

export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

export type Boolean = True | False

export type True = 1

export type False = 0

export type Not<B extends Boolean> = {
  0: 1
  1: 0
}[B]

export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
  ? 0 // anything `never` is false
  : A1 extends A2
  ? 1
  : 0

export type Has<U extends Union, U1 extends Union> = Not<
  Extends<Exclude<U1, U>, U1>
>

export type Or<B1 extends Boolean, B2 extends Boolean> = {
  0: {
    0: 0
    1: 1
  }
  1: {
    0: 1
    1: 1
  }
}[B1][B2]

export type Keys<U extends Union> = U extends unknown ? keyof U : never

export type GetScalarType<T, O> = O extends object ? {
  [P in keyof T]: P extends keyof O
    ? O[P]
    : never
} : never

type FieldPaths<
  T,
  U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
> = IsObject<T> extends True ? U : T

export type GetHavingFields<T> = {
  [K in keyof T]: Or<
    Or<Extends<'OR', K>, Extends<'AND', K>>,
    Extends<'NOT', K>
  > extends True
    ? // infer is only needed to not hit TS limit
      // based on the brilliant idea of Pierre-Antoine Mills
      // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
      T[K] extends infer TK
      ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
      : never
    : {} extends FieldPaths<T[K]>
    ? never
    : K
}[keyof T]

/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


export const ModelName = {
  IngestJob: 'IngestJob',
  Cluster: 'Cluster',
  Article: 'Article',
  User: 'User',
  RefreshToken: 'RefreshToken'
} as const

export type ModelName = (typeof ModelName)[keyof typeof ModelName]



export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{extArgs: runtime.Types.Extensions.InternalArgs }, runtime.Types.Utils.Record<string, any>> {
  returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>
}

export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
  globalOmitOptions: {
    omit: GlobalOmitOptions
  }
  meta: {
    modelProps: "ingestJob" | "cluster" | "article" | "user" | "refreshToken"
    txIsolationLevel: TransactionIsolationLevel
  }
  model: {
    IngestJob: {
      payload: Prisma.$IngestJobPayload<ExtArgs>
      fields: Prisma.IngestJobFieldRefs
      operations: {
        findUnique: {
          args: Prisma.IngestJobFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$IngestJobPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.IngestJobFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$IngestJobPayload>
        }
        findFirst: {
          args: Prisma.IngestJobFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$IngestJobPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.IngestJobFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$IngestJobPayload>
        }
        findMany: {
          args: Prisma.IngestJobFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$IngestJobPayload>[]
        }
        create: {
          args: Prisma.IngestJobCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$IngestJobPayload>
        }
        createMany: {
          args: Prisma.IngestJobCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.IngestJobCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$IngestJobPayload>[]
        }
        delete: {
          args: Prisma.IngestJobDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$IngestJobPayload>
        }
        update: {
          args: Prisma.IngestJobUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$IngestJobPayload>
        }
        deleteMany: {
          args: Prisma.IngestJobDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.IngestJobUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.IngestJobUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$IngestJobPayload>[]
        }
        upsert: {
          args: Prisma.IngestJobUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$IngestJobPayload>
        }
        aggregate: {
          args: Prisma.IngestJobAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateIngestJob>
        }
        groupBy: {
          args: Prisma.IngestJobGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.IngestJobGroupByOutputType>[]
        }
        count: {
          args: Prisma.IngestJobCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.IngestJobCountAggregateOutputType> | number
        }
      }
    }
    Cluster: {
      payload: Prisma.$ClusterPayload<ExtArgs>
      fields: Prisma.ClusterFieldRefs
      operations: {
        findUnique: {
          args: Prisma.ClusterFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ClusterPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.ClusterFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ClusterPayload>
        }
        findFirst: {
          args: Prisma.ClusterFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ClusterPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.ClusterFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ClusterPayload>
        }
        findMany: {
          args: Prisma.ClusterFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ClusterPayload>[]
        }
        create: {
          args: Prisma.ClusterCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ClusterPayload>
        }
        createMany: {
          args: Prisma.ClusterCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.ClusterCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ClusterPayload>[]
        }
        delete: {
          args: Prisma.ClusterDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ClusterPayload>
        }
        update: {
          args: Prisma.ClusterUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ClusterPayload>
        }
        deleteMany: {
          args: Prisma.ClusterDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.ClusterUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.ClusterUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ClusterPayload>[]
        }
        upsert: {
          args: Prisma.ClusterUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ClusterPayload>
        }
        aggregate: {
          args: Prisma.ClusterAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateCluster>
        }
        groupBy: {
          args: Prisma.ClusterGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.ClusterGroupByOutputType>[]
        }
        count: {
          args: Prisma.ClusterCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.ClusterCountAggregateOutputType> | number
        }
      }
    }
    Article: {
      payload: Prisma.$ArticlePayload<ExtArgs>
      fields: Prisma.ArticleFieldRefs
      operations: {
        findUnique: {
          args: Prisma.ArticleFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ArticlePayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.ArticleFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ArticlePayload>
        }
        findFirst: {
          args: Prisma.ArticleFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ArticlePayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.ArticleFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ArticlePayload>
        }
        findMany: {
          args: Prisma.ArticleFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ArticlePayload>[]
        }
        create: {
          args: Prisma.ArticleCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ArticlePayload>
        }
        createMany: {
          args: Prisma.ArticleCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.ArticleCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ArticlePayload>[]
        }
        delete: {
          args: Prisma.ArticleDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ArticlePayload>
        }
        update: {
          args: Prisma.ArticleUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ArticlePayload>
        }
        deleteMany: {
          args: Prisma.ArticleDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.ArticleUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.ArticleUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ArticlePayload>[]
        }
        upsert: {
          args: Prisma.ArticleUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ArticlePayload>
        }
        aggregate: {
          args: Prisma.ArticleAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateArticle>
        }
        groupBy: {
          args: Prisma.ArticleGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.ArticleGroupByOutputType>[]
        }
        count: {
          args: Prisma.ArticleCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.ArticleCountAggregateOutputType> | number
        }
      }
    }
    User: {
      payload: Prisma.$UserPayload<ExtArgs>
      fields: Prisma.UserFieldRefs
      operations: {
        findUnique: {
          args: Prisma.UserFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>
        }
        findFirst: {
          args: Prisma.UserFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>
        }
        findMany: {
          args: Prisma.UserFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[]
        }
        create: {
          args: Prisma.UserCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>
        }
        createMany: {
          args: Prisma.UserCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[]
        }
        delete: {
          args: Prisma.UserDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>
        }
        update: {
          args: Prisma.UserUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>
        }
        deleteMany: {
          args: Prisma.UserDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.UserUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[]
        }
        upsert: {
          args: Prisma.UserUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>
        }
        aggregate: {
          args: Prisma.UserAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateUser>
        }
        groupBy: {
          args: Prisma.UserGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[]
        }
        count: {
          args: Prisma.UserCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number
        }
      }
    }
    RefreshToken: {
      payload: Prisma.$RefreshTokenPayload<ExtArgs>
      fields: Prisma.RefreshTokenFieldRefs
      operations: {
        findUnique: {
          args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
        }
        findFirst: {
          args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
        }
        findMany: {
          args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
        }
        create: {
          args: Prisma.RefreshTokenCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
        }
        createMany: {
          args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
        }
        delete: {
          args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
        }
        update: {
          args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
        }
        deleteMany: {
          args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
        }
        upsert: {
          args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
        }
        aggregate: {
          args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateRefreshToken>
        }
        groupBy: {
          args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.RefreshTokenGroupByOutputType>[]
        }
        count: {
          args: Prisma.RefreshTokenCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.RefreshTokenCountAggregateOutputType> | number
        }
      }
    }
  }
} & {
  other: {
    payload: any
    operations: {
      $executeRaw: {
        args: [query: TemplateStringsArray | Sql, ...values: any[]],
        result: any
      }
      $executeRawUnsafe: {
        args: [query: string, ...values: any[]],
        result: any
      }
      $queryRaw: {
        args: [query: TemplateStringsArray | Sql, ...values: any[]],
        result: any
      }
      $queryRawUnsafe: {
        args: [query: string, ...values: any[]],
        result: any
      }
    }
  }
}

/**
 * Enums
 */

export const TransactionIsolationLevel = runtime.makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
} as const)

export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


export const IngestJobScalarFieldEnum = {
  id: 'id',
  status: 'status',
  triggeredBy: 'triggeredBy',
  triggeredAt: 'triggeredAt',
  startedAt: 'startedAt',
  finishedAt: 'finishedAt',
  articlesFetched: 'articlesFetched',
  clustersGenerated: 'clustersGenerated',
  errorMessage: 'errorMessage'
} as const

export type IngestJobScalarFieldEnum = (typeof IngestJobScalarFieldEnum)[keyof typeof IngestJobScalarFieldEnum]


export const ClusterScalarFieldEnum = {
  id: 'id',
  label: 'label',
  topTerms: 'topTerms',
  articleCount: 'articleCount',
  earliestArticleAt: 'earliestArticleAt',
  latestArticleAt: 'latestArticleAt',
  ingestJobId: 'ingestJobId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
} as const

export type ClusterScalarFieldEnum = (typeof ClusterScalarFieldEnum)[keyof typeof ClusterScalarFieldEnum]


export const ArticleScalarFieldEnum = {
  id: 'id',
  clusterId: 'clusterId',
  url: 'url',
  urlHash: 'urlHash',
  headline: 'headline',
  summary: 'summary',
  bodyText: 'bodyText',
  sourceName: 'sourceName',
  sourceUrl: 'sourceUrl',
  publishedAt: 'publishedAt',
  fetchedAt: 'fetchedAt'
} as const

export type ArticleScalarFieldEnum = (typeof ArticleScalarFieldEnum)[keyof typeof ArticleScalarFieldEnum]


export const UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  passwordHash: 'passwordHash',
  role: 'role',
  createdAt: 'createdAt',
  lastLoginAt: 'lastLoginAt'
} as const

export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


export const RefreshTokenScalarFieldEnum = {
  id: 'id',
  tokenHash: 'tokenHash',
  userId: 'userId',
  family: 'family',
  isUsed: 'isUsed',
  expiresAt: 'expiresAt',
  createdAt: 'createdAt',
  revokedAt: 'revokedAt'
} as const

export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


export const SortOrder = {
  asc: 'asc',
  desc: 'desc'
} as const

export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


export const JsonNullValueInput = {
  JsonNull: JsonNull
} as const

export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


export const QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
} as const

export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


export const NullsOrder = {
  first: 'first',
  last: 'last'
} as const

export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


export const JsonNullValueFilter = {
  DbNull: DbNull,
  JsonNull: JsonNull,
  AnyNull: AnyNull
} as const

export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]



/**
 * Field references
 */


/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


/**
 * Reference to a field of type 'Json'
 */
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


/**
 * Reference to a field of type 'QueryMode'
 */
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    

/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
  count: number
}

export const defineExtension = runtime.Extensions.defineExtension as unknown as runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>
export type DefaultPrismaClient = PrismaClient
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
export type PrismaClientOptions = ({
  /**
   * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-pg`.
   */
  adapter: runtime.SqlDriverAdapterFactory
  accelerateUrl?: never
} | {
  /**
   * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
   */
  accelerateUrl: string
  adapter?: never
}) & {
  /**
   * @default "colorless"
   */
  errorFormat?: ErrorFormat
  /**
   * @example
   * ```
   * // Shorthand for `emit: 'stdout'`
   * log: ['query', 'info', 'warn', 'error']
   * 
   * // Emit as events only
   * log: [
   *   { emit: 'event', level: 'query' },
   *   { emit: 'event', level: 'info' },
   *   { emit: 'event', level: 'warn' }
   *   { emit: 'event', level: 'error' }
   * ]
   * 
   * / Emit as events and log to stdout
   * og: [
   *  { emit: 'stdout', level: 'query' },
   *  { emit: 'stdout', level: 'info' },
   *  { emit: 'stdout', level: 'warn' }
   *  { emit: 'stdout', level: 'error' }
   * 
   * ```
   * Read more in our [docs](https://pris.ly/d/logging).
   */
  log?: (LogLevel | LogDefinition)[]
  /**
   * The default values for transactionOptions
   * maxWait ?= 2000
   * timeout ?= 5000
   */
  transactionOptions?: {
    maxWait?: number
    timeout?: number
    isolationLevel?: TransactionIsolationLevel
  }
  /**
   * Global configuration for omitting model fields by default.
   * 
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   omit: {
   *     user: {
   *       password: true
   *     }
   *   }
   * })
   * ```
   */
  omit?: GlobalOmitConfig
  /**
   * SQL commenter plugins that add metadata to SQL queries as comments.
   * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
   * 
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter,
   *   comments: [
   *     traceContext(),
   *     queryInsights(),
   *   ],
   * })
   * ```
   */
  comments?: runtime.SqlCommenterPlugin[]
  /**
   * Optional maximum size for the query plan cache. If not provided, a default size will be used.
   * A value of `0` can be used to disable the cache entirely. A higher cache size can improve
   * performance for applications that execute a large number of unique queries, while a smaller
   * cache size can reduce memory usage.
   * 
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter,
   *   queryPlanCacheMaxSize: 100,
   * })
   * ```
   */
  queryPlanCacheMaxSize?: number
}
export type GlobalOmitConfig = {
  ingestJob?: Prisma.IngestJobOmit
  cluster?: Prisma.ClusterOmit
  article?: Prisma.ArticleOmit
  user?: Prisma.UserOmit
  refreshToken?: Prisma.RefreshTokenOmit
}

/* Types for Logging */
export type LogLevel = 'info' | 'query' | 'warn' | 'error'
export type LogDefinition = {
  level: LogLevel
  emit: 'stdout' | 'event'
}

export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

export type GetLogType<T> = CheckIsLogLevel<
  T extends LogDefinition ? T['level'] : T
>;

export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
  ? GetLogType<T[number]>
  : never;

export type QueryEvent = {
  timestamp: Date
  query: string
  params: string
  duration: number
  target: string
}

export type LogEvent = {
  timestamp: Date
  message: string
  target: string
}
/* End Types for Logging */


export type PrismaAction =
  | 'findUnique'
  | 'findUniqueOrThrow'
  | 'findMany'
  | 'findFirst'
  | 'findFirstOrThrow'
  | 'create'
  | 'createMany'
  | 'createManyAndReturn'
  | 'update'
  | 'updateMany'
  | 'updateManyAndReturn'
  | 'upsert'
  | 'delete'
  | 'deleteMany'
  | 'executeRaw'
  | 'queryRaw'
  | 'aggregate'
  | 'count'
  | 'runCommandRaw'
  | 'findRaw'
  | 'groupBy'

/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>
```

====================================================================================================
# FILE 14

## Relative Path
`generated/prisma/internal/prismaNamespaceBrowser.ts`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/backend/generated/prisma/internal/prismaNamespaceBrowser.ts`

## Source Code

```ts

/* !!! This is code generated by Prisma. Do not edit directly. !!! */
/* eslint-disable */
// biome-ignore-all lint: generated file
// @ts-nocheck 
/*
 * WARNING: This is an internal file that is subject to change!
 *
 * 🛑 Under no circumstances should you import this file directly! 🛑
 *
 * All exports from this file are wrapped under a `Prisma` namespace object in the browser.ts file.
 * While this enables partial backward compatibility, it is not part of the stable public API.
 *
 * If you are looking for your Models, Enums, and Input Types, please import them from the respective
 * model files in the `model` directory!
 */

import * as runtime from "@prisma/client/runtime/index-browser"

export type * from '../models.ts'
export type * from './prismaNamespace.ts'

export const Decimal = runtime.Decimal


export const NullTypes = {
  DbNull: runtime.NullTypes.DbNull as (new (secret: never) => typeof runtime.DbNull),
  JsonNull: runtime.NullTypes.JsonNull as (new (secret: never) => typeof runtime.JsonNull),
  AnyNull: runtime.NullTypes.AnyNull as (new (secret: never) => typeof runtime.AnyNull),
}
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export const DbNull = runtime.DbNull

/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export const JsonNull = runtime.JsonNull

/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export const AnyNull = runtime.AnyNull


export const ModelName = {
  IngestJob: 'IngestJob',
  Cluster: 'Cluster',
  Article: 'Article',
  User: 'User',
  RefreshToken: 'RefreshToken'
} as const

export type ModelName = (typeof ModelName)[keyof typeof ModelName]

/*
 * Enums
 */

export const TransactionIsolationLevel = runtime.makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
} as const)

export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


export const IngestJobScalarFieldEnum = {
  id: 'id',
  status: 'status',
  triggeredBy: 'triggeredBy',
  triggeredAt: 'triggeredAt',
  startedAt: 'startedAt',
  finishedAt: 'finishedAt',
  articlesFetched: 'articlesFetched',
  clustersGenerated: 'clustersGenerated',
  errorMessage: 'errorMessage'
} as const

export type IngestJobScalarFieldEnum = (typeof IngestJobScalarFieldEnum)[keyof typeof IngestJobScalarFieldEnum]


export const ClusterScalarFieldEnum = {
  id: 'id',
  label: 'label',
  topTerms: 'topTerms',
  articleCount: 'articleCount',
  earliestArticleAt: 'earliestArticleAt',
  latestArticleAt: 'latestArticleAt',
  ingestJobId: 'ingestJobId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
} as const

export type ClusterScalarFieldEnum = (typeof ClusterScalarFieldEnum)[keyof typeof ClusterScalarFieldEnum]


export const ArticleScalarFieldEnum = {
  id: 'id',
  clusterId: 'clusterId',
  url: 'url',
  urlHash: 'urlHash',
  headline: 'headline',
  summary: 'summary',
  bodyText: 'bodyText',
  sourceName: 'sourceName',
  sourceUrl: 'sourceUrl',
  publishedAt: 'publishedAt',
  fetchedAt: 'fetchedAt'
} as const

export type ArticleScalarFieldEnum = (typeof ArticleScalarFieldEnum)[keyof typeof ArticleScalarFieldEnum]


export const UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  passwordHash: 'passwordHash',
  role: 'role',
  createdAt: 'createdAt',
  lastLoginAt: 'lastLoginAt'
} as const

export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


export const RefreshTokenScalarFieldEnum = {
  id: 'id',
  tokenHash: 'tokenHash',
  userId: 'userId',
  family: 'family',
  isUsed: 'isUsed',
  expiresAt: 'expiresAt',
  createdAt: 'createdAt',
  revokedAt: 'revokedAt'
} as const

export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


export const SortOrder = {
  asc: 'asc',
  desc: 'desc'
} as const

export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


export const JsonNullValueInput = {
  JsonNull: JsonNull
} as const

export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


export const QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
} as const

export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


export const NullsOrder = {
  first: 'first',
  last: 'last'
} as const

export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


export const JsonNullValueFilter = {
  DbNull: DbNull,
  JsonNull: JsonNull,
  AnyNull: AnyNull
} as const

export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]
```

====================================================================================================
# FILE 15

## Relative Path
`generated/prisma/models/Article.ts`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/backend/generated/prisma/models/Article.ts`

## Source Code

```ts

/* !!! This is code generated by Prisma. Do not edit directly. !!! */
/* eslint-disable */
// biome-ignore-all lint: generated file
// @ts-nocheck 
/*
 * This file exports the `Article` model and its related types.
 *
 * 🟢 You can import this file directly.
 */
import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.ts"
import type * as Prisma from "../internal/prismaNamespace.ts"

/**
 * Model Article
 * 
 */
export type ArticleModel = runtime.Types.Result.DefaultSelection<Prisma.$ArticlePayload>

export type AggregateArticle = {
  _count: ArticleCountAggregateOutputType | null
  _min: ArticleMinAggregateOutputType | null
  _max: ArticleMaxAggregateOutputType | null
}

export type ArticleMinAggregateOutputType = {
  id: string | null
  clusterId: string | null
  url: string | null
  urlHash: string | null
  headline: string | null
  summary: string | null
  bodyText: string | null
  sourceName: string | null
  sourceUrl: string | null
  publishedAt: Date | null
  fetchedAt: Date | null
}

export type ArticleMaxAggregateOutputType = {
  id: string | null
  clusterId: string | null
  url: string | null
  urlHash: string | null
  headline: string | null
  summary: string | null
  bodyText: string | null
  sourceName: string | null
  sourceUrl: string | null
  publishedAt: Date | null
  fetchedAt: Date | null
}

export type ArticleCountAggregateOutputType = {
  id: number
  clusterId: number
  url: number
  urlHash: number
  headline: number
  summary: number
  bodyText: number
  sourceName: number
  sourceUrl: number
  publishedAt: number
  fetchedAt: number
  _all: number
}


export type ArticleMinAggregateInputType = {
  id?: true
  clusterId?: true
  url?: true
  urlHash?: true
  headline?: true
  summary?: true
  bodyText?: true
  sourceName?: true
  sourceUrl?: true
  publishedAt?: true
  fetchedAt?: true
}

export type ArticleMaxAggregateInputType = {
  id?: true
  clusterId?: true
  url?: true
  urlHash?: true
  headline?: true
  summary?: true
  bodyText?: true
  sourceName?: true
  sourceUrl?: true
  publishedAt?: true
  fetchedAt?: true
}

export type ArticleCountAggregateInputType = {
  id?: true
  clusterId?: true
  url?: true
  urlHash?: true
  headline?: true
  summary?: true
  bodyText?: true
  sourceName?: true
  sourceUrl?: true
  publishedAt?: true
  fetchedAt?: true
  _all?: true
}

export type ArticleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Filter which Article to aggregate.
   */
  where?: Prisma.ArticleWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of Articles to fetch.
   */
  orderBy?: Prisma.ArticleOrderByWithRelationInput | Prisma.ArticleOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the start position
   */
  cursor?: Prisma.ArticleWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` Articles from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` Articles.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Count returned Articles
  **/
  _count?: true | ArticleCountAggregateInputType
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Select which fields to find the minimum value
  **/
  _min?: ArticleMinAggregateInputType
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Select which fields to find the maximum value
  **/
  _max?: ArticleMaxAggregateInputType
}

export type GetArticleAggregateType<T extends ArticleAggregateArgs> = {
      [P in keyof T & keyof AggregateArticle]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateArticle[P]>
    : Prisma.GetScalarType<T[P], AggregateArticle[P]>
}




export type ArticleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.ArticleWhereInput
  orderBy?: Prisma.ArticleOrderByWithAggregationInput | Prisma.ArticleOrderByWithAggregationInput[]
  by: Prisma.ArticleScalarFieldEnum[] | Prisma.ArticleScalarFieldEnum
  having?: Prisma.ArticleScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: ArticleCountAggregateInputType | true
  _min?: ArticleMinAggregateInputType
  _max?: ArticleMaxAggregateInputType
}

export type ArticleGroupByOutputType = {
  id: string
  clusterId: string | null
  url: string
  urlHash: string
  headline: string
  summary: string | null
  bodyText: string | null
  sourceName: string
  sourceUrl: string
  publishedAt: Date
  fetchedAt: Date
  _count: ArticleCountAggregateOutputType | null
  _min: ArticleMinAggregateOutputType | null
  _max: ArticleMaxAggregateOutputType | null
}

export type GetArticleGroupByPayload<T extends ArticleGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<ArticleGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof ArticleGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], ArticleGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], ArticleGroupByOutputType[P]>
      }
    >
  >



export type ArticleWhereInput = {
  AND?: Prisma.ArticleWhereInput | Prisma.ArticleWhereInput[]
  OR?: Prisma.ArticleWhereInput[]
  NOT?: Prisma.ArticleWhereInput | Prisma.ArticleWhereInput[]
  id?: Prisma.StringFilter<"Article"> | string
  clusterId?: Prisma.StringNullableFilter<"Article"> | string | null
  url?: Prisma.StringFilter<"Article"> | string
  urlHash?: Prisma.StringFilter<"Article"> | string
  headline?: Prisma.StringFilter<"Article"> | string
  summary?: Prisma.StringNullableFilter<"Article"> | string | null
  bodyText?: Prisma.StringNullableFilter<"Article"> | string | null
  sourceName?: Prisma.StringFilter<"Article"> | string
  sourceUrl?: Prisma.StringFilter<"Article"> | string
  publishedAt?: Prisma.DateTimeFilter<"Article"> | Date | string
  fetchedAt?: Prisma.DateTimeFilter<"Article"> | Date | string
  cluster?: Prisma.XOR<Prisma.ClusterNullableScalarRelationFilter, Prisma.ClusterWhereInput> | null
}

export type ArticleOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  clusterId?: Prisma.SortOrderInput | Prisma.SortOrder
  url?: Prisma.SortOrder
  urlHash?: Prisma.SortOrder
  headline?: Prisma.SortOrder
  summary?: Prisma.SortOrderInput | Prisma.SortOrder
  bodyText?: Prisma.SortOrderInput | Prisma.SortOrder
  sourceName?: Prisma.SortOrder
  sourceUrl?: Prisma.SortOrder
  publishedAt?: Prisma.SortOrder
  fetchedAt?: Prisma.SortOrder
  cluster?: Prisma.ClusterOrderByWithRelationInput
}

export type ArticleWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  url?: string
  urlHash?: string
  AND?: Prisma.ArticleWhereInput | Prisma.ArticleWhereInput[]
  OR?: Prisma.ArticleWhereInput[]
  NOT?: Prisma.ArticleWhereInput | Prisma.ArticleWhereInput[]
  clusterId?: Prisma.StringNullableFilter<"Article"> | string | null
  headline?: Prisma.StringFilter<"Article"> | string
  summary?: Prisma.StringNullableFilter<"Article"> | string | null
  bodyText?: Prisma.StringNullableFilter<"Article"> | string | null
  sourceName?: Prisma.StringFilter<"Article"> | string
  sourceUrl?: Prisma.StringFilter<"Article"> | string
  publishedAt?: Prisma.DateTimeFilter<"Article"> | Date | string
  fetchedAt?: Prisma.DateTimeFilter<"Article"> | Date | string
  cluster?: Prisma.XOR<Prisma.ClusterNullableScalarRelationFilter, Prisma.ClusterWhereInput> | null
}, "id" | "url" | "urlHash">

export type ArticleOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  clusterId?: Prisma.SortOrderInput | Prisma.SortOrder
  url?: Prisma.SortOrder
  urlHash?: Prisma.SortOrder
  headline?: Prisma.SortOrder
  summary?: Prisma.SortOrderInput | Prisma.SortOrder
  bodyText?: Prisma.SortOrderInput | Prisma.SortOrder
  sourceName?: Prisma.SortOrder
  sourceUrl?: Prisma.SortOrder
  publishedAt?: Prisma.SortOrder
  fetchedAt?: Prisma.SortOrder
  _count?: Prisma.ArticleCountOrderByAggregateInput
  _max?: Prisma.ArticleMaxOrderByAggregateInput
  _min?: Prisma.ArticleMinOrderByAggregateInput
}

export type ArticleScalarWhereWithAggregatesInput = {
  AND?: Prisma.ArticleScalarWhereWithAggregatesInput | Prisma.ArticleScalarWhereWithAggregatesInput[]
  OR?: Prisma.ArticleScalarWhereWithAggregatesInput[]
  NOT?: Prisma.ArticleScalarWhereWithAggregatesInput | Prisma.ArticleScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"Article"> | string
  clusterId?: Prisma.StringNullableWithAggregatesFilter<"Article"> | string | null
  url?: Prisma.StringWithAggregatesFilter<"Article"> | string
  urlHash?: Prisma.StringWithAggregatesFilter<"Article"> | string
  headline?: Prisma.StringWithAggregatesFilter<"Article"> | string
  summary?: Prisma.StringNullableWithAggregatesFilter<"Article"> | string | null
  bodyText?: Prisma.StringNullableWithAggregatesFilter<"Article"> | string | null
  sourceName?: Prisma.StringWithAggregatesFilter<"Article"> | string
  sourceUrl?: Prisma.StringWithAggregatesFilter<"Article"> | string
  publishedAt?: Prisma.DateTimeWithAggregatesFilter<"Article"> | Date | string
  fetchedAt?: Prisma.DateTimeWithAggregatesFilter<"Article"> | Date | string
}

export type ArticleCreateInput = {
  id?: string
  url: string
  urlHash: string
  headline: string
  summary?: string | null
  bodyText?: string | null
  sourceName: string
  sourceUrl: string
  publishedAt: Date | string
  fetchedAt?: Date | string
  cluster?: Prisma.ClusterCreateNestedOneWithoutArticlesInput
}

export type ArticleUncheckedCreateInput = {
  id?: string
  clusterId?: string | null
  url: string
  urlHash: string
  headline: string
  summary?: string | null
  bodyText?: string | null
  sourceName: string
  sourceUrl: string
  publishedAt: Date | string
  fetchedAt?: Date | string
}

export type ArticleUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  url?: Prisma.StringFieldUpdateOperationsInput | string
  urlHash?: Prisma.StringFieldUpdateOperationsInput | string
  headline?: Prisma.StringFieldUpdateOperationsInput | string
  summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  bodyText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  sourceName?: Prisma.StringFieldUpdateOperationsInput | string
  sourceUrl?: Prisma.StringFieldUpdateOperationsInput | string
  publishedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  fetchedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  cluster?: Prisma.ClusterUpdateOneWithoutArticlesNestedInput
}

export type ArticleUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  clusterId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  url?: Prisma.StringFieldUpdateOperationsInput | string
  urlHash?: Prisma.StringFieldUpdateOperationsInput | string
  headline?: Prisma.StringFieldUpdateOperationsInput | string
  summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  bodyText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  sourceName?: Prisma.StringFieldUpdateOperationsInput | string
  sourceUrl?: Prisma.StringFieldUpdateOperationsInput | string
  publishedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  fetchedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type ArticleCreateManyInput = {
  id?: string
  clusterId?: string | null
  url: string
  urlHash: string
  headline: string
  summary?: string | null
  bodyText?: string | null
  sourceName: string
  sourceUrl: string
  publishedAt: Date | string
  fetchedAt?: Date | string
}

export type ArticleUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  url?: Prisma.StringFieldUpdateOperationsInput | string
  urlHash?: Prisma.StringFieldUpdateOperationsInput | string
  headline?: Prisma.StringFieldUpdateOperationsInput | string
  summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  bodyText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  sourceName?: Prisma.StringFieldUpdateOperationsInput | string
  sourceUrl?: Prisma.StringFieldUpdateOperationsInput | string
  publishedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  fetchedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type ArticleUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  clusterId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  url?: Prisma.StringFieldUpdateOperationsInput | string
  urlHash?: Prisma.StringFieldUpdateOperationsInput | string
  headline?: Prisma.StringFieldUpdateOperationsInput | string
  summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  bodyText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  sourceName?: Prisma.StringFieldUpdateOperationsInput | string
  sourceUrl?: Prisma.StringFieldUpdateOperationsInput | string
  publishedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  fetchedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type ArticleListRelationFilter = {
  every?: Prisma.ArticleWhereInput
  some?: Prisma.ArticleWhereInput
  none?: Prisma.ArticleWhereInput
}

export type ArticleOrderByRelationAggregateInput = {
  _count?: Prisma.SortOrder
}

export type ArticleCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  clusterId?: Prisma.SortOrder
  url?: Prisma.SortOrder
  urlHash?: Prisma.SortOrder
  headline?: Prisma.SortOrder
  summary?: Prisma.SortOrder
  bodyText?: Prisma.SortOrder
  sourceName?: Prisma.SortOrder
  sourceUrl?: Prisma.SortOrder
  publishedAt?: Prisma.SortOrder
  fetchedAt?: Prisma.SortOrder
}

export type ArticleMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  clusterId?: Prisma.SortOrder
  url?: Prisma.SortOrder
  urlHash?: Prisma.SortOrder
  headline?: Prisma.SortOrder
  summary?: Prisma.SortOrder
  bodyText?: Prisma.SortOrder
  sourceName?: Prisma.SortOrder
  sourceUrl?: Prisma.SortOrder
  publishedAt?: Prisma.SortOrder
  fetchedAt?: Prisma.SortOrder
}

export type ArticleMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  clusterId?: Prisma.SortOrder
  url?: Prisma.SortOrder
  urlHash?: Prisma.SortOrder
  headline?: Prisma.SortOrder
  summary?: Prisma.SortOrder
  bodyText?: Prisma.SortOrder
  sourceName?: Prisma.SortOrder
  sourceUrl?: Prisma.SortOrder
  publishedAt?: Prisma.SortOrder
  fetchedAt?: Prisma.SortOrder
}

export type ArticleCreateNestedManyWithoutClusterInput = {
  create?: Prisma.XOR<Prisma.ArticleCreateWithoutClusterInput, Prisma.ArticleUncheckedCreateWithoutClusterInput> | Prisma.ArticleCreateWithoutClusterInput[] | Prisma.ArticleUncheckedCreateWithoutClusterInput[]
  connectOrCreate?: Prisma.ArticleCreateOrConnectWithoutClusterInput | Prisma.ArticleCreateOrConnectWithoutClusterInput[]
  createMany?: Prisma.ArticleCreateManyClusterInputEnvelope
  connect?: Prisma.ArticleWhereUniqueInput | Prisma.ArticleWhereUniqueInput[]
}

export type ArticleUncheckedCreateNestedManyWithoutClusterInput = {
  create?: Prisma.XOR<Prisma.ArticleCreateWithoutClusterInput, Prisma.ArticleUncheckedCreateWithoutClusterInput> | Prisma.ArticleCreateWithoutClusterInput[] | Prisma.ArticleUncheckedCreateWithoutClusterInput[]
  connectOrCreate?: Prisma.ArticleCreateOrConnectWithoutClusterInput | Prisma.ArticleCreateOrConnectWithoutClusterInput[]
  createMany?: Prisma.ArticleCreateManyClusterInputEnvelope
  connect?: Prisma.ArticleWhereUniqueInput | Prisma.ArticleWhereUniqueInput[]
}

export type ArticleUpdateManyWithoutClusterNestedInput = {
  create?: Prisma.XOR<Prisma.ArticleCreateWithoutClusterInput, Prisma.ArticleUncheckedCreateWithoutClusterInput> | Prisma.ArticleCreateWithoutClusterInput[] | Prisma.ArticleUncheckedCreateWithoutClusterInput[]
  connectOrCreate?: Prisma.ArticleCreateOrConnectWithoutClusterInput | Prisma.ArticleCreateOrConnectWithoutClusterInput[]
  upsert?: Prisma.ArticleUpsertWithWhereUniqueWithoutClusterInput | Prisma.ArticleUpsertWithWhereUniqueWithoutClusterInput[]
  createMany?: Prisma.ArticleCreateManyClusterInputEnvelope
  set?: Prisma.ArticleWhereUniqueInput | Prisma.ArticleWhereUniqueInput[]
  disconnect?: Prisma.ArticleWhereUniqueInput | Prisma.ArticleWhereUniqueInput[]
  delete?: Prisma.ArticleWhereUniqueInput | Prisma.ArticleWhereUniqueInput[]
  connect?: Prisma.ArticleWhereUniqueInput | Prisma.ArticleWhereUniqueInput[]
  update?: Prisma.ArticleUpdateWithWhereUniqueWithoutClusterInput | Prisma.ArticleUpdateWithWhereUniqueWithoutClusterInput[]
  updateMany?: Prisma.ArticleUpdateManyWithWhereWithoutClusterInput | Prisma.ArticleUpdateManyWithWhereWithoutClusterInput[]
  deleteMany?: Prisma.ArticleScalarWhereInput | Prisma.ArticleScalarWhereInput[]
}

export type ArticleUncheckedUpdateManyWithoutClusterNestedInput = {
  create?: Prisma.XOR<Prisma.ArticleCreateWithoutClusterInput, Prisma.ArticleUncheckedCreateWithoutClusterInput> | Prisma.ArticleCreateWithoutClusterInput[] | Prisma.ArticleUncheckedCreateWithoutClusterInput[]
  connectOrCreate?: Prisma.ArticleCreateOrConnectWithoutClusterInput | Prisma.ArticleCreateOrConnectWithoutClusterInput[]
  upsert?: Prisma.ArticleUpsertWithWhereUniqueWithoutClusterInput | Prisma.ArticleUpsertWithWhereUniqueWithoutClusterInput[]
  createMany?: Prisma.ArticleCreateManyClusterInputEnvelope
  set?: Prisma.ArticleWhereUniqueInput | Prisma.ArticleWhereUniqueInput[]
  disconnect?: Prisma.ArticleWhereUniqueInput | Prisma.ArticleWhereUniqueInput[]
  delete?: Prisma.ArticleWhereUniqueInput | Prisma.ArticleWhereUniqueInput[]
  connect?: Prisma.ArticleWhereUniqueInput | Prisma.ArticleWhereUniqueInput[]
  update?: Prisma.ArticleUpdateWithWhereUniqueWithoutClusterInput | Prisma.ArticleUpdateWithWhereUniqueWithoutClusterInput[]
  updateMany?: Prisma.ArticleUpdateManyWithWhereWithoutClusterInput | Prisma.ArticleUpdateManyWithWhereWithoutClusterInput[]
  deleteMany?: Prisma.ArticleScalarWhereInput | Prisma.ArticleScalarWhereInput[]
}

export type ArticleCreateWithoutClusterInput = {
  id?: string
  url: string
  urlHash: string
  headline: string
  summary?: string | null
  bodyText?: string | null
  sourceName: string
  sourceUrl: string
  publishedAt: Date | string
  fetchedAt?: Date | string
}

export type ArticleUncheckedCreateWithoutClusterInput = {
  id?: string
  url: string
  urlHash: string
  headline: string
  summary?: string | null
  bodyText?: string | null
  sourceName: string
  sourceUrl: string
  publishedAt: Date | string
  fetchedAt?: Date | string
}

export type ArticleCreateOrConnectWithoutClusterInput = {
  where: Prisma.ArticleWhereUniqueInput
  create: Prisma.XOR<Prisma.ArticleCreateWithoutClusterInput, Prisma.ArticleUncheckedCreateWithoutClusterInput>
}

export type ArticleCreateManyClusterInputEnvelope = {
  data: Prisma.ArticleCreateManyClusterInput | Prisma.ArticleCreateManyClusterInput[]
  skipDuplicates?: boolean
}

export type ArticleUpsertWithWhereUniqueWithoutClusterInput = {
  where: Prisma.ArticleWhereUniqueInput
  update: Prisma.XOR<Prisma.ArticleUpdateWithoutClusterInput, Prisma.ArticleUncheckedUpdateWithoutClusterInput>
  create: Prisma.XOR<Prisma.ArticleCreateWithoutClusterInput, Prisma.ArticleUncheckedCreateWithoutClusterInput>
}

export type ArticleUpdateWithWhereUniqueWithoutClusterInput = {
  where: Prisma.ArticleWhereUniqueInput
  data: Prisma.XOR<Prisma.ArticleUpdateWithoutClusterInput, Prisma.ArticleUncheckedUpdateWithoutClusterInput>
}

export type ArticleUpdateManyWithWhereWithoutClusterInput = {
  where: Prisma.ArticleScalarWhereInput
  data: Prisma.XOR<Prisma.ArticleUpdateManyMutationInput, Prisma.ArticleUncheckedUpdateManyWithoutClusterInput>
}

export type ArticleScalarWhereInput = {
  AND?: Prisma.ArticleScalarWhereInput | Prisma.ArticleScalarWhereInput[]
  OR?: Prisma.ArticleScalarWhereInput[]
  NOT?: Prisma.ArticleScalarWhereInput | Prisma.ArticleScalarWhereInput[]
  id?: Prisma.StringFilter<"Article"> | string
  clusterId?: Prisma.StringNullableFilter<"Article"> | string | null
  url?: Prisma.StringFilter<"Article"> | string
  urlHash?: Prisma.StringFilter<"Article"> | string
  headline?: Prisma.StringFilter<"Article"> | string
  summary?: Prisma.StringNullableFilter<"Article"> | string | null
  bodyText?: Prisma.StringNullableFilter<"Article"> | string | null
  sourceName?: Prisma.StringFilter<"Article"> | string
  sourceUrl?: Prisma.StringFilter<"Article"> | string
  publishedAt?: Prisma.DateTimeFilter<"Article"> | Date | string
  fetchedAt?: Prisma.DateTimeFilter<"Article"> | Date | string
}

export type ArticleCreateManyClusterInput = {
  id?: string
  url: string
  urlHash: string
  headline: string
  summary?: string | null
  bodyText?: string | null
  sourceName: string
  sourceUrl: string
  publishedAt: Date | string
  fetchedAt?: Date | string
}

export type ArticleUpdateWithoutClusterInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  url?: Prisma.StringFieldUpdateOperationsInput | string
  urlHash?: Prisma.StringFieldUpdateOperationsInput | string
  headline?: Prisma.StringFieldUpdateOperationsInput | string
  summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  bodyText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  sourceName?: Prisma.StringFieldUpdateOperationsInput | string
  sourceUrl?: Prisma.StringFieldUpdateOperationsInput | string
  publishedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  fetchedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type ArticleUncheckedUpdateWithoutClusterInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  url?: Prisma.StringFieldUpdateOperationsInput | string
  urlHash?: Prisma.StringFieldUpdateOperationsInput | string
  headline?: Prisma.StringFieldUpdateOperationsInput | string
  summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  bodyText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  sourceName?: Prisma.StringFieldUpdateOperationsInput | string
  sourceUrl?: Prisma.StringFieldUpdateOperationsInput | string
  publishedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  fetchedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type ArticleUncheckedUpdateManyWithoutClusterInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  url?: Prisma.StringFieldUpdateOperationsInput | string
  urlHash?: Prisma.StringFieldUpdateOperationsInput | string
  headline?: Prisma.StringFieldUpdateOperationsInput | string
  summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  bodyText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  sourceName?: Prisma.StringFieldUpdateOperationsInput | string
  sourceUrl?: Prisma.StringFieldUpdateOperationsInput | string
  publishedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  fetchedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}



export type ArticleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  clusterId?: boolean
  url?: boolean
  urlHash?: boolean
  headline?: boolean
  summary?: boolean
  bodyText?: boolean
  sourceName?: boolean
  sourceUrl?: boolean
  publishedAt?: boolean
  fetchedAt?: boolean
  cluster?: boolean | Prisma.Article$clusterArgs<ExtArgs>
}, ExtArgs["result"]["article"]>

export type ArticleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  clusterId?: boolean
  url?: boolean
  urlHash?: boolean
  headline?: boolean
  summary?: boolean
  bodyText?: boolean
  sourceName?: boolean
  sourceUrl?: boolean
  publishedAt?: boolean
  fetchedAt?: boolean
  cluster?: boolean | Prisma.Article$clusterArgs<ExtArgs>
}, ExtArgs["result"]["article"]>

export type ArticleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  clusterId?: boolean
  url?: boolean
  urlHash?: boolean
  headline?: boolean
  summary?: boolean
  bodyText?: boolean
  sourceName?: boolean
  sourceUrl?: boolean
  publishedAt?: boolean
  fetchedAt?: boolean
  cluster?: boolean | Prisma.Article$clusterArgs<ExtArgs>
}, ExtArgs["result"]["article"]>

export type ArticleSelectScalar = {
  id?: boolean
  clusterId?: boolean
  url?: boolean
  urlHash?: boolean
  headline?: boolean
  summary?: boolean
  bodyText?: boolean
  sourceName?: boolean
  sourceUrl?: boolean
  publishedAt?: boolean
  fetchedAt?: boolean
}

export type ArticleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "clusterId" | "url" | "urlHash" | "headline" | "summary" | "bodyText" | "sourceName" | "sourceUrl" | "publishedAt" | "fetchedAt", ExtArgs["result"]["article"]>
export type ArticleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  cluster?: boolean | Prisma.Article$clusterArgs<ExtArgs>
}
export type ArticleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  cluster?: boolean | Prisma.Article$clusterArgs<ExtArgs>
}
export type ArticleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  cluster?: boolean | Prisma.Article$clusterArgs<ExtArgs>
}

export type $ArticlePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "Article"
  objects: {
    cluster: Prisma.$ClusterPayload<ExtArgs> | null
  }
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    clusterId: string | null
    url: string
    urlHash: string
    headline: string
    summary: string | null
    bodyText: string | null
    sourceName: string
    sourceUrl: string
    publishedAt: Date
    fetchedAt: Date
  }, ExtArgs["result"]["article"]>
  composites: {}
}

export type ArticleGetPayload<S extends boolean | null | undefined | ArticleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ArticlePayload, S>

export type ArticleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<ArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ArticleCountAggregateInputType | true
  }

export interface ArticleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Article'], meta: { name: 'Article' } }
  /**
   * Find zero or one Article that matches the filter.
   * @param {ArticleFindUniqueArgs} args - Arguments to find a Article
   * @example
   * // Get one Article
   * const article = await prisma.article.findUnique({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findUnique<T extends ArticleFindUniqueArgs>(args: Prisma.SelectSubset<T, ArticleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ArticleClient<runtime.Types.Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  /**
   * Find one Article that matches the filter or throw an error with `error.code='P2025'`
   * if no matches were found.
   * @param {ArticleFindUniqueOrThrowArgs} args - Arguments to find a Article
   * @example
   * // Get one Article
   * const article = await prisma.article.findUniqueOrThrow({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findUniqueOrThrow<T extends ArticleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ArticleClient<runtime.Types.Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Find the first Article that matches the filter.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {ArticleFindFirstArgs} args - Arguments to find a Article
   * @example
   * // Get one Article
   * const article = await prisma.article.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findFirst<T extends ArticleFindFirstArgs>(args?: Prisma.SelectSubset<T, ArticleFindFirstArgs<ExtArgs>>): Prisma.Prisma__ArticleClient<runtime.Types.Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  /**
   * Find the first Article that matches the filter or
   * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {ArticleFindFirstOrThrowArgs} args - Arguments to find a Article
   * @example
   * // Get one Article
   * const article = await prisma.article.findFirstOrThrow({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findFirstOrThrow<T extends ArticleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ArticleClient<runtime.Types.Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Find zero or more Articles that matches the filter.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {ArticleFindManyArgs} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Articles
   * const articles = await prisma.article.findMany()
   * 
   * // Get first 10 Articles
   * const articles = await prisma.article.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const articleWithIdOnly = await prisma.article.findMany({ select: { id: true } })
   * 
   */
  findMany<T extends ArticleFindManyArgs>(args?: Prisma.SelectSubset<T, ArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  /**
   * Create a Article.
   * @param {ArticleCreateArgs} args - Arguments to create a Article.
   * @example
   * // Create one Article
   * const Article = await prisma.article.create({
   *   data: {
   *     // ... data to create a Article
   *   }
   * })
   * 
   */
  create<T extends ArticleCreateArgs>(args: Prisma.SelectSubset<T, ArticleCreateArgs<ExtArgs>>): Prisma.Prisma__ArticleClient<runtime.Types.Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Create many Articles.
   * @param {ArticleCreateManyArgs} args - Arguments to create many Articles.
   * @example
   * // Create many Articles
   * const article = await prisma.article.createMany({
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   *     
   */
  createMany<T extends ArticleCreateManyArgs>(args?: Prisma.SelectSubset<T, ArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  /**
   * Create many Articles and returns the data saved in the database.
   * @param {ArticleCreateManyAndReturnArgs} args - Arguments to create many Articles.
   * @example
   * // Create many Articles
   * const article = await prisma.article.createManyAndReturn({
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   * 
   * // Create many Articles and only return the `id`
   * const articleWithIdOnly = await prisma.article.createManyAndReturn({
   *   select: { id: true },
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * 
   */
  createManyAndReturn<T extends ArticleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ArticleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  /**
   * Delete a Article.
   * @param {ArticleDeleteArgs} args - Arguments to delete one Article.
   * @example
   * // Delete one Article
   * const Article = await prisma.article.delete({
   *   where: {
   *     // ... filter to delete one Article
   *   }
   * })
   * 
   */
  delete<T extends ArticleDeleteArgs>(args: Prisma.SelectSubset<T, ArticleDeleteArgs<ExtArgs>>): Prisma.Prisma__ArticleClient<runtime.Types.Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Update one Article.
   * @param {ArticleUpdateArgs} args - Arguments to update one Article.
   * @example
   * // Update one Article
   * const article = await prisma.article.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
   */
  update<T extends ArticleUpdateArgs>(args: Prisma.SelectSubset<T, ArticleUpdateArgs<ExtArgs>>): Prisma.Prisma__ArticleClient<runtime.Types.Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Delete zero or more Articles.
   * @param {ArticleDeleteManyArgs} args - Arguments to filter Articles to delete.
   * @example
   * // Delete a few Articles
   * const { count } = await prisma.article.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
   */
  deleteMany<T extends ArticleDeleteManyArgs>(args?: Prisma.SelectSubset<T, ArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  /**
   * Update zero or more Articles.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {ArticleUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Articles
   * const article = await prisma.article.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
   */
  updateMany<T extends ArticleUpdateManyArgs>(args: Prisma.SelectSubset<T, ArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  /**
   * Update zero or more Articles and returns the data updated in the database.
   * @param {ArticleUpdateManyAndReturnArgs} args - Arguments to update many Articles.
   * @example
   * // Update many Articles
   * const article = await prisma.article.updateManyAndReturn({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   * 
   * // Update zero or more Articles and only return the `id`
   * const articleWithIdOnly = await prisma.article.updateManyAndReturn({
   *   select: { id: true },
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * 
   */
  updateManyAndReturn<T extends ArticleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ArticleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  /**
   * Create or update one Article.
   * @param {ArticleUpsertArgs} args - Arguments to update or create a Article.
   * @example
   * // Update or create a Article
   * const article = await prisma.article.upsert({
   *   create: {
   *     // ... data to create a Article
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Article we want to update
   *   }
   * })
   */
  upsert<T extends ArticleUpsertArgs>(args: Prisma.SelectSubset<T, ArticleUpsertArgs<ExtArgs>>): Prisma.Prisma__ArticleClient<runtime.Types.Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  /**
   * Count the number of Articles.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {ArticleCountArgs} args - Arguments to filter Articles to count.
   * @example
   * // Count the number of Articles
   * const count = await prisma.article.count({
   *   where: {
   *     // ... the filter for the Articles we want to count
   *   }
   * })
  **/
  count<T extends ArticleCountArgs>(
    args?: Prisma.Subset<T, ArticleCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], ArticleCountAggregateOutputType>
      : number
  >

  /**
   * Allows you to perform aggregations operations on a Article.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {ArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
   * @example
   * // Ordered by age ascending
   * // Where email contains prisma.io
   * // Limited to the 10 users
   * const aggregations = await prisma.user.aggregate({
   *   _avg: {
   *     age: true,
   *   },
   *   where: {
   *     email: {
   *       contains: "prisma.io",
   *     },
   *   },
   *   orderBy: {
   *     age: "asc",
   *   },
   *   take: 10,
   * })
  **/
  aggregate<T extends ArticleAggregateArgs>(args: Prisma.Subset<T, ArticleAggregateArgs>): Prisma.PrismaPromise<GetArticleAggregateType<T>>

  /**
   * Group by Article.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {ArticleGroupByArgs} args - Group by arguments.
   * @example
   * // Group by city, order by createdAt, get count
   * const result = await prisma.user.groupBy({
   *   by: ['city', 'createdAt'],
   *   orderBy: {
   *     createdAt: true
   *   },
   *   _count: {
   *     _all: true
   *   },
   * })
   * 
  **/
  groupBy<
    T extends ArticleGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: ArticleGroupByArgs['orderBy'] }
      : { orderBy?: ArticleGroupByArgs['orderBy'] },
    OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
    ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
    ByValid extends Prisma.Has<ByFields, OrderFields>,
    HavingFields extends Prisma.GetHavingFields<T['having']>,
    HavingValid extends Prisma.Has<ByFields, HavingFields>,
    ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
    InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
    ? {
        [P in HavingFields]: P extends ByFields
          ? never
          : P extends string
          ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
          : [
              Error,
              'Field ',
              P,
              ` in "having" needs to be provided in "by"`,
            ]
      }[HavingFields]
    : 'take' extends Prisma.Keys<T>
    ? 'orderBy' extends Prisma.Keys<T>
      ? ByValid extends Prisma.True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
          }[OrderFields]
      : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<T>
    ? 'orderBy' extends Prisma.Keys<T>
      ? ByValid extends Prisma.True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
          }[OrderFields]
      : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
          ? never
          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
      }[OrderFields]
  >(args: Prisma.SubsetIntersection<T, ArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
/**
 * Fields of the Article model
 */
readonly fields: ArticleFieldRefs;
}

/**
 * The delegate class that acts as a "Promise-like" for Article.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ArticleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  cluster<T extends Prisma.Article$clusterArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Article$clusterArgs<ExtArgs>>): Prisma.Prisma__ClusterClient<runtime.Types.Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}




/**
 * Fields of the Article model
 */
export interface ArticleFieldRefs {
  readonly id: Prisma.FieldRef<"Article", 'String'>
  readonly clusterId: Prisma.FieldRef<"Article", 'String'>
  readonly url: Prisma.FieldRef<"Article", 'String'>
  readonly urlHash: Prisma.FieldRef<"Article", 'String'>
  readonly headline: Prisma.FieldRef<"Article", 'String'>
  readonly summary: Prisma.FieldRef<"Article", 'String'>
  readonly bodyText: Prisma.FieldRef<"Article", 'String'>
  readonly sourceName: Prisma.FieldRef<"Article", 'String'>
  readonly sourceUrl: Prisma.FieldRef<"Article", 'String'>
  readonly publishedAt: Prisma.FieldRef<"Article", 'DateTime'>
  readonly fetchedAt: Prisma.FieldRef<"Article", 'DateTime'>
}
    

// Custom InputTypes
/**
 * Article findUnique
 */
export type ArticleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Article
   */
  select?: Prisma.ArticleSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Article
   */
  omit?: Prisma.ArticleOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.ArticleInclude<ExtArgs> | null
  /**
   * Filter, which Article to fetch.
   */
  where: Prisma.ArticleWhereUniqueInput
}

/**
 * Article findUniqueOrThrow
 */
export type ArticleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Article
   */
  select?: Prisma.ArticleSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Article
   */
  omit?: Prisma.ArticleOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.ArticleInclude<ExtArgs> | null
  /**
   * Filter, which Article to fetch.
   */
  where: Prisma.ArticleWhereUniqueInput
}

/**
 * Article findFirst
 */
export type ArticleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Article
   */
  select?: Prisma.ArticleSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Article
   */
  omit?: Prisma.ArticleOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.ArticleInclude<ExtArgs> | null
  /**
   * Filter, which Article to fetch.
   */
  where?: Prisma.ArticleWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of Articles to fetch.
   */
  orderBy?: Prisma.ArticleOrderByWithRelationInput | Prisma.ArticleOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the position for searching for Articles.
   */
  cursor?: Prisma.ArticleWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` Articles from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` Articles.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
   * 
   * Filter by unique combinations of Articles.
   */
  distinct?: Prisma.ArticleScalarFieldEnum | Prisma.ArticleScalarFieldEnum[]
}

/**
 * Article findFirstOrThrow
 */
export type ArticleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Article
   */
  select?: Prisma.ArticleSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Article
   */
  omit?: Prisma.ArticleOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.ArticleInclude<ExtArgs> | null
  /**
   * Filter, which Article to fetch.
   */
  where?: Prisma.ArticleWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of Articles to fetch.
   */
  orderBy?: Prisma.ArticleOrderByWithRelationInput | Prisma.ArticleOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the position for searching for Articles.
   */
  cursor?: Prisma.ArticleWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` Articles from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` Articles.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
   * 
   * Filter by unique combinations of Articles.
   */
  distinct?: Prisma.ArticleScalarFieldEnum | Prisma.ArticleScalarFieldEnum[]
}

/**
 * Article findMany
 */
export type ArticleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Article
   */
  select?: Prisma.ArticleSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Article
   */
  omit?: Prisma.ArticleOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.ArticleInclude<ExtArgs> | null
  /**
   * Filter, which Articles to fetch.
   */
  where?: Prisma.ArticleWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of Articles to fetch.
   */
  orderBy?: Prisma.ArticleOrderByWithRelationInput | Prisma.ArticleOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the position for listing Articles.
   */
  cursor?: Prisma.ArticleWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` Articles from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` Articles.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
   * 
   * Filter by unique combinations of Articles.
   */
  distinct?: Prisma.ArticleScalarFieldEnum | Prisma.ArticleScalarFieldEnum[]
}

/**
 * Article create
 */
export type ArticleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Article
   */
  select?: Prisma.ArticleSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Article
   */
  omit?: Prisma.ArticleOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.ArticleInclude<ExtArgs> | null
  /**
   * The data needed to create a Article.
   */
  data: Prisma.XOR<Prisma.ArticleCreateInput, Prisma.ArticleUncheckedCreateInput>
}

/**
 * Article createMany
 */
export type ArticleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * The data used to create many Articles.
   */
  data: Prisma.ArticleCreateManyInput | Prisma.ArticleCreateManyInput[]
  skipDuplicates?: boolean
}

/**
 * Article createManyAndReturn
 */
export type ArticleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Article
   */
  select?: Prisma.ArticleSelectCreateManyAndReturn<ExtArgs> | null
  /**
   * Omit specific fields from the Article
   */
  omit?: Prisma.ArticleOmit<ExtArgs> | null
  /**
   * The data used to create many Articles.
   */
  data: Prisma.ArticleCreateManyInput | Prisma.ArticleCreateManyInput[]
  skipDuplicates?: boolean
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.ArticleIncludeCreateManyAndReturn<ExtArgs> | null
}

/**
 * Article update
 */
export type ArticleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Article
   */
  select?: Prisma.ArticleSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Article
   */
  omit?: Prisma.ArticleOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.ArticleInclude<ExtArgs> | null
  /**
   * The data needed to update a Article.
   */
  data: Prisma.XOR<Prisma.ArticleUpdateInput, Prisma.ArticleUncheckedUpdateInput>
  /**
   * Choose, which Article to update.
   */
  where: Prisma.ArticleWhereUniqueInput
}

/**
 * Article updateMany
 */
export type ArticleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * The data used to update Articles.
   */
  data: Prisma.XOR<Prisma.ArticleUpdateManyMutationInput, Prisma.ArticleUncheckedUpdateManyInput>
  /**
   * Filter which Articles to update
   */
  where?: Prisma.ArticleWhereInput
  /**
   * Limit how many Articles to update.
   */
  limit?: number
}

/**
 * Article updateManyAndReturn
 */
export type ArticleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Article
   */
  select?: Prisma.ArticleSelectUpdateManyAndReturn<ExtArgs> | null
  /**
   * Omit specific fields from the Article
   */
  omit?: Prisma.ArticleOmit<ExtArgs> | null
  /**
   * The data used to update Articles.
   */
  data: Prisma.XOR<Prisma.ArticleUpdateManyMutationInput, Prisma.ArticleUncheckedUpdateManyInput>
  /**
   * Filter which Articles to update
   */
  where?: Prisma.ArticleWhereInput
  /**
   * Limit how many Articles to update.
   */
  limit?: number
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.ArticleIncludeUpdateManyAndReturn<ExtArgs> | null
}

/**
 * Article upsert
 */
export type ArticleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Article
   */
  select?: Prisma.ArticleSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Article
   */
  omit?: Prisma.ArticleOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.ArticleInclude<ExtArgs> | null
  /**
   * The filter to search for the Article to update in case it exists.
   */
  where: Prisma.ArticleWhereUniqueInput
  /**
   * In case the Article found by the `where` argument doesn't exist, create a new Article with this data.
   */
  create: Prisma.XOR<Prisma.ArticleCreateInput, Prisma.ArticleUncheckedCreateInput>
  /**
   * In case the Article was found with the provided `where` argument, update it with this data.
   */
  update: Prisma.XOR<Prisma.ArticleUpdateInput, Prisma.ArticleUncheckedUpdateInput>
}

/**
 * Article delete
 */
export type ArticleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Article
   */
  select?: Prisma.ArticleSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Article
   */
  omit?: Prisma.ArticleOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.ArticleInclude<ExtArgs> | null
  /**
   * Filter which Article to delete.
   */
  where: Prisma.ArticleWhereUniqueInput
}

/**
 * Article deleteMany
 */
export type ArticleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Filter which Articles to delete
   */
  where?: Prisma.ArticleWhereInput
  /**
   * Limit how many Articles to delete.
   */
  limit?: number
}

/**
 * Article.cluster
 */
export type Article$clusterArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Cluster
   */
  select?: Prisma.ClusterSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Cluster
   */
  omit?: Prisma.ClusterOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.ClusterInclude<ExtArgs> | null
  where?: Prisma.ClusterWhereInput
}

/**
 * Article without action
 */
export type ArticleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Article
   */
  select?: Prisma.ArticleSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Article
   */
  omit?: Prisma.ArticleOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.ArticleInclude<ExtArgs> | null
}
```

====================================================================================================
# FILE 16

## Relative Path
`generated/prisma/models/Cluster.ts`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/backend/generated/prisma/models/Cluster.ts`

## Source Code

```ts

/* !!! This is code generated by Prisma. Do not edit directly. !!! */
/* eslint-disable */
// biome-ignore-all lint: generated file
// @ts-nocheck 
/*
 * This file exports the `Cluster` model and its related types.
 *
 * 🟢 You can import this file directly.
 */
import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.ts"
import type * as Prisma from "../internal/prismaNamespace.ts"

/**
 * Model Cluster
 * 
 */
export type ClusterModel = runtime.Types.Result.DefaultSelection<Prisma.$ClusterPayload>

export type AggregateCluster = {
  _count: ClusterCountAggregateOutputType | null
  _avg: ClusterAvgAggregateOutputType | null
  _sum: ClusterSumAggregateOutputType | null
  _min: ClusterMinAggregateOutputType | null
  _max: ClusterMaxAggregateOutputType | null
}

export type ClusterAvgAggregateOutputType = {
  articleCount: number | null
}

export type ClusterSumAggregateOutputType = {
  articleCount: number | null
}

export type ClusterMinAggregateOutputType = {
  id: string | null
  label: string | null
  articleCount: number | null
  earliestArticleAt: Date | null
  latestArticleAt: Date | null
  ingestJobId: string | null
  createdAt: Date | null
  updatedAt: Date | null
}

export type ClusterMaxAggregateOutputType = {
  id: string | null
  label: string | null
  articleCount: number | null
  earliestArticleAt: Date | null
  latestArticleAt: Date | null
  ingestJobId: string | null
  createdAt: Date | null
  updatedAt: Date | null
}

export type ClusterCountAggregateOutputType = {
  id: number
  label: number
  topTerms: number
  articleCount: number
  earliestArticleAt: number
  latestArticleAt: number
  ingestJobId: number
  createdAt: number
  updatedAt: number
  _all: number
}


export type ClusterAvgAggregateInputType = {
  articleCount?: true
}

export type ClusterSumAggregateInputType = {
  articleCount?: true
}

export type ClusterMinAggregateInputType = {
  id?: true
  label?: true
  articleCount?: true
  earliestArticleAt?: true
  latestArticleAt?: true
  ingestJobId?: true
  createdAt?: true
  updatedAt?: true
}

export type ClusterMaxAggregateInputType = {
  id?: true
  label?: true
  articleCount?: true
  earliestArticleAt?: true
  latestArticleAt?: true
  ingestJobId?: true
  createdAt?: true
  updatedAt?: true
}

export type ClusterCountAggregateInputType = {
  id?: true
  label?: true
  topTerms?: true
  articleCount?: true
  earliestArticleAt?: true
  latestArticleAt?: true
  ingestJobId?: true
  createdAt?: true
  updatedAt?: true
  _all?: true
}

export type ClusterAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Filter which Cluster to aggregate.
   */
  where?: Prisma.ClusterWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of Clusters to fetch.
   */
  orderBy?: Prisma.ClusterOrderByWithRelationInput | Prisma.ClusterOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the start position
   */
  cursor?: Prisma.ClusterWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` Clusters from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` Clusters.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Count returned Clusters
  **/
  _count?: true | ClusterCountAggregateInputType
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Select which fields to average
  **/
  _avg?: ClusterAvgAggregateInputType
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Select which fields to sum
  **/
  _sum?: ClusterSumAggregateInputType
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Select which fields to find the minimum value
  **/
  _min?: ClusterMinAggregateInputType
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Select which fields to find the maximum value
  **/
  _max?: ClusterMaxAggregateInputType
}

export type GetClusterAggregateType<T extends ClusterAggregateArgs> = {
      [P in keyof T & keyof AggregateCluster]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateCluster[P]>
    : Prisma.GetScalarType<T[P], AggregateCluster[P]>
}




export type ClusterGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.ClusterWhereInput
  orderBy?: Prisma.ClusterOrderByWithAggregationInput | Prisma.ClusterOrderByWithAggregationInput[]
  by: Prisma.ClusterScalarFieldEnum[] | Prisma.ClusterScalarFieldEnum
  having?: Prisma.ClusterScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: ClusterCountAggregateInputType | true
  _avg?: ClusterAvgAggregateInputType
  _sum?: ClusterSumAggregateInputType
  _min?: ClusterMinAggregateInputType
  _max?: ClusterMaxAggregateInputType
}

export type ClusterGroupByOutputType = {
  id: string
  label: string
  topTerms: runtime.JsonValue
  articleCount: number
  earliestArticleAt: Date | null
  latestArticleAt: Date | null
  ingestJobId: string | null
  createdAt: Date
  updatedAt: Date
  _count: ClusterCountAggregateOutputType | null
  _avg: ClusterAvgAggregateOutputType | null
  _sum: ClusterSumAggregateOutputType | null
  _min: ClusterMinAggregateOutputType | null
  _max: ClusterMaxAggregateOutputType | null
}

export type GetClusterGroupByPayload<T extends ClusterGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<ClusterGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof ClusterGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], ClusterGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], ClusterGroupByOutputType[P]>
      }
    >
  >



export type ClusterWhereInput = {
  AND?: Prisma.ClusterWhereInput | Prisma.ClusterWhereInput[]
  OR?: Prisma.ClusterWhereInput[]
  NOT?: Prisma.ClusterWhereInput | Prisma.ClusterWhereInput[]
  id?: Prisma.StringFilter<"Cluster"> | string
  label?: Prisma.StringFilter<"Cluster"> | string
  topTerms?: Prisma.JsonFilter<"Cluster">
  articleCount?: Prisma.IntFilter<"Cluster"> | number
  earliestArticleAt?: Prisma.DateTimeNullableFilter<"Cluster"> | Date | string | null
  latestArticleAt?: Prisma.DateTimeNullableFilter<"Cluster"> | Date | string | null
  ingestJobId?: Prisma.StringNullableFilter<"Cluster"> | string | null
  createdAt?: Prisma.DateTimeFilter<"Cluster"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"Cluster"> | Date | string
  ingestJob?: Prisma.XOR<Prisma.IngestJobNullableScalarRelationFilter, Prisma.IngestJobWhereInput> | null
  articles?: Prisma.ArticleListRelationFilter
}

export type ClusterOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  label?: Prisma.SortOrder
  topTerms?: Prisma.SortOrder
  articleCount?: Prisma.SortOrder
  earliestArticleAt?: Prisma.SortOrderInput | Prisma.SortOrder
  latestArticleAt?: Prisma.SortOrderInput | Prisma.SortOrder
  ingestJobId?: Prisma.SortOrderInput | Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  ingestJob?: Prisma.IngestJobOrderByWithRelationInput
  articles?: Prisma.ArticleOrderByRelationAggregateInput
}

export type ClusterWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  AND?: Prisma.ClusterWhereInput | Prisma.ClusterWhereInput[]
  OR?: Prisma.ClusterWhereInput[]
  NOT?: Prisma.ClusterWhereInput | Prisma.ClusterWhereInput[]
  label?: Prisma.StringFilter<"Cluster"> | string
  topTerms?: Prisma.JsonFilter<"Cluster">
  articleCount?: Prisma.IntFilter<"Cluster"> | number
  earliestArticleAt?: Prisma.DateTimeNullableFilter<"Cluster"> | Date | string | null
  latestArticleAt?: Prisma.DateTimeNullableFilter<"Cluster"> | Date | string | null
  ingestJobId?: Prisma.StringNullableFilter<"Cluster"> | string | null
  createdAt?: Prisma.DateTimeFilter<"Cluster"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"Cluster"> | Date | string
  ingestJob?: Prisma.XOR<Prisma.IngestJobNullableScalarRelationFilter, Prisma.IngestJobWhereInput> | null
  articles?: Prisma.ArticleListRelationFilter
}, "id">

export type ClusterOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  label?: Prisma.SortOrder
  topTerms?: Prisma.SortOrder
  articleCount?: Prisma.SortOrder
  earliestArticleAt?: Prisma.SortOrderInput | Prisma.SortOrder
  latestArticleAt?: Prisma.SortOrderInput | Prisma.SortOrder
  ingestJobId?: Prisma.SortOrderInput | Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  _count?: Prisma.ClusterCountOrderByAggregateInput
  _avg?: Prisma.ClusterAvgOrderByAggregateInput
  _max?: Prisma.ClusterMaxOrderByAggregateInput
  _min?: Prisma.ClusterMinOrderByAggregateInput
  _sum?: Prisma.ClusterSumOrderByAggregateInput
}

export type ClusterScalarWhereWithAggregatesInput = {
  AND?: Prisma.ClusterScalarWhereWithAggregatesInput | Prisma.ClusterScalarWhereWithAggregatesInput[]
  OR?: Prisma.ClusterScalarWhereWithAggregatesInput[]
  NOT?: Prisma.ClusterScalarWhereWithAggregatesInput | Prisma.ClusterScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"Cluster"> | string
  label?: Prisma.StringWithAggregatesFilter<"Cluster"> | string
  topTerms?: Prisma.JsonWithAggregatesFilter<"Cluster">
  articleCount?: Prisma.IntWithAggregatesFilter<"Cluster"> | number
  earliestArticleAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Cluster"> | Date | string | null
  latestArticleAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Cluster"> | Date | string | null
  ingestJobId?: Prisma.StringNullableWithAggregatesFilter<"Cluster"> | string | null
  createdAt?: Prisma.DateTimeWithAggregatesFilter<"Cluster"> | Date | string
  updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Cluster"> | Date | string
}

export type ClusterCreateInput = {
  id?: string
  label: string
  topTerms?: Prisma.JsonNullValueInput | runtime.InputJsonValue
  articleCount?: number
  earliestArticleAt?: Date | string | null
  latestArticleAt?: Date | string | null
  createdAt?: Date | string
  updatedAt?: Date | string
  ingestJob?: Prisma.IngestJobCreateNestedOneWithoutClustersInput
  articles?: Prisma.ArticleCreateNestedManyWithoutClusterInput
}

export type ClusterUncheckedCreateInput = {
  id?: string
  label: string
  topTerms?: Prisma.JsonNullValueInput | runtime.InputJsonValue
  articleCount?: number
  earliestArticleAt?: Date | string | null
  latestArticleAt?: Date | string | null
  ingestJobId?: string | null
  createdAt?: Date | string
  updatedAt?: Date | string
  articles?: Prisma.ArticleUncheckedCreateNestedManyWithoutClusterInput
}

export type ClusterUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  label?: Prisma.StringFieldUpdateOperationsInput | string
  topTerms?: Prisma.JsonNullValueInput | runtime.InputJsonValue
  articleCount?: Prisma.IntFieldUpdateOperationsInput | number
  earliestArticleAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  latestArticleAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  ingestJob?: Prisma.IngestJobUpdateOneWithoutClustersNestedInput
  articles?: Prisma.ArticleUpdateManyWithoutClusterNestedInput
}

export type ClusterUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  label?: Prisma.StringFieldUpdateOperationsInput | string
  topTerms?: Prisma.JsonNullValueInput | runtime.InputJsonValue
  articleCount?: Prisma.IntFieldUpdateOperationsInput | number
  earliestArticleAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  latestArticleAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  ingestJobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  articles?: Prisma.ArticleUncheckedUpdateManyWithoutClusterNestedInput
}

export type ClusterCreateManyInput = {
  id?: string
  label: string
  topTerms?: Prisma.JsonNullValueInput | runtime.InputJsonValue
  articleCount?: number
  earliestArticleAt?: Date | string | null
  latestArticleAt?: Date | string | null
  ingestJobId?: string | null
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type ClusterUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  label?: Prisma.StringFieldUpdateOperationsInput | string
  topTerms?: Prisma.JsonNullValueInput | runtime.InputJsonValue
  articleCount?: Prisma.IntFieldUpdateOperationsInput | number
  earliestArticleAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  latestArticleAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type ClusterUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  label?: Prisma.StringFieldUpdateOperationsInput | string
  topTerms?: Prisma.JsonNullValueInput | runtime.InputJsonValue
  articleCount?: Prisma.IntFieldUpdateOperationsInput | number
  earliestArticleAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  latestArticleAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  ingestJobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type ClusterListRelationFilter = {
  every?: Prisma.ClusterWhereInput
  some?: Prisma.ClusterWhereInput
  none?: Prisma.ClusterWhereInput
}

export type ClusterOrderByRelationAggregateInput = {
  _count?: Prisma.SortOrder
}

export type ClusterCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  label?: Prisma.SortOrder
  topTerms?: Prisma.SortOrder
  articleCount?: Prisma.SortOrder
  earliestArticleAt?: Prisma.SortOrder
  latestArticleAt?: Prisma.SortOrder
  ingestJobId?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type ClusterAvgOrderByAggregateInput = {
  articleCount?: Prisma.SortOrder
}

export type ClusterMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  label?: Prisma.SortOrder
  articleCount?: Prisma.SortOrder
  earliestArticleAt?: Prisma.SortOrder
  latestArticleAt?: Prisma.SortOrder
  ingestJobId?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type ClusterMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  label?: Prisma.SortOrder
  articleCount?: Prisma.SortOrder
  earliestArticleAt?: Prisma.SortOrder
  latestArticleAt?: Prisma.SortOrder
  ingestJobId?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type ClusterSumOrderByAggregateInput = {
  articleCount?: Prisma.SortOrder
}

export type ClusterNullableScalarRelationFilter = {
  is?: Prisma.ClusterWhereInput | null
  isNot?: Prisma.ClusterWhereInput | null
}

export type ClusterCreateNestedManyWithoutIngestJobInput = {
  create?: Prisma.XOR<Prisma.ClusterCreateWithoutIngestJobInput, Prisma.ClusterUncheckedCreateWithoutIngestJobInput> | Prisma.ClusterCreateWithoutIngestJobInput[] | Prisma.ClusterUncheckedCreateWithoutIngestJobInput[]
  connectOrCreate?: Prisma.ClusterCreateOrConnectWithoutIngestJobInput | Prisma.ClusterCreateOrConnectWithoutIngestJobInput[]
  createMany?: Prisma.ClusterCreateManyIngestJobInputEnvelope
  connect?: Prisma.ClusterWhereUniqueInput | Prisma.ClusterWhereUniqueInput[]
}

export type ClusterUncheckedCreateNestedManyWithoutIngestJobInput = {
  create?: Prisma.XOR<Prisma.ClusterCreateWithoutIngestJobInput, Prisma.ClusterUncheckedCreateWithoutIngestJobInput> | Prisma.ClusterCreateWithoutIngestJobInput[] | Prisma.ClusterUncheckedCreateWithoutIngestJobInput[]
  connectOrCreate?: Prisma.ClusterCreateOrConnectWithoutIngestJobInput | Prisma.ClusterCreateOrConnectWithoutIngestJobInput[]
  createMany?: Prisma.ClusterCreateManyIngestJobInputEnvelope
  connect?: Prisma.ClusterWhereUniqueInput | Prisma.ClusterWhereUniqueInput[]
}

export type ClusterUpdateManyWithoutIngestJobNestedInput = {
  create?: Prisma.XOR<Prisma.ClusterCreateWithoutIngestJobInput, Prisma.ClusterUncheckedCreateWithoutIngestJobInput> | Prisma.ClusterCreateWithoutIngestJobInput[] | Prisma.ClusterUncheckedCreateWithoutIngestJobInput[]
  connectOrCreate?: Prisma.ClusterCreateOrConnectWithoutIngestJobInput | Prisma.ClusterCreateOrConnectWithoutIngestJobInput[]
  upsert?: Prisma.ClusterUpsertWithWhereUniqueWithoutIngestJobInput | Prisma.ClusterUpsertWithWhereUniqueWithoutIngestJobInput[]
  createMany?: Prisma.ClusterCreateManyIngestJobInputEnvelope
  set?: Prisma.ClusterWhereUniqueInput | Prisma.ClusterWhereUniqueInput[]
  disconnect?: Prisma.ClusterWhereUniqueInput | Prisma.ClusterWhereUniqueInput[]
  delete?: Prisma.ClusterWhereUniqueInput | Prisma.ClusterWhereUniqueInput[]
  connect?: Prisma.ClusterWhereUniqueInput | Prisma.ClusterWhereUniqueInput[]
  update?: Prisma.ClusterUpdateWithWhereUniqueWithoutIngestJobInput | Prisma.ClusterUpdateWithWhereUniqueWithoutIngestJobInput[]
  updateMany?: Prisma.ClusterUpdateManyWithWhereWithoutIngestJobInput | Prisma.ClusterUpdateManyWithWhereWithoutIngestJobInput[]
  deleteMany?: Prisma.ClusterScalarWhereInput | Prisma.ClusterScalarWhereInput[]
}

export type ClusterUncheckedUpdateManyWithoutIngestJobNestedInput = {
  create?: Prisma.XOR<Prisma.ClusterCreateWithoutIngestJobInput, Prisma.ClusterUncheckedCreateWithoutIngestJobInput> | Prisma.ClusterCreateWithoutIngestJobInput[] | Prisma.ClusterUncheckedCreateWithoutIngestJobInput[]
  connectOrCreate?: Prisma.ClusterCreateOrConnectWithoutIngestJobInput | Prisma.ClusterCreateOrConnectWithoutIngestJobInput[]
  upsert?: Prisma.ClusterUpsertWithWhereUniqueWithoutIngestJobInput | Prisma.ClusterUpsertWithWhereUniqueWithoutIngestJobInput[]
  createMany?: Prisma.ClusterCreateManyIngestJobInputEnvelope
  set?: Prisma.ClusterWhereUniqueInput | Prisma.ClusterWhereUniqueInput[]
  disconnect?: Prisma.ClusterWhereUniqueInput | Prisma.ClusterWhereUniqueInput[]
  delete?: Prisma.ClusterWhereUniqueInput | Prisma.ClusterWhereUniqueInput[]
  connect?: Prisma.ClusterWhereUniqueInput | Prisma.ClusterWhereUniqueInput[]
  update?: Prisma.ClusterUpdateWithWhereUniqueWithoutIngestJobInput | Prisma.ClusterUpdateWithWhereUniqueWithoutIngestJobInput[]
  updateMany?: Prisma.ClusterUpdateManyWithWhereWithoutIngestJobInput | Prisma.ClusterUpdateManyWithWhereWithoutIngestJobInput[]
  deleteMany?: Prisma.ClusterScalarWhereInput | Prisma.ClusterScalarWhereInput[]
}

export type IntFieldUpdateOperationsInput = {
  set?: number
  increment?: number
  decrement?: number
  multiply?: number
  divide?: number
}

export type ClusterCreateNestedOneWithoutArticlesInput = {
  create?: Prisma.XOR<Prisma.ClusterCreateWithoutArticlesInput, Prisma.ClusterUncheckedCreateWithoutArticlesInput>
  connectOrCreate?: Prisma.ClusterCreateOrConnectWithoutArticlesInput
  connect?: Prisma.ClusterWhereUniqueInput
}

export type ClusterUpdateOneWithoutArticlesNestedInput = {
  create?: Prisma.XOR<Prisma.ClusterCreateWithoutArticlesInput, Prisma.ClusterUncheckedCreateWithoutArticlesInput>
  connectOrCreate?: Prisma.ClusterCreateOrConnectWithoutArticlesInput
  upsert?: Prisma.ClusterUpsertWithoutArticlesInput
  disconnect?: Prisma.ClusterWhereInput | boolean
  delete?: Prisma.ClusterWhereInput | boolean
  connect?: Prisma.ClusterWhereUniqueInput
  update?: Prisma.XOR<Prisma.XOR<Prisma.ClusterUpdateToOneWithWhereWithoutArticlesInput, Prisma.ClusterUpdateWithoutArticlesInput>, Prisma.ClusterUncheckedUpdateWithoutArticlesInput>
}

export type ClusterCreateWithoutIngestJobInput = {
  id?: string
  label: string
  topTerms?: Prisma.JsonNullValueInput | runtime.InputJsonValue
  articleCount?: number
  earliestArticleAt?: Date | string | null
  latestArticleAt?: Date | string | null
  createdAt?: Date | string
  updatedAt?: Date | string
  articles?: Prisma.ArticleCreateNestedManyWithoutClusterInput
}

export type ClusterUncheckedCreateWithoutIngestJobInput = {
  id?: string
  label: string
  topTerms?: Prisma.JsonNullValueInput | runtime.InputJsonValue
  articleCount?: number
  earliestArticleAt?: Date | string | null
  latestArticleAt?: Date | string | null
  createdAt?: Date | string
  updatedAt?: Date | string
  articles?: Prisma.ArticleUncheckedCreateNestedManyWithoutClusterInput
}

export type ClusterCreateOrConnectWithoutIngestJobInput = {
  where: Prisma.ClusterWhereUniqueInput
  create: Prisma.XOR<Prisma.ClusterCreateWithoutIngestJobInput, Prisma.ClusterUncheckedCreateWithoutIngestJobInput>
}

export type ClusterCreateManyIngestJobInputEnvelope = {
  data: Prisma.ClusterCreateManyIngestJobInput | Prisma.ClusterCreateManyIngestJobInput[]
  skipDuplicates?: boolean
}

export type ClusterUpsertWithWhereUniqueWithoutIngestJobInput = {
  where: Prisma.ClusterWhereUniqueInput
  update: Prisma.XOR<Prisma.ClusterUpdateWithoutIngestJobInput, Prisma.ClusterUncheckedUpdateWithoutIngestJobInput>
  create: Prisma.XOR<Prisma.ClusterCreateWithoutIngestJobInput, Prisma.ClusterUncheckedCreateWithoutIngestJobInput>
}

export type ClusterUpdateWithWhereUniqueWithoutIngestJobInput = {
  where: Prisma.ClusterWhereUniqueInput
  data: Prisma.XOR<Prisma.ClusterUpdateWithoutIngestJobInput, Prisma.ClusterUncheckedUpdateWithoutIngestJobInput>
}

export type ClusterUpdateManyWithWhereWithoutIngestJobInput = {
  where: Prisma.ClusterScalarWhereInput
  data: Prisma.XOR<Prisma.ClusterUpdateManyMutationInput, Prisma.ClusterUncheckedUpdateManyWithoutIngestJobInput>
}

export type ClusterScalarWhereInput = {
  AND?: Prisma.ClusterScalarWhereInput | Prisma.ClusterScalarWhereInput[]
  OR?: Prisma.ClusterScalarWhereInput[]
  NOT?: Prisma.ClusterScalarWhereInput | Prisma.ClusterScalarWhereInput[]
  id?: Prisma.StringFilter<"Cluster"> | string
  label?: Prisma.StringFilter<"Cluster"> | string
  topTerms?: Prisma.JsonFilter<"Cluster">
  articleCount?: Prisma.IntFilter<"Cluster"> | number
  earliestArticleAt?: Prisma.DateTimeNullableFilter<"Cluster"> | Date | string | null
  latestArticleAt?: Prisma.DateTimeNullableFilter<"Cluster"> | Date | string | null
  ingestJobId?: Prisma.StringNullableFilter<"Cluster"> | string | null
  createdAt?: Prisma.DateTimeFilter<"Cluster"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"Cluster"> | Date | string
}

export type ClusterCreateWithoutArticlesInput = {
  id?: string
  label: string
  topTerms?: Prisma.JsonNullValueInput | runtime.InputJsonValue
  articleCount?: number
  earliestArticleAt?: Date | string | null
  latestArticleAt?: Date | string | null
  createdAt?: Date | string
  updatedAt?: Date | string
  ingestJob?: Prisma.IngestJobCreateNestedOneWithoutClustersInput
}

export type ClusterUncheckedCreateWithoutArticlesInput = {
  id?: string
  label: string
  topTerms?: Prisma.JsonNullValueInput | runtime.InputJsonValue
  articleCount?: number
  earliestArticleAt?: Date | string | null
  latestArticleAt?: Date | string | null
  ingestJobId?: string | null
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type ClusterCreateOrConnectWithoutArticlesInput = {
  where: Prisma.ClusterWhereUniqueInput
  create: Prisma.XOR<Prisma.ClusterCreateWithoutArticlesInput, Prisma.ClusterUncheckedCreateWithoutArticlesInput>
}

export type ClusterUpsertWithoutArticlesInput = {
  update: Prisma.XOR<Prisma.ClusterUpdateWithoutArticlesInput, Prisma.ClusterUncheckedUpdateWithoutArticlesInput>
  create: Prisma.XOR<Prisma.ClusterCreateWithoutArticlesInput, Prisma.ClusterUncheckedCreateWithoutArticlesInput>
  where?: Prisma.ClusterWhereInput
}

export type ClusterUpdateToOneWithWhereWithoutArticlesInput = {
  where?: Prisma.ClusterWhereInput
  data: Prisma.XOR<Prisma.ClusterUpdateWithoutArticlesInput, Prisma.ClusterUncheckedUpdateWithoutArticlesInput>
}

export type ClusterUpdateWithoutArticlesInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  label?: Prisma.StringFieldUpdateOperationsInput | string
  topTerms?: Prisma.JsonNullValueInput | runtime.InputJsonValue
  articleCount?: Prisma.IntFieldUpdateOperationsInput | number
  earliestArticleAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  latestArticleAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  ingestJob?: Prisma.IngestJobUpdateOneWithoutClustersNestedInput
}

export type ClusterUncheckedUpdateWithoutArticlesInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  label?: Prisma.StringFieldUpdateOperationsInput | string
  topTerms?: Prisma.JsonNullValueInput | runtime.InputJsonValue
  articleCount?: Prisma.IntFieldUpdateOperationsInput | number
  earliestArticleAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  latestArticleAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  ingestJobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type ClusterCreateManyIngestJobInput = {
  id?: string
  label: string
  topTerms?: Prisma.JsonNullValueInput | runtime.InputJsonValue
  articleCount?: number
  earliestArticleAt?: Date | string | null
  latestArticleAt?: Date | string | null
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type ClusterUpdateWithoutIngestJobInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  label?: Prisma.StringFieldUpdateOperationsInput | string
  topTerms?: Prisma.JsonNullValueInput | runtime.InputJsonValue
  articleCount?: Prisma.IntFieldUpdateOperationsInput | number
  earliestArticleAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  latestArticleAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  articles?: Prisma.ArticleUpdateManyWithoutClusterNestedInput
}

export type ClusterUncheckedUpdateWithoutIngestJobInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  label?: Prisma.StringFieldUpdateOperationsInput | string
  topTerms?: Prisma.JsonNullValueInput | runtime.InputJsonValue
  articleCount?: Prisma.IntFieldUpdateOperationsInput | number
  earliestArticleAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  latestArticleAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  articles?: Prisma.ArticleUncheckedUpdateManyWithoutClusterNestedInput
}

export type ClusterUncheckedUpdateManyWithoutIngestJobInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  label?: Prisma.StringFieldUpdateOperationsInput | string
  topTerms?: Prisma.JsonNullValueInput | runtime.InputJsonValue
  articleCount?: Prisma.IntFieldUpdateOperationsInput | number
  earliestArticleAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  latestArticleAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}


/**
 * Count Type ClusterCountOutputType
 */

export type ClusterCountOutputType = {
  articles: number
}

export type ClusterCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  articles?: boolean | ClusterCountOutputTypeCountArticlesArgs
}

/**
 * ClusterCountOutputType without action
 */
export type ClusterCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the ClusterCountOutputType
   */
  select?: Prisma.ClusterCountOutputTypeSelect<ExtArgs> | null
}

/**
 * ClusterCountOutputType without action
 */
export type ClusterCountOutputTypeCountArticlesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.ArticleWhereInput
}


export type ClusterSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  label?: boolean
  topTerms?: boolean
  articleCount?: boolean
  earliestArticleAt?: boolean
  latestArticleAt?: boolean
  ingestJobId?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  ingestJob?: boolean | Prisma.Cluster$ingestJobArgs<ExtArgs>
  articles?: boolean | Prisma.Cluster$articlesArgs<ExtArgs>
  _count?: boolean | Prisma.ClusterCountOutputTypeDefaultArgs<ExtArgs>
}, ExtArgs["result"]["cluster"]>

export type ClusterSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  label?: boolean
  topTerms?: boolean
  articleCount?: boolean
  earliestArticleAt?: boolean
  latestArticleAt?: boolean
  ingestJobId?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  ingestJob?: boolean | Prisma.Cluster$ingestJobArgs<ExtArgs>
}, ExtArgs["result"]["cluster"]>

export type ClusterSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  label?: boolean
  topTerms?: boolean
  articleCount?: boolean
  earliestArticleAt?: boolean
  latestArticleAt?: boolean
  ingestJobId?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  ingestJob?: boolean | Prisma.Cluster$ingestJobArgs<ExtArgs>
}, ExtArgs["result"]["cluster"]>

export type ClusterSelectScalar = {
  id?: boolean
  label?: boolean
  topTerms?: boolean
  articleCount?: boolean
  earliestArticleAt?: boolean
  latestArticleAt?: boolean
  ingestJobId?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}

export type ClusterOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "label" | "topTerms" | "articleCount" | "earliestArticleAt" | "latestArticleAt" | "ingestJobId" | "createdAt" | "updatedAt", ExtArgs["result"]["cluster"]>
export type ClusterInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  ingestJob?: boolean | Prisma.Cluster$ingestJobArgs<ExtArgs>
  articles?: boolean | Prisma.Cluster$articlesArgs<ExtArgs>
  _count?: boolean | Prisma.ClusterCountOutputTypeDefaultArgs<ExtArgs>
}
export type ClusterIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  ingestJob?: boolean | Prisma.Cluster$ingestJobArgs<ExtArgs>
}
export type ClusterIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  ingestJob?: boolean | Prisma.Cluster$ingestJobArgs<ExtArgs>
}

export type $ClusterPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "Cluster"
  objects: {
    ingestJob: Prisma.$IngestJobPayload<ExtArgs> | null
    articles: Prisma.$ArticlePayload<ExtArgs>[]
  }
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    label: string
    topTerms: runtime.JsonValue
    articleCount: number
    earliestArticleAt: Date | null
    latestArticleAt: Date | null
    ingestJobId: string | null
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["cluster"]>
  composites: {}
}

export type ClusterGetPayload<S extends boolean | null | undefined | ClusterDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ClusterPayload, S>

export type ClusterCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<ClusterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClusterCountAggregateInputType | true
  }

export interface ClusterDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cluster'], meta: { name: 'Cluster' } }
  /**
   * Find zero or one Cluster that matches the filter.
   * @param {ClusterFindUniqueArgs} args - Arguments to find a Cluster
   * @example
   * // Get one Cluster
   * const cluster = await prisma.cluster.findUnique({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findUnique<T extends ClusterFindUniqueArgs>(args: Prisma.SelectSubset<T, ClusterFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ClusterClient<runtime.Types.Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  /**
   * Find one Cluster that matches the filter or throw an error with `error.code='P2025'`
   * if no matches were found.
   * @param {ClusterFindUniqueOrThrowArgs} args - Arguments to find a Cluster
   * @example
   * // Get one Cluster
   * const cluster = await prisma.cluster.findUniqueOrThrow({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findUniqueOrThrow<T extends ClusterFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ClusterFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClusterClient<runtime.Types.Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Find the first Cluster that matches the filter.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {ClusterFindFirstArgs} args - Arguments to find a Cluster
   * @example
   * // Get one Cluster
   * const cluster = await prisma.cluster.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findFirst<T extends ClusterFindFirstArgs>(args?: Prisma.SelectSubset<T, ClusterFindFirstArgs<ExtArgs>>): Prisma.Prisma__ClusterClient<runtime.Types.Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  /**
   * Find the first Cluster that matches the filter or
   * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {ClusterFindFirstOrThrowArgs} args - Arguments to find a Cluster
   * @example
   * // Get one Cluster
   * const cluster = await prisma.cluster.findFirstOrThrow({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findFirstOrThrow<T extends ClusterFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ClusterFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClusterClient<runtime.Types.Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Find zero or more Clusters that matches the filter.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {ClusterFindManyArgs} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Clusters
   * const clusters = await prisma.cluster.findMany()
   * 
   * // Get first 10 Clusters
   * const clusters = await prisma.cluster.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const clusterWithIdOnly = await prisma.cluster.findMany({ select: { id: true } })
   * 
   */
  findMany<T extends ClusterFindManyArgs>(args?: Prisma.SelectSubset<T, ClusterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  /**
   * Create a Cluster.
   * @param {ClusterCreateArgs} args - Arguments to create a Cluster.
   * @example
   * // Create one Cluster
   * const Cluster = await prisma.cluster.create({
   *   data: {
   *     // ... data to create a Cluster
   *   }
   * })
   * 
   */
  create<T extends ClusterCreateArgs>(args: Prisma.SelectSubset<T, ClusterCreateArgs<ExtArgs>>): Prisma.Prisma__ClusterClient<runtime.Types.Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Create many Clusters.
   * @param {ClusterCreateManyArgs} args - Arguments to create many Clusters.
   * @example
   * // Create many Clusters
   * const cluster = await prisma.cluster.createMany({
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   *     
   */
  createMany<T extends ClusterCreateManyArgs>(args?: Prisma.SelectSubset<T, ClusterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  /**
   * Create many Clusters and returns the data saved in the database.
   * @param {ClusterCreateManyAndReturnArgs} args - Arguments to create many Clusters.
   * @example
   * // Create many Clusters
   * const cluster = await prisma.cluster.createManyAndReturn({
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   * 
   * // Create many Clusters and only return the `id`
   * const clusterWithIdOnly = await prisma.cluster.createManyAndReturn({
   *   select: { id: true },
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * 
   */
  createManyAndReturn<T extends ClusterCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ClusterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  /**
   * Delete a Cluster.
   * @param {ClusterDeleteArgs} args - Arguments to delete one Cluster.
   * @example
   * // Delete one Cluster
   * const Cluster = await prisma.cluster.delete({
   *   where: {
   *     // ... filter to delete one Cluster
   *   }
   * })
   * 
   */
  delete<T extends ClusterDeleteArgs>(args: Prisma.SelectSubset<T, ClusterDeleteArgs<ExtArgs>>): Prisma.Prisma__ClusterClient<runtime.Types.Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Update one Cluster.
   * @param {ClusterUpdateArgs} args - Arguments to update one Cluster.
   * @example
   * // Update one Cluster
   * const cluster = await prisma.cluster.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
   */
  update<T extends ClusterUpdateArgs>(args: Prisma.SelectSubset<T, ClusterUpdateArgs<ExtArgs>>): Prisma.Prisma__ClusterClient<runtime.Types.Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Delete zero or more Clusters.
   * @param {ClusterDeleteManyArgs} args - Arguments to filter Clusters to delete.
   * @example
   * // Delete a few Clusters
   * const { count } = await prisma.cluster.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
   */
  deleteMany<T extends ClusterDeleteManyArgs>(args?: Prisma.SelectSubset<T, ClusterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  /**
   * Update zero or more Clusters.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {ClusterUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Clusters
   * const cluster = await prisma.cluster.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
   */
  updateMany<T extends ClusterUpdateManyArgs>(args: Prisma.SelectSubset<T, ClusterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  /**
   * Update zero or more Clusters and returns the data updated in the database.
   * @param {ClusterUpdateManyAndReturnArgs} args - Arguments to update many Clusters.
   * @example
   * // Update many Clusters
   * const cluster = await prisma.cluster.updateManyAndReturn({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   * 
   * // Update zero or more Clusters and only return the `id`
   * const clusterWithIdOnly = await prisma.cluster.updateManyAndReturn({
   *   select: { id: true },
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * 
   */
  updateManyAndReturn<T extends ClusterUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ClusterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  /**
   * Create or update one Cluster.
   * @param {ClusterUpsertArgs} args - Arguments to update or create a Cluster.
   * @example
   * // Update or create a Cluster
   * const cluster = await prisma.cluster.upsert({
   *   create: {
   *     // ... data to create a Cluster
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Cluster we want to update
   *   }
   * })
   */
  upsert<T extends ClusterUpsertArgs>(args: Prisma.SelectSubset<T, ClusterUpsertArgs<ExtArgs>>): Prisma.Prisma__ClusterClient<runtime.Types.Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  /**
   * Count the number of Clusters.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {ClusterCountArgs} args - Arguments to filter Clusters to count.
   * @example
   * // Count the number of Clusters
   * const count = await prisma.cluster.count({
   *   where: {
   *     // ... the filter for the Clusters we want to count
   *   }
   * })
  **/
  count<T extends ClusterCountArgs>(
    args?: Prisma.Subset<T, ClusterCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], ClusterCountAggregateOutputType>
      : number
  >

  /**
   * Allows you to perform aggregations operations on a Cluster.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {ClusterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
   * @example
   * // Ordered by age ascending
   * // Where email contains prisma.io
   * // Limited to the 10 users
   * const aggregations = await prisma.user.aggregate({
   *   _avg: {
   *     age: true,
   *   },
   *   where: {
   *     email: {
   *       contains: "prisma.io",
   *     },
   *   },
   *   orderBy: {
   *     age: "asc",
   *   },
   *   take: 10,
   * })
  **/
  aggregate<T extends ClusterAggregateArgs>(args: Prisma.Subset<T, ClusterAggregateArgs>): Prisma.PrismaPromise<GetClusterAggregateType<T>>

  /**
   * Group by Cluster.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {ClusterGroupByArgs} args - Group by arguments.
   * @example
   * // Group by city, order by createdAt, get count
   * const result = await prisma.user.groupBy({
   *   by: ['city', 'createdAt'],
   *   orderBy: {
   *     createdAt: true
   *   },
   *   _count: {
   *     _all: true
   *   },
   * })
   * 
  **/
  groupBy<
    T extends ClusterGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: ClusterGroupByArgs['orderBy'] }
      : { orderBy?: ClusterGroupByArgs['orderBy'] },
    OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
    ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
    ByValid extends Prisma.Has<ByFields, OrderFields>,
    HavingFields extends Prisma.GetHavingFields<T['having']>,
    HavingValid extends Prisma.Has<ByFields, HavingFields>,
    ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
    InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
    ? {
        [P in HavingFields]: P extends ByFields
          ? never
          : P extends string
          ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
          : [
              Error,
              'Field ',
              P,
              ` in "having" needs to be provided in "by"`,
            ]
      }[HavingFields]
    : 'take' extends Prisma.Keys<T>
    ? 'orderBy' extends Prisma.Keys<T>
      ? ByValid extends Prisma.True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
          }[OrderFields]
      : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<T>
    ? 'orderBy' extends Prisma.Keys<T>
      ? ByValid extends Prisma.True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
          }[OrderFields]
      : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
          ? never
          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
      }[OrderFields]
  >(args: Prisma.SubsetIntersection<T, ClusterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClusterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
/**
 * Fields of the Cluster model
 */
readonly fields: ClusterFieldRefs;
}

/**
 * The delegate class that acts as a "Promise-like" for Cluster.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ClusterClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  ingestJob<T extends Prisma.Cluster$ingestJobArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Cluster$ingestJobArgs<ExtArgs>>): Prisma.Prisma__IngestJobClient<runtime.Types.Result.GetResult<Prisma.$IngestJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
  articles<T extends Prisma.Cluster$articlesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Cluster$articlesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}




/**
 * Fields of the Cluster model
 */
export interface ClusterFieldRefs {
  readonly id: Prisma.FieldRef<"Cluster", 'String'>
  readonly label: Prisma.FieldRef<"Cluster", 'String'>
  readonly topTerms: Prisma.FieldRef<"Cluster", 'Json'>
  readonly articleCount: Prisma.FieldRef<"Cluster", 'Int'>
  readonly earliestArticleAt: Prisma.FieldRef<"Cluster", 'DateTime'>
  readonly latestArticleAt: Prisma.FieldRef<"Cluster", 'DateTime'>
  readonly ingestJobId: Prisma.FieldRef<"Cluster", 'String'>
  readonly createdAt: Prisma.FieldRef<"Cluster", 'DateTime'>
  readonly updatedAt: Prisma.FieldRef<"Cluster", 'DateTime'>
}
    

// Custom InputTypes
/**
 * Cluster findUnique
 */
export type ClusterFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Cluster
   */
  select?: Prisma.ClusterSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Cluster
   */
  omit?: Prisma.ClusterOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.ClusterInclude<ExtArgs> | null
  /**
   * Filter, which Cluster to fetch.
   */
  where: Prisma.ClusterWhereUniqueInput
}

/**
 * Cluster findUniqueOrThrow
 */
export type ClusterFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Cluster
   */
  select?: Prisma.ClusterSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Cluster
   */
  omit?: Prisma.ClusterOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.ClusterInclude<ExtArgs> | null
  /**
   * Filter, which Cluster to fetch.
   */
  where: Prisma.ClusterWhereUniqueInput
}

/**
 * Cluster findFirst
 */
export type ClusterFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Cluster
   */
  select?: Prisma.ClusterSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Cluster
   */
  omit?: Prisma.ClusterOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.ClusterInclude<ExtArgs> | null
  /**
   * Filter, which Cluster to fetch.
   */
  where?: Prisma.ClusterWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of Clusters to fetch.
   */
  orderBy?: Prisma.ClusterOrderByWithRelationInput | Prisma.ClusterOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the position for searching for Clusters.
   */
  cursor?: Prisma.ClusterWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` Clusters from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` Clusters.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
   * 
   * Filter by unique combinations of Clusters.
   */
  distinct?: Prisma.ClusterScalarFieldEnum | Prisma.ClusterScalarFieldEnum[]
}

/**
 * Cluster findFirstOrThrow
 */
export type ClusterFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Cluster
   */
  select?: Prisma.ClusterSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Cluster
   */
  omit?: Prisma.ClusterOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.ClusterInclude<ExtArgs> | null
  /**
   * Filter, which Cluster to fetch.
   */
  where?: Prisma.ClusterWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of Clusters to fetch.
   */
  orderBy?: Prisma.ClusterOrderByWithRelationInput | Prisma.ClusterOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the position for searching for Clusters.
   */
  cursor?: Prisma.ClusterWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` Clusters from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` Clusters.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
   * 
   * Filter by unique combinations of Clusters.
   */
  distinct?: Prisma.ClusterScalarFieldEnum | Prisma.ClusterScalarFieldEnum[]
}

/**
 * Cluster findMany
 */
export type ClusterFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Cluster
   */
  select?: Prisma.ClusterSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Cluster
   */
  omit?: Prisma.ClusterOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.ClusterInclude<ExtArgs> | null
  /**
   * Filter, which Clusters to fetch.
   */
  where?: Prisma.ClusterWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of Clusters to fetch.
   */
  orderBy?: Prisma.ClusterOrderByWithRelationInput | Prisma.ClusterOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the position for listing Clusters.
   */
  cursor?: Prisma.ClusterWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` Clusters from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` Clusters.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
   * 
   * Filter by unique combinations of Clusters.
   */
  distinct?: Prisma.ClusterScalarFieldEnum | Prisma.ClusterScalarFieldEnum[]
}

/**
 * Cluster create
 */
export type ClusterCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Cluster
   */
  select?: Prisma.ClusterSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Cluster
   */
  omit?: Prisma.ClusterOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.ClusterInclude<ExtArgs> | null
  /**
   * The data needed to create a Cluster.
   */
  data: Prisma.XOR<Prisma.ClusterCreateInput, Prisma.ClusterUncheckedCreateInput>
}

/**
 * Cluster createMany
 */
export type ClusterCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * The data used to create many Clusters.
   */
  data: Prisma.ClusterCreateManyInput | Prisma.ClusterCreateManyInput[]
  skipDuplicates?: boolean
}

/**
 * Cluster createManyAndReturn
 */
export type ClusterCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Cluster
   */
  select?: Prisma.ClusterSelectCreateManyAndReturn<ExtArgs> | null
  /**
   * Omit specific fields from the Cluster
   */
  omit?: Prisma.ClusterOmit<ExtArgs> | null
  /**
   * The data used to create many Clusters.
   */
  data: Prisma.ClusterCreateManyInput | Prisma.ClusterCreateManyInput[]
  skipDuplicates?: boolean
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.ClusterIncludeCreateManyAndReturn<ExtArgs> | null
}

/**
 * Cluster update
 */
export type ClusterUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Cluster
   */
  select?: Prisma.ClusterSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Cluster
   */
  omit?: Prisma.ClusterOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.ClusterInclude<ExtArgs> | null
  /**
   * The data needed to update a Cluster.
   */
  data: Prisma.XOR<Prisma.ClusterUpdateInput, Prisma.ClusterUncheckedUpdateInput>
  /**
   * Choose, which Cluster to update.
   */
  where: Prisma.ClusterWhereUniqueInput
}

/**
 * Cluster updateMany
 */
export type ClusterUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * The data used to update Clusters.
   */
  data: Prisma.XOR<Prisma.ClusterUpdateManyMutationInput, Prisma.ClusterUncheckedUpdateManyInput>
  /**
   * Filter which Clusters to update
   */
  where?: Prisma.ClusterWhereInput
  /**
   * Limit how many Clusters to update.
   */
  limit?: number
}

/**
 * Cluster updateManyAndReturn
 */
export type ClusterUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Cluster
   */
  select?: Prisma.ClusterSelectUpdateManyAndReturn<ExtArgs> | null
  /**
   * Omit specific fields from the Cluster
   */
  omit?: Prisma.ClusterOmit<ExtArgs> | null
  /**
   * The data used to update Clusters.
   */
  data: Prisma.XOR<Prisma.ClusterUpdateManyMutationInput, Prisma.ClusterUncheckedUpdateManyInput>
  /**
   * Filter which Clusters to update
   */
  where?: Prisma.ClusterWhereInput
  /**
   * Limit how many Clusters to update.
   */
  limit?: number
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.ClusterIncludeUpdateManyAndReturn<ExtArgs> | null
}

/**
 * Cluster upsert
 */
export type ClusterUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Cluster
   */
  select?: Prisma.ClusterSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Cluster
   */
  omit?: Prisma.ClusterOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.ClusterInclude<ExtArgs> | null
  /**
   * The filter to search for the Cluster to update in case it exists.
   */
  where: Prisma.ClusterWhereUniqueInput
  /**
   * In case the Cluster found by the `where` argument doesn't exist, create a new Cluster with this data.
   */
  create: Prisma.XOR<Prisma.ClusterCreateInput, Prisma.ClusterUncheckedCreateInput>
  /**
   * In case the Cluster was found with the provided `where` argument, update it with this data.
   */
  update: Prisma.XOR<Prisma.ClusterUpdateInput, Prisma.ClusterUncheckedUpdateInput>
}

/**
 * Cluster delete
 */
export type ClusterDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Cluster
   */
  select?: Prisma.ClusterSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Cluster
   */
  omit?: Prisma.ClusterOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.ClusterInclude<ExtArgs> | null
  /**
   * Filter which Cluster to delete.
   */
  where: Prisma.ClusterWhereUniqueInput
}

/**
 * Cluster deleteMany
 */
export type ClusterDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Filter which Clusters to delete
   */
  where?: Prisma.ClusterWhereInput
  /**
   * Limit how many Clusters to delete.
   */
  limit?: number
}

/**
 * Cluster.ingestJob
 */
export type Cluster$ingestJobArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the IngestJob
   */
  select?: Prisma.IngestJobSelect<ExtArgs> | null
  /**
   * Omit specific fields from the IngestJob
   */
  omit?: Prisma.IngestJobOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.IngestJobInclude<ExtArgs> | null
  where?: Prisma.IngestJobWhereInput
}

/**
 * Cluster.articles
 */
export type Cluster$articlesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Article
   */
  select?: Prisma.ArticleSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Article
   */
  omit?: Prisma.ArticleOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.ArticleInclude<ExtArgs> | null
  where?: Prisma.ArticleWhereInput
  orderBy?: Prisma.ArticleOrderByWithRelationInput | Prisma.ArticleOrderByWithRelationInput[]
  cursor?: Prisma.ArticleWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.ArticleScalarFieldEnum | Prisma.ArticleScalarFieldEnum[]
}

/**
 * Cluster without action
 */
export type ClusterDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Cluster
   */
  select?: Prisma.ClusterSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Cluster
   */
  omit?: Prisma.ClusterOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.ClusterInclude<ExtArgs> | null
}
```

====================================================================================================
# FILE 17

## Relative Path
`generated/prisma/models/IngestJob.ts`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/backend/generated/prisma/models/IngestJob.ts`

## Source Code

```ts

/* !!! This is code generated by Prisma. Do not edit directly. !!! */
/* eslint-disable */
// biome-ignore-all lint: generated file
// @ts-nocheck 
/*
 * This file exports the `IngestJob` model and its related types.
 *
 * 🟢 You can import this file directly.
 */
import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.ts"
import type * as Prisma from "../internal/prismaNamespace.ts"

/**
 * Model IngestJob
 * 
 */
export type IngestJobModel = runtime.Types.Result.DefaultSelection<Prisma.$IngestJobPayload>

export type AggregateIngestJob = {
  _count: IngestJobCountAggregateOutputType | null
  _avg: IngestJobAvgAggregateOutputType | null
  _sum: IngestJobSumAggregateOutputType | null
  _min: IngestJobMinAggregateOutputType | null
  _max: IngestJobMaxAggregateOutputType | null
}

export type IngestJobAvgAggregateOutputType = {
  articlesFetched: number | null
  clustersGenerated: number | null
}

export type IngestJobSumAggregateOutputType = {
  articlesFetched: number | null
  clustersGenerated: number | null
}

export type IngestJobMinAggregateOutputType = {
  id: string | null
  status: string | null
  triggeredBy: string | null
  triggeredAt: Date | null
  startedAt: Date | null
  finishedAt: Date | null
  articlesFetched: number | null
  clustersGenerated: number | null
  errorMessage: string | null
}

export type IngestJobMaxAggregateOutputType = {
  id: string | null
  status: string | null
  triggeredBy: string | null
  triggeredAt: Date | null
  startedAt: Date | null
  finishedAt: Date | null
  articlesFetched: number | null
  clustersGenerated: number | null
  errorMessage: string | null
}

export type IngestJobCountAggregateOutputType = {
  id: number
  status: number
  triggeredBy: number
  triggeredAt: number
  startedAt: number
  finishedAt: number
  articlesFetched: number
  clustersGenerated: number
  errorMessage: number
  _all: number
}


export type IngestJobAvgAggregateInputType = {
  articlesFetched?: true
  clustersGenerated?: true
}

export type IngestJobSumAggregateInputType = {
  articlesFetched?: true
  clustersGenerated?: true
}

export type IngestJobMinAggregateInputType = {
  id?: true
  status?: true
  triggeredBy?: true
  triggeredAt?: true
  startedAt?: true
  finishedAt?: true
  articlesFetched?: true
  clustersGenerated?: true
  errorMessage?: true
}

export type IngestJobMaxAggregateInputType = {
  id?: true
  status?: true
  triggeredBy?: true
  triggeredAt?: true
  startedAt?: true
  finishedAt?: true
  articlesFetched?: true
  clustersGenerated?: true
  errorMessage?: true
}

export type IngestJobCountAggregateInputType = {
  id?: true
  status?: true
  triggeredBy?: true
  triggeredAt?: true
  startedAt?: true
  finishedAt?: true
  articlesFetched?: true
  clustersGenerated?: true
  errorMessage?: true
  _all?: true
}

export type IngestJobAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Filter which IngestJob to aggregate.
   */
  where?: Prisma.IngestJobWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of IngestJobs to fetch.
   */
  orderBy?: Prisma.IngestJobOrderByWithRelationInput | Prisma.IngestJobOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the start position
   */
  cursor?: Prisma.IngestJobWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` IngestJobs from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` IngestJobs.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Count returned IngestJobs
  **/
  _count?: true | IngestJobCountAggregateInputType
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Select which fields to average
  **/
  _avg?: IngestJobAvgAggregateInputType
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Select which fields to sum
  **/
  _sum?: IngestJobSumAggregateInputType
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Select which fields to find the minimum value
  **/
  _min?: IngestJobMinAggregateInputType
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Select which fields to find the maximum value
  **/
  _max?: IngestJobMaxAggregateInputType
}

export type GetIngestJobAggregateType<T extends IngestJobAggregateArgs> = {
      [P in keyof T & keyof AggregateIngestJob]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateIngestJob[P]>
    : Prisma.GetScalarType<T[P], AggregateIngestJob[P]>
}




export type IngestJobGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.IngestJobWhereInput
  orderBy?: Prisma.IngestJobOrderByWithAggregationInput | Prisma.IngestJobOrderByWithAggregationInput[]
  by: Prisma.IngestJobScalarFieldEnum[] | Prisma.IngestJobScalarFieldEnum
  having?: Prisma.IngestJobScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: IngestJobCountAggregateInputType | true
  _avg?: IngestJobAvgAggregateInputType
  _sum?: IngestJobSumAggregateInputType
  _min?: IngestJobMinAggregateInputType
  _max?: IngestJobMaxAggregateInputType
}

export type IngestJobGroupByOutputType = {
  id: string
  status: string
  triggeredBy: string
  triggeredAt: Date
  startedAt: Date | null
  finishedAt: Date | null
  articlesFetched: number | null
  clustersGenerated: number | null
  errorMessage: string | null
  _count: IngestJobCountAggregateOutputType | null
  _avg: IngestJobAvgAggregateOutputType | null
  _sum: IngestJobSumAggregateOutputType | null
  _min: IngestJobMinAggregateOutputType | null
  _max: IngestJobMaxAggregateOutputType | null
}

export type GetIngestJobGroupByPayload<T extends IngestJobGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<IngestJobGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof IngestJobGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], IngestJobGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], IngestJobGroupByOutputType[P]>
      }
    >
  >



export type IngestJobWhereInput = {
  AND?: Prisma.IngestJobWhereInput | Prisma.IngestJobWhereInput[]
  OR?: Prisma.IngestJobWhereInput[]
  NOT?: Prisma.IngestJobWhereInput | Prisma.IngestJobWhereInput[]
  id?: Prisma.StringFilter<"IngestJob"> | string
  status?: Prisma.StringFilter<"IngestJob"> | string
  triggeredBy?: Prisma.StringFilter<"IngestJob"> | string
  triggeredAt?: Prisma.DateTimeFilter<"IngestJob"> | Date | string
  startedAt?: Prisma.DateTimeNullableFilter<"IngestJob"> | Date | string | null
  finishedAt?: Prisma.DateTimeNullableFilter<"IngestJob"> | Date | string | null
  articlesFetched?: Prisma.IntNullableFilter<"IngestJob"> | number | null
  clustersGenerated?: Prisma.IntNullableFilter<"IngestJob"> | number | null
  errorMessage?: Prisma.StringNullableFilter<"IngestJob"> | string | null
  clusters?: Prisma.ClusterListRelationFilter
}

export type IngestJobOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  status?: Prisma.SortOrder
  triggeredBy?: Prisma.SortOrder
  triggeredAt?: Prisma.SortOrder
  startedAt?: Prisma.SortOrderInput | Prisma.SortOrder
  finishedAt?: Prisma.SortOrderInput | Prisma.SortOrder
  articlesFetched?: Prisma.SortOrderInput | Prisma.SortOrder
  clustersGenerated?: Prisma.SortOrderInput | Prisma.SortOrder
  errorMessage?: Prisma.SortOrderInput | Prisma.SortOrder
  clusters?: Prisma.ClusterOrderByRelationAggregateInput
}

export type IngestJobWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  AND?: Prisma.IngestJobWhereInput | Prisma.IngestJobWhereInput[]
  OR?: Prisma.IngestJobWhereInput[]
  NOT?: Prisma.IngestJobWhereInput | Prisma.IngestJobWhereInput[]
  status?: Prisma.StringFilter<"IngestJob"> | string
  triggeredBy?: Prisma.StringFilter<"IngestJob"> | string
  triggeredAt?: Prisma.DateTimeFilter<"IngestJob"> | Date | string
  startedAt?: Prisma.DateTimeNullableFilter<"IngestJob"> | Date | string | null
  finishedAt?: Prisma.DateTimeNullableFilter<"IngestJob"> | Date | string | null
  articlesFetched?: Prisma.IntNullableFilter<"IngestJob"> | number | null
  clustersGenerated?: Prisma.IntNullableFilter<"IngestJob"> | number | null
  errorMessage?: Prisma.StringNullableFilter<"IngestJob"> | string | null
  clusters?: Prisma.ClusterListRelationFilter
}, "id">

export type IngestJobOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  status?: Prisma.SortOrder
  triggeredBy?: Prisma.SortOrder
  triggeredAt?: Prisma.SortOrder
  startedAt?: Prisma.SortOrderInput | Prisma.SortOrder
  finishedAt?: Prisma.SortOrderInput | Prisma.SortOrder
  articlesFetched?: Prisma.SortOrderInput | Prisma.SortOrder
  clustersGenerated?: Prisma.SortOrderInput | Prisma.SortOrder
  errorMessage?: Prisma.SortOrderInput | Prisma.SortOrder
  _count?: Prisma.IngestJobCountOrderByAggregateInput
  _avg?: Prisma.IngestJobAvgOrderByAggregateInput
  _max?: Prisma.IngestJobMaxOrderByAggregateInput
  _min?: Prisma.IngestJobMinOrderByAggregateInput
  _sum?: Prisma.IngestJobSumOrderByAggregateInput
}

export type IngestJobScalarWhereWithAggregatesInput = {
  AND?: Prisma.IngestJobScalarWhereWithAggregatesInput | Prisma.IngestJobScalarWhereWithAggregatesInput[]
  OR?: Prisma.IngestJobScalarWhereWithAggregatesInput[]
  NOT?: Prisma.IngestJobScalarWhereWithAggregatesInput | Prisma.IngestJobScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"IngestJob"> | string
  status?: Prisma.StringWithAggregatesFilter<"IngestJob"> | string
  triggeredBy?: Prisma.StringWithAggregatesFilter<"IngestJob"> | string
  triggeredAt?: Prisma.DateTimeWithAggregatesFilter<"IngestJob"> | Date | string
  startedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"IngestJob"> | Date | string | null
  finishedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"IngestJob"> | Date | string | null
  articlesFetched?: Prisma.IntNullableWithAggregatesFilter<"IngestJob"> | number | null
  clustersGenerated?: Prisma.IntNullableWithAggregatesFilter<"IngestJob"> | number | null
  errorMessage?: Prisma.StringNullableWithAggregatesFilter<"IngestJob"> | string | null
}

export type IngestJobCreateInput = {
  id?: string
  status?: string
  triggeredBy: string
  triggeredAt?: Date | string
  startedAt?: Date | string | null
  finishedAt?: Date | string | null
  articlesFetched?: number | null
  clustersGenerated?: number | null
  errorMessage?: string | null
  clusters?: Prisma.ClusterCreateNestedManyWithoutIngestJobInput
}

export type IngestJobUncheckedCreateInput = {
  id?: string
  status?: string
  triggeredBy: string
  triggeredAt?: Date | string
  startedAt?: Date | string | null
  finishedAt?: Date | string | null
  articlesFetched?: number | null
  clustersGenerated?: number | null
  errorMessage?: string | null
  clusters?: Prisma.ClusterUncheckedCreateNestedManyWithoutIngestJobInput
}

export type IngestJobUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  status?: Prisma.StringFieldUpdateOperationsInput | string
  triggeredBy?: Prisma.StringFieldUpdateOperationsInput | string
  triggeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  articlesFetched?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  clustersGenerated?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  clusters?: Prisma.ClusterUpdateManyWithoutIngestJobNestedInput
}

export type IngestJobUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  status?: Prisma.StringFieldUpdateOperationsInput | string
  triggeredBy?: Prisma.StringFieldUpdateOperationsInput | string
  triggeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  articlesFetched?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  clustersGenerated?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  clusters?: Prisma.ClusterUncheckedUpdateManyWithoutIngestJobNestedInput
}

export type IngestJobCreateManyInput = {
  id?: string
  status?: string
  triggeredBy: string
  triggeredAt?: Date | string
  startedAt?: Date | string | null
  finishedAt?: Date | string | null
  articlesFetched?: number | null
  clustersGenerated?: number | null
  errorMessage?: string | null
}

export type IngestJobUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  status?: Prisma.StringFieldUpdateOperationsInput | string
  triggeredBy?: Prisma.StringFieldUpdateOperationsInput | string
  triggeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  articlesFetched?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  clustersGenerated?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
}

export type IngestJobUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  status?: Prisma.StringFieldUpdateOperationsInput | string
  triggeredBy?: Prisma.StringFieldUpdateOperationsInput | string
  triggeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  articlesFetched?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  clustersGenerated?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
}

export type IngestJobCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  status?: Prisma.SortOrder
  triggeredBy?: Prisma.SortOrder
  triggeredAt?: Prisma.SortOrder
  startedAt?: Prisma.SortOrder
  finishedAt?: Prisma.SortOrder
  articlesFetched?: Prisma.SortOrder
  clustersGenerated?: Prisma.SortOrder
  errorMessage?: Prisma.SortOrder
}

export type IngestJobAvgOrderByAggregateInput = {
  articlesFetched?: Prisma.SortOrder
  clustersGenerated?: Prisma.SortOrder
}

export type IngestJobMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  status?: Prisma.SortOrder
  triggeredBy?: Prisma.SortOrder
  triggeredAt?: Prisma.SortOrder
  startedAt?: Prisma.SortOrder
  finishedAt?: Prisma.SortOrder
  articlesFetched?: Prisma.SortOrder
  clustersGenerated?: Prisma.SortOrder
  errorMessage?: Prisma.SortOrder
}

export type IngestJobMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  status?: Prisma.SortOrder
  triggeredBy?: Prisma.SortOrder
  triggeredAt?: Prisma.SortOrder
  startedAt?: Prisma.SortOrder
  finishedAt?: Prisma.SortOrder
  articlesFetched?: Prisma.SortOrder
  clustersGenerated?: Prisma.SortOrder
  errorMessage?: Prisma.SortOrder
}

export type IngestJobSumOrderByAggregateInput = {
  articlesFetched?: Prisma.SortOrder
  clustersGenerated?: Prisma.SortOrder
}

export type IngestJobNullableScalarRelationFilter = {
  is?: Prisma.IngestJobWhereInput | null
  isNot?: Prisma.IngestJobWhereInput | null
}

export type StringFieldUpdateOperationsInput = {
  set?: string
}

export type DateTimeFieldUpdateOperationsInput = {
  set?: Date | string
}

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: Date | string | null
}

export type NullableIntFieldUpdateOperationsInput = {
  set?: number | null
  increment?: number
  decrement?: number
  multiply?: number
  divide?: number
}

export type NullableStringFieldUpdateOperationsInput = {
  set?: string | null
}

export type IngestJobCreateNestedOneWithoutClustersInput = {
  create?: Prisma.XOR<Prisma.IngestJobCreateWithoutClustersInput, Prisma.IngestJobUncheckedCreateWithoutClustersInput>
  connectOrCreate?: Prisma.IngestJobCreateOrConnectWithoutClustersInput
  connect?: Prisma.IngestJobWhereUniqueInput
}

export type IngestJobUpdateOneWithoutClustersNestedInput = {
  create?: Prisma.XOR<Prisma.IngestJobCreateWithoutClustersInput, Prisma.IngestJobUncheckedCreateWithoutClustersInput>
  connectOrCreate?: Prisma.IngestJobCreateOrConnectWithoutClustersInput
  upsert?: Prisma.IngestJobUpsertWithoutClustersInput
  disconnect?: Prisma.IngestJobWhereInput | boolean
  delete?: Prisma.IngestJobWhereInput | boolean
  connect?: Prisma.IngestJobWhereUniqueInput
  update?: Prisma.XOR<Prisma.XOR<Prisma.IngestJobUpdateToOneWithWhereWithoutClustersInput, Prisma.IngestJobUpdateWithoutClustersInput>, Prisma.IngestJobUncheckedUpdateWithoutClustersInput>
}

export type IngestJobCreateWithoutClustersInput = {
  id?: string
  status?: string
  triggeredBy: string
  triggeredAt?: Date | string
  startedAt?: Date | string | null
  finishedAt?: Date | string | null
  articlesFetched?: number | null
  clustersGenerated?: number | null
  errorMessage?: string | null
}

export type IngestJobUncheckedCreateWithoutClustersInput = {
  id?: string
  status?: string
  triggeredBy: string
  triggeredAt?: Date | string
  startedAt?: Date | string | null
  finishedAt?: Date | string | null
  articlesFetched?: number | null
  clustersGenerated?: number | null
  errorMessage?: string | null
}

export type IngestJobCreateOrConnectWithoutClustersInput = {
  where: Prisma.IngestJobWhereUniqueInput
  create: Prisma.XOR<Prisma.IngestJobCreateWithoutClustersInput, Prisma.IngestJobUncheckedCreateWithoutClustersInput>
}

export type IngestJobUpsertWithoutClustersInput = {
  update: Prisma.XOR<Prisma.IngestJobUpdateWithoutClustersInput, Prisma.IngestJobUncheckedUpdateWithoutClustersInput>
  create: Prisma.XOR<Prisma.IngestJobCreateWithoutClustersInput, Prisma.IngestJobUncheckedCreateWithoutClustersInput>
  where?: Prisma.IngestJobWhereInput
}

export type IngestJobUpdateToOneWithWhereWithoutClustersInput = {
  where?: Prisma.IngestJobWhereInput
  data: Prisma.XOR<Prisma.IngestJobUpdateWithoutClustersInput, Prisma.IngestJobUncheckedUpdateWithoutClustersInput>
}

export type IngestJobUpdateWithoutClustersInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  status?: Prisma.StringFieldUpdateOperationsInput | string
  triggeredBy?: Prisma.StringFieldUpdateOperationsInput | string
  triggeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  articlesFetched?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  clustersGenerated?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
}

export type IngestJobUncheckedUpdateWithoutClustersInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  status?: Prisma.StringFieldUpdateOperationsInput | string
  triggeredBy?: Prisma.StringFieldUpdateOperationsInput | string
  triggeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  articlesFetched?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  clustersGenerated?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
}


/**
 * Count Type IngestJobCountOutputType
 */

export type IngestJobCountOutputType = {
  clusters: number
}

export type IngestJobCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  clusters?: boolean | IngestJobCountOutputTypeCountClustersArgs
}

/**
 * IngestJobCountOutputType without action
 */
export type IngestJobCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the IngestJobCountOutputType
   */
  select?: Prisma.IngestJobCountOutputTypeSelect<ExtArgs> | null
}

/**
 * IngestJobCountOutputType without action
 */
export type IngestJobCountOutputTypeCountClustersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.ClusterWhereInput
}


export type IngestJobSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  status?: boolean
  triggeredBy?: boolean
  triggeredAt?: boolean
  startedAt?: boolean
  finishedAt?: boolean
  articlesFetched?: boolean
  clustersGenerated?: boolean
  errorMessage?: boolean
  clusters?: boolean | Prisma.IngestJob$clustersArgs<ExtArgs>
  _count?: boolean | Prisma.IngestJobCountOutputTypeDefaultArgs<ExtArgs>
}, ExtArgs["result"]["ingestJob"]>

export type IngestJobSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  status?: boolean
  triggeredBy?: boolean
  triggeredAt?: boolean
  startedAt?: boolean
  finishedAt?: boolean
  articlesFetched?: boolean
  clustersGenerated?: boolean
  errorMessage?: boolean
}, ExtArgs["result"]["ingestJob"]>

export type IngestJobSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  status?: boolean
  triggeredBy?: boolean
  triggeredAt?: boolean
  startedAt?: boolean
  finishedAt?: boolean
  articlesFetched?: boolean
  clustersGenerated?: boolean
  errorMessage?: boolean
}, ExtArgs["result"]["ingestJob"]>

export type IngestJobSelectScalar = {
  id?: boolean
  status?: boolean
  triggeredBy?: boolean
  triggeredAt?: boolean
  startedAt?: boolean
  finishedAt?: boolean
  articlesFetched?: boolean
  clustersGenerated?: boolean
  errorMessage?: boolean
}

export type IngestJobOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "status" | "triggeredBy" | "triggeredAt" | "startedAt" | "finishedAt" | "articlesFetched" | "clustersGenerated" | "errorMessage", ExtArgs["result"]["ingestJob"]>
export type IngestJobInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  clusters?: boolean | Prisma.IngestJob$clustersArgs<ExtArgs>
  _count?: boolean | Prisma.IngestJobCountOutputTypeDefaultArgs<ExtArgs>
}
export type IngestJobIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {}
export type IngestJobIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {}

export type $IngestJobPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "IngestJob"
  objects: {
    clusters: Prisma.$ClusterPayload<ExtArgs>[]
  }
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    status: string
    triggeredBy: string
    triggeredAt: Date
    startedAt: Date | null
    finishedAt: Date | null
    articlesFetched: number | null
    clustersGenerated: number | null
    errorMessage: string | null
  }, ExtArgs["result"]["ingestJob"]>
  composites: {}
}

export type IngestJobGetPayload<S extends boolean | null | undefined | IngestJobDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$IngestJobPayload, S>

export type IngestJobCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<IngestJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: IngestJobCountAggregateInputType | true
  }

export interface IngestJobDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IngestJob'], meta: { name: 'IngestJob' } }
  /**
   * Find zero or one IngestJob that matches the filter.
   * @param {IngestJobFindUniqueArgs} args - Arguments to find a IngestJob
   * @example
   * // Get one IngestJob
   * const ingestJob = await prisma.ingestJob.findUnique({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findUnique<T extends IngestJobFindUniqueArgs>(args: Prisma.SelectSubset<T, IngestJobFindUniqueArgs<ExtArgs>>): Prisma.Prisma__IngestJobClient<runtime.Types.Result.GetResult<Prisma.$IngestJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  /**
   * Find one IngestJob that matches the filter or throw an error with `error.code='P2025'`
   * if no matches were found.
   * @param {IngestJobFindUniqueOrThrowArgs} args - Arguments to find a IngestJob
   * @example
   * // Get one IngestJob
   * const ingestJob = await prisma.ingestJob.findUniqueOrThrow({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findUniqueOrThrow<T extends IngestJobFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, IngestJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__IngestJobClient<runtime.Types.Result.GetResult<Prisma.$IngestJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Find the first IngestJob that matches the filter.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {IngestJobFindFirstArgs} args - Arguments to find a IngestJob
   * @example
   * // Get one IngestJob
   * const ingestJob = await prisma.ingestJob.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findFirst<T extends IngestJobFindFirstArgs>(args?: Prisma.SelectSubset<T, IngestJobFindFirstArgs<ExtArgs>>): Prisma.Prisma__IngestJobClient<runtime.Types.Result.GetResult<Prisma.$IngestJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  /**
   * Find the first IngestJob that matches the filter or
   * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {IngestJobFindFirstOrThrowArgs} args - Arguments to find a IngestJob
   * @example
   * // Get one IngestJob
   * const ingestJob = await prisma.ingestJob.findFirstOrThrow({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findFirstOrThrow<T extends IngestJobFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, IngestJobFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__IngestJobClient<runtime.Types.Result.GetResult<Prisma.$IngestJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Find zero or more IngestJobs that matches the filter.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {IngestJobFindManyArgs} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all IngestJobs
   * const ingestJobs = await prisma.ingestJob.findMany()
   * 
   * // Get first 10 IngestJobs
   * const ingestJobs = await prisma.ingestJob.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const ingestJobWithIdOnly = await prisma.ingestJob.findMany({ select: { id: true } })
   * 
   */
  findMany<T extends IngestJobFindManyArgs>(args?: Prisma.SelectSubset<T, IngestJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IngestJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  /**
   * Create a IngestJob.
   * @param {IngestJobCreateArgs} args - Arguments to create a IngestJob.
   * @example
   * // Create one IngestJob
   * const IngestJob = await prisma.ingestJob.create({
   *   data: {
   *     // ... data to create a IngestJob
   *   }
   * })
   * 
   */
  create<T extends IngestJobCreateArgs>(args: Prisma.SelectSubset<T, IngestJobCreateArgs<ExtArgs>>): Prisma.Prisma__IngestJobClient<runtime.Types.Result.GetResult<Prisma.$IngestJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Create many IngestJobs.
   * @param {IngestJobCreateManyArgs} args - Arguments to create many IngestJobs.
   * @example
   * // Create many IngestJobs
   * const ingestJob = await prisma.ingestJob.createMany({
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   *     
   */
  createMany<T extends IngestJobCreateManyArgs>(args?: Prisma.SelectSubset<T, IngestJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  /**
   * Create many IngestJobs and returns the data saved in the database.
   * @param {IngestJobCreateManyAndReturnArgs} args - Arguments to create many IngestJobs.
   * @example
   * // Create many IngestJobs
   * const ingestJob = await prisma.ingestJob.createManyAndReturn({
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   * 
   * // Create many IngestJobs and only return the `id`
   * const ingestJobWithIdOnly = await prisma.ingestJob.createManyAndReturn({
   *   select: { id: true },
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * 
   */
  createManyAndReturn<T extends IngestJobCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, IngestJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IngestJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  /**
   * Delete a IngestJob.
   * @param {IngestJobDeleteArgs} args - Arguments to delete one IngestJob.
   * @example
   * // Delete one IngestJob
   * const IngestJob = await prisma.ingestJob.delete({
   *   where: {
   *     // ... filter to delete one IngestJob
   *   }
   * })
   * 
   */
  delete<T extends IngestJobDeleteArgs>(args: Prisma.SelectSubset<T, IngestJobDeleteArgs<ExtArgs>>): Prisma.Prisma__IngestJobClient<runtime.Types.Result.GetResult<Prisma.$IngestJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Update one IngestJob.
   * @param {IngestJobUpdateArgs} args - Arguments to update one IngestJob.
   * @example
   * // Update one IngestJob
   * const ingestJob = await prisma.ingestJob.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
   */
  update<T extends IngestJobUpdateArgs>(args: Prisma.SelectSubset<T, IngestJobUpdateArgs<ExtArgs>>): Prisma.Prisma__IngestJobClient<runtime.Types.Result.GetResult<Prisma.$IngestJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Delete zero or more IngestJobs.
   * @param {IngestJobDeleteManyArgs} args - Arguments to filter IngestJobs to delete.
   * @example
   * // Delete a few IngestJobs
   * const { count } = await prisma.ingestJob.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
   */
  deleteMany<T extends IngestJobDeleteManyArgs>(args?: Prisma.SelectSubset<T, IngestJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  /**
   * Update zero or more IngestJobs.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {IngestJobUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many IngestJobs
   * const ingestJob = await prisma.ingestJob.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
   */
  updateMany<T extends IngestJobUpdateManyArgs>(args: Prisma.SelectSubset<T, IngestJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  /**
   * Update zero or more IngestJobs and returns the data updated in the database.
   * @param {IngestJobUpdateManyAndReturnArgs} args - Arguments to update many IngestJobs.
   * @example
   * // Update many IngestJobs
   * const ingestJob = await prisma.ingestJob.updateManyAndReturn({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   * 
   * // Update zero or more IngestJobs and only return the `id`
   * const ingestJobWithIdOnly = await prisma.ingestJob.updateManyAndReturn({
   *   select: { id: true },
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * 
   */
  updateManyAndReturn<T extends IngestJobUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, IngestJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IngestJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  /**
   * Create or update one IngestJob.
   * @param {IngestJobUpsertArgs} args - Arguments to update or create a IngestJob.
   * @example
   * // Update or create a IngestJob
   * const ingestJob = await prisma.ingestJob.upsert({
   *   create: {
   *     // ... data to create a IngestJob
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the IngestJob we want to update
   *   }
   * })
   */
  upsert<T extends IngestJobUpsertArgs>(args: Prisma.SelectSubset<T, IngestJobUpsertArgs<ExtArgs>>): Prisma.Prisma__IngestJobClient<runtime.Types.Result.GetResult<Prisma.$IngestJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  /**
   * Count the number of IngestJobs.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {IngestJobCountArgs} args - Arguments to filter IngestJobs to count.
   * @example
   * // Count the number of IngestJobs
   * const count = await prisma.ingestJob.count({
   *   where: {
   *     // ... the filter for the IngestJobs we want to count
   *   }
   * })
  **/
  count<T extends IngestJobCountArgs>(
    args?: Prisma.Subset<T, IngestJobCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], IngestJobCountAggregateOutputType>
      : number
  >

  /**
   * Allows you to perform aggregations operations on a IngestJob.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {IngestJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
   * @example
   * // Ordered by age ascending
   * // Where email contains prisma.io
   * // Limited to the 10 users
   * const aggregations = await prisma.user.aggregate({
   *   _avg: {
   *     age: true,
   *   },
   *   where: {
   *     email: {
   *       contains: "prisma.io",
   *     },
   *   },
   *   orderBy: {
   *     age: "asc",
   *   },
   *   take: 10,
   * })
  **/
  aggregate<T extends IngestJobAggregateArgs>(args: Prisma.Subset<T, IngestJobAggregateArgs>): Prisma.PrismaPromise<GetIngestJobAggregateType<T>>

  /**
   * Group by IngestJob.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {IngestJobGroupByArgs} args - Group by arguments.
   * @example
   * // Group by city, order by createdAt, get count
   * const result = await prisma.user.groupBy({
   *   by: ['city', 'createdAt'],
   *   orderBy: {
   *     createdAt: true
   *   },
   *   _count: {
   *     _all: true
   *   },
   * })
   * 
  **/
  groupBy<
    T extends IngestJobGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: IngestJobGroupByArgs['orderBy'] }
      : { orderBy?: IngestJobGroupByArgs['orderBy'] },
    OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
    ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
    ByValid extends Prisma.Has<ByFields, OrderFields>,
    HavingFields extends Prisma.GetHavingFields<T['having']>,
    HavingValid extends Prisma.Has<ByFields, HavingFields>,
    ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
    InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
    ? {
        [P in HavingFields]: P extends ByFields
          ? never
          : P extends string
          ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
          : [
              Error,
              'Field ',
              P,
              ` in "having" needs to be provided in "by"`,
            ]
      }[HavingFields]
    : 'take' extends Prisma.Keys<T>
    ? 'orderBy' extends Prisma.Keys<T>
      ? ByValid extends Prisma.True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
          }[OrderFields]
      : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<T>
    ? 'orderBy' extends Prisma.Keys<T>
      ? ByValid extends Prisma.True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
          }[OrderFields]
      : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
          ? never
          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
      }[OrderFields]
  >(args: Prisma.SubsetIntersection<T, IngestJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngestJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
/**
 * Fields of the IngestJob model
 */
readonly fields: IngestJobFieldRefs;
}

/**
 * The delegate class that acts as a "Promise-like" for IngestJob.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__IngestJobClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  clusters<T extends Prisma.IngestJob$clustersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.IngestJob$clustersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}




/**
 * Fields of the IngestJob model
 */
export interface IngestJobFieldRefs {
  readonly id: Prisma.FieldRef<"IngestJob", 'String'>
  readonly status: Prisma.FieldRef<"IngestJob", 'String'>
  readonly triggeredBy: Prisma.FieldRef<"IngestJob", 'String'>
  readonly triggeredAt: Prisma.FieldRef<"IngestJob", 'DateTime'>
  readonly startedAt: Prisma.FieldRef<"IngestJob", 'DateTime'>
  readonly finishedAt: Prisma.FieldRef<"IngestJob", 'DateTime'>
  readonly articlesFetched: Prisma.FieldRef<"IngestJob", 'Int'>
  readonly clustersGenerated: Prisma.FieldRef<"IngestJob", 'Int'>
  readonly errorMessage: Prisma.FieldRef<"IngestJob", 'String'>
}
    

// Custom InputTypes
/**
 * IngestJob findUnique
 */
export type IngestJobFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the IngestJob
   */
  select?: Prisma.IngestJobSelect<ExtArgs> | null
  /**
   * Omit specific fields from the IngestJob
   */
  omit?: Prisma.IngestJobOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.IngestJobInclude<ExtArgs> | null
  /**
   * Filter, which IngestJob to fetch.
   */
  where: Prisma.IngestJobWhereUniqueInput
}

/**
 * IngestJob findUniqueOrThrow
 */
export type IngestJobFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the IngestJob
   */
  select?: Prisma.IngestJobSelect<ExtArgs> | null
  /**
   * Omit specific fields from the IngestJob
   */
  omit?: Prisma.IngestJobOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.IngestJobInclude<ExtArgs> | null
  /**
   * Filter, which IngestJob to fetch.
   */
  where: Prisma.IngestJobWhereUniqueInput
}

/**
 * IngestJob findFirst
 */
export type IngestJobFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the IngestJob
   */
  select?: Prisma.IngestJobSelect<ExtArgs> | null
  /**
   * Omit specific fields from the IngestJob
   */
  omit?: Prisma.IngestJobOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.IngestJobInclude<ExtArgs> | null
  /**
   * Filter, which IngestJob to fetch.
   */
  where?: Prisma.IngestJobWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of IngestJobs to fetch.
   */
  orderBy?: Prisma.IngestJobOrderByWithRelationInput | Prisma.IngestJobOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the position for searching for IngestJobs.
   */
  cursor?: Prisma.IngestJobWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` IngestJobs from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` IngestJobs.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
   * 
   * Filter by unique combinations of IngestJobs.
   */
  distinct?: Prisma.IngestJobScalarFieldEnum | Prisma.IngestJobScalarFieldEnum[]
}

/**
 * IngestJob findFirstOrThrow
 */
export type IngestJobFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the IngestJob
   */
  select?: Prisma.IngestJobSelect<ExtArgs> | null
  /**
   * Omit specific fields from the IngestJob
   */
  omit?: Prisma.IngestJobOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.IngestJobInclude<ExtArgs> | null
  /**
   * Filter, which IngestJob to fetch.
   */
  where?: Prisma.IngestJobWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of IngestJobs to fetch.
   */
  orderBy?: Prisma.IngestJobOrderByWithRelationInput | Prisma.IngestJobOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the position for searching for IngestJobs.
   */
  cursor?: Prisma.IngestJobWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` IngestJobs from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` IngestJobs.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
   * 
   * Filter by unique combinations of IngestJobs.
   */
  distinct?: Prisma.IngestJobScalarFieldEnum | Prisma.IngestJobScalarFieldEnum[]
}

/**
 * IngestJob findMany
 */
export type IngestJobFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the IngestJob
   */
  select?: Prisma.IngestJobSelect<ExtArgs> | null
  /**
   * Omit specific fields from the IngestJob
   */
  omit?: Prisma.IngestJobOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.IngestJobInclude<ExtArgs> | null
  /**
   * Filter, which IngestJobs to fetch.
   */
  where?: Prisma.IngestJobWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of IngestJobs to fetch.
   */
  orderBy?: Prisma.IngestJobOrderByWithRelationInput | Prisma.IngestJobOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the position for listing IngestJobs.
   */
  cursor?: Prisma.IngestJobWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` IngestJobs from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` IngestJobs.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
   * 
   * Filter by unique combinations of IngestJobs.
   */
  distinct?: Prisma.IngestJobScalarFieldEnum | Prisma.IngestJobScalarFieldEnum[]
}

/**
 * IngestJob create
 */
export type IngestJobCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the IngestJob
   */
  select?: Prisma.IngestJobSelect<ExtArgs> | null
  /**
   * Omit specific fields from the IngestJob
   */
  omit?: Prisma.IngestJobOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.IngestJobInclude<ExtArgs> | null
  /**
   * The data needed to create a IngestJob.
   */
  data: Prisma.XOR<Prisma.IngestJobCreateInput, Prisma.IngestJobUncheckedCreateInput>
}

/**
 * IngestJob createMany
 */
export type IngestJobCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * The data used to create many IngestJobs.
   */
  data: Prisma.IngestJobCreateManyInput | Prisma.IngestJobCreateManyInput[]
  skipDuplicates?: boolean
}

/**
 * IngestJob createManyAndReturn
 */
export type IngestJobCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the IngestJob
   */
  select?: Prisma.IngestJobSelectCreateManyAndReturn<ExtArgs> | null
  /**
   * Omit specific fields from the IngestJob
   */
  omit?: Prisma.IngestJobOmit<ExtArgs> | null
  /**
   * The data used to create many IngestJobs.
   */
  data: Prisma.IngestJobCreateManyInput | Prisma.IngestJobCreateManyInput[]
  skipDuplicates?: boolean
}

/**
 * IngestJob update
 */
export type IngestJobUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the IngestJob
   */
  select?: Prisma.IngestJobSelect<ExtArgs> | null
  /**
   * Omit specific fields from the IngestJob
   */
  omit?: Prisma.IngestJobOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.IngestJobInclude<ExtArgs> | null
  /**
   * The data needed to update a IngestJob.
   */
  data: Prisma.XOR<Prisma.IngestJobUpdateInput, Prisma.IngestJobUncheckedUpdateInput>
  /**
   * Choose, which IngestJob to update.
   */
  where: Prisma.IngestJobWhereUniqueInput
}

/**
 * IngestJob updateMany
 */
export type IngestJobUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * The data used to update IngestJobs.
   */
  data: Prisma.XOR<Prisma.IngestJobUpdateManyMutationInput, Prisma.IngestJobUncheckedUpdateManyInput>
  /**
   * Filter which IngestJobs to update
   */
  where?: Prisma.IngestJobWhereInput
  /**
   * Limit how many IngestJobs to update.
   */
  limit?: number
}

/**
 * IngestJob updateManyAndReturn
 */
export type IngestJobUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the IngestJob
   */
  select?: Prisma.IngestJobSelectUpdateManyAndReturn<ExtArgs> | null
  /**
   * Omit specific fields from the IngestJob
   */
  omit?: Prisma.IngestJobOmit<ExtArgs> | null
  /**
   * The data used to update IngestJobs.
   */
  data: Prisma.XOR<Prisma.IngestJobUpdateManyMutationInput, Prisma.IngestJobUncheckedUpdateManyInput>
  /**
   * Filter which IngestJobs to update
   */
  where?: Prisma.IngestJobWhereInput
  /**
   * Limit how many IngestJobs to update.
   */
  limit?: number
}

/**
 * IngestJob upsert
 */
export type IngestJobUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the IngestJob
   */
  select?: Prisma.IngestJobSelect<ExtArgs> | null
  /**
   * Omit specific fields from the IngestJob
   */
  omit?: Prisma.IngestJobOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.IngestJobInclude<ExtArgs> | null
  /**
   * The filter to search for the IngestJob to update in case it exists.
   */
  where: Prisma.IngestJobWhereUniqueInput
  /**
   * In case the IngestJob found by the `where` argument doesn't exist, create a new IngestJob with this data.
   */
  create: Prisma.XOR<Prisma.IngestJobCreateInput, Prisma.IngestJobUncheckedCreateInput>
  /**
   * In case the IngestJob was found with the provided `where` argument, update it with this data.
   */
  update: Prisma.XOR<Prisma.IngestJobUpdateInput, Prisma.IngestJobUncheckedUpdateInput>
}

/**
 * IngestJob delete
 */
export type IngestJobDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the IngestJob
   */
  select?: Prisma.IngestJobSelect<ExtArgs> | null
  /**
   * Omit specific fields from the IngestJob
   */
  omit?: Prisma.IngestJobOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.IngestJobInclude<ExtArgs> | null
  /**
   * Filter which IngestJob to delete.
   */
  where: Prisma.IngestJobWhereUniqueInput
}

/**
 * IngestJob deleteMany
 */
export type IngestJobDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Filter which IngestJobs to delete
   */
  where?: Prisma.IngestJobWhereInput
  /**
   * Limit how many IngestJobs to delete.
   */
  limit?: number
}

/**
 * IngestJob.clusters
 */
export type IngestJob$clustersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Cluster
   */
  select?: Prisma.ClusterSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Cluster
   */
  omit?: Prisma.ClusterOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.ClusterInclude<ExtArgs> | null
  where?: Prisma.ClusterWhereInput
  orderBy?: Prisma.ClusterOrderByWithRelationInput | Prisma.ClusterOrderByWithRelationInput[]
  cursor?: Prisma.ClusterWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.ClusterScalarFieldEnum | Prisma.ClusterScalarFieldEnum[]
}

/**
 * IngestJob without action
 */
export type IngestJobDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the IngestJob
   */
  select?: Prisma.IngestJobSelect<ExtArgs> | null
  /**
   * Omit specific fields from the IngestJob
   */
  omit?: Prisma.IngestJobOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.IngestJobInclude<ExtArgs> | null
}
```

====================================================================================================
# FILE 18

## Relative Path
`generated/prisma/models/RefreshToken.ts`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/backend/generated/prisma/models/RefreshToken.ts`

## Source Code

```ts

/* !!! This is code generated by Prisma. Do not edit directly. !!! */
/* eslint-disable */
// biome-ignore-all lint: generated file
// @ts-nocheck 
/*
 * This file exports the `RefreshToken` model and its related types.
 *
 * 🟢 You can import this file directly.
 */
import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.ts"
import type * as Prisma from "../internal/prismaNamespace.ts"

/**
 * Model RefreshToken
 * 
 */
export type RefreshTokenModel = runtime.Types.Result.DefaultSelection<Prisma.$RefreshTokenPayload>

export type AggregateRefreshToken = {
  _count: RefreshTokenCountAggregateOutputType | null
  _min: RefreshTokenMinAggregateOutputType | null
  _max: RefreshTokenMaxAggregateOutputType | null
}

export type RefreshTokenMinAggregateOutputType = {
  id: string | null
  tokenHash: string | null
  userId: string | null
  family: string | null
  isUsed: boolean | null
  expiresAt: Date | null
  createdAt: Date | null
  revokedAt: Date | null
}

export type RefreshTokenMaxAggregateOutputType = {
  id: string | null
  tokenHash: string | null
  userId: string | null
  family: string | null
  isUsed: boolean | null
  expiresAt: Date | null
  createdAt: Date | null
  revokedAt: Date | null
}

export type RefreshTokenCountAggregateOutputType = {
  id: number
  tokenHash: number
  userId: number
  family: number
  isUsed: number
  expiresAt: number
  createdAt: number
  revokedAt: number
  _all: number
}


export type RefreshTokenMinAggregateInputType = {
  id?: true
  tokenHash?: true
  userId?: true
  family?: true
  isUsed?: true
  expiresAt?: true
  createdAt?: true
  revokedAt?: true
}

export type RefreshTokenMaxAggregateInputType = {
  id?: true
  tokenHash?: true
  userId?: true
  family?: true
  isUsed?: true
  expiresAt?: true
  createdAt?: true
  revokedAt?: true
}

export type RefreshTokenCountAggregateInputType = {
  id?: true
  tokenHash?: true
  userId?: true
  family?: true
  isUsed?: true
  expiresAt?: true
  createdAt?: true
  revokedAt?: true
  _all?: true
}

export type RefreshTokenAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Filter which RefreshToken to aggregate.
   */
  where?: Prisma.RefreshTokenWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of RefreshTokens to fetch.
   */
  orderBy?: Prisma.RefreshTokenOrderByWithRelationInput | Prisma.RefreshTokenOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the start position
   */
  cursor?: Prisma.RefreshTokenWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` RefreshTokens from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` RefreshTokens.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Count returned RefreshTokens
  **/
  _count?: true | RefreshTokenCountAggregateInputType
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Select which fields to find the minimum value
  **/
  _min?: RefreshTokenMinAggregateInputType
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Select which fields to find the maximum value
  **/
  _max?: RefreshTokenMaxAggregateInputType
}

export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
      [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateRefreshToken[P]>
    : Prisma.GetScalarType<T[P], AggregateRefreshToken[P]>
}




export type RefreshTokenGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.RefreshTokenWhereInput
  orderBy?: Prisma.RefreshTokenOrderByWithAggregationInput | Prisma.RefreshTokenOrderByWithAggregationInput[]
  by: Prisma.RefreshTokenScalarFieldEnum[] | Prisma.RefreshTokenScalarFieldEnum
  having?: Prisma.RefreshTokenScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: RefreshTokenCountAggregateInputType | true
  _min?: RefreshTokenMinAggregateInputType
  _max?: RefreshTokenMaxAggregateInputType
}

export type RefreshTokenGroupByOutputType = {
  id: string
  tokenHash: string
  userId: string
  family: string
  isUsed: boolean
  expiresAt: Date
  createdAt: Date
  revokedAt: Date | null
  _count: RefreshTokenCountAggregateOutputType | null
  _min: RefreshTokenMinAggregateOutputType | null
  _max: RefreshTokenMaxAggregateOutputType | null
}

export type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
      }
    >
  >



export type RefreshTokenWhereInput = {
  AND?: Prisma.RefreshTokenWhereInput | Prisma.RefreshTokenWhereInput[]
  OR?: Prisma.RefreshTokenWhereInput[]
  NOT?: Prisma.RefreshTokenWhereInput | Prisma.RefreshTokenWhereInput[]
  id?: Prisma.StringFilter<"RefreshToken"> | string
  tokenHash?: Prisma.StringFilter<"RefreshToken"> | string
  userId?: Prisma.StringFilter<"RefreshToken"> | string
  family?: Prisma.StringFilter<"RefreshToken"> | string
  isUsed?: Prisma.BoolFilter<"RefreshToken"> | boolean
  expiresAt?: Prisma.DateTimeFilter<"RefreshToken"> | Date | string
  createdAt?: Prisma.DateTimeFilter<"RefreshToken"> | Date | string
  revokedAt?: Prisma.DateTimeNullableFilter<"RefreshToken"> | Date | string | null
  user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>
}

export type RefreshTokenOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  tokenHash?: Prisma.SortOrder
  userId?: Prisma.SortOrder
  family?: Prisma.SortOrder
  isUsed?: Prisma.SortOrder
  expiresAt?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder
  user?: Prisma.UserOrderByWithRelationInput
}

export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  tokenHash?: string
  AND?: Prisma.RefreshTokenWhereInput | Prisma.RefreshTokenWhereInput[]
  OR?: Prisma.RefreshTokenWhereInput[]
  NOT?: Prisma.RefreshTokenWhereInput | Prisma.RefreshTokenWhereInput[]
  userId?: Prisma.StringFilter<"RefreshToken"> | string
  family?: Prisma.StringFilter<"RefreshToken"> | string
  isUsed?: Prisma.BoolFilter<"RefreshToken"> | boolean
  expiresAt?: Prisma.DateTimeFilter<"RefreshToken"> | Date | string
  createdAt?: Prisma.DateTimeFilter<"RefreshToken"> | Date | string
  revokedAt?: Prisma.DateTimeNullableFilter<"RefreshToken"> | Date | string | null
  user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>
}, "id" | "tokenHash">

export type RefreshTokenOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  tokenHash?: Prisma.SortOrder
  userId?: Prisma.SortOrder
  family?: Prisma.SortOrder
  isUsed?: Prisma.SortOrder
  expiresAt?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder
  _count?: Prisma.RefreshTokenCountOrderByAggregateInput
  _max?: Prisma.RefreshTokenMaxOrderByAggregateInput
  _min?: Prisma.RefreshTokenMinOrderByAggregateInput
}

export type RefreshTokenScalarWhereWithAggregatesInput = {
  AND?: Prisma.RefreshTokenScalarWhereWithAggregatesInput | Prisma.RefreshTokenScalarWhereWithAggregatesInput[]
  OR?: Prisma.RefreshTokenScalarWhereWithAggregatesInput[]
  NOT?: Prisma.RefreshTokenScalarWhereWithAggregatesInput | Prisma.RefreshTokenScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"RefreshToken"> | string
  tokenHash?: Prisma.StringWithAggregatesFilter<"RefreshToken"> | string
  userId?: Prisma.StringWithAggregatesFilter<"RefreshToken"> | string
  family?: Prisma.StringWithAggregatesFilter<"RefreshToken"> | string
  isUsed?: Prisma.BoolWithAggregatesFilter<"RefreshToken"> | boolean
  expiresAt?: Prisma.DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
  createdAt?: Prisma.DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
  revokedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"RefreshToken"> | Date | string | null
}

export type RefreshTokenCreateInput = {
  id?: string
  tokenHash: string
  family: string
  isUsed?: boolean
  expiresAt: Date | string
  createdAt?: Date | string
  revokedAt?: Date | string | null
  user: Prisma.UserCreateNestedOneWithoutRefreshTokensInput
}

export type RefreshTokenUncheckedCreateInput = {
  id?: string
  tokenHash: string
  userId: string
  family: string
  isUsed?: boolean
  expiresAt: Date | string
  createdAt?: Date | string
  revokedAt?: Date | string | null
}

export type RefreshTokenUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tokenHash?: Prisma.StringFieldUpdateOperationsInput | string
  family?: Prisma.StringFieldUpdateOperationsInput | string
  isUsed?: Prisma.BoolFieldUpdateOperationsInput | boolean
  expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  user?: Prisma.UserUpdateOneRequiredWithoutRefreshTokensNestedInput
}

export type RefreshTokenUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tokenHash?: Prisma.StringFieldUpdateOperationsInput | string
  userId?: Prisma.StringFieldUpdateOperationsInput | string
  family?: Prisma.StringFieldUpdateOperationsInput | string
  isUsed?: Prisma.BoolFieldUpdateOperationsInput | boolean
  expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
}

export type RefreshTokenCreateManyInput = {
  id?: string
  tokenHash: string
  userId: string
  family: string
  isUsed?: boolean
  expiresAt: Date | string
  createdAt?: Date | string
  revokedAt?: Date | string | null
}

export type RefreshTokenUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tokenHash?: Prisma.StringFieldUpdateOperationsInput | string
  family?: Prisma.StringFieldUpdateOperationsInput | string
  isUsed?: Prisma.BoolFieldUpdateOperationsInput | boolean
  expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
}

export type RefreshTokenUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tokenHash?: Prisma.StringFieldUpdateOperationsInput | string
  userId?: Prisma.StringFieldUpdateOperationsInput | string
  family?: Prisma.StringFieldUpdateOperationsInput | string
  isUsed?: Prisma.BoolFieldUpdateOperationsInput | boolean
  expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
}

export type RefreshTokenListRelationFilter = {
  every?: Prisma.RefreshTokenWhereInput
  some?: Prisma.RefreshTokenWhereInput
  none?: Prisma.RefreshTokenWhereInput
}

export type RefreshTokenOrderByRelationAggregateInput = {
  _count?: Prisma.SortOrder
}

export type RefreshTokenCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tokenHash?: Prisma.SortOrder
  userId?: Prisma.SortOrder
  family?: Prisma.SortOrder
  isUsed?: Prisma.SortOrder
  expiresAt?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  revokedAt?: Prisma.SortOrder
}

export type RefreshTokenMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tokenHash?: Prisma.SortOrder
  userId?: Prisma.SortOrder
  family?: Prisma.SortOrder
  isUsed?: Prisma.SortOrder
  expiresAt?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  revokedAt?: Prisma.SortOrder
}

export type RefreshTokenMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tokenHash?: Prisma.SortOrder
  userId?: Prisma.SortOrder
  family?: Prisma.SortOrder
  isUsed?: Prisma.SortOrder
  expiresAt?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  revokedAt?: Prisma.SortOrder
}

export type RefreshTokenCreateNestedManyWithoutUserInput = {
  create?: Prisma.XOR<Prisma.RefreshTokenCreateWithoutUserInput, Prisma.RefreshTokenUncheckedCreateWithoutUserInput> | Prisma.RefreshTokenCreateWithoutUserInput[] | Prisma.RefreshTokenUncheckedCreateWithoutUserInput[]
  connectOrCreate?: Prisma.RefreshTokenCreateOrConnectWithoutUserInput | Prisma.RefreshTokenCreateOrConnectWithoutUserInput[]
  createMany?: Prisma.RefreshTokenCreateManyUserInputEnvelope
  connect?: Prisma.RefreshTokenWhereUniqueInput | Prisma.RefreshTokenWhereUniqueInput[]
}

export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
  create?: Prisma.XOR<Prisma.RefreshTokenCreateWithoutUserInput, Prisma.RefreshTokenUncheckedCreateWithoutUserInput> | Prisma.RefreshTokenCreateWithoutUserInput[] | Prisma.RefreshTokenUncheckedCreateWithoutUserInput[]
  connectOrCreate?: Prisma.RefreshTokenCreateOrConnectWithoutUserInput | Prisma.RefreshTokenCreateOrConnectWithoutUserInput[]
  createMany?: Prisma.RefreshTokenCreateManyUserInputEnvelope
  connect?: Prisma.RefreshTokenWhereUniqueInput | Prisma.RefreshTokenWhereUniqueInput[]
}

export type RefreshTokenUpdateManyWithoutUserNestedInput = {
  create?: Prisma.XOR<Prisma.RefreshTokenCreateWithoutUserInput, Prisma.RefreshTokenUncheckedCreateWithoutUserInput> | Prisma.RefreshTokenCreateWithoutUserInput[] | Prisma.RefreshTokenUncheckedCreateWithoutUserInput[]
  connectOrCreate?: Prisma.RefreshTokenCreateOrConnectWithoutUserInput | Prisma.RefreshTokenCreateOrConnectWithoutUserInput[]
  upsert?: Prisma.RefreshTokenUpsertWithWhereUniqueWithoutUserInput | Prisma.RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
  createMany?: Prisma.RefreshTokenCreateManyUserInputEnvelope
  set?: Prisma.RefreshTokenWhereUniqueInput | Prisma.RefreshTokenWhereUniqueInput[]
  disconnect?: Prisma.RefreshTokenWhereUniqueInput | Prisma.RefreshTokenWhereUniqueInput[]
  delete?: Prisma.RefreshTokenWhereUniqueInput | Prisma.RefreshTokenWhereUniqueInput[]
  connect?: Prisma.RefreshTokenWhereUniqueInput | Prisma.RefreshTokenWhereUniqueInput[]
  update?: Prisma.RefreshTokenUpdateWithWhereUniqueWithoutUserInput | Prisma.RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
  updateMany?: Prisma.RefreshTokenUpdateManyWithWhereWithoutUserInput | Prisma.RefreshTokenUpdateManyWithWhereWithoutUserInput[]
  deleteMany?: Prisma.RefreshTokenScalarWhereInput | Prisma.RefreshTokenScalarWhereInput[]
}

export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
  create?: Prisma.XOR<Prisma.RefreshTokenCreateWithoutUserInput, Prisma.RefreshTokenUncheckedCreateWithoutUserInput> | Prisma.RefreshTokenCreateWithoutUserInput[] | Prisma.RefreshTokenUncheckedCreateWithoutUserInput[]
  connectOrCreate?: Prisma.RefreshTokenCreateOrConnectWithoutUserInput | Prisma.RefreshTokenCreateOrConnectWithoutUserInput[]
  upsert?: Prisma.RefreshTokenUpsertWithWhereUniqueWithoutUserInput | Prisma.RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
  createMany?: Prisma.RefreshTokenCreateManyUserInputEnvelope
  set?: Prisma.RefreshTokenWhereUniqueInput | Prisma.RefreshTokenWhereUniqueInput[]
  disconnect?: Prisma.RefreshTokenWhereUniqueInput | Prisma.RefreshTokenWhereUniqueInput[]
  delete?: Prisma.RefreshTokenWhereUniqueInput | Prisma.RefreshTokenWhereUniqueInput[]
  connect?: Prisma.RefreshTokenWhereUniqueInput | Prisma.RefreshTokenWhereUniqueInput[]
  update?: Prisma.RefreshTokenUpdateWithWhereUniqueWithoutUserInput | Prisma.RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
  updateMany?: Prisma.RefreshTokenUpdateManyWithWhereWithoutUserInput | Prisma.RefreshTokenUpdateManyWithWhereWithoutUserInput[]
  deleteMany?: Prisma.RefreshTokenScalarWhereInput | Prisma.RefreshTokenScalarWhereInput[]
}

export type BoolFieldUpdateOperationsInput = {
  set?: boolean
}

export type RefreshTokenCreateWithoutUserInput = {
  id?: string
  tokenHash: string
  family: string
  isUsed?: boolean
  expiresAt: Date | string
  createdAt?: Date | string
  revokedAt?: Date | string | null
}

export type RefreshTokenUncheckedCreateWithoutUserInput = {
  id?: string
  tokenHash: string
  family: string
  isUsed?: boolean
  expiresAt: Date | string
  createdAt?: Date | string
  revokedAt?: Date | string | null
}

export type RefreshTokenCreateOrConnectWithoutUserInput = {
  where: Prisma.RefreshTokenWhereUniqueInput
  create: Prisma.XOR<Prisma.RefreshTokenCreateWithoutUserInput, Prisma.RefreshTokenUncheckedCreateWithoutUserInput>
}

export type RefreshTokenCreateManyUserInputEnvelope = {
  data: Prisma.RefreshTokenCreateManyUserInput | Prisma.RefreshTokenCreateManyUserInput[]
  skipDuplicates?: boolean
}

export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
  where: Prisma.RefreshTokenWhereUniqueInput
  update: Prisma.XOR<Prisma.RefreshTokenUpdateWithoutUserInput, Prisma.RefreshTokenUncheckedUpdateWithoutUserInput>
  create: Prisma.XOR<Prisma.RefreshTokenCreateWithoutUserInput, Prisma.RefreshTokenUncheckedCreateWithoutUserInput>
}

export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
  where: Prisma.RefreshTokenWhereUniqueInput
  data: Prisma.XOR<Prisma.RefreshTokenUpdateWithoutUserInput, Prisma.RefreshTokenUncheckedUpdateWithoutUserInput>
}

export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
  where: Prisma.RefreshTokenScalarWhereInput
  data: Prisma.XOR<Prisma.RefreshTokenUpdateManyMutationInput, Prisma.RefreshTokenUncheckedUpdateManyWithoutUserInput>
}

export type RefreshTokenScalarWhereInput = {
  AND?: Prisma.RefreshTokenScalarWhereInput | Prisma.RefreshTokenScalarWhereInput[]
  OR?: Prisma.RefreshTokenScalarWhereInput[]
  NOT?: Prisma.RefreshTokenScalarWhereInput | Prisma.RefreshTokenScalarWhereInput[]
  id?: Prisma.StringFilter<"RefreshToken"> | string
  tokenHash?: Prisma.StringFilter<"RefreshToken"> | string
  userId?: Prisma.StringFilter<"RefreshToken"> | string
  family?: Prisma.StringFilter<"RefreshToken"> | string
  isUsed?: Prisma.BoolFilter<"RefreshToken"> | boolean
  expiresAt?: Prisma.DateTimeFilter<"RefreshToken"> | Date | string
  createdAt?: Prisma.DateTimeFilter<"RefreshToken"> | Date | string
  revokedAt?: Prisma.DateTimeNullableFilter<"RefreshToken"> | Date | string | null
}

export type RefreshTokenCreateManyUserInput = {
  id?: string
  tokenHash: string
  family: string
  isUsed?: boolean
  expiresAt: Date | string
  createdAt?: Date | string
  revokedAt?: Date | string | null
}

export type RefreshTokenUpdateWithoutUserInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tokenHash?: Prisma.StringFieldUpdateOperationsInput | string
  family?: Prisma.StringFieldUpdateOperationsInput | string
  isUsed?: Prisma.BoolFieldUpdateOperationsInput | boolean
  expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
}

export type RefreshTokenUncheckedUpdateWithoutUserInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tokenHash?: Prisma.StringFieldUpdateOperationsInput | string
  family?: Prisma.StringFieldUpdateOperationsInput | string
  isUsed?: Prisma.BoolFieldUpdateOperationsInput | boolean
  expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
}

export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tokenHash?: Prisma.StringFieldUpdateOperationsInput | string
  family?: Prisma.StringFieldUpdateOperationsInput | string
  isUsed?: Prisma.BoolFieldUpdateOperationsInput | boolean
  expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
}



export type RefreshTokenSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tokenHash?: boolean
  userId?: boolean
  family?: boolean
  isUsed?: boolean
  expiresAt?: boolean
  createdAt?: boolean
  revokedAt?: boolean
  user?: boolean | Prisma.UserDefaultArgs<ExtArgs>
}, ExtArgs["result"]["refreshToken"]>

export type RefreshTokenSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tokenHash?: boolean
  userId?: boolean
  family?: boolean
  isUsed?: boolean
  expiresAt?: boolean
  createdAt?: boolean
  revokedAt?: boolean
  user?: boolean | Prisma.UserDefaultArgs<ExtArgs>
}, ExtArgs["result"]["refreshToken"]>

export type RefreshTokenSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tokenHash?: boolean
  userId?: boolean
  family?: boolean
  isUsed?: boolean
  expiresAt?: boolean
  createdAt?: boolean
  revokedAt?: boolean
  user?: boolean | Prisma.UserDefaultArgs<ExtArgs>
}, ExtArgs["result"]["refreshToken"]>

export type RefreshTokenSelectScalar = {
  id?: boolean
  tokenHash?: boolean
  userId?: boolean
  family?: boolean
  isUsed?: boolean
  expiresAt?: boolean
  createdAt?: boolean
  revokedAt?: boolean
}

export type RefreshTokenOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tokenHash" | "userId" | "family" | "isUsed" | "expiresAt" | "createdAt" | "revokedAt", ExtArgs["result"]["refreshToken"]>
export type RefreshTokenInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  user?: boolean | Prisma.UserDefaultArgs<ExtArgs>
}
export type RefreshTokenIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  user?: boolean | Prisma.UserDefaultArgs<ExtArgs>
}
export type RefreshTokenIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  user?: boolean | Prisma.UserDefaultArgs<ExtArgs>
}

export type $RefreshTokenPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "RefreshToken"
  objects: {
    user: Prisma.$UserPayload<ExtArgs>
  }
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    tokenHash: string
    userId: string
    family: string
    isUsed: boolean
    expiresAt: Date
    createdAt: Date
    revokedAt: Date | null
  }, ExtArgs["result"]["refreshToken"]>
  composites: {}
}

export type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RefreshTokenPayload, S>

export type RefreshTokenCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RefreshTokenCountAggregateInputType | true
  }

export interface RefreshTokenDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
  /**
   * Find zero or one RefreshToken that matches the filter.
   * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
   * @example
   * // Get one RefreshToken
   * const refreshToken = await prisma.refreshToken.findUnique({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findUnique<T extends RefreshTokenFindUniqueArgs>(args: Prisma.SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  /**
   * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
   * if no matches were found.
   * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
   * @example
   * // Get one RefreshToken
   * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Find the first RefreshToken that matches the filter.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
   * @example
   * // Get one RefreshToken
   * const refreshToken = await prisma.refreshToken.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findFirst<T extends RefreshTokenFindFirstArgs>(args?: Prisma.SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma.Prisma__RefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  /**
   * Find the first RefreshToken that matches the filter or
   * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
   * @example
   * // Get one RefreshToken
   * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Find zero or more RefreshTokens that matches the filter.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all RefreshTokens
   * const refreshTokens = await prisma.refreshToken.findMany()
   * 
   * // Get first 10 RefreshTokens
   * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
   * 
   */
  findMany<T extends RefreshTokenFindManyArgs>(args?: Prisma.SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  /**
   * Create a RefreshToken.
   * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
   * @example
   * // Create one RefreshToken
   * const RefreshToken = await prisma.refreshToken.create({
   *   data: {
   *     // ... data to create a RefreshToken
   *   }
   * })
   * 
   */
  create<T extends RefreshTokenCreateArgs>(args: Prisma.SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma.Prisma__RefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Create many RefreshTokens.
   * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
   * @example
   * // Create many RefreshTokens
   * const refreshToken = await prisma.refreshToken.createMany({
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   *     
   */
  createMany<T extends RefreshTokenCreateManyArgs>(args?: Prisma.SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  /**
   * Create many RefreshTokens and returns the data saved in the database.
   * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
   * @example
   * // Create many RefreshTokens
   * const refreshToken = await prisma.refreshToken.createManyAndReturn({
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   * 
   * // Create many RefreshTokens and only return the `id`
   * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({
   *   select: { id: true },
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * 
   */
  createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  /**
   * Delete a RefreshToken.
   * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
   * @example
   * // Delete one RefreshToken
   * const RefreshToken = await prisma.refreshToken.delete({
   *   where: {
   *     // ... filter to delete one RefreshToken
   *   }
   * })
   * 
   */
  delete<T extends RefreshTokenDeleteArgs>(args: Prisma.SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma.Prisma__RefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Update one RefreshToken.
   * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
   * @example
   * // Update one RefreshToken
   * const refreshToken = await prisma.refreshToken.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
   */
  update<T extends RefreshTokenUpdateArgs>(args: Prisma.SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma.Prisma__RefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Delete zero or more RefreshTokens.
   * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
   * @example
   * // Delete a few RefreshTokens
   * const { count } = await prisma.refreshToken.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
   */
  deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: Prisma.SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  /**
   * Update zero or more RefreshTokens.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many RefreshTokens
   * const refreshToken = await prisma.refreshToken.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
   */
  updateMany<T extends RefreshTokenUpdateManyArgs>(args: Prisma.SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  /**
   * Update zero or more RefreshTokens and returns the data updated in the database.
   * @param {RefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
   * @example
   * // Update many RefreshTokens
   * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   * 
   * // Update zero or more RefreshTokens and only return the `id`
   * const refreshTokenWithIdOnly = await prisma.refreshToken.updateManyAndReturn({
   *   select: { id: true },
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * 
   */
  updateManyAndReturn<T extends RefreshTokenUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RefreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  /**
   * Create or update one RefreshToken.
   * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
   * @example
   * // Update or create a RefreshToken
   * const refreshToken = await prisma.refreshToken.upsert({
   *   create: {
   *     // ... data to create a RefreshToken
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the RefreshToken we want to update
   *   }
   * })
   */
  upsert<T extends RefreshTokenUpsertArgs>(args: Prisma.SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma.Prisma__RefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  /**
   * Count the number of RefreshTokens.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
   * @example
   * // Count the number of RefreshTokens
   * const count = await prisma.refreshToken.count({
   *   where: {
   *     // ... the filter for the RefreshTokens we want to count
   *   }
   * })
  **/
  count<T extends RefreshTokenCountArgs>(
    args?: Prisma.Subset<T, RefreshTokenCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
      : number
  >

  /**
   * Allows you to perform aggregations operations on a RefreshToken.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
   * @example
   * // Ordered by age ascending
   * // Where email contains prisma.io
   * // Limited to the 10 users
   * const aggregations = await prisma.user.aggregate({
   *   _avg: {
   *     age: true,
   *   },
   *   where: {
   *     email: {
   *       contains: "prisma.io",
   *     },
   *   },
   *   orderBy: {
   *     age: "asc",
   *   },
   *   take: 10,
   * })
  **/
  aggregate<T extends RefreshTokenAggregateArgs>(args: Prisma.Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

  /**
   * Group by RefreshToken.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {RefreshTokenGroupByArgs} args - Group by arguments.
   * @example
   * // Group by city, order by createdAt, get count
   * const result = await prisma.user.groupBy({
   *   by: ['city', 'createdAt'],
   *   orderBy: {
   *     createdAt: true
   *   },
   *   _count: {
   *     _all: true
   *   },
   * })
   * 
  **/
  groupBy<
    T extends RefreshTokenGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
      : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
    OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
    ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
    ByValid extends Prisma.Has<ByFields, OrderFields>,
    HavingFields extends Prisma.GetHavingFields<T['having']>,
    HavingValid extends Prisma.Has<ByFields, HavingFields>,
    ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
    InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
    ? {
        [P in HavingFields]: P extends ByFields
          ? never
          : P extends string
          ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
          : [
              Error,
              'Field ',
              P,
              ` in "having" needs to be provided in "by"`,
            ]
      }[HavingFields]
    : 'take' extends Prisma.Keys<T>
    ? 'orderBy' extends Prisma.Keys<T>
      ? ByValid extends Prisma.True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
          }[OrderFields]
      : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<T>
    ? 'orderBy' extends Prisma.Keys<T>
      ? ByValid extends Prisma.True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
          }[OrderFields]
      : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
          ? never
          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
      }[OrderFields]
  >(args: Prisma.SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
/**
 * Fields of the RefreshToken model
 */
readonly fields: RefreshTokenFieldRefs;
}

/**
 * The delegate class that acts as a "Promise-like" for RefreshToken.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}




/**
 * Fields of the RefreshToken model
 */
export interface RefreshTokenFieldRefs {
  readonly id: Prisma.FieldRef<"RefreshToken", 'String'>
  readonly tokenHash: Prisma.FieldRef<"RefreshToken", 'String'>
  readonly userId: Prisma.FieldRef<"RefreshToken", 'String'>
  readonly family: Prisma.FieldRef<"RefreshToken", 'String'>
  readonly isUsed: Prisma.FieldRef<"RefreshToken", 'Boolean'>
  readonly expiresAt: Prisma.FieldRef<"RefreshToken", 'DateTime'>
  readonly createdAt: Prisma.FieldRef<"RefreshToken", 'DateTime'>
  readonly revokedAt: Prisma.FieldRef<"RefreshToken", 'DateTime'>
}
    

// Custom InputTypes
/**
 * RefreshToken findUnique
 */
export type RefreshTokenFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the RefreshToken
   */
  select?: Prisma.RefreshTokenSelect<ExtArgs> | null
  /**
   * Omit specific fields from the RefreshToken
   */
  omit?: Prisma.RefreshTokenOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.RefreshTokenInclude<ExtArgs> | null
  /**
   * Filter, which RefreshToken to fetch.
   */
  where: Prisma.RefreshTokenWhereUniqueInput
}

/**
 * RefreshToken findUniqueOrThrow
 */
export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the RefreshToken
   */
  select?: Prisma.RefreshTokenSelect<ExtArgs> | null
  /**
   * Omit specific fields from the RefreshToken
   */
  omit?: Prisma.RefreshTokenOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.RefreshTokenInclude<ExtArgs> | null
  /**
   * Filter, which RefreshToken to fetch.
   */
  where: Prisma.RefreshTokenWhereUniqueInput
}

/**
 * RefreshToken findFirst
 */
export type RefreshTokenFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the RefreshToken
   */
  select?: Prisma.RefreshTokenSelect<ExtArgs> | null
  /**
   * Omit specific fields from the RefreshToken
   */
  omit?: Prisma.RefreshTokenOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.RefreshTokenInclude<ExtArgs> | null
  /**
   * Filter, which RefreshToken to fetch.
   */
  where?: Prisma.RefreshTokenWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of RefreshTokens to fetch.
   */
  orderBy?: Prisma.RefreshTokenOrderByWithRelationInput | Prisma.RefreshTokenOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the position for searching for RefreshTokens.
   */
  cursor?: Prisma.RefreshTokenWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` RefreshTokens from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` RefreshTokens.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
   * 
   * Filter by unique combinations of RefreshTokens.
   */
  distinct?: Prisma.RefreshTokenScalarFieldEnum | Prisma.RefreshTokenScalarFieldEnum[]
}

/**
 * RefreshToken findFirstOrThrow
 */
export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the RefreshToken
   */
  select?: Prisma.RefreshTokenSelect<ExtArgs> | null
  /**
   * Omit specific fields from the RefreshToken
   */
  omit?: Prisma.RefreshTokenOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.RefreshTokenInclude<ExtArgs> | null
  /**
   * Filter, which RefreshToken to fetch.
   */
  where?: Prisma.RefreshTokenWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of RefreshTokens to fetch.
   */
  orderBy?: Prisma.RefreshTokenOrderByWithRelationInput | Prisma.RefreshTokenOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the position for searching for RefreshTokens.
   */
  cursor?: Prisma.RefreshTokenWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` RefreshTokens from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` RefreshTokens.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
   * 
   * Filter by unique combinations of RefreshTokens.
   */
  distinct?: Prisma.RefreshTokenScalarFieldEnum | Prisma.RefreshTokenScalarFieldEnum[]
}

/**
 * RefreshToken findMany
 */
export type RefreshTokenFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the RefreshToken
   */
  select?: Prisma.RefreshTokenSelect<ExtArgs> | null
  /**
   * Omit specific fields from the RefreshToken
   */
  omit?: Prisma.RefreshTokenOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.RefreshTokenInclude<ExtArgs> | null
  /**
   * Filter, which RefreshTokens to fetch.
   */
  where?: Prisma.RefreshTokenWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of RefreshTokens to fetch.
   */
  orderBy?: Prisma.RefreshTokenOrderByWithRelationInput | Prisma.RefreshTokenOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the position for listing RefreshTokens.
   */
  cursor?: Prisma.RefreshTokenWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` RefreshTokens from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` RefreshTokens.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
   * 
   * Filter by unique combinations of RefreshTokens.
   */
  distinct?: Prisma.RefreshTokenScalarFieldEnum | Prisma.RefreshTokenScalarFieldEnum[]
}

/**
 * RefreshToken create
 */
export type RefreshTokenCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the RefreshToken
   */
  select?: Prisma.RefreshTokenSelect<ExtArgs> | null
  /**
   * Omit specific fields from the RefreshToken
   */
  omit?: Prisma.RefreshTokenOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.RefreshTokenInclude<ExtArgs> | null
  /**
   * The data needed to create a RefreshToken.
   */
  data: Prisma.XOR<Prisma.RefreshTokenCreateInput, Prisma.RefreshTokenUncheckedCreateInput>
}

/**
 * RefreshToken createMany
 */
export type RefreshTokenCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * The data used to create many RefreshTokens.
   */
  data: Prisma.RefreshTokenCreateManyInput | Prisma.RefreshTokenCreateManyInput[]
  skipDuplicates?: boolean
}

/**
 * RefreshToken createManyAndReturn
 */
export type RefreshTokenCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the RefreshToken
   */
  select?: Prisma.RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
  /**
   * Omit specific fields from the RefreshToken
   */
  omit?: Prisma.RefreshTokenOmit<ExtArgs> | null
  /**
   * The data used to create many RefreshTokens.
   */
  data: Prisma.RefreshTokenCreateManyInput | Prisma.RefreshTokenCreateManyInput[]
  skipDuplicates?: boolean
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
}

/**
 * RefreshToken update
 */
export type RefreshTokenUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the RefreshToken
   */
  select?: Prisma.RefreshTokenSelect<ExtArgs> | null
  /**
   * Omit specific fields from the RefreshToken
   */
  omit?: Prisma.RefreshTokenOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.RefreshTokenInclude<ExtArgs> | null
  /**
   * The data needed to update a RefreshToken.
   */
  data: Prisma.XOR<Prisma.RefreshTokenUpdateInput, Prisma.RefreshTokenUncheckedUpdateInput>
  /**
   * Choose, which RefreshToken to update.
   */
  where: Prisma.RefreshTokenWhereUniqueInput
}

/**
 * RefreshToken updateMany
 */
export type RefreshTokenUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * The data used to update RefreshTokens.
   */
  data: Prisma.XOR<Prisma.RefreshTokenUpdateManyMutationInput, Prisma.RefreshTokenUncheckedUpdateManyInput>
  /**
   * Filter which RefreshTokens to update
   */
  where?: Prisma.RefreshTokenWhereInput
  /**
   * Limit how many RefreshTokens to update.
   */
  limit?: number
}

/**
 * RefreshToken updateManyAndReturn
 */
export type RefreshTokenUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the RefreshToken
   */
  select?: Prisma.RefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null
  /**
   * Omit specific fields from the RefreshToken
   */
  omit?: Prisma.RefreshTokenOmit<ExtArgs> | null
  /**
   * The data used to update RefreshTokens.
   */
  data: Prisma.XOR<Prisma.RefreshTokenUpdateManyMutationInput, Prisma.RefreshTokenUncheckedUpdateManyInput>
  /**
   * Filter which RefreshTokens to update
   */
  where?: Prisma.RefreshTokenWhereInput
  /**
   * Limit how many RefreshTokens to update.
   */
  limit?: number
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.RefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null
}

/**
 * RefreshToken upsert
 */
export type RefreshTokenUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the RefreshToken
   */
  select?: Prisma.RefreshTokenSelect<ExtArgs> | null
  /**
   * Omit specific fields from the RefreshToken
   */
  omit?: Prisma.RefreshTokenOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.RefreshTokenInclude<ExtArgs> | null
  /**
   * The filter to search for the RefreshToken to update in case it exists.
   */
  where: Prisma.RefreshTokenWhereUniqueInput
  /**
   * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
   */
  create: Prisma.XOR<Prisma.RefreshTokenCreateInput, Prisma.RefreshTokenUncheckedCreateInput>
  /**
   * In case the RefreshToken was found with the provided `where` argument, update it with this data.
   */
  update: Prisma.XOR<Prisma.RefreshTokenUpdateInput, Prisma.RefreshTokenUncheckedUpdateInput>
}

/**
 * RefreshToken delete
 */
export type RefreshTokenDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the RefreshToken
   */
  select?: Prisma.RefreshTokenSelect<ExtArgs> | null
  /**
   * Omit specific fields from the RefreshToken
   */
  omit?: Prisma.RefreshTokenOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.RefreshTokenInclude<ExtArgs> | null
  /**
   * Filter which RefreshToken to delete.
   */
  where: Prisma.RefreshTokenWhereUniqueInput
}

/**
 * RefreshToken deleteMany
 */
export type RefreshTokenDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Filter which RefreshTokens to delete
   */
  where?: Prisma.RefreshTokenWhereInput
  /**
   * Limit how many RefreshTokens to delete.
   */
  limit?: number
}

/**
 * RefreshToken without action
 */
export type RefreshTokenDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the RefreshToken
   */
  select?: Prisma.RefreshTokenSelect<ExtArgs> | null
  /**
   * Omit specific fields from the RefreshToken
   */
  omit?: Prisma.RefreshTokenOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.RefreshTokenInclude<ExtArgs> | null
}
```

====================================================================================================
# FILE 19

## Relative Path
`generated/prisma/models/User.ts`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/backend/generated/prisma/models/User.ts`

## Source Code

```ts

/* !!! This is code generated by Prisma. Do not edit directly. !!! */
/* eslint-disable */
// biome-ignore-all lint: generated file
// @ts-nocheck 
/*
 * This file exports the `User` model and its related types.
 *
 * 🟢 You can import this file directly.
 */
import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.ts"
import type * as Prisma from "../internal/prismaNamespace.ts"

/**
 * Model User
 * 
 */
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>

export type AggregateUser = {
  _count: UserCountAggregateOutputType | null
  _min: UserMinAggregateOutputType | null
  _max: UserMaxAggregateOutputType | null
}

export type UserMinAggregateOutputType = {
  id: string | null
  email: string | null
  passwordHash: string | null
  role: string | null
  createdAt: Date | null
  lastLoginAt: Date | null
}

export type UserMaxAggregateOutputType = {
  id: string | null
  email: string | null
  passwordHash: string | null
  role: string | null
  createdAt: Date | null
  lastLoginAt: Date | null
}

export type UserCountAggregateOutputType = {
  id: number
  email: number
  passwordHash: number
  role: number
  createdAt: number
  lastLoginAt: number
  _all: number
}


export type UserMinAggregateInputType = {
  id?: true
  email?: true
  passwordHash?: true
  role?: true
  createdAt?: true
  lastLoginAt?: true
}

export type UserMaxAggregateInputType = {
  id?: true
  email?: true
  passwordHash?: true
  role?: true
  createdAt?: true
  lastLoginAt?: true
}

export type UserCountAggregateInputType = {
  id?: true
  email?: true
  passwordHash?: true
  role?: true
  createdAt?: true
  lastLoginAt?: true
  _all?: true
}

export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Filter which User to aggregate.
   */
  where?: Prisma.UserWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of Users to fetch.
   */
  orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the start position
   */
  cursor?: Prisma.UserWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` Users from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` Users.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Count returned Users
  **/
  _count?: true | UserCountAggregateInputType
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Select which fields to find the minimum value
  **/
  _min?: UserMinAggregateInputType
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Select which fields to find the maximum value
  **/
  _max?: UserMaxAggregateInputType
}

export type GetUserAggregateType<T extends UserAggregateArgs> = {
      [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateUser[P]>
    : Prisma.GetScalarType<T[P], AggregateUser[P]>
}




export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.UserWhereInput
  orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[]
  by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum
  having?: Prisma.UserScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: UserCountAggregateInputType | true
  _min?: UserMinAggregateInputType
  _max?: UserMaxAggregateInputType
}

export type UserGroupByOutputType = {
  id: string
  email: string
  passwordHash: string
  role: string
  createdAt: Date
  lastLoginAt: Date | null
  _count: UserCountAggregateOutputType | null
  _min: UserMinAggregateOutputType | null
  _max: UserMaxAggregateOutputType | null
}

export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<UserGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>
      }
    >
  >



export type UserWhereInput = {
  AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[]
  OR?: Prisma.UserWhereInput[]
  NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[]
  id?: Prisma.StringFilter<"User"> | string
  email?: Prisma.StringFilter<"User"> | string
  passwordHash?: Prisma.StringFilter<"User"> | string
  role?: Prisma.StringFilter<"User"> | string
  createdAt?: Prisma.DateTimeFilter<"User"> | Date | string
  lastLoginAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null
  refreshTokens?: Prisma.RefreshTokenListRelationFilter
}

export type UserOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  email?: Prisma.SortOrder
  passwordHash?: Prisma.SortOrder
  role?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  lastLoginAt?: Prisma.SortOrderInput | Prisma.SortOrder
  refreshTokens?: Prisma.RefreshTokenOrderByRelationAggregateInput
}

export type UserWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  email?: string
  AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[]
  OR?: Prisma.UserWhereInput[]
  NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[]
  passwordHash?: Prisma.StringFilter<"User"> | string
  role?: Prisma.StringFilter<"User"> | string
  createdAt?: Prisma.DateTimeFilter<"User"> | Date | string
  lastLoginAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null
  refreshTokens?: Prisma.RefreshTokenListRelationFilter
}, "id" | "email">

export type UserOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  email?: Prisma.SortOrder
  passwordHash?: Prisma.SortOrder
  role?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  lastLoginAt?: Prisma.SortOrderInput | Prisma.SortOrder
  _count?: Prisma.UserCountOrderByAggregateInput
  _max?: Prisma.UserMaxOrderByAggregateInput
  _min?: Prisma.UserMinOrderByAggregateInput
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[]
  OR?: Prisma.UserScalarWhereWithAggregatesInput[]
  NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"User"> | string
  email?: Prisma.StringWithAggregatesFilter<"User"> | string
  passwordHash?: Prisma.StringWithAggregatesFilter<"User"> | string
  role?: Prisma.StringWithAggregatesFilter<"User"> | string
  createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string
  lastLoginAt?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
}

export type UserCreateInput = {
  id?: string
  email: string
  passwordHash: string
  role?: string
  createdAt?: Date | string
  lastLoginAt?: Date | string | null
  refreshTokens?: Prisma.RefreshTokenCreateNestedManyWithoutUserInput
}

export type UserUncheckedCreateInput = {
  id?: string
  email: string
  passwordHash: string
  role?: string
  createdAt?: Date | string
  lastLoginAt?: Date | string | null
  refreshTokens?: Prisma.RefreshTokenUncheckedCreateNestedManyWithoutUserInput
}

export type UserUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  email?: Prisma.StringFieldUpdateOperationsInput | string
  passwordHash?: Prisma.StringFieldUpdateOperationsInput | string
  role?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  refreshTokens?: Prisma.RefreshTokenUpdateManyWithoutUserNestedInput
}

export type UserUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  email?: Prisma.StringFieldUpdateOperationsInput | string
  passwordHash?: Prisma.StringFieldUpdateOperationsInput | string
  role?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  refreshTokens?: Prisma.RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
}

export type UserCreateManyInput = {
  id?: string
  email: string
  passwordHash: string
  role?: string
  createdAt?: Date | string
  lastLoginAt?: Date | string | null
}

export type UserUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  email?: Prisma.StringFieldUpdateOperationsInput | string
  passwordHash?: Prisma.StringFieldUpdateOperationsInput | string
  role?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
}

export type UserUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  email?: Prisma.StringFieldUpdateOperationsInput | string
  passwordHash?: Prisma.StringFieldUpdateOperationsInput | string
  role?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
}

export type UserCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  email?: Prisma.SortOrder
  passwordHash?: Prisma.SortOrder
  role?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  lastLoginAt?: Prisma.SortOrder
}

export type UserMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  email?: Prisma.SortOrder
  passwordHash?: Prisma.SortOrder
  role?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  lastLoginAt?: Prisma.SortOrder
}

export type UserMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  email?: Prisma.SortOrder
  passwordHash?: Prisma.SortOrder
  role?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  lastLoginAt?: Prisma.SortOrder
}

export type UserScalarRelationFilter = {
  is?: Prisma.UserWhereInput
  isNot?: Prisma.UserWhereInput
}

export type UserCreateNestedOneWithoutRefreshTokensInput = {
  create?: Prisma.XOR<Prisma.UserCreateWithoutRefreshTokensInput, Prisma.UserUncheckedCreateWithoutRefreshTokensInput>
  connectOrCreate?: Prisma.UserCreateOrConnectWithoutRefreshTokensInput
  connect?: Prisma.UserWhereUniqueInput
}

export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
  create?: Prisma.XOR<Prisma.UserCreateWithoutRefreshTokensInput, Prisma.UserUncheckedCreateWithoutRefreshTokensInput>
  connectOrCreate?: Prisma.UserCreateOrConnectWithoutRefreshTokensInput
  upsert?: Prisma.UserUpsertWithoutRefreshTokensInput
  connect?: Prisma.UserWhereUniqueInput
  update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutRefreshTokensInput, Prisma.UserUpdateWithoutRefreshTokensInput>, Prisma.UserUncheckedUpdateWithoutRefreshTokensInput>
}

export type UserCreateWithoutRefreshTokensInput = {
  id?: string
  email: string
  passwordHash: string
  role?: string
  createdAt?: Date | string
  lastLoginAt?: Date | string | null
}

export type UserUncheckedCreateWithoutRefreshTokensInput = {
  id?: string
  email: string
  passwordHash: string
  role?: string
  createdAt?: Date | string
  lastLoginAt?: Date | string | null
}

export type UserCreateOrConnectWithoutRefreshTokensInput = {
  where: Prisma.UserWhereUniqueInput
  create: Prisma.XOR<Prisma.UserCreateWithoutRefreshTokensInput, Prisma.UserUncheckedCreateWithoutRefreshTokensInput>
}

export type UserUpsertWithoutRefreshTokensInput = {
  update: Prisma.XOR<Prisma.UserUpdateWithoutRefreshTokensInput, Prisma.UserUncheckedUpdateWithoutRefreshTokensInput>
  create: Prisma.XOR<Prisma.UserCreateWithoutRefreshTokensInput, Prisma.UserUncheckedCreateWithoutRefreshTokensInput>
  where?: Prisma.UserWhereInput
}

export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
  where?: Prisma.UserWhereInput
  data: Prisma.XOR<Prisma.UserUpdateWithoutRefreshTokensInput, Prisma.UserUncheckedUpdateWithoutRefreshTokensInput>
}

export type UserUpdateWithoutRefreshTokensInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  email?: Prisma.StringFieldUpdateOperationsInput | string
  passwordHash?: Prisma.StringFieldUpdateOperationsInput | string
  role?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
}

export type UserUncheckedUpdateWithoutRefreshTokensInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  email?: Prisma.StringFieldUpdateOperationsInput | string
  passwordHash?: Prisma.StringFieldUpdateOperationsInput | string
  role?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
}


/**
 * Count Type UserCountOutputType
 */

export type UserCountOutputType = {
  refreshTokens: number
}

export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs
}

/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the UserCountOutputType
   */
  select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null
}

/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.RefreshTokenWhereInput
}


export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  email?: boolean
  passwordHash?: boolean
  role?: boolean
  createdAt?: boolean
  lastLoginAt?: boolean
  refreshTokens?: boolean | Prisma.User$refreshTokensArgs<ExtArgs>
  _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>
}, ExtArgs["result"]["user"]>

export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  email?: boolean
  passwordHash?: boolean
  role?: boolean
  createdAt?: boolean
  lastLoginAt?: boolean
}, ExtArgs["result"]["user"]>

export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  email?: boolean
  passwordHash?: boolean
  role?: boolean
  createdAt?: boolean
  lastLoginAt?: boolean
}, ExtArgs["result"]["user"]>

export type UserSelectScalar = {
  id?: boolean
  email?: boolean
  passwordHash?: boolean
  role?: boolean
  createdAt?: boolean
  lastLoginAt?: boolean
}

export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "passwordHash" | "role" | "createdAt" | "lastLoginAt", ExtArgs["result"]["user"]>
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  refreshTokens?: boolean | Prisma.User$refreshTokensArgs<ExtArgs>
  _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>
}
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {}
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {}

export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "User"
  objects: {
    refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
  }
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    email: string
    passwordHash: string
    role: string
    createdAt: Date
    lastLoginAt: Date | null
  }, ExtArgs["result"]["user"]>
  composites: {}
}

export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>

export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true
  }

export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
  /**
   * Find zero or one User that matches the filter.
   * @param {UserFindUniqueArgs} args - Arguments to find a User
   * @example
   * // Get one User
   * const user = await prisma.user.findUnique({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  /**
   * Find one User that matches the filter or throw an error with `error.code='P2025'`
   * if no matches were found.
   * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
   * @example
   * // Get one User
   * const user = await prisma.user.findUniqueOrThrow({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Find the first User that matches the filter.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {UserFindFirstArgs} args - Arguments to find a User
   * @example
   * // Get one User
   * const user = await prisma.user.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  /**
   * Find the first User that matches the filter or
   * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
   * @example
   * // Get one User
   * const user = await prisma.user.findFirstOrThrow({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Find zero or more Users that matches the filter.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Users
   * const users = await prisma.user.findMany()
   * 
   * // Get first 10 Users
   * const users = await prisma.user.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
   * 
   */
  findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  /**
   * Create a User.
   * @param {UserCreateArgs} args - Arguments to create a User.
   * @example
   * // Create one User
   * const User = await prisma.user.create({
   *   data: {
   *     // ... data to create a User
   *   }
   * })
   * 
   */
  create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Create many Users.
   * @param {UserCreateManyArgs} args - Arguments to create many Users.
   * @example
   * // Create many Users
   * const user = await prisma.user.createMany({
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   *     
   */
  createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  /**
   * Create many Users and returns the data saved in the database.
   * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
   * @example
   * // Create many Users
   * const user = await prisma.user.createManyAndReturn({
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   * 
   * // Create many Users and only return the `id`
   * const userWithIdOnly = await prisma.user.createManyAndReturn({
   *   select: { id: true },
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * 
   */
  createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  /**
   * Delete a User.
   * @param {UserDeleteArgs} args - Arguments to delete one User.
   * @example
   * // Delete one User
   * const User = await prisma.user.delete({
   *   where: {
   *     // ... filter to delete one User
   *   }
   * })
   * 
   */
  delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Update one User.
   * @param {UserUpdateArgs} args - Arguments to update one User.
   * @example
   * // Update one User
   * const user = await prisma.user.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
   */
  update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Delete zero or more Users.
   * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
   * @example
   * // Delete a few Users
   * const { count } = await prisma.user.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
   */
  deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  /**
   * Update zero or more Users.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Users
   * const user = await prisma.user.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
   */
  updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  /**
   * Update zero or more Users and returns the data updated in the database.
   * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
   * @example
   * // Update many Users
   * const user = await prisma.user.updateManyAndReturn({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   * 
   * // Update zero or more Users and only return the `id`
   * const userWithIdOnly = await prisma.user.updateManyAndReturn({
   *   select: { id: true },
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * 
   */
  updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  /**
   * Create or update one User.
   * @param {UserUpsertArgs} args - Arguments to update or create a User.
   * @example
   * // Update or create a User
   * const user = await prisma.user.upsert({
   *   create: {
   *     // ... data to create a User
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the User we want to update
   *   }
   * })
   */
  upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  /**
   * Count the number of Users.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {UserCountArgs} args - Arguments to filter Users to count.
   * @example
   * // Count the number of Users
   * const count = await prisma.user.count({
   *   where: {
   *     // ... the filter for the Users we want to count
   *   }
   * })
  **/
  count<T extends UserCountArgs>(
    args?: Prisma.Subset<T, UserCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType>
      : number
  >

  /**
   * Allows you to perform aggregations operations on a User.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
   * @example
   * // Ordered by age ascending
   * // Where email contains prisma.io
   * // Limited to the 10 users
   * const aggregations = await prisma.user.aggregate({
   *   _avg: {
   *     age: true,
   *   },
   *   where: {
   *     email: {
   *       contains: "prisma.io",
   *     },
   *   },
   *   orderBy: {
   *     age: "asc",
   *   },
   *   take: 10,
   * })
  **/
  aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

  /**
   * Group by User.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {UserGroupByArgs} args - Group by arguments.
   * @example
   * // Group by city, order by createdAt, get count
   * const result = await prisma.user.groupBy({
   *   by: ['city', 'createdAt'],
   *   orderBy: {
   *     createdAt: true
   *   },
   *   _count: {
   *     _all: true
   *   },
   * })
   * 
  **/
  groupBy<
    T extends UserGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: UserGroupByArgs['orderBy'] }
      : { orderBy?: UserGroupByArgs['orderBy'] },
    OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
    ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
    ByValid extends Prisma.Has<ByFields, OrderFields>,
    HavingFields extends Prisma.GetHavingFields<T['having']>,
    HavingValid extends Prisma.Has<ByFields, HavingFields>,
    ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
    InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
    ? {
        [P in HavingFields]: P extends ByFields
          ? never
          : P extends string
          ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
          : [
              Error,
              'Field ',
              P,
              ` in "having" needs to be provided in "by"`,
            ]
      }[HavingFields]
    : 'take' extends Prisma.Keys<T>
    ? 'orderBy' extends Prisma.Keys<T>
      ? ByValid extends Prisma.True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
          }[OrderFields]
      : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<T>
    ? 'orderBy' extends Prisma.Keys<T>
      ? ByValid extends Prisma.True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
          }[OrderFields]
      : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
          ? never
          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
      }[OrderFields]
  >(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
/**
 * Fields of the User model
 */
readonly fields: UserFieldRefs;
}

/**
 * The delegate class that acts as a "Promise-like" for User.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  refreshTokens<T extends Prisma.User$refreshTokensArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}




/**
 * Fields of the User model
 */
export interface UserFieldRefs {
  readonly id: Prisma.FieldRef<"User", 'String'>
  readonly email: Prisma.FieldRef<"User", 'String'>
  readonly passwordHash: Prisma.FieldRef<"User", 'String'>
  readonly role: Prisma.FieldRef<"User", 'String'>
  readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>
  readonly lastLoginAt: Prisma.FieldRef<"User", 'DateTime'>
}
    

// Custom InputTypes
/**
 * User findUnique
 */
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the User
   */
  select?: Prisma.UserSelect<ExtArgs> | null
  /**
   * Omit specific fields from the User
   */
  omit?: Prisma.UserOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.UserInclude<ExtArgs> | null
  /**
   * Filter, which User to fetch.
   */
  where: Prisma.UserWhereUniqueInput
}

/**
 * User findUniqueOrThrow
 */
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the User
   */
  select?: Prisma.UserSelect<ExtArgs> | null
  /**
   * Omit specific fields from the User
   */
  omit?: Prisma.UserOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.UserInclude<ExtArgs> | null
  /**
   * Filter, which User to fetch.
   */
  where: Prisma.UserWhereUniqueInput
}

/**
 * User findFirst
 */
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the User
   */
  select?: Prisma.UserSelect<ExtArgs> | null
  /**
   * Omit specific fields from the User
   */
  omit?: Prisma.UserOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.UserInclude<ExtArgs> | null
  /**
   * Filter, which User to fetch.
   */
  where?: Prisma.UserWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of Users to fetch.
   */
  orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the position for searching for Users.
   */
  cursor?: Prisma.UserWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` Users from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` Users.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
   * 
   * Filter by unique combinations of Users.
   */
  distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[]
}

/**
 * User findFirstOrThrow
 */
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the User
   */
  select?: Prisma.UserSelect<ExtArgs> | null
  /**
   * Omit specific fields from the User
   */
  omit?: Prisma.UserOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.UserInclude<ExtArgs> | null
  /**
   * Filter, which User to fetch.
   */
  where?: Prisma.UserWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of Users to fetch.
   */
  orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the position for searching for Users.
   */
  cursor?: Prisma.UserWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` Users from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` Users.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
   * 
   * Filter by unique combinations of Users.
   */
  distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[]
}

/**
 * User findMany
 */
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the User
   */
  select?: Prisma.UserSelect<ExtArgs> | null
  /**
   * Omit specific fields from the User
   */
  omit?: Prisma.UserOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.UserInclude<ExtArgs> | null
  /**
   * Filter, which Users to fetch.
   */
  where?: Prisma.UserWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of Users to fetch.
   */
  orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the position for listing Users.
   */
  cursor?: Prisma.UserWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` Users from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` Users.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
   * 
   * Filter by unique combinations of Users.
   */
  distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[]
}

/**
 * User create
 */
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the User
   */
  select?: Prisma.UserSelect<ExtArgs> | null
  /**
   * Omit specific fields from the User
   */
  omit?: Prisma.UserOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.UserInclude<ExtArgs> | null
  /**
   * The data needed to create a User.
   */
  data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>
}

/**
 * User createMany
 */
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * The data used to create many Users.
   */
  data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[]
  skipDuplicates?: boolean
}

/**
 * User createManyAndReturn
 */
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the User
   */
  select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null
  /**
   * Omit specific fields from the User
   */
  omit?: Prisma.UserOmit<ExtArgs> | null
  /**
   * The data used to create many Users.
   */
  data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[]
  skipDuplicates?: boolean
}

/**
 * User update
 */
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the User
   */
  select?: Prisma.UserSelect<ExtArgs> | null
  /**
   * Omit specific fields from the User
   */
  omit?: Prisma.UserOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.UserInclude<ExtArgs> | null
  /**
   * The data needed to update a User.
   */
  data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>
  /**
   * Choose, which User to update.
   */
  where: Prisma.UserWhereUniqueInput
}

/**
 * User updateMany
 */
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * The data used to update Users.
   */
  data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>
  /**
   * Filter which Users to update
   */
  where?: Prisma.UserWhereInput
  /**
   * Limit how many Users to update.
   */
  limit?: number
}

/**
 * User updateManyAndReturn
 */
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the User
   */
  select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null
  /**
   * Omit specific fields from the User
   */
  omit?: Prisma.UserOmit<ExtArgs> | null
  /**
   * The data used to update Users.
   */
  data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>
  /**
   * Filter which Users to update
   */
  where?: Prisma.UserWhereInput
  /**
   * Limit how many Users to update.
   */
  limit?: number
}

/**
 * User upsert
 */
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the User
   */
  select?: Prisma.UserSelect<ExtArgs> | null
  /**
   * Omit specific fields from the User
   */
  omit?: Prisma.UserOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.UserInclude<ExtArgs> | null
  /**
   * The filter to search for the User to update in case it exists.
   */
  where: Prisma.UserWhereUniqueInput
  /**
   * In case the User found by the `where` argument doesn't exist, create a new User with this data.
   */
  create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>
  /**
   * In case the User was found with the provided `where` argument, update it with this data.
   */
  update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>
}

/**
 * User delete
 */
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the User
   */
  select?: Prisma.UserSelect<ExtArgs> | null
  /**
   * Omit specific fields from the User
   */
  omit?: Prisma.UserOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.UserInclude<ExtArgs> | null
  /**
   * Filter which User to delete.
   */
  where: Prisma.UserWhereUniqueInput
}

/**
 * User deleteMany
 */
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Filter which Users to delete
   */
  where?: Prisma.UserWhereInput
  /**
   * Limit how many Users to delete.
   */
  limit?: number
}

/**
 * User.refreshTokens
 */
export type User$refreshTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the RefreshToken
   */
  select?: Prisma.RefreshTokenSelect<ExtArgs> | null
  /**
   * Omit specific fields from the RefreshToken
   */
  omit?: Prisma.RefreshTokenOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.RefreshTokenInclude<ExtArgs> | null
  where?: Prisma.RefreshTokenWhereInput
  orderBy?: Prisma.RefreshTokenOrderByWithRelationInput | Prisma.RefreshTokenOrderByWithRelationInput[]
  cursor?: Prisma.RefreshTokenWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.RefreshTokenScalarFieldEnum | Prisma.RefreshTokenScalarFieldEnum[]
}

/**
 * User without action
 */
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the User
   */
  select?: Prisma.UserSelect<ExtArgs> | null
  /**
   * Omit specific fields from the User
   */
  omit?: Prisma.UserOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.UserInclude<ExtArgs> | null
}
```

====================================================================================================
# FILE 20

## Relative Path
`prisma/seed.ts`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/backend/prisma/seed.ts`

## Source Code

```ts
// prisma/seed.ts
import { prisma } from '../src/lib/prisma.js';

async function main() {
  console.log('🌱 Seeding...');

  const user = await prisma.user.create({
    data: {
      email: 'test@example.com',
      name: 'Test User',
    },
  });

  console.log('✅ Created user:', user);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

====================================================================================================
# FILE 21

## Relative Path
`prisma/migrations/migration_lock.toml`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/backend/prisma/migrations/migration_lock.toml`

## Source Code

```toml
# Please do not edit this file manually
# It should be added in your version-control system (e.g., Git)
provider = "postgresql"
```

====================================================================================================
# FILE 22

## Relative Path
`prisma/migrations/20260627132829_init/migration.sql`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/backend/prisma/migrations/20260627132829_init/migration.sql`

## Source Code

```sql
-- CreateTable
CREATE TABLE "ingest_jobs" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "triggered_by" TEXT NOT NULL,
    "triggered_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "started_at" TIMESTAMP(3),
    "finished_at" TIMESTAMP(3),
    "articles_fetched" INTEGER,
    "clusters_generated" INTEGER,
    "error_message" TEXT,

    CONSTRAINT "ingest_jobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clusters" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "top_terms" JSONB NOT NULL DEFAULT '[]',
    "article_count" INTEGER NOT NULL DEFAULT 0,
    "earliest_article_at" TIMESTAMP(3),
    "latest_article_at" TIMESTAMP(3),
    "ingest_job_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "clusters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "articles" (
    "id" TEXT NOT NULL,
    "cluster_id" TEXT,
    "url" TEXT NOT NULL,
    "url_hash" TEXT NOT NULL,
    "headline" TEXT NOT NULL,
    "summary" TEXT,
    "body_text" TEXT,
    "source_name" TEXT NOT NULL,
    "source_url" TEXT NOT NULL,
    "published_at" TIMESTAMP(3) NOT NULL,
    "fetched_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "articles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'viewer',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_login_at" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "refresh_tokens" (
    "id" TEXT NOT NULL,
    "token_hash" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "family" TEXT NOT NULL,
    "is_used" BOOLEAN NOT NULL DEFAULT false,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "revoked_at" TIMESTAMP(3),

    CONSTRAINT "refresh_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ingest_jobs_status_idx" ON "ingest_jobs"("status");

-- CreateIndex
CREATE INDEX "clusters_label_idx" ON "clusters"("label");

-- CreateIndex
CREATE INDEX "clusters_latest_article_at_idx" ON "clusters"("latest_article_at" DESC);

-- CreateIndex
CREATE INDEX "clusters_earliest_article_at_idx" ON "clusters"("earliest_article_at");

-- CreateIndex
CREATE INDEX "clusters_ingest_job_id_idx" ON "clusters"("ingest_job_id");

-- CreateIndex
CREATE UNIQUE INDEX "articles_url_key" ON "articles"("url");

-- CreateIndex
CREATE UNIQUE INDEX "articles_url_hash_key" ON "articles"("url_hash");

-- CreateIndex
CREATE INDEX "articles_cluster_id_idx" ON "articles"("cluster_id");

-- CreateIndex
CREATE INDEX "articles_published_at_idx" ON "articles"("published_at" DESC);

-- CreateIndex
CREATE INDEX "articles_source_name_idx" ON "articles"("source_name");

-- CreateIndex
CREATE INDEX "articles_fetched_at_idx" ON "articles"("fetched_at" DESC);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "refresh_tokens_token_hash_key" ON "refresh_tokens"("token_hash");

-- CreateIndex
CREATE INDEX "refresh_tokens_user_id_idx" ON "refresh_tokens"("user_id");

-- CreateIndex
CREATE INDEX "refresh_tokens_family_idx" ON "refresh_tokens"("family");

-- CreateIndex
CREATE INDEX "refresh_tokens_expires_at_idx" ON "refresh_tokens"("expires_at");

-- AddForeignKey
ALTER TABLE "clusters" ADD CONSTRAINT "clusters_ingest_job_id_fkey" FOREIGN KEY ("ingest_job_id") REFERENCES "ingest_jobs"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "articles" ADD CONSTRAINT "articles_cluster_id_fkey" FOREIGN KEY ("cluster_id") REFERENCES "clusters"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refresh_tokens" ADD CONSTRAINT "refresh_tokens_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
```

====================================================================================================
# FILE 23

## Relative Path
`src/server.ts`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/backend/src/server.ts`

## Source Code

```ts
import Fastify from 'fastify'
import { registerPlugins } from './plugins/index.js'
import { registerErrorHandler } from './utils/error-handler.js'
import { healthRoutes } from './routes/health.js'
import { clustersRoutes } from './routes/clusters.js'
import { timelineRoutes } from './routes/timeline.js'
import { ingestRoutes } from './routes/ingest.js'
import { startJobWorker } from './workers/job-worker.js'
import { env } from './lib/env.js'
import 'dotenv/config'

const app = Fastify({
  logger: {
    level: env.LOG_LEVEL,
    transport: env.NODE_ENV !== 'production'
      ? { target: 'pino-pretty' }
      : undefined,
  },
  requestIdHeader: 'x-request-id',
  genReqId: (req) => (req.headers['x-request-id'] as string) || crypto.randomUUID(),
})

// Register plugins
await registerPlugins(app)

// Register error handler
registerErrorHandler(app)

// Register routes
await app.register(healthRoutes)
await app.register(clustersRoutes)
await app.register(timelineRoutes)
await app.register(ingestRoutes)

// Start the server
try {
  await app.listen({ port: env.PORT, host: env.HOST })
  app.log.info(`Server listening on ${env.HOST}:${env.PORT}`)

  // Start the job worker after the server is up
  await startJobWorker(5000)
  app.log.info('Job worker started')
} catch (err) {
  app.log.error(err)
  process.exit(1)
}
```

====================================================================================================
# FILE 24

## Relative Path
`src/lib/env.ts`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/backend/src/lib/env.ts`

## Source Code

```ts
import 'dotenv/config'
import path from 'path'

export const env = {
  PORT: Number(process.env.PORT) || 3001,
  HOST: process.env.HOST || '0.0.0.0',
  NODE_ENV: process.env.NODE_ENV || 'development',
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  DATABASE_URL: process.env.DATABASE_URL as string,

  // JWT (optional)
  JWT_SECRET: process.env.JWT_SECRET || 'change-me-in-production',
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || 'change-me-in-production',

  // Frontend URL for CORS
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:3000',

  // Scraper path – absolute path to the Python main script
  SCRAPER_PATH: process.env.SCRAPER_PATH
    ? path.resolve(process.env.SCRAPER_PATH)
    : path.resolve(process.cwd(), '..', 'scraper', 'main.py'),

  // Scraper timeout (ms) – if exceeded, job fails
  SCRAPER_TIMEOUT_MS: Number(process.env.SCRAPER_TIMEOUT_MS) || 120_000,
}
```

====================================================================================================
# FILE 25

## Relative Path
`src/lib/prisma.ts`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/backend/src/lib/prisma.ts`

## Source Code

```ts
// src/lib/prisma.ts
import { PrismaClient } from '../../generated/prisma/client.js';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import 'dotenv/config';

const connectionString = process.env.DATABASE_URL!;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

export const prisma = new PrismaClient({ adapter });
```

====================================================================================================
# FILE 26

## Relative Path
`src/plugins/index.ts`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/backend/src/plugins/index.ts`

## Source Code

```ts
import { FastifyInstance } from 'fastify'
import fastifyCors from '@fastify/cors'
import fastifyHelmet from '@fastify/helmet'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import fastifyJwt from '@fastify/jwt'
import fastifyCookie from '@fastify/cookie'
import fastifyRateLimit from '@fastify/rate-limit'

export async function registerPlugins(app: FastifyInstance) {
  // CORS – allow frontend origins
  await app.register(fastifyCors, {
    origin: [
      'http://localhost:3000',
      'http://192.168.83.219:3000',
      process.env.FRONTEND_URL,
    ].filter(Boolean) as string[],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  })

  // Helmet – security headers
  await app.register(fastifyHelmet)

  // Rate limiting
  await app.register(fastifyRateLimit, {
    max: 100,
    timeWindow: '1 minute',
    global: true,
  })

  // JWT – optional, used only if auth is enabled
  await app.register(fastifyJwt, {
    secret: process.env.JWT_SECRET || 'change-me-in-production',
    cookie: {
      cookieName: 'refreshToken',
      signed: false,
    },
  })

  // Cookie parser – for refresh token
  await app.register(fastifyCookie)

  // Swagger – serves OpenAPI docs at /docs
  await app.register(fastifySwagger, {
    openapi: {
      info: {
        title: 'News Pulse API',
        description: 'REST API for topic-clustered news timeline',
        version: '1.0.0',
      },
      servers: [
        {
          url: process.env.NODE_ENV === 'production'
            ? 'https://news-pulse-backend.onrender.com'
            : 'http://localhost:3001',
        },
      ],
    },
    stripBasePath: true,
  })

  await app.register(fastifySwaggerUi, {
    routePrefix: '/docs',
  })
}
```

====================================================================================================
# FILE 27

## Relative Path
`src/routes/clusters.ts`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/backend/src/routes/clusters.ts`

## Source Code

```ts
import { FastifyInstance } from 'fastify'
import { listClusters, getClusterById } from '../services/cluster.service.js'

const clusterListSchema = {
  querystring: {
    type: 'object',
    properties: {
      page: { type: 'integer', minimum: 1, default: 1 },
      limit: { type: 'integer', minimum: 1, maximum: 100, default: 20 },
      source: {
        type: 'array',
        items: { type: 'string' },
        default: [],
      },
      from: { type: 'string', format: 'date-time' },
      to: { type: 'string', format: 'date-time' },
    },
  },
}

const clusterDetailSchema = {
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'string', format: 'uuid' },
    },
  },
  querystring: {
    type: 'object',
    properties: {
      source: {
        type: 'array',
        items: { type: 'string' },
        default: [],
      },
    },
  },
}

export async function clustersRoutes(app: FastifyInstance) {
  // GET /clusters
  app.get('/clusters', { schema: clusterListSchema }, async (request, reply) => {
    const { page, limit, source, from, to } = request.query as any

    const result = await listClusters({
      page: page || 1,
      limit: limit || 20,
      sources: source && source.length > 0 ? source : undefined,
      from,
      to,
    })

    reply.send(result)
  })

  // GET /clusters/:id
  app.get('/clusters/:id', { schema: clusterDetailSchema }, async (request, reply) => {
    const { id } = request.params as { id: string }
    const { source } = request.query as { source?: string[] }

    const cluster = await getClusterById(id, source && source.length > 0 ? source : undefined)

    if (!cluster) {
      reply.status(404).send({
        error: {
          code: 'CLUSTER_NOT_FOUND',
          message: `No cluster found with id ${id}`,
          statusCode: 404,
          requestId: request.id,
        },
      })
      return
    }

    reply.send(cluster)
  })
}
```

====================================================================================================
# FILE 28

## Relative Path
`src/routes/health.ts`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/backend/src/routes/health.ts`

## Source Code

```ts
import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma.js'

export async function healthRoutes(app: FastifyInstance) {
  // GET /health – liveness
  app.get('/health', async (_request, reply) => {
    reply.send({
      status: 'ok',
      timestamp: new Date().toISOString(),
      version: '1.0.0',
    })
  })

  // GET /health/ready – readiness (checks database)
  app.get('/health/ready', async (_request, reply) => {
    try {
      // Attempt a simple database query
      await prisma.$queryRaw`SELECT 1`
      reply.send({
        status: 'ready',
        checks: {
          database: 'ok',
          timestamp: new Date().toISOString(),
        },
      })
    } catch (error) {
      reply.status(503).send({
        status: 'not_ready',
        checks: {
          database: `error: ${(error as Error).message}`,
        },
      })
    }
  })
}
```

====================================================================================================
# FILE 29

## Relative Path
`src/routes/ingest.ts`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/backend/src/routes/ingest.ts`

## Source Code

```ts
import { FastifyInstance } from 'fastify'
import { createIngestJob, getJobStatus } from '../services/job.service.js'
import { startJobWorker } from '../workers/job-worker.js'

const triggerSchema = {
  // No body, optional query params? None.
}

const statusSchema = {
  params: {
    type: 'object',
    required: ['jobId'],
    properties: {
      jobId: { type: 'string', format: 'uuid' },
    },
  },
}

export async function ingestRoutes(app: FastifyInstance) {
  // POST /ingest/trigger
  app.post('/ingest/trigger', { schema: triggerSchema }, async (request, reply) => {
    try {
      const job = await createIngestJob('api')
      reply.status(202).send({
        jobId: job.id,
        status: job.status,
        message: 'Ingest job created. Poll /ingest/status/:jobId for updates.',
        triggeredAt: job.triggeredAt.toISOString(),
      })
    } catch (error: any) {
      if (error.message === 'JOB_ALREADY_RUNNING') {
        reply.status(409).send({
          error: {
            code: 'JOB_ALREADY_RUNNING',
            message: 'An ingest job is already in progress. Wait for it to complete.',
            statusCode: 409,
            requestId: request.id,
          },
        })
      } else {
        throw error
      }
    }
  })

  // GET /ingest/status/:jobId
  app.get('/ingest/status/:jobId', { schema: statusSchema }, async (request, reply) => {
    const { jobId } = request.params as { jobId: string }
    const status = await getJobStatus(jobId)

    if (!status) {
      reply.status(404).send({
        error: {
          code: 'JOB_NOT_FOUND',
          message: `No job found with id ${jobId}`,
          statusCode: 404,
          requestId: request.id,
        },
      })
      return
    }

    reply.send(status)
  })
}

// We'll start the worker in server.ts
```

====================================================================================================
# FILE 30

## Relative Path
`src/routes/timeline.ts`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/backend/src/routes/timeline.ts`

## Source Code

```ts
import { FastifyInstance } from 'fastify'
import { getTimelineData } from '../services/timeline.service.js'

const timelineSchema = {
  querystring: {
    type: 'object',
    properties: {
      from: { type: 'string', format: 'date-time' },
      to: { type: 'string', format: 'date-time' },
      source: {
        type: 'array',
        items: { type: 'string' },
        default: [],
      },
      minArticles: { type: 'integer', minimum: 1, default: 1 },
    },
  },
}

export async function timelineRoutes(app: FastifyInstance) {
  app.get('/timeline', { schema: timelineSchema }, async (request, reply) => {
    const { from, to, source, minArticles } = request.query as any

    const data = await getTimelineData({
      from,
      to,
      sources: source && source.length > 0 ? source : undefined,
      minArticles: minArticles || 1,
    })

    reply.send(data)
  })
}
```

====================================================================================================
# FILE 31

## Relative Path
`src/services/cluster.service.ts`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/backend/src/services/cluster.service.ts`

## Source Code

```ts
import { prisma } from '../lib/prisma.js'
import type { Prisma } from '../../generated/prisma/client.js'

interface ListClustersParams {
  page?: number
  limit?: number
  sources?: string[]
  from?: string
  to?: string
}

export async function listClusters(params: ListClustersParams) {
  const { page = 1, limit = 20, sources, from, to } = params
  const skip = (page - 1) * limit
  const take = Math.min(limit, 100)

  const where: Prisma.ClusterWhereInput = {}

  if (sources && sources.length > 0) {
    where.articles = {
      some: {
        sourceName: { in: sources },
      },
    }
  }

  if (from) {
    where.latestArticleAt = { gte: new Date(from) }
  }
  if (to) {
    where.earliestArticleAt = { lte: new Date(to) }
  }

  const clusters = await prisma.cluster.findMany({
    where,
    include: {
      articles: {
        select: { sourceName: true },
      },
    },
    orderBy: {
      latestArticleAt: 'desc',
    },
    skip,
    take,
  })

  const data = clusters.map((cluster) => {
    const sourcesSet = new Set(cluster.articles.map((a) => a.sourceName))
    const { articles, ...rest } = cluster
    return {
      ...rest,
      sources: Array.from(sourcesSet),
      topTerms: cluster.topTerms as string[],
    }
  })

  const total = await prisma.cluster.count({ where })

  return {
    data,
    meta: {
      page,
      limit: take,
      total,
      totalPages: Math.ceil(total / take),
    },
  }
}

export async function getClusterById(id: string, sources?: string[]) {
  const cluster = await prisma.cluster.findUnique({
    where: { id },
    include: {
      articles: {
        where: sources && sources.length > 0
          ? { sourceName: { in: sources } }
          : undefined,
        orderBy: { publishedAt: 'asc' },
      },
    },
  })

  if (!cluster) return null

  const { articles, ...rest } = cluster
  return {
    ...rest,
    topTerms: cluster.topTerms as string[],
    articles: cluster.articles.map((article) => ({
      ...article,
    })),
  }
}
```

====================================================================================================
# FILE 32

## Relative Path
`src/services/job.service.ts`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/backend/src/services/job.service.ts`

## Source Code

```ts
import { prisma } from '../lib/prisma.js'
import { spawn } from 'child_process'
import { env } from '../lib/env.js'
import fs from 'fs'

export async function createIngestJob(triggeredBy: 'api' | 'scheduler') {
  const existingJob = await prisma.ingestJob.findFirst({
    where: { status: { in: ['pending', 'running'] } },
  })

  if (existingJob) {
    throw new Error('JOB_ALREADY_RUNNING')
  }

  const job = await prisma.ingestJob.create({
    data: {
      status: 'pending',
      triggeredBy,
      triggeredAt: new Date(),
    },
  })

  return job
}

export async function getJobStatus(jobId: string) {
  const job = await prisma.ingestJob.findUnique({
    where: { id: jobId },
  })

  if (!job) return null

  return {
    jobId: job.id,
    status: job.status,
    triggeredBy: job.triggeredBy,
    triggeredAt: job.triggeredAt.toISOString(),
    startedAt: job.startedAt?.toISOString() || null,
    finishedAt: job.finishedAt?.toISOString() || null,
    articlesFetched: job.articlesFetched ?? null,
    clustersGenerated: job.clustersGenerated ?? null,
    errorMessage: job.errorMessage ?? null,
  }
}

export async function updateJobStatus(
  jobId: string,
  data: {
    status?: 'pending' | 'running' | 'completed' | 'failed'
    startedAt?: Date
    finishedAt?: Date
    articlesFetched?: number
    clustersGenerated?: number
    errorMessage?: string
  }
) {
  return prisma.ingestJob.update({
    where: { id: jobId },
    data,
  })
}

const STALE_JOB_TIMEOUT_MS = 5 * 60 * 1000

export async function cleanupStaleJobs() {
  const staleJobs = await prisma.ingestJob.findMany({
    where: {
      status: 'running',
      startedAt: {
        lt: new Date(Date.now() - STALE_JOB_TIMEOUT_MS),
      },
    },
  })

  for (const job of staleJobs) {
    await updateJobStatus(job.id, {
      status: 'failed',
      finishedAt: new Date(),
      errorMessage: 'Job marked as failed due to timeout (stale)',
    })
    console.log(`Cleaned up stale job: ${job.id}`)
  }
}

export async function runPendingJob() {
  await cleanupStaleJobs()

  const pendingJob = await prisma.ingestJob.findFirst({
    where: { status: 'pending' },
    orderBy: { triggeredAt: 'asc' },
  })

  if (!pendingJob) return null

  // Mark as running
  await updateJobStatus(pendingJob.id, {
    status: 'running',
    startedAt: new Date(),
  })

  const pythonPath = env.SCRAPER_PATH
  const pythonCmd = process.env.PYTHON_CMD || 'python3'

  // Check if scraper file exists
  try {
    await fs.promises.access(pythonPath)
  } catch {
    await updateJobStatus(pendingJob.id, {
      status: 'failed',
      finishedAt: new Date(),
      errorMessage: `Scraper file not found at: ${pythonPath}`,
    })
    return null
  }

  // Spawn the Python process without shell to avoid path splitting
  const child = spawn(pythonCmd, [pythonPath], {
    env: { ...process.env, NODE_ENV: env.NODE_ENV },
    // No shell: true – arguments are passed as an array, spaces are fine
  })

  let stderr = ''

  child.stderr.on('data', (data) => { stderr += data.toString() })

  const timeoutId = setTimeout(() => {
    child.kill('SIGTERM')
    void updateJobStatus(pendingJob.id, {
      status: 'failed',
      finishedAt: new Date(),
      errorMessage: `Scraper timed out after ${env.SCRAPER_TIMEOUT_MS}ms`,
    })
  }, env.SCRAPER_TIMEOUT_MS)

  return new Promise((resolve) => {
    child.on('close', async (code) => {
      clearTimeout(timeoutId)
      const finishedAt = new Date()

      if (code === 0) {
        const newArticles = await prisma.article.count({
          where: { fetchedAt: { gte: pendingJob.triggeredAt } },
        })
        const newClusters = await prisma.cluster.count({
          where: { createdAt: { gte: pendingJob.triggeredAt } },
        })

        await updateJobStatus(pendingJob.id, {
          status: 'completed',
          finishedAt,
          articlesFetched: newArticles,
          clustersGenerated: newClusters,
        })
      } else {
        await updateJobStatus(pendingJob.id, {
          status: 'failed',
          finishedAt,
          errorMessage: stderr.trim() || `Scraper process exited with code ${code}`,
        })
      }
      resolve(null)
    })

    child.on('error', async (err) => {
      clearTimeout(timeoutId)
      await updateJobStatus(pendingJob.id, {
        status: 'failed',
        finishedAt: new Date(),
        errorMessage: `Failed to spawn scraper: ${err.message}`,
      })
      resolve(null)
    })
  })
}
```

====================================================================================================
# FILE 33

## Relative Path
`src/services/timeline.service.ts`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/backend/src/services/timeline.service.ts`

## Source Code

```ts
import { prisma } from '../lib/prisma.js'
import type { Prisma } from '../../generated/prisma/client.js'

interface TimelineParams {
  from?: string
  to?: string
  sources?: string[]
  minArticles?: number
}

export async function getTimelineData(params: TimelineParams) {
  const { from, to, sources, minArticles = 1 } = params

  const where: Prisma.ClusterWhereInput = {}

  if (from) {
    where.latestArticleAt = { gte: new Date(from) }
  }
  if (to) {
    where.earliestArticleAt = { lte: new Date(to) }
  }

  if (sources && sources.length > 0) {
    where.articles = {
      some: {
        sourceName: { in: sources },
      },
    }
  }

  if (minArticles > 1) {
    where.articleCount = { gte: minArticles }
  }

  const clusters = await prisma.cluster.findMany({
    where,
    include: {
      articles: {
        select: { sourceName: true, publishedAt: true },
      },
    },
    orderBy: {
      latestArticleAt: 'desc',
    },
  })

  const maxArticleCount = clusters.reduce((max, c) => Math.max(max, c.articleCount), 0)

  const transformed = clusters.map((cluster) => {
    const sourcesSet = new Set(cluster.articles.map((a) => a.sourceName))
    return {
      id: cluster.id,
      label: cluster.label,
      topTerms: cluster.topTerms as string[],
      start: cluster.earliestArticleAt?.toISOString() || '',
      end: cluster.latestArticleAt?.toISOString() || '',
      articleCount: cluster.articleCount,
      intensity: maxArticleCount > 0 ? cluster.articleCount / maxArticleCount : 0,
      sources: Array.from(sourcesSet),
    }
  })

  const allSources = new Set<string>()
  transformed.forEach((c) => c.sources.forEach((s) => allSources.add(s)))

  let timeFrom = from ? new Date(from) : null
  let timeTo = to ? new Date(to) : null

  if (clusters.length > 0) {
    const earliest = clusters.reduce((min, c) => c.earliestArticleAt && (!min || c.earliestArticleAt < min) ? c.earliestArticleAt : min, null as Date | null)
    const latest = clusters.reduce((max, c) => c.latestArticleAt && (!max || c.latestArticleAt > max) ? c.latestArticleAt : max, null as Date | null)
    if (earliest && !timeFrom) timeFrom = earliest
    if (latest && !timeTo) timeTo = latest
  }

  const lastIngest = await prisma.ingestJob.findFirst({
    orderBy: { triggeredAt: 'desc' },
    select: { triggeredAt: true },
  })

  return {
    timeRange: {
      from: timeFrom?.toISOString() || new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      to: timeTo?.toISOString() || new Date().toISOString(),
    },
    sources: Array.from(allSources),
    clusters: transformed,
    meta: {
      totalClusters: transformed.length,
      totalArticles: clusters.reduce((sum, c) => sum + c.articleCount, 0),
      lastIngestAt: lastIngest?.triggeredAt?.toISOString() || null,
    },
  }
}
```

====================================================================================================
# FILE 34

## Relative Path
`src/utils/error-handler.ts`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/backend/src/utils/error-handler.ts`

## Source Code

```ts
import { FastifyInstance } from 'fastify'

export function registerErrorHandler(app: FastifyInstance) {
  app.setErrorHandler((error, request, reply) => {
    const statusCode = error.statusCode || 500
    const code = error.code || 'INTERNAL_SERVER_ERROR'
    const message = error.message || 'An unexpected error occurred'

    // For validation errors, include details
    const details = error.validation ? error.validation.map((v: any) => ({
      field: v.instancePath || v.field,
      message: v.message || 'Invalid value',
    })) : undefined

    reply.status(statusCode).send({
      error: {
        code,
        message,
        statusCode,
        requestId: request.id,
        ...(details && { details }),
      },
    })
  })
}
```

====================================================================================================
# FILE 35

## Relative Path
`src/workers/job-worker.ts`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/backend/src/workers/job-worker.ts`

## Source Code

```ts
import { runPendingJob, cleanupStaleJobs } from '../services/job.service.js'

let isProcessing = false

export async function startJobWorker(intervalMs: number = 5000) {
  console.log('Job worker started (interval: %dms)', intervalMs)

  // Initial cleanup and run
  setTimeout(() => {
    runPendingJobIfIdle()
  }, 1000)

  // Periodic polling
  setInterval(() => {
    runPendingJobIfIdle()
  }, intervalMs)

  // Also run stale cleanup every minute
  setInterval(() => {
    cleanupStaleJobs().catch(console.error)
  }, 60 * 1000)
}

async function runPendingJobIfIdle() {
  if (isProcessing) return
  isProcessing = true
  try {
    await runPendingJob()
  } catch (error) {
    console.error('Job worker error:', error)
  } finally {
    isProcessing = false
  }
}
```

