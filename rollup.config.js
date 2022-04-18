// https://rollupjs.org/guide/en/#configuration-files

export default (_ctx) => ({
  input: "./output/typescript/index.js",
  output: [
    {
      file: "./dist/index.esm.js",
      format: "esm",
    },
  ],
})
