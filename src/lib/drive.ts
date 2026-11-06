
export const getEmbedUrl = (url: string) => {
  // YouTube Support
  const youtubeMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:.*v=|\/v\/|embed\/))([^?&]+)/);
  if (youtubeMatch) {
    return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
  }

  // Google Drive Support
  const driveMatch = url.match(/\/d\/([^/]+)/);
  if (driveMatch) {
    return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
  }
  return url;
};

export const getImageUrl = (url: string, size: number = 1000) => {
  // YouTube Thumbnail
  const youtubeMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:.*v=|\/v\/|embed\/))([^?&]+)/);
  if (youtubeMatch) {
    return `https://img.youtube.com/vi/${youtubeMatch[1]}/hqdefault.jpg`;
  }

  // Google Drive Thumbnail
  const driveMatch = url.match(/\/d\/([^/?]+)/);
  return driveMatch ? `https://drive.google.com/thumbnail?id=${driveMatch[1]}&sz=w${size}` : url;
};

export const isDriveVideo = (url: string) => {
  return url?.includes('drive.google.com') || url?.includes('youtube.com') || url?.includes('youtu.be') || url?.endsWith('.mp4');
};
