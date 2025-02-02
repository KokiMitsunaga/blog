import { createClient } from "microcms-js-sdk";
import { Article } from "@/types/article";

export const client = createClient({
  serviceDomain: process.env.MICROCMS_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

export const getArticles = async (): Promise<{ contents: Article[] }> => {
  return await client.get({ endpoint: "articles" });
};

export const getArticle = async (slug: string): Promise<Article> => {
  return await client.get({ endpoint: "articles", contentId: slug });
};
