import { useRef, useState } from "react";
import imgContainer from "figma:asset/16571e26f8db5b9883ceb825a376b6038a5c453f.png";
import imgImage2 from "figma:asset/9fa99106c07bad6b36c3eb4c8d04bfb636881276.png";
import imgImage6 from "figma:asset/33de5bb6158db887b428bea25a5cfa4b3979f68d.png";
import imgImage3 from "figma:asset/2157bc58c998425c3fe50e752db39c48cc892d71.png";
import imgImage4 from "figma:asset/53bbf013f00ed6ec5e8401ebb5ef603edf8af28f.png";
import imgImage5 from "figma:asset/9acecf72aebe6d799fa48efd863f4c26e02d6747.png";
import imgImage7 from "figma:asset/4301b7d311f1efe9ee950d72f3cc2d9f957e92b0.png";
import imgImageBreatheTheOceanInstallationView from "figma:asset/3369fc371ac68d7138c436a8d0cdf6896d800278.png";
import imgImageJellyfishParticleDissolve from "figma:asset/42c7dd576452480c49ded569c71e2caf91796310.png";
import imgImageJellyfishDispersing from "figma:asset/74baf3bf5f4c70d9aecc15496572dba2d23482b4.png";
import imgImageCoralCreature from "figma:asset/e51ccbc4e4c5ccca19715b281f693f78e8e061ab.png";
import imgImageSeaCreature from "figma:asset/8a8c7c1949a768f53155dcd5a2a02db26bf77b8a.png";
import imgImageGlowingJellyfish from "figma:asset/4b40b2d8c086d5c1bcffdeb329d6c5d42c461849.png";
import imgImageIridescentShell from "figma:asset/2668b9f3bd0e548b9e451d1be9f84eadae80edfc.png";
import imgImageVitalRhythmsInstallationWallProjection from "figma:asset/4ca0dcc13b396f78975406f1939fbc3ad9855624.png";
import imgImageProjectDocumentationCircles from "figma:asset/12f7fa6c331d7db7a6cf0dfe07c571342b971b69.png";
import imgImageUiCaveBackgroundBreathingInterface from "figma:asset/551259894101f1a9eebf100c5bcbeb42f5093ab4.png";
import imgImageGameEnvironmentOverview from "figma:asset/092a9dd81effbe50f48398b38b00d19203589dde.png";
import imgImageUiBreathingMetricsExpanded from "figma:asset/58e195aabe6366fff43434ee262e7c448b0591ed.png";
import imgImageRedStarErguotou3ViewTurnaroundPosesExpressions from "figma:asset/e65b0a1000525e5a0d926782fc227cb7528ed4e2.png";
import imgImageByYoung3ViewTurnaroundSideFrontBack from "figma:asset/79fc1dfb339caf29b10e06b84ca5129a27f4748c.png";
import imgImageXiaozao9ActionPoses from "figma:asset/85f444a79e7565eb9b40894630d42e834cf60cf3.png";
import imgImageSceneLayoutWideViewport from "figma:asset/9f8f6f270b7a294f1a4dab76e72868472f251ba7.png";
import imgImageFinalRenderPineappleHouse from "figma:asset/f56088d8b719a5549d0920f3789c71161b01beee.png";
import imgImageWireframeFrontViewport from "figma:asset/964e2dcb1dc790e59e239a36a678df96535a2db3.png";
import imgImageFinalRenderUnrealEngine from "figma:asset/846d6e3937fd2802a868c2c69a4c9c90b6a637ee.png";
import imgImageWireframeCinema4D from "figma:asset/c4cd95e08f6e7b4c8d4a9452e086cb85fffc81b3.png";
import imgImageSceneLayoutMarvelousDesigner from "figma:asset/ba3d07fcf599dc3bbf0cd0f417bfe37969918048.png";
import imgImageSceneLayoutMarvelousDesigner1 from "figma:asset/0c63eb7c7684c3728ead51dceac4d7059c4f24df.png";
import img61 from "figma:asset/68a08b13daa2c403def04585a83fc511f5c42405.png";
import img31 from "figma:asset/3bc2079beaab98ab86119bbc30d1961f395f00c9.png";
import img from "figma:asset/01e5a6097657b11a684e2ed83234a07cc7cc7bd7.png";

function Text() {
  return <div className="absolute bg-[#0a5fff] left-0 opacity-73 rounded-[4px] size-[8px] top-[3.33px]" data-name="Text" />;
}

