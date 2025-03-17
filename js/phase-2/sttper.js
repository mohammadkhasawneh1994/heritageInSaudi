let currentStep = 1;
const totalSteps = 3;

const progressBar = document.querySelector(".progress");
const steps = document.querySelectorAll(".step");
const boy = document.getElementById("boy");
const nextButton = document.getElementById("nextStep");
const backButton = document.getElementById("backStep");
const stepContent = document.getElementById("stepContent");
const stepImage = document.getElementById("stepImage");


const stepDetails = [
    {
        title: "مراحل تحضير القهوة السعودية التقليدية",
        content: `
            <div class="step-title">1- تحميص الحبوب</div>
            <p><strong>الأدوات المستخدمة:</strong></p>
            <ul>
                <li>المحماص (المقلاة الحديدية أو النحاسية)</li>
                <li>ملعقة التحريك (ملعقة خشبية أو معدنية)</li>
                <li>موقد نار (حطب أو غاز)</li>
            </ul>
            <p><strong>طريقة التحضير:</strong></p>
            <p>تُحمَّص حبوب القهوة الخضراء على نار متوسطة مع التقليب المستمر حتى تكتسب اللون الذهبي. يجب الانتباه إلى درجة التحميص، حيث يؤثر ذلك على نكهة القهوة؛ فالتحميص الخفيف يمنح القهوة طعماً أكثر حموضة ونكهة زهرية، بينما التحميص الداكن يعطيها مذاقاً أعمق وأقوى.</p>
            <p><strong>أهمية الخطوة:</strong></p>
            <p>التحميص يتحكم في قوة النكهة والرائحة، وهو عامل رئيسي في جودة القهوة.</p>
        `,
        image: "images/phase02-18.jpeg"
    },
    {
        title: "2- طحن الحبوب",
        content: `
            <div class="step-title">2- طحن الحبوب</div>
            <p><strong>الأدوات المستخدمة:</strong></p>
            <ul>
                <li>النجر (الهاون والمدقة التقليدية)</li>
                <li>مطحنة القهوة (يدوية أو كهربائية)</li>
            </ul>
            <p><strong>طريقة التحضير:</strong></p>
            <p>تُطحن الحبوب بعد أن تبرد قليلاً حتى تصل إلى درجة الطحن المطلوبة، والتي تكون عادة خشنة إلى متوسطة. يجب تجنب الطحن الناعم جداً لأنه قد يجعل القهوة ثقيلة وموحلة القوام.</p>
            <p><strong>أهمية الخطوة:</strong></p>
            <p>درجة الطحن تؤثر على استخلاص النكهة أثناء الغليان؛ الطحن الخشن يمنع القهوة من أن تصبح مرة أو طينية القوام.</p>
        `,
        image: "images/phase01-19.jpeg"
    },
    {
        title: "3- غلي القهوة",
        content: `
            <div class="step-title">3- غلي القهوة</div>
            <p><strong>الأدوات المستخدمة:</strong></p>
            <ul>
                <li>دلة (إبريق نحاسي أو زجاجي)</li>
                <li>ماء ساخن</li>
                <li>بهارات إضافية (زعفران، قرنفل، مستكة – اختياري)</li>
            </ul>
            <p><strong>طريقة التحضير:</strong></p>
            <p>يُغلى الماء في الدلة، ثم يُضاف مسحوق القهوة مع التحريك بلطف. تُترك القهوة على نار هادئة لمدة 10-15 دقيقة حتى تترسب الرواسب في القاع. بعد الغليان، تُترك القهوة لتهدأ قليلاً قبل إضافة الهيل والتوابل، ثم يُصفى المشروب في دلة التقديم.</p>
            <p><strong>أهمية الخطوة:</strong></p>
            <p>الغلي البطيء يساعد في استخلاص النكهات الغنية دون أن تصبح القهوة مرة. ترك القهوة لترتاح يسمح بترسيب الرواسب في القاع، مما يجعلها صافية عند التقديم.</p>
        `,
        image: "images/phase02-20.jpeg"
    }
];


document.addEventListener("DOMContentLoaded", () => {
    stepContent.innerHTML = stepDetails[0].content;
    stepImage.src = stepDetails[0].image; 
});

nextButton.addEventListener("click", () => {
    if (currentStep < totalSteps) {
        currentStep++;

        progressBar.style.width = `${(currentStep - 1) / (totalSteps - 1) * 100}%`;

        steps.forEach((step, index) => {
            step.classList.toggle("active", index < currentStep);
        });

        let moveX = (currentStep - 1) * (100 / (totalSteps - 1));
        boy.style.right = `${moveX}%`;

        stepContent.innerHTML = stepDetails[currentStep - 1].content;
        stepImage.src = stepDetails[currentStep - 1].image;
    } else {
        window.location.href = "folklore.html"; 
    }
});


backButton.addEventListener("click", () => {
    if (currentStep > 1) {
        currentStep--;

        progressBar.style.width = `${(currentStep - 1) / (totalSteps - 1) * 100}%`;

    
        steps.forEach((step, index) => {
            step.classList.toggle("active", index < currentStep);
        });

      
        let moveX = (currentStep - 1) * (100 / (totalSteps - 1));
        boy.style.right = `${moveX}%`;

     
        stepContent.innerHTML = stepDetails[currentStep - 1].content;
        stepImage.src = stepDetails[currentStep - 1].image;
    }
});
