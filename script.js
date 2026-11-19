/* =====================================================
   EDIT HERE ONLY. Semua isi portfolio ada di objek DATA.
   Kosongkan "" untuk gambar/link yang belum ada.
   ===================================================== */
const DATA = {
  brand: "Sin's PORTOFOLIO",
  name: "SINDARA SEKAR PRAMESWARI",
  roles: ["Computer Engineering", "FT UNNES"],
  photo: "pfp.png",
  aboutPhoto: "about.png",
  resume: "",
  socials: [
    { label: "LinkedIn",  url: "https://linkedin.com/in/sindara-prameswari-080764320/" },
    { label: "Tiktok",    url: "https://tiktok.com/@sindchannn" },
    { label: "Instagram", url: "https://instagram.com/sindaraaskr" }
  ],
  about: {
    title: "About Me",
    text: "Saya mahasiswa Teknik yang suka mengeksplorasi skill baru dan kreativitas. Saya cukup berpengalaman dalam mengelola website dan mengoperasikan OBS studio sekalius sound system. Didalam kampus saya aktif beroranisasi di Himpunan FT UNNES sebagai Divisi TIK. saya memiliki hobi menggambar dan membuat ilustrasi maupun visual yang sulit dimengerti orang. Saya merupakan orang yang jujur dan bertanggung jawab dengan segala hal yang saya lakukan, Dengan banyaknya kesempatan yang ada, saya berkeinginan untuk terus menjadi pribadi yang berani mencoba dan mengembangkan diri."
  },
  projects: [
    { tag: "AI", title: "Melanoma Detection Using Transfer Learning: A Comparative Study of ResNet50, EfficientNetB3, and MobileNetV2 on Dermoscopic Images", stack: "Training Model, Riset, Publish Jurnal", image: "metopen.png", link: "https://drive.google.com/file/d/1TQtw8IIYTzgAankqp2lMUInVoC1Sg8lq/view?usp=sharing" },
    { tag: "Hardware", title: "Smart Solar Tracker use PID Controller", stack: "Arduino, Sensor LDR, Motor DC, Phyton", image: "smartsolar.png", link: "https://drive.google.com/file/d/1BeML4FmaLb0tEy_ilJazfbrUUZO3qvux/view?usp=sharing" },
    { tag: "App", title: "SienceHub Education App", stack: "Android studio, GitHub, Kotlin, SQL", image: "Sciencehub.png", link: "https://drive.google.com/file/d/1hXYFhzf6q0hD3zh3g5ABB-GxIkPpmzJ3/view?usp=sharing" },
    { tag: "Web", title: "smpnsatujapah.sch.id", stack: "HTML, Javascript, Bisnis", image: "smpn1japah.png", link: "https://smpnsatujapah.sch.id" },
    { tag: "Jaringan Komputer", title: "Membangun Simulasi Jaringan Komputer Di Gedung D4 Fakultas Matematika Dan Ilmu Pengetahuan Alam Universitas Negeri Semarang", stack: "Analisis Gedung, Cisco treacer, Gambar Teknik", image: "jarkom.png", link: "https://drive.google.com/file/d/1dwad3QTvORkI9UUCbkJdVj7tPo57d3jL/view?usp=sharing" },
    { tag: "Hardware", title: "Smart Skin Detector for perfect cushion selection", stack: "Arduino, Sensor Warna, KNN.", image: "smartskin.png", link: "https://drive.google.com/file/d/1YpNxUBNyzHQAweitoLu_v6Smu2FuDIwM/view?usp=sharing" },
    { tag: "Matlab", title: "FIR design and Noise cancelling assigment", stack: "Matlab, Filter, Voice", image: "matlab.png", link: "https://drive.google.com/file/d/1c7s2QzyEfVBiuDi7M59ORsxZa5tyxElf/view?usp=sharing" }
  ],
  experience: [
    { title: "Staf Ahli", place: "Departemen F HIMPROTE FT UNNES", date: "2025 - Sekarang", image: "himpro.png", desc: "Selama Menjadi Staf Ahli Departemen Teknologi Informasi dan Komunikasi di HIMPROTE saya banyak belajar mengenai Adobe dan sudah menguasai Canva, Aligh Motion dan Mengelola Sosial Media secara utuh." },
    { title: "Staf Kominfo", place: "HMW FT UNNES", date: "2025 - 2026", image: "hmw.png", desc: "Saat berada di Kominfo HMW FT UNNES saya banyak belajar mengenai pembuatan desain promosi yang efektif untuk menarik minat klien." },
    { title: "Ketua Pelaksana", place: "Pelatihan Medis Panitia PKKMB Elektro UNNES", date: "2026", image: "ketuplak.png", desc: "Dari Pengalaman ini saya belajar cara berkomunikasi dengan baik dan mengatur waktu selama persiapan dan pelaksanaan acara." },
    { title: "Sekretaris", place: "Class Multimedia Skill 2026", date: "2026", image: "sekre.png", desc: "Saat Menjadi Sekretaris Program Kerja saya belajar mengelola persuratan yang masuk dan keluar, pembuatan proposal yang sah, Menyusun agenda rapat, menyusun caption, notulensi, dan laporan kegiatan ." },
    { title: "Koordinator Sie PDD", place: "EXPO 2025", date: "2025", image: "copddexpo.png", desc: "Pengalaman pertama menjadi koordinator divisi dengan SDM sedikit dan timeline yang singkat membuat saya belajar menguasai situasi dan kodisi dilapangan saat dokumentasi penting berlangsung." },
    { title: "Koordinator Sie PDD", place: "Pelatian Menejemen Kepemimpinan Teknik Elektro", date: "2026", image: "PPMKTE.png", desc: "Menjadi Koordinator beranggota 3 oang di acara besar dengan jumlah mahasiswa 400+ sangat mengasah kecepatan dan ketepatan dalam mendokumentasikan serangkaian acara dan mengkoordinasikan job ke anggota seefisien mungkin." },
    { title: "Koordinator Sie PDD", place: "Pelatihan Administrasi 2026", image: "copddpas.png", date: "2026", desc: "Dalam acara ini saya dipercaya Menjadi Operator OBS dan sound system." },
    { title: "PDD", place: "ECO PLAN", date: "2026", image: "pddeco.png", desc: "Menjadi PDD pada acara ini saya belajar mengelola sosial media dan menyebarkan informasi secara visual dan interaktif. " },
    { title: "Sie Perkap", place: "Open Recruitmen HIMPROTE", date: "2025", image: "perkap.png", desc: "Dalam serangkaian acara ini saya belajar menjadi HR dengan melakukan litsus pada pelamar." },
    { title: "Sie Kestari", place: "GEMASTE X EXPO 2026", date: "2026", image: "kestari.png", desc: "Menjadi sie kestari di acara Lomba Nasional saya belajar membuat daftar presensi juga merecap kehadiran tamu dan peserta." },
    { title: "Sie Acara", place: "PILMAPRES 2027", date: "2026", image: "acara.png", desc: "Menyusun acara, rundown dan memonitor kelancaran acara." },
    { title: "Sie Humas", place: "Electrical cup 2025", date: "2025", image: "humaselcup.png", desc: "Menghubungi juri, memasukan surat-surat ke pihak terkait, menghubungi tamu undangan, memberikan informasi dan jarkoman kepada peserta lomba, dari acara ini saya belajar cara berkomunikasi secara profesional dengan orang-orang penting." },
    { title: "Sie Humas", place: "Funding Talk 2026", date: "2026", image: "humasft.png", desc: "Program kerja ini telah berlangsung di 7 november 2026, menjadi humas di acara ini saya menghubungu berbagai media partner hingga lingkup external, salah satunya kwu fv uny." },
    { title: "Koordinator Sie P3K", place: "ELCO 2026", date: "2026", image: "cop3k.png", desc: "Menjadi koor sie p3k saat ospek memberikan saya ilmu medis mendasar dan beberpa ilmu medis lanjut yang sangat berguna saat serangkaian ospek berlangsung." },
    { title: "Pendamping Mahasiswa baru Teknik Elektro", place: "ELCO 2025", date: "2025", image: "ikpk.png", desc: "Menjadi pembimbing selama masa orientasi kampus membuat saya belajar betapa pentingnya peran saya untuk memberitahu dan mengomunikasikan kepada mahasiswa baru untuk mengenal lingkungan baru sekaligus membangun relasi antar angkatan." },
    { title: "Presidium III", place: "MTMTE 2025 FT UNNES", date: "2026", image: "mtmte.png", desc: "Menjadi Presidium III saat sidang membuat saya belajar mendengarkan dan memahami debat kritis dan mempelajari peenulisan pergantian undang-undang saat debat berlangsung." },
    { title: "Presidium III", place: "Pamuker HMW FT UNNES", date: "2026", image: "pamuker.png", desc: "Menjadi Presidium III saat sidang membuat saya belajar mendengarkan dan memahami debat kritis dan mempelajari peenulisan pergantian undang-undang saat debat berlangsung." },
    { title: "Moderator", place: "Dialog Akademik", date: "2025", image: "moderator.png", desc: "Sie Acara Sekaligus Moderator yang menghimpun mahasiswa teknik Elektro untuk berkeluh kesah mengenai fasilitas, sarpras, dan SDM di Lingkungan Teknik Elektro melalui sosialisasi advokasi." }
  ],
  education: [
    { title: "S1 Teknik Komputer", place: "Universitas Negeri Semarang", date: "2024 - Sekarang", desc: "Saat di Perkuliahan selain fokus pada akademik saya juga aktif di 2 organisasi Himpunan di FT UNNES namun saya lebih fokus kepada nilai akademik dan project individu maupun kelompok" },
    { title: "Jurusan IPA", place: "SMA Negeri 1 Demak", date: "2021 - 2024", desc: "Saya Pernah meraih Juara 4 di Mapel Teknik Informatika saat seleksi olimpiade di lingkungan sekolah" },
    { title: "Kelas Unggulan", place: "SMP Negeri 1 Demak", date: "2017 - 2021", desc: "Saya Mengisi Kelas Unggulan Selama 3 Tahun berturut-turut hingga lulus dan berbahasa inggris dalam pembelajaran sehari hari" },
    { title: "Bustanu Usyaqil Quran", place: "SDS BUQ Betengan Demak", date: "2011 - 2017", desc: "Saya Khatam Qiraati pada umur 9 tahun dan khatam alquran pada umur 12 tahun saat menempuh pendidikan SD" }
  ],
  certificates: [
    { tag: "Pelatihan", title: "Pelatihan menejemen kepeminpinan", issuer: "HIMPROTE FT UNNES", date: "2025", image: "pmkte.png", link: "https://drive.google.com/file/d/1D6xC_zZmYbIPLXzWnrWY5FhO1UlmQ4JS/view?usp=sharing" },
    { tag: "Pelatihan", title: "Pelatihan Public Speaking", issuer: "B1G FAIR", date: "2025", image: "ps.png", link: "https://drive.google.com/file/d/13pAqoS6pRK7QAPZYyS4YUANeNDg4PxfH/view?usp=sharing" },
    { tag: "Pelatihan", title: "Pelatihan Career Preparation", issuer: "B1G FAIR in collaboration with BEM FEB UPGRIS", date: "2025", image: "cp.png", link: "https://drive.google.com/file/d/1-P5EKZ0Cq7sYJ1F9U41-UgvovBPlEgBj/view?usp=sharing" },
    { tag: "Pelatihan", title: "Pelatihan Entrepreneur", issuer: "B1G FAIR in collaboration with BEM FEB UNNES", date: "2025", image: "ep.png", link: "https://drive.google.com/file/d/1Lpaxu7otZJlrQrv5UbSXIs98scuQLh1C/view?usp=sharing" },
    { tag: "Penghargaan", title: "Trust Training Partners", issuer: "Microsoft Office", date: "2025", image: "microsoft.png", link: "https://drive.google.com/file/d/1DIaBYQCerHEd7HoxyEneBVcT0Hw1a6JZ/view?usp=sharing" },
    { tag: "Penghargaan", title: "International Youth Goals Singapre,Malaysia and Thailand Batch 2", issuer: "B1G FAIR in collaboration with Olpedia Education Center", date: "2025", image: "iyg.png", link: "https://drive.google.com/file/d/1qFVByK_ff28Xg6Zmge-sPuwmLo8kNw8Y/view?usp=sharing" },
    { tag: "Panitia", title: "Sertifikat ELCO 2026", issuer: "HIMPROTE FT UNNES", date: "2026", image: "sertifelco.png", link: "" },
    { tag: "Panitia", title: "Sertifikat Class Multimedia Skill 2026", issuer: "HIMPROTE FT UNNES", date: "2026", image: "sertifcms.png", link: "" },
    { tag: "Panitia", title: "Sertifikat Electrical Cup 2025", issuer: "HIMPROTE FT UNNES", date: "2026", image: "sertifelcup.png", link: "" },
    { tag: "Panitia", title: "Sertifikat Pelatian Administrasi dan Sponsorship 2026", issuer: "HIMPROTE FT UNNES", date: "2026", image: "sertifpas.png", link: "" },
    { tag: "Panitia", title: "Sertifikat PILMAPRES 2026", issuer: "HIMPROTE FT UNNES", date: "2026", image: "sertifpilmapres.png", link: "" }
  ],
  skillsBox: { title: "Technical Skills", text: "Saya mampu mengaplikasikan ide saya dengan baik dan mengomunikasikannya melalui media informatif." },
  skills: ["MATLAB", "Python", "Arduino", "HTML", "SQL", "PHP", "JavaScript"],
  softBox: { title: "Soft Skills", text: "Saya mampu berbicara didepan banyak orang, dan menjadi orang yang komunikatif di dalam tim. berdasarkan pengalaman berorganisasi manajemen waktu saya dinilai baik." },
  softSkills: ["Komunikatif", "Public Speaking", "Disiplin", "Berpenampilan rapi", "Bekerja dalam Tim", "Kreativitas"],
  toolsBox: { title: "Tools I Use", text: "Berikut adalah Tools yang saya gunakan untuk membantu saya bekerja." },
  tools: ["VS Code", "MATLAB", "Arduino IDE", "HTML", "Adobe Photoshop", "GitHub", "Figma", "SQL", "Canva"],
  testimonials: [
    { photo: "", role: "Dosen", rating: "4.9", text: "Sejujurnya Kelompok kalian adalah kelompok terbaik dan paling rapi dalam penulisan, risetnya juga sudah sangat bagus sekali setara Q3 Scopus. (AI)" },
    { photo: "", role: "Ketua Tim", rating: "5.0", text: "Kemampuan Sindara Sudah memumpuni untuk membuat sumulasi rangkaian dan cara kerjanya, ide project ini juga berasal dari sindara. (Smart Solar Tracker)" },
    { photo: "", role: "Teman Kelompok", rating: "5.0", text: "Pas ngerjain Aplikasi, sindara orang yang sering mengajukan ide-ide kreatif dan mampu mengimplementasikannya.(Science Hub APP)" }
  ],
  contact: {
    intro: "Jika saya diberikesempatan untuk magang di instansi sebisa mungkin saya akan menerahkan seluruh kemampuan yang saya punya untuk perusahaan dan mempelajari hal-hal baru semasa menjalankan magang. saya harap dengan diterimanya saya magang di perusahaan bapak/ibu bisa menjadi inovasi baru bagi perusahaan.",
    email: "sindarasekarhem@gmail.com",
    location: "Semarang, Jawa Tengah, Indonesia",
    message: [
      { label: "WhatsApp", url: "https://wa.me/6281214414910" },
      { label: "Instagram", url: "https://instagram.com/sindaraaskr" },
      { label: "Email", url: "mailto:sindarasekarhem@gmail.com" }
    ]
  },
  footer: "All Rights Reserved By Sindara"
};

