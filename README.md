## Prisma Commands

Use `db push` to push the initial schema to the database:

```
npx prisma db push
```

Generate typescript types

```
npx prisma generate
```

Run tests

```
<!-- All -->
yarn cy:run
<!-- Specific -->
yarn cy:run --spec "cypress/tests/api/avocados.spec
.ts"
```

Prisma Schema documents  
https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference
https://www.prisma.io/docs/concepts/components/prisma-schema/data-model
Custom Errors
https://www.prisma.io/docs/reference/api-reference/error-reference#error-codes
