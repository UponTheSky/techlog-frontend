export const parseTimestamp = (timestamp: string) => {
  const matched = timestamp.match(/^(.+)T/);
  return matched ? matched[1] : null;
};
