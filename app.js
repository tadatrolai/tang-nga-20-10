/**
 * Website Quà Tặng 20/10 Dành Riêng Cho Vợ Yêu Nguyễn Thị Nga
 * Từ Chồng Bùi Duy Tân • Kỷ niệm ngày cưới 01/10/2023 (PIN: 0110)
 */

const WEDDING_DATE_ISO = "2023-10-01T00:00:00+07:00";
const WEDDING_DATE_DISPLAY = "01/10/2023";
const SECRET_PIN = "0110";

const MEMORIES = [
  {
    id: 1,
    src: "photos/photo_01.jpg",
    chapterKey: "chapter1",
    chapterLabel: "Chương 1 • Ngày Chung Đôi",
    date: "01/10/2023",
    title: "Nắm Tay Bên Bờ Biển",
    caption:
      "Khoảnh khắc hai vợ chồng mình nắm chặt tay nhau trước biển rộng, mở đầu hành trình về chung một nhà từ ngày 01/10/2023.",
    likes: 99,
  },
  {
    id: 2,
    src: "photos/photo_02.jpg",
    chapterKey: "chapter1",
    chapterLabel: "Chương 1 • Ngày Chung Đôi",
    date: "01/10/2023",
    title: "Khung Cửa Vòm Hạnh Phúc",
    caption:
      "Bức ảnh cưới ngọt ngào dưới vòm hoa trắng mà Anh luôn trân quý cài làm hình nền khóa điện thoại để ngắm Vợ yêu mỗi ngày.",
    likes: 128,
  },
  {
    id: 3,
    src: "photos/photo_03.jpg",
    chapterKey: "chapter1",
    chapterLabel: "Chương 1 • Ngày Chung Đôi",
    date: "01/10/2023",
    title: "Phút Hậu Trường Đáng Yêu",
    caption:
      "Tấm ảnh selfie hậu trường chụp ảnh cưới tự nhiên, nhí nhảnh được Anh gắn dấu Sao yêu thích trong bộ sưu tập kỷ niệm.",
    likes: 105,
  },
  {
    id: 4,
    src: "photos/photo_04.jpg",
    chapterKey: "chapter2",
    chapterLabel: "Chương 2 • Chuyến Đi Thanh Xuân",
    date: "05/12/2021",
    title: "Mùa Cúc Họa Mi Bên Em",
    caption:
      "Giữa cánh đồng cúc họa mi trắng tinh khôi ngập nắng thu đông, Vợ yêu nở nụ cười tỏa nắng và thả tim ngọt ngào bên Anh.",
    likes: 168,
  },
  {
    id: 5,
    src: "photos/photo_05.jpg",
    chapterKey: "chapter2",
    chapterLabel: "Chương 2 • Chuyến Đi Thanh Xuân",
    date: "08/11/2023",
    title: "Buổi Tối Ấm Áp Bên Nhau",
    caption:
      "Những tháng ngày vợ chồng son thật ngọt ngào, chỉ cần ngồi cạnh nhau trò chuyện cũng thấy bình yên đến lạ.",
    likes: 88,
  },
  {
    id: 6,
    src: "photos/photo_06.jpg",
    chapterKey: "chapter2",
    chapterLabel: "Chương 2 • Chuyến Đi Thanh Xuân",
    date: "11/11/2023",
    title: "Con Đường Mùa Thu Nắm Tay",
    caption:
      "Giữa hàng cây xanh ngập nắng thu, Vợ yêu khẽ nghiêng đầu tựa vào vai Anh thật dịu dàng và ấm áp.",
    likes: 94,
  },
  {
    id: 7,
    src: "photos/photo_07.jpg",
    chapterKey: "chapter2",
    chapterLabel: "Chương 2 • Chuyến Đi Thanh Xuân",
    date: "12/11/2023",
    title: "Gió Biển Chiều Hoàng Hôn",
    caption:
      "Cùng Vợ yêu dạo bước bên bờ biển chiều, lắng nghe tiếng sóng vỗ và lưu giữ thêm một kỷ niệm đẹp của tuổi trẻ.",
    likes: 91,
  },
  {
    id: 8,
    src: "photos/photo_08.jpg",
    chapterKey: "chapter2",
    chapterLabel: "Chương 2 • Chuyến Đi Thanh Xuân",
    date: "07/04/2024",
    title: "Bình Yên Trên Mọi Cung Đường",
    caption:
      "Mỗi chuyến đi xa đều trở thành niềm vui trọn vẹn khi có Vợ yêu đồng hành và tựa đầu lên vai Anh.",
    likes: 96,
  },
  {
    id: 9,
    src: "photos/photo_09.jpg",
    chapterKey: "chapter2",
    chapterLabel: "Chương 2 • Chuyến Đi Thanh Xuân",
    date: "01/06/2024",
    title: "Kỷ Niệm Chuyến Đi Thái Lan",
    caption:
      "Hai vợ chồng diện trang phục truyền thống Thái Lan rực rỡ tại chùa Wat Arun ở Bangkok với bao kỷ niệm đáng nhớ.",
    likes: 132,
  },
  {
    id: 10,
    src: "photos/photo_10.jpg",
    chapterKey: "chapter3",
    chapterLabel: "Chương 3 • Đêm Hẹn Hò",
    date: "01/10/2024",
    title: "Kỷ Niệm Tròn 1 Năm Ngày Cưới",
    caption:
      "Bàn tiệc lãng mạn rải cánh hoa hồng đỏ, bó hoa tươi thắm và ly rượu vang mừng 1 năm ngày chúng mình về chung một nhà.",
    likes: 145,
  },
  {
    id: 11,
    src: "photos/photo_11.jpg",
    chapterKey: "chapter4",
    chapterLabel: "Chương 4 • Tổ Ấm Nhỏ",
    date: "20/09/2025",
    title: "Vi Vu Phố Núi Cùng Con Yêu",
    caption:
      "Buổi tối cả nhà 3 người cùng nhau dạo mát trên chiếc xe máy nhỏ giữa tiết trời se lạnh, con trai đội mũ len ấm áp ngồi ngoan trong vòng tay bố mẹ.",
    likes: 175,
  },
  {
    id: 12,
    src: "photos/photo_12.jpg",
    chapterKey: "chapter4",
    chapterLabel: "Chương 4 • Tổ Ấm Nhỏ",
    date: "28/01/2025",
    title: "Sắc Đào Mùa Xuân Ất Tỵ",
    caption:
      "Vợ yêu dịu dàng, đằm thắm trong tà áo dài hồng phấn bên cành hoa đào ngày Tết cổ truyền.",
    likes: 138,
  },
  {
    id: 13,
    src: "photos/photo_13.jpg",
    chapterKey: "chapter4",
    chapterLabel: "Chương 4 • Tổ Ấm Nhỏ",
    date: "02/02/2025",
    title: "Duyên Dáng Áo Dài Đỏ",
    caption:
      "Nét đẹp rạng ngời của Vợ yêu dưới ánh đèn lồng mùa xuân khiến Anh ngắm mãi không rời mắt.",
    likes: 142,
  },
  {
    id: 14,
    src: "photos/photo_14.jpg",
    chapterKey: "chapter4",
    chapterLabel: "Chương 4 • Tổ Ấm Nhỏ",
    date: "13/07/2025",
    title: "Tổ Ấm Nhỏ Ba Người",
    caption:
      "Khoảnh khắc trọn vẹn và ấm áp nhất khi cả gia đình nhỏ 3 người gồm Anh, Vợ yêu và con trai kháu khỉnh quây quần bên nhau.",
    likes: 256,
  },
  {
    id: 15,
    src: "photos/photo_15.jpg",
    chapterKey: "chapter3",
    chapterLabel: "Chương 3 • Đêm Hẹn Hò",
    date: "24/12/2025",
    title: "Đêm Giáng Sinh Ngọt Ngào",
    caption:
      "Buổi tối hẹn hò đi xem phim đêm Giáng sinh ấm áp, giữ trọn sự lãng mạn như thuở mới yêu.",
    likes: 125,
  },
];

