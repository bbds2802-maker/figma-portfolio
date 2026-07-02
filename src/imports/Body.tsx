diff --git a/src/imports/Body.tsx b/src/imports/Body.tsx
index d8d93c1..b56a872 100644
--- a/src/imports/Body.tsx
+++ b/src/imports/Body.tsx
@@ -698,7 +698,7 @@ function Container38() {
 
 function Container27() {
   return (
-    <div className="col-1 h-[549.208px] justify-self-stretch relative row-1 shrink-0" data-name="Container">
+    <div className="col-1 h-[605.55px] justify-self-stretch relative row-1 shrink-0" data-name="Container">
       <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-r-[0.667px] border-solid inset-0 pointer-events-none" />
       <Container28 />
       <Container29 />
@@ -717,7 +717,7 @@ function Container40() {
   );
 }
 
-function Text28() {
+function TextPaper() {
   return (
     <div className="absolute h-[13.198px] left-0 top-[2px] w-[12.531px]" data-name="Text">
       <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[13.2px] left-0 not-italic text-[#0a5fff] text-[8.8px] top-[-0.67px] tracking-[0.88px] whitespace-nowrap">01</p>
@@ -725,9 +725,26 @@ function Text28() {
   );
 }
 
-function ListItem() {
+function ListItemPaper() {
   return (
     <div className="absolute border-[rgba(255,255,255,0.05)] border-b-[0.667px] border-solid h-[37.146px] left-0 top-0 w-[718px]" data-name="List Item">
+      <TextPaper />
+      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[17.28px] left-[28.53px] not-italic text-[#8c8c8c] text-[11.52px] top-0 whitespace-nowrap">{`CoST 2026 International Academic Conference — Published Paper "Digital Art Therapy" (First Author)`}</p>
+    </div>
+  );
+}
+
+function Text28() {
+  return (
+    <div className="absolute h-[13.198px] left-0 top-[2px] w-[12.531px]" data-name="Text">
+      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[13.2px] left-0 not-italic text-[#0a5fff] text-[8.8px] top-[-0.67px] tracking-[0.88px] whitespace-nowrap">02</p>
+    </div>
+  );
+}
+
+function ListItem() {
+  return (
+    <div className="absolute border-[rgba(255,255,255,0.05)] border-b-[0.667px] border-solid h-[37.146px] left-0 top-[56.34px] w-[718px]" data-name="List Item">
       <Text28 />
       <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[17.28px] left-[28.53px] not-italic text-[#8c8c8c] text-[11.52px] top-0 whitespace-nowrap">Silk Road National English Vocabulary Competition — 1st Prize</p>
     </div>
@@ -737,14 +754,14 @@ function ListItem() {
 function Text29() {
   return (
     <div className="absolute h-[13.198px] left-0 top-[2px] w-[12.531px]" data-name="Text">
-      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[13.2px] left-0 not-italic text-[#0a5fff] text-[8.8px] top-[-0.67px] tracking-[0.88px] whitespace-nowrap">02</p>
+      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[13.2px] left-0 not-italic text-[#0a5fff] text-[8.8px] top-[-0.67px] tracking-[0.88px] whitespace-nowrap">03</p>
     </div>
   );
 }
 
 function ListItem1() {
   return (
-    <div className="absolute border-[rgba(255,255,255,0.05)] border-b-[0.667px] border-solid h-[37.146px] left-0 top-[56.34px] w-[718px]" data-name="List Item">
+    <div className="absolute border-[rgba(255,255,255,0.05)] border-b-[0.667px] border-solid h-[37.146px] left-0 top-[112.69px] w-[718px]" data-name="List Item">
       <Text29 />
       <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[17.28px] left-[28.53px] not-italic text-[#8c8c8c] text-[11.52px] top-0 whitespace-nowrap">BETT Cup National English Reading Competition — National 1st Prize</p>
     </div>
@@ -754,14 +771,14 @@ function ListItem1() {
 function Text30() {
   return (
     <div className="absolute h-[13.198px] left-0 top-[2px] w-[12.531px]" data-name="Text">
-      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[13.2px] left-0 not-italic text-[#0a5fff] text-[8.8px] top-[-0.67px] tracking-[0.88px] whitespace-nowrap">03</p>
+      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[13.2px] left-0 not-italic text-[#0a5fff] text-[8.8px] top-[-0.67px] tracking-[0.88px] whitespace-nowrap">04</p>
     </div>
   );
 }
 
 function ListItem2() {
   return (
-    <div className="absolute border-[rgba(255,255,255,0.05)] border-b-[0.667px] border-solid h-[37.146px] left-0 top-[112.69px] w-[718px]" data-name="List Item">
+    <div className="absolute border-[rgba(255,255,255,0.05)] border-b-[0.667px] border-solid h-[37.146px] left-0 top-[169.03px] w-[718px]" data-name="List Item">
       <Text30 />
       <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[17.28px] left-[28.53px] not-italic text-[#8c8c8c] text-[11.52px] top-0 whitespace-nowrap">{`2025 "Eastern Aesthetics" Art Design — 3rd Prize`}</p>
     </div>
@@ -771,14 +788,14 @@ function ListItem2() {
 function Text31() {
   return (
     <div className="absolute h-[13.198px] left-0 top-[2px] w-[12.531px]" data-name="Text">
-      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[13.2px] left-0 not-italic text-[#0a5fff] text-[8.8px] top-[-0.67px] tracking-[0.88px] whitespace-nowrap">04</p>
+      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[13.2px] left-0 not-italic text-[#0a5fff] text-[8.8px] top-[-0.67px] tracking-[0.88px] whitespace-nowrap">05</p>
     </div>
   );
 }
 
 function ListItem3() {
   return (
-    <div className="absolute border-[rgba(255,255,255,0.05)] border-b-[0.667px] border-solid h-[37.146px] left-0 top-[169.03px] w-[718px]" data-name="List Item">
+    <div className="absolute border-[rgba(255,255,255,0.05)] border-b-[0.667px] border-solid h-[37.146px] left-0 top-[225.38px] w-[718px]" data-name="List Item">
       <Text31 />
       <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[17.28px] left-[28.53px] not-italic text-[#8c8c8c] text-[11.52px] top-0 whitespace-nowrap">4th Hainan International Designer Competition — Creative Design Award</p>
     </div>
@@ -788,14 +805,14 @@ function ListItem3() {
 function Text32() {
   return (
     <div className="absolute h-[13.198px] left-0 top-[2px] w-[12.531px]" data-name="Text">
-      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[13.2px] left-0 not-italic text-[#0a5fff] text-[8.8px] top-[-0.67px] tracking-[0.88px] whitespace-nowrap">05</p>
+      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[13.2px] left-0 not-italic text-[#0a5fff] text-[8.8px] top-[-0.67px] tracking-[0.88px] whitespace-nowrap">06</p>
     </div>
   );
 }
 
 function ListItem4() {
   return (
-    <div className="absolute border-[rgba(255,255,255,0.05)] border-b-[0.667px] border-solid h-[37.146px] left-0 top-[225.38px] w-[718px]" data-name="List Item">
+    <div className="absolute border-[rgba(255,255,255,0.05)] border-b-[0.667px] border-solid h-[37.146px] left-0 top-[281.72px] w-[718px]" data-name="List Item">
       <Text32 />
       <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[17.28px] left-[28.53px] not-italic text-[#8c8c8c] text-[11.52px] top-0 whitespace-nowrap">24th Shanghai International College Student Advertising Festival — 3rd Prize</p>
     </div>
@@ -805,14 +822,14 @@ function ListItem4() {
 function Text33() {
   return (
     <div className="absolute h-[13.198px] left-0 top-[2px] w-[12.531px]" data-name="Text">
-      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[13.2px] left-0 not-italic text-[#0a5fff] text-[8.8px] top-[-0.67px] tracking-[0.88px] whitespace-nowrap">06</p>
+      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[13.2px] left-0 not-italic text-[#0a5fff] text-[8.8px] top-[-0.67px] tracking-[0.88px] whitespace-nowrap">07</p>
     </div>
   );
 }
 
 function ListItem5() {
   return (
-    <div className="absolute border-[rgba(255,255,255,0.05)] border-b-[0.667px] border-solid h-[37.146px] left-0 top-[281.72px] w-[718px]" data-name="List Item">
+    <div className="absolute border-[rgba(255,255,255,0.05)] border-b-[0.667px] border-solid h-[37.146px] left-0 top-[338.06px] w-[718px]" data-name="List Item">
       <Text33 />
       <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[17.28px] left-[28.53px] not-italic text-[#8c8c8c] text-[11.52px] top-0 whitespace-nowrap">Yuanmingyuan 5th Cultural Creative Design Competition — 3rd Prize</p>
     </div>
@@ -822,14 +839,14 @@ function ListItem5() {
 function Text34() {
   return (
     <div className="absolute h-[13.198px] left-0 top-[2px] w-[12.531px]" data-name="Text">
-      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[13.2px] left-0 not-italic text-[#0a5fff] text-[8.8px] top-[-0.67px] tracking-[0.88px] whitespace-nowrap">07</p>
+      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[13.2px] left-0 not-italic text-[#0a5fff] text-[8.8px] top-[-0.67px] tracking-[0.88px] whitespace-nowrap">08</p>
     </div>
   );
 }
 
 function ListItem6() {
   return (
-    <div className="absolute border-[rgba(255,255,255,0.05)] border-b-[0.667px] border-solid h-[37.146px] left-0 top-[338.06px] w-[718px]" data-name="List Item">
+    <div className="absolute border-[rgba(255,255,255,0.05)] border-b-[0.667px] border-solid h-[37.146px] left-0 top-[394.4px] w-[718px]" data-name="List Item">
       <Text34 />
       <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[17.28px] left-[28.53px] not-italic text-[#8c8c8c] text-[11.52px] top-0 whitespace-nowrap">China International Chamber of Commerce Silk Road Recommendation Letter</p>
     </div>
@@ -838,7 +855,8 @@ function ListItem6() {
 
 function List() {
   return (
-    <div className="h-[375.208px] relative shrink-0 w-full" data-name="List">
+    <div className="h-[431.55px] relative shrink-0 w-full" data-name="List">
+      <ListItemPaper />
       <ListItem />
       <ListItem1 />
       <ListItem2 />
@@ -852,7 +870,7 @@ function List() {
 
 function Container39() {
   return (
-    <div className="col-2 h-[549.208px] justify-self-stretch relative row-1 shrink-0" data-name="Container">
+    <div className="col-2 h-[605.55px] justify-self-stretch relative row-1 shrink-0" data-name="Container">
       <div className="content-stretch flex flex-col gap-[32px] items-start pt-[64px] px-[64px] relative size-full">
         <Container40 />
         <List />
@@ -863,7 +881,7 @@ function Container39() {
 
 function Section1() {
   return (
-    <div className="bg-black grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[550px] pb-[0.667px] relative shrink-0 w-full" data-name="Section">
+    <div className="bg-black grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[606.34px] pb-[0.667px] relative shrink-0 w-full" data-name="Section">
       <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
       <Container27 />
       <Container39 />
@@ -899,6 +917,113 @@ function Container44() {
   );
 }
 
+function ExperienceItem1() {
+  return (
+    <div className="border-[rgba(255,255,255,0.06)] border-b-[0.667px] border-solid flex items-start gap-[24px] py-[28px] w-full" data-name="Experience Item">
+      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative text-[#0a5fff] text-[8.8px] tracking-[0.88px] shrink-0 w-[20px] pt-[2px]">01</p>
+      <div className="flex flex-col gap-[10px] flex-1 min-w-0">
+        <div className="flex items-center justify-between gap-[16px] flex-wrap">
+          <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative text-[#f0f0ee] text-[15px]">新加坡 SPH 联合早报</p>
+          <p className="border-[0.667px] border-[rgba(255,255,255,0.15)] border-solid px-[10px] py-[4px] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative text-[#8c8c8c] text-[8.8px] tracking-[1.2px] uppercase whitespace-nowrap">视觉设计实习生</p>
+        </div>
+        <p className="font-['Space_Mono:Regular',sans-serif] leading-[1.7] not-italic relative text-[#8c8c8c] text-[10.4px]">海外主流媒体：负责品牌IP角色设计与视觉内容产出，参与媒体平台相关视觉物料的设计制作。</p>
+      </div>
+    </div>
+  );
+}
+
+function ExperienceItem2() {
+  return (
+    <div className="border-[rgba(255,255,255,0.06)] border-b-[0.667px] border-solid flex items-start gap-[24px] py-[28px] w-full" data-name="Experience Item">
+      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative text-[#0a5fff] text-[8.8px] tracking-[0.88px] shrink-0 w-[20px] pt-[2px]">02</p>
+      <div className="flex flex-col gap-[10px] flex-1 min-w-0">
+        <div className="flex items-center justify-between gap-[16px] flex-wrap">
+          <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative text-[#f0f0ee] text-[15px]">北京无限探索有限公司</p>
+          <p className="border-[0.667px] border-[rgba(255,255,255,0.15)] border-solid px-[10px] py-[4px] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative text-[#8c8c8c] text-[8.8px] tracking-[1.2px] uppercase whitespace-nowrap">{`AI Agent产品增长 · 海外实习生`}</p>
+        </div>
+        <p className="font-['Space_Mono:Regular',sans-serif] leading-[1.7] not-italic relative text-[#8c8c8c] text-[10.4px]">负责AI Agent产品的海外增长策略与执行，参与产品出海运营及用户增长相关工作。</p>
+      </div>
+    </div>
+  );
+}
+
+function ExperienceItem3() {
+  return (
+    <div className="border-[rgba(255,255,255,0.06)] border-b-[0.667px] border-solid flex items-start gap-[24px] py-[28px] w-full" data-name="Experience Item">
+      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative text-[#0a5fff] text-[8.8px] tracking-[0.88px] shrink-0 w-[20px] pt-[2px]">03</p>
+      <div className="flex flex-col gap-[10px] flex-1 min-w-0">
+        <div className="flex items-center justify-between gap-[16px] flex-wrap">
+          <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative text-[#f0f0ee] text-[15px]">{`中国传媒大学校团委 · 数字人项目`}</p>
+          <p className="border-[0.667px] border-[rgba(255,255,255,0.15)] border-solid px-[10px] py-[4px] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative text-[#8c8c8c] text-[8.8px] tracking-[1.2px] uppercase whitespace-nowrap">设计与开发</p>
+        </div>
+        <p className="font-['Space_Mono:Regular',sans-serif] leading-[1.7] not-italic relative text-[#8c8c8c] text-[10.4px]">负责中国传媒大学数字人工作的前期设计制作与建模运营。</p>
+      </div>
+    </div>
+  );
+}
+
+function ExperienceItem4() {
+  return (
+    <div className="border-[rgba(255,255,255,0.06)] border-b-[0.667px] border-solid flex items-start gap-[24px] py-[28px] w-full" data-name="Experience Item">
+      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative text-[#0a5fff] text-[8.8px] tracking-[0.88px] shrink-0 w-[20px] pt-[2px]">04</p>
+      <div className="flex flex-col gap-[10px] flex-1 min-w-0">
+        <div className="flex items-center justify-between gap-[16px] flex-wrap">
+          <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative text-[#f0f0ee] text-[15px]">院团委视觉创意中心</p>
+          <p className="border-[0.667px] border-[rgba(255,255,255,0.15)] border-solid px-[10px] py-[4px] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative text-[#8c8c8c] text-[8.8px] tracking-[1.2px] uppercase whitespace-nowrap">部长</p>
+        </div>
+        <p className="font-['Space_Mono:Regular',sans-serif] leading-[1.7] not-italic relative text-[#8c8c8c] text-[10.4px]">策划与执行：负责学院多项活动的视觉设计与宣传物料的策划与产出管理。</p>
+      </div>
+    </div>
+  );
+}
+
+function ExperienceItem5() {
+  return (
+    <div className="flex items-start gap-[24px] pt-[28px] pb-0 w-full" data-name="Experience Item">
+      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative text-[#0a5fff] text-[8.8px] tracking-[0.88px] shrink-0 w-[20px] pt-[2px]">05</p>
+      <div className="flex flex-col gap-[10px] flex-1 min-w-0">
+        <div className="flex items-center justify-between gap-[16px] flex-wrap">
+          <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative text-[#f0f0ee] text-[15px]">设计思维协会</p>
+          <p className="border-[0.667px] border-[rgba(255,255,255,0.15)] border-solid px-[10px] py-[4px] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative text-[#8c8c8c] text-[8.8px] tracking-[1.2px] uppercase whitespace-nowrap">成员</p>
+        </div>
+        <p className="font-['Space_Mono:Regular',sans-serif] leading-[1.7] not-italic relative text-[#8c8c8c] text-[10.4px]">负责校企合作与协会内部运营。</p>
+      </div>
+    </div>
+  );
+}
+
+function ExperienceList() {
+  return (
+    <div className="flex flex-col w-full max-w-[820px]" data-name="Experience List">
+      <ExperienceItem1 />
+      <ExperienceItem2 />
+      <ExperienceItem3 />
+      <ExperienceItem4 />
+      <ExperienceItem5 />
+    </div>
+  );
+}
+
+function WorkExperienceLabel() {
+  return (
+    <div className="content-stretch flex h-[14px] items-center relative shrink-0 w-full" data-name="Container">
+      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0a5fff] text-[9.6px] tracking-[3.36px] uppercase whitespace-nowrap">{`Work Experience`}</p>
+    </div>
+  );
+}
+
+function WorkExperienceSection() {
+  return (
+    <div className="bg-black relative shrink-0 w-full" data-name="Section">
+      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
+      <div className="flex flex-col gap-[32px] items-start pt-[64px] px-[64px] pb-[64px] relative w-full">
+        <WorkExperienceLabel />
+        <ExperienceList />
+      </div>
+    </div>
+  );
+}
+
 function Container41() {
   return (
     <div className="bg-black h-[317px] relative shrink-0 w-full" data-name="Container">
@@ -3160,6 +3285,7 @@ export default function Body() {
       <Section />
       <MarqueeNav />
       <Section1 />
+      <WorkExperienceSection />
       <Container41 />
       <Container45 />
       <Container52 />
