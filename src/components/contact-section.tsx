"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MessageSquare,
  Building2,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const ContactSection = () => {
  const [formStatus, setFormStatus] = useState("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    type: "general",
  });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setFormStatus("loading");
    // Simular envío
    setTimeout(() => setFormStatus("success"), 1000);
  };

  return (
    <div id="contact-section" className="min-h-screen bg-gray-50">
      <div className="pt-20 pb-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Información de contacto */}
            <div>
              <h1 className="text-4xl font-bold mb-6">Conversemos</h1>
              <p className="text-gray-600 mb-12">
                Estamos aquí para resolver tus dudas y ayudarte a mejorar la
                gestión de tus propiedades
              </p>

              <div className="space-y-6">
                <ContactInfo
                  icon={<Mail />}
                  title="Email"
                  value="contacto@leawise.com"
                />
                <ContactInfo
                  icon={<Phone />}
                  title="Teléfono"
                  value="+56 2 2123 4567"
                />
                <ContactInfo
                  icon={<Building2 />}
                  title="Oficina"
                  value="Av. Apoquindo 4400, Las Condes, Santiago"
                />
              </div>

              <div className="mt-12 p-6 bg-blue-600 text-white rounded-xl">
                <h3 className="font-bold mb-2">¿Necesitas ayuda inmediata?</h3>
                <p className="text-blue-100 mb-4">
                  Nuestro equipo de soporte está disponible 24/7
                </p>
                <button
                  type="button"
                  className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition"
                >
                  Chat en vivo
                  <MessageSquare className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Formulario */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              {formStatus === "success" ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">¡Mensaje enviado!</h3>
                  <p className="text-gray-600 mb-6">
                    Te responderemos a la brevedad
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormStatus("idle")}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="general" className="block font-medium">
                      Tipo de consulta
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <RadioButton
                        id="general"
                        name="type"
                        value="general"
                        label="Consulta general"
                        checked={formData.type === "general"}
                        onChange={(e: { target: { value: string } }) =>
                          setFormData({ ...formData, type: e.target.value })
                        }
                      />
                      <RadioButton
                        id="demo"
                        name="type"
                        value="demo"
                        label="Solicitar demo"
                        checked={formData.type === "demo"}
                        onChange={(e: { target: { value: string } }) =>
                          setFormData({ ...formData, type: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormInput
                      label="Nombre"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e: { target: { value: string } }) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                    <FormInput
                      label="Email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e: { target: { value: string } }) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormInput
                      label="Empresa"
                      type="text"
                      value={formData.company}
                      onChange={(e: { target: { value: string } }) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      required={undefined}
                    />
                    <FormInput
                      label="Teléfono"
                      type="tel"
                      value={formData.phone}
                      onChange={(e: { target: { value: string } }) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required={undefined}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-medium mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 
                             transition flex items-center justify-center gap-2 group"
                    disabled={formStatus === "loading"}
                  >
                    {formStatus === "loading" ? (
                      <span>Enviando...</span>
                    ) : (
                      <>
                        <span>Enviar mensaje</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ContactInfoProps {
  icon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  title: string;
  value: string;
}

const ContactInfo = ({ icon, title, value }: ContactInfoProps) => (
  <div className="flex gap-4">
    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
      {React.cloneElement(icon, { className: "w-6 h-6 text-blue-600" })}
    </div>
    <div>
      <div className="font-medium">{title}</div>
      <div className="text-gray-600">{value}</div>
    </div>
  </div>
);

interface RadioButtonProps {
  id: string;
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton = ({ id, name, value, label, checked, onChange }: RadioButtonProps) => (
  <div className="relative">
    <input
      type="radio"
      id={id}
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      className="peer sr-only"
    />
    <label
      htmlFor={id}
      className="block p-3 bg-gray-50 rounded-lg cursor-pointer transition
                 peer-checked:bg-blue-600 peer-checked:text-white
                 hover:bg-gray-100 peer-checked:hover:bg-blue-700
                 text-center"
    >
      {label}
    </label>
  </div>
);

interface FormInputProps {
  label: string;
  type: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({ label, type, required, value, onChange }: FormInputProps) => (
  <div>
    <label htmlFor={label} className="block font-medium mb-2">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
    <input
      id={label}
      type={type}
      required={required}
      value={value}
      onChange={onChange}
      className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

export default ContactSection;
