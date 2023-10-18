import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import eslintPlugin from '@nabla/vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr(), eslintPlugin()],
    server: {
        port: 3000,
    },
});
