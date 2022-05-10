import { NextFetchEvent, NextRequest } from "next/server";

export async function middleware(req, ev) {
    const nwebarleyBaseUrl = "https://newbarley.herokuapp.com"

    const kancolleBaseUrl = "https://kancolle-subscription.herokuapp.com"

    const { pathname, search, hash } = req.nextUrl;
  
    console.error("url", pathname, search, hash);
  
    if (pathname.startsWith("/api")) {
      return new Response(JSON.stringify({ pathname }), {
        headers: { "Content-Type": "application/json" },
      });
    }
  
    if (pathname.startsWith("/status")) {
      const httpStatusCode = Number(pathname.split("/")[2]);
  
      return Number.isInteger(httpStatusCode)
        ? fetch("https://http.cat/" + httpStatusCode)
        : new Response("That's not a valid HTTP status code.");
    }
  
    if (pathname.startsWith("/code")) {
      const tenant = pathname.split("/")[2];

      const code = pathname.split("/")[3];

      if(tenant === 'kancolle') {
        return fetch(`${kancolleBaseUrl}/${code}`);
      }

      if(tenant === 'newbarley') {
        return fetch(`${nwebarleyBaseUrl}/${code}`);
      }
    }
  
    return fetch("https://www.baidu.com/");
}