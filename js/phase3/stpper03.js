let currentStep = 1;
const totalSteps = 8;

const progressBar = document.querySelector(".progress");
const steps = document.querySelectorAll(".step");
const boy = document.getElementById("boy");
const nextButton = document.getElementById("nextStep");
const backButton = document.getElementById("backStep");
const stepContent = document.getElementById("stepContent");
const stepImage = document.getElementById("stepImage");


const stepDetails = [
    {
        title: "جمع سعف النخل",
        content: `
            <div class="step-title">جمع سعف النخل</div>
            <p>يتم جمع السعف من أشجار النخيل بعد تقليمه، ويفضل اختيار السعف الطري والمرن.</p>
        `,
        image: "images/phase03-32.jpeg"
    },
    {
        title: " تنظيف السعف",
        content: `
            <div class="step-title"> تنظيف السعف</div>
            <p>يُزال الغبار والشوائب من السعف باستخدام الماء والفرشاة لضمان نظافته قبل المعالجة.</p>
        `,
        image: "images/phase03-33.jpeg"
    },
    {
        title: " تجفيف السعف",
        content: `
            <div class="step-title"> تجفيف السعف</div>
            <p>يُترك السعف ليجف في الظل أو الشمس، مما يساعد في الحفاظ على متانته قبل الاستخدام.</p>
        `,
        image: "images/phase03-34.jpeg"
    },
    {
        title: " تليين السعف (إعادة ترطيبه)",
        content: `
            <div class="step-title"> تليين السعف (إعادة ترطيبه)</div>
            <p>يتم نقع السعف الجاف في الماء لفترة قصيرة ليصبح أكثر مرونة وسهل التشكيل.</p>
        `,
        image: "images/phase03-35.jpeg"
    },
    {
        title: " تقطيع السعف",
        content: `
            <div class="step-title"> تقطيع السعف</div>
            <p>يُقص السعف إلى شرائح بأحجام مختلفة حسب الحاجة للتصميم.</p>
        `,
        image: "images/phase03-36.jpeg"
    },
    {
        title: "صبغ السعف (اختياري)",
        content: `
            <div class="step-title">صبغ السعف (اختياري)</div>
            <p>يمكن صبغ السعف بألوان طبيعية أو صناعية لإضفاء لمسة جمالية على القطع المصنوعة.</p>
        `,
        image: "images/phase03-37.jpeg"
    },
    {
        title: " بدء التشكيل (النسج أو التشبيك)",
        content: `
            <div class="step-title"> بدء التشكيل (النسج أو التشبيك)</div>
            <p>يبدأ الحرفيون في تشبيك السعف يدويًا لصنع الأشكال المطلوبة مثل السلال والمفارش.</p>
        `,
        image: "images/phase03-38.jpeg"
    },
    {
        title: " تثبيت الأطراف والتشطيب",
        content: `
            <div class="step-title"> تثبيت الأطراف والتشطيب</div>
            <p>يتم تثبيت الأطراف وربطها بشكل متين، مع إضافة اللمسات النهائية لضمان جودة المنتج.</p>
        `,
        image: "images/phase03-40.jpeg"
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
        window.location.href = "menTtadtions.html"; 
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
