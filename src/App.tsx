import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Modalities } from './components/Modalities';
import { Timetable } from './components/Timetable';
import { StructureGallery } from './components/StructureGallery';
import { CTAFinal } from './components/CTAFinal';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedModality, setSelectedModality] = useState<string>('Jiu-Jitsu Iniciante');

  const handleOpenBooking = (modalityTitle?: string) => {
    if (modalityTitle) {
      setSelectedModality(modalityTitle);
    }
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#08090C] text-[#F3F4F6] selection:bg-[#EAB308] selection:text-black">
      {/* 1. Header Minimalista */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* 2. Hero Direto & Forte */}
      <main id="main-content">
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Sobre a Academia (Breve & Objetivo) */}
        <About />

        {/* 4. Modalidades Claras */}
        <Modalities onOpenBooking={handleOpenBooking} />

        {/* 5. Grade de Horários (Modalidade -> Dia -> Horário) */}
        <Timetable onOpenBooking={handleOpenBooking} />

        {/* 6. Galeria / Estrutura (Imagens reais em destaque) */}
        <StructureGallery />

        {/* 7. CTA de Conversão */}
        <CTAFinal onOpenBooking={() => handleOpenBooking()} />

        {/* 8. Contato & Localização Concentrados */}
        <ContactLocation />
      </main>

      {/* 9. Footer Simples */}
      <Footer />

      {/* Modal de Agendamento Interativo */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        selectedModality={selectedModality}
      />

      {/* Botão Flutuante de WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
