let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

let buka = ["Halo, Saya RoboChat", "Hai Saya RoboChat", "Halo namaku RoboChat"];
let bantu = ["Apa yang bisa kubantu?","Kamu perlu bantuan apa?","Apa yang bisa kulakukan untukmu?"];
let tawaran1 = ["rekomendasi mata kuliah untuk semester berapa?", "Tempat wisata jenis apa yang kamu mau?", "Aku memiliki beberapa rekomendasi. Tapi kamu mau yang seperti apa?"];
let tawaran2 = ["Aku punya rekomendasi wisata air, wisata gunung, wisata bukit, wisata sejarah, wisata museum, sama wisata kuliner."];
let wisAir = ["Ada pantai, danau, sama taman air."];
let wisGunung = ["Ada Gunung Merapi sama Gunung Api Purba"];
let wisBukit = ["Ada bukit Telletubies nih kalo rekomendasinya. Lengkapnya bisa kamu cari di Google"];
let wisSejarah = ["Aku punya rekomendasi ke Taman Sari. Lengkapnya bisa lihat di Google"];
let wisMuseum = ["Kalau museum ada museum seni, museum sejarah, museum sandi, sama museum tentara. Kamu mau cek yang mana dulu?"];
let wisKuliner= ["Kamu cari kuliner yang halal atau non halal?"];
let pantai = ["Wah aku ada rekomendasi Pantai Jogan, coba cari di google","Ada satu namanya Pantai Jogan"];
let danau = ["Wah aku ada rekomendasi Embung Banjaroya , coba cari di google","Ada satu namanya Embung Banjaroya"];
let waterpark = ["Wah aku ada rekomendasi Jogja Bay, coba cari di google","Ada satu namanya Jogja Bay"];
let gunungApi = ["Tentu saja aku punya. Ini foto Gunung Api Purba"];
let merapi = ["Tentu saja aku punya. Ini foto Gunung Merapi"];
let seni = ["Kalau museum seni, ada baiknya kamu coba berkunjung ke Museum Affandi"];
let sejarah = ["Kalau museum seni, coba kamu mengunjungi Benteng Vredeburg"];
let sandi = ["Museum Sandi adalah salah satu museum yang direkomendasikan kalau kamu mau mengetahui sejarah sandi di Indonesia."];
let tentara = ["Museum tentara di Jogja adalah museum tentara angkatan udara dimana di dalamnya berisi pesawat terbang milik tentara."];
let halal = ["Kamu wajib coba The House of Raminten","Cobain ke The House of Raminten aja"];
let nonhalal = ["Coba makan di Warung Bakmi Ketandan","Warung Bakmi Ketandan itu yang paling di rekomendasikan"];


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = "id-ID";


