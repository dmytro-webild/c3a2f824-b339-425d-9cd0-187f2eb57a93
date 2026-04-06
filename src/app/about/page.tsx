"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import FooterCard from "@/components/sections/footer/FooterCard";
import MediaAbout from "@/components/sections/about/MediaAbout";
import { Camera, Instagram, Facebook } from "lucide-react";

export default function AboutPage() {
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
                        { name: "Services", id: "/services" },
                        { name: "Contact", id: "/contact" },
                    ]}
                    brandName="Retro Glass"
                    button={{ text: "Book a Session", href: "/contact" }}
                />
                <div id="about" data-section="about" className="pt-20">
                    <MediaAbout
                        tag="Our Manifesto"
                        tagIcon={Camera}
                        title="About Retro Glass Photography"
                        description="Welcome to Retro Glass. We are a Winnipeg-based photography studio dedicated to preserving your most precious memories through a lens that values authenticity, cinematic texture, and timeless storytelling. Our approach merges professional modern techniques with the nostalgic, tactile charm of classic film, ensuring your photographs feel as meaningful years from now as they do today."
                        imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BDuqwqQlRlHsoRKyycolI5jIQr/uploaded-1775496087771-zb82oefr.png"
                        imageAlt="Photographer with vintage camera"
                        useInvertedBackground={false}
                        className="py-20"
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