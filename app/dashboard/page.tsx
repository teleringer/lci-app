export const runtime = "nodejs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { prisma } from "../../lib/prisma";

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const user = await currentUser();
  const email = user?.emailAddresses?.[0]?.emailAddress ?? null;

  const dbUser = await prisma.user.upsert({
    where: { clerkUserId: userId },
    update: { email },
    create: { clerkUserId: userId, email },
  });

  // For now, show a simple “has firm?” state
  const firmCount = await prisma.firm.count({
    where: { ownerId: dbUser.id },
  });

  return (
    <div style={{ padding: 24 }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>LCI Dashboard</h1>
        <UserButton />
      </div>

      <p>Clerk userId: {userId}</p>
      <p>DB userId: {dbUser.id}</p>
      <p>Email: {email ?? "—"}</p>

      <hr style={{ margin: "16px 0" }} />

      {firmCount === 0 ? (
        <p>No firm yet. Next step: create your firm onboarding.</p>
      ) : (
        <p>Firms in DB: {firmCount}</p>
      )}
    </div>
  );
}