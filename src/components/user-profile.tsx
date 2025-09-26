'use client'
import { UserCircle } from 'lucide-react'
import { Button } from './ui/button'
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { createClient } from '../../supabase/client'
import { useRouter } from 'next/navigation'

export default function UserProfile() {
    const supabase = createClient()
    const router = useRouter()

    return (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" size="icon">
        <UserCircle className="h-6 w-6 text-[#3997A3]" />
      </Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent align="end">
      {/* Moj profil link */}
      <DropdownMenuItem asChild>
        <Link href="/profile">Moj profil</Link>
      </DropdownMenuItem>

      {/* Odjavi se dugme */}
      <DropdownMenuItem
        onClick={async () => {
          await supabase.auth.signOut();
          router.refresh();
        }}
      >
        Odjavi se
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);
}