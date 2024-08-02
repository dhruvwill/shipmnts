import { NextRequest, NextResponse } from "next/server";
import prismadb from "@/prisma";
export async function GET(request: NextRequest, response: NextResponse) {
  const files = await prismadb.element.findMany();
  return Response.json({
    success: true,
    data: files,
  });
}
