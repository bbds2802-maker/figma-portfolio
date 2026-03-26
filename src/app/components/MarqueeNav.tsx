import React from 'react';

const CATEGORIES = [
  "INTERACT DESIGN",
  "IP DESIGN",
  "GAME LEVEL DESIGN",
  "GRAPHIC DESIGN",
  "MOTION GRAPHICS ART",
  "DIGITAL HUMAN",
  "BRAND IDENTITY",
  "IMMERSIVE INTERACTIVE"
];

export function MarqueeNav() {
  const items = [...CATEGORIES, ...CATEGORIES, ...CATEGORIES];
  const [activeCategory, setActiveCategory] = React.useState<string | null>(null);

  const handleScroll = (text: string) => {
    setActiveCategory(text);

    const sectionMap: Record<string, string> = {
      "INTERACT DESIGN": "interact-design",
      "IP DESIGN": "ip-design",
      "GAME LEVEL DESIGN": "game-level-design",
      "GRAPHIC DESIGN": "graphic-design",
      "MOTION GRAPHICS ART": "motion-graphics-art",
      "DIGITAL HUMAN": "digital-human",
      "BRAND IDENTITY": "brand-identity",
      "IMMERSIVE INTERACTIVE": "immersive-interactive"
    };

    const sectionId = sectionMap[text];
    if (!sectionId) return;

    const targetElement = document.getElementById(sectionId);
    if (!targetElement) return;

    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.3333%); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
          .marquee-container:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}
      </style>
      <div className="bg-black h-[46.25px] relative shrink-0 w-full overflow-hidden flex items-center marquee-container border-y-[0.667px] border-[rgba(255,255,255,0.08)]">
        <div className="flex w-fit gap-[48px] whitespace-nowrap animate-marquee pr-[48px]">
          {items.map((category, idx) => {
            const isActive = activeCategory === category;
            return (
              <div
                key={`${category}-${idx}`}
                onClick={() => handleScroll(category)}
                className="flex items-center cursor-pointer"
                data-nav-item="true"
              >
                <p className={`font-['Bebas_Neue:Regular',sans-serif] leading-[normal] not-italic transition-colors text-[14.4px] tracking-[2.88px] whitespace-nowrap pointer-events-none ${
                  isActive
                    ? 'text-[#0a5fff]'
                    : 'text-[#8c8c8c] hover:text-[#0a5fff]'
                }`}>
                  {category}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
