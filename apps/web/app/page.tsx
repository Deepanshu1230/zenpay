import { prisma } from "@repo/db";

export default async function Page() {
  // Try to fetch users. If this doesn't crash, your DB is connected!
  // const users = await prisma.user.findMany();

  return (
    <div>
      hello ji
      {/* <pre>{JSON.stringify(users, null, 2)}</pre> */}
    </div>
  );
}