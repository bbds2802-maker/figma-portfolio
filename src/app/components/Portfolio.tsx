import Body from "../../imports/Body";
import { useEffect, useState } from "react";

export function Portfolio() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const designWidth = 1719; // 设计稿的宽度
      const viewportWidth = window.innerWidth;

      if (viewportWidth < designWidth) {
        setScale(viewportWidth / designWidth);
      } else {
        setScale(1);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div className="w-full min-h-screen overflow-x-auto overflow-y-auto bg-[#0a0a0a]">
      <div
        style={{
          width: '1719px',
          transformOrigin: 'top left',
          transform: `scale(${scale})`,
          minHeight: scale < 1 ? `${100 / scale}vh` : '100vh'
        }}
      >
        <Body />
      </div>
    </div>
  );
}
