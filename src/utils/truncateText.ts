

export const truncatedText = (description: string, parentWidth: number, charWidth: number) => {
   
    const maxChars = Math.floor(parentWidth / charWidth);

    return description.length > maxChars ? description.slice(0, maxChars) + "..." : description;
};
