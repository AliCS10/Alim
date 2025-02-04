
    const fileInput = document.getElementById("fileInput");
    const speakButton = document.getElementById("speakButton");

    // متغير لحفظ محتوى الملف النصي
    let chapterText = "";

    // عند اختيار ملف
    fileInput.addEventListener("change", function(e) {
      const file = e.target.files[0];
      if (!file) return;

      // نستخدم FileReader لقراءة الملف كنص
      const reader = new FileReader();
      reader.onload = function(e) {
        chapterText = e.target.result;
      };
      reader.readAsText(file);
    });

    // عند الضغط على زر "تشغيل الصوت"
    speakButton.addEventListener("click", function() {
      if (chapterText) {
        // نصنع كائن SpeechSynthesisUtterance من الـ Web Speech API
        const utterance = new SpeechSynthesisUtterance(chapterText);

        // يمكن تعديل اللغة (مثلاً إلى العربية) أو الصوت
        utterance.lang = "ar-SA";

        // تشغيل النطق
        window.speechSynthesis.speak(utterance);
      } else {
        alert("لم يتم تحميل أي نص بعد.");
      }
    });
