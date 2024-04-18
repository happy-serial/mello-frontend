export const htmlToText = (html: string) => {
  const regex = /(<([^>]+)>)/gi;
  const pureText = html.replace(regex, " ").trim().replace(/\s+/g, " ");
  return pureText;
};
