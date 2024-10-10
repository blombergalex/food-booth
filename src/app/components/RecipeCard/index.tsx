import Link from "next/link";
import Image from "next/image";
import { RecipeCardType } from "@/utils/types";

const RecipeCard = ({linkSource, imageSource, altText, title}: RecipeCardType) => {
  return (
  <div
    className="m-2 p-6 bg-zinc-900 rounded-3xl w-[300px] items-center"
  >
    <Link
      className="flex flex-col font-semibold text-center items-center text-slate-200"
      href={linkSource}
    >
      <Image
        src={imageSource}
        width={220}
        height={220}
        alt={altText}
        className="rounded-lg m-3"
      />
      {title}
    </Link>
  </div>
  )
}

export default RecipeCard