/* =====================================================
   WEB AUDIO API SOUND EFFECTS ENGINE (Zero External MP3)
   ===================================================== */
const SFX = (() => {
  let ctx = null;
  let enabled = localStorage.getItem('portfolio_sfx') !== 'off';
  let lastHover = 0;

  const ensureCtx = () => {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) ctx = new AC();
    }
    if (ctx && ctx.state === 'suspended') ctx.resume();
    return ctx;
  };

  const tone = (freqStart, freqEnd, duration, type = 'sine', vol = 0.06, delay = 0) => {
    if (!enabled) return;
    const ac = ensureCtx();
    if (!ac) return;
    const now = ac.currentTime + delay;
    const osc = ac.createOscillator();
    const gain = ac.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freqStart, now);
    if (freqEnd !== freqStart) {
      osc.frequency.exponentialRampToValueAtTime(Math.max(20, freqEnd), now + duration);
    }
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(vol, now + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.connect(gain);
    gain.connect(ac.destination);
    osc.start(now);
    osc.stop(now + duration + 0.02);
  };

  return {
    isEnabled: () => enabled,
    toggle() {
      enabled = !enabled;
      localStorage.setItem('portfolio_sfx', enabled ? 'on' : 'off');
      if (enabled) this.success();
      return enabled;
    },
    hover() {
      const now = performance.now();
      if (now - lastHover < 65) return;
      lastHover = now;
      tone(740, 980, 0.045, 'sine', 0.028);
    },
    click() {
      tone(520, 260, 0.07, 'triangle', 0.075);
      tone(880, 620, 0.045, 'sine', 0.035, 0.015);
    },
    tab() {
      tone(420, 680, 0.08, 'sine', 0.055);
      tone(680, 920, 0.09, 'triangle', 0.04, 0.04);
    },
    success() {
      tone(587.33, 587.33, 0.11, 'sine', 0.06, 0);
      tone(880, 880, 0.16, 'sine', 0.065, 0.07);
    },
    whoosh() {
      tone(280, 760, 0.18, 'sine', 0.05);
    }
  };
})();

