declare module 'tailwindcss/lib/util/flattenColorPalette.js' {
  import { Config } from 'tailwindcss';

  type Colors = Config['theme']['colors'];

  /**
   * Flattens a nested color palette object into a flat object with string keys.
   * @param colors - The nested color palette object from Tailwind CSS.
   * @returns A flat color palette object with keys like 'blue-500', 'red-200', etc.
   */
  function flattenColorPalette(colors: Colors): Record<string, string>;
  export = flattenColorPalette;
}
