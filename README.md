# OrangeHRM Playwright Automation

[![Playwright Tests](https://github.com/YOUR_USERNAME/playwright-orangehrm/actions/workflows/playwright.yml/badge.svg)](https://github.com/YOUR_USERNAME/playwright-orangehrm/actions/workflows/playwright.yml)

Automation testing project cho OrangeHRM Demo Site sử dụng Playwright và TypeScript với Page Object Model pattern.

## 📋 Table of Contents

- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Running Tests](#-running-tests)
- [Code Quality & Formatting](#-code-quality--formatting)
- [Test Modules](#-test-modules)
- [Page Object Model Pattern](#️-page-object-model-pattern)
- [Best Practices](#-best-practices)
- [CI/CD](#-cicd)
- [Debugging](#-debugging)

## 🎯 Project Structure

```
playwright-orangehrm/
├── src/
│   ├── components/         # Reusable UI components
│   │   
│   ├── pages/              # Page Object classes
│   │ 
│   ├── fixtures/           # Custom test fixtures
│   │ 
│   ├── locators/           # Element locators
│   │  
│   ├── models/             # Data models và types
│   │  
│   ├── constants/          # Constants và URLs
│   │  
│   └── utils/              # Helper utilities
│       
├── tests/                  # Test specs
│   ├── setup/
│   │   
│   └── specs/
│       
├── test-data/             # Test data files
│   
├── .auth/                 # Stored authentication states
├── eslint.config.mts      # ESLint configuration
├── .prettierrc.json       # Prettier configuration
└── playwright.config.ts   # Playwright configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm hoặc yarn
- Git

### Installation

1. **Clone repository:**
```bash
git clone <repository-url>
cd playwright-orangehrm
```

2. **Install dependencies:**
```bash
npm install
```

3. **Install Playwright browsers:**
```bash
npx playwright install
```

4. **Setup Husky:**
```bash
npm run prepare
```

### Configuration

Project sử dụng environment variables cho sensitive data. Tạo file `.env` nếu cần:

```bash
# .env.example
BASE_URL=https://opensource-demo.orangehrmlive.com
ADMIN_USERNAME=Admin
ADMIN_PASSWORD=admin123
```

## 🧪 Running Tests

```bash
# Chạy tất cả tests
npm test

# Chạy tests với headed mode
npm run test:headed

# Chạy tests với UI mode
npm run test:ui

# Chạy test cụ thể
npx playwright test tests/login.spec.ts

# Chạy test với debug mode
npm run test:debug

# Xem test report
npm run test:report
```

## 🔍 Code Quality & Formatting

Project sử dụng ESLint, Prettier, Husky, và Commitlint để đảm bảo code quality.
* https://medium.com/@kryo/the-ultimate-2025-eslint-prettier-pre-commit-setup-for-playwright-typescript-test-automation-270a20658a96

### ESLint (Code Linter)

**Kiểm tra lỗi:**
```bash
npx eslint .
# hoặc kiểm tra folder cụ thể
npx eslint src
npx eslint tests
```

**Tự động fix:**
```bash
npx eslint --fix .
```

### Prettier (Code Formatter)

**Kiểm tra format:**
```bash
npx prettier --check .
```

**Tự động format:**
```bash
npx prettier --write .
```

### Husky + Lint-staged (Pre-commit Hook)

Mỗi khi commit, tự động chạy ESLint và Prettier:
```bash
git add .
git commit -m "feat: add new feature"
# → Tự động chạy eslint + prettier trước khi commit
```

### Commitlint (Commit Message)

Commit message phải theo chuẩn Conventional Commits:

**✅ Đúng format:**
```bash
git commit -m "feat: add login page"
git commit -m "fix: resolve auth bug"
git commit -m "docs: update README"
git commit -m "test: add PIM tests"
```

**❌ Sai format:**
```bash
git commit -m "update code"
git commit -m "fix bug"
```

**Các prefix hợp lệ:**
- `feat:` - Tính năng mới
- `fix:` - Sửa bug
- `docs:` - Cập nhật docs
- `style:` - Format code
- `refactor:` - Refactor code
- `test:` - Thêm/sửa tests
- `chore:` - Cập nhật config/dependencies

### Workflow đề xuất

Khi develop, làm theo các bước sau:

1. **Viết code mới**
2. **Chạy ESLint:** `npx eslint .` (tự động fix với `--fix`)
3. **Format code:** `npx prettier --write .`
4. **Chạy tests:** `npm test`
5. **Commit changes:**
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```
   - Husky tự động chạy lint-staged (eslint + prettier)
   - Commitlint kiểm tra format commit message

**💡 Tips:**
- Cài [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) và [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) cho VS Code
- Enable "Format on Save" trong VS Code settings
- Husky hooks đảm bảo code quality trước mỗi commit

## 📝 Test Modules

- Update later

## 🏗️ Page Object Model Pattern

- Update later

## 📊 Test Data

Test data được lưu trong `test-data/` directory:
- `employees.json` - Employee test data

## 📈 CI/CD

Add scripts này vào CI/CD pipeline:

```yaml
- name: Install dependencies
  run: npm ci

- name: Install Playwright browsers
  run: npx playwright install --with-deps

- name: Run tests
  run: npm test

- name: Upload test report
  uses: actions/upload-artifact@v3
  if: always()
  with:
    name: playwright-report
    path: playwright-report/
```

## 🐛 Debugging

```bash
# Debug mode với inspector
npm run test:debug

# Run với headed mode để xem browser
npm run test:headed

# Xem trace viewer
npx playwright show-trace trace.zip
```

## 📚 Resources

- [Playwright Documentation](https://playwright.dev)
- [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 👥 Test Credentials

**Admin User:**
- Username: `Admin`
- Password: `admin123`

## 🤝 Contributing

1. Fork repository
2. Tạo feature branch: `git checkout -b feat/amazing-feature`
3. Follow POM pattern và coding standards
4. Viết tests cho new features
5. Ensure all tests pass: `npm test`
6. Ensure code quality: `npx eslint . && npx prettier --check .`
7. Commit changes: `git commit -m "feat: add amazing feature"`
8. Push to branch: `git push origin feat/amazing-feature`
9. Tạo Pull Request

## 📄 License

This project is for educational purposes.

## 👤 Author

- GitHub: [@trikmgithub](https://github.com/trikmgithub)

## ⭐ Acknowledgments

- [Playwright](https://playwright.dev) - Testing framework
- [OrangeHRM](https://www.orangehrm.com) - Demo application
- [TypeScript](https://www.typescriptlang.org) - Programming language