const FEATURED_PHOTOS = [
  {
    id: 16,
    src: "photos/photo_16.jpg",
    chapterKey: "hero",
    chapterLabel: "Khung Hình Mở Đầu • Hẹn Ước",
    date: "19/08/2022",
    title: "Bên Nhau Qua Bao Mùa Thương Nhớ",
    caption:
      "Giữa núi rừng mờ sương chiều hôm ấy, cái ôm ấm áp và nụ hôn nhẹ lên má Vợ yêu vẫn nguyên vẹn cảm xúc như ngày đầu.",
    likes: 180,
  },
  {
    id: 17,
    src: "photos/photo_17.jpg",
    chapterKey: "hero",
    chapterLabel: "Khung Hình Mở Đầu • Bình Yên",
    date: "23/11/2021",
    title: "Bình Yên Giản Dị Bên Vợ Yêu",
    caption:
      "Khoảnh khắc Vợ yêu diện váy hoa trắng dịu dàng khẽ tựa đầu vào vai Anh — nơi bình yên nhất luôn là khi có nhau.",
    likes: 172,
  },
  {
    id: 18,
    src: "photos/photo_18.jpg",
    chapterKey: "tribute",
    chapterLabel: "Nàng Thơ Của Anh • Điều Tự Hào 01",
    date: "27/02/2021",
    title: "Nụ Cười Tỏa Nắng",
    caption:
      "Nụ cười má lúm đồng tiền trong trẻo, dịu dàng của Vợ yêu Nguyễn Thị Nga luôn làm trái tim Anh tan chảy.",
    likes: 195,
  },
  {
    id: 19,
    src: "photos/photo_19.jpg",
    chapterKey: "tribute",
    chapterLabel: "Nàng Thơ Của Anh • Điều Tự Hào 02",
    date: "21/09/2025",
    title: "Sự Dịu Dàng & Tần Tảo",
    caption:
      "Vợ yêu dịu dàng ôm con trai nhỏ dưới vòm hoa trắng — người phụ nữ chu toàn giữ lửa cho tổ ấm của chúng mình.",
    likes: 210,
  },
  {
    id: 20,
    src: "photos/photo_20.jpg",
    chapterKey: "tribute",
    chapterLabel: "Nàng Thơ Của Anh • Điều Tự Hào 03",
    date: "13/09/2025",
    title: "Người Mẹ Tuyệt Vời Của Con Trai",
    caption:
      "Chuyến đi biển chiều hạnh phúc của cả gia đình 3 người khi có thêm thiên thần nhỏ đồng hành cùng bố mẹ.",
    likes: 240,
  },
];

