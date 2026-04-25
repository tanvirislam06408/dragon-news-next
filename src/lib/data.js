export const newsData = async (categoryId) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`);
  const data = await res.json();
  return await data.data;
}


export const newsCategories = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data = await res.json();
  return await data.data;
}