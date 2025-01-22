import React from 'react';
import {  Calculator, Clock, BarChart3, FileText } from 'lucide-react';

const WhySection = () => {
  return (
    <div className="min-h-screen bg-gray-50">


      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¿Por qué los property managers eligen Leawise?
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Más de 1,000 administradores han dejado atrás el Excel para gestionar sus propiedades de forma profesional
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
              <StatCard number="98%" text="Reducción en errores de cálculo" />
              <StatCard number="5hrs" text="Ahorro semanal en gestión" />
              <StatCard number="25%" text="Mejora en cobranza" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Los problemas que resolvemos
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <ProblemCard 
              icon={<Calculator />}
              title="Errores de cálculo costosos"
              problem="Gestionar reajustes UF/IPC manualmente lleva a errores que impactan tu rentabilidad"
              solution="Automatización de cálculos con precisión garantizada"
            />
            <ProblemCard 
              icon={<Clock />}
              title="Tiempo perdido en tareas manuales"
              problem="Horas dedicadas a actualizar planillas y enviar cobros manualmente"
              solution="Procesos automatizados que te liberan tiempo valioso"
            />
            <ProblemCard 
              icon={<FileText />}
              title="Contratos desorganizados"
              problem="Documentos importantes perdidos o difíciles de encontrar"
              solution="Centralización digital y búsqueda instantánea"
            />
            <ProblemCard 
              icon={<BarChart3 />}
              title="Falta de visibilidad"
              problem="Decisiones tomadas sin datos claros sobre el rendimiento"
              solution="Reportes en tiempo real para decisiones informadas"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">
              De Excel a una solución profesional
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ComparisonCard 
                title="Antes de Leawise"
                items={[
                  "Errores manuales frecuentes",
                  "Horas perdidas en Excel",
                  "Documentos desorganizados",
                  "Cobros atrasados",
                  "Sin visibilidad real"
                ]}
                type="before"
              />
              <ComparisonCard 
                title="Con Leawise"
                items={[
                  "Cálculos automatizados precisos",
                  "Ahorro de 5+ horas semanales",
                  "Todo centralizado y accesible",
                  "Cobros puntuales automáticos",
                  "Reportes en tiempo real"
                ]}
                type="after"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Lo que dicen nuestros clientes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              text="Leawise nos ayudó a reducir errores y mejorar la cobranza significativamente."
              author="María González"
              testimonialRole="Property Manager"
              company="Inmobiliaria MG"
            />
            <TestimonialCard 
              text="La automatización nos ahorra horas cada semana. Es un cambio total en nuestra operación."
              author="Carlos Ruiz"
              testimonialRole="Gerente de Operaciones"
              company="Admin Pro"
            />
            <TestimonialCard 
              text="Los reportes en tiempo real nos permiten tomar mejores decisiones de inversión."
              author="Ana Torres"
              testimonialRole="Asset Manager"
              company="Family Office AT"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

interface StatCardProps {
  number: string;
  text: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, text }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <div className="text-3xl font-bold text-blue-600 mb-2">{number}</div>
    <div className="text-gray-600">{text}</div>
  </div>
);

interface ProblemCardProps {
  icon: React.ReactElement;
  title: string;
  problem: string;
  solution: string;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ icon, title, problem, solution }) => (
  <div className="bg-gray-50 p-8 rounded-2xl">
    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
      {React.cloneElement(icon as React.ReactElement<React.SVGProps<SVGSVGElement>>, { className: 'w-6 h-6 text-blue-600' })}
    </div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600 mb-4">{problem}</p>
    <div className="flex items-center gap-2 text-blue-600">
      <span className="font-medium">Solución:</span>
      <span>{solution}</span>
    </div>
  </div>
);

interface ComparisonCardProps {
  title: string;
  items: string[];
  type: 'before' | 'after';
}

const ComparisonCard: React.FC<ComparisonCardProps> = ({ title, items, type }) => (
  <div className={`p-8 rounded-2xl ${
    type === 'after' ? 'bg-white text-gray-900' : 'bg-blue-500'
  }`}>
    <h3 className={`text-xl font-semibold mb-6 ${
      type === 'after' ? 'text-gray-900' : 'text-white'
    }`}>{title}</h3>
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2">
          <span className={`w-5 h-5 rounded-full flex items-center justify-center ${
            type === 'after' ? 'bg-green-100 text-green-600' : 'bg-blue-400 text-white'
          }`}>
            {type === 'after' ? '✓' : '×'}
          </span>
          <span className={type === 'after' ? 'text-gray-600' : 'text-blue-100'}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

interface TestimonialCardProps {
  text: string;
  author: string;
  testimonialRole: string;
  company: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ text, author, testimonialRole, company }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm">
    <div className="flex mb-6">
      {'★'.repeat(5)}
    </div>
    <p className="text-gray-600 mb-6">{text}</p>
    <div>
      <div className="font-medium text-gray-900">{author}</div>
      <div className="text-gray-500 text-sm">{testimonialRole}</div>
      <div className="text-gray-500 text-sm">{company}</div>
    </div>
  </div>
);

export default WhySection;