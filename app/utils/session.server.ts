import { createCookieSessionStorage } from "@remix-run/node";
export const sessionStorage = createCookieSessionStorage({
    cookie: {
        name: "_session",
        sameSite: "lax",
        // path: "/",
        // httpOnly: true,
        secrets: [process.env.SECRET_KEY || "noSecretNeeded!!!"],
        // secure: process.env.NODE_ENV === "production",
        maxAge:60*60*10*24,

    }
});


export async function createUserSession(userId: string, request: Request) {
    const session = await sessionStorage.getSession(request.headers.get("Cookie"));
    session.set("userId", userId);
    return sessionStorage.commitSession(session); // returns the session cookie string
  }
  
  
export async function getUserSession(request: Request) {
    const session = await sessionStorage.getSession(request.headers.get("Cookie"));
    return session.get("userId");
}