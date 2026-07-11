import { NextResponse, NextRequest } from "next/server";
import { APP_ENVIRONMENT } from "./constant/environment";
import { parse } from "tldts";
import { APP_DOMAIN } from "./config/app_config";

export function proxy(request: NextRequest) {
  // Clone the nextUrl to safely manipulate the pathname
  const url = request.nextUrl.clone();

  // Use headers to get the true host, fallback to url.hostname
  const hostName = request.headers.get("host") || url.hostname;
  const pathName = url.pathname;

  const availableDomains = Object.values(APP_DOMAIN);

  // For development environment, skip subdomain logic
  if (process.env.NODE_ENV === APP_ENVIRONMENT.DEVELOPMENT) {
    if (pathName === "/") {
      url.pathname = `/${ APP_DOMAIN.PORTFOLIO }`;
      return NextResponse.rewrite(url);
    }
    return NextResponse.next();
  }

  const parsedHost = parse(hostName);
  const domainFound = availableDomains.find(
    (domain) => parsedHost.subdomain === domain,
  );

  // Rewrite to subdomain path, or default to portfolio if no subdomain is found
  if (domainFound) {
    url.pathname = `/${domainFound}${pathName}`;
    return NextResponse.rewrite(url);
  } else if (!parsedHost.subdomain) {
    url.pathname = `/${APP_DOMAIN.PORTFOLIO}${pathName}`;
    return NextResponse.rewrite(url);
  }

  // If the subdomain is not recognized, continue with the request without rewriting
  return NextResponse.next();
}

// Prevents the middleware from running on React JS bundles, CSS, and images.
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files and JS chunks)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - Any file with an extension (e.g., .svg, .png, .css)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|css|js)$).*)",
  ],
};
