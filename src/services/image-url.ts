const getCroppedImageUrl = (url: string) => {
  try {
    const target = "media/";
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + "crop/600/400/" + url.slice(index);
  } catch {
    return url;
  }
};

export default getCroppedImageUrl;