const ALL_LIGHTBOX_PHOTOS = [...MEMORIES, ...FEATURED_PHOTOS];

/* =====================================================
   1. BỘ ĐẾM NGÀY CƯỚI THỜI GIAN THỰC TỪ 01/10/2023
   ===================================================== */
function updateMarriageCounter() {
  const start = new Date(WEDDING_DATE_ISO);
  const now = new Date();
  const diffMs = Math.max(0, now.getTime() - start.getTime());

  const totalSeconds = Math.floor(diffMs / 1000);
  const totalDays = Math.floor(totalSeconds / 86400);

  let years = now.getFullYear() - start.getFullYear();
  let lastAnniversary = new Date(
    now.getFullYear(),
    start.getMonth(),
    start.getDate(),
    0,
    0,
    0
  );
  if (now < lastAnniversary) {
    years -= 1;
    lastAnniversary = new Date(
      now.getFullYear() - 1,
      start.getMonth(),
      start.getDate(),
      0,
      0,
      0
    );
  }

  const remMs = Math.max(0, now.getTime() - lastAnniversary.getTime());
  const remDays = Math.floor(remMs / 86400000);
  const hours = Math.floor((remMs % 86400000) / 3600000);
  const minutes = Math.floor((remMs % 3600000) / 60000);
  const seconds = Math.floor((remMs % 60000) / 1000);

  const pad = (n) => String(n).padStart(2, "0");

  const elYears = document.getElementById("cnt-years");
  const elDays = document.getElementById("cnt-days");
  const elHours = document.getElementById("cnt-hours");
  const elMinutes = document.getElementById("cnt-minutes");
  const elSeconds = document.getElementById("cnt-seconds");
  const elTotalBadge = document.getElementById("total-days-badge");

  if (elYears) elYears.textContent = pad(years);
  if (elDays) elDays.textContent = pad(remDays);
  if (elHours) elHours.textContent = pad(hours);
  if (elMinutes) elMinutes.textContent = pad(minutes);
  if (elSeconds) elSeconds.textContent = pad(seconds);
  if (elTotalBadge) {
    elTotalBadge.textContent = `${totalDays.toLocaleString("vi-VN")} ngày bên nhau`;
  }
}

