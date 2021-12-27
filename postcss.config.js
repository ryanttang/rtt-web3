module.exports = {
  mode: 'jit',
  purge: {
    content : ['./templates/**/*.html'],
    safelist : []
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
