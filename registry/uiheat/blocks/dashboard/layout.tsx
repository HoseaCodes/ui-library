import { cookies } from "next/headers";

import { DashboardExample } from "@/components/dashboard/dashboard-example";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  // shadcn's sidebar stores its expanded/collapsed state in this cookie.
  const defaultOpen = (await cookies()).get("sidebar_state")?.value !== "false";
  return <DashboardExample defaultOpen={defaultOpen}>{children}</DashboardExample>;
}
