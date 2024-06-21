import React, { useState } from 'react';

const proverbs = [
  "Abaal dad galaa badan, dad gudaase yar.",
  "Abeesada taan sanqarta iyo tan aamusan, tan aamusan baa la qaatay.",
  "Aqoon la’aani waa iftiin la’aan.",
  "Aqal xoor ah, inaga gud baan ka xigo.",
  "Aamusnaan waa ogolaansho.",
  "Biyo sacabadaada lagama dhargee, ha iga daalin.",
  "Biyo doog ma kala dhantaalaanee, dad baa kala dhantaala.",
  "Caano daatay dabadood la qabay.",
  "Calool xun iyo cudur waa lama huraan.",
  "Carab iyo diiq toona waa la adkeeyaa.",
  "Darajadu waa wax gobeed.",
  "Da’du kibir ma laha.",
  "Dabeecad xun iyo cudur waa lama huraan.",
  "Damal habeen ma guuro.",
  "Dayax madoobaaday ha moodin in uu dam yahay.",
  "Dhallaan xun dhaxal ma yeesho.",
  "Dhakhtar soo joog laga waayo, dhakhtar fadhigiis ayaa laga helaa.",
  "Dhakhso wax ku qaado waxay ku noqon dabacsanaan.",
  "Dhurwaa baahi badan dhul ma dego.",
  "Dheri nimaan wax ku darin wax kuma darsado.",
  "Eed ama abaal nin lama wadaago.",
  "Eedu waa qorrax.",
  "Eexdu ma iisho.",
  "Erey gurracan ood kuma guro.",
  "Fallaari gilgilasho kaagama go'do.",
  "Fa'ido wacan, farxadduna waa farriin Alle.",
  "Geel jire, abaar iyo ugubna wuu joogaa.",
  "Geel laba jir ah lama dhaqo.",
  "Geesi geesinimo kuma noolaan karo.",
  "Gogoshii sare janno iyo dabaasha.",
  "Hal abuur waa halkay ka timid.",
  "Hal booli ah nirig xalaal ah ma dhasho.",
  "Haad hufan, hilib baa ku jiree.",
  "Had iyo goor buu naagi la baxdaa.",
  "Hadal badan haan ma buuxsho.",
  "Hadal la'aan, talo ma'aha.",
  "Hadal macaanka dhoobo ma yeesho.",
  "Hooyada geedka waa lagu daydaa.",
  "Horumar waayeel iyo la’aantiis midna ma jiro.",
  "Isha sacabka ku jirta, laba sacab bey heshay.",
  "Ishaad ka ridato, ilko ku cuni maysid.",
  "Jiif iyo jeer isma qabtaan.",
  "Jab jabkiisa la qabsaday.",
  "Jaho kastoo loo kaco, cadho reeb.",
  "Kafanta ninkii lahaa ka horreysay.",
  "Kala fogaansho wax ma taro.",
  "Kal danbeeyey nin lama raaco.",
  "Labada faras mid baa lagu tagaa.",
  "Lix sinnaan waa la isku jiraa.",
  "Madax fiican malabka maradiisa ma qaado.",
  "Magacaagi waari maayo.",
  "Meel xun laguma sii nagaado.",
  "Nin adadagii falay mid adag buu ku dhacaa.",
  "Nin daalay nimaan daalin wuu ka sabraa.",
  "Qawlkaaga adkeeya, ficilkaagana xoojiya.",
  "Qof kasta iyo xidhnaantiisa.",
  "Qof wax la toosiyo wax toosiya.",
  "Rag waa sidii rah kuu foogan.",
  "Raqda jiilaal rag kuma jaan goyso.",
  "Saxariir kama kaco, soor iyo nabad.",
  "Shaqadu waa sharaf.",
  "Talo xumo dad waa kaa qoslisaa.",
  "Taniyo dheriga oo dhaqa is leeyahay.",
  "Ubax waxa lagu gartaa udgoonkiisa.",
  "Ugaas iyo bisadba labaduba cunaankan waa xukun.",
  "Waayeel ma gaboobo, waaya arag ma gaboobo.",
  "War dhoobo ma hayo.",
  "Waryaa ha degdegin, waydiintaa ha'iga keenin.",
  "Xaaluf waxa u dambeeyey qodax daaq.",
  "Xirsi oo harqood baa u danbeeyey.",
  "Yartu waa inan, yeydu waa cunno.",
  "Yaxyaxu waa bilane dhaha.",
  "Zaytuun waa macaan badanaa."
];

function App() {
  const [proverb, setProverb] = useState('');

  const getRandomProverb = () => {
    const randomIndex = Math.floor(Math.random() * proverbs.length);
    setProverb(proverbs[randomIndex]);
  };

  return (
    <div className="app">
      <h1>Somali Proverb Generator</h1>
      {proverb && (
        <div className="proverb-box">
          <p>{proverb}</p>
        </div>
      )}
      <button onClick={getRandomProverb}>Get a Proverb</button>
    </div>
  );
}

export default App;
