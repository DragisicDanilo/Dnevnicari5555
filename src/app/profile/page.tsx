import { createClient } from "../../../supabase/server";
import { redirect } from "next/navigation";
import Navbar from "@/components/navbar";

export default async function ProfilePage() {
  const supabase = createClient();

  // Dobavi trenutno logovanog korisnika
  const {
    data: { user },
  } = await (await supabase).auth.getUser();

  if (!user) {
    // Ako nije prijavljen, vrati ga na login
    redirect("/sign-in");
  }

  return (
    <>
    <Navbar />
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Moj profil</h1>

      <div className="bg-white shadow rounded-lg p-6 space-y-4">
        <div>
          <p className="text-sm text-gray-500">Email</p>
          <p className="text-lg font-medium">{user.email}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">ID korisnika</p>
          <p className="text-lg font-mono">{user.id}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Datum kreiranja</p>
          <p className="text-lg">
            {new Date(user.created_at).toLocaleDateString("sr-RS")}
          </p>
        </div>
      </div>
    </div>
    </>
  );
}