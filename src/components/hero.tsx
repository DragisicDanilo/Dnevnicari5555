"use client";

import { useState } from "react";
import { Briefcase } from "lucide-react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

// Kategorije i djelatnosti
const zanati: Record<string, string[]> = {
  "Građevinski radovi": ["Moler", "Zidar", "Keramičar", "Pomoćni radnik"],
  "Elektrika": ["Električar", "Monter klima uređaja", "Serviser računara"],
  "Održavanje": ["Spremačica", "Baštovan", "Haus majstor / Domar"],
  "Cijevne instalacije": ["Vodoinstalater", "Monter grijnjih instalacija"],
  "Obrada materijala": ["Ključar", "Tapetar", "Staklorezac"],
  "Garderoba i nakit": ["Krojač", "Obućar", "Zlatar"],
  "Održavanje vozila": ["Auto mehaničar", "Vulkanizer", "Auto limar"],
  "Ostalo": ["Vozač", "Transport selidbi", "Fizički radnik", "IT usluge", "Sport"],
};

// Države i gradovi
const drzave: Record<string, string[]> = {
  "Crna Gora": ["Podgorica","Nikšić","Herceg Novi","Bar","Budva","Kotor","Tivat","Cetinje","Ulcinj","Bijelo Polje","Berane",
"Pljevlja","Mojkovac","Danilovgrad","Andrijevica","Zeta","Plav","Rožaje","Petnjica","Plužine","Šavnik","Žabljak","Gusinje","Tuzi"],
  Srbija: ["Beograd", "Novi Sad", "Niš"],
  Hrvatska: ["Zagreb", "Split", "Rijeka"],
  BiH: ["Sarajevo", "Banja Luka", "Mostar"],
  Makedonija: ["Skoplje", "Bitolj", "Ohrid"],
  Slovenija: ["Ljubljana", "Maribor", "Celje"],
};

export default function Hero() {
  const [kategorija, setKategorija] = useState<string>("Ostalo");
  const [djelatnost, setDjelatnost] = useState<string>("Fizički radnik");

  const [drzava, setDrzava] = useState<string>("Crna Gora");
  const [grad, setGrad] = useState<string>("Podgorica");

  return (
    <div className="relative overflow-hidden bg-[url('/rocky-balboa-wallpaper-1920x1080.jpg')] bg-cover bg-center h-screen">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-gray to-indigo-50 opacity-30" />

      <div className="relative pt-24 pb-20 sm:pt-32 sm:pb-28">
        <div className="container mx-auto px-4">
          {/* Naslov */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              <span className="text-transparent bg-clip-text bg-black">
                Poveži se 
              </span>{" "}
              brzo i besplatno!
            </h1>

            <p className="text-xl text-black mb-8 max-w-2xl mx-auto leading-relaxed">
              Hiljade prilika te čeka – pokaži šta znaš, zaradi brzo, i budi nezavistan!{" "}
              <br />
              
            </p>
          </div>

          {/* Filter Options */}
          <div className="max-w-6xl mx-auto bg-inherit rounded-2xl shadow-lg p-10 mb-8 border border-black/40">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              {/* Kategorija */}
              <Select
                value={kategorija}
                onValueChange={(val) => {
                  setKategorija(val);
                  setDjelatnost(zanati[val][0]);
                }}
              >
                <SelectTrigger className="h-16 text-lg border border-black/40">
                  <SelectValue placeholder="Kategorija" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(zanati).map((k) => (
                    <SelectItem key={k} value={k}>
                      {k}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Uža djelatnost */}
              <Select value={djelatnost} onValueChange={setDjelatnost}>
                <SelectTrigger className="h-16 text-lg border border-black/40">
                  <SelectValue placeholder="Uža djelatnost" />
                </SelectTrigger>
                <SelectContent>
                  {zanati[kategorija].map((d) => (
                    <SelectItem key={d} value={d}>
                      {d}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Država */}
              <Select
                value={drzava}
                onValueChange={(val) => {
                  setDrzava(val);
                  setGrad(drzave[val][0]);
                }}
              >
                <SelectTrigger className="h-16 text-lg border border-black/40">
                  <SelectValue placeholder="Država" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(drzave).map((d) => (
                    <SelectItem key={d} value={d}>
                      {d}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Grad */}                                       {/* ovako bi trebao skrol bar da dodam za svaku kategoriju */}
             <Select value={grad} onValueChange={setGrad}>
              <SelectTrigger className="h-16 text-lg border border-black/40">
                <SelectValue placeholder="Grad" />
              </SelectTrigger>
              <SelectContent className="max-h-60 overflow-y-auto">
                {drzave[drzava].map((g) => (
                  <SelectItem key={g} value={g}>
                    {g}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            </div>

            {/* Search button */}
            <Button className="w-full h-16 text-lg font-semibold bg-[#3997A3] hover:bg-[#21555B] text-black">
              Pretraži poslove
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="text-center text-gray-900">
            <p className="text-sm">
              <span className="font-bold text-black">10,000+</span> aktivnih
              oglasa • <span className="font-bold text-black">U svim</span>{" "}
              ex-yu državama •{" "}
              <span className="font-bold text-black">Nove prilike</span>{" "}
              svakog dana
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

