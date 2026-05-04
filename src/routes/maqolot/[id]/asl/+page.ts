import { error } from '@sveltejs/kit';
import { chapters, featured } from '$lib/maqolot/data.js';
import { getChapterText } from '$lib/reader/chapters/index.js';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  const all = [featured, ...chapters];
  const meta = all.find((c) => c.id === params.id);
  if (!meta) {
    throw error(404, `«${params.id}» — bunday bob topilmadi`);
  }
  const text = getChapterText(params.id);
  return { meta, text };
};
