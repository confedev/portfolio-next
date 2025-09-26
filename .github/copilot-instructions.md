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
