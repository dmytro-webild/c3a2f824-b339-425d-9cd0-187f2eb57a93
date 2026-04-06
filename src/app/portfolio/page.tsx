"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import FooterCard from "@/components/sections/footer/FooterCard";
import FeatureCardMedia from "@/components/sections/feature/FeatureCardMedia";
import { Instagram, Facebook } from "lucide-react";

export default function PortfolioPage() {
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
                        { name: "Home", id: "/" },
                        { name: "About", id: "/about" },
                        { name: "Portfolio", id: "/portfolio" },
                        { name: "Contact", id: "/contact" },
                    ]}
                    brandName="Retro Glass"
                    button={{ text: "Book a Session", href: "/contact" }}
                />
                <div id="portfolio" data-section="portfolio" className="pt-20">
                    <FeatureCardMedia
                        animationType="slide-up"
                        tag="Portfolio"
                        title="Our Portfolio"
                        description="A selection of our favorite cinematic and vintage-inspired shoots."
                        textboxLayout="default"
                        useInvertedBackground={false}
                        features={[
                            { id: "1", title: "Feature Project", description: "A deep dive into our signature aesthetic.", tag: "Highlights", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BDuqwqQlRlHsoRKyycolI5jIQr/uploaded-1775497448470-kzejnmoa.jpg" },
                            { id: "2", title: "Wedding Memories", description: "Capturing love with a retro touch.", tag: "Events", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BDuqwqQlRlHsoRKyycolI5jIQr/uploaded-1775495523742-q1iiyvah.jpg" },
                            { id: "3", title: "Studio Portraits", description: "Classic studio vibes meets film texture.", tag: "Portraits", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-with-albinism-posing-studio_23-2150535752.jpg?_wi=2" },
                        ]}
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