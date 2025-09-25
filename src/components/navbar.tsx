import Link from "next/link";
import { createClient } from "../../supabase/server";
import { Button } from "./ui/button";
import UserProfile from "./user-profile";

export default async function Navbar() {
  const supabase = createClient();

  const {
    data: { user },
  } = await (await supabase).auth.getUser();

  return (
    <nav className="w-full bg-black py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo slika */}
        <Link href="/" prefetch>
          <span className="text-2xl font-bold text-white italic">
            Vazdabrt.me
          </span>
        </Link>

        {/* Linkovi */}
        <div className="hidden md:flex gap-6 items-center">
          <Link
            href="/"
            className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-[#3997A3]"
          >
            Naslovna
          </Link>
          <Link
            href="/jobs"
            className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-[#3997A3]"
          >
            Poslovi
          </Link>
          <Link
            href="/post-job"
            className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-[#3997A3]"
          >
            Dodaj oglas
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-[#3997A3]"
          >
            Kontakt
          </Link>
        </div>

        {/* Profil / Auth */}
        <div className="flex gap-4 items-center">
          {user ? (
            <>
              <UserProfile />
            </>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-[#3997A3]"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-[#3997A3]"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
