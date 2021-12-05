export const getNameParts = (name: string) => {
  const nameParts = name.split("/").filter((part: string) => !!part);
  return nameParts.map((part: string) => part.trim());
};
