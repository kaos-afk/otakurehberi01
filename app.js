const animeData = {
  "naruto": {
    title: "Naruto",
    image: "naruto.jpg",
    description: "Naruto, köyünün Hokage’si olmayı hayal eden bir ninjanın hikayesidir. Uzun süren yalnızlığının ardından arkadaşlık ve güç yolculuğuna çıkar. İçinde mühürlenmiş dokuz kuyruklu tilki canavarıyla birlikte, zorluklara karşı mücadele eder."
  },
  "demon-slayer": {
    title: "Demon Slayer",
    image: "demon.jpg",
    description: "Tanjiro Kamado'nun ailesi iblisler tarafından katledilir ve kız kardeşi Nezuko bir iblise dönüşür. Tanjiro, onu iyileştirmek ve iblislerle savaşmak için Demon Slayer Corps'a katılır. Dizi, aksiyon dolu sahneleri ve dokunaklı hikayesiyle dikkat çeker."
  },
  "attack-on-titan": {
    title: "Attack on Titan",
    image: "titan.jpg",
    description: "*Attack on Titan* (Shingeki no Kyojin), devlerin, yani \"Titan\"ların insanları yok ettiği bir dünyada geçen bir hikaye. Eren Yeager adlı genç, ailesini titanın öldürmesiyle intikam almaya yemin eder ve askeri birimlere katılır. Eren ve arkadaşları Mikasa ve Armin, devlere karşı savaşırken, devlerin ve insanlığın gizemli geçmişiyle ilgili büyük sırları keşfederler. Dizi, özgürlük, hayatta kalma, ihanet ve fedakarlık gibi temalar etrafında döner."
  },
  "jujutsu-kaisen": {
    title: "Jujutsu Kaisen",
    image: "justu.jpg",
    description: "*Jujutsu Kaisen*, kötü ruhları ve lanetleri yok etmek için savaşan bir grup insanın hikayesini anlatan bir anime ve manga serisi. Ana karakter Yuji Itadori, normal bir lise öğrencisidir, ama bir gün bir lanetli nesne olan bir parça insan parmağını yutar ve bu sayede dünyadaki en güçlü lanet olan Ryomen Sukuna'nın vücuduna girer."
  },
  "astolfo": {
    title: "Astolfo (Kıyamete Kader)",
    image: "femboy.jpg",
    description: "Astolfo, Fate/Apocrypha serisinde \"Rider\" sınıfında yer alan bir hizmetkâr (Servant)'tır. Gerçek tarihte Charlemagne’ın (Şarlman) 12 şovalyesinden biri olarak bilinir. Seride oldukça neşeli ve ne kadar şanslı olduğu ile tanınır. Astolfo, Femboy olarak tanımlanan bir karakterdir."
  },
  "highschool-dxd": {
    title: "High School DxD",
    image: "dxd.jpg",
    description: "*High School DxD*, doğaüstü olayların ve cinsel içeriklerin bolca yer aldığı bir anime serisidir. Ana karakter Issei Hyoudou, bir gün kötü bir iblis tarafından öldürülür, ancak daha sonra bir iblis olarak yeniden hayata döner ve Rias Gremory'nin hizmetine girer. Zamanla, Issei'nin gücü artar ve daha fazla tehlikeyle karşı karşıya kalır."
  },
  "hanma-baki": {
    title: "Hanma Baki",
    image: "hanma-baki.jpg",
    description: "Baki, dünyanın en güçlü adamı olan babası Yujiro Hanma'yı geçmek için verdiği mücadeleyi anlatan bir anime ve manga serisidir. Baki, küçük yaşlardan itibaren dövüş sanatlarında eğitim almış, çok güçlü bir genç dövüşçüdür. Ancak tek hedefi, babası gibi en güçlü olmak ve babasını geçmektir. Seri, Baki'nin dövüşlerde karşılaştığı aşırı güçlü rakipler ve mahkumlarla doludur. Baki, her yeni dövüşle güçlenir ve babasına yaklaşır. Hikaye, yalnızca fiziksel dövüşlerle değil, aynı zamanda karakterlerin içsel çatışmaları ve güçlü insanlara duydukları hayatta kalma isteğiyle de derinleşir."
  },
  "berserk": {
    title: "Berserk",
    image: "berserk.jpg",
    description: "Berserk, karanlık bir fantezi dünyasında geçen, intikam, güç ve hayatta kalma mücadelesini konu alan bir anime ve manga serisidir. Ana karakter Guts, trajik bir geçmişe sahip, acımasız bir savaşçıdır. Guts, eski arkadaşı Griffith’in ihanetinin ardından intikam almak için yolculuğa çıkar. Hikaye, Guts’ın, güçlü düşmanlarla savaşırken karşılaştığı zorluklar, dostluklar ve kayıplarla şekillenir. Berserk, karanlık bir fantezi dünyasında geçen, intikam, güç ve hayatta kalma mücadelesini konu alan bir anime ve manga serisidir. Ana karakter Guts, trajik bir geçmişe sahip, acımasız bir savaşçıdır. Guts, eski arkadaşı Griffith’in ihanetinin ardından intikam almak için yolculuğa çıkar. Hikaye, Guts’ın, güçlü düşmanlarla savaşırken karşılaştığı zorluklar, dostluklar ve kayıplarla şekillenir."
  },
  "call-of-the-night": {
    title: "Call of the Night",
    image: "vampir.jpg",
    description: "*Call of the Night*, gece boyunca uyanık kalan bir gencin, vampir bir kızla tanışmasını ve onunla geçirdiği zamanları konu alır. Ana karakter, Ko, uyuyamayan bir çocukken, bir gece vampir Nazuna ile karşılaşır. Nazuna, Ko'yu geceyi sevmeye teşvik eder ve ona gerçek anlamda yaşamayı öğretir. Ko'nun vampir olma arzusuyla başlayan hikaye, geceye olan bağlılıkları ve aralarındaki ilişkiyi keşfeder. Hem gizem hem de romantizm içeren bir hikayeye sahiptir."
  },
  "my-hero-academia": {
    title: "My Hero Academia",
    image: "kahraman.jpg",
    description: "My Hero Academia, süper güçlere sahip insanların yaşadığı bir dünyada, güçsüz bir çocuk olan Izuku Midoriya'nın, ünlü kahraman All Might'tan güç alarak kahramanlık yolunda ilerlemesini konu alır. Midoriya, U.A. Lisesi'nde eğitim alırken, arkadaşlarıyla birlikte kahramanlık görevlerine ve zorluklarla mücadeleye başlar. Anime, aksiyon, kahramanlık ideali, arkadaşlık ve kişisel gelişim gibi temalar etrafında döner."
  },
  "one-piece": {
    title: "One Piece",
    image: "korsan.jpg",
    description: "One Piece, Monkey D. Luffy adlı bir gencin, en büyük korsan olmak ve efsanevi One Piece adlı hazineyi bulmak için çıktığı macerayı konu alır. Luffy, \"Gomu Gomu no Mi\" adlı meyve sayesinde lastik gibi uzama yeteneğine sahip. Yolda, farklı yeteneklere sahip bir ekip kurarak, birçok tehlikeli macera ve dövüşle karşılaşır. Anime, dostluk, özgürlük ve hayallerin peşinden gitme temalarını işler. Çok uzun bir yapım olmasına rağmen, güçlü karakterler ve sürükleyici hikayesiyle popülerdir."
  },
  "bleach": {
    title: "Bleach",
    image: "bleach.jpg",
    description: "*Bleach*, Ichigo Kurosaki adlı bir gencin, istemeden bir *Shinigami* (ölüm tanrısı) olmasını ve ölülerin ruhlarını korumak için savaşmasını konu alır. Ichigo, Rukia Kuchiki adlı bir Shinigami ile karşılaştıktan sonra, ruh dünyasında güçlü düşmanlara karşı mücadele eder. Aksiyon, dövüş ve karakter gelişimiyle öne çıkan anime, uzun bir serisidir ve birçok hikaye arc'ı sunar."
  },
  "bunny-girl-senpai": {
    title: "Bunny Girl Senpai",
    image: "tavşan.jpg",
    description: "Bunny Girl Senpai (Rascal Does Not Dream of Bunny Girl Senpai), Sakuta Azusagawa adlı bir gencin, ünlü aktris Mai Sakurajima ile tanışmasını konu alır. Mai, etrafındaki insanlar tarafından görünmez hale gelmiştir. Sakuta, Mai'yi fark eden tek kişi olarak ona yardımcı olur. Hikaye, \"Puberty Syndrome\" adı verilen paranormal bir durumu işler ve her karakterin duygusal ve psikolojik sorunlarını keşfeder. Anime, romantizm, gizem ve psikolojik dramayı birleştirir."
  }
};

// Menü açma/kapama
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("open");
});

// Anime detaylarını gösterme
function showDetails(anime) {
  const details = animeData[anime];
  if (details) {
    document.getElementById("anime-title").innerText = details.title;
    document.getElementById("anime-image").src = details.image;
    document.getElementById("anime-description").innerText = details.description;
    document.getElementById("anime-details").style.display = "block";

    // Sosyal medya paylaşım linklerini ayarla
    document.getElementById("share-facebook").href = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`;
    document.getElementById("share-twitter").href = `https://twitter.com/intent/tweet?text=${details.title}&url=${window.location.href}`;
    document.getElementById("share-whatsapp").href = `https://wa.me/?text=${details.title} ${window.location.href}`;
    document.getElementById("share-linkedin").href = `https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`;
  }
}

// Detayları kapatma
function closeDetails() {
  document.getElementById("anime-details").style.display = "none";
}

// Animeyi oylama (puana ekleme)
function rateAnime(anime) {
  const rating = prompt("Bu animeye 1-5 arası puan verin:");
  if (rating >= 1 && rating <= 5) {
    alert(`Puanınız: ${rating}`);
  } else {
    alert("Geçerli bir puan girin.");
  }
}
