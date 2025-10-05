# 🤖 GitHub Copilot Instructions

This file contains specific instructions for GitHub Copilot when working on this portfolio project.

## 🚨 Commit Rules - CRITICAL

### Maximum Length

- **NEVER exceed 100 characters** in the commit header
- The project uses **commitlint** that validates automatically
- **Current error:** long messages fail the commit hook

### Conventional Commits Format

```
<type>(<scope>): <short description>

<optional body with more details>
```

### Allowed Types

- `feat`: New functionality
- `fix`: Bug fixes
- `refactor`: Code refactoring without functional changes
- `style`: Formatting/style changes
- `docs`: Documentation
- `test`: Tests
- `chore`: Maintenance tasks

### ✅ Correct Examples (< 100 chars)

```bash
feat: add component architecture
fix: resolve theme toggle issue
refactor: extract page sections
style: update button hover states
docs: add commit guidelines
chore: update dependencies
```

### ❌ Incorrect Examples (> 100 chars)

```bash
# 119 characters - FAILS ❌
feat: add new sections for About, Certifications, Contact, Footer, Header, Hero, Projects, Soft Skills, and Tech Skills

# 105 characters - FAILS ❌
feat: implement complete component refactor with all sections separated into individual components
```

### 💡 Strategies for Long Messages

If you need to describe multiple changes, use the body:

```bash
feat: implement component architecture

- Extract Header, Hero, and About sections
- Add TechSkills and SoftSkills components
- Create Contact and Footer components
- Improve code organization and maintainability
- Add proper TypeScript interfaces
```

### When Writing Commits

1. **ALWAYS** verify the message is < 100 characters
2. Use conventional commits
3. Be specific but concise
4. Use the body for additional details

---

**Remember:** The most important rule is to keep commits under 100 characters to avoid Git hook failures. 🚨

## 📝 Development Guidelines

### Language Standards

- **ALL comments, code, and documentation MUST be written in English**
- This ensures consistency and international collaboration standards
- No exceptions for variable names, function names, or documentation

### Internationalization (i18n)

- **When adding new titles and labels:**
  - ALWAYS add content in both Spanish and English
  - Ensure proper referencing in the content structure
  - Update both `config/texts/en/content.ts` and `config/texts/es/content.ts`
  - Maintain consistency between language versions

### Dependency Management

- **When adding new dependencies:**
  - ALWAYS install the latest fixed version using the `-E` flag
  - Example: `npm install -E package-name` instead of `npm install package-name`
  - This ensures exact version pinning and reproducible builds

### Component Development

- **When adding new components:**
  - PRIORITIZE creating new, custom components over modifying existing ones
  - Maintain component separation and single responsibility principle
  - Follow the existing component structure in `components/` directory

### Code Validation

- **ALWAYS validate code changes using `npm run build`**
  - NEVER use `npm run dev` for validation purposes
  - `npm run build` ensures production readiness and catches build-time errors
  - Development server (`npm run dev`) may not catch all potential issues

### Best Practices Summary

1. 🇺🇸 **English-only** for all code and documentation
2. 🌐 **Dual-language** content for user-facing text
3. 📦 **Fixed versions** (`-E`) for all dependencies
4. 🧩 **New components** over modifications
5. 🏗️ **Build validation** (`npm run build`) always
