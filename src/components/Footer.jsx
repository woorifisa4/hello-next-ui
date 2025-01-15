export const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 text-gray-400">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h4 className="mb-4 font-semibold text-white">Brand</h4>
            <p className="text-sm">
              깔끔한 디자인으로 당신의 비즈니스를 성장시키세요.
            </p>
          </div>
          {['Product', 'Company', 'Resources'].map((title, index) => (
            <div key={index}>
              <h4 className="mb-4 font-semibold text-white">{title}</h4>
              <ul className="space-y-2 text-sm">
                {['Link 1', 'Link 2', 'Link 3'].map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="transition-colors hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
