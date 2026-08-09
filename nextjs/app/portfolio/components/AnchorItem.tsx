import { DisplayItem } from "@/types/portfolio/display_item";
import { useInView } from "motion/react";

export default function AnchorItem({
  displayItem,
}: {
  displayItem: DisplayItem;
}) {
  const isInView = useInView(displayItem.ref, { margin: "-50% 0px -50% 0px" });

  const navigateToSection = () => {
    if (!isInView) {
      displayItem.ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="w-full h-full text-white select-none relative flex items-center py-5 group">
      <div className="absolute flex flex-col -left-5 h-full">
        <div className="opacity-50 border-l border-white/25 flex-1"></div>
        <div
          className={[
            "opacity-50 rounded-full w-3 h-3 bg-white relative -left-1.25 transition-opacity duration-100",
            isInView
              ? "opacity-75"
              : "group-hover:cursor-pointer group-hover:opacity-75",
          ].join(" ")}
          onClick={navigateToSection}
        ></div>
        <div className="opacity-50 border-l border-white/25 flex-1"></div>
      </div>
      <p
        className={[
          "opacity-50 transition-opacity duration-100",
          isInView
            ? "opacity-75 font-bold"
            : "group-hover:cursor-pointer group-hover:font-bold group-hover:opacity-75",
        ].join(" ")}
        onClick={navigateToSection}
      >
        {displayItem.title}
      </p>
    </div>
  );
}
