This example shows how to add a Nexus and nexus-plugin-prisma. You can
try out the deployed version right now [here](https://with-nextjs.vercel.app)

### Instructions
1. Set the ENV variable with `vercel env add DATABASE_URL`
2. Override the `build` command in Vercel to `yarn nexus build && next build`
3. Deploy with `vercel --prod`