/* =====================================================
   2. HỘP NHẠC PIANO LÃNG MẠN WEB AUDIO API
   ===================================================== */
class RomanticPianoBox {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.timerId = null;
    this.stepIndex = 0;

    // Giai điệu lãng mạn nhẹ nhàng C - G/B - Am7 - Fmaj7
    this.sequence = [
      { notes: [261.63, 329.63, 523.25], dur: 0.65 },
      { notes: [392.0, 659.25], dur: 0.55 },
      { notes: [587.33], dur: 0.55 },
      { notes: [523.25], dur: 0.65 },
      { notes: [246.94, 392.0, 493.88], dur: 0.65 },
      { notes: [392.0, 587.33], dur: 0.55 },
      { notes: [659.25], dur: 0.55 },
      { notes: [587.33], dur: 0.65 },
      { notes: [220.0, 329.63, 523.25], dur: 0.65 },
      { notes: [440.0, 659.25], dur: 0.55 },
      { notes: [587.33], dur: 0.55 },
      { notes: [523.25], dur: 0.65 },
      { notes: [174.61, 261.63, 440.0], dur: 0.65 },
      { notes: [349.23, 523.25], dur: 0.55 },
      { notes: [392.0, 587.33], dur: 0.6 },
      { notes: [261.63, 392.0, 523.25], dur: 0.9 },
    ];
  }

  ensureContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  playTone(freq, duration = 1.4, volume = 0.065) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc1.type = "triangle";
    osc2.type = "sine";
    osc1.frequency.setValueAtTime(freq, now);
    osc2.frequency.setValueAtTime(freq * 2, now);

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1650, now);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(volume, now + 0.035);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + duration + 0.05);
    osc2.stop(now + duration + 0.05);
  }

  playSparkleChime() {
    this.ensureContext();
    if (!this.ctx) return;
    const chord = [523.25, 659.25, 783.99, 1046.5];
    chord.forEach((f, idx) => {
      setTimeout(() => this.playTone(f, 1.3, 0.075), idx * 90);
    });
  }

  start() {
    this.ensureContext();
    if (!this.ctx || this.isPlaying) return;
    this.isPlaying = true;
    this.syncUI();

    const scheduleStep = () => {
      if (!this.isPlaying) return;
      const item = this.sequence[this.stepIndex % this.sequence.length];
      item.notes.forEach((freq, i) => {
        const vol = i === 0 ? 0.045 : 0.065;
        this.playTone(freq, 1.65, vol);
      });
      this.stepIndex += 1;
      this.timerId = setTimeout(scheduleStep, item.dur * 1000);
    };

    scheduleStep();
  }

  stop() {
    this.isPlaying = false;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
    this.syncUI();
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.start();
    }
  }

  syncUI() {
    const bars = document.getElementById("music-bars");
    const label = document.getElementById("music-label");
    if (bars) {
      bars.classList.toggle("playing", this.isPlaying);
    }
    if (label) {
      label.textContent = this.isPlaying ? "Đang phát nhạc" : "Bật nhạc Piano";
    }
  }
}

const pianoBox = new RomanticPianoBox();

/* =====================================================
   3. HIỆU ỨNG CÁNH HOA HỒNG & TRÁI TIM RƠI TRÊN CANVAS
   ===================================================== */
class RosePetalsCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.particles = [];
    this.burstParticles = [];
    this.resize();
    window.addEventListener("resize", () => this.resize());
    this.initAmbientPetals();
    this.animate();
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  initAmbientPetals() {
    const count = window.innerWidth < 600 ? 18 : 30;
    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push(this.createPetal(true));
    }
  }

  createPetal(randomY = false) {
    const colors = [
      "rgba(232, 122, 153, 0.55)",
      "rgba(201, 59, 102, 0.42)",
      "rgba(248, 187, 208, 0.68)",
      "rgba(240, 98, 146, 0.48)",
    ];
    return {
      x: Math.random() * (this.canvas ? this.canvas.width : 1000),
      y: randomY
        ? Math.random() * (this.canvas ? this.canvas.height : 800)
        : -24,
      size: 7 + Math.random() * 9,
      speedY: 0.55 + Math.random() * 1.1,
      speedX: -0.4 + Math.random() * 0.8,
      angle: Math.random() * Math.PI * 2,
      spin: -0.02 + Math.random() * 0.04,
      color: colors[Math.floor(Math.random() * colors.length)],
    };
  }

  launchCelebrationBurst() {
    if (!this.canvas) return;
    const cx = this.canvas.width / 2;
    const cy = this.canvas.height / 2;
    const colors = ["#d81b60", "#ec407a", "#f48fb1", "#c89d54", "#ff80ab"];

    for (let i = 0; i < 55; i++) {
      const angle = (Math.PI * 2 * i) / 55 + (Math.random() - 0.5) * 0.25;
      const speed = 2.2 + Math.random() * 6.5;
      this.burstParticles.push({
        x: cx,
        y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.8,
        size: 8 + Math.random() * 10,
        alpha: 1,
        color: colors[i % colors.length],
      });
    }
  }

  drawHeart(ctx, x, y, size, color, alpha) {
    ctx.save();
    ctx.translate(x, y);
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;
    ctx.beginPath();
    const s = size * 0.55;
    ctx.moveTo(0, s * 0.4);
    ctx.bezierCurveTo(0, -s * 0.3, -s, -s * 0.3, -s, s * 0.4);
    ctx.bezierCurveTo(-s, s * 1.1, 0, s * 1.45, 0, s * 1.9);
    ctx.bezierCurveTo(0, s * 1.45, s, s * 1.1, s, s * 0.4);
    ctx.bezierCurveTo(s, -s * 0.3, 0, -s * 0.3, 0, s * 0.4);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  animate() {
    if (!this.ctx || !this.canvas) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (const p of this.particles) {
      p.y += p.speedY;
      p.x += p.speedX + Math.sin(p.angle) * 0.35;
      p.angle += p.spin;

      if (p.y > this.canvas.height + 24) {
        p.y = -20;
        p.x = Math.random() * this.canvas.width;
      }

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate(p.angle);
      this.ctx.fillStyle = p.color;
      this.ctx.beginPath();
      this.ctx.ellipse(0, 0, p.size, p.size * 0.62, 0, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    }

    for (let i = this.burstParticles.length - 1; i >= 0; i--) {
      const b = this.burstParticles[i];
      b.x += b.vx;
      b.y += b.vy;
      b.vy += 0.11;
      b.alpha -= 0.015;
      if (b.alpha <= 0) {
        this.burstParticles.splice(i, 1);
      } else {
        this.drawHeart(this.ctx, b.x, b.y, b.size, b.color, b.alpha);
      }
    }

    requestAnimationFrame(() => this.animate());
  }
}

/* =====================================================
   4. MÀN HÌNH MỞ KHÓA PIN 0110 (KỶ NIỆM 01/10)
   ===================================================== */
let enteredPin = "";
let isUnlocked = false;

function initLockScreen(petalsFx) {
  const lockScreen = document.getElementById("lock-screen");
  const dots = document.querySelectorAll("#pin-dots .pin-dot");
  const dotsWrap = document.getElementById("pin-dots");
  const pinMessage = document.getElementById("pin-message");
  const keyBtns = document.querySelectorAll(".key-btn[data-key]");
  const btnClear = document.getElementById("btn-clear-pin");
  const btnQuick = document.getElementById("btn-quick-unlock");

  function renderDots() {
    dots.forEach((dot, idx) => {
      dot.classList.toggle("filled", idx < enteredPin.length);
    });
  }

  function unlockWebsite() {
    if (isUnlocked) return;
    isUnlocked = true;
    if (pinMessage) {
      pinMessage.textContent =
        "Chào mừng Vợ yêu Nguyễn Thị Nga! Đang mở món quà 20/10 của Anh...";
    }
    if (lockScreen) {
      lockScreen.classList.add("unlocked");
    }
    document.body.classList.remove("locked");
    pianoBox.start();
    if (petalsFx) {
      petalsFx.launchCelebrationBurst();
    }
  }

  function handleDigit(digit) {
    if (isUnlocked || enteredPin.length >= 4) return;
    enteredPin += digit;
    renderDots();

    if (enteredPin.length === 4) {
      if (enteredPin === SECRET_PIN) {
        setTimeout(unlockWebsite, 180);
      } else {
        if (dotsWrap) {
          dotsWrap.classList.remove("shake");
          void dotsWrap.offsetWidth;
          dotsWrap.classList.add("shake");
        }
        if (pinMessage) {
          pinMessage.textContent =
            "Mật mã là 4 số ngày tháng cưới 0110 — Vợ yêu thử lại hoặc bấm Mở quà nhé!";
        }
        setTimeout(() => {
          enteredPin = "";
          renderDots();
        }, 480);
      }
    }
  }

  keyBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const digit = btn.getAttribute("data-key");
      if (digit !== null) handleDigit(digit);
    });
  });

  if (btnClear) {
    btnClear.addEventListener("click", () => {
      enteredPin = "";
      renderDots();
      if (pinMessage) {
        pinMessage.textContent = "Gợi ý kỷ niệm: Ngày chung đôi 01/10";
      }
    });
  }

  if (btnQuick) {
    btnQuick.addEventListener("click", () => {
      enteredPin = SECRET_PIN;
      renderDots();
      unlockWebsite();
    });
  }

  window.addEventListener("keydown", (e) => {
    if (isUnlocked) return;
    if (e.key >= "0" && e.key <= "9") {
      handleDigit(e.key);
    } else if (e.key === "Backspace") {
      enteredPin = enteredPin.slice(0, -1);
      renderDots();
    } else if (e.key === "Enter") {
      enteredPin = SECRET_PIN;
      renderDots();
      unlockWebsite();
    }
  });
}

