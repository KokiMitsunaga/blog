import Image from "next/image";
import Link from "next/link";
import { Article } from "@/types/article";
import { formatDate } from "@/utils/formatDate";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link key={article.id} href={`/${article.id}`} className="block">
      <div className="border rounded-lg p-4 hover:bg-gray-50 transition">
        <Image
          src={article.image?.url || "/posterImg.jpg"}
          width={600}
          height={400}
          alt={article.title}
          className="w-full h-48 object-cover rounded-md"
        />
        <h2 className="text-xl font-semibold mt-4">{article.title}</h2>
        <p className="text-gray-500 text-sm mt-2">
          {formatDate(article.publishedAt)}
        </p>
      </div>
    </Link>
  );
}
