import react from '@vitejs/plugin-react';
// @ts-ignore
import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
// @ts-nocheck
import { svgstore } from './src/lib/vite_plugins/svgstore';

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
        }),
        svgstore(),
    ],
    build: {
        sourcemap: true,
        lib: {
            entry: path.resolve(__dirname, 'src/lib/index.ts'),
            name: 'MyLib',
            formats: ['es', 'umd'],
            fileName: (format) => `my-lib.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'styled-components'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'styled-components': 'styled',
                },
            },
        },
    },
});
