"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "../../supabase/client";
import { Button } from "./ui/button";
import UserProfile from "./user-profile";

export default function Navbar() {
  const supabase = createClient();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });
  }, [supabase]);


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
            href="/poslovi"
            className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-[#3997A3]"
          >
            Poslovi
          </Link>
          <Link
            href="/dodaj_oglas"
            className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-[#3997A3]"
          >
            Dodaj oglas
          </Link>
          <Link
            href="/kontakt"
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
                Prijava 
              </Link>
              <Link
                href="/sign-up"
                className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-[#3997A3]"
              >
                Registracija
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
