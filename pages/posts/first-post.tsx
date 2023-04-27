import Link from "next/link";

export default function FirstPost() {
  return (
    <h1>
      First Post{" "}
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </h1>
  );
}
