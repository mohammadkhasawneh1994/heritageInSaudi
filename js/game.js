let correctAnswers = 0;
const totalQuestions = document.querySelectorAll('.question').length;

function checkAnswer(button, answer) {
    const questionDiv = button.closest('.question');
    const correctAnswer = questionDiv.getAttribute('data-answer');

    if (answer === correctAnswer) {
        button.classList.add("correct");
        button.disabled = true;
        correctAnswers++;

        // تشغيل صوت الإجابة الصحيحة
        document.getElementById("correct-sound").play();

        // تعطيل بقية الأزرار بعد الإجابة الصحيحة
        let buttons = questionDiv.querySelectorAll("button");
        buttons.forEach(btn => btn.disabled = true);

        // التأكد من أن كل الأجوبة صحيحة
        if (correctAnswers === totalQuestions) {
            document.getElementById("next-round").style.display = "block";
        }
    } else {
        // تشغيل صوت الخطأ
        document.getElementById("wrong-sound").play();
        alert("❌ إجابة خاطئة! حاول مرة أخرى.");
    }
}

function nextRound() {
    alert("🚀 انتقلت إلى الجولة الثانية!");
    // يمكن توجيه المستخدم إلى صفحة جديدة
}
