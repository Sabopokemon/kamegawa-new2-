import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">
          <span className="block text-gray-800">ABOUT</span>
          <span className="block text-2xl mt-2">亀川の未来をつくる実験プラットフォーム</span>
        </h2>
        
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-gray-600 leading-relaxed mb-6">
            亀川プロジェクトは、学生と地域のつながりを活かし、立命館アジア太平洋大学(APU)の学生が集まった亀川の魅力を引き出すための実験的なコミュニティプラットフォームです。ここでは、学生や住民が「こんなことがやってみたい」「こんな場所があったらいいな」という思いを形にし、地域とともに成長していくことを目指しています。亀川の街を舞台に、学生と地域住民が一緒になって新しい価値を創造する場を提供しています。
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">A Platform for Creating the Future of Kamegawa</h3>
          <p className="text-gray-600 leading-relaxed">
            The Kamegawa Project is an experimental community platform created by students from Ritsumeikan Asia Pacific University (APU) to highlight the appeal of Kamegawa by fostering connections between students and the local community. Here, students and residents bring to life ideas like "I wish we could try this" or "It would be great if this place existed," aiming to grow alongside the community. Kamegawa serves as a stage for students and local residents to come together and create new values.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">自然と温泉が織りなす癒しの町</h3>
            <p className="text-gray-600 leading-relaxed">
              大分県別府市亀川は、豊かな自然環境と温泉文化が融合した魅力的な地域です。北東部には森林と田畑が広がり、亀川温泉は「別府八湯」の一つとして大正時代から親しまれています。毎年開催される「亀川夏まつり」では、花火大会や地元の踊りが楽しめ、5000発の花火が夜空を彩ります。また、亀川駅周辺には日帰り温泉やレストランが充実しており、観光の拠点として便利です。亀川の名前は848年に捕獲された白い亀に由来し、温泉地としての長い歴史を持ちます。自然、温泉、文化が融合した亀川は、訪れる人々に癒しを提供する特別な場所です。
            </p>
            <h4 className="text-xl font-semibold text-gray-800">A Town of Relaxation, Intertwining Nature and Hot Springs</h4>
            <p className="text-gray-600 leading-relaxed">
              Kamegawa, Beppu City, Oita Prefecture, is a charming area blending rich natural surroundings with hot spring culture. Forests and fields stretch across its northeastern region, and Kamegawa Onsen, one of the "Beppu Eight Hot Springs," has been cherished since the Taisho era. The annual "Kamegawa Summer Festival" offers fireworks and local dance performances, with 5,000 fireworks brightening the night sky. Kamegawa Station's vicinity is filled with day-trip hot springs and restaurants, making it a convenient base for tourism. Named after a white turtle caught in 848 AD, Kamegawa has a long history as a hot spring destination, providing visitors with a unique blend of nature, hot springs, and cultural relaxation.
            </p>
          </div>
          
          <div
            className="h-64 md:h-auto bg-cover bg-center rounded-lg shadow-lg"
            style={{
              backgroundImage: 'url("")',
            }}
          ></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div
            className="h-64 md:h-auto bg-cover bg-center rounded-lg shadow-lg order-2 md:order-1"
            style={{
              backgroundImage: 'url("")',
            }}
          ></div>
          
          <div className="space-y-6 order-1 md:order-2">
            <h3 className="text-2xl font-semibold text-gray-800">学生と地域をつなぐシェアハウス</h3>
            <p className="text-gray-600 leading-relaxed">
              「かめや」は、かつての旅館を活用した学生向けシェアハウスで、亀川プロジェクトの拠点としても機能しています。広間などの共有スペースを活用して、ミーティングやワークショップ、地域交流の場として学生と地域がつながる場所です。また、さまざまな活動がここで行われており、学生にとっても地域にとっても、新たな出会いや学びの場となっています。
            </p>
            <h4 className="text-xl font-semibold text-gray-800">Shared House Connecting Students and the Community</h4>
            <p className="text-gray-600 leading-relaxed">
              "Kameya" is a shared house for students, repurposed from an old inn, which also serves as the base for the Kamegawa Project. The communal areas, such as the main hall, are utilized as meeting spaces, workshop venues, and community gathering spots, connecting students with the local community. Various activities take place here, making it a place of new encounters and learning for both students and the community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;