// app/categories/[cat_id]/subcategories/[sub_id]/page.tsx

import DuaList from '@/components/DuaList';

export default async function SubcategoryPage({
  params,
}: {
  params: Promise<{ cat_id: string; sub_id: string }>;
}) {
  const { cat_id, sub_id } = await params;

  return (
    <div>
      <DuaList catId={cat_id} subId={sub_id} />
    </div>
  );
}
