
import { prisma } from "@repo/db";

export default async function SignupPage() {
  // Avoid a hard 500 when DB isn't configured/running during local dev.
  if (!process.env.DATABASE_URL) {
    return (
      <div>
        <h2>Signup page</h2>
        <p>
          Missing <code>DATABASE_URL</code>. Add it to <code>apps/web/.env.local</code>{" "}
          and restart <code>npm run dev</code>.
        </p>
      </div>
    );
  }

  try {
    const users = await prisma.user.findMany();

    return (
      <div>
        <h2>Signup page</h2>
        <pre>{JSON.stringify(users, null, 2)}</pre>
      </div>
    );
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e);

    return (
      <div>
        <h2>Signup page</h2>
        <p>
          DB connection failed. Is Postgres running and does <code>DATABASE_URL</code> point to
          the right host/port?
        </p>
        <pre>{message}</pre>
      </div>
    );
  }
}
