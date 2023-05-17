import type { AppRouter } from "@acme/api"
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client"

// const client = createTRPCProxyClient<AppRouter>({
//   links: [
//     httpBatchLink({
//       url: 'http://localhost:3000/trpc',
//     }),
//   ],
// });
