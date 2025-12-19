import Link from "next/link";

async function getUser() {
  return { displayName: "User" }; // mock user
}

export default async function MenuBar() {
  const user = await getUser();

  const authLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/profile", label: "Profile" },
    { href: "/settings", label: "Settings" },
    { href: "#", label: "Logout", id: "logout" },
  ];

  const guestLinks = [
    { href: "/login", label: "Login" },
    { href: "/register", label: "Register" },
  ];

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <div>Whisker Logo Here</div>

      {user ? (
        <div className="relative group">
          {/* A dropdown for logged in user */}
          <button className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">
            {user.displayName}
          </button>

          {/* Dropdown menu  */}
          <ul className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {authLinks.map((link) => (
              <li key={link.href}>
                <Link
                  id={link.id}
                  href={link.href}
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <ul className="flex space-x-4">
          {guestLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
