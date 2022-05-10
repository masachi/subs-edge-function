import { NextFetchEvent, NextRequest } from "next/server";

export async function middleware(req, ev) {
    const nwebarleyBaseUrl = "https://newbarley.herokuapp.com"

    const kancolleBaseUrl = "https://kancolle-subscription.herokuapp.com"

    const { pathname, search, hash } = req.nextUrl;

    console.error("url", pathname, search, hash);

    if (pathname.startsWith("/api")) {

        if (pathname.startsWith("/api/status")) {
            const httpStatusCode = Number(pathname.split("/")[3]);

            return Number.isInteger(httpStatusCode)
                ? fetch("https://http.cat/" + httpStatusCode)
                : new Response("That's not a valid HTTP status code.");
        }


        if (pathname.startsWith("/api/kancolle/code")) {
        
            const code = pathname.split("/")[4];
            return fetch(`${kancolleBaseUrl}/${code}`);
        }

        if (pathname.startsWith("/api/newbarley/code")) {

            const code = pathname.split("/")[4];
            return fetch(`${nwebarleyBaseUrl}/${code}`);
        }
    }

    return fetch("https://www.baidu.com/");
}