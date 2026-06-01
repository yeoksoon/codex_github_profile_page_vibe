export type PortfolioLink = {
  label: string
  href: string
  external?: boolean
  variant?: 'primary' | 'secondary'
}

export type SkillGroup = {
  title: string
  items: string[]
}

export type ProjectItem = {
  title: string
  description: string
  impact: string
  tags: string[]
  links: PortfolioLink[]
}

export type PortfolioContent = {
  profile: {
    name: string
    role: string
    location: string
    availability: string
    headline: string
    headlineLines: string[]
    summary: string
    heroImage: string
    avatarImage: string
    highlights: string[]
    links: PortfolioLink[]
  }
  about: {
    eyebrow: string
    title: string
    body: string[]
    facts: { label: string; value: string }[]
  }
  skills: SkillGroup[]
  projects: ProjectItem[]
  contact: {
    eyebrow: string
    title: string
    description: string
    email: string
    links: PortfolioLink[]
  }
}

export const portfolio: PortfolioContent = {
  profile: {
    name: '홍길동',
    role: '프론트엔드 개발자',
    location: 'Seoul, Korea',
    availability: '새로운 제품 경험과 협업 기회를 찾고 있습니다',
    headline: '사용자가 빠르게 이해하고 오래 쓰는 웹 경험을 만듭니다.',
    headlineLines: ['사용자가 빠르게', '이해하고 오래 쓰는', '웹 경험을 만듭니다.'],
    summary:
      'Nuxt와 Vue를 중심으로 인터페이스, 성능, 접근성을 함께 고민하는 개발자 포트폴리오 템플릿입니다. 이름, 링크, 프로젝트 설명만 바꾸면 바로 개인 사이트로 사용할 수 있습니다.',
    heroImage: 'images/hero-workspace.png',
    avatarImage: 'images/profile-placeholder.png',
    highlights: ['Vue/Nuxt 기반 UI 구현', '반응형 인터랙션 설계', '정적 사이트 배포 자동화'],
    links: [
      { label: '프로젝트 보기', href: '#projects', variant: 'primary' },
      { label: 'GitHub', href: 'https://github.com/your-id', external: true, variant: 'secondary' },
      { label: 'Email', href: 'mailto:hello@example.com', variant: 'secondary' }
    ]
  },
  about: {
    eyebrow: 'About',
    title: '작게 시작해도 제품처럼 다듬는 개발자',
    body: [
      '복잡한 요구사항을 사용자가 이해하기 쉬운 화면과 안정적인 상태 흐름으로 정리하는 일을 좋아합니다.',
      '디자인 시스템, 컴포넌트 구조, 빌드/배포 자동화처럼 제품의 지속 가능성을 높이는 기반 작업에도 관심이 많습니다.'
    ],
    facts: [
      { label: 'Focus', value: 'Frontend, UX Engineering' },
      { label: 'Stack', value: 'Nuxt, Vue, TypeScript' },
      { label: 'Base', value: 'GitHub Pages ready' }
    ]
  },
  skills: [
    {
      title: 'Frontend',
      items: ['Vue', 'Nuxt', 'TypeScript', 'HTML', 'CSS']
    },
    {
      title: 'Product UI',
      items: ['Responsive Layout', 'Accessibility', 'Design Systems', 'Interaction States']
    },
    {
      title: 'Delivery',
      items: ['GitHub Actions', 'Static Hosting', 'Performance Tuning', 'Documentation']
    }
  ],
  projects: [
    {
      title: '개발자 포트폴리오',
      description: 'Nuxt 정적 생성과 GitHub Pages 배포를 기준으로 만든 개인 포트폴리오 사이트입니다.',
      impact: '콘텐츠를 데이터 파일에서 관리해 프로젝트 추가와 문구 수정이 빠릅니다.',
      tags: ['Nuxt', 'GitHub Pages', 'Static Site'],
      links: [
        { label: 'Demo', href: '#top' },
        { label: 'Repository', href: 'https://github.com/your-id/portfolio', external: true }
      ]
    },
    {
      title: '작업 관리 대시보드',
      description: '반복 업무를 한 화면에서 추적할 수 있도록 필터, 상태, 요약 지표를 정리한 UI 실험입니다.',
      impact: '정보 밀도를 유지하면서도 모바일에서 핵심 액션이 먼저 보이도록 설계했습니다.',
      tags: ['Vue', 'Dashboard', 'UX'],
      links: [
        { label: 'Case Study', href: '#contact' },
        { label: 'Repository', href: 'https://github.com/your-id/dashboard', external: true }
      ]
    },
    {
      title: '컴포넌트 라이브러리',
      description: '버튼, 카드, 입력 컴포넌트의 상태와 접근성 기본값을 정리한 사내 UI 기반 작업입니다.',
      impact: '재사용 가능한 패턴으로 화면 제작 속도와 일관성을 높였습니다.',
      tags: ['Components', 'CSS', 'Accessibility'],
      links: [
        { label: 'Docs', href: '#skills' },
        { label: 'Repository', href: 'https://github.com/your-id/components', external: true }
      ]
    }
  ],
  contact: {
    eyebrow: 'Contact',
    title: '함께 만들고 싶은 일이 있다면 연락해 주세요.',
    description:
      '프로젝트 제안, 협업, 채용 관련 이야기를 편하게 보내주세요. 포트폴리오의 placeholder 정보는 실제 이메일과 링크로 교체하면 됩니다.',
    email: 'hello@example.com',
    links: [
      { label: '이메일 보내기', href: 'mailto:hello@example.com', variant: 'primary' },
      { label: 'GitHub', href: 'https://github.com/your-id', external: true, variant: 'secondary' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/your-id', external: true, variant: 'secondary' }
    ]
  }
}