/* =====================================================
   RENDER CONTENT
   ===================================================== */
const $ = id => document.getElementById(id);
const initials = s => s.split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase();
const link = l => `<a href="${l.url}" target="_blank" rel="noopener" data-sfx="click">${l.label}</a>`;
const media = (el, src, alt, label) => {
  if (src) el.innerHTML = `<img src="${src}" alt="${alt}" loading="lazy">`;
  else { el.classList.add('ph'); el.textContent = label; }
};

document.title = DATA.name + ' | Portfolio';
$('brand').textContent = DATA.brand;
$('name').textContent = DATA.name;
$('socials').innerHTML = DATA.socials.map(link).join('');
['resume1', 'resume2'].forEach(id => { DATA.resume ? $(id).href = DATA.resume : $(id).hidden = true; });
media($('heroPhoto'), DATA.photo, DATA.name, initials(DATA.name));
if (DATA.photo) $('heroPhoto').classList.add('pop');
media($('aboutPhoto'), DATA.aboutPhoto, DATA.name, initials(DATA.name));
$('aboutTitle').textContent = DATA.about.title;
$('aboutText').innerHTML = DATA.about.text;

// Role Typing Animation
const validRoles = DATA.roles.filter(Boolean);
const rolesEl = $('roles');
if (validRoles.length > 1) {
  rolesEl.innerHTML = `<span class="typed-wrap"><span id="typedText"></span><span class="cursor"></span></span>`;
  const typedEl = $('typedText');
  let ri = 0, ci = 0, del = false;
  const tick = () => {
    const word = validRoles[ri];
    typedEl.textContent = del ? word.slice(0, --ci) : word.slice(0, ++ci);
    let wait = del ? 45 : 85;
    if (!del && ci === word.length) { del = true; wait = 1800; }
    else if (del && ci === 0) { del = false; ri = (ri + 1) % validRoles.length; wait = 350; }
    setTimeout(tick, wait);
  };
  tick();
} else {
  rolesEl.innerHTML = validRoles.map(r => `<span>${r}</span>`).join('');
}

