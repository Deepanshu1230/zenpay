## Environment variables

Create a local env file (not committed) and set:

- **DATABASE_URL**: Postgres connection string used by Prisma/pg.

Example:

```txt
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/zenpay?schema=public"
```

Then restart the dev server.


