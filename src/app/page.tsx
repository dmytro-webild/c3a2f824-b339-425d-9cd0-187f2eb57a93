"use client";

import ReactLenis from "lenis/react";
import HeroCarouselLogo from "@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo";
import InlineImageSplitTextAbout from "@/components/sections/about/InlineImageSplitTextAbout";
import FeatureCardOne from "@/components/sections/feature/FeatureCardOne";
import FeatureCardNine from "@/components/sections/feature/FeatureCardNine";
import FeatureCardMedia from "@/components/sections/feature/FeatureCardMedia";
import TestimonialCardFive from "@/components/sections/testimonial/TestimonialCardFive";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterCard from "@/components/sections/footer/FooterCard";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Camera, Film, Heart, Instagram, Facebook } from "lucide-react";

export default function RetroGlassPhotographyPage() {
    return (
        <ThemeProvider
            defaultButtonVariant="icon-arrow"
            defaultTextAnimation="entrance-slide"
            borderRadius="rounded"
            contentWidth="medium"
            sizing="medium"
            background="none"
            cardStyle="solid"
            primaryButtonStyle="shadow"
            secondaryButtonStyle="solid"
            headingFontWeight="medium"
        >
            <ReactLenis root>
                <NavbarLayoutFloatingInline
                    navItems={[
                        { name: "About", id: "/about" },
                        { name: "Portfolio", id: "/portfolio" },
                        { name: "Services", id: "/services" },
                        { name: "Contact", id: "/contact" },
                    ]}
                    brandName="Retro Glass"
                    button={{ text: "Book a Session", href: "/contact" }}
                />
                <HeroCarouselLogo
                    logoText="Retro Glass"
                    description="Timeless Moments Through a Retro Lens. Modern photography with a vintage soul."
                    buttons={[
                        { text: "View Portfolio", href: "/portfolio" },
                        { text: "Book a Session", href: "/contact" },
                    ]}
                    slides={[
                        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BDuqwqQlRlHsoRKyycolI5jIQr/uploaded-1775492966140-bw9ecizm.jpg", imageAlt: "Cinematic retro portrait" },
                        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BDuqwqQlRlHsoRKyycolI5jIQr/uploaded-1775492966141-6aye1qnt.jpg", imageAlt: "Vintage aesthetic event photography" },
                        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BDuqwqQlRlHsoRKyycolI5jIQr/uploaded-1775492966141-gcar54xg.jpg", imageAlt: "Artistic creative shoot" },
                        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BDuqwqQlRlHsoRKyycolI5jIQr/uploaded-1775492966141-h85nxfar.jpg", imageAlt: "Artistic creative shoot" },
                    ]}
                    showDimOverlay={true}
                />
                <InlineImageSplitTextAbout
                    className="pt-40"
                    heading={[
                        { type: "text", content: "Capturing the" },
                        { type: "image", src: "http://img.b2bpic.net/free-photo/old-vintage-photo-film-camera-lens-museum-grade_181624-24761.jpg", alt: "Film camera" },
                        { type: "text", content: "nostalgia of every moment with a" },
                        { type: "image", src: "http://img.b2bpic.net/free-photo/texture-dark-fabric-with-yellow-stain_1253-75.jpg", alt: "Retro grain" },
                        { type: "text", content: "cinematic perspective" },
                    ]}
                    buttons={[{ text: "Read Our Creative Manifesto", href: "/about" }]}
                    useInvertedBackground={false}
                />
                <FeatureCardOne
                    tag="Services"
                    tagIcon={Camera}
                    title="Photography Services"
                    description="Professional, artistic coverage for your most important moments in Winnipeg and beyond."
                    textboxLayout="default"
                    animationType="slide-up"
                    gridVariant="uniform-all-items-equal"
                    useInvertedBackground={false}
                    features={[
                        { title: "Portraits", description: "Timeless portraits with a vintage aesthetic.", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-posing_23-2149213187.jpg" },
                        { title: "Events", description: "Documenting your celebrations with a documentary soul.", imageSrc: "http://img.b2bpic.net/free-photo/lifestyle-young-couple_23-2148140834.jpg" },
                        { title: "Creative", description: "Concept-driven shoots featuring authentic film looks.", imageSrc: "http://img.b2bpic.net/free-photo/lady-red-posing-studio_651396-1333.jpg" },
                    ]}
                />
                <FeatureCardNine
                    tag="Process"
                    tagIcon={Film}
                    title="The Retro Experience"
                    description="Our curated creative process ensures a cinematic result."
                    showStepNumbers={true}
                    animationType="slide-up"
                    textboxLayout="default"
                    useInvertedBackground={false}
                    features={[
                        { title: "Consultation", description: "Discussing your vision and the desired aesthetic.", phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-specialized-photographers-working-studio_23-2150247261.jpg" }, phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/high-angle-closeup-shot-vintage-camera-locker-light_181624-46594.jpg" } },
                        { title: "The Shoot", description: "Creating comfort and magic behind the lens.", phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/male-product-photographer-doing-his-job-studio_23-2148970193.jpg" }, phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/happy-portrait-couple-holding-video-camera-record-clip-video_1150-11982.jpg" } },
                    ]}
                />
                <FeatureCardMedia
                    animationType="slide-up"
                    tag="Gallery"
                    tagIcon={Heart}
                    title="Our Work"
                    description="A collection of curated moments with a vintage tone."
                    textboxLayout="default"
                    useInvertedBackground={false}
                    features={[
                        { id: "1", title: "Summer Wedding", description: "Outdoor event in rural Manitoba.", tag: "Events", imageSrc: "http://img.b2bpic.net/free-photo/newlyweds-walking-sunset-field_1153-605.jpg?_wi=1" },
                        { id: "2", title: "Editorial Portrait", description: "High-fashion vintage aesthetic.", tag: "Portraits", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-with-albinism-posing-studio_23-2150535752.jpg?_wi=1" },
                        { id: "3", title: "Urban Nights", description: "Creative lifestyle session.", tag: "Creative", imageSrc: "http://img.b2bpic.net/free-photo/woman-grey-suit-enjoys-wind-street-new-york-city_8353-1582.jpg" },
                    ]}
                />
                <TestimonialCardFive
                    tag="Feedback"
                    title="Client Stories"
                    description="What our clients say about their Retro Glass experience."
                    textboxLayout="default"
                    useInvertedBackground={false}
                    testimonials={[
                        { id: "1", name: "Sarah & Marc", date: "Oct 2024", title: "Pure Magic", quote: "The images look like they belong in a vintage film magazine. Truly incredible work.", tag: "Events", avatarSrc: "http://img.b2bpic.net/free-photo/couple-careere_1157-15799.jpg", imageSrc: "http://img.b2bpic.net/free-photo/couple-careere_1157-15799.jpg" },
                    ]}
                />
                <div id="contact" data-section="contact">
                    <ContactSplitForm
                        title="Book Your Session"
                        description="Based in Winnipeg. Let's create something timeless together."
                        imageSrc="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=2000"
                        inputs={[
                            { name: "name", type: "text", placeholder: "Full Name" },
                            { name: "email", type: "email", placeholder: "Email Address" },
                        ]}
                        textarea={{ name: "message", placeholder: "Describe your project..." }}
                        useInvertedBackground={false}
                    />
                </div>
                <FooterCard
                    logoText="Retro Glass"
                    socialLinks={[
                        { icon: Instagram, href: "#", ariaLabel: "Instagram" },
                        { icon: Facebook, href: "#", ariaLabel: "Facebook" },
                    ]}
                />
            </ReactLenis>
        </ThemeProvider>
    );
}
