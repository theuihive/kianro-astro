// get unique categories
export const getUniqueCategories = (posts: any[]) => {
  const publishedPosts = posts.filter((post) => !post.data.draft);
  const allCategories = publishedPosts.map((post) => post.data.category).filter(Boolean);
  const uniqueCategoriesMap = new Map();

  allCategories.forEach((cat) => {
    if (!uniqueCategoriesMap.has(cat.slug)) {
      uniqueCategoriesMap.set(cat.slug, cat);
    }
  });

  return Array.from(uniqueCategoriesMap.values());
};

// Format date
export const formatPostDate = (date: Date): string =>
  date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
