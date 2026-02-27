import { NextRequest, NextResponse } from 'next/server';
import { MYCOMPONENTS } from '@/data/mycomponents';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get('category');
  const search = searchParams.get('search');

  let result = MYCOMPONENTS;
  if (category) result = result.filter(c => c.category === category);
  if (search) {
    const q = search.toLowerCase();
    result = result.filter(c =>
      c.name.toLowerCase().includes(q) ||
      c.tags.some(t => t.includes(q))
    );
  }

  // CMS integration point: replace static data with CMS fetch
  // const cms = await fetch(`${process.env.CMS_API_URL}/api/components`, {
  //   headers: { Authorization: `Bearer ${process.env.CMS_API_TOKEN}` }
  // });

  return NextResponse.json({ data: result, total: result.length });
}
