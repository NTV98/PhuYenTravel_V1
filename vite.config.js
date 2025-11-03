import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Ensure correct asset paths when hosted under https://<user>.github.io/<repo>/
  // Defaults to '/' for local dev or non-GitHub builds
  base: process.env.GITHUB_REPOSITORY
    ? `/${process.env.GITHUB_REPOSITORY.split('/').pop()}/`
    : '/',
})