/* =====================================================
   5. BỘ SƯU TẬP 15 BỨC ẢNH THEO 4 CHƯƠNG & LIGHTBOX
   ===================================================== */
let currentFilter = "all";
let currentLightboxIndex = 0;

function getSavedLikes(memory) {
  try {
    const saved = localStorage.getItem(`tang_nga_like_${memory.id}`);
    return saved ? parseInt(saved, 10) : memory.likes;
  } catch (_) {
    return memory.likes;
  }
}

function saveLikes(memoryId, count) {
  try {
    localStorage.setItem(`tang_nga_like_${memoryId}`, String(count));
  } catch (_) {
    // Ignore storage quota errors
  }
}

function renderGallery(filter = "all", petalsFx = null) {
  const grid = document.getElementById("gallery-grid");
  if (!grid) return;
  grid.innerHTML = "";

  const filtered =
    filter === "all"
      ? MEMORIES
      : MEMORIES.filter((item) => item.chapterKey === filter);

  filtered.forEach((item) => {
    const masterIndex = MEMORIES.findIndex((m) => m.id === item.id);
    const likeCount = getSavedLikes(item);

    const card = document.createElement("article");
    card.className = "memory-card";
    card.setAttribute("data-chapter", item.chapterKey);

    card.innerHTML = `
      <div class="memory-media" data-photo-index="${masterIndex}">
        <img src="${item.src}" alt="${item.title}" loading="lazy" />
        <div class="memory-badge-row">
          <span class="memory-chapter-pill">${item.chapterLabel}</span>
          <span class="memory-date-pill">${item.date}</span>
        </div>
      </div>
      <div class="memory-info">
        <h4 class="memory-title">${item.title}</h4>
        <p class="memory-caption">${item.caption}</p>
        <div class="memory-footer">
          <button type="button" class="memory-zoom-btn" data-photo-index="${masterIndex}">
            Xem ảnh lớn &rarr;
          </button>
          <button type="button" class="memory-like-btn" data-id="${item.id}" aria-label="Thả tim cho bức ảnh">
            <span>&#10084;</span>
            <span class="like-count">${likeCount}</span>
          </button>
        </div>
      </div>
    `;

    const mediaEl = card.querySelector(".memory-media");
    const zoomBtn = card.querySelector(".memory-zoom-btn");
    const likeBtn = card.querySelector(".memory-like-btn");

    if (mediaEl) {
      mediaEl.addEventListener("click", () => openLightbox(masterIndex));
    }
    if (zoomBtn) {
      zoomBtn.addEventListener("click", () => openLightbox(masterIndex));
    }
    if (likeBtn) {
      likeBtn.addEventListener("click", () => {
        const countEl = likeBtn.querySelector(".like-count");
        const nextCount = (parseInt(countEl.textContent, 10) || item.likes) + 1;
        countEl.textContent = String(nextCount);
        saveLikes(item.id, nextCount);
        pianoBox.playTone(659.25, 0.55, 0.05);
        if (petalsFx && Math.random() < 0.35) {
          petalsFx.launchCelebrationBurst();
        }
      });
    }

    grid.appendChild(card);
  });
}

