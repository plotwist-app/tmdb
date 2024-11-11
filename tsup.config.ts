import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src'],
  sourcemap: true,
  clean: true,
  dts: true,
  format: ['cjs', 'esm'],
})
