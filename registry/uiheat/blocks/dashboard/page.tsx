import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  { label: "Revenue", value: "$12,480", note: "+8% this month" },
  { label: "Active projects", value: "14", note: "3 due this week" },
  { label: "Unpaid invoices", value: "5", note: "$3,240 outstanding" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Overview</h1>
        <p className="text-sm text-muted-foreground">Placeholder page from @uiheat/dashboard. Replace with your own.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <Card key={s.label}>
            <CardHeader>
              <CardDescription>{s.label}</CardDescription>
              <CardTitle className="text-2xl tabular-nums">{s.value}</CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground">{s.note}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
