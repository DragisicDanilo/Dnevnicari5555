"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

// tvoji podaci za kategorije/uža oblast (kopirano iz Hero)
const zanati: Record<string, string[]> = {
  "Građevinski radovi": ["Moler", "Zidar", "Tesar", "Pomoćni radnik"],
  Elektrika: ["Električar", "Serviser računara", "Monter klima uređaja"],
  Održavanje: ["Spremačica", "Baštovan", "Haus majstor / Domar"],
  Ostalo: ["Vozač", "Fizički radnik", "Transport selidbi"],
};

// države i gradovi
const drzave: Record<string, string[]> = {
  "Crna Gora": [
    "Podgorica",
    "Nikšić",
    "Herceg Novi",
    "Bar",
    "Bijelo Polje",
    "Berane",
    "Cetinje",
    "Kotor",
    "Ulcinj",
    "Pljevlja",
    "Danilovgrad",
  ],
  Srbija: ["Beograd", "Novi Sad", "Niš"],
  Hrvatska: ["Zagreb", "Split", "Rijeka"],
  BiH: ["Sarajevo", "Banja Luka", "Mostar"],
  Makedonija: ["Skoplje", "Bitolj", "Ohrid"],
  Slovenija: ["Ljubljana", "Maribor", "Celje"],
};

export default function PostJobPage() {
  const [kategorija, setKategorija] = useState("Građevinski radovi");
  const [djelatnost, setDjelatnost] = useState(zanati["Građevinski radovi"][0]);
  const [drzava, setDrzava] = useState("Crna Gora");
  const [grad, setGrad] = useState(drzave["Crna Gora"][0]);
  const [telefon, setTelefon] = useState("+382"); // default za CG

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8 mt-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Dodaj novi oglas
        </h1>

        <form className="space-y-6">
          {/* Kategorija i uža oblast */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Kategorija *</Label>
              <Select
                value={kategorija}
                onValueChange={(val) => {
                  setKategorija(val);
                  setDjelatnost(zanati[val][0]);
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Odaberi kategoriju" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(zanati).map((k) => (
                    <SelectItem key={k} value={k}>
                      {k}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Uža oblast *</Label>
              <Select value={djelatnost} onValueChange={setDjelatnost}>
                <SelectTrigger>
                  <SelectValue placeholder="Odaberi užu oblast" />
                </SelectTrigger>
                <SelectContent>
                  {zanati[kategorija].map((d) => (
                    <SelectItem key={d} value={d}>
                      {d}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Država i grad */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Država *</Label>
              <Select
                value={drzava}
                onValueChange={(val) => {
                  setDrzava(val);
                  setGrad(drzave[val][0]);
                  if (val === "Crna Gora") setTelefon("+382");
                  else if (val === "Srbija") setTelefon("+381");
                  else if (val === "Hrvatska") setTelefon("+385");
                  else if (val === "BiH") setTelefon("+387");
                  else if (val === "Makedonija") setTelefon("+389");
                  else if (val === "Slovenija") setTelefon("+386");
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Odaberi državu" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(drzave).map((d) => (
                    <SelectItem key={d} value={d}>
                      {d}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Grad *</Label>
              <Select value={grad} onValueChange={setGrad}>
                <SelectTrigger>
                  <SelectValue placeholder="Odaberi grad" />
                </SelectTrigger>
                <SelectContent>
                  {drzave[drzava].map((g) => (
                    <SelectItem key={g} value={g}>
                      {g}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Telefon */}
          <div>
            <Label>Broj telefona *</Label>
            <Input
              type="tel"
              value={telefon}
              onChange={(e) => setTelefon(e.target.value)}
              required
            />
          </div>

          {/* Opis */}
          <div>
            <Label>Opis oglasa *</Label>
            <Textarea
              placeholder="Opišite oglas detaljnije..."
              className="min-h-[120px]"
              required
            />
          </div>

          {/* Deadline */}
          <div>
            <Label>Deadline (do kada važi oglas) *</Label>
            <Input type="date" required />
          </div>

          

          {/* Dugme */}
          <Button type="submit" className="w-full bg-[#3997A3] hover:bg-[#2f7c85]">
            Objavi oglas
          </Button>
        </form>
      </div>
    </div>
  );
}