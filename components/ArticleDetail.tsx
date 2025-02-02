import Image from "next/image";
import { Article } from "@/types/article";
import { formatDate } from "@/utils/formatDate";

export default function ArticleDetail({ article }: { article: Article }) {
  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold">{article.title}</h1>
      <p className="text-gray-500 text-sm mt-2">
        {formatDate(article.publishedAt)}
      </p>
      <Image
        src={article.image?.url || "/posterImg.jpg"}
        width={800}
        height={500}
        alt={article.title}
        className="w-full h-64 object-cover rounded-md mt-4"
      />
      <div
        className="mt-6 prose prose-lg"
        dangerouslySetInnerHTML={{ __html: article.body }}
      />
    </main>
  );
}
