let currentStep = 1;
const totalSteps = 9;

const progressBar = document.querySelector(".progress");
const steps = document.querySelectorAll(".step");
const boy = document.getElementById("boy");
const nextButton = document.getElementById("nextStep");
const backButton = document.getElementById("backStep");
const stepContent = document.getElementById("stepContent");
const stepImage = document.getElementById("stepImage");


const stepDetails = [
    {
        title: " جمع الصوف أو الشعر",
        content: `
            <div class="step-title">جمع الصوف أو الشعر</div>
            <p>تُجز الأغنام أو الماعز أو يُجمع وبر الإبل في مواسم محددة.</p>
        `,
        image: "images/phase03-06.jpeg"
    },
    {
        title: " تنظيف وغسل الصوف",
        content: `
            <div class="step-title"> تنظيف وغسل الصوف</div>
            <p>يتم إزالة الشوائب ثم يُغسل الصوف بالماء والصابون الطبيعي ويُترك ليجف تحت الشمس.</p>
        `,
        image: "images/phase03-07.jpeg"
    },
    {
        title: " تمشيط الصوف (التنفيش)",
        content: `
            <div class="step-title"> تمشيط الصوف (التنفيش)</div>
            <p>يُوضع جزء من الصوف بين المشطين ويُمشط عدة مرات لفك تشابكه وتنعيمه، مما يسهل غزله لاحقًا.</p>
        `,
        image: "images/phase03-08.jpeg"
    },
    {
        title: " غزل الصوف (تحويله إلى خيوط)",
        content: `
            <div class="step-title"> غزل الصوف (تحويله إلى خيوط)</div>
            <p>يتم أخذ كمية من الصوف الممشط وتدويره بواسطة اليد مع سحب خيوط طويلة باستخدام المغزل ليصبح خيطًا متماسكًا.</p>
        `,
        image: "images/phase03-09.jpeg"
    },
    {
        title: " صبغ الخيوط (اختياري)",
        content: `
            <div class="step-title"> صبغ الخيوط (اختياري)</div>
            <p>تُغمس الخيوط في محلول الصبغة وتُجفف جيدًا تحت الشمس.</p>
        `,
        image: "images/phase03-10.jpeg"
    },
    {
        title: " إعداد المنول (النسيج)",
        content: `
            <div class="step-title"> إعداد المنول (النسيج)</div>
            <p>يتكون من أربعة أوتاد خشبية تُثبت بالأرض، تربط بينها خيوط طولية (السدى).</p>
        `,
        image: "images/phase03-11.jpeg"
    },
    {
        title: " تسدي الخيوط (إعداد السدى)",
        content: `
            <div class="step-title"> تسدي الخيوط (إعداد السدى)</div>
            <p>تُمد الخيوط الطولية (السدى) بشكل متوازٍ على المنول، ويتم شدّها بإحكام، حيث تشكّل قاعدة النسيج.</p>
        `,
        image: "images/phase03-14.jpeg"
    },
    {
        title: " النسيج (الحياكة)",
        content: `
            <div class="step-title"> النسيج (الحياكة)</div>
            <p>تبدأ الحياكة بتمرير المكوك بين خيوط السدى ذهابًا وإيابًا.</p>
            <ul>
                <li>بعد كل تمريرة، يُستخدم المشط أو السيف لطرق الخيوط بإحكام.</li>
                <li>تُكرر العملية حتى تكتمل القطعة.</li>
            </ul>
        `,
        image: "images/phase03-12.jpeg"
    },
    {
        title: " تشطيب السدو",
        content: `
            <div class="step-title"> تشطيب السدو</div>
            <p>تُقطع القطعة من المنول، وتُفحص الأطراف.</p>
            <ul>
                <li>يتم تثبيت الأطراف أو تزيينها بشراريب أو خيوط إضافية لضمان عدم تفككها.</li>
            </ul>
        `,
        image: "images/phase03-13.jpeg"
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
        window.location.href = "knittingTools.html"; 
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
