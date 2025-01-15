export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-semibold mb-4">Brand</h4>
            <p className="text-sm">
              깔끔한 디자인으로 당신의 비즈니스를 성장시키세요.
            </p>
          </div>
          {['Product', 'Company', 'Resources'].map((title, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-2 text-sm">
                {['Link 1', 'Link 2', 'Link 3'].map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="hover:text-white transition-colors">
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
}