$('projectGrid').innerHTML = DATA.projects.map((p, i) => `
  <article class="card reveal scale-in" style="--d:${(i % 3) * 100}ms">
    <div class="img ${p.image ? '' : 'ph'}">${p.image ? `<img src="${p.image}" alt="${p.title}" loading="lazy">` : 'Project Image'}</div>
    <div class="body">
      <div class="meta"><span class="tag">${p.tag}</span><span>#${String(i + 1).padStart(2, '0')}</span></div>
      <h3>${p.title}</h3>
      <p>Techstack: ${p.stack}</p>
      <a class="btn" href="${p.link}" target="_blank" rel="noopener" data-sfx="click">View Project</a>
    </div>
  </article>`).join('');

const tl = arr => arr.map((e, i) => `
  <div class="tl reveal from-right" style="--d:${Math.min(i * 60, 240)}ms">
    <div class="txt"><h3>${e.title}</h3><h4>${e.place}</h4><div class="date">${e.date}</div><p>${e.desc}</p></div>
    ${e.image ? `<div class="pic"><img src="${e.image}" alt="${e.title}" loading="lazy"></div>` : ''}
  </div>`).join('');
$('exp').innerHTML = tl(DATA.experience);
$('edu').innerHTML = tl(DATA.education);

document.querySelectorAll('.tabs button').forEach(b => b.onclick = () => {
  SFX.tab();
  document.querySelectorAll('.tabs button').forEach(x => x.classList.toggle('on', x === b));
  const showExp = b.dataset.tab === 'exp';
  $('exp').hidden = !showExp;
  $('edu').hidden = showExp;
  const activeList = showExp ? $('exp') : $('edu');
  activeList.classList.remove('tab-enter');
  void activeList.offsetWidth;
  activeList.classList.add('tab-enter');
  activeList.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
});

