import { defineConfig } from 'tsup';

/*
 * Using tsup mainly to be able to compile ts from internal package in this app and thereby also be able to deploy.
 * Althernatively I could compile in the internal packages themselves.
 * See noExternal
 */

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  target: 'es2022',
  sourcemap: true,
  /**
   * The common package is using the internal packages approach, so it needs to
   * be transpiled / bundled together with the deployed code.
   */
  noExternal: ['@repo/types'],
  /**
   * Do not use tsup for generating d.ts files because it can not generate type
   * the definition maps required for go-to-definition to work in our IDE. We
   * use tsc for that.
   */
});
