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
  "berserk": {
    title: "Berserk",
    image: "berserk.jpg",
    description: "Berserk, karanlık bir fantezi evreninde geçen, intikam, hayatta kalma ve insanın karanlık yönleri üzerine kurulu efsanevi bir anime ve manga serisidir. Guts adında bir savaşçının, kaderine karşı verdiği acı dolu mücadeleyi konu alır."
  },
  "call-of-the-night": {
    title: "Call of the Night",
    image: "vampir.jpg",
    description: "*Call of the Night*, gündüz yaşamına sırt çeviren bir gencin gecenin gizemleriyle tanışmasını anlatır. Vampir Nazuna ile tanışan Kou, geceleri keşfetmeye başlar ve vampir olmanın cazibesine kapılır."
  },
  "my-hero-academia": {
    title: "My Hero Academia",
    image: "kahraman.jpg",
    description: "Gelecekte geçen bu dünyada insanların çoğu süper güçlere, yani 'Quirk'lere sahiptir. Ana karakter Izuku Midoriya, Quirk'siz doğmuş olsa da en büyük kahraman olma hayalinden vazgeçmez. Gücünü All Might'tan devralarak kahramanlık akademisinde zorlu bir yolculuğa çıkar."
  },
  "one-piece": {
    title: "One Piece",
    image: "korsan.jpg",
    description: "Monkey D. Luffy, efsanevi hazine One Piece’i bulmak ve Korsanlar Kralı olmak için yola çıkan genç bir korsandır. Yolculuğunda çeşitli arkadaşlar edinir ve Grand Line boyunca türlü maceralara atılır."
  },
  "bleach": {
    title: "Bleach",
    image: "bleach.jpg",
    description: "Ichigo Kurosaki, bir gün yanlışlıkla bir Ölüm Meleği’nin gücünü alır ve ruhları huzura kavuşturmaya başlar. Ancak bu yeni dünyada birçok tehlike ve güçlü düşmanla karşılaşır."
  },
  "bunny-girl-senpai": {
    title: "Bunny Girl Senpai",
    image: "tavşan.jpg",
    description: "Sakuta Azusagawa, bir gün tavşan kostümlü bir kız olan Mai Sakurajima ile karşılaşır. Mai, görünmez hale gelmiştir ve sadece Sakuta onu görebilmektedir. Dizi, ergenlik sendromu adı verilen gizemli olaylar çerçevesinde ilerler."
  },
  "spy-x-family": {
    title: "SPYxFAMILY",
    image: "spy.jpg",
    description: "Soğuk savaş döneminde geçen bu hikayede, ajan Twilight'ın gizli görevini yerine getirmek için sahte bir aile kurması gerekir. Ancak ailesindeki herkesin bir sırrı vardır: karısı bir suikastçı, kızı ise zihin okuyabilmektedir."
  },
  "blue-lock": {
    title: "Blue Lock",
    image: "blue-lock.jpg",
    description: "Blue Lock, Japonya'nın en iyi forvetini seçmek için 300 futbolcunun kapalı bir tesiste yarıştığı, rekabet ve ego temalı bir spor animesidir. Ana karakter Isagi, bu zorlu mücadelede kendi oyun stilini bulmaya çalışır."
   },
  "dan-da-dan": {
    title: "Dan Da Dan",
    image: "dandadan.jpg",
    description: "Hayaletlerin mi yoksa uzaylıların mı var olduğunu kanıtlamak için iddiaya giren iki lise öğrencisi, korkunç paranormal tehditlerle karşı karşıya kalır, süper güçler kazanır ve hatta belki de birbirlerine aşık olurlar!"
  }
};

// Detay gösterme fonksiyonu
function showDetails(animeKey) {
  const anime = animeData[animeKey];
  if (!anime) return;

  document.getElementById("anime-title").textContent = anime.title;
  document.getElementById("anime-image").src = anime.image;
  document.getElementById("anime-description").textContent = anime.description;
  document.getElementById("anime-rating").textContent = anime.rating || 0;
  document.getElementById("anime-details").style.display = "block";

  // İzleme linki örnek (isteğe göre özelleştirilebilir)
  document.getElementById("anime-watch-link").href = "https://www.google.com/search?q=" + encodeURIComponent(anime.title + " anime izle");

  // Paylaşım linkleri
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(anime.title);

  document.getElementById("share-facebook").href = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${title}`;
  document.getElementById("share-twitter").href = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
  document.getElementById("share-whatsapp").href = `https://wa.me/?text=${title}%20${url}`;
  document.getElementById("share-linkedin").href = `https://www.linkedin.com/shareArticle?url=${url}&title=${title}`;
}

// Detay kapatma
function closeDetails() {
  document.getElementById("anime-details").style.display = "none";
}

// Puan verme
function rateAnime(animeKey) {
  if (!animeKey || !animeData[animeKey]) return;

  const currentRating = animeData[animeKey].rating || 0;
  const newRating = prompt("Bu animeye kaç puan veriyorsun? (1-10)", currentRating);
  if (newRating !== null) {
    animeData[animeKey].rating = newRating;
    document.getElementById("anime-rating").textContent = newRating;
  }
}