$('certGrid').innerHTML = DATA.certificates.map((c, i) => {
  const href = c.link || c.image;
  return `
  <article class="card cert reveal scale-in" style="--d:${(i % 3) * 90}ms">
    <div class="img ${c.image ? '' : 'ph'}">${c.image ? `<img src="${c.image}" alt="${c.title}" loading="lazy">` : 'Certificate'}</div>
    <div class="body">
      <div class="meta"><span class="tag">${c.tag}</span><span>${c.date}</span></div>
      <h3>${c.title}</h3>
      <p>${c.issuer}</p>
      ${href ? `<a class="btn" href="${href}" target="_blank" rel="noopener" data-sfx="click">View Certificate</a>` : ''}
    </div>
  </article>`;
}).join('');

$('skillTitle').textContent = DATA.skillsBox.title;
$('skillText').textContent = DATA.skillsBox.text;
$('skills').innerHTML = DATA.skills.map(s => `<li>${s}</li>`).join('');

$('softTitle').textContent = DATA.softBox.title;
$('softText').textContent = DATA.softBox.text;
$('soft').innerHTML = DATA.softSkills.map(s => `<li>${s}</li>`).join('');

$('toolTitle').textContent = DATA.toolsBox.title;
$('toolText').textContent = DATA.toolsBox.text;
$('tools').innerHTML = DATA.tools.map(s => `<li>${s}</li>`).join('');

