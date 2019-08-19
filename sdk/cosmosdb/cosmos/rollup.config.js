import resolve from "rollup-plugin-local-resolve";
export default [
  {
    input: "dist-esm/src/index.js",
    output: {
      file: "dist/index.js",
      format: "umd",
      name: "Microsoft.Azure.Cosmos",
      sourcemap: true
    },
    plugins: [resolve()]
  }
];
