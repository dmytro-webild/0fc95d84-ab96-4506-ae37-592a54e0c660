"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';

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
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="SD Roofing Pros"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      background={{
        variant: "gradient-bars",
      }}
      title="Professional Roofing Services in San Diego"
      description="Secure your home with top-tier repair and replacement services. Book your free roof inspection today and get peace of mind."
      testimonials={[
        {
          name: "John D.",
          handle: "@johnd",
          testimonial: "Excellent service and quick response. My roof looks brand new!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-working-roof-with-drill_23-2148748770.jpg?_wi=1",
          imageAlt: "professional residential roof inspection san diego",
        },
        {
          name: "Sarah P.",
          handle: "@sarahp",
          testimonial: "Professional, clean, and honest. Highly recommend.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-roofers-working-with-helmets_23-2149343708.jpg?_wi=1",
          imageAlt: "professional residential roof inspection san diego",
        },
        {
          name: "Mike L.",
          handle: "@mikel",
          testimonial: "San Diego Roofing Pros fixed my leaks efficiently.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-worker-with-helmet-working-roof_23-2149343663.jpg?_wi=1",
          imageAlt: "professional residential roof inspection san diego",
        },
        {
          name: "Linda K.",
          handle: "@lindak",
          testimonial: "Fast, reliable, and professional team. A+ service.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-sitting-roof_23-2149343640.jpg?_wi=1",
          imageAlt: "professional residential roof inspection san diego",
        },
        {
          name: "Robert B.",
          handle: "@robertb",
          testimonial: "Highly satisfied with the roof repair quality.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/photo-wood-texture-pattern_58702-13126.jpg?_wi=1",
          imageAlt: "professional residential roof inspection san diego",
        },
      ]}
      buttons={[
        {
          text: "Book Free Inspection",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/man-working-roof-with-drill_23-2148748770.jpg?_wi=2"
      imageAlt="Professional roof inspection in San Diego"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/construction-worker-doing-his-job-with-belt_23-2149343658.jpg",
          alt: "Construction worker doing his job with belt",
        },
        {
          src: "http://img.b2bpic.net/free-photo/side-view-man-working-roof-with-drill_23-2148748775.jpg",
          alt: "Side view man working on roof with a drill",
        },
        {
          src: "http://img.b2bpic.net/free-photo/long-shot-men-working-roof_23-2149343673.jpg",
          alt: "Long shot men working on roof",
        },
        {
          src: "http://img.b2bpic.net/free-photo/long-shot-men-working-roof_23-2149343678.jpg",
          alt: "Long shot men working on roof",
        },
        {
          src: "http://img.b2bpic.net/free-photo/workers-having-little-chat-while-having-cup-coffee_329181-15675.jpg",
          alt: "homeowner portrait smiling",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Licensed & Insured",
        },
        {
          type: "text",
          text: "Locally Owned",
        },
        {
          type: "text",
          text: "24/7 Emergency Service",
        },
        {
          type: "text",
          text: "Top-Rated Quality",
        },
        {
          type: "text",
          text: "Free Consultations",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Serving San Diego Since 1995"
      description="With decades of experience, we provide high-quality roofing solutions designed for the San Diego climate. We prioritize quality workmanship and customer satisfaction."
      bulletPoints={[
        {
          title: "Expert Certified Techs",
          description: "Highly trained and licensed professionals.",
        },
        {
          title: "Top-Tier Materials",
          description: "Using the best shingles and roofing materials.",
        },
        {
          title: "Fully Insured",
          description: "Your safety and property are fully protected.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/full-shot-roofers-working-with-helmets_23-2149343708.jpg?_wi=2"
      imageAlt="Our expert team in San Diego"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Roof Inspection",
          description: "Detailed multi-point inspections for peace of mind.",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-worker-with-helmet-working-roof_23-2149343663.jpg?_wi=2",
          imageAlt: "Roof inspection service",
        },
        {
          title: "Emergency Repairs",
          description: "Quick response for leaks and storm damage.",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-sitting-roof_23-2149343640.jpg?_wi=2",
          imageAlt: "Emergency repair service",
        },
        {
          title: "Full Replacement",
          description: "Professional installation of durable roof systems.",
          imageSrc: "http://img.b2bpic.net/free-photo/photo-wood-texture-pattern_58702-13126.jpg?_wi=2",
          imageAlt: "Roof installation service",
        },
      ]}
      title="Our Roofing Expertise"
      description="We specialize in a full range of roofing services for residential properties."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "5,000+",
          title: "Roofs Repaired",
          description: "Successful local projects.",
          imageSrc: "http://img.b2bpic.net/free-photo/long-shot-man-with-helmet-sitting-roof_23-2149343711.jpg",
        },
        {
          id: "m2",
          value: "100%",
          title: "Satisfied Clients",
          description: "Committed to quality service.",
          imageSrc: "http://img.b2bpic.net/free-photo/architecture-engineer-desktop_1421-112.jpg",
        },
        {
          id: "m3",
          value: "24h",
          title: "Response Time",
          description: "Quick emergency availability.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-builder-man-construction-uniform-safety-helmet-holding-wall-clock-doing-ok-sign-smiling_141793-28559.jpg",
        },
      ]}
      title="Our Impact in Numbers"
      description="Proven results for San Diego homeowners."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          title: "Great Experience",
          quote: "Fantastic service from start to finish.",
          name: "Sarah W.",
          role: "Homeowner",
          imageSrc: "http://img.b2bpic.net/free-photo/workers-having-little-chat-while-having-cup-coffee_329181-15675.jpg",
        },
        {
          id: "t2",
          title: "Responsive Pros",
          quote: "They fixed my leak in record time.",
          name: "David M.",
          role: "Homeowner",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-woman-holding-brush_23-2148903532.jpg",
        },
        {
          id: "t3",
          title: "Quality Work",
          quote: "Very thorough with the replacement process.",
          name: "Linda K.",
          role: "Homeowner",
          imageSrc: "http://img.b2bpic.net/free-photo/expressive-senior-female-posing-indoor_344912-358.jpg",
        },
        {
          id: "t4",
          title: "Highly Recommended",
          quote: "Professional crew, clean worksite.",
          name: "Tom B.",
          role: "Homeowner",
          imageSrc: "http://img.b2bpic.net/free-photo/workers-having-little-chat-while-having-cup-coffee_329181-15632.jpg",
        },
        {
          id: "t5",
          title: "Best in San Diego",
          quote: "Fair pricing and excellent quality.",
          name: "Jane D.",
          role: "Homeowner",
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-with-bicycle-summer-city_1157-38211.jpg",
        },
      ]}
      title="Trusted by Homeowners"
      description="Don't just take our word for it—read what our San Diego clients say."
    />
  </div>

  <div id="socialproof" data-section="socialproof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Roofing Supply Corp",
        "San Diego Contractors Guild",
        "National Safety Council",
        "Home Improvement Alliance",
        "Local Chamber of Commerce",
        "Building Inspection Services",
        "National Roofing Partners",
      ]}
      title="We Partner with the Best"
      description="Our work meets the highest industry standards."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "How often should I inspect my roof?",
          content: "We recommend professional inspections annually.",
        },
        {
          id: "q2",
          title: "Do you offer emergency repairs?",
          content: "Yes, we are available for emergency leaks.",
        },
        {
          id: "q3",
          title: "How long does a roof replacement take?",
          content: "Typically 2-5 days depending on project size.",
        },
        {
          id: "q4",
          title: "Are you licensed and insured?",
          content: "Yes, we are fully licensed and insured in CA.",
        },
      ]}
      sideTitle="Common Roofing Questions"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      tag="Contact Us"
      title="Book Your Free Inspection"
      description="Ready to get started? Enter your email below to schedule your consultation with one of our roofing experts."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Services",
              href: "#features",
            },
            {
              label: "About",
              href: "#about",
            },
          ],
        },
        {
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
      logoText="SD Roofing Pros"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
