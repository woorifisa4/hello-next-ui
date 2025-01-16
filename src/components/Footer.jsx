export const Footer = () => {
  const sections = {
    learn: {
      title: '학습하기',
      links: [
        { name: 'React 기초', url: 'https://react.dev' },
        { name: 'NextUI 문서', url: 'https://nextui.org' },
        { name: '상태 관리', url: 'https://react.dev/learn/managing-state' },
      ],
    },
    components: {
      title: '컴포넌트',
      links: [
        {
          name: 'Pagination',
          url: 'https://nextui.org/docs/components/pagination',
        },
        { name: 'Badge', url: 'https://nextui.org/docs/components/badge' },
        { name: 'Spinner', url: 'https://nextui.org/docs/components/spinner' },
        { name: 'Select', url: 'https://nextui.org/docs/components/select' },
      ],
    },
    resources: {
      title: '참고 자료',
      links: [
        { name: 'GitHub 저장소', url: 'https://github.com/nextui-org/nextui' },
        {
          name: '문제 리포트',
          url: 'https://github.com/nextui-org/nextui/issues',
        },
        { name: '커뮤니티', url: 'https://nextui.org/blog' },
      ],
    },
  };

  return (
    <footer className="bg-gray-900 py-12 text-gray-400">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h4 className="mb-4 font-semibold text-white">NextUI Practice</h4>
            <p className="text-sm">
              React와 NextUI를 실습하면서 컴포넌트 상태 관리와 UI 디자인을
              배워보세요.
            </p>
          </div>
          {Object.entries(sections).map(([key, section]) => (
            <div key={key}>
              <h4 className="mb-4 font-semibold text-white">{section.title}</h4>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className="transition-colors hover:text-white"
                      target={
                        link.url.startsWith('http') ? '_blank' : undefined
                      }
                      rel={
                        link.url.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
          <p>
            © {new Date().getFullYear()} NextUI Practice Lab. 모든 예제는 학습
            목적으로 제공됩니다.
          </p>
        </div>
      </div>
    </footer>
  );
};