function openLightbox(index) {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;
  const total = ALL_LIGHTBOX_PHOTOS.length;
  currentLightboxIndex = ((index % total) + total) % total;
  const item = ALL_LIGHTBOX_PHOTOS[currentLightboxIndex];

  const img = document.getElementById("lightbox-img");
  const chapter = document.getElementById("lightbox-chapter");
  const title = document.getElementById("lightbox-title");
  const caption = document.getElementById("lightbox-caption");

  if (img) {
    img.src = item.src;
    img.alt = item.title;
  }
  if (chapter) {
    chapter.textContent = `${item.chapterLabel} • ${item.date}`;
  }
  if (title) {
    title.textContent = item.title;
  }
  if (caption) {
    caption.textContent = item.caption;
  }

  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
}

function stepLightbox(delta) {
  openLightbox(currentLightboxIndex + delta);
}

/* =====================================================
   6. KHỞI TẠO SỰ KIỆN KHI TRANG TẢI XONG
   ===================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const petalsFx = new RosePetalsCanvas("petals-canvas");

  updateMarriageCounter();
  setInterval(updateMarriageCounter, 1000);

  initLockScreen(petalsFx);
  renderGallery("all", petalsFx);

  // Bộ lọc 4 chương
  const tabBtns = document.querySelectorAll(".tab-btn");
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter") || "all";
      renderGallery(currentFilter, petalsFx);
    });
  });

  // Nút bật/tắt nhạc nền
  const musicToggle = document.getElementById("music-toggle");
  if (musicToggle) {
    musicToggle.addEventListener("click", () => {
      pianoBox.toggle();
    });
  }

  // Click vào Polaroid ở Hero hoặc Tribute Card mở Lightbox
  document
    .querySelectorAll(".polaroid[data-photo-index], .tribute-card[data-photo-index]")
    .forEach((el) => {
      el.addEventListener("click", () => {
        const idx = parseInt(el.getAttribute("data-photo-index") || "0", 10);
        openLightbox(idx);
      });
    });

  // Sự kiện Lightbox
  const lbClose = document.getElementById("lightbox-close");
  const lbPrev = document.getElementById("lightbox-prev");
  const lbNext = document.getElementById("lightbox-next");
  const lightbox = document.getElementById("lightbox");

  if (lbClose) lbClose.addEventListener("click", closeLightbox);
  if (lbPrev) lbPrev.addEventListener("click", () => stepLightbox(-1));
  if (lbNext) lbNext.addEventListener("click", () => stepLightbox(1));
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  // Sự kiện Modal Bó Hoa 20/10
  const flowerModal = document.getElementById("flower-modal");
  const btnOpenFlower = document.getElementById("btn-open-flower");
  const btnCloseFlower = document.getElementById("flower-modal-close");
  const btnCloseFlowerCta = document.getElementById("btn-close-flower-cta");

  function openFlowerModal() {
    if (!flowerModal) return;
    flowerModal.classList.add("open");
    flowerModal.setAttribute("aria-hidden", "false");
    pianoBox.playSparkleChime();
    petalsFx.launchCelebrationBurst();
  }

  function closeFlowerModal() {
    if (!flowerModal) return;
    flowerModal.classList.remove("open");
    flowerModal.setAttribute("aria-hidden", "true");
  }

  if (btnOpenFlower) btnOpenFlower.addEventListener("click", openFlowerModal);
  if (btnCloseFlower) btnCloseFlower.addEventListener("click", closeFlowerModal);
  if (btnCloseFlowerCta) {
    btnCloseFlowerCta.addEventListener("click", () => {
      petalsFx.launchCelebrationBurst();
      closeFlowerModal();
    });
  }
  if (flowerModal) {
    flowerModal.addEventListener("click", (e) => {
      if (e.target === flowerModal) closeFlowerModal();
    });
  }

  // Điều khiển bằng bàn phím cho Lightbox & Modal
  window.addEventListener("keydown", (e) => {
    if (lightbox && lightbox.classList.contains("open")) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") stepLightbox(-1);
      if (e.key === "ArrowRight") stepLightbox(1);
    } else if (flowerModal && flowerModal.classList.contains("open")) {
      if (e.key === "Escape") closeFlowerModal();
    }
  });
});
