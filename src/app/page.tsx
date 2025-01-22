import React from 'react';
import { Building, ChartBar, Shield, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header flotante */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Leawise
            </div>
            <div className="hidden md:flex items-center space-x-8 text-gray-600">
              <NavLink href="#features">¿Cómo funciona?</NavLink>
              <NavLink href="#pricing">Planes</NavLink>
              <NavLink href="#contact">Contáctanos</NavLink>
              <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-2 rounded-full font-medium">
                Prueba Gratis 14 días
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section con ilustración */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                ¡Nuevo! Automatización de contratos UF/IPC
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Gestiona tus propiedades sin dolores de cabeza
              </h1>
              <p className="text-xl text-gray-600">
                Olvídate de las planillas Excel. Administra arriendos, cobros y reportes en un solo lugar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium text-lg transition transform hover:scale-105">
                  Comienza Gratis
                </button>
                <button className="group flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-600 px-8 py-4 rounded-xl font-medium text-lg border-2 transition">
                  Ver Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </button>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <img key={i} 
                         src={`/api/placeholder/32/32`} 
                         className="w-8 h-8 rounded-full border-2 border-white"
                         alt="Usuario" />
                  ))}
                </div>
                <p>Más de 1,000 administradores confían en nosotros</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl transform rotate-3"></div>
              <img 
                src="/api/placeholder/600/400"
                alt="Dashboard Leawise"
                className="relative rounded-3xl shadow-xl transform hover:-rotate-1 transition"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
            {['Logo 1', 'Logo 2', 'Logo 3', 'Logo 4'].map(logo => (
              <div key={logo} className="text-xl font-bold text-gray-400">{logo}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-20" id="features">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-600 font-medium">Características principales</span>
            <h2 className="text-3xl font-bold mt-2 mb-4">
              Todo lo que necesitas para gestionar tus propiedades
            </h2>
            <p className="text-gray-600">
              Diseñado para property managers chilenos, con todas las herramientas que necesitas para crecer.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Building />}
              title="Contratos Inteligentes"
              description="Automatiza reajustes UF/IPC, renovaciones y alertas de vencimiento"
            />
            <FeatureCard 
              icon={<ChartBar />}
              title="Reportes en Tiempo Real"
              description="Visualiza la salud de tu portafolio con métricas actualizadas"
              highlighted
            />
            <FeatureCard 
              icon={<Clock />}
              title="Cobros Automatizados"
              description="Genera y envía cobros recurrentes sin esfuerzo manual"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white" id="pricing">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-600 font-medium">Precios simples</span>
            <h2 className="text-3xl font-bold mt-2 mb-4">
              Crece con nosotros
            </h2>
            <p className="text-gray-600">
              Sin costos ocultos. Cancela cuando quieras.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard 
              plan="Inicial"
              price="2.0 UF"
              description="Perfecto para empezar"
              features={[
                "Hasta 20 propiedades",
                "Contratos básicos",
                "Reportes esenciales",
                "Soporte por email"
              ]}
            />
            <PricingCard 
              plan="Profesional"
              price="4.0 UF"
              description="El más popular"
              featured={true}
              features={[
                "Hasta 100 propiedades",
                "Contratos avanzados",
                "Reportes personalizados",
                "Soporte prioritario",
                "API básica"
              ]}
            />
            <PricingCard 
              plan="Enterprise"
              price="Conversemos"
              description="Para grandes operaciones"
              features={[
                "Propiedades ilimitadas",
                "API completa",
                "Integraciones custom",
                "Account Manager 24/7",
                "Migración asistida"
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800" id="contact">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              ¿Listo para optimizar tu gestión inmobiliaria?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Únete a más de 1,000 administradores que ya confían en Leawise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-medium text-lg hover:bg-blue-50 transition">
                Agenda una Demo
              </button>
              <button className="bg-blue-700 text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-blue-600 transition">
                Prueba Gratis
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-white mb-4">Leawise</div>
              <p>Simplificando la gestión inmobiliaria en Chile</p>
            </div>
            <FooterColumn 
              title="Producto" 
              links={["Características", "Precios", "API", "Integraciones"]}
            />
            <FooterColumn 
              title="Recursos" 
              links={["Blog", "Tutoriales", "Documentación", "Soporte"]}
            />
            <FooterColumn 
              title="Legal" 
              links={["Términos", "Privacidad", "Cookies"]}
            />
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm">
            © 2025 Leawise. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

const NavLink = ({ href, children }) => (
  <a 
    href={href}
    className="hover:text-blue-600 transition"
  >
    {children}
  </a>
);

const FeatureCard = ({ icon, title, description, highlighted = false }) => (
  <div className={`p-6 rounded-2xl transition-all duration-300 hover:shadow-xl ${
    highlighted ? 'bg-blue-600 text-white' : 'bg-white hover:bg-gray-50'
  }`}>
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
      highlighted ? 'bg-blue-500' : 'bg-blue-100'
    }`}>
      {React.cloneElement(icon, { 
        className: `w-6 h-6 ${highlighted ? 'text-white' : 'text-blue-600'}`
      })}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className={highlighted ? 'text-blue-100' : 'text-gray-600'}>{description}</p>
  </div>
);

const PricingCard = ({ plan, price, description, features, featured = false }) => (
  <div className={`relative p-8 rounded-2xl transition-all duration-300 hover:shadow-xl ${
    featured ? 'bg-blue-600 text-white scale-105' : 'bg-gray-50'
  }`}>
    {featured && (
      <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
        Recomendado
      </span>
    )}
    <h3 className="text-xl font-bold">{plan}</h3>
    <p className={`text-sm mb-4 ${featured ? 'text-blue-200' : 'text-gray-500'}`}>
      {description}
    </p>
    <div className="mb-6">
      <span className="text-3xl font-bold">{price}</span>
      <span className="text-sm">/mes</span>
    </div>
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2">
          <CheckCircle className={`w-5 h-5 ${
            featured ? 'text-blue-300' : 'text-blue-600'
          }`} />
          <span className={featured ? 'text-blue-100' : 'text-gray-600'}>
            {feature}
          </span>
        </li>
      ))}
    </ul>
    <button className={`w-full py-3 rounded-xl font-medium transition transform hover:scale-105 ${
      featured 
        ? 'bg-white text-blue-600 hover:bg-blue-50' 
        : 'bg-blue-600 text-white hover:bg-blue-700'
    }`}>
      Comenzar
    </button>
  </div>
);

const FooterColumn = ({ title, links }) => (
  <div>
    <h3 className="text-lg font-bold text-white mb-4">{title}</h3>
    <ul className="space-y-2">
      {links.map(link => (
        <li key={link}>
          <a href="#" className="hover:text-white transition">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default LandingPage;