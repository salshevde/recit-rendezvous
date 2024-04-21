import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\.[\w]+$)", "/api"],
  publicRoutes: ["/","/api/(.*)"],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};