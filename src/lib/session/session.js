import { auth } from "@lib/firebase/config";
import { onAuthStateChanged } from "firebase/auth";

export default function main() {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    });
  });
}
