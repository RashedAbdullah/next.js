import Link from "next/link";

export const metadata = {
  title: "About",
  description: "Generated by create next app",
};

export default function Layout({ children }) {
  return (
    <>
      <nav className="p-5">
        <ul>
          <li>
            <Link href="/about/me" className="text-blue-500 text-xl">
              Me
            </Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
}