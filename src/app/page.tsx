"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="small"
      sizing="mediumLargeSizeLargeTitles"
      background="none"
      cardStyle="outline"
      primaryButtonStyle="flat"
      secondaryButtonStyle="solid"
      headingFontWeight="medium"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleCentered
            navItems={[
              { name: "Αρχική", id: "hero" },
              { name: "Υπηρεσίες", id: "fleet" },
              { name: "Κριτικές", id: "testimonials" },
              { name: "Επικοινωνία", id: "contact" },
            ]}
            brandName="Καρρράς Μιχάλης"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroBillboardGallery
            background={{ variant: "plain" }}
            title="Καρρράς Μιχάλης – VIP Μεταφορές στο Άστρος"
            description="Ασφαλείς και άνετες μεταφορές 24/7. Ζήστε την εμπειρία μιας Mercedes σε τιμή ταξί."
            buttons={[{ text: "Καλέστε Τώρα", href: "tel:6973082659" }]}
            mediaItems={[
              { imageSrc: "http://img.b2bpic.net/free-photo/black-car-garage_417767-26.jpg", imageAlt: "Mercedes VIP vehicle" },
              { imageSrc: "http://img.b2bpic.net/free-photo/elegant-man-standing-his-car-taxi-services_23-2149149593.jpg", imageAlt: "Mercedes front profile" },
              { imageSrc: "http://img.b2bpic.net/free-photo/young-woman-driving-car-night_1303-17030.jpg", imageAlt: "Mercedes luxury interior" },
              { imageSrc: "http://img.b2bpic.net/free-photo/front-view-black-new-car-with-doors-opened_23-2148332902.jpg", imageAlt: "Front view black new car with doors opened" },
              { imageSrc: "http://img.b2bpic.net/free-photo/photo-infiniti-g37-coupe-parking_158538-24745.jpg", imageAlt: "Photo of Infiniti G37 coupe at the parking" }
            ]}
            mediaAnimation="slide-up"
          />
        </div>

        <div id="about" data-section="about">
          <InlineImageSplitTextAbout
            useInvertedBackground={false}
            heading={[
              { type: "text", content: "Πολυτελής Μεταφορά με " },
              { type: "image", src: "http://img.b2bpic.net/free-photo/senior-businessman-official-clothes-sits-luxury-car-pushing-buttons-music-player_146671-14417.jpg", alt: "Luxury Taxi Service" },
              { type: "text", content: " Luxury Mercedes: Πολυτελής μεταφορά, άνεση, ασφάλεια 24/7." },
            ]}
          />
        </div>

        <div id="fleet" data-section="fleet">
          <FeatureCardMedia
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            features={[
              { id: "1", title: "Αεροδρόμια & Λιμάνια", description: "Άμεση και συνεπής μεταφορά χωρίς αναμονές.", tag: "Transfer", imageSrc: "http://img.b2bpic.net/free-photo/holding-plastic-cup-coffee-paperwork-back-seat-car-senior-businessman-with-documents_146671-14517.jpg" },
              { id: "2", title: "24/7 Εξυπηρέτηση", description: "Διαθέσιμοι οποιαδήποτε ώρα της ημέρας, 365 ημέρες το χρόνο.", tag: "24/7", imageSrc: "http://img.b2bpic.net/free-photo/luxury-interior-modern-businessman-trying-his-new-car-automobile-salon_146671-16706.jpg" },
              { id: "3", title: "Πολυτελής Στόλος", description: "2 Mercedes-Benz οχήματα για μέγιστη άνεση.", tag: "Premium", imageSrc: "http://img.b2bpic.net/free-photo/businessman-while-traveling-by-car-back-seat-using-smartphone_158595-4236.jpg" },
              { id: "4", title: "VIP Εταιρικά Ταξίδια", description: "Απόλυτη διακριτικότητα για επαγγελματικές μετακινήσεις.", tag: "Business", imageSrc: "http://img.b2bpic.net/free-photo/stylish-bearded-male-eyeglasses-with-tattoo-his-arm-using-portable-tablet-pc-back-seat-car_613910-12283.jpg" },
              { id: "5", title: "Εκδρομές & Ξενάγηση", description: "Μεταφορές σε όλη την Πελοπόννησο με άνεση.", tag: "Tourism", imageSrc: "http://img.b2bpic.net/free-photo/customer-satisfaction-service-care-problem-solving_53876-139687.jpg" }
            ]}
            title="Οι Υπηρεσίες μας"
            description="Παρέχουμε κορυφαία εμπειρία μεταφοράς με έμφαση στην άνεση και την ασφάλεια."
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardTwo
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            testimonials={[
              { id: "1", name: "Γιώργος Π.", role: "Επιχειρηματίας", testimonial: "Εξαιρετική κούρσα και πολύ ευχάριστη διαδρομή. Ο κύριος Μιχάλης είναι σοβαρός επαγγελματίας.", imageSrc: "http://img.b2bpic.net/free-photo/register-enquiry-online-web-page-concept_53876-124773.jpg" },
              { id: "2", name: "Μαρία Κ.", role: "Ταξιδιώτης", testimonial: "Χρειάστηκα μεταφορά ξημερώματα. Η κυρία Μαρία ήταν εκεί στην ώρα της, εξαιρετική οδηγός.", imageSrc: "http://img.b2bpic.net/free-photo/business-young-woman-with-coffee-talking-cheerfully-phone-parking-lot_169016-23556.jpg" },
              { id: "3", name: "John D.", role: "Tourist", testimonial: "Luxury transfer at normal prices. Highly recommended for tourists in Astros.", imageSrc: "http://img.b2bpic.net/free-photo/businessman-got-into-his-car_496169-2899.jpg" },
              { id: "4", name: "Κώστας Σ.", role: "Ιδιώτης", testimonial: "Απόλυτα συνεπής και ασφαλής οδηγός. Το Mercedes ήταν πεντακάθαρο.", imageSrc: "http://img.b2bpic.net/free-photo/woman-sitting-car-talking-phone_23-2148510650.jpg" },
              { id: "5", name: "Ελένη Μ.", role: "Επιβάτης", testimonial: "Πολύ άνετο ταξίδι και επαγγελματική συμπεριφορά. Σίγουρα θα τους προτιμήσω ξανά.", imageSrc: "http://img.b2bpic.net/free-photo/two-doctors-by-ambulance-paramedics-by-ambulance-smiling_657921-1437.jpg" }
            ]}
            title="Τι λένε οι πελάτες μας"
            description="Επαγγελματισμός και ποιότητα που ξεχωρίζουν."
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqSplitMedia
            textboxLayout="split"
            useInvertedBackground={false}
            faqs={[
              { id: "q1", title: "Πώς μπορώ να κλείσω ραντεβού;", content: "Καλέστε μας στα 6973082659 ή 6974438602." },
              { id: "q2", title: "Είστε διαθέσιμοι 24/7;", content: "Ναι, το ταξί μας λειτουργεί όλο το 24ωρο για εσάς." },
              { id: "q3", title: "Αναλαμβάνετε μεταφορές σε αεροδρόμια;", content: "Ναι, αναλαμβάνουμε μεταφορές από και προς όλα τα αεροδρόμια." }
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/woman-driving-her-taxi-cab-with-her-client-backseat_23-2149236747.jpg"
            title="Συχνές Ερωτήσεις"
            description="Όλα όσα χρειάζεται να γνωρίζετε."
            faqsAnimation="slide-up"
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactCTA
            useInvertedBackground={false}
            background={{ variant: "plain" }}
            tag="Επικοινωνία"
            title="Κλείστε τη διαδρομή σας"
            description="Για άμεση εξυπηρέτηση, καλέστε μας στα τηλέφωνα 6973082659 & 6974438602."
            buttons={[{ text: "6973082659", href: "tel:6973082659" }, { text: "6974438602", href: "tel:6974438602" }]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterLogoEmphasis
            columns={[{ items: [{ label: "Αρχική", href: "#hero" }, { label: "Υπηρεσίες", href: "#fleet" }, { label: "Κριτικές", href: "#testimonials" }, { label: "Επικοινωνία", href: "#contact" }] }]}
            logoText="Καρρράς Μιχάλης"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
