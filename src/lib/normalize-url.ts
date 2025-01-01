export const normalizeUrl = (url: string) => {
  return url?.replaceAll(" ", "_");
};
export const normalizeUrlParams = (url: string) => {
  return url?.replaceAll("_", " ");
};
