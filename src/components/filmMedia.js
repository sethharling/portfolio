const GIF_FILES = ['vid1.gif', 'vid2.gif', 'vid3.gif', 'vid4.gif', 'vid5.gif', 'vid7.gif', 'vid8.gif'];

export const pickFilmFile = () => GIF_FILES[Math.floor(Math.random() * GIF_FILES.length)];

export const getFilmSource = (file, reduceMotion) => {
  const animationFile = file === 'vid3.gif' ? `${file}?v=2` : file;
  return `${process.env.PUBLIC_URL}/vids/${reduceMotion ? file.replace(/\.gif$/, '.png') : animationFile}`;
};
