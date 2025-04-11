import DuaList from '@/components/DuaList';

interface Props {
  params: {
    cat_id: string;
    sub_id: string;
  };
}

export default async function SubcategoryPage({ params }: Props) {
  const { cat_id, sub_id } = params;

  return (
    <div>
      <DuaList catId={cat_id} subId={sub_id} />
    </div>
  );
}
