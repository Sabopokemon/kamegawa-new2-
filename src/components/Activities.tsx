import React from 'react';

const activities = [
  {
    title: '餅つき大会への参加',
    titleEn: 'Participating in the Mochi-Pounding Festival',
    image: 'https://images.unsplash.com/photo-1528844571273-5dd736d68231?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
    descriptionJa: '亀川プロジェクトは、地元の伝統行事である餅つき大会に毎年参加し、地域との関係を強化しています。このイベントでは、地域住民と共に餅つきの体験を楽しみました。学生たちは地域の伝統的な方法での餅つきや販売に挑戦し、地元の方々から技術や知恵を学ぶ貴重な機会となっています。このような相互交流を通して、亀川プロジェクトは地域の一員として地元文化の継承に貢献しています。',
    descriptionEn: 'The Kamegawa Project strengthens its ties with the community by participating annually in the traditional mochi-pounding festival. In this event, students join local residents in the mochi-pounding experience. They try their hand at making and selling mochi using traditional methods, learning valuable skills and knowledge from the local residents. Through such exchanges, the Kamegawa Project contributes to preserving local culture as an active member of the community.'
  },
  {
    title: '亀の甲お祭りガーデンの開催',
    titleEn: 'Hosting the Kame no Ko Festival Garden',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
    descriptionJa: '「亀の甲お祭りガーデン」は、亀川プロジェクトが地域密着型の行事として2024年7月に開催しました。亀川プロジェクトのメンバーが主体となり、地元住民の協力を得ながらアイデアを出し合い、イベントの運営に携わりました。祭りの準備段階から学生と住民が一緒に取り組むことで、地域に対する理解が深まり、互いの絆がより強くなりました。イベント当日は多様な屋台が並び、子どもから大人まで幅広い年齢層の住民が集まる、笑顔の絶えない賑やかな場となりました。',
    descriptionEn: 'In July 2024, the Kamegawa Project organized the "Kame no Ko Festival Garden" as a locally focused event. Project members took the lead in planning, working alongside local residents, and engaging in event management. By collaborating from the preparation stages, students and residents gained a deeper understanding of each other, strengthening their bonds. On the day of the event, various stalls lined the area, creating a lively atmosphere where residents of all ages gathered, filled with smiles.'
  },
  {
    title: '漁船クルージングの企画',
    titleEn: 'Organizing a Fishing Boat Cruise',
    image: 'https://images.unsplash.com/photo-1516939884455-1445c8652f83?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
    descriptionJa: '亀川の海を舞台にした漁船クルージングは、亀川プロジェクトが亀川夏祭りに合わせ、地元の漁師と連携して企画した特別な体験型イベントです。このクルージングでは、地元の漁師たちが船を操縦し、参加者は漁船から亀川漁港で打ち上げられる花火を鑑賞することができます。海上から眺める亀川の花火は、参加者にとって忘れられない思い出となりました。',
    descriptionEn: 'A fishing boat cruise along the Kamegawa coast was organized as a special experience event in cooperation with local fishermen, held during the Kamegawa Summer Festival. Participants enjoyed viewing fireworks launched from Kamegawa Port, guided by local fishermen on their boats. Watching Kamegawa’s fireworks from the sea became an unforgettable memory for the participants.'
  },
  {
    title: '地域の課題をサポートする活動',
    titleEn: 'Activities Supporting Local Challenges',
    image: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
    descriptionJa: '亀川プロジェクトでは、地域の住民や自治会からの要望や困りごとに対応する「お困りごと解決」活動も行っています。この活動は、地域住民が日常的に抱える課題や要望に対し、学生が主体的に支援を行う取り組みです。この「お困りごと解決」活動は、地域住民にとっても学生にとっても意義深い交流の場であり、地域社会への貢献と学生の成長を促す貴重な機会となっています。',$1,
  }
];

const Activities: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/activities/mochi-pounding">
          <MochiPoundingFestival />
        </Route>
        <Route path="/activities/kame-no-ko-festival">
          <KameNoKoFestivalGarden />
        </Route>
        <Route path="/activities/fishing-boat-cruise">
          <FishingBoatCruise />
        </Route>
        <Route path="/activities/supporting-local-challenges">
          <SupportingLocalChallenges />
        </Route>
        <Route path="/">
          <section id="activities" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-16">
                <span className="block text-gray-800">ACTIVITIES</span>
                <span className="block text-sm text-gray-600 mt-2">地域と共に創る、亀川の多彩な挑戦</span>
              </h2>

              <div className="grid md:grid-cols-4 gap-8">
                {activities.map((activity, index) => (
                  <Link to={
                    index === 0 ? "/activities/mochi-pounding" :
                    index === 1 ? "/activities/kame-no-ko-festival" :
                    index === 2 ? "/activities/fishing-boat-cruise" :
                    "/activities/supporting-local-challenges"
                  } key={index}>
                    <div className="group relative overflow-hidden rounded-lg shadow-lg">
                      <div
                        className="h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundImage: `url(${activity.image})` }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                      <div className="absolute bottom-0 p-6">
                        <h3 className="text-xl font-semibold text-white mb-2">{activity.title}</h3>
                        <p className="text-sm text-gray-200">{activity.titleEn}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </Route>
      </Switch>
    </Router>
  );
};

const MochiPoundingFestival: React.FC = () => {
  const activity = activities[0];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          {activity.title}
        </h2>
        <p className="text-gray-700 mb-6">
          {activity.descriptionJa}
        </p>
        <h3 className="text-2xl font-bold text-center mb-4">
          {activity.titleEn}
        </h3>
        <p className="text-gray-700">
          {activity.descriptionEn}
        </p>
      </div>
    </section>
  );
};

const KameNoKoFestivalGarden: React.FC = () => {
  const activity = activities[1];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          {activity.title}
        </h2>
        <p className="text-gray-700 mb-6">
          {activity.descriptionJa}
        </p>
        <h3 className="text-2xl font-bold text-center mb-4">
          {activity.titleEn}
        </h3>
        <p className="text-gray-700">
          {activity.descriptionEn}
        </p>
      </div>
    </section>
  );
};

const FishingBoatCruise: React.FC = () => {
  const activity = activities[2];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          {activity.title}
        </h2>
        <p className="text-gray-700 mb-6">
          {activity.descriptionJa}
        </p>
        <h3 className="text-2xl font-bold text-center mb-4">
          {activity.titleEn}
        </h3>
        <p className="text-gray-700">
          {activity.descriptionEn}
        </p>
      </div>
    </section>
  );
};

const SupportingLocalChallenges: React.FC = () => {
  const activity = activities[3];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          {activity.title}
        </h2>
        <p className="text-gray-700 mb-6">
          {activity.descriptionJa}
        </p>
        <h3 className="text-2xl font-bold text-center mb-4">
          {activity.titleEn}
        </h3>
        <p className="text-gray-700">
          {activity.descriptionEn}
        </p>
      </div>
    </section>
  );
};

export default Activities;

