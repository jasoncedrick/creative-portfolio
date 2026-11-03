import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const source = request.headers.get("referer");
  const referrer = source && URL.canParse(source) ? new URL(source) : null;
  const destination = request.headers.get("sec-fetch-dest");
  if (referrer?.origin === request.nextUrl.origin && (!destination || destination === "video")) {
    return NextResponse.next();
  }
  return new Response("Open this video from the portfolio case study.", {
    status: 403,
    headers: { "Cache-Control": "private, no-store" },
  });
}

export const config = {
  matcher: [
    "/work/workalessio-1.mp4",
    "/work/workalessio-2.mp4",
    "/work/workalessio-3.mp4",
    "/work/workgrit-2.mp4",
    "/work/workgrit-3.mp4",
    "/work/workgrit-1.mp4",
    "/work/worktempinked-1.MP4",
    "/work/worktempinked-2.mp4",
    "/work/worktempinked-3.mp4",
  ],
};
