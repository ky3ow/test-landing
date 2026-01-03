# AGENTS.md

This file provides guidelines and commands for agentic coding tools working in this Astro-based static site repository. It includes build/lint/test commands, code style guidelines, and any applicable Cursor or Copilot rules. Follow these to maintain consistency and quality.

**Important Agent Rule**: Do not ever run the dev server yourself (e.g., avoid `bun run dev`). Only run it if explicitly requested by the user.

## Build, Lint, and Test Commands

### Build Commands
- **Development server**: `bun run dev` - Starts the local development server on `localhost:4321`.
- **Production build**: `bun run build` - Builds the site for production into the `./dist/` directory.
- **Preview build**: `bun run preview` - Previews the built site locally before deployment.

### Lint and Type Check Commands
- **Type checking**: `astro check` - Runs TypeScript type checking across the project. Add this to `package.json` scripts if not present: `"typecheck": "astro check"`, then run `bun run typecheck`.
- **Linting**: Currently not configured. To add ESLint for code quality:
  1. Install dependencies: `bun add -D eslint @astrojs/eslint-config`
  2. Create `.eslintrc.cjs`: `export default [require("@astrojs/eslint-config")];`
  3. Add script: `"lint": "eslint . --ext .js,.ts,.astro"` in `package.json`.
  4. Run: `bun run lint` to check for issues, `bun run lint --fix` to auto-fix.
- **Formatting**: Not configured. To add Prettier for consistent formatting:
  1. Install: `bun add -D prettier prettier-plugin-astro`
  2. Create `.prettierrc`: `{ "semi": true, "singleQuote": false, "tabWidth": 2 }`
  3. Add script: `"format": "prettier --write ."` in `package.json`.
  4. Run: `bun run format`

### Test Commands
- **Testing framework**: Not currently set up. To add Vitest for unit/integration tests:
  1. Install: `bun add -D vitest @astrojs/test`
  2. Update Astro config: Add `test: { include: ['src/**/*.{test,spec}.{js,ts}'] }` to `astro.config.mjs`.
  3. Add script: `"test": "vitest"` in `package.json`.
  4. Run all tests: `bun run test`
  5. **Run a single test**: `bun run test --run path/to/test.spec.ts` (replace with actual test file path).
  6. Watch mode: `bun run test --watch`
  7. Coverage: `bun run test --coverage`
- Example test file structure: Place tests in `src/` with `.test.ts` or `.spec.ts` extensions, e.g., `src/components/Header.test.ts`.

Always run type checking (`astro check`) before committing changes. If linting is added, run `bun run lint` and fix issues. For tests, run the full suite before PRs.

## Code Style Guidelines

### Language and Framework Conventions
- **Primary language**: TypeScript for all new code. Use `.ts` for utility files, `.astro` for components/pages.
- **Framework**: Astro for static site generation. Use Astro components for UI, integrate React/Vue if needed (but prefer Astro for simplicity).
- **Content management**: Use Astro's content collections with Zod schemas in `src/content.config.ts`. Avoid direct file manipulation; use loaders like `glob`.
- **Styling**: TailwindCSS for utility-first CSS. Avoid custom CSS unless necessary; prefer Tailwind classes for responsiveness and consistency.

### Imports and Modules
- **Import style**: Use ES6 imports. Prefer absolute imports with path aliases (e.g., `@/components/Header` from `tsconfig.json` paths).
- **Relative imports**: Only for files in the same directory or closely related (e.g., `../layouts/Base`).
- **Unused imports**: Comment out or remove them immediately. Do not leave unused imports (e.g., `// import { Image } from "astro:assets";` if commented).
- **Library imports**: Group external libraries first, then internal imports. Alphabetize within groups.
- **Example**:
  ```typescript
  import { defineCollection, z } from "astro:content";
  import BaseLayout from "@/layouts/Base.astro";
  import { someUtil } from "@/utils/helpers";
  ```

### Formatting and Structure
- **Indentation**: 2 spaces (default in Prettier config suggested above).
- **Line length**: Aim for 80-100 characters; break long lines.
- **Semicolons**: Use semicolons (as per suggested Prettier).
- **Quotes**: Double quotes for strings (suggested in Prettier).
- **File structure**: Follow Astro conventions:
  - Components in `src/components/` (PascalCase filenames, e.g., `Header.astro`).
  - Pages in `src/pages/` (kebab-case for routes, e.g., `about-us.astro`).
  - Layouts in `src/layouts/` (PascalCase).
  - Content in `src/content/` with collections.
  - Assets in `src/assets/` or `public/`.
- **Frontmatter in Astro**: Use for page metadata (title, description). Keep it minimal and typed.

### Naming Conventions
- **Variables/Functions**: camelCase (e.g., `getUserData`, `isValidEmail`).
- **Components**: PascalCase (e.g., `HeaderComponent`, `EventList`).
- **Files**: PascalCase for components/layouts, camelCase for utilities (e.g., `utils.ts`).
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`).
- **Types/Interfaces**: PascalCase (e.g., `UserProfile`, `EventData`).
- **Content collections**: camelCase (e.g., `pages`, `blogPosts` in `content.config.ts`).
- **CSS classes**: Kebab-case for custom classes (though prefer Tailwind utilities).

### Types and TypeScript
- **Strict mode**: Enabled via `astro/tsconfigs/strict`. Use explicit types; avoid `any`.
- **Interfaces vs Types**: Use `interface` for object shapes, `type` for unions/primitives.
- **Zod schemas**: For content collections, define schemas with Zod in `content.config.ts`. Ensure all fields are validated.
- **Optional fields**: Use `?.` for safe access, or conditional checks.
- **Generics**: Use when appropriate for reusable components (e.g., `Component<Props>`).

### Error Handling and Best Practices
- **Async operations**: Use `async/await` with try-catch blocks. Handle errors gracefully (e.g., show user-friendly messages).
- **Validation**: Validate user inputs and API responses. Use Zod for runtime checks.
- **Security**: Avoid exposing secrets; never commit API keys. Use environment variables for sensitive data.
- **Performance**: Optimize images with Astro's Image component. Minimize bundle size; lazy-load non-critical components.
- **Accessibility**: Use semantic HTML, alt text for images, ARIA labels where needed. Ensure color contrast in Tailwind classes.
- **Comments**: Add comments for complex logic or business rules. Avoid obvious comments (e.g., no `// increment i`).
- **Commits**: Use conventional commits (e.g., `feat: add dark mode toggle`). Keep commits atomic.
- **PRs**: Include description, link to issues. Run checks before submitting.

### CMS Integration (Sveltia)
- **Configuration**: Managed in `public/admin/config.yml`
- **Content updates**: Use the CMS for non-technical edits. Ensure schemas match between CMS config and `content.config.ts`.
- **Media**: Store in `src/assets/images/`, reference via public folder.

### Tool-Specific Rules
- **Cursor Rules**: No `.cursor/rules/` or `.cursorrules` file found. Follow general guidelines above.
- **Copilot Rules**: No `.github/copilot-instructions.md` found. Adhere to code style for AI-assisted coding.

This AGENTS.md should be updated as the project evolves (e.g., when tests/linting are added). Total lines: ~150.
