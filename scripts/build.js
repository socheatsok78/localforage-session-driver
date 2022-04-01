const esbuild = require('esbuild')
require('rimraf').sync('index.js')

const NODE_ENV = process.env.NODE_ENV || 'development'

const options = {
    minify: false,
}

if (NODE_ENV === 'production')  {
    options.minify = true
}

console.log(`Building for ${NODE_ENV}...`)

let result = esbuild.buildSync({
    entryPoints: ['src/index.js'],
    bundle: true,
    platform: 'node',
    target: [
        'es2020',
        'chrome58',
        'firefox57',
        'safari11',
        'edge16',
        'node12',
    ],
    external: ['./node_modules/*'],
    outfile: 'index.js',
    minify: options.minify,
    metafile: true
})

let text = esbuild.analyzeMetafileSync(result.metafile, {
    verbose: true,
})
console.log(text)
