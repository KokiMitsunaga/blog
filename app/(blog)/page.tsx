import { getArticles } from "@/lib/microcms";
import { Article } from "@/types/article";
import ArticleCard from "@/components/ArticleCard";

export default async function BlogPage() {
  const { contents } = await getArticles();

  return (
    <main className="max-w-5xl mt-32 mx-auto p-4">
      <p className="text-center leading-relaxed">
        ご覧いただきありがとうございます。最新記事をお楽しみください。
      </p>

      <div className="mt-32 mb-32 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-10">
        {contents.map((article: Article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </main>
  );
}
