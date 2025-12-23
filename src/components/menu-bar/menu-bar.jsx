import Link from "next/link";
import { cookies } from "next/headers";
import { admin } from "@lib/firebase-admin";

async function getUser() {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("authToken")?.value;
  if (!authToken) return null;
  try {
    const decodedToken = await admin.auth().verifyIdToken(authToken);
    const userRecord = await admin.auth().getUser(decodedToken.uid);
    return {
      uid: userRecord.uid,
      email: userRecord.email,
      displayName: userRecord.displayName,
      customClaims: decodedToken,
    };
  } catch (error) {
    console.error("Error verifying auth token:", error);
    return null;
  }
}

export default async function MenuBar() {
  const user = await getUser();

  const authLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/profile", label: "Profile" },
    { href: "/settings", label: "Settings" },
    { href: "/logout", label: "Logout", id: "logout" },
  ];

  const guestLinks = [
    { href: "/login", label: "Login" },
    { href: "/signup", label: "Sign Up" },
  ];

  return (
    <nav className="bg-black border-b border-neutral-800 px-6 py-4 text-neutral-400">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 text-sm font-light">
          <span className="text-amber-500 font-semibold text-lg">
            <Link href="/">Whisker</Link>
          </span>
        </div>

        {user ? (
          // Dropdown using <details> for SSR + mobile support
          <details className="relative">
            <summary className="cursor-pointer rounded px-4 py-2 text-md font-light text-neutral-300 hover:text-amber-500 transition">
              {user.displayName}
            </summary>
            <ul className="absolute right-0 mt-2 w-48 rounded border border-neutral-800 bg-black shadow-lg">
              {authLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    id={link.id}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-neutral-400 hover:bg-neutral-900 hover:text-amber-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        ) : (
          <ul className="flex gap-6 text-sm font-light">
            {guestLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-amber-500 transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
