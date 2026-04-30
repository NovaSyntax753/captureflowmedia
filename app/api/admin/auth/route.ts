import { NextRequest, NextResponse } from "next/server";

function normalizeSecret(value: string) {
  const trimmed = value.trim();
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1).trim();
  }
  return trimmed;
}

export async function POST(request: NextRequest) {
  const adminPasswordRaw = process.env.ADMIN_PASSWORD;

  if (!adminPasswordRaw) {
    return NextResponse.json({ error: "ADMIN_PASSWORD is not configured" }, { status: 500 });
  }

  const adminPassword = normalizeSecret(adminPasswordRaw);

  const body = (await request.json().catch(() => null)) as { password?: string } | null;
  const providedPassword = typeof body?.password === "string" ? normalizeSecret(body.password) : "";

  if (!providedPassword || providedPassword !== adminPassword) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  return NextResponse.json({ token: adminPassword });
}