$('rail').innerHTML = DATA.testimonials.map((t, i) => `
  <div class="t reveal" style="--d:${i * 110}ms">
    <header><div class="av ${t.photo ? '' : 'ph'}">${t.photo ? `<img src="${t.photo}" alt="${t.role}">` : '&#9679;'}</div>
    <div><h3>${t.role}</h3><span class="star">&#9733; ${t.rating}</span></div></header>
    <p>${t.text}</p>
  </div>`).join('');

$('intro').textContent = DATA.contact.intro;
$('email').textContent = DATA.contact.email;
$('loc').textContent = DATA.contact.location;
$('cSocials').innerHTML = DATA.socials.map(link).join('');
$('cMsg').innerHTML = DATA.contact.message.map(link).join('');

$('copyBtn').onclick = async e => {
  SFX.success();
  try { await navigator.clipboard.writeText(DATA.contact.email); e.target.textContent = 'Copied!'; }
  catch { e.target.textContent = DATA.contact.email; }
  setTimeout(() => e.target.textContent = 'Copy Email', 1800);
};
$('footer').textContent = '\u00A9 ' + new Date().getFullYear() + ' ' + DATA.footer;

$('burger').onclick = () => {
  SFX.click();
  $('menu').classList.toggle('open');
};
$('menu').onclick = () => $('menu').classList.remove('open');

