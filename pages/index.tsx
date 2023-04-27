import Head from "next/head"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <h1 className="title">
        Read <Link href="/posts/first-post">this page!</Link>
      </h1>
    </div>
  )
}