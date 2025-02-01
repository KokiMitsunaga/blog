import { getArticle } from "@/lib/microcms";
import { Article } from "@/types/article";
import ArticleDetail from "@/components/ArticleDetail";

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const article: Article = await getArticle(slug);

  return <ArticleDetail article={article} />;
}
