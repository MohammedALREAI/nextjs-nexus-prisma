import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Next.js + GraphQL Nexus + nexus-plugin-prisma</title>
      </Head>
      <p>
        <a href="https://with-nextjs.vercel.app/api/graphql">GraphQL Playground</a>
      </p>
    </Layout>
  )
}
