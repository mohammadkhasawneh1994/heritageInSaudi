let correctAnswers = 0;
const totalQuestions = document.querySelectorAll('.question').length;

function checkAnswer(button, answer) {
    const questionDiv = button.closest('.question');
    const correctAnswer = questionDiv.getAttribute('data-answer');

    if (answer === correctAnswer) {
        button.classList.add("correct");
        button.disabled = true;
        correctAnswers++;

    
        document.getElementById("correct-sound").play();


        let buttons = questionDiv.querySelectorAll("button");
        buttons.forEach(btn => btn.disabled = true);

      
        if (correctAnswers === totalQuestions) {
            startFireworks();
        }
    } else {
     
        document.getElementById("wrong-sound").play();
        alert("❌ إجابة خاطئة! حاول مرة أخرى.");
    }
}



function startFireworks() {
 
    setTimeout(function() {
        window.location.href = 'finalFireWork.html'; 
    }, 1000);
}