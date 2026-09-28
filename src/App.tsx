import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Benefits } from './components/Benefits';
import { Modalities } from './components/Modalities';
import { Timetable } from './components/Timetable';
import { Professors } from './components/Professors';
import { Structure } from './components/Structure';
import { Results } from './components/Results';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { InstagramSection } from './components/InstagramSection';
import { Location } from './components/Location';
import { FAQ } from './components/FAQ';
import { CTAFinal } from './components/CTAFinal';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedModality, setSelectedModality] = useState<string>('Jiu-Jitsu Iniciante (Fundamentos)');

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
      {/* Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content */}
      <main id="main-content">
        <Hero onOpenBooking={() => handleOpenBooking()} />
        <About />
        <Benefits />
        <Modalities onOpenBooking={handleOpenBooking} />
        <Timetable onOpenBooking={handleOpenBooking} />
        <Professors />
        <Structure />
        <Results />
        <Testimonials />
        <Gallery />
        <InstagramSection />
        <Location />
        <FAQ />
        <CTAFinal onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        selectedModality={selectedModality}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
