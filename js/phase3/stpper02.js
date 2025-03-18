let currentStep = 1;
const totalSteps = 6;

const progressBar = document.querySelector(".progress");
const steps = document.querySelectorAll(".step");
const boy = document.getElementById("boy");
const nextButton = document.getElementById("nextStep");
const backButton = document.getElementById("backStep");
const stepContent = document.getElementById("stepContent");
const stepImage = document.getElementById("stepImage");


const stepDetails = [
    {
        title: " جمع الطين وتحضيره",
        content: `
            <div class="step-title"> جمع الطين وتحضيره</div>
            <p>يُجمع الطين من المصادر الطبيعية، ثم يُنقى من الشوائب ويُعجن بالماء ليصبح جاهزًا للتشكيل.</p>
        `,
        image: "images/phase03-23.jpeg"
    },
    {
        title: " تشكيل الطين (تصميم الأشكال)",
        content: `
            <div class="step-title"> تشكيل الطين (تصميم الأشكال)</div>
            <p>يُستخدم الطين الرطب لتشكيل الأواني والأشكال المختلفة يدويًا أو باستخدام القوالب.</p>
        `,
        image: "images/phase03-24.jpeg"
    },
    {
        title: "التجفيف الأولي",
        content: `
            <div class="step-title">التجفيف الأولي</div>
            <p>يُترك الطين ليجف في الهواء الطلق أو في بيئة دافئة حتى يفقد معظم رطوبته.</p>
        `,
        image: "images/phase03-25.jpeg"
    },
    {
        title: " الزخرفة والتفريغ",
        content: `
            <div class="step-title"> الزخرفة والتفريغ</div>
            <p>يتم نحت الزخارف أو حفر النقوش على سطح الطين قبل الحرق.</p>
        `,
        image: "images/phase03-26.jpeg"
    },
    {
        title: " الحرق (الشيّ في الفرن)",
        content: `
            <div class="step-title"> الحرق (الشيّ في الفرن)</div>
            <p>تُوضع القطع الطينية في الفرن بدرجات حرارة مرتفعة لتحويلها إلى خزف صلب.</p>
        `,
        image: "images/phase03-27.jpeg"
    },
    {
        title: " التلوين أو التزجيج (اختياري)",
        content: `
            <div class="step-title"> التلوين أو التزجيج (اختياري)</div>
            <p>يمكن طلاء القطع أو تغطيتها بطبقة زجاجية لحمايتها وإضفاء مظهر جمالي عليها.</p>
        `,
        image: "images/phase03-28.jpeg"
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
        window.location.href = "palm.html"; 
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