// Sound Toggle Button
const sfxBtn = $('sfxToggle'), sfxIcon = $('sfxIcon');
const syncSfxUI = () => {
  const on = SFX.isEnabled();
  sfxBtn.classList.toggle('muted', !on);
  sfxIcon.textContent = on ? '🔊' : '🔇';
  sfxBtn.title = on ? 'Sound Effects: ON' : 'Sound Effects: OFF';
};
syncSfxUI();
sfxBtn.onclick = () => {
  SFX.toggle();
  syncSfxUI();
};

// Bind hover & click SFX across interactive elements
document.addEventListener('pointerenter', e => {
  const target = e.target.closest('a, button, .chips li, .card, .tl');
  if (target) SFX.hover();
}, true);

document.addEventListener('click', e => {
  if (e.target.closest('[data-sfx="click"]')) SFX.click();
});

/* =====================================================
   PRELOADER, SCROLL REVEAL, 3D TILT & PARTICLE CANVAS
   ===================================================== */
window.addEventListener('load', () => {
  setTimeout(() => $('preloader').classList.add('done'), 420);
});

const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Scroll Progress, Sticky Header, Active Nav & Back-to-Top
const progress = $('progress'), header = $('topHeader'), toTop = $('toTop');
const navLinks = [...document.querySelectorAll('#menu a')];
const sections = navLinks.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

const onScroll = () => {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
  header.classList.toggle('scrolled', y > 24);
  toTop.classList.toggle('show', y > 450);

  let current = '';
  sections.forEach(sec => {
    if (y + 140 >= sec.offsetTop) current = '#' + sec.id;
  });
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === current));
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
toTop.onclick = () => {
  SFX.whoosh();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Desktop Spotlight & 3D Tilt Cards
if (window.matchMedia('(pointer: fine)').matches) {
  window.addEventListener('mousemove', e => {
    document.body.classList.add('pointer-active');
    document.documentElement.style.setProperty('--mx', e.clientX + 'px');
    document.documentElement.style.setProperty('--my', e.clientY + 'px');
  }, { passive: true });

  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      const rx = ((y / r.height) - 0.5) * -7;
      const ry = ((x / r.width) - 0.5) * 7;
      card.style.setProperty('--cx', x + 'px');
      card.style.setProperty('--cy', y + 'px');
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// Hero Interactive Particle Network
(() => {
  const canvas = $('heroCanvas');
  if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const ctx = canvas.getContext('2d');
  let w, h, pts = [];
  const mouse = { x: -999, y: -999 };

  const resize = () => {
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
    const count = Math.min(55, Math.floor((w * h) / 22000));
    pts = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r: Math.random() * 1.8 + 0.8
    }));
  };
  resize();
  window.addEventListener('resize', resize);
  canvas.parentElement.addEventListener('mousemove', e => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left;
    mouse.y = e.clientY - r.top;
  });
  canvas.parentElement.addEventListener('mouseleave', () => { mouse.x = -999; mouse.y = -999; });

  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(56, 189, 248, 0.55)';
      ctx.fill();

      for (let j = i + 1; j < pts.length; j++) {
        const q = pts[j];
        const d = Math.hypot(p.x - q.x, p.y - q.y);
        if (d < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(47, 123, 255, ${(1 - d / 120) * 0.22})`;
          ctx.stroke();
        }
      }
      const dm = Math.hypot(p.x - mouse.x, p.y - mouse.y);
      if (dm < 150) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = `rgba(56, 189, 248, ${(1 - dm / 150) * 0.35})`;
        ctx.stroke();
      }
    }
    requestAnimationFrame(draw);
  };
  draw();
})();
