import vm from "@whisker/vm";

export default async function MenuBar() {
    const session = vm.monitorAuthState();
    const user = await vm.getUserData(session.displayName);

    if (user) {
        return (
            <nav className="bg-gray-800 p-4 text-white">
                <ul className="flex space-x-4">
                    <li>Welcome, {user.displayName}</li>
                    <li><a href="/dashboard" className="hover:underline">Dashboard</a></li>
                    <li><a href="/profile" className="hover:underline">Profile</a></li>
                    <li><a id="logout" href="#" className="hover:underline">Logout</a></li>
                </ul>
            </nav>
        );
    } else {
        return (
            <nav className="bg-gray-800 p-4 text-white">
                <ul className="flex space-x-4">
                    <li><a href="/login" className="hover:underline">Login</a></li>
                    <li><a href="/register" className="hover:underline">Register</a></li>
                </ul>
            </nav>
        );
    }
}
