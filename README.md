# Developer Portfolio for GitHub Pages

Nuxt 기반의 개발자 포트폴리오 템플릿입니다. GitHub Pages 프로젝트 사이트 배포를 기준으로 구성되어 있습니다.

## Local Development

```bash
npm install
npm run dev
```

## Edit Content

이름, 소개, 기술 스택, 프로젝트, 연락처는 `app/data/portfolio.ts`에서 바꿉니다.

이미지는 `public/images/hero-workspace.png`, `public/images/profile-placeholder.png`를 교체하면 됩니다.

## Build

```bash
npm run build
```

GitHub Pages 프로젝트 사이트용 base URL을 로컬에서 확인하려면 아래처럼 실행합니다.

```bash
NUXT_APP_BASE_URL=/codex_github_profile_page_vibe/ npx nuxt build --preset github_pages
```

Windows PowerShell에서는 다음 형식을 사용합니다.

```powershell
$env:NUXT_APP_BASE_URL="/codex_github_profile_page_vibe/"; npx nuxt build --preset github_pages
```
