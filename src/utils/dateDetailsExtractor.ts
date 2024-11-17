export const monthShortener = (date: string): string => {
  const shortenedMonth = date.slice(3, 6);
  return shortenedMonth;
};


export const dayExtractor = (date: string): string => {
  const day = date.slice(0,2)
  return day
}

export const yearExtractor = (date: string): string =>{
  const year = date.slice(-4)
  return year
}