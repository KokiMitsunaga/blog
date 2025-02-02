export type Article = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  slug: string;
  openDay: string;
  image?: {
    url: string;
    height: number;
    width: number;
  };
  body: string;
};
