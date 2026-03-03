module.exports = {
  content: [
    './_layouts/**/*.{html,md}',
    './**/*.{html,md,markdown}'
  ],
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark']
  }
};
