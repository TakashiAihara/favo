import type { AppRouter } from "@acme/api"
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client"
import superjson from "superjson";

const client = createTRPCProxyClient<AppRouter>({
  transformer: superjson, // Required option due to inherited type
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/trpc',
    }),
  ],
});
