import { getArticles } from "@/lib/microcms";
import { Article } from "@/types/article";
import ArticleCard from "@/components/ArticleCard";

export default async function BlogPage() {
  const { contents } = await getArticles();

  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-primary mb-6">ブログ一覧</h1>
      <p className="mb-6">
        ご覧いただきありがとうございます。最新記事をお楽しみください！
      </p>
      <div className="grid gap-6">
        {contents.map((article: Article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </main>
  );
}
