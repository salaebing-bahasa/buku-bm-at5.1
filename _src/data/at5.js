// หนังสือเรียนภาษามลายู ชั้น อต.5 (แปลงจาก BukuTeks_BM_AT5.docx)
// ข้อความสองภาษาเขียนแบบ "ภาษามลายู||ภาษาไทย"
module.exports = {
  grade: 5,
  repo: "buku-bm-at5.1", // ชื่อ repo / ที่อยู่เว็บ
  lede_ms: "Membaca ayat dan cerita pendek, jenis-jenis ayat dalam bahasa Melayu (ayat penyata, ayat tanya dan ayat nafi), membaca dan menulis pantun, serta perkataan tentang pasar, pengangkutan, tempat pelancongan, alam sekitar, makanan halal dan haram dan makanan tradisional dalam 10 pelajaran. Setiap pelajaran disertakan sebutan perkataan yang boleh didengar, latihan beserta jawapan, dan kuiz kendiri. Seluruh buku menggunakan bahasa Melayu standard.",
  lede: "อ่านประโยคและเรื่องสั้น ชนิดของประโยคในภาษามลายู (ประโยคบอกเล่า ประโยคคำถาม ประโยคปฏิเสธ) การอ่านและเขียนบทกลอนปันตุน และคำศัพท์เกี่ยวกับตลาด การคมนาคม สถานที่ท่องเที่ยว สิ่งแวดล้อม อาหารฮะลาลและฮะรอม และอาหารพื้นเมือง 10 บท ทุกบทฟังเสียงคำศัพท์ได้ มีแบบฝึกหัดพร้อมเฉลย และแบบทดสอบตนเอง ใช้ภาษามลายูมาตรฐานทั้งเล่ม",
  preface_ms: [
    "Buku teks Bahasa Melayu ini disediakan untuk murid Tahun 5 Kurikulum Pendidikan Islam Peringkat Awal. Buku ini memberi tumpuan kepada pembacaan ayat dan cerita pendek, jenis-jenis ayat dalam bahasa Melayu (ayat penyata, ayat tanya dan ayat nafi), membaca dan menulis pantun, serta perkataan tentang pasar, pengangkutan, tempat pelancongan, alam sekitar, makanan halal dan haram dan makanan tradisional.",
    "Kandungan buku ini dibahagikan kepada 10 pelajaran. Setiap pelajaran mengandungi objektif pembelajaran, cerita pendek atau isi pelajaran, latihan dan nilai murni. Di bahagian akhir buku terdapat glosari dan jawapan latihan. Bahasa yang digunakan ialah bahasa Melayu standard sepenuhnya.",
  ],
  preface: [
    "หนังสือเรียนภาษามลายูเล่มนี้จัดทำขึ้นสำหรับผู้เรียนชั้นปีที่ 5 หลักสูตรอิสลามศึกษาตอนต้น (อต.5) เน้นการอ่านประโยคและเรื่องสั้น ชนิดของประโยคในภาษามลายู (ประโยคบอกเล่า ประโยคคำถาม และประโยคปฏิเสธ) การอ่านและเขียนบทกลอนปันตุน และคำศัพท์เกี่ยวกับตลาด การคมนาคม สถานที่ท่องเที่ยว สิ่งแวดล้อม อาหารฮะลาลและฮะรอม และอาหารพื้นเมือง",
    "เนื้อหาแบ่งเป็น 10 บท แต่ละบทมีจุดประสงค์การเรียนรู้ เรื่องสั้นหรือเนื้อหา แบบฝึกหัด และข้อคิด ท้ายเล่มมีอภิธานศัพท์และเฉลยแบบฝึกหัด ภาษาที่ใช้เป็นภาษามลายูมาตรฐาน (Bahasa Melayu Standard) ทั้งหมด",
  ],
  indicators_ms: [
    "Membaca ayat dan cerita pendek yang ditetapkan",
    "Mengenal pasti jenis-jenis ayat",
    "Bertutur secara bersoal jawab menggunakan ayat penyata, ayat tanya dan ayat nafi",
    "Membaca dan menulis pelbagai jenis ayat",
    "Membaca dan menulis pantun yang mudah",
    "Membaca, menulis dan menyatakan maksud perkataan yang ditetapkan",
    "Menghargai nilai dan kepentingan penggunaan bahasa Melayu yang ditetapkan",
  ],
  indicators: [
    "อ่านประโยคและเรื่องสั้นที่กำหนด",
    "ระบุประเภทของประโยคต่าง ๆ",
    "พูดโต้ตอบโดยใช้ประโยคบอกเล่า คำถาม และปฏิเสธ",
    "อ่านและเขียนประโยคประเภทต่าง ๆ",
    "อ่านและเขียนบทกลอนง่าย ๆ",
    "อ่าน เขียนและบอกความหมายคำศัพท์ที่กำหนด",
    "เห็นคุณค่าและความสำคัญในการใช้ภาษามลายูที่กำหนด",
  ],
  units: [
    // ---------------------------------------------------------------- 1
    {
      title: "Ayat Penyata", th: "ประโยคบอกเล่า", indicators: [2, 3, 4],
      objectives: ["Menyatakan ciri-ciri ayat penyata||บอกลักษณะของประโยคบอกเล่าได้", "Menulis ayat penyata tentang diri sendiri dan persekitaran||เขียนประโยคบอกเล่าเกี่ยวกับตนเองและสิ่งรอบตัวได้"],
      sections: [
        { title: "Apakah ayat penyata?  ประโยคบอกเล่าคืออะไร", blocks: [
          { type: "p", text: "**Ayat penyata** ialah ayat yang memberikan maklumat atau menceritakan sesuatu, dan diakhiri dengan noktah ( . ).||**Ayat penyata** คือประโยคที่บอกข้อมูลหรือเล่าเรื่อง ลงท้ายด้วยมหัพภาค ( . )" },
          { type: "note", title: "Contoh||ตัวอย่าง", lines: ["Saya pergi ke sekolah.", "Pasar itu dibuka pada waktu pagi.", "Kami solat berjemaah di surau."] },
          { type: "table", head: ["Subjek||ประธาน", "Predikat||ภาคแสดง"], rows: [["Saya", "pergi ke sekolah."], ["Ibu", "membeli sayur di pasar."], ["Pantai itu", "sangat cantik."]] },
        ] },
      ],
      latihan: [
        { q: "Susun perkataan menjadi ayat penyata.||เรียงคำให้เป็นประโยคบอกเล่า", items: ["sekolah / ke / pergi / saya  →  ____________________", "di / ayah / bekerja / kebun  →  ____________________"], answers: "Saya pergi ke sekolah. / Ayah bekerja di kebun." },
        { q: "Pisahkan subjek dan predikat.||แยกประธานและภาคแสดง", items: ["Adik saya membaca buku.", "Kampung saya bersih."], answers: "Adik saya | membaca buku. / Kampung saya | bersih." },
        { q: "Tulis 3 ayat penyata tentang keluarga kamu.||เขียนประโยคบอกเล่าเกี่ยวกับครอบครัว 3 ประโยค", lines: 3 },
      ],
      nilai: "ประโยคบอกเล่าที่ดีต้องเป็นความจริง มุสลิมพูดแต่ความจริงเสมอ",
      nilai_ms: "Ayat penyata yang baik mestilah benar. Seorang Muslim sentiasa bercakap benar.",
    },
    // ---------------------------------------------------------------- 2
    {
      title: "Ayat Tanya", th: "ประโยคคำถาม", indicators: [2, 3, 4],
      objectives: ["Menggunakan kata tanya dengan betul||ใช้คำแสดงคำถามได้ถูกต้อง", "Bertanya dan menjawab soalan yang mudah||ถามและตอบคำถามง่าย ๆ ได้"],
      sections: [
        { title: "Kata tanya  คำแสดงคำถาม", blocks: [
          { type: "table", head: ["Kata tanya", "Maksud||ความหมาย", "Contoh||ตัวอย่าง"], rows: [
            ["**Siapa**", "ใคร", "Siapa nama awak?"],
            ["**Apa**", "อะไร", "Apa nama buah ini?"],
            ["**Di mana**", "ที่ไหน", "Di mana rumah awak?"],
            ["**Bila**", "เมื่อไร", "Bila awak pulang?"],
            ["**Berapa**", "เท่าไร กี่", "Berapa harga ikan ini?"],
            ["**Mengapa**", "ทำไม", "Mengapa awak lewat?"],
            ["**Bagaimana**", "อย่างไร", "Bagaimana awak pergi ke sekolah?"],
          ] },
          { type: "note", title: "Ingat||จำไว้", lines: ["Ayat tanya diakhiri dengan tanda soal ( **?** ) dan disebut dengan intonasi naik di hujung ayat.||ประโยคคำถามลงท้ายด้วยเครื่องหมายคำถาม ( **?** ) และขึ้นเสียงสูงที่ท้ายประโยค"] },
        ] },
        { title: "Mari bertutur  มาพูดกันเถอะ", blocks: [
          { type: "dialog", lines: [
            ["Faiz", "Siapa nama awak?"],
            ["Danial", "Nama saya Danial."],
            ["Faiz", "Di mana awak tinggal?"],
            ["Danial", "Saya tinggal di Saiburi."],
            ["Faiz", "Bagaimana awak datang ke sekolah?"],
            ["Danial", "Saya datang dengan basikal."],
          ] },
        ] },
      ],
      latihan: [
        { q: "Isikan kata tanya.||เติมคำแสดงคำถาม", items: ["______ harga buku ini?  —  Lima puluh baht.", "______ awak pergi ke pasar?  —  Esok.", "______ guru kelas awak?  —  Ustazah Rohani."], answers: "Berapa, Bila, Siapa" },
        { q: "Tulis soalan berdasarkan jawapan.||เขียนคำถามจากคำตอบ", items: ["____________________?  —  Saya tinggal di Yala.", "____________________?  —  Saya berumur sebelas tahun."], answers: "Di mana awak tinggal? / Berapa umur awak?" },
        { q: "Temu bual rakan kamu dengan 5 soalan.||สัมภาษณ์เพื่อนด้วยคำถาม 5 ข้อ" },
      ],
      nilai: "การถามอย่างสุภาพเป็นประตูสู่ความรู้",
      nilai_ms: "Bertanya dengan sopan ialah pintu kepada ilmu.",
    },
    // ---------------------------------------------------------------- 3
    {
      title: "Ayat Nafi", th: "ประโยคปฏิเสธ", indicators: [2, 3, 4],
      objectives: ["Menggunakan kata nafi tidak dan bukan dengan betul||ใช้คำปฏิเสธ tidak และ bukan ได้ถูกต้อง", "Menukar ayat penyata kepada ayat nafi||เปลี่ยนประโยคบอกเล่าเป็นประโยคปฏิเสธได้"],
      sections: [
        { title: "Tidak dan bukan  tidak และ bukan", blocks: [
          { type: "table", head: ["Kata nafi||คำปฏิเสธ", "Digunakan dengan||ใช้กับ", "Contoh||ตัวอย่าง"], rows: [
            ["**tidak**", "kata kerja dan kata sifat||คำกริยาและคำวิเศษณ์", "Saya **tidak** malas.  ·  Adik **tidak** makan."],
            ["**bukan**", "kata nama dan kata ganti nama||คำนามและคำสรรพนาม", "Itu **bukan** buku saya.  ·  Dia **bukan** guru."],
          ] },
          { type: "pattern", title: "Tukar ayat||เปลี่ยนประโยค", lines: ["Saya rajin.  →  Saya **tidak** malas.", "Ini kucing.  →  Ini **bukan** kucing."] },
        ] },
      ],
      latihan: [
        { q: "Isikan tidak atau bukan.||เติม tidak หรือ bukan", items: ["Ali ______ datang hari ini.", "Itu ______ kereta ayah.", "Makanan ini ______ pedas.", "Dia ______ adik saya."], answers: "tidak, bukan, tidak, bukan" },
        { q: "Tukarkan kepada ayat nafi.||เปลี่ยนเป็นประโยคปฏิเสธ", items: ["Saya suka makan durian.  →  ____________________", "Ini rumah saya.  →  ____________________"], answers: "Saya tidak suka makan durian. / Ini bukan rumah saya." },
        { q: "Kenal pasti jenis ayat: penyata / tanya / nafi.||ระบุชนิดประโยค: penyata / tanya / nafi", items: ["Siapa nama awak?  ________", "Saya tidak lapar.  ________", "Kami pergi ke pantai.  ________"], answers: "tanya, nafi, penyata" },
      ],
      nilai: "กล้าปฏิเสธสิ่งที่ไม่ดีด้วยคำพูดที่สุภาพ เช่น \"Saya tidak mahu, terima kasih.\"",
      nilai_ms: "Beranilah menolak perkara yang tidak baik dengan kata-kata yang sopan, contohnya \"Saya tidak mahu, terima kasih.\"",
    },
    // ---------------------------------------------------------------- 4
    {
      title: "Di Pasar", th: "ตลาด", indicators: [1, 3, 6, 7],
      objectives: ["Membaca cerita pendek tentang pasar dan menjawab soalan||อ่านเรื่องสั้นเกี่ยวกับตลาดและตอบคำถามได้", "Berjual beli menggunakan ayat tanya dan ayat penyata||ซื้อขายสินค้าด้วยประโยคคำถามและบอกเล่าได้"],
      sections: [
        { title: "Cerita pendek  เรื่องสั้น", blocks: [
          { type: "reading", title: "Ke Pasar Bersama Ibu", paras: [
            "Pada pagi Sabtu, Aisyah mengikut ibu ke pasar. Pasar itu sangat sibuk. Ada orang menjual ikan, sayur, buah-buahan dan kuih.",
            "Ibu membeli ikan kembung dan sayur bayam. Aisyah bertanya kepada penjual, \"Berapa harga sesikat pisang ini?\" Penjual itu menjawab, \"Dua puluh baht.\"",
            "Ibu membayar dan mengucapkan terima kasih. Sebelum pulang, ibu berkata, \"Kita mesti membeli barang yang halal dan bersih.\"",
          ] },
        ] },
        { title: "Kosa kata  คำศัพท์", blocks: [
          { type: "vocab", noJawi: true, rows: [["pasar", "ตลาด"], ["penjual", "ผู้ขาย"], ["pembeli", "ผู้ซื้อ"], ["harga", "ราคา"], ["murah", "ถูก"], ["mahal", "แพง"], ["membayar", "จ่ายเงิน"], ["wang", "เงิน"], ["sesikat pisang", "กล้วยหนึ่งหวี"]] },
        ] },
      ],
      latihan: [
        { q: "Jawab soalan berdasarkan cerita.||ตอบคำถามจากเรื่อง", items: ["Bila Aisyah pergi ke pasar?  ________", "Apa yang ibu beli?  ________", "Berapa harga sesikat pisang?  ________"], answers: "Pada pagi Sabtu; ikan kembung dan sayur bayam; dua puluh baht" },
        { q: "Padankan perkataan dengan lawannya.||จับคู่คำตรงข้าม", items: ["murah – ________", "penjual – ________"], answers: "mahal, pembeli" },
        { q: "Lakonkan peranan pembeli dan penjual. Gunakan soalan Berapa ... ? sekurang-kurangnya 2 kali.||แสดงบทบาทผู้ซื้อและผู้ขาย ใช้คำถาม Berapa ... ? อย่างน้อย 2 ครั้ง" },
      ],
      nilai: "ผู้ขายต้องซื่อสัตย์ไม่โกงตาชั่ง ผู้ซื้อต้องสุภาพและเลือกของที่ฮะลาล",
      nilai_ms: "Penjual mesti jujur dan tidak menipu timbangan. Pembeli mesti bersopan dan memilih barang yang halal.",
    },
    // ---------------------------------------------------------------- 5
    {
      title: "Pengangkutan", th: "การคมนาคม", indicators: [1, 6],
      objectives: ["Membaca dan menulis nama kenderaan||อ่านและเขียนชื่อยานพาหนะได้", "Menyatakan cara pergi ke sesuatu tempat dengan ayat naik ...||บอกวิธีเดินทางด้วยประโยค naik ... ได้"],
      sections: [
        { title: "Kosa kata  คำศัพท์", blocks: [
          { type: "vocab", noJawi: true, rows: [["basikal", "จักรยาน"], ["motosikal", "รถจักรยานยนต์"], ["kereta", "รถยนต์"], ["bas", "รถโดยสาร"], ["kereta api", "รถไฟ"], ["kapal terbang", "เครื่องบิน"], ["bot", "เรือ"], ["lapangan terbang", "สนามบิน"], ["stesen", "สถานี"]] },
          { type: "pattern", lines: ["Saya pergi ke sekolah **dengan** basikal.", "Kami **naik** kereta api ke Hat Yai.", "Jemaah haji **menaiki** kapal terbang ke Makkah."] },
        ] },
        { title: "Mari membaca  มาอ่านกันเถอะ", blocks: [
          { type: "reading", paras: [
            "Setiap hari Ahmad pergi ke sekolah dengan basikal. Kakaknya pergi ke kolej dengan bas. Ayahnya pergi ke tempat kerja dengan motosikal.",
            "Sebelum menaiki kenderaan, kita membaca doa naik kenderaan.",
          ] },
        ] },
      ],
      latihan: [
        { q: "Jawab soalan berdasarkan bacaan.||ตอบคำถามจากเรื่อง", items: ["Ahmad pergi ke sekolah dengan apa?  ________", "Siapa pergi ke kolej dengan bas?  ________"], answers: "basikal; kakaknya" },
        { q: "Tulis perkataan bahasa Melayu.||เขียนคำภาษามลายู", items: ["รถไฟ  ________", "เครื่องบิน  ________", "สนามบิน  ________"], answers: "kereta api, kapal terbang, lapangan terbang" },
        { q: "Tulis satu ayat tentang cara kamu pergi ke sekolah.||เขียนประโยคบอกว่าตนเองเดินทางไปโรงเรียนอย่างไร", lines: 1 },
      ],
      nilai: "ปฏิบัติตามกฎจราจร สวมหมวกกันน็อก และอ่านดุอาอ์ก่อนออกเดินทาง",
      nilai_ms: "Patuhilah peraturan jalan raya, pakailah topi keledar dan bacalah doa sebelum memulakan perjalanan.",
    },
    // ---------------------------------------------------------------- 6
    {
      title: "Tempat Pelancongan", th: "สถานที่ท่องเที่ยว", indicators: [1, 3, 6, 7],
      objectives: ["Membaca cerita pendek tentang pelancongan||อ่านเรื่องสั้นเกี่ยวกับการท่องเที่ยวได้", "Menceritakan tempat pelancongan yang pernah dilawati dengan ayat yang mudah||เล่าสถานที่ท่องเที่ยวที่เคยไปด้วยประโยคง่าย ๆ ได้"],
      sections: [
        { title: "Cerita pendek  เรื่องสั้น", blocks: [
          { type: "reading", title: "Bercuti di Pantai", paras: [
            "Pada cuti sekolah, keluarga Hafiz pergi bercuti ke pantai. Pantai itu cantik. Pasirnya putih dan airnya biru.",
            "Hafiz dan adiknya bermain pasir. Ayah mengambil gambar. Pada waktu zohor, mereka solat di masjid berhampiran pantai.",
            "Sebelum pulang, mereka mengutip sampah dan membuangnya ke dalam tong sampah.",
          ] },
        ] },
        { title: "Kosa kata  คำศัพท์", blocks: [
          { type: "vocab", noJawi: true, rows: [["melancong", "ท่องเที่ยว"], ["bercuti", "พักผ่อน หยุดพัก"], ["pantai", "ชายหาด"], ["pulau", "เกาะ"], ["air terjun", "น้ำตก"], ["bukit", "เนินเขา"], ["muzium", "พิพิธภัณฑ์"], ["mengambil gambar", "ถ่ายรูป"]] },
        ] },
      ],
      latihan: [
        { q: "Jawab soalan berdasarkan cerita.||ตอบคำถามจากเรื่อง", items: ["Keluarga Hafiz bercuti ke mana?  ________", "Apa yang ayah lakukan?  ________", "Apa yang mereka lakukan sebelum pulang?  ________"], answers: "ke pantai; mengambil gambar; mengutip sampah dan membuangnya ke dalam tong sampah" },
        { q: "Kenal pasti jenis ayat.||ระบุชนิดประโยคจากเรื่อง", items: ["Pantai itu cantik.  ________", "Adakah pantai itu bersih?  ________"], answers: "penyata, tanya" },
        { q: "Tulis 3–4 ayat tentang tempat pelancongan yang pernah kamu lawati.||เขียน 3–4 ประโยคเกี่ยวกับสถานที่ท่องเที่ยวที่เคยไป", lines: 4 },
      ],
      nilai: "เมื่อไปเที่ยวไม่ลืมละหมาด และรักษาความสะอาดของสถานที่",
      nilai_ms: "Apabila melancong, jangan lupa menunaikan solat dan menjaga kebersihan tempat itu.",
    },
    // ---------------------------------------------------------------- 7
    {
      title: "Alam Sekitar", th: "สิ่งแวดล้อม", indicators: [1, 6, 7],
      objectives: ["Membaca dan menulis perkataan tentang alam sekitar||อ่านและเขียนคำศัพท์เกี่ยวกับสิ่งแวดล้อมได้", "Menyatakan cara menjaga alam sekitar||บอกวิธีรักษาสิ่งแวดล้อมได้"],
      sections: [
        { title: "Kosa kata  คำศัพท์", blocks: [
          { type: "vocab", noJawi: true, rows: [["alam sekitar", "สิ่งแวดล้อม"], ["pokok", "ต้นไม้"], ["hutan", "ป่า"], ["sungai", "แม่น้ำ"], ["udara", "อากาศ"], ["sampah", "ขยะ"], ["tong sampah", "ถังขยะ"], ["menanam", "ปลูก"], ["mencemarkan", "ทำให้สกปรก ทำให้เป็นมลพิษ"], ["kitar semula", "รีไซเคิล"]] },
        ] },
        { title: "Mari membaca  มาอ่านกันเถอะ", blocks: [
          { type: "reading", title: "Jagalah Alam Sekitar", paras: [
            "Allah menjadikan alam ini untuk manusia. Kita mesti menjaga alam sekitar.",
            "Kita tidak boleh membuang sampah ke dalam sungai. Kita tidak boleh menebang pokok sesuka hati. Marilah kita menanam pokok dan mengitar semula botol plastik.",
          ] },
        ] },
      ],
      latihan: [
        { q: "Kenal pasti 2 ayat nafi daripada bacaan.||ระบุประโยคปฏิเสธจากเรื่อง 2 ประโยค", lines: 2, answers: "Kita tidak boleh membuang sampah ke dalam sungai. / Kita tidak boleh menebang pokok sesuka hati." },
        { q: "Betul (✓) atau salah (✗).||ถูก (✓) หรือผิด (✗)", items: ["Kita membuang sampah ke dalam sungai.  ( ___ )", "Kita menanam pokok.  ( ___ )", "Kita mengitar semula botol plastik.  ( ___ )"], answers: "✗, ✓, ✓" },
        { q: "Buat poster \"Jagalah Alam Sekitar\" dengan 3 ayat bahasa Melayu.||ทำโปสเตอร์ \"Jagalah Alam Sekitar\" พร้อมประโยคภาษามลายู 3 ประโยค" },
      ],
      nilai: "มนุษย์เป็นผู้แทน (เคาะลีฟะฮ์) ของอัลลอฮ์บนแผ่นดิน มีหน้าที่ดูแลโลกไม่ให้เสียหาย",
      nilai_ms: "Manusia ialah khalifah Allah di muka bumi yang bertanggungjawab menjaga bumi daripada kerosakan.",
    },
    // ---------------------------------------------------------------- 8
    {
      title: "Makanan dan Minuman Halal dan Haram", th: "อาหารและเครื่องดื่มฮะลาลและฮะรอม", indicators: [1, 6, 7],
      objectives: ["Menyatakan maksud halal dan haram dalam bahasa Melayu||บอกความหมายของฮะลาลและฮะรอมเป็นภาษามลายูได้", "Membezakan makanan dan minuman yang halal dan haram||จำแนกอาหารและเครื่องดื่มที่ฮะลาลและฮะรอมได้"],
      sections: [
        { title: "Halal dan haram  ฮะลาลและฮะรอม", blocks: [
          { type: "table", head: ["", "Maksud||ความหมาย", "Contoh||ตัวอย่าง"], rows: [
            ["**Halal**", "Makanan dan minuman yang dibenarkan||สิ่งที่อนุญาตให้รับประทาน", "nasi, sayur, buah-buahan, susu, ikan, daging lembu yang disembelih mengikut syarak"],
            ["**Haram**", "Makanan dan minuman yang dilarang||สิ่งที่ห้ามรับประทาน", "daging babi, arak, darah, bangkai||daging babi, arak (เหล้า), darah, bangkai (ซากสัตว์ที่ตายเอง)"],
          ] },
        ] },
        { title: "Kosa kata  คำศัพท์", blocks: [
          { type: "vocab", noJawi: true, rows: [["halal", "ฮะลาล"], ["haram", "ฮะรอม"], ["arak", "เหล้า สุรา"], ["bangkai", "ซากสัตว์ที่ตายเอง"], ["disembelih", "ถูกเชือด"], ["syarak", "บทบัญญัติศาสนา"], ["logo halal", "เครื่องหมายฮะลาล"], ["memabukkan", "ทำให้มึนเมา"]] },
          { type: "pattern", lines: ["Kita **mesti** makan makanan yang halal.", "Kita **tidak boleh** minum arak kerana arak memabukkan."] },
        ] },
      ],
      latihan: [
        { q: "halal atau haram?||halal หรือ haram?", items: ["susu  ________", "arak  ________", "daging babi  ________", "ikan  ________"], answers: "halal, haram, haram, halal" },
        { q: "Isikan perkataan  [ logo halal · memabukkan · disembelih ]||เติมคำ  [ logo halal · memabukkan · disembelih ]", items: ["Arak haram kerana ______.", "Ayam mesti ______ mengikut syarak.", "Sebelum membeli, lihat ______ pada bungkusan."], answers: "memabukkan, disembelih, logo halal" },
        { q: "Tulis 2 ayat nafi tentang makanan yang haram.||เขียนประโยคปฏิเสธ 2 ประโยคเกี่ยวกับอาหารฮะรอม", lines: 2 },
      ],
      nilai: "อาหารฮะลาลและสะอาดทำให้ร่างกายแข็งแรงและดุอาอ์ของเราได้รับการตอบรับ",
      nilai_ms: "Makanan yang halal dan bersih menyihatkan tubuh badan dan menjadikan doa kita diterima.",
    },
    // ---------------------------------------------------------------- 9
    {
      title: "Makanan Tradisional", th: "อาหารพื้นเมือง", indicators: [1, 6, 7],
      objectives: ["Membaca dan menulis nama makanan tradisional||อ่านและเขียนชื่ออาหารพื้นเมืองได้", "Menerangkan makanan tradisional dengan kata sifat||บรรยายอาหารพื้นเมืองด้วยคำวิเศษณ์ได้"],
      sections: [
        { title: "Kosa kata  คำศัพท์", blocks: [
          { type: "vocab", noJawi: true, rows: [["nasi kerabu", "ข้าวยำ (นาซิกาเราะบู)"], ["nasi dagang", "ข้าวดากัง"], ["laksa", "ขนมจีนน้ำแกง (ลักซา)"], ["ketupat", "ข้าวต้มห่อใบมะพร้าว"], ["rendang", "แกงเรินดัง"], ["lemang", "ข้าวหลาม"], ["dodol", "ขนมโดดล (กาละแม)"], ["kuih akok", "ขนมอาเกาะ"], ["roti canai", "โรตี"]] },
        ] },
        { title: "Mari membaca  มาอ่านกันเถอะ", blocks: [
          { type: "reading", title: "Juadah Hari Raya", paras: [
            "Pada Hari Raya, nenek memasak ketupat dan rendang. Ibu membuat kuih akok. Ketupat itu lembut dan rendang itu sedap.",
            "Saudara-mara datang beraya ke rumah kami. Kami makan bersama-sama dengan gembira.",
          ] },
        ] },
      ],
      latihan: [
        { q: "Jawab soalan berdasarkan bacaan.||ตอบคำถามจากเรื่อง", items: ["Siapa memasak ketupat dan rendang?  ________", "Ibu membuat apa?  ________"], answers: "nenek; kuih akok" },
        { q: "Tulis 3 nama makanan tradisional kegemaran kamu bersama kata sifat (contoh: nasi kerabu yang sedap).||เขียนชื่ออาหารพื้นเมืองที่ชอบ 3 อย่าง พร้อมคำวิเศษณ์ (เช่น nasi kerabu yang sedap)", lines: 3 },
        { q: "Tukarkan kepada ayat tanya: Ketupat itu lembut.||เปลี่ยนเป็นประโยคคำถาม: Ketupat itu lembut.", lines: 1, answers: "Adakah ketupat itu lembut?" },
      ],
      nilai: "อาหารพื้นเมืองเป็นมรดกทางวัฒนธรรม เราควรภูมิใจและช่วยกันสืบทอด",
      nilai_ms: "Makanan tradisional ialah warisan budaya. Kita patut berbangga dan bersama-sama mewarisinya.",
    },
    // ---------------------------------------------------------------- 10
    {
      title: "Pantun", th: "บทกลอนปันตุน", indicators: [5, 7],
      objectives: ["Menyatakan ciri-ciri pantun empat kerat||บอกลักษณะของปันตุน 4 บรรทัดได้", "Membaca pantun dengan rentak yang betul||อ่านปันตุนด้วยจังหวะที่ถูกต้องได้", "Menulis pantun yang mudah||เขียนปันตุนง่าย ๆ ได้"],
      sections: [
        { title: "Ciri-ciri pantun empat kerat  ลักษณะปันตุน 4 บรรทัด", blocks: [
          { type: "bullets", items: [
            "Mempunyai 4 baris (empat kerat); setiap baris kira-kira 8–12 suku kata.||มี 4 บรรทัด (empat kerat) แต่ละบรรทัดมีประมาณ 8–12 พยางค์",
            "Baris 1–2 dinamakan **pembayang**.||บรรทัดที่ 1–2 เรียกว่า **pembayang** (บทนำ/บทเปรียบ)",
            "Baris 3–4 dinamakan **maksud**.||บรรทัดที่ 3–4 เรียกว่า **maksud** (ใจความ)",
            "Rima akhirnya **a-b-a-b**.||สัมผัสท้ายบรรทัดแบบ **a-b-a-b**",
          ] },
        ] },
        { title: "Contoh pantun  ตัวอย่างปันตุนพื้นบ้าน", blocks: [
          { type: "pantun", lines: [
            "*Buah cempedak di luar pagar,*", "*Ambil galah tolong jolokkan;*", "*Saya budak baru belajar,*", "*Kalau salah tolong tunjukkan.*",
            "*Pisang emas dibawa belayar,*", "*Masak sebiji di atas peti;*", "*Hutang emas boleh dibayar,*", "*Hutang budi dibawa mati.*",
          ] },
          { type: "note", title: "Maksud ringkas||ความหมายโดยสรุป", lines: [
            "Pantun 1: Saya budak yang baru belajar; jika saya salah, tolong tunjukkan.||ปันตุนบทที่ 1: ฉันเป็นเด็กเพิ่งเรียนรู้ ถ้าผิดพลาดโปรดชี้แนะ",
            "Pantun 2: Hutang wang boleh dibayar, tetapi hutang budi dibawa sampai mati.||ปันตุนบทที่ 2: หนี้เงินทองชดใช้ได้ แต่หนี้บุญคุณติดตัวไปจนตาย",
          ] },
        ] },
      ],
      latihan: [
        { q: "Garis perkataan yang berima dalam pantun pertama.||ขีดเส้นใต้คำที่สัมผัสกันในปันตุนบทที่ 1", lines: 1, answers: "pagar – belajar, jolokkan – tunjukkan" },
        { q: "Lengkapkan pantun.||เติมปันตุนให้สมบูรณ์", items: ["Pisang emas dibawa ________,", "Masak sebiji di atas peti;", "Hutang emas boleh ________,", "Hutang budi dibawa mati."], answers: "belayar, dibayar" },
        { q: "Baca pantun di hadapan kelas dengan rentak dan intonasi yang sesuai.||อ่านปันตุนหน้าชั้นเรียนด้วยจังหวะและน้ำเสียงที่เหมาะสม" },
      ],
      nilai: "ปันตุนสอนคุณธรรม เช่น ความถ่อมตนและการสำนึกในบุญคุณ ซึ่งตรงกับคำสอนของอิสลาม",
      nilai_ms: "Pantun mengajar nilai murni seperti sifat rendah diri dan mengenang budi, selaras dengan ajaran Islam.",
    },
  ],
};
