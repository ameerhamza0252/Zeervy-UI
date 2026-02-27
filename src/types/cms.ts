// CMS integration types
// When you connect a CMS, map its response to these interfaces

export interface CMSComponent {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  code: string;
  animationType: string;
  isNew: boolean;
  isPremium: boolean;
  createdAt: string;
  updatedAt: string;
}

// Adapter function to map CMS data to our internal format
export function mapCMSComponent(cmsData: CMSComponent) {
  return {
    id: cmsData.id,
    slug: cmsData.slug,
    name: cmsData.name,
    description: cmsData.description,
    category: cmsData.category as import('@/data/components').ComponentCategory,
    tags: cmsData.tags,
    code: cmsData.code,
    animationType: cmsData.animationType,
    isNew: cmsData.isNew,
    isPremium: cmsData.isPremium,
    preview: '',
  };
}
