import * as esbuild from 'esbuild';

await esbuild
    .build({
        logLevel: "info",
        entryPoints: ["./src/wiki/wiki.js"],
        bundle: true,
        minify: true,
        outfile: "dist/wiki/wiki.js",
    })
    .catch(() => process.exit(1))
;
