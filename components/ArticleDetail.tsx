import Image from "next/image";
import { Article } from "@/types/article";
import { formatDate } from "@/utils/formatDate";

export default function ArticleDetail({ article }: { article: Article }) {
  return (
    <main className="mt-24 max-w-3xl mx-auto p-4">
      <h1 className="text-xl font-bold text-center">{article.title}</h1>
      <p className="text-gray-500 text-sm font-bold mt-6 text-center">
        {formatDate(article.publishedAt)}
      </p>

      <div className="relative bg-green p-2 mt-12">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={article.image?.url || "/posterImg.jpg"}
            layout="fill"
            objectFit="cover"
            alt={article.title}
          />
        </div>
      </div>

      <div
        className="mt-32 mb-32 prose prose-lg mx-24"
        dangerouslySetInnerHTML={{ __html: article.body }}
      />
    </main>
  );
}
