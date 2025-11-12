import { urlFor } from "./sanity";

const USE_MOCK_DATA = process.env.USE_MOCK_DATA === "true";

// Placeholder images from Unsplash (free to use)
const placeholderImages: Record<string, string> = {
  "image-nextjs":
    "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
  "image-typescript":
    "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop",
  "image-github-actions":
    "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop",
  "image-react-performance":
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  "image-tailwind":
    "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=600&fit=crop",
  "image-react-server":
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
  "image-docker":
    "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&h=600&fit=crop",
  "image-accessibility":
    "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop",
  "image-sarah":
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  "image-alex":
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  "image-maria":
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
};

// Get image URL from Sanity image reference or return placeholder
export function getImageUrl(
  imageRef: any,
  width?: number,
  height?: number
): string {
  if (USE_MOCK_DATA && imageRef?.asset?._ref) {
    const ref = imageRef.asset._ref;
    return placeholderImages[ref] || placeholderImages["image-nextjs"];
  }

  try {
    let builder = urlFor(imageRef);
    if (width) builder = builder.width(width);
    if (height) builder = builder.height(height);
    return builder.url();
  } catch (error) {
    // Fallback to placeholder
    return placeholderImages["image-nextjs"];
  }
}

// Get optimized image URL with default settings
export function getOptimizedImageUrl(imageRef: any): string {
  return getImageUrl(imageRef, 800, 600);
}

// Get thumbnail image URL
export function getThumbnailUrl(imageRef: any): string {
  return getImageUrl(imageRef, 400, 300);
}

// Get avatar image URL
export function getAvatarUrl(imageRef: any, size: number = 80): string {
  return getImageUrl(imageRef, size, size);
}
