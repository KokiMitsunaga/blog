import Image from "next/image";
import Link from "next/link";
import { Article } from "@/types/article";
import { formatDate } from "@/utils/formatDate";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link key={article.id} href={`/${article.id}`} className="block">
      <div className="relative bg-green p-1">
        <div className="relative aspect-square mx-auto">
          <Image
            src={article.image?.url || "/posterImg.jpg"}
            layout="fill"
            objectFit="cover"
            alt={article.title}
          />
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-base font-medium">{article.title}</h2>
        <p className="text-gray-500 text-base mt-2">
          {formatDate(article.publishedAt)}
        </p>
      </div>
    </Link>
  );
}