function Container() {
  return (
    <div className="h-[15.333px] relative shrink-0 w-[252.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text />
        <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#8c8c8c] text-[10.4px] top-0 tracking-[2.08px] uppercase whitespace-nowrap">2024 — 2025 DESIGN PORTFOLIO</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[15.333px] relative shrink-0 w-[143.563px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8c8c8c] text-[10.4px] tracking-[2.08px] uppercase whitespace-nowrap">DIGITAL MEDIA ART</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[15.333px] relative shrink-0 w-[109.792px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8c8c8c] text-[10.4px] tracking-[2.08px] uppercase whitespace-nowrap">CUC · Anima</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute content-stretch flex h-[15.333px] items-center justify-between left-[32px] top-[32px] w-[1628px]" data-name="Navigation">
      <Container />
      <Container1 />
      <Container2 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex h-[16.667px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="flex-[1_0_0] font-['Space_Mono:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#0a5fff] text-[11.2px] text-center tracking-[4.48px]">{`PORTFOLIO 2024-2025 `}</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[176.792px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="-translate-x-1/2 absolute font-['Bebas_Neue:Regular',sans-serif] leading-[0] left-[302.5px] not-italic text-[#f0f0ee] text-[208px] text-center top-[-10.67px] tracking-[6.24px] whitespace-nowrap">
        <span className="leading-[176.8px]">HE</span>
        <span className="leading-[176.8px] text-[#0a5fff]">JIAXIN</span>
      </p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex h-[23.333px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="flex-[1_0_0] font-['Noto_Sans_SC:Light',sans-serif] font-light leading-[normal] min-h-px min-w-px relative text-[#8c8c8c] text-[16px] text-center tracking-[8px]">贺嘉昕 · 作品集</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[248.792px] relative shrink-0 w-[604.875px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Text1 />
        <Heading />
        <Text2 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex h-[838.667px] items-center justify-center left-[32px] px-[511.563px] top-[47.33px] w-[1628px]" data-name="Container">
      <Container4 />
    </div>
  );
}

function Container6() {
  return <div className="absolute bg-[#8c8c8c] h-px left-[-8.83px] opacity-84 top-[6.5px] w-[77.659px]" data-name="Container" />;
}

function Container7() {
  return <div className="absolute bg-[#8c8c8c] h-px left-[223.86px] opacity-84 top-[6.5px] w-[77.659px]" data-name="Container" />;
}

function Container5() {
  return (
    <div className="absolute h-[14px] left-[32px] top-[886px] w-[1628px]" data-name="Container">
      <Container6 />
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[76px] not-italic text-[#8c8c8c] text-[9.6px] top-0 tracking-[2.4px] uppercase whitespace-nowrap">{` SCROLL TO EXPLORE `}</p>
      <Container7 />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-black h-[932px] overflow-clip relative shrink-0 w-full" data-name="Section">
      <Navigation />
      <Container3 />
      <Container5 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[19.333px] relative shrink-0 w-[143.719px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="font-['Bebas_Neue:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8c8c8c] text-[14.4px] tracking-[2.88px] whitespace-nowrap">INTERACT DESIGN</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[19.333px] relative shrink-0 w-[143.719px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="font-['Bebas_Neue:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8c8c8c] text-[14.4px] tracking-[2.88px] whitespace-nowrap">INTERACT DESIGN</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[19.333px] relative shrink-0 w-[93.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="font-['Bebas_Neue:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8c8c8c] text-[14.4px] tracking-[2.88px] whitespace-nowrap">IP DESIGN</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[19.333px] relative shrink-0 w-[160.333px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="font-['Bebas_Neue:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8c8c8c] text-[14.4px] tracking-[2.88px] whitespace-nowrap">GAME LEVEL DESIGN</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[19.333px] relative shrink-0 w-[136.25px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="font-['Bebas_Neue:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8c8c8c] text-[14.4px] tracking-[2.88px] whitespace-nowrap">GRAPHIC DESIGN</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[19.333px] relative shrink-0 w-[177.479px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="font-['Bebas_Neue:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8c8c8c] text-[14.4px] tracking-[2.88px] whitespace-nowrap">MOTION GRAPHICS ART</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[19.333px] relative shrink-0 w-[129.094px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="font-['Bebas_Neue:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8c8c8c] text-[14.4px] tracking-[2.88px] whitespace-nowrap">DIGITAL HUMAN</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[19.333px] relative shrink-0 w-[136.51px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="font-['Bebas_Neue:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8c8c8c] text-[14.4px] tracking-[2.88px] whitespace-nowrap">BRAND IDENTITY</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[19.333px] relative shrink-0 w-[191.615px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="font-['Bebas_Neue:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8c8c8c] text-[14.4px] tracking-[2.88px] whitespace-nowrap">IMMERSIVE INTERACTIVE</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[19.333px] relative shrink-0 w-[143.719px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="font-['Bebas_Neue:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8c8c8c] text-[14.4px] tracking-[2.88px] whitespace-nowrap">INTERACT DESIGN</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[19.333px] relative shrink-0 w-[93.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="font-['Bebas_Neue:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8c8c8c] text-[14.4px] tracking-[2.88px] whitespace-nowrap">IP DESIGN</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[19.333px] relative shrink-0 w-[160.333px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="font-['Bebas_Neue:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8c8c8c] text-[14.4px] tracking-[2.88px] whitespace-nowrap">GAME LEVEL DESIGN</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[19.333px] relative shrink-0 w-[136.25px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="font-['Bebas_Neue:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8c8c8c] text-[14.4px] tracking-[2.88px] whitespace-nowrap">GRAPHIC DESIGN</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[19.333px] relative shrink-0 w-[177.479px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="font-['Bebas_Neue:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8c8c8c] text-[14.4px] tracking-[2.88px] whitespace-nowrap">MOTION GRAPHICS ART</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[19.333px] relative shrink-0 w-[129.094px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="font-['Bebas_Neue:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8c8c8c] text-[14.4px] tracking-[2.88px] whitespace-nowrap">DIGITAL HUMAN</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[19.333px] relative shrink-0 w-[136.51px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="font-['Bebas_Neue:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8c8c8c] text-[14.4px] tracking-[2.88px] whitespace-nowrap">BRAND IDENTITY</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[19.333px] relative shrink-0 w-[191.615px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="font-['Bebas_Neue:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8c8c8c] text-[14.4px] tracking-[2.88px] whitespace-nowrap">IMMERSIVE INTERACTIVE</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[48px] h-[19px] items-start relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container11 />
      <Container12 />
      <Container13 />
      <Container14 />
      <Container15 />
      <Container16 />
      <Container17 />
      <Container18 />
      <Container19 />
      <Container20 />
      <Container21 />
      <Container22 />
      <Container23 />
      <Container24 />
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-black h-[46.25px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[0.667px] pl-[-226.558px] pr-[226.558px] pt-[13.458px] relative rounded-[inherit] size-full">
        <Container9 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.667px] border-solid border-t-[0.667px] inset-0 pointer-events-none" />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex h-[14px] items-center left-[64px] top-[64px] w-[717.333px]" data-name="Container">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0a5fff] text-[9.6px] tracking-[3.36px] uppercase whitespace-nowrap">Designer</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute font-['Bebas_Neue:Regular',sans-serif] h-[112px] leading-[56px] left-[64px] not-italic text-[#f0f0ee] text-[56px] top-[110px] w-[717.333px] whitespace-nowrap" data-name="Container">
      <p className="absolute left-0 top-[-3.67px]">HE</p>
      <p className="absolute left-0 top-[52.33px]">JIAXIN</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[60px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Space_Mono:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#8c8c8c] text-[9.6px] tracking-[0.96px] uppercase">School</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[226.063px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f0f0ee] text-[11.2px] whitespace-nowrap">Communication University of China</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[16.667px] items-start left-0 top-0 w-[717.333px]" data-name="Container">
      <Text3 />
      <Text4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[60px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Space_Mono:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#8c8c8c] text-[9.6px] tracking-[0.96px] uppercase">Major</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[116.458px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f0f0ee] text-[11.2px] whitespace-nowrap">Digital Media Art</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[16.667px] items-start left-0 top-[24.67px] w-[717.333px]" data-name="Container">
      <Text5 />
      <Text6 />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[60px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Space_Mono:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#8c8c8c] text-[9.6px] tracking-[0.96px] uppercase">Age</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[13.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f0f0ee] text-[11.2px] whitespace-nowrap">20</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[16.667px] items-start left-0 top-[49.33px] w-[717.333px]" data-name="Container">
      <Text7 />
      <Text8 />
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[60px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Space_Mono:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#8c8c8c] text-[9.6px] tracking-[0.96px] uppercase">Email</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[116.458px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="decoration-solid font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f0f0ee] text-[11.2px] underline whitespace-nowrap">3022504541@qq.com</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[16.667px] items-start left-0 top-[74px] w-[717.333px]" data-name="Container">
      <Text9 />
      <Text10 />
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[60px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Space_Mono:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#8c8c8c] text-[9.6px] tracking-[0.96px] uppercase">Tel</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[75.354px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f0f0ee] text-[11.2px] whitespace-nowrap">17377739709</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[16.667px] items-start left-0 top-[98.67px] w-[717.333px]" data-name="Container">
      <Text11 />
      <Text12 />
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[60px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Space_Mono:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#8c8c8c] text-[9.6px] tracking-[0.96px] uppercase">WeChat</p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[89.063px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f0f0ee] text-[11.2px] whitespace-nowrap">NotAnother666</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[16.667px] items-start left-0 top-[123.33px] w-[717.333px]" data-name="Container">
      <Text13 />
      <Text14 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[172px] left-[64px] top-[245.75px] w-[717px]" data-name="Container">
      <Container31 />
      <Container32 />
      <Container33 />
      <Container34 />
      <Container35 />
      <Container36 />
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[60px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Space_Mono:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#8c8c8c] text-[9.6px] tracking-[0.96px] uppercase">github</p>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[89.063px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f0f0ee] text-[11.2px] whitespace-nowrap">bbds2802-maker</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[16.667px] items-start left-[64px] top-[391.75px] w-[717.333px]" data-name="Container">
      <Text15 />
      <Text16 />
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,255,255,0.15)] border-solid h-[25px] left-0 top-[-0.25px] w-[101px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[12.79px] not-italic text-[#8c8c8c] text-[9.6px] top-[4.79px] tracking-[1.44px] uppercase whitespace-nowrap">ClAUDE CODE</p>
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,255,255,0.15)] border-solid h-[25px] left-[107px] top-[-0.25px] w-[101px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[12.79px] not-italic text-[#8c8c8c] text-[9.6px] top-[4.79px] tracking-[1.44px] uppercase whitespace-nowrap">open claw</p>
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,255,255,0.15)] border-solid h-[24.917px] left-[330px] top-[33.75px] w-[122.021px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[12.79px] not-italic text-[#8c8c8c] text-[9.6px] top-[4.79px] tracking-[1.44px] uppercase whitespace-nowrap">Unreal Engine</p>
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,255,255,0.15)] border-solid h-[24.917px] left-[216.15px] top-0 w-[63.5px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[12.79px] not-italic text-[#8c8c8c] text-[9.6px] top-[4.79px] tracking-[1.44px] uppercase whitespace-nowrap">Figma</p>
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,255,255,0.15)] border-solid h-[24.917px] left-[287.65px] top-0 w-[92.76px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[12.79px] not-italic text-[#8c8c8c] text-[9.6px] top-[4.79px] tracking-[1.44px] uppercase whitespace-nowrap">Cinema 4D</p>
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,255,255,0.15)] border-solid h-[24.917px] left-[388.41px] top-0 w-[92.76px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[12.79px] not-italic text-[#8c8c8c] text-[9.6px] top-[4.79px] tracking-[1.44px] uppercase whitespace-nowrap">Photoshop</p>
    </div>
  );
}

function Text23() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,255,255,0.15)] border-solid h-[24.917px] left-[489.17px] top-0 w-[107.385px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[12.79px] not-italic text-[#8c8c8c] text-[9.6px] top-[4.79px] tracking-[1.44px] uppercase whitespace-nowrap">Illustrator</p>
    </div>
  );
}

function Text24() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,255,255,0.15)] border-solid h-[24.917px] left-[604.55px] top-0 w-[63.5px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[12.79px] not-italic text-[#8c8c8c] text-[9.6px] top-[4.79px] tracking-[1.44px] uppercase whitespace-nowrap">Unity</p>
    </div>
  );
}

function Text25() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,255,255,0.15)] border-solid h-[24.917px] left-0 top-[32.92px] w-[122.021px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[12.79px] not-italic text-[#8c8c8c] text-[9.6px] top-[4.79px] tracking-[1.44px] uppercase whitespace-nowrap">After Effects</p>
    </div>
  );
}

function Text26() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,255,255,0.15)] border-solid h-[24.917px] left-[130.02px] top-[32.92px] w-[78.125px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[12.79px] not-italic text-[#8c8c8c] text-[9.6px] top-[4.79px] tracking-[1.44px] uppercase whitespace-nowrap">Arduino</p>
    </div>
  );
}

function Text27() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,255,255,0.15)] border-solid h-[25px] left-[216px] top-[32.75px] w-[106px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[3.33px] not-italic text-[#8c8c8c] text-[9.6px] top-[4.33px] tracking-[1.44px] uppercase whitespace-nowrap">touchdesigner</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[57.833px] left-[64px] top-[432.75px] w-[717.333px]" data-name="Container">
      <Text17 />
      <Text18 />
      <Text19 />
      <Text20 />
      <Text21 />
      <Text22 />
      <Text23 />
      <Text24 />
      <Text25 />
      <Text26 />
      <Text27 />
    </div>
  );
}

function Container27() {
  return (
    <div className="col-1 h-[549.208px] justify-self-stretch relative row-1 shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-r-[0.667px] border-solid inset-0 pointer-events-none" />
      <Container28 />
      <Container29 />
      <Container30 />
      <Container37 />
      <Container38 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex h-[14px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0a5fff] text-[9.6px] tracking-[3.36px] uppercase whitespace-nowrap">{`Awards & Honors`}</p>
    </div>
  );
}

function Text28() {
  return (
    <div className="absolute h-[13.198px] left-0 top-[2px] w-[12.531px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[13.2px] left-0 not-italic text-[#0a5fff] text-[8.8px] top-[-0.67px] tracking-[0.88px] whitespace-nowrap">01</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.05)] border-b-[0.667px] border-solid h-[37.146px] left-0 top-0 w-[718px]" data-name="List Item">
      <Text28 />
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[17.28px] left-[28.53px] not-italic text-[#8c8c8c] text-[11.52px] top-0 whitespace-nowrap">Silk Road National English Vocabulary Competition — 1st Prize</p>
    </div>
  );
}

function Text29() {
  return (
    <div className="absolute h-[13.198px] left-0 top-[2px] w-[12.531px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[13.2px] left-0 not-italic text-[#0a5fff] text-[8.8px] top-[-0.67px] tracking-[0.88px] whitespace-nowrap">02</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.05)] border-b-[0.667px] border-solid h-[37.146px] left-0 top-[56.34px] w-[718px]" data-name="List Item">
      <Text29 />
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[17.28px] left-[28.53px] not-italic text-[#8c8c8c] text-[11.52px] top-0 whitespace-nowrap">BETT Cup National English Reading Competition — National 1st Prize</p>
    </div>
  );
}

function Text30() {
  return (
    <div className="absolute h-[13.198px] left-0 top-[2px] w-[12.531px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[13.2px] left-0 not-italic text-[#0a5fff] text-[8.8px] top-[-0.67px] tracking-[0.88px] whitespace-nowrap">03</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.05)] border-b-[0.667px] border-solid h-[37.146px] left-0 top-[112.69px] w-[718px]" data-name="List Item">
      <Text30 />
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[17.28px] left-[28.53px] not-italic text-[#8c8c8c] text-[11.52px] top-0 whitespace-nowrap">{`2025 "Eastern Aesthetics" Art Design — 3rd Prize`}</p>
    </div>
  );
}

function Text31() {
  return (
    <div className="absolute h-[13.198px] left-0 top-[2px] w-[12.531px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[13.2px] left-0 not-italic text-[#0a5fff] text-[8.8px] top-[-0.67px] tracking-[0.88px] whitespace-nowrap">04</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.05)] border-b-[0.667px] border-solid h-[37.146px] left-0 top-[169.03px] w-[718px]" data-name="List Item">
      <Text31 />
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[17.28px] left-[28.53px] not-italic text-[#8c8c8c] text-[11.52px] top-0 whitespace-nowrap">4th Hainan International Designer Competition — Creative Design Award</p>
    </div>
  );
}

function Text32() {
  return (
    <div className="absolute h-[13.198px] left-0 top-[2px] w-[12.531px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[13.2px] left-0 not-italic text-[#0a5fff] text-[8.8px] top-[-0.67px] tracking-[0.88px] whitespace-nowrap">05</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.05)] border-b-[0.667px] border-solid h-[37.146px] left-0 top-[225.38px] w-[718px]" data-name="List Item">
      <Text32 />
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[17.28px] left-[28.53px] not-italic text-[#8c8c8c] text-[11.52px] top-0 whitespace-nowrap">24th Shanghai International College Student Advertising Festival — 3rd Prize</p>
    </div>
  );
}

function Text33() {
  return (
    <div className="absolute h-[13.198px] left-0 top-[2px] w-[12.531px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[13.2px] left-0 not-italic text-[#0a5fff] text-[8.8px] top-[-0.67px] tracking-[0.88px] whitespace-nowrap">06</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.05)] border-b-[0.667px] border-solid h-[37.146px] left-0 top-[281.72px] w-[718px]" data-name="List Item">
      <Text33 />
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[17.28px] left-[28.53px] not-italic text-[#8c8c8c] text-[11.52px] top-0 whitespace-nowrap">Yuanmingyuan 5th Cultural Creative Design Competition — 3rd Prize</p>
    </div>
  );
}

function Text34() {
  return (
    <div className="absolute h-[13.198px] left-0 top-[2px] w-[12.531px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[13.2px] left-0 not-italic text-[#0a5fff] text-[8.8px] top-[-0.67px] tracking-[0.88px] whitespace-nowrap">07</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.05)] border-b-[0.667px] border-solid h-[37.146px] left-0 top-[338.06px] w-[718px]" data-name="List Item">
      <Text34 />
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[17.28px] left-[28.53px] not-italic text-[#8c8c8c] text-[11.52px] top-0 whitespace-nowrap">China International Chamber of Commerce Silk Road Recommendation Letter</p>
    </div>
  );
}

function List() {
  return (
    <div className="h-[375.208px] relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
      <ListItem5 />
      <ListItem6 />
    </div>
  );
}

function Container39() {
  return (
    <div className="col-2 h-[549.208px] justify-self-stretch relative row-1 shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col gap-[32px] items-start pt-[64px] px-[64px] relative size-full">
        <Container40 />
        <List />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-black grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[550px] pb-[0.667px] relative shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
      <Container27 />
      <Container39 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex h-[52px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Bebas_Neue:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f0f0ee] text-[40px] tracking-[2px] whitespace-nowrap">{` vibe coding`}</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[98px] relative shrink-0 w-[238.323px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container43 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[96px] relative shrink-0 w-[72.969px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Bebas_Neue:Regular',sans-serif] leading-[96px] left-0 not-italic text-[96px] text-[rgba(255,255,255,0.06)] top-[-5.67px] tracking-[-1.92px] whitespace-nowrap">01</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-black h-[317px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between pb-[32.667px] px-[64px] relative size-full">
          <Container42 />
          <Container44 />
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="col-1 h-[421px] justify-self-start relative row-1 shrink-0 w-[230px]" data-name="Container">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[99.07%] left-0 max-w-none top-[0.03%] w-[95.99%]" src={imgContainer} />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="col-2 h-[421px] relative row-1 shrink-0 w-[282px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute h-[405px] left-[-0.14px] top-[0.75px] w-[208px]" data-name="image 2">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
        </div>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="col-4 h-[499px] relative row-1 shrink-0 w-[302px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute h-[416px] left-[-15.43px] top-[-0.25px] w-[227.219px]" data-name="image 3">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[100.34%] left-0 max-w-none top-[-0.17%] w-full" src={imgImage3} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="col-7 h-[470px] relative row-1 shrink-0 w-[302px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute h-[400px] left-[-10.86px] top-[-0.25px] w-[216px]" data-name="image 7">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
        </div>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[56px] left-[46px] top-[95.75px] w-[433px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[18.496px] left-0 not-italic text-[#8c8c8c] text-[10.88px] top-0 w-[433px]">{`https://bbds2802-maker.github.io/skillpath/app.html`}</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute h-[13px] left-[47px] top-[12.75px] w-[432px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#0a5fff] text-[8.8px] top-0 tracking-[2.64px] uppercase whitespace-nowrap">p people rescuer</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute h-[32px] left-[46px] top-[44.75px] w-[162px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Bebas_Neue:Regular',sans-serif] leading-[31.68px] left-0 not-italic text-[#f0f0ee] text-[28.8px] top-0 tracking-[0.576px] whitespace-nowrap">skillpath</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-black h-[691px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
      <div className="gap-x-[20px] gap-y-[1252.7083740234375px] grid grid-cols-[repeat(7,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] pb-[43.667px] pt-[175px] px-[64px] relative size-full">
        <Container46 />
        <Container47 />
        <div className="aspect-[210/406] col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="image 6">
          <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[100.06%] left-[-3.75%] max-w-none top-[0.06%] w-[107.32%]" src={imgImage6} />
          </div>
        </div>
        <Container48 />
        <div className="col-5 h-[517px] justify-self-start relative row-1 self-start shrink-0 w-[255px]" data-name="image 4">
          <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[80.08%] left-[0.14%] max-w-none top-[-0.11%] w-[84.34%]" src={imgImage4} />
          </div>
        </div>
        <div className="col-6 h-[406px] relative rounded-[21px] row-1 self-start shrink-0 w-[211px]" data-name="image 5">
          <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none rounded-[21px]">
            <img alt="" className="absolute h-[102.68%] left-0 max-w-none top-[-1.34%] w-full" src={imgImage5} />
          </div>
        </div>
        <Container49 />
        <Paragraph />
        <Container50 />
        <Container51 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex h-[14px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0a5fff] text-[9.6px] tracking-[3.36px] uppercase whitespace-nowrap">Category 01</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex h-[52px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Bebas_Neue:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f0f0ee] text-[40px] tracking-[2px] whitespace-nowrap">INTERACT DESIGN</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[98px] relative shrink-0 w-[238.323px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start relative size-full">
        <Container54 />
        <Container55 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[96px] relative shrink-0 w-[72.969px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Bebas_Neue:Regular',sans-serif] leading-[96px] left-0 not-italic text-[96px] text-[rgba(255,255,255,0.06)] top-[-5.67px] tracking-[-1.92px] whitespace-nowrap">01</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div id="interact-design" className="bg-black h-[116px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between pb-[32.667px] px-[64px] relative size-full">
          <Container53 />
          <Container56 />
        </div>
      </div>
    </div>
  );
}

function ImageBreatheTheOceanInstallationView() {
  return (
    <div className="absolute h-[826px] left-[-27px] overflow-clip top-[-306px] w-[1719px]" data-name="Image (Breathe the Ocean — installation view)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageBreatheTheOceanInstallationView} />
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[98px] not-italic text-[#0a5fff] text-[8.8px] top-[612px] tracking-[2.64px] uppercase w-[1564px]">Digital Art Interaction</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[38.063px] left-[67px] top-[384px] w-[480px]" data-name="Paragraph">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[19.04px] left-0 not-italic text-[11.2px] text-[rgba(240,240,238,0.6)] top-[-0.33px] w-[480px]">Installation view — visitors silhouetted against the luminous particle sea wall.</p>
    </div>
  );
}

function Container61() {
  return <div className="absolute h-[13.333px] left-[85px] top-[268px] w-[1564px]" data-name="Container" />;
}

function Container62() {
  return (
    <div className="absolute h-[48px] left-[67px] top-[336px] w-[1564px]" data-name="Container">
      <p className="absolute font-['Bebas_Neue:Regular',sans-serif] leading-[48px] left-0 not-italic text-[#f0f0ee] text-[48px] top-[-2.33px] tracking-[1.44px] whitespace-nowrap">Breathe the Ocean</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0.75)] h-[579px] left-0 to-[rgba(0,0,0,0)] top-[182.75px] via-1/2 via-[rgba(0,0,0,0.2)] w-[1785px]" data-name="Container">
      <ImageBreatheTheOceanInstallationView />
      <Paragraph1 />
      <Container61 />
      <Container62 />
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[644px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container60 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[62.188px] relative shrink-0 w-[717.333px]" data-name="Paragraph">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[20.736px] left-0 not-italic text-[#8c8c8c] text-[11.52px] top-0 w-[713px]">{`A hand-gesture interactive installation where placing your hand in front of the screen causes marine creature particles to disperse — metaphorically demonstrating how human interference destroys fragile ocean ecosystems. The visual experience of 'destruction' is more emotionally impactful than any data.`}</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[62.188px] relative shrink-0 w-[717.333px]" data-name="Paragraph">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[20.736px] left-0 not-italic text-[#8c8c8c] text-[11.52px] top-0 w-[713px]">{`The particle system represents the fragile beauty of the marine ecosystem. When the audience reaches out to 'touch' the screen, the dispersion reflects the damage caused by human activities to the ocean environment.`}</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start justify-end relative">
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Text35() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid h-[21.063px] left-0 top-0 w-[65.615px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[9.59px] not-italic text-[#8c8c8c] text-[8.8px] top-[3.2px] tracking-[1.056px] uppercase whitespace-nowrap">Blender</p>
    </div>
  );
}

function Text36() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid h-[21.063px] left-[72.01px] top-0 w-[65.615px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[9.59px] not-italic text-[#8c8c8c] text-[8.8px] top-[3.2px] tracking-[1.056px] uppercase whitespace-nowrap">Arduino</p>
    </div>
  );
}

function Text37() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid h-[21.063px] left-[144.02px] top-0 w-[104.271px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[9.59px] not-italic text-[#8c8c8c] text-[8.8px] top-[3.2px] tracking-[1.056px] uppercase whitespace-nowrap">TouchDesigner</p>
    </div>
  );
}

function Text38() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid h-[21.063px] left-[254.69px] top-0 w-[110.708px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[9.59px] not-italic text-[#8c8c8c] text-[8.8px] top-[3.2px] tracking-[1.056px] uppercase whitespace-nowrap">openFrameworks</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[21.063px] relative shrink-0 w-[717.333px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text35 />
        <Text36 />
        <Text37 />
        <Text38 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="col-1 h-[582.667px] justify-self-stretch relative row-1 shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-r-[0.667px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start justify-between pl-[64px] pr-[0.667px] py-[48px] relative size-full">
        <Container65 />
        <Container66 />
      </div>
    </div>
  );
}

function ImageJellyfishParticleDissolve() {
  return (
    <div className="h-[255.333px] relative shrink-0 w-full" data-name="Image (Jellyfish particle dissolve)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageJellyfishParticleDissolve} />
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute bg-[#111] content-stretch flex flex-col items-start left-[32px] overflow-clip size-[255.333px] top-[32px]" data-name="Container">
      <ImageJellyfishParticleDissolve />
    </div>
  );
}

function ImageJellyfishDispersing() {
  return (
    <div className="h-[255.333px] relative shrink-0 w-full" data-name="Image (Jellyfish dispersing)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageJellyfishDispersing} />
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute bg-[#111] content-stretch flex flex-col items-start left-[295.33px] overflow-clip size-[255.333px] top-[32px]" data-name="Container">
      <ImageJellyfishDispersing />
    </div>
  );
}

function ImageCoralCreature() {
  return (
    <div className="h-[255.333px] relative shrink-0 w-full" data-name="Image (Coral creature)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageCoralCreature} />
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute bg-[#111] content-stretch flex flex-col items-start left-[558.67px] overflow-clip size-[255.333px] top-[32px]" data-name="Container">
      <ImageCoralCreature />
    </div>
  );
}

function ImageSeaCreature() {
  return (
    <div className="h-[241px] relative shrink-0 w-[275px]" data-name="Image (Sea creature)">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[104.86%] left-[13.76%] max-w-none top-[0.23%] w-[72.55%]" src={imgImageSeaCreature} />
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col items-start left-[32px] overflow-clip size-[255.333px] top-[295.33px]" data-name="Container">
      <ImageSeaCreature />
    </div>
  );
}

function ImageGlowingJellyfish() {
  return (
    <div className="h-[255.333px] relative shrink-0 w-full" data-name="Image (Glowing jellyfish)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageGlowingJellyfish} />
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute bg-[#111] content-stretch flex flex-col items-start left-[295.33px] overflow-clip size-[255.333px] top-[295.33px]" data-name="Container">
      <ImageGlowingJellyfish />
    </div>
  );
}

function ImageIridescentShell() {
  return (
    <div className="h-[177px] relative shrink-0 w-[208px]" data-name="Image (Iridescent shell)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageIridescentShell} />
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col items-start left-[575px] overflow-clip size-[255.333px] top-[328.08px]" data-name="Container">
      <ImageIridescentShell />
    </div>
  );
}

function Container67() {
  return (
    <div className="col-2 h-[582.667px] justify-self-stretch relative row-1 shrink-0" data-name="Container">
      <Container68 />
      <Container69 />
      <Container70 />
      <Container71 />
      <Container72 />
      <Container73 />
    </div>
  );
}

function Container63() {
  return (
    <div className="grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[492px] pt-[0.667px] relative shrink-0 w-[1692px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-solid border-t-[0.667px] inset-0 pointer-events-none" />
      <Container64 />
      <Container67 />
    </div>
  );
}

function Container58() {
  return (
    <div className="bg-black content-stretch flex flex-col h-[1287px] items-start pb-[0.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
      <Container59 />
      <Container63 />
    </div>
  );
}

function ImageVitalRhythmsInstallationWallProjection() {
  return (
    <div className="absolute h-[896px] left-0 top-[0.42px] w-[1749px]" data-name="Image (VitalRhythms installation — wall projection)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageVitalRhythmsInstallationWallProjection} />
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute content-stretch flex h-[13.333px] items-start left-[64px] top-[341.8px] w-[1564px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Space_Mono:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#0a5fff] text-[8.8px] tracking-[2.64px] uppercase">Immersive Interactive Project</p>
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute h-[48px] left-[64px] top-[363.14px] w-[1564px]" data-name="Container">
      <p className="absolute font-['Bebas_Neue:Regular',sans-serif] leading-[48px] left-0 not-italic text-[#f0f0ee] text-[48px] top-[-2.33px] tracking-[1.44px] whitespace-nowrap">VitalRhythms</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[18.479px] left-[64px] top-[433.52px] w-[500px]" data-name="Paragraph">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[18.496px] left-0 not-italic text-[10.88px] text-[rgba(240,240,238,0.55)] top-[-0.33px] whitespace-nowrap">Breathing as controller — the world responds to you.</p>
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute bg-gradient-to-b from-[40%] from-[rgba(0,0,0,0)] h-[570px] left-0 to-[rgba(0,0,0,0.85)] top-[181.42px] w-[1692px]" data-name="Container">
      <Container77 />
      <Container78 />
      <Paragraph4 />
    </div>
  );
}

function Container75() {
  return (
    <div id="immersive-interactive" className="h-[751px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <ImageVitalRhythmsInstallationWallProjection />
      <Container76 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[82.917px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[20.736px] left-0 not-italic text-[#f0f0ee] text-[11.52px] top-0 w-[698px]">{`An innovative art therapy project integrating Arduino breathing sensor technology with dynamic artistic expression. By capturing users' breathing patterns in real time, the system transforms physiological data into an interactive cave world — light, shadow and sound guide users to regulate their rhythm without any manual operation.`}</p>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex h-[13.333px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Space_Mono:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[8.8px] text-[rgba(0,240,255,0.6)] tracking-[2.2px] uppercase">Features</p>
    </div>
  );
}

function Container85() {
  return (
    <div className="font-['Space_Mono:Regular',sans-serif] h-[78.292px] leading-[19.584px] not-italic relative shrink-0 text-[#f0f0ee] text-[10.88px] w-full whitespace-nowrap" data-name="Container">
      <p className="absolute left-0 top-[-0.67px]">Real-time breathing sensor</p>
      <p className="absolute left-0 top-[18.91px]">Immersive ASMR sound</p>
      <p className="absolute left-0 top-[38.48px]">{`Light & shadow guidance`}</p>
      <p className="absolute left-0 top-[58.05px]">Auto-guided system</p>
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6.396px] h-[98.021px] items-start left-0 top-0 w-[350.667px]" data-name="Container">
      <Container84 />
      <Container85 />
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex h-[13.333px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Space_Mono:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[8.8px] text-[rgba(0,240,255,0.6)] tracking-[2.2px] uppercase">Metrics</p>
    </div>
  );
}

function Container88() {
  return (
    <div className="font-['Space_Mono:Regular',sans-serif] h-[78.292px] leading-[19.584px] not-italic relative shrink-0 text-[#f0f0ee] text-[10.88px] w-full whitespace-nowrap" data-name="Container">
      <p className="absolute left-0 top-[-0.67px]">BPM tracking</p>
      <p className="absolute left-0 top-[18.91px]">Inhalation depth</p>
      <p className="absolute left-0 top-[38.48px]">Exhalation duration</p>
      <p className="absolute left-0 top-[58.05px]">Rhythm steadiness</p>
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6.396px] h-[98.021px] items-start left-[366.67px] top-0 w-[350.667px]" data-name="Container">
      <Container87 />
      <Container88 />
    </div>
  );
}

function Container82() {
  return (
    <div className="h-[98.021px] relative shrink-0 w-full" data-name="Container">
      <Container83 />
      <Container86 />
    </div>
  );
}

function Container81() {
  return (
    <div className="h-[204.938px] relative shrink-0 w-[717.333px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
        <Paragraph5 />
        <Container82 />
      </div>
    </div>
  );
}

function ImageProjectDocumentationCircles() {
  return (
    <div className="h-[143px] opacity-85 relative rounded-[2px] shrink-0 w-[663px]" data-name="Image (Project documentation circles)">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none rounded-[2px]">
        <img alt="" className="absolute h-[108.38%] left-[0.93%] max-w-none top-[-8.34%] w-[99.07%]" src={imgImageProjectDocumentationCircles} />
      </div>
    </div>
  );
}

function Text39() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid h-[21.063px] left-0 top-0 w-[65.615px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[9.59px] not-italic text-[#f0f0ee] text-[8.8px] top-[3.2px] tracking-[1.056px] uppercase whitespace-nowrap">Arduino</p>
    </div>
  );
}

function Text40() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid h-[21.063px] left-[72.01px] top-0 w-[65.615px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[9.59px] not-italic text-[#f0f0ee] text-[8.8px] top-[3.2px] tracking-[1.056px] uppercase whitespace-nowrap">Blender</p>
    </div>
  );
}

function Text41() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid h-[21.063px] left-[144.02px] top-0 w-[52.729px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[9.59px] not-italic text-[#f0f0ee] text-[8.8px] top-[3.2px] tracking-[1.056px] uppercase whitespace-nowrap">Unity</p>
    </div>
  );
}

function Text42() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid h-[21.063px] left-[203.15px] top-0 w-[52.729px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[9.59px] not-italic text-[#f0f0ee] text-[8.8px] top-[3.2px] tracking-[1.056px] uppercase whitespace-nowrap">Figma</p>
    </div>
  );
}

function Container89() {
  return (
    <div className="h-[21.063px] relative shrink-0 w-[717.333px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text39 />
        <Text40 />
        <Text41 />
        <Text42 />
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="bg-black col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-r-[0.667px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start justify-between pl-[64px] pr-[0.667px] py-[48px] relative size-full">
        <Container81 />
        <ImageProjectDocumentationCircles />
        <Container89 />
      </div>
    </div>
  );
}

function ImageUiCaveBackgroundBreathingInterface() {
  return (
    <div className="h-[462px] relative shrink-0 w-[422px]" data-name="Image (UI — cave background breathing interface)">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.11%] left-[-46.3%] max-w-none top-[-0.13%] w-[201.84%]" src={imgImageUiCaveBackgroundBreathingInterface} />
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute h-[475.875px] left-[-20px] top-[-0.25px] w-[423px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip pr-[0.667px] relative rounded-[inherit] size-full">
        <ImageUiCaveBackgroundBreathingInterface />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-r-[0.667px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ImageGameEnvironmentOverview() {
  return (
    <div className="h-[237.271px] relative shrink-0 w-full" data-name="Image (Game environment overview)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageGameEnvironmentOverview} />
    </div>
  );
}

function Container92() {
  return (
    <div className="absolute h-[237.938px] left-[443px] top-[0.08px] w-[423px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[0.667px] relative rounded-[inherit] size-full">
        <ImageGameEnvironmentOverview />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ImageUiBreathingMetricsExpanded() {
  return (
    <div className="h-[238px] relative shrink-0 w-[441px]" data-name="Image (UI — breathing metrics expanded)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageUiBreathingMetricsExpanded} />
    </div>
  );
}

function Container93() {
  return (
    <div className="absolute content-stretch flex flex-col h-[237.938px] items-start left-[443px] overflow-clip top-[224.08px] w-[423px]" data-name="Container">
      <ImageUiBreathingMetricsExpanded />
    </div>
  );
}

function Container90() {
  return (
    <div className="bg-black col-2 h-[670px] justify-self-end relative row-1 self-start shrink-0 w-[866px]" data-name="Container">
      <Container91 />
      <Container92 />
      <Container93 />
    </div>
  );
}

function Container79() {
  return (
    <div className="bg-[#111] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[591px] pt-[0.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-black border-solid border-t-[0.667px] inset-0 pointer-events-none" />
      <Container80 />
      <Container90 />
    </div>
  );
}

function Container94() {
  return (
    <div className="bg-[rgba(0,240,255,0.02)] h-[104.667px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="size-full" />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.06)] border-solid border-t-[0.667px] inset-0 pointer-events-none" />
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col h-[875px] items-start pb-[0.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
      <Container75 />
      <Container79 />
      <Container94 />
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-black content-stretch flex flex-col h-[2629px] items-start pb-[0.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
      <Container58 />
      <Container74 />
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex h-[14px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0a5fff] text-[9.6px] tracking-[3.36px] uppercase whitespace-nowrap">Category 02</p>
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex h-[52px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Bebas_Neue:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#f0f0ee] text-[40px] tracking-[2px]">IP DESIGN</p>
    </div>
  );
}

function Container96() {
  return (
    <div className="h-[98px] relative shrink-0 w-[141.594px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start relative size-full">
        <Container97 />
        <Container98 />
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="h-[96px] relative shrink-0 w-[72.969px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Bebas_Neue:Regular',sans-serif] leading-[96px] left-0 not-italic text-[96px] text-[rgba(255,255,255,0.06)] top-[-5.67px] tracking-[-1.92px] whitespace-nowrap">02</p>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div id="ip-design" className="bg-black h-[283px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#111] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between pb-[32.667px] px-[64px] relative size-full">
          <Container96 />
          <Container99 />
        </div>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="absolute content-stretch flex h-[13.333px] items-start left-[40px] top-[40px] w-[483.333px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Space_Mono:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#0a5fff] text-[8.8px] tracking-[2.64px] uppercase">Brand IP Design</p>
    </div>
  );
}

function Container103() {
  return (
    <div className="absolute h-[31.677px] left-[40px] top-[69.33px] w-[483.333px]" data-name="Container">
      <p className="absolute font-['Bebas_Neue:Regular',sans-serif] leading-[31.68px] left-0 not-italic text-[#f0f0ee] text-[28.8px] top-[-1.33px] tracking-[0.576px] whitespace-nowrap">Red Star Erguotou</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[55.438px] left-[40px] top-[113.8px] w-[483.333px]" data-name="Paragraph">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[18.496px] left-0 not-italic text-[#8c8c8c] text-[10.88px] top-[-0.33px] w-[480px]">A 3D brand mascot for the iconic Beijing baijiu brand. Merging red star heritage, pot-head craft symbols, military canteen nostalgia, tracksuits and old Beijing cloth shoes — modernizing tradition without losing soul.</p>
    </div>
  );
}

function Text43() {
  return (
    <div className="absolute bg-[rgba(232,96,60,0.04)] border-[0.667px] border-[rgba(232,96,60,0.2)] border-solid h-[21.656px] left-0 top-0 w-[238.469px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular','Noto_Sans:Regular',sans-serif] leading-[12.32px] left-[8px] text-[8.8px] text-[rgba(232,96,60,0.7)] top-[4.33px] tracking-[0.88px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        ★ Red Star Heritage
      </p>
    </div>
  );
}

function Text44() {
  return (
    <div className="absolute bg-[rgba(232,96,60,0.04)] border-[0.667px] border-[rgba(232,96,60,0.2)] border-solid h-[21.656px] left-[244.86px] top-0 w-[238.469px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular','Noto_Sans:Regular',sans-serif] leading-[12.32px] left-[8px] text-[8.8px] text-[rgba(232,96,60,0.7)] top-[4.33px] tracking-[0.88px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        ⊙ Pot Head Craft
      </p>
    </div>
  );
}

function Text45() {
  return (
    <div className="absolute bg-[rgba(232,96,60,0.04)] border-[0.667px] border-[rgba(232,96,60,0.2)] border-solid h-[21.656px] left-0 top-[28.05px] w-[238.469px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular','Noto_Sans:Regular',sans-serif] leading-[12.32px] left-[8px] text-[8.8px] text-[rgba(232,96,60,0.7)] top-[4.33px] tracking-[0.88px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        ◈ Military Canteen
      </p>
    </div>
  );
}

function Text46() {
  return (
    <div className="absolute bg-[rgba(232,96,60,0.04)] border-[0.667px] border-[rgba(232,96,60,0.2)] border-solid h-[21.656px] left-[244.86px] top-[28.05px] w-[238.469px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular','Noto_Sans:Regular',sans-serif] leading-[12.32px] left-[8px] text-[8.8px] text-[rgba(232,96,60,0.7)] top-[4.33px] tracking-[0.88px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        ◎ Beijing Cloth Shoes
      </p>
    </div>
  );
}

function Container104() {
  return (
    <div className="absolute h-[49.708px] left-[40px] top-[193.24px] w-[483.333px]" data-name="Container">
      <Text43 />
      <Text44 />
      <Text45 />
      <Text46 />
    </div>
  );
}

function Text47() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid h-[21.063px] left-0 top-0 w-[65.615px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[9.59px] not-italic text-[#8c8c8c] text-[8.8px] top-[3.2px] tracking-[1.056px] uppercase whitespace-nowrap">Blender</p>
    </div>
  );
}

function Text48() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid h-[21.063px] left-[72.01px] top-0 w-[78.5px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[9.59px] not-italic text-[#8c8c8c] text-[8.8px] top-[3.2px] tracking-[1.056px] uppercase whitespace-nowrap">Cinema 4D</p>
    </div>
  );
}

function Text49() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid h-[21.063px] left-[156.91px] top-0 w-[91.385px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[9.59px] not-italic text-[#8c8c8c] text-[8.8px] top-[3.2px] tracking-[1.056px] uppercase whitespace-nowrap">AI-Assisted</p>
    </div>
  );
}

function Container105() {
  return (
    <div className="absolute h-[21.063px] left-[40px] top-[814.49px] w-[483.333px]" data-name="Container">
      <Text47 />
      <Text48 />
      <Text49 />
    </div>
  );
}

function Container106() {
  return (
    <div className="absolute h-[64px] left-[488.13px] top-[24px] w-[51.208px]" data-name="Container">
      <p className="absolute font-['Bebas_Neue:Regular',sans-serif] leading-[64px] left-0 not-italic text-[64px] text-[rgba(255,255,255,0.04)] top-[-3px] whitespace-nowrap">04</p>
    </div>
  );
}

function ImageRedStarErguotou3ViewTurnaroundPosesExpressions() {
  return (
    <div className="h-[504.75px] relative shrink-0 w-full" data-name="Image (Red Star Erguotou — 3-view turnaround + poses + expressions)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageRedStarErguotou3ViewTurnaroundPosesExpressions} />
    </div>
  );
}

function Container107() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col h-[504.75px] items-start left-[40px] overflow-clip rounded-[2px] top-[266.95px] w-[483.333px]" data-name="Container">
      <ImageRedStarErguotou3ViewTurnaroundPosesExpressions />
    </div>
  );
}

function Container101() {
  return (
    <div id="brand-identity" className="bg-black col-2 h-[876.219px] justify-self-stretch relative row-1 shrink-0" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container102 />
        <Container103 />
        <Paragraph6 />
        <Container104 />
        <Container105 />
        <Container106 />
        <Container107 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.667px] border-r-[0.667px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container109() {
  return (
    <div className="absolute content-stretch flex h-[13.333px] items-start left-[40px] top-[40px] w-[484px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Space_Mono:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#0a5fff] text-[8.8px] tracking-[2.64px] uppercase">Digital Human Design</p>
    </div>
  );
}

function Container110() {
  return (
    <div className="absolute h-[31.677px] left-[40px] top-[69.33px] w-[484px]" data-name="Container">
      <p className="absolute font-['Bebas_Neue:Regular',sans-serif] leading-[31.68px] left-0 not-italic text-[#f0f0ee] text-[28.8px] top-[-1.33px] tracking-[0.576px] whitespace-nowrap">CUC Digital Human</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[73.917px] left-[40px] top-[113.8px] w-[484px]" data-name="Paragraph">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[18.496px] left-0 not-italic text-[#8c8c8c] text-[10.88px] top-[-0.33px] w-[453px]">{`Official digital human ambassador "By Young" for Communication University of China. ENTJ personality — generous and outgoing. New oriental aesthetic with porcelain-white finish and sculptural floral detailing.`}</p>
    </div>
  );
}

function Text50() {
  return (
    <div className="h-[29.333px] relative shrink-0 w-[44.083px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Bebas_Neue:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[22.4px] text-[rgba(255,255,255,0.6)] tracking-[3.36px]">ENTJ</p>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="h-[29.688px] relative shrink-0 w-[210.458px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-l-[0.667px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid font-['Space_Mono:Regular',sans-serif] leading-[14.848px] not-italic relative size-full text-[#8c8c8c] text-[9.28px] tracking-[1.1136px] uppercase whitespace-nowrap">
        <p className="absolute left-[13.46px] top-0">{`Generous & Outgoing`}</p>
        <p className="absolute left-[13.46px] top-[14.84px]">CUC Host · External Publicity</p>
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.02)] content-stretch flex gap-[8px] h-[50.208px] items-center left-[40px] pl-[13.459px] pr-[0.667px] py-[0.667px] top-[211.72px] w-[484px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none" />
      <Text50 />
      <Container112 />
    </div>
  );
}

function Text51() {
  return (
    <div className="h-[12.667px] relative shrink-0 w-[27.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[8.32px] text-[rgba(255,255,255,0.2)] tracking-[1.664px] uppercase whitespace-nowrap">Side</p>
      </div>
    </div>
  );
}

function Text52() {
  return (
    <div className="h-[12.667px] relative shrink-0 w-[33.781px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[8.32px] text-[rgba(255,255,255,0.2)] tracking-[1.664px] uppercase whitespace-nowrap">Front</p>
      </div>
    </div>
  );
}

function Text53() {
  return (
    <div className="h-[12.667px] relative shrink-0 w-[27.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[8.32px] text-[rgba(255,255,255,0.2)] tracking-[1.664px] uppercase whitespace-nowrap">Back</p>
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="absolute content-stretch flex h-[12.667px] items-start justify-between left-[40px] pl-[71.354px] pr-[71.365px] top-[708.42px] w-[484px]" data-name="Container">
      <Text51 />
      <Text52 />
      <Text53 />
    </div>
  );
}

function Text54() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid h-[21.063px] left-0 top-0 w-[78.5px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[9.59px] not-italic text-[#8c8c8c] text-[8.8px] top-[3.2px] tracking-[1.056px] uppercase whitespace-nowrap">Cinema 4D</p>
    </div>
  );
}

function Text55() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid h-[21.063px] left-[84.9px] top-0 w-[136.479px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[9.59px] not-italic text-[#8c8c8c] text-[8.8px] top-[3.2px] tracking-[1.056px] uppercase whitespace-nowrap">Marvelous Designer</p>
    </div>
  );
}

function Text56() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid h-[21.063px] left-[227.77px] top-0 w-[59.177px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[9.59px] not-italic text-[#8c8c8c] text-[8.8px] top-[3.2px] tracking-[1.056px] uppercase whitespace-nowrap">iClone</p>
    </div>
  );
}

function Container114() {
  return (
    <div className="absolute h-[21.063px] left-[40px] top-[737.08px] w-[484px]" data-name="Container">
      <Text54 />
      <Text55 />
      <Text56 />
    </div>
  );
}

function Container115() {
  return (
    <div className="absolute h-[64px] left-[488.79px] top-[24px] w-[51.208px]" data-name="Container">
      <p className="absolute font-['Bebas_Neue:Regular',sans-serif] leading-[64px] left-0 not-italic text-[64px] text-[rgba(255,255,255,0.04)] top-[-3px] whitespace-nowrap">05</p>
    </div>
  );
}

function ImageByYoung3ViewTurnaroundSideFrontBack() {
  return (
    <div className="h-[412.896px] relative shrink-0 w-full" data-name="Image (By Young — 3-view turnaround: side / front / back)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageByYoung3ViewTurnaroundSideFrontBack} />
    </div>
  );
}

function Container116() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col h-[412.896px] items-start left-[40px] overflow-clip rounded-[2px] top-[285.93px] w-[484px]" data-name="Container">
      <ImageByYoung3ViewTurnaroundSideFrontBack />
    </div>
  );
}

function Container108() {
  return (
    <div id="digital-human" className="bg-black col-3 h-[876.219px] justify-self-stretch relative row-1 shrink-0" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container109 />
        <Container110 />
        <Paragraph7 />
        <Container111 />
        <Container113 />
        <Container114 />
        <Container115 />
        <Container116 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container118() {
  return (
    <div className="absolute content-stretch flex h-[13.333px] items-start left-[40px] top-[40px] w-[483.333px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Space_Mono:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#0a5fff] text-[8.8px] tracking-[2.64px] uppercase">Character Design</p>
    </div>
  );
}

function Container119() {
  return (
    <div className="absolute h-[31.677px] left-[40px] top-[69.33px] w-[483.333px]" data-name="Container">
      <p className="absolute font-['Bebas_Neue:Regular',sans-serif] leading-[31.68px] left-0 not-italic text-[#f0f0ee] text-[28.8px] top-[-1.33px] tracking-[0.576px] whitespace-nowrap">SPH IP — XIAOZAO</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[55.438px] left-[40px] top-[113.8px] w-[483.333px]" data-name="Paragraph">
      <p className="absolute font-['Space_Mono:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[18.496px] left-0 text-[#8c8c8c] text-[10.88px] top-[-0.33px] w-[480px]" style={{ fontVariationSettings: "'wght' 400" }}>
        Character design for Singapore Press Holdings (联合早报). XIAOZAO is an intern reporter — ESTP personality: curious, humorous, and playful. Full action pose library across 9 dynamic expressions.
      </p>
    </div>
  );
}

function Text57() {
  return (
    <div className="absolute bg-[rgba(139,0,0,0.06)] border-[0.667px] border-[rgba(139,0,0,0.35)] border-solid h-[21.063px] left-0 top-0 w-[47.344px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[9.59px] not-italic text-[8.8px] text-[rgba(200,100,100,0.8)] top-[3.2px] tracking-[1.32px] uppercase whitespace-nowrap">ESTP</p>
    </div>
  );
}

function Text58() {
  return (
    <div className="absolute bg-[rgba(139,0,0,0.06)] border-[0.667px] border-[rgba(139,0,0,0.35)] border-solid h-[21.063px] left-[55.34px] top-0 w-[67.469px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[9.59px] not-italic text-[8.8px] text-[rgba(200,100,100,0.8)] top-[3.2px] tracking-[1.32px] uppercase whitespace-nowrap">Curious</p>
    </div>
  );
}

function Text59() {
  return (
    <div className="absolute bg-[rgba(139,0,0,0.06)] border-[0.667px] border-[rgba(139,0,0,0.35)] border-solid h-[21.063px] left-[130.81px] top-0 w-[74.167px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[9.59px] not-italic text-[8.8px] text-[rgba(200,100,100,0.8)] top-[3.2px] tracking-[1.32px] uppercase whitespace-nowrap">Humorous</p>
    </div>
  );
}

function Text60() {
  return (
    <div className="absolute bg-[rgba(139,0,0,0.06)] border-[0.667px] border-[rgba(139,0,0,0.35)] border-solid h-[21.063px] left-[212.98px] top-0 w-[67.469px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[9.59px] not-italic text-[8.8px] text-[rgba(200,100,100,0.8)] top-[3.2px] tracking-[1.32px] uppercase whitespace-nowrap">Playful</p>
    </div>
  );
}

function Text61() {
  return (
    <div className="absolute bg-[rgba(139,0,0,0.06)] border-[0.667px] border-[rgba(139,0,0,0.35)] border-solid h-[21.063px] left-[288.45px] top-0 w-[121.115px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[9.59px] not-italic text-[8.8px] text-[rgba(200,100,100,0.8)] top-[3.2px] tracking-[1.32px] uppercase whitespace-nowrap">Intern Reporter</p>
    </div>
  );
}

function Container120() {
  return (
    <div className="absolute h-[21.063px] left-[40px] top-[193.24px] w-[483.333px]" data-name="Container">
      <Text57 />
      <Text58 />
      <Text59 />
      <Text60 />
      <Text61 />
    </div>
  );
}

function Text62() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid h-[21.063px] left-0 top-0 w-[91.385px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[9.59px] not-italic text-[#8c8c8c] text-[8.8px] top-[3.2px] tracking-[1.056px] uppercase whitespace-nowrap">Illustrator</p>
    </div>
  );
}

function Text63() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid h-[21.063px] left-[97.78px] top-0 w-[91.385px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[9.59px] not-italic text-[#8c8c8c] text-[8.8px] top-[3.2px] tracking-[1.056px] uppercase whitespace-nowrap">AI-Assisted</p>
    </div>
  );
}

function Container121() {
  return (
    <div className="absolute h-[21.063px] left-[40px] top-[732.08px] w-[483.333px]" data-name="Container">
      <Text62 />
      <Text63 />
    </div>
  );
}

function Container122() {
  return (
    <div className="absolute h-[64px] left-[488.13px] top-[24px] w-[51.208px]" data-name="Container">
      <p className="absolute font-['Bebas_Neue:Regular',sans-serif] leading-[64px] left-0 not-italic text-[64px] text-[rgba(255,255,255,0.04)] top-[-3px] whitespace-nowrap">03</p>
    </div>
  );
}

function ImageXiaozao9ActionPoses() {
  return (
    <div className="h-[477.781px] relative shrink-0 w-full" data-name="Image (XIAOZAO — 9 action poses)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageXiaozao9ActionPoses} />
    </div>
  );
}

function Container123() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col h-[477.781px] items-start left-[40px] overflow-clip rounded-[2px] top-[238.3px] w-[483.333px]" data-name="Container">
      <ImageXiaozao9ActionPoses />
    </div>
  );
}

function Container117() {
  return (
    <div className="bg-black col-1 h-[876.219px] justify-self-stretch relative row-1 shrink-0" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container118 />
        <Container119 />
        <Paragraph8 />
        <Container120 />
        <Container121 />
        <Container122 />
        <Container123 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.667px] border-r-[0.667px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container100() {
  return (
    <div className="grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[877px] pb-[0.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
      <Container101 />
      <Container108 />
      <Container117 />
    </div>
  );
}

function Container126() {
  return (
    <div className="content-stretch flex h-[14px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0a5fff] text-[9.6px] tracking-[3.36px] uppercase whitespace-nowrap">Category 03</p>
    </div>
  );
}

function Container127() {
  return (
    <div className="content-stretch flex h-[52px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Bebas_Neue:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f0f0ee] text-[40px] tracking-[2px] whitespace-nowrap">GAME LEVEL DESIGN</p>
    </div>
  );
}

function Container125() {
  return (
    <div className="h-[98px] relative shrink-0 w-[272.49px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start relative size-full">
        <Container126 />
        <Container127 />
      </div>
    </div>
  );
}

function Container128() {
  return (
    <div className="h-[96px] relative shrink-0 w-[72.969px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Bebas_Neue:Regular',sans-serif] leading-[96px] left-0 not-italic text-[96px] text-[rgba(255,255,255,0.06)] top-[-5.67px] tracking-[-1.92px] whitespace-nowrap">03</p>
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div id="game-level-design" className="bg-[#0a0a0a] h-[179px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between pb-[32.667px] px-[64px] relative size-full">
          <Container125 />
          <Container128 />
        </div>
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="absolute content-stretch flex h-[65.802px] items-start left-[40px] top-[40px] w-[383px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Space_Mono:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#0a5fff] text-[8.8px] tracking-[2.64px] uppercase">Environment Art</p>
    </div>
  );
}

function Container132() {
  return (
    <div className="absolute h-[69.01px] left-[423px] top-[40px] w-[383px]" data-name="Container">
      <p className="absolute font-['Bebas_Neue:Regular',sans-serif] leading-[31.68px] left-0 not-italic text-[#f0f0ee] text-[28.8px] top-[-1.33px] tracking-[0.576px] whitespace-nowrap">Underwater Pineapple House</p>
    </div>
  );
}

function Container133() {
  return <div className="absolute h-[153.729px] left-[423px] top-[121.8px] w-[383px]" data-name="Container" />;
}

function Paragraph9() {
  return (
    <div className="absolute h-[129.729px] left-0 top-[195.22px] w-[383px]" data-name="Paragraph">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[18.496px] left-0 not-italic text-[#8c8c8c] text-[10.88px] top-[-0.33px] w-[373px]">{`A whimsical underwater environment contrasting with the darker narrative of "The Tribe's Hope" — a post-apocalyptic game set 200 years after civilization's collapse. The young warrior Aki must balance destruction and creation.`}</p>
    </div>
  );
}

function Container134() {
  return (
    <div className="absolute h-[460.344px] left-[40px] top-[299.53px] w-[383px]" data-name="Container">
      <Paragraph9 />
    </div>
  );
}

function ImageSceneLayoutWideViewport() {
  return (
    <div className="absolute h-[160px] left-0 top-0 w-[383px]" data-name="Image (Scene layout — wide viewport)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSceneLayoutWideViewport} />
    </div>
  );
}

function Text64() {
  return (
    <div className="absolute content-stretch flex h-[11.333px] items-start left-[9.59px] top-[140.67px] w-[91.906px]" data-name="Text">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[8px] text-[rgba(255,255,255,0.35)] tracking-[1.6px] uppercase whitespace-nowrap">Scene Layout ↗</p>
    </div>
  );
}

function Container135() {
  return (
    <div className="absolute bg-[#111] h-[160px] left-[423px] overflow-clip top-[428.88px] w-[383px]" data-name="Container">
      <ImageSceneLayoutWideViewport />
      <Text64 />
    </div>
  );
}

function ImageFinalRenderPineappleHouse() {
  return (
    <div className="absolute h-[260px] left-0 top-0 w-[228px]" data-name="Image (Final render — Pineapple House)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageFinalRenderPineappleHouse} />
    </div>
  );
}

function Text65() {
  return (
    <div className="absolute content-stretch flex h-[11.333px] items-start left-[9.59px] top-[240.67px] w-[91.906px]" data-name="Text">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[8px] text-[rgba(255,255,255,0.35)] tracking-[1.6px] uppercase whitespace-nowrap">Final Render ↗</p>
    </div>
  );
}

function Container137() {
  return (
    <div className="bg-[#111] col-1 justify-self-start overflow-clip relative row-1 self-stretch shrink-0 w-[228px]" data-name="Container">
      <ImageFinalRenderPineappleHouse />
      <Text65 />
    </div>
  );
}

function ImageWireframeFrontViewport() {
  return (
    <div className="absolute h-[260px] left-0 top-0 w-[152px]" data-name="Image (Wireframe — front viewport)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWireframeFrontViewport} />
    </div>
  );
}

function Text66() {
  return (
    <div className="absolute content-stretch flex h-[11.333px] items-start left-[9.59px] top-[240.67px] w-[72.417px]" data-name="Text">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[8px] text-[rgba(255,255,255,0.35)] tracking-[1.6px] uppercase whitespace-nowrap">Wireframe ↗</p>
    </div>
  );
}

function Container138() {
  return (
    <div className="bg-[#111] col-2 justify-self-end overflow-clip relative row-1 self-stretch shrink-0 w-[155px]" data-name="Container">
      <ImageWireframeFrontViewport />
      <Text66 />
    </div>
  );
}

function Container136() {
  return (
    <div className="absolute gap-x-[3px] gap-y-[3px] grid grid-cols-[__152px_minmax(0,1fr)] grid-rows-[repeat(1,minmax(0,1fr))] h-[260px] left-[423px] top-[134.88px] w-[383px]" data-name="Container">
      <Container137 />
      <Container138 />
    </div>
  );
}

function Container139() {
  return (
    <div className="absolute h-[64px] left-[770.79px] top-[24px] w-[51.208px]" data-name="Container">
      <p className="absolute font-['Bebas_Neue:Regular',sans-serif] leading-[64px] left-0 not-italic text-[64px] text-[rgba(255,255,255,0.04)] top-[-3px] whitespace-nowrap">06</p>
    </div>
  );
}

function Container130() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.667px] border-solid h-[800.542px] left-0 overflow-clip top-0 w-[846px]" data-name="Container">
      <Container131 />
      <Container132 />
      <Container133 />
      <Container134 />
      <Container135 />
      <Container136 />
      <Container139 />
    </div>
  );
}

function Container141() {
  return (
    <div className="absolute content-stretch flex h-[13.333px] items-start left-[40px] top-[40px] w-[766px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Space_Mono:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#0a5fff] text-[8.8px] tracking-[2.64px] uppercase">Game Art — Narrative</p>
    </div>
  );
}

function Container142() {
  return (
    <div className="absolute h-[31.677px] left-[40px] top-[69.33px] w-[766px]" data-name="Container">
      <p className="absolute font-['Bebas_Neue:Regular',sans-serif] leading-[31.68px] left-0 not-italic text-[#f0f0ee] text-[28.8px] top-[-1.33px] tracking-[0.576px] whitespace-nowrap">{`The Tribe's Hope`}</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[36.958px] left-[40px] top-[113.8px] w-[766px]" data-name="Paragraph">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[18.496px] left-0 not-italic text-[#8c8c8c] text-[10.88px] top-[-0.33px] w-[746px]">{`Environment design for a post-apocalyptic action RPG. Hostile ruins contrast with the pineapple house's warmth — two worlds within one world, reflecting Aki's dual nature of darkness and light.`}</p>
    </div>
  );
}

function ImageFinalRenderUnrealEngine() {
  return (
    <div className="absolute h-[493px] left-[-61px] top-[-78px] w-[754px]" data-name="Image (Final render — Unreal Engine)">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.02%] left-[-37.12%] max-w-none top-[9.59%] w-[142.89%]" src={imgImageFinalRenderUnrealEngine} />
      </div>
    </div>
  );
}

function Text67() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.4)] h-[16.125px] left-[9.59px] top-[8px] w-[97.24px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[6.4px] not-italic text-[8px] text-[rgba(255,255,255,0.45)] top-[2.4px] tracking-[1.6px] uppercase whitespace-nowrap">Unreal Engine</p>
    </div>
  );
}

function Container144() {
  return (
    <div className="absolute bg-[#0a0a0a] h-[415px] left-0 overflow-clip top-[0.11px] w-[364px]" data-name="Container">
      <ImageFinalRenderUnrealEngine />
      <Text67 />
    </div>
  );
}

function ImageWireframeCinema4D() {
  return (
    <div className="absolute h-[130px] left-0 top-0 w-[381.5px]" data-name="Image (Wireframe — Cinema 4D)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWireframeCinema4D} />
    </div>
  );
}

function Text68() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.4)] h-[16.125px] left-[9.59px] top-[8px] w-[71.26px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[6.4px] not-italic text-[8px] text-[rgba(255,255,255,0.45)] top-[2.4px] tracking-[1.6px] uppercase whitespace-nowrap">Cinema 4D</p>
    </div>
  );
}

function Container145() {
  return (
    <div className="absolute bg-[#0a0a0a] h-[130px] left-[384.5px] overflow-clip top-0 w-[381.5px]" data-name="Container">
      <ImageWireframeCinema4D />
      <Text68 />
    </div>
  );
}

function ImageSceneLayoutMarvelousDesigner() {
  return (
    <div className="absolute h-[130px] left-0 top-0 w-[381.5px]" data-name="Image (Scene layout — Marvelous Designer)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSceneLayoutMarvelousDesigner} />
    </div>
  );
}

function Text69() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.4)] h-[16.125px] left-[9.59px] top-[8px] w-[129.729px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[6.4px] not-italic text-[8px] text-[rgba(255,255,255,0.45)] top-[2.4px] tracking-[1.6px] uppercase whitespace-nowrap">Marvelous Designer</p>
    </div>
  );
}

function Container146() {
  return (
    <div className="absolute bg-[#0a0a0a] h-[130px] left-[385px] overflow-clip top-[152.11px] w-[381.5px]" data-name="Container">
      <ImageSceneLayoutMarvelousDesigner />
      <Text69 />
    </div>
  );
}

function ImageSceneLayoutMarvelousDesigner1() {
  return (
    <div className="absolute h-[130px] left-0 top-0 w-[381.5px]" data-name="Image (Scene layout — Marvelous Designer)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSceneLayoutMarvelousDesigner1} />
    </div>
  );
}

function Text70() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.4)] h-[16.125px] left-[9.59px] top-[8px] w-[129.729px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[6.4px] not-italic text-[8px] text-[rgba(255,255,255,0.45)] top-[2.4px] tracking-[1.6px] uppercase whitespace-nowrap">Marvelous Designer</p>
    </div>
  );
}

function Container147() {
  return (
    <div className="absolute bg-[#0a0a0a] h-[130px] left-[382px] overflow-clip top-[292.11px] w-[381.5px]" data-name="Container">
      <ImageSceneLayoutMarvelousDesigner1 />
      <Text70 />
    </div>
  );
}

function Container143() {
  return (
    <div className="absolute h-[585.115px] left-[40px] top-[174.76px] w-[766px]" data-name="Container">
      <Container144 />
      <Container145 />
      <Container146 />
      <Container147 />
    </div>
  );
}

function Container148() {
  return (
    <div className="absolute h-[64px] left-[770.79px] top-[24px] w-[51.208px]" data-name="Container">
      <p className="absolute font-['Bebas_Neue:Regular',sans-serif] leading-[64px] left-0 not-italic text-[64px] text-[rgba(255,255,255,0.04)] top-[-3px] whitespace-nowrap">07</p>
    </div>
  );
}

function Container140() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.667px] border-solid h-[800.542px] left-[846px] overflow-clip top-0 w-[846px]" data-name="Container">
      <Container141 />
      <Container142 />
      <Paragraph10 />
      <Container143 />
      <Container148 />
    </div>
  );
}

function Container129() {
  return (
    <div className="bg-[#0a0a0a] h-[801px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
      <Container130 />
      <Container140 />
    </div>
  );
}

function Container150() {
  return (
    <div className="content-stretch flex h-[14px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0a5fff] text-[9.6px] tracking-[3.36px] uppercase whitespace-nowrap">Category 04</p>
    </div>
  );
}

function Container151() {
  return (
    <div className="content-stretch flex h-[52px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Bebas_Neue:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f0f0ee] text-[40px] tracking-[2px] whitespace-nowrap">GRAPHIC DESIGN</p>
    </div>
  );
}

function Container149() {
  return (
    <div className="h-[98px] relative shrink-0 w-[223.563px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start relative size-full">
        <Container150 />
        <Container151 />
      </div>
    </div>
  );
}

function Container152() {
  return (
    <div className="h-[96px] relative shrink-0 w-[72.969px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Bebas_Neue:Regular',sans-serif] leading-[96px] left-0 not-italic text-[96px] text-[rgba(255,255,255,0.06)] top-[-5.67px] tracking-[-1.92px] whitespace-nowrap">04</p>
      </div>
    </div>
  );
}

function GarphicDesignContainer() {
  return (
    <div id="graphic-design" className="bg-[#0a0a0a] content-stretch flex h-[206px] items-end justify-between pb-[32.667px] px-[64px] relative shrink-0 w-[1719px]" data-name="GARPHIC DESIGN Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
      <Container149 />
      <Container152 />
    </div>
  );
}

function Container153() {
  return (
    <div className="absolute content-stretch flex h-[13.333px] items-start left-[40px] top-[40px] w-[483.333px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Space_Mono:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#0a5fff] text-[8.8px] tracking-[2.64px] uppercase">Graphic Layout Manual</p>
    </div>
  );
}

function Container154() {
  return (
    <div className="absolute h-[31.677px] left-[40px] top-[69.33px] w-[483.333px]" data-name="Container">
      <p className="absolute font-['Bebas_Neue:Regular',sans-serif] leading-[31.68px] left-0 not-italic text-[#f0f0ee] text-[28.8px] top-[-1.33px] tracking-[0.576px] whitespace-nowrap">Whispers of the Past</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[73.917px] left-[40px] top-[113.8px] w-[483.333px]" data-name="Paragraph">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[18.496px] left-0 not-italic text-[#8c8c8c] text-[10.88px] top-[-0.33px] w-[473px]">{`A photography and layout publication titled "December Memories" exploring personal nostalgia through editorial design. Red-dominant palette with raw, documentary-style photography and precise typographic grids.`}</p>
    </div>
  );
}

function Text71() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid h-[21.063px] left-0 top-0 w-[78.5px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[9.59px] not-italic text-[#8c8c8c] text-[8.8px] top-[3.2px] tracking-[1.056px] uppercase whitespace-nowrap">Photoshop</p>
    </div>
  );
}

function Text72() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid h-[21.063px] left-[84.9px] top-0 w-[91.385px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[9.59px] not-italic text-[#8c8c8c] text-[8.8px] top-[3.2px] tracking-[1.056px] uppercase whitespace-nowrap">Illustrator</p>
    </div>
  );
}

function Container155() {
  return (
    <div className="absolute h-[21.063px] left-[40px] top-[211.72px] w-[483.333px]" data-name="Container">
      <Text71 />
      <Text72 />
    </div>
  );
}

function Container156() {
  return (
    <div className="absolute h-[64px] left-[488.13px] top-[24px] w-[51.208px]" data-name="Container">
      <p className="absolute font-['Bebas_Neue:Regular',sans-serif] leading-[64px] left-0 not-italic text-[64px] text-[rgba(255,255,255,0.04)] top-[-3px] whitespace-nowrap">08</p>
    </div>
  );
}

function WhispersOfThePastContainer() {
  return (
    <div className="h-[936px] relative shrink-0 w-[1719px]" data-name="whispers of the past Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container153 />
        <Container154 />
        <Paragraph11 />
        <Container155 />
        <Container156 />
        <div className="absolute h-[1218.744px] left-0 top-[-305.27px] w-[1719px]" data-name="作品集（拖移项目） 6 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img61} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.667px] border-r-[0.667px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[73.917px] left-[64px] top-[193.75px] w-[483.333px]" data-name="Paragraph">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[18.496px] left-0 not-italic text-[#8c8c8c] text-[10.88px] top-[-0.33px] w-[473px]">The existence of trees, in addition to their great effect on the environment, also has a strong humanistic element, and in various cultural contexts, trees also have both similar and different symbolic meanings.</p>
    </div>
  );
}

function TreeSearchContainer() {
  return (
    <div className="h-[1202px] relative shrink-0 w-[1719px]" data-name="tree search Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Bebas_Neue:Regular',sans-serif] leading-[31.68px] left-[64px] not-italic text-[28.8px] text-white top-[144.75px] tracking-[0.576px] whitespace-nowrap">Tree Search</p>
        <p className="absolute font-['Space_Mono:Regular',sans-serif] h-[16px] leading-[normal] left-[64px] not-italic text-[#0a5fff] text-[8.8px] top-[111.75px] tracking-[2.64px] uppercase w-[483px]">Book Design</p>
        <div className="absolute h-[1216px] left-0 top-[267.75px] w-[1719px]" data-name="作品集（拖移项目） 3 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img31} />
        </div>
        <Paragraph12 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.67px] border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container157() {
  return (
    <div className="absolute bottom-[160.92px] content-stretch flex h-[13.333px] items-start right-[87px] w-[484px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Space_Mono:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#0a5fff] text-[8.8px] tracking-[2.64px] uppercase">Cultural Product Design</p>
    </div>
  );
}

function Container158() {
  return (
    <div className="absolute bottom-[113.24px] h-[31.677px] right-[87px] w-[484px]" data-name="Container">
      <p className="absolute font-['Bebas_Neue:Regular',sans-serif] leading-[31.68px] left-0 not-italic text-[#f0f0ee] text-[28.8px] top-[-1.33px] tracking-[0.576px] whitespace-nowrap">Boundless Journey</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute bottom-[45.01px] h-[55.438px] right-[87px] w-[484px]" data-name="Paragraph">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[18.496px] left-0 not-italic text-[#8c8c8c] text-[10.88px] top-[-0.33px] w-[473px]">Cultural creative products centered on the Chinese zodiac horse, fusing the Old Summer Palace bronze horse head with new oriental Thangka art style. Modern graphic language serving ancient cultural heritage.</p>
    </div>
  );
}

function Text73() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid h-[21.063px] left-0 top-0 w-[91.385px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[9.59px] not-italic text-[#8c8c8c] text-[8.8px] top-[3.2px] tracking-[1.056px] uppercase whitespace-nowrap">Illustrator</p>
    </div>
  );
}

function Text74() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid h-[21.063px] left-[97.78px] top-0 w-[78.5px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[9.59px] not-italic text-[#8c8c8c] text-[8.8px] top-[3.2px] tracking-[1.056px] uppercase whitespace-nowrap">Photoshop</p>
    </div>
  );
}

function Container159() {
  return (
    <div className="absolute bottom-[-0.05px] h-[21.063px] right-[87px] w-[484px]" data-name="Container">
      <Text73 />
      <Text74 />
    </div>
  );
}

function Container160() {
  return (
    <div className="absolute bottom-[126.25px] h-[64px] right-[71px] w-[51.208px]" data-name="Container">
      <p className="absolute font-['Bebas_Neue:Regular',sans-serif] leading-[64px] left-0 not-italic text-[64px] text-[rgba(255,255,255,0.04)] top-[-3px] whitespace-nowrap">10</p>
    </div>
  );
}

function BoundlessJourneyContainer() {
  return (
    <div className="bg-[#0a0a0a] h-[1062px] relative shrink-0 w-full" data-name="boundless journey Container">
      <Container157 />
      <Container158 />
      <Paragraph13 />
      <Container159 />
      <Container160 />
      <div className="absolute h-[1216px] left-0 top-[-32.25px] w-[1719px]" data-name="骏成万里图片">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img} />
      </div>
    </div>
  );
}

function Container162() {
  return (
    <div className="content-stretch flex h-[14px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0a5fff] text-[9.6px] tracking-[3.36px] uppercase whitespace-nowrap">Category 05</p>
    </div>
  );
}

function Container163() {
  return (
    <div className="content-stretch flex h-[52px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Bebas_Neue:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f0f0ee] text-[40px] tracking-[2px] whitespace-nowrap">MOTION GRAPHICS ART</p>
    </div>
  );
}

function Container161() {
  return (
    <div className="h-[98px] relative shrink-0 w-[308.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start relative size-full">
        <Container162 />
        <Container163 />
      </div>
    </div>
  );
}

function Container164() {
  return (
    <div className="h-[96px] relative shrink-0 w-[72.969px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Bebas_Neue:Regular',sans-serif] leading-[96px] left-0 not-italic text-[96px] text-[rgba(255,255,255,0.06)] top-[-5.67px] tracking-[-1.92px] whitespace-nowrap">05</p>
      </div>
    </div>
  );
}

function MotionGraphicArtContainer() {
  return (
    <div id="motion-graphics-art" className="bg-[#0a0a0a] content-stretch flex h-[179px] items-end justify-between pb-[32.667px] px-[64px] relative shrink-0 w-[1715px]" data-name="MOTION GRAPHIC ART Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
      <Container161 />
      <Container164 />
    </div>
  );
}

function Container166() {
  return (
    <div className="absolute h-[31.677px] left-[46.5px] top-[69.33px] w-[766px]" data-name="Container">
      <p className="absolute font-['Bebas_Neue:Regular',sans-serif] leading-[31.68px] left-0 not-italic text-[#f0f0ee] text-[28.8px] top-[-1.33px] tracking-[0.576px] whitespace-nowrap">Tooth Revolution</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="-translate-x-1/2 absolute h-[55.438px] left-[calc(50%-0.25px)] top-[115.75px] w-[766px]" data-name="Paragraph">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[18.496px] left-0 not-italic text-[#8c8c8c] text-[10.88px] top-[-0.33px] w-[760px]">{`A creative ad for Sensodyne constructing a microscopic "tooth civilization" worldview. Oral problems become the "three great catastrophes"; the product becomes the "fourfold shield." Scientific epic style overturns traditional dental advertising.`}</p>
    </div>
  );
}

function Text75() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid h-[21.063px] left-0 top-0 w-[72.063px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[9.59px] not-italic text-[#8c8c8c] text-[8.8px] top-[3.2px] tracking-[1.056px] uppercase whitespace-nowrap">Premiere</p>
    </div>
  );
}

function Text76() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid h-[21.063px] left-[78.46px] top-0 w-[78.5px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[9.59px] not-italic text-[#8c8c8c] text-[8.8px] top-[3.2px] tracking-[1.056px] uppercase whitespace-nowrap">Photoshop</p>
    </div>
  );
}

function Text77() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid h-[21.063px] left-[163.35px] top-0 w-[104.271px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[9.59px] not-italic text-[#8c8c8c] text-[8.8px] top-[3.2px] tracking-[1.056px] uppercase whitespace-nowrap">After Effects</p>
    </div>
  );
}

function Container168() {
  return <div className="h-[125px] w-[766px]" data-name="Container" />;
}

function Container167() {
  return (
    <div className="absolute h-[21.063px] left-[48.5px] top-[187.75px] w-[766px]" data-name="Container">
      <Text75 />
      <Text76 />
      <Text77 />
      <div className="absolute flex h-[125px] items-center justify-center left-[-42px] top-[-260px] w-[766px]">
        <div className="-scale-y-100 flex-none">
          <Container168 />
        </div>
      </div>
    </div>
  );
}

function VideoTooth() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div
      className="absolute inset-x-0 top-[220px] bottom-0 bg-black cursor-pointer"
      data-name="video tooth"
      onClick={toggle}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-contain block"
        controlsList="nodownload"
        loop
        playsInline
        onEnded={() => setPlaying(false)}
      >
        <source src="/videos/tooth-revolution.mp4" type="video/mp4" />
      </video>
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[64px] h-[64px] rounded-full bg-[rgba(10,95,255,0.85)] flex items-center justify-center">
            <svg width="26" height="28" viewBox="0 0 26 28" fill="none">
              <path d="M2 2L24 14L2 26V2Z" fill="white" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

function Container169() {
  return <div className="absolute h-[64px] left-[765.5px] top-[95.75px] w-[51.208px]" data-name="Container" />;
}

function ToothRevolutinContainer() {
  return (
    <div className="col-2 justify-self-stretch overflow-clip relative row-1 self-stretch shrink-0" data-name="tooth revolutin container">
      <Container166 />
      <Paragraph14 />
      <Container167 />
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[48.5px] not-italic text-[#0a5fff] text-[8.8px] top-[40px] tracking-[2.64px] uppercase w-[382.667px]">AIGC Advertising Video</p>
      <VideoTooth />
      <Container169 />
      <p className="absolute font-['Bebas_Neue:Regular',sans-serif] leading-[64px] left-[755.5px] not-italic text-[64px] text-[rgba(255,255,255,0.04)] top-[27.75px] whitespace-nowrap">12</p>
    </div>
  );
}

function Container170() {
  return (
    <div className="absolute content-stretch flex h-[13.333px] items-start left-[40px] top-[40px] w-[765.333px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Space_Mono:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#0a5fff] text-[8.8px] tracking-[2.64px] uppercase">AIGC Public Service Video</p>
    </div>
  );
}

function Container171() {
  return (
    <div className="absolute h-[31.677px] left-[40px] top-[69.33px] w-[765.333px]" data-name="Container">
      <p className="absolute font-['Bebas_Neue:Regular',sans-serif] leading-[31.68px] left-0 not-italic text-[#f0f0ee] text-[28.8px] top-[-1.33px] tracking-[0.576px] whitespace-nowrap">Urban Relocation Program</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute h-[36.958px] left-[40px] top-[113.8px] w-[765.333px]" data-name="Paragraph">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[18.496px] left-0 not-italic text-[#8c8c8c] text-[10.88px] top-[-0.33px] w-[760px]">A bird migration metaphor PSA examining urban development and displacement. AI-generated visuals blend with motion graphics to create a cinematic narrative about belonging, habitat, and the cost of progress.</p>
    </div>
  );
}

function Text78() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid h-[21.063px] left-0 top-0 w-[104.271px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[9.59px] not-italic text-[#8c8c8c] text-[8.8px] top-[3.2px] tracking-[1.056px] uppercase whitespace-nowrap">After Effects</p>
    </div>
  );
}

function Text79() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid h-[21.063px] left-[110.67px] top-0 w-[84.938px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[9.59px] not-italic text-[#8c8c8c] text-[8.8px] top-[3.2px] tracking-[1.056px] uppercase whitespace-nowrap">Midjourney</p>
    </div>
  );
}

function Text80() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid h-[21.063px] left-[202px] top-0 w-[72.063px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[9.59px] not-italic text-[#8c8c8c] text-[8.8px] top-[3.2px] tracking-[1.056px] uppercase whitespace-nowrap">Premiere</p>
    </div>
  );
}

function Text81() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid h-[21.063px] left-[280.46px] top-0 w-[59.177px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[9.59px] not-italic text-[#8c8c8c] text-[8.8px] top-[3.2px] tracking-[1.056px] uppercase whitespace-nowrap">Runway</p>
    </div>
  );
}

function Container172() {
  return (
    <div className="absolute h-[21.063px] left-[40px] top-[187.75px] w-[765.333px]" data-name="Container">
      <Text78 />
      <Text79 />
      <Text80 />
      <Text81 />
    </div>
  );
}

function Container173() {
  return (
    <div className="absolute h-[64px] left-[770.13px] top-[24px] w-[51.208px]" data-name="Container">
      <p className="absolute font-['Bebas_Neue:Regular',sans-serif] leading-[64px] left-0 not-italic text-[64px] text-[rgba(255,255,255,0.04)] top-[-3px] whitespace-nowrap">11</p>
    </div>
  );
}

function VideoUrban() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div
      className="absolute inset-x-0 top-[220px] bottom-0 bg-black cursor-pointer"
      data-name="video urban"
      onClick={toggle}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-contain block"
        controlsList="nodownload"
        loop
        playsInline
        onEnded={() => setPlaying(false)}
      >
        <source src="/videos/urban-relocation.mp4" type="video/mp4" />
      </video>
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[64px] h-[64px] rounded-full bg-[rgba(10,95,255,0.85)] flex items-center justify-center">
            <svg width="26" height="28" viewBox="0 0 26 28" fill="none">
              <path d="M2 2L24 14L2 26V2Z" fill="white" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

function UrbanRelocationProgramContainer() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="urban relocation program Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container170 />
        <Container171 />
        <Paragraph15 />
        <Container172 />
        <Container173 />
        <VideoUrban />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.667px] border-r-[0.667px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container165() {
  return (
    <div className="bg-[#0a0a0a] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[760px] pb-[0.667px] relative shrink-0 w-[1715px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
      <ToothRevolutinContainer />
      <UrbanRelocationProgramContainer />
    </div>
  );
}

function Container174() {
  return (
    <div className="absolute font-['Bebas_Neue:Regular',sans-serif] h-[201.583px] leading-[100.8px] left-[64px] not-italic text-[112px] top-[64.67px] w-[1337.76px] whitespace-nowrap" data-name="Container">
      <p className="absolute left-0 text-[#f0f0ee] top-[-5.67px]">THANK</p>
      <p className="absolute left-0 text-[#0a5fff] top-[95.13px]">YOU</p>
    </div>
  );
}

function Text82() {
  return (
    <div className="h-[16px] relative shrink-0 w-[194.24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-full absolute font-['Space_Mono:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] left-[194.46px] text-[#8c8c8c] text-[10.4px] text-right top-[0.67px] tracking-[2.08px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          贺嘉昕 / He Jiaxin
        </p>
      </div>
    </div>
  );
}

function Text83() {
  return (
    <div className="h-[15.333px] relative shrink-0 w-[194.24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8c8c8c] text-[10.4px] text-right tracking-[2.08px] uppercase whitespace-nowrap">Digital Media Art — CUC</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[15.333px] relative shrink-0 w-[194.24px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Space_Mono:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#8c8c8c] text-[10.4px] text-right tracking-[2.08px] uppercase">bbds2802@gmail.com</p>
      </div>
    </div>
  );
}

function Text84() {
  return (
    <div className="h-[15.333px] relative shrink-0 w-[194.24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Space_Mono:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#8c8c8c] text-[10.4px] text-right tracking-[2.08px] uppercase">WeChat: NotAnother666</p>
      </div>
    </div>
  );
}

function Text85() {
  return (
    <div className="h-[15.333px] relative shrink-0 w-[194.24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Space_Mono:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#8c8c8c] text-[10.4px] text-right tracking-[2.08px] uppercase">Tel: 17377739709</p>
      </div>
    </div>
  );
}

function Container175() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12.792px] h-[128.5px] items-start left-[1433.76px] top-[137.75px] w-[194.24px]" data-name="Container">
      <Text82 />
      <Text83 />
      <Link />
      <Text84 />
      <Text85 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#0a0a0a] h-[330px] relative shrink-0 w-[1719px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-solid border-t-[0.667px] inset-0 pointer-events-none" />
      <Container174 />
      <Container175 />
    </div>
  );
}

import { MarqueeNav } from "../app/components/MarqueeNav";

export default function Body() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col items-start relative size-full" data-name="Body">
      <Section />
      <MarqueeNav />
      <Section1 />
      <Container41 />
      <Container45 />
      <Container52 />
      <Container57 />
      <Container95 />
      <Container100 />
      <Container124 />
      <Container129 />
      <GarphicDesignContainer />
      <WhispersOfThePastContainer />
      <TreeSearchContainer />
      <BoundlessJourneyContainer />
      <MotionGraphicArtContainer />
      <Container165 />
      <Footer />
    </div>
  );
}