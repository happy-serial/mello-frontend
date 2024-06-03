export const htmlToText = (html: string) => {
  const regex = /(<([^>]+)>)/gi;
  const pureText = html.replace(regex, " ").trim().replace(/\s+/g, " ");
  return pureText;
};

export const dateParser = (input: string): string => {
  const date = new Date(input);

  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);

  return `${year}.${month}.${day}`;
};
