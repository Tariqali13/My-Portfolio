import Image from "next/image";
import type { Shot } from "@/data/portfolio";

type Props = {
  host: string;
  shot: Shot;
  /**
   * Full-page screenshots are taller than the frame: they scroll through
   * the page when the frame is hovered or focused.
   */
  scrolls?: boolean;
  priority?: boolean;
};

export function BrowserFrame({ host, shot, scrolls = false, priority = false }: Props) {
  return (
    <figure
      className={`browser ${scrolls ? "browserScrolls" : ""}`}
      tabIndex={scrolls ? 0 : undefined}
      aria-label={scrolls ? `${shot.alt}. Hover or focus to scroll the page.` : undefined}
    >
      <div className="browserBar" aria-hidden="true">
        <span className="browserDots">
          <i />
          <i />
          <i />
        </span>
        <span className="browserUrl">{host}</span>
      </div>
      <div className="browserView">
        {scrolls ? (
          // Plain img: next/image would constrain a 960×4000 image to the frame's box.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={shot.src} alt={shot.alt} loading="lazy" decoding="async" />
        ) : (
          <Image
            src={shot.src}
            alt={shot.alt}
            width={1200}
            height={750}
            sizes="(max-width: 900px) 100vw, 640px"
            priority={priority}
          />
        )}
      </div>
    </figure>
  );
}