function showusermsg(usermsg){
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg, attachment){
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}`;
    if(attachment != null) {
        output += `<img style="width: 250px;" src="${attachment}">`;
    }
    output += `</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Hai";
    var attachment = null;
    if(message.includes('kamu siapa')){
        let finalresult = buka[Math.floor(Math.random() * buka.length)];
        speech.text = finalresult;
    }
    if(message.includes('ini apaan ya')){
        let finalresult = buka[Math.floor(Math.random() * buka.length)];
        speech.text = finalresult;
    }
    if(message.includes('tolong bantu aku')){
        let finalresult = bantu[Math.floor(Math.random() * bantu.length)];
        speech.text = finalresult;
    }
    if(message.includes('bantu aku')){
        let finalresult = bantu[Math.floor(Math.random() * bantu.length)];
        speech.text = finalresult;
    }
    if(message.includes('rekomendasi mata kuliah' )){
        let finalresult = tawaran1[Math.floor(Math.random() * tawaran1.length)];
        speech.text = finalresult;
    }
    if(message.includes('semester 3' )){
        let finalresult = tawaran1[Math.floor(Math.random() * tawaran1.length)];
        speech.text = finalresult;
    }
    if(message.includes('emang kamu punya apa aja')){
        let finalresult = tawaran2[Math.floor(Math.random() * tawaran2.length)];
        speech.text = finalresult;
    }
    if(message.includes('kamu punya apa aja')){
        let finalresult = tawaran2[Math.floor(Math.random() * tawaran2.length)];
        speech.text = finalresult;
    }
    if(message.includes('wisata air apa aja')){
        let finalresult = wisAir[Math.floor(Math.random() * wisAir.length)];
        speech.text = finalresult;
    }
    if(message.includes('wisata air itu apa aja')){
        let finalresult = wisAir[Math.floor(Math.random() * wisAir.length)];
        speech.text = finalresult;
    }
    if(message.includes('rekomendasi pantai')){
        let finalresult = pantai[Math.floor(Math.random() * pantai.length)];
        speech.text = finalresult; 
        attachment = "images/pantai jogan.jpg";
    }
    if(message.includes('rekomendasi danau')){
        let finalresult = danau[Math.floor(Math.random() * danau.length)];
        speech.text = finalresult;
        attachment = "images/embung banjaroya.jpg";
    }
    if(message.includes('rekomendasi taman air')){
        let finalresult = waterpark[Math.floor(Math.random() * waterpark.length)];
        speech.text = finalresult;
        attachment = "images/jogja bay.jpeg";
    }


    if(message.includes('wisata gunung apa aja')){
        let finalresult = wisGunung[Math.floor(Math.random() * wisGunung.length)];
        speech.text = finalresult;
    }
    if(message.includes('wisata gunung kaya apa')){
        let finalresult = wisGunung[Math.floor(Math.random() * wisGunung.length)];
        speech.text = finalresult;
    }
    if(message.includes('ada foto gunung api purba')){
        let finalresult = gunungApi[Math.floor(Math.random() * gunungApi.length)];
        speech.text = finalresult;
        attachment = "images/gunung api purba.jpg";
    }
    if(message.includes('kalau foto gunung api purba')){
        let finalresult = gunungApi[Math.floor(Math.random() * gunungApi.length)];
        speech.text = finalresult;
        attachment = "images/gunung api purba.jpg";
    }
    if(message.includes('ada foto gunung merapi')){
        let finalresult = merapi[Math.floor(Math.random() * merapi.length)];
        speech.text = finalresult;
        attachment = "images/gunung merapi.jpg";
    }
    if(message.includes('kalau foto gunung merapi')){
        let finalresult = merapi[Math.floor(Math.random() * merapi.length)];
        speech.text = finalresult;
        attachment = "images/gunung merapi.jpg";
    }


    if(message.includes('wisata bukit apa aja')){
        let finalresult = wisBukit[Math.floor(Math.random() * wisBukit.length)];
        speech.text = finalresult;
        attachment = "images/bukit teletubbies.jpg";
    }
    if(message.includes('wisata bukit kaya apa')){
        let finalresult = wisBukit[Math.floor(Math.random() * wisBukit.length)];
        speech.text = finalresult;
        attachment = "images/bukit teletubbies.jpg";
    }

    if(message.includes('wisata sejarah apa aja')){
        let finalresult = wisSejarah[Math.floor(Math.random() * wisSejarah.length)];
        speech.text = finalresult;
        attachment = "images/taman sari.jpg";
    }
    if(message.includes('kalau wisata sejarah kaya apa')){
        let finalresult = wisSejarah[Math.floor(Math.random() * wisSejarah.length)];
        speech.text = finalresult;
        attachment = "images/taman sari.jpg";
    }

    if(message.includes('wisata museum apa aja')){
        let finalresult = wisMuseum[Math.floor(Math.random() * wisMuseum.length)];
        speech.text = finalresult;
    }
    if(message.includes('wisata museum kaya apa')){
        let finalresult = wisMuseum[Math.floor(Math.random() * wisMuseum.length)];
        speech.text = finalresult;
    }
    if(message.includes('museum seni ada rekomendasi apa')){
        let finalresult = seni[Math.floor(Math.random() * seni.length)];
        speech.text = finalresult;
        attachment = "images/museum affandi.png"
    }
    if(message.includes('museum sejarah ada rekomendasi apa')){
        let finalresult = sejarah[Math.floor(Math.random() * sejarah.length)];
        speech.text = finalresult;
        attachment = "images/benteng vredeburg.jpg"
    }
    if(message.includes('museum sandi ada rekomendasi apa')){
        let finalresult = sandi[Math.floor(Math.random() * sandi.length)];
        speech.text = finalresult;
        attachment = "images/museum sandi.jpg"
    }
    if(message.includes('museum tentara ada rekomendasi apa')){
        let finalresult = tentara[Math.floor(Math.random() * tentara.length)];
        speech.text = finalresult;
        attachment = "images/museum tentara.jpg"
    }

    if(message.includes('wisata kuliner apa aja')){
        let finalresult = wisKuliner[Math.floor(Math.random() * wisKuliner.length)];
        speech.text = finalresult;
    }
    if(message.includes('wisata kuliner kaya apa')){
        let finalresult = wisKuliner[Math.floor(Math.random() * wisKuliner.length)];
        speech.text = finalresult;
    }
    if(message.includes('halal')){
        let finalresult = halal[Math.floor(Math.random() * halal.length)];
        speech.text = finalresult;
        attachment = "images/the house of raminten.jpg"
    }
    if(message.includes('kuliner halal yang direkomendasikan apa')){
        let finalresult = halal[Math.floor(Math.random() * halal.length)];
        speech.text = finalresult;
        attachment = "images/the house of raminten.jpg"
    }
    if(message.includes('nonhalal')){
        let finalresult = nonhalal[Math.floor(Math.random() * nonhalal.length)];
        speech.text = finalresult;
        attachment = "images/warung bakmie.jpg"
    }
    if(message.includes('kuliner nonhalal yang direkomendasikan apa')){
        let finalresult = nonhalal[Math.floor(Math.random() * nonhalal.length)];
        speech.text = finalresult;
        attachment = "images/warung bakmie.jpg"
    }
    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text, attachment));
}

recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    console.log(transcript);
}
recognition.onend=function(){
    mic.style.background="#ff3b3b";
}
mic.addEventListener("click", function(){
    mic.style.background='#39c81f';
    recognition.start();
    console.log("Activated");
})
