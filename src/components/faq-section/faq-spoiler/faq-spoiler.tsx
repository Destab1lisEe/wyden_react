import { ISpoiler } from "../../../models";
import { SpoilerArrow } from "../../spoiler-arrow";

interface SpoilerProps {
  spoiler: ISpoiler;
}

export function Spoiler(props: SpoilerProps) {
  return (
    <details className="mb-[26px] details">
      <summary><h3 className="flex items-center justify-between gap-[15px] font-bold text-[24px]">{props.spoiler.title} <SpoilerArrow /></h3></summary>
      <p className="mt-[20px] leading-[150%]">{props.spoiler.description}</p>
    </details>
  );
}
