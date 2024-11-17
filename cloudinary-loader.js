export default function cloudinaryLoader({ src, width, quality }) {
    const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 75}`];
    return `https://res.cloudinary.com/ddr0o2gz5/image/upload/${params.join(',')}${src}`;
  }