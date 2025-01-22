"use client";

import React, { useState } from "react";
import {
  Lightbulb,
  Code,
  BrainCircuit,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
const BrandStoryPage = () => {
  const [activeSection, setActiveSection] = useState("meaning");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Nav */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              <Link href="/">Leawise</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            Nuestra Historia
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            La historia detrás de{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Leawise
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Descubre cómo nació el nombre que está revolucionando la gestión
            inmobiliaria en Chile
          </p>
          <ChevronDown className="w-6 h-6 text-blue-600 mx-auto animate-bounce" />
        </div>
      </section>
      <section className="py-4">
        <div className="flex gap-6 justify-center">
          <NavButton
            active={activeSection === "meaning"}
            onClick={() => setActiveSection("meaning")}
            text="Significado"
          />
          <NavButton
            active={activeSection === "philosophy"}
            onClick={() => setActiveSection("philosophy")}
            text="Filosofía"
          />
          <NavButton
            active={activeSection === "future"}
            onClick={() => setActiveSection("future")}
            text="Futuro"
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Meaning Section */}
          <div
            className={`transition-all duration-500 ${
              activeSection === "meaning" ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  El origen del nombre
                </h2>
                <p className="text-gray-600 mb-6">
                  Leawise nace de la fusión perfecta entre &quot;Lease&quot;
                  (arriendo) y &quot;Wise&quot; (sabio), representando nuestra
                  visión de una gestión inmobiliaria inteligente y eficiente.
                </p>
                <div className="space-y-4">
                  <DefinitionCard
                    term="Lease"
                    pronunciation="/liːs/"
                    definition="Del inglés: Contrato de arriendo o alquiler"
                  />
                  <DefinitionCard
                    term="Wise"
                    pronunciation="/waɪz/"
                    definition="Del inglés: Sabio, inteligente, prudente"
                  />
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <WordAnimation />
              </div>
            </div>
          </div>

          {/* Philosophy Section */}
          <div
            className={`transition-all duration-500 ${
              activeSection === "philosophy"
                ? "opacity-100"
                : "opacity-0 hidden"
            }`}
          >
            <div className="space-y-12">
              <ValueCard
                icon={<Lightbulb />}
                title="Innovación con propósito"
                description="Cada característica está diseñada para resolver problemas reales del mercado inmobiliario"
              />
              <ValueCard
                icon={<BrainCircuit />}
                title="Tecnología inteligente"
                description="Automatización e IA al servicio de una gestión más eficiente"
              />
              <ValueCard
                icon={<Code />}
                title="Simplicidad sofisticada"
                description="Interfaces intuitivas que esconden potentes capacidades"
              />
            </div>
          </div>

          {/* Future Section */}
          <div
            className={`transition-all duration-500 ${
              activeSection === "future" ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            <div className="bg-blue-600 text-white p-12 rounded-3xl">
              <h2 className="text-3xl font-bold mb-8">El futuro de Leawise</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <FutureCard
                  number="01"
                  title="Expansión regional"
                  description="Llevando nuestra solución a toda Latinoamérica"
                />
                <FutureCard
                  number="02"
                  title="IA avanzada"
                  description="Predicción y optimización de portafolios"
                />
                <FutureCard
                  number="03"
                  title="Ecosystem"
                  description="Integración con servicios complementarios"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">
            Sé parte de nuestra historia
          </h2>
          <button
            type="button"
            className="bg-blue-600 text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-blue-700 transition group"
          >
            Comienza ahora
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition" />
          </button>
        </div>
      </section>
    </div>
  );
};

interface NavButtonProps {
  active: boolean;
  onClick: () => void;
  text: string;
}

const NavButton: React.FC<NavButtonProps> = ({ active, onClick, text }) => (
  <button
    type="button"
    onClick={onClick}
    className={`px-4 py-2 rounded-lg transition ${
      active
        ? "bg-blue-100 text-blue-600 font-medium"
        : "text-gray-600 hover:bg-gray-100"
    }`}
  >
    {text}
  </button>
);

interface DefinitionCardProps {
  term: string;
  pronunciation: string;
  definition: string;
}

const DefinitionCard: React.FC<DefinitionCardProps> = ({
  term,
  pronunciation,
  definition,
}) => (
  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
    <div className="flex justify-between items-start mb-2">
      <div className="font-bold text-xl">{term}</div>
      <div className="text-gray-500 text-sm">{pronunciation}</div>
    </div>
    <p className="text-gray-600">{definition}</p>
  </div>
);

interface ValueCardProps {
  icon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition flex gap-6 items-center">
    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
      {React.cloneElement(icon, { className: "w-8 h-8 text-blue-600" })}
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

interface FutureCardProps {
  number: string;
  title: string;
  description: string;
}

const FutureCard: React.FC<FutureCardProps> = ({
  number,
  title,
  description,
}) => (
  <div className="space-y-4">
    <div className="text-blue-300 text-4xl font-bold">{number}</div>
    <div className="text-xl font-bold">{title}</div>
    <p className="text-blue-100">{description}</p>
  </div>
);

const WordAnimation = () => (
  <div className="relative h-64 flex items-center justify-center">
    <div className="text-6xl font-bold">
      <span className="text-blue-600">Lea</span>
      <span className="text-blue-800">wise</span>
    </div>
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-800/10 rounded-xl" />
  </div>
);

export default BrandStoryPage;
