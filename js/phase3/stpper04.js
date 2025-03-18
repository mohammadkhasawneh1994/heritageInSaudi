let currentStep = 1;
const totalSteps = 4;

const progressBar = document.querySelector(".progress");
const steps = document.querySelectorAll(".step");
const boy = document.getElementById("boy");
const nextButton = document.getElementById("nextStep");
const backButton = document.getElementById("backStep");
const stepContent = document.getElementById("stepContent");
const stepImage = document.getElementById("stepImage");

const stepDetails = [
    {
        title: " اختيار نوع القماش (الصوف أو الوبر)",
        content: `
            <div class="step-title"> اختيار نوع القماش (الصوف أو الوبر)</div>
            <p>اختيار القماش هو الأساس في صناعة البشت؛ فالصوف يمنح البشت الفخامة والمتانة، بينما الوبر يعطيه ملمسًا ناعمًا وانسيابيًا.</p>
            <h4>الأدوات المستخدمة:</h4>
            <ul>
                <li>عين خبيرة في تقييم جودة الأقمشة.</li>
                <li>موازين دقيقة لقياس وزن وكثافة القماش.</li>
                <li>كتالوجات للألوان والنقوش التقليدية.</li>
            </ul>
        `,
        image: "images/phase04-01.jpeg"
    },
    {
        title: " قص القماش بحسب التصميم المطلوب",
        content: `
            <div class="step-title"> قص القماش بحسب التصميم المطلوب</div>
            <p>القص الدقيق يضمن تناسق القطع وسلامة تفصيل البشت. الأخطاء في هذه المرحلة قد تُفسد القماش بالكامل وتؤثر على الشكل النهائي.</p>
            <h4>الأدوات المستخدمة:</h4>
            <ul>
                <li>مقصات حادة خاصة بالأقمشة الثقيلة.</li>
                <li>مساطر معدنية لقياس الأبعاد بدقة.</li>
                <li>طباشير قماش لتحديد خطوط القص.</li>
            </ul>
        `,
        image: "images/phase04-02.jpeg"
    },
    {
        title: " تطريز الأطراف باستخدام خيوط الزري الذهبية أو الفضية",
        content: `
            <div class="step-title"> تطريز الأطراف باستخدام خيوط الزري الذهبية أو الفضية</div>
            <p>التطريز هو ما يميز البشت المقصب، ويعطيه الهيبة والفخامة.</p>
            <h4>الأدوات المستخدمة:</h4>
            <ul>
                <li>إبرة التطريز اليدوي أو ماكينة تطريز متخصصة.</li>
                <li>خيوط الزري (مصنوعة من خيوط ذهبية أو فضية حقيقية أو مطلية).</li>
                <li>نماذج (قوالب) زخارف تراثية لتوحيد النقش.</li>
            </ul>
        `,
        image: "images/phase04-03.jpeg"
    },
    {
        title: " الكي والتجهيز النهائي",
        content: `
            <div class="step-title"> الكي والتجهيز النهائي</div>
            <p>الكي يعطي البشت انسيابيته وأناقة مظهره، ويُبرز التطريز بشكل واضح.</p>
            <h4>الأدوات المستخدمة:</h4>
            <ul>
                <li>مكواة بخارية ذات حرارة مناسبة للأقمشة الثقيلة.</li>
                <li>طاولة كي كبيرة مسطحة.</li>
                <li>فرش لإزالة الوبر أو الغبار.</li>
            </ul>
        `,
        image: "images/phase04-04.jpeg"
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
        window.location.href = "wemon.html"; 
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
