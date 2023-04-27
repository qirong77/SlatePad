import { execSync } from 'child_process'
import { readFileSync, readdirSync, writeFileSync } from 'fs'
execSync('npm run build')
execSync('rollup -c')
const assetsDir = readdirSync('./dist/assets/')
const cssPath = assetsDir.find(path => /css$/.test(path))
const cssContent = readFileSync('./dist/assets/' + cssPath, 'utf-8')
writeFileSync('./package/dist/style.css', cssContent)
