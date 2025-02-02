import { getArticle, getArticles } from "@/lib/microcms";
import { Article } from "@/types/article";
import ArticleDetail from "@/components/ArticleDetail";

export default async function ArticlePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const article: Article = await getArticle(slug);

  return <ArticleDetail article={article} />;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const { contents } = await getArticles();
  return contents.map((article) => ({ slug: article.id }));
}
