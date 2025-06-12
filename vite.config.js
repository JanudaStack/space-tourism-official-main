import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
    plugins: [react()],
    base: mode === 'production' ? '/space-tourism-official-main/' : '/', // Use different base paths for production and development
}));
