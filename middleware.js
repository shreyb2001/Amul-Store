import { withAuth } from "next-auth/middleware";

export { default } from "next-auth/middleware";

// export default withAuth({
//   callbacks: {
//     authorized: ({ req, token }) => {
//       if (req.nextUrl.pathname === "/orders") {
//         return token?.role === "admin";
//       }

//       return Boolean(token);
//     },
//   },
// });

export const config = { matcher: ["/orders", "/profile", "/profile/:path*"] };
