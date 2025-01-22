
import ContactSection from "../../components/contact-section";

const ContactPage = () => {


  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Leawise
          </div>
        </div>
      </nav>
      <ContactSection />

    </div>
  );
};

export default ContactPage;
