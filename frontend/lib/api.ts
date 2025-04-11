const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getCategories() {
  const res = await fetch(`${BASE_URL}/categories`);
  return res.json();
}

export async function getSubcategories(catId: number) {
  const res = await fetch(`${BASE_URL}/categories/${catId}/subcategories`);
  return res.json();
}

// export async function getDuas(catId: string, subId: string) {
//   const res = await fetch(`${BASE_URL}/categories/${catId}/subcategories/${subId}/duas`);
//   return res.json();
// }
export async function getDuas(catId: string, subId: string) {
  const res = await fetch(`${BASE_URL}/categories/${catId}/subcategories/${subId}/duas`);
  if (!res.ok) {
    throw new Error(`Failed to fetch duas: ${res.status}`);
  }
  return res.json();
}

