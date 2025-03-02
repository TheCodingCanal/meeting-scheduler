import { NextRequest, NextResponse } from "next/server";

const homeRoute = ["/"]

export async function middleware(request: NextRequest) {
    const response = await middlewareAuth(request)
}

async function middlewareAuth(request: NextRequest) {
    const temp = null;
    if (homeRoute.includes(request.nextUrl.pathname)) {
        if (temp == null) {
            return NextResponse.redirect(new URL("/sign-in", request.url))
        }
    }
}


export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
}