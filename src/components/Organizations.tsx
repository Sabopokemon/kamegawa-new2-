import React from 'react';

const Organizations: React.FC = () => {
  return (
    <section id="organizations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">
          <span className="block text-gray-800">ORGANIZATIONS</span>
          <span className="block text-sm text-gray-600 mt-2">組織概要</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">団体名 / Organization Name</h3>
                <p className="text-gray-600 mb-6">亀川プロジェクト / Kamegawa Project</p>

                <h3 className="text-lg font-semibold mb-4">代表取締役 / Representative</h3>
                <p className="text-gray-600 mb-6">宮本裕治 / Yuji Miyamoto</p>

                <h3 className="text-lg font-semibold mb-4">TEL･FAX</h3>
                <p className="text-gray-600 mb-6">08087369267</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">E-mail</h3>
                <p className="text-gray-600 mb-6">kamegawaeetoko@gmail.com</p>

                <h3 className="text-lg font-semibold mb-4">所在地 / Address</h3>
                <p className="text-gray-600">
                  〒874-0022<br />
                  大分県別府市亀川東町２２−１１<br />
                  イノベーションスペース 別府 かめや<br /><br />
                  Innovation Space Beppu Kameya<br />
                  22-11 Kamegawa Higashimachi,<br />
                  Beppu City, Oita Prefecture<br />
                  874-0022, Japan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organizations;