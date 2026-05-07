"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import CardStack from '@/components/cardStack/CardStack';
import { Phone } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="medium"
        sizing="mediumLargeSizeLargeTitles"
        background="grid"
        cardStyle="gradient-mesh"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleApple
            navItems={[
              { name: "Home", id: "hero" },
              { name: "About", id: "about" },
              { name: "Gallery", id: "gallery" },
              { name: "Reviews", id: "testimonials" },
              { name: "Contact", id: "contact" },
            ]}
            brandName="SD Roofing Pros"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroSplitTestimonial
            background={{ variant: "gradient-bars" }}
            title="Professional Roofing Services in San Diego"
            description="Secure your home with top-tier repair and replacement services. Book your free roof inspection today and get peace of mind."
            testimonials={[]}
            buttons={[{ text: "Book Free Inspection", href: "#contact" }]}
            imageSrc="http://img.b2bpic.net/free-photo/man-working-roof-with-drill_23-2148748770.jpg?_wi=2"
            imageAlt="Professional roof inspection in San Diego"
          />
        </div>

        <div id="about" data-section="about">
          <SplitAbout
            textboxLayout="split"
            useInvertedBackground={false}
            title="Serving San Diego Since 1995"
            description="With decades of experience, we provide high-quality roofing solutions designed for the San Diego climate. We prioritize quality workmanship and customer satisfaction."
            bulletPoints={[
              { title: "Expert Certified Techs", description: "Highly trained and licensed professionals." },
              { title: "Top-Tier Materials", description: "Using the best shingles and roofing materials." },
              { title: "Fully Insured", description: "Your safety and property are fully protected." },
            ]}
          />
        </div>

        <div id="gallery" data-section="gallery">
          <CardStack
            title="Roofing Projects Gallery"
            description="View our recent roof installations and repairs."
            textboxLayout="default"
            animationType="slide-up"
          >
             <div className="grid grid-cols-2 gap-4">
               <img src="http://img.b2bpic.net/free-photo/full-shot-roofers-working-with-helmets_23-2149343708.jpg" alt="Before" />
               <img src="http://img.b2bpic.net/free-photo/full-shot-man-sitting-roof_23-2149343640.jpg" alt="After" />
             </div>
          </CardStack>
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardFive
            textboxLayout="split"
            useInvertedBackground={false}
            title="5-Star Roofing Reviews"
            description="Hear from satisfied homeowners across San Diego."
            testimonials={[
              { id: "1", name: "John D.", date: "2023-10-01", title: "Exceptional Quality", quote: "They replaced my roof in 3 days. Clean and professional.", tag: "Roof Replacement", avatarSrc: "" },
              { id: "2", name: "Sarah P.", date: "2023-11-15", title: "Fast Service", quote: "Fixed my storm damage leak within hours. Lifesavers!", tag: "Repair", avatarSrc: "" }
            ]}
          />
        </div>

        <div id="socialproof" data-section="socialproof">
          <SocialProofOne
            names={["Roofing Industry Certified", "San Diego Business Bureau", "Safety First Award"]}
            title="Proven Local Expertise"
            description="We are recognized by top industry standards for quality and safety."
            textboxLayout="default"
            useInvertedBackground={false}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplitForm
            title="Get a Free Estimate"
            description="Send us photos of your roof damage for a quicker assessment."
            useInvertedBackground={false}
            inputs={[
              { name: "name", type: "text", placeholder: "Name" },
              { name: "email", type: "email", placeholder: "Email" }
            ]}
            textarea={{ name: "message", placeholder: "Describe your roofing needs..." }}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterLogoEmphasis
            logoText="SD Roofing Pros"
            columns={[{ items: [{ label: "Home", href: "#hero" }, { label: "Contact", href: "#contact" }] }]}
          />
        </div>
        
        <div className="fixed bottom-6 right-6 z-50">
            <a href="tel:555-010-999" className="bg-primary-cta text-primary-cta-text p-4 rounded-full shadow-lg flex items-center justify-center">
                <Phone />
            </a>
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}