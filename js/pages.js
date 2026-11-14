/* =========================================================
   pages.js — محتوى صفحات الخدمات والمقالات + دالة العرض
   يعمل في المتصفح وفي أداة البناء (tools/build.js) بنفس الكود.
   لتعديل نص أي مقال/صفحة: عدّل هنا فقط ثم أعد البناء (أو عدّل index/الصفحات مباشرة).
   ⚠ المحتوى عام وتعليمي، ولا يحتوي ادعاءات عن الشركة (سنوات خبرة/أجهزة/شهادات).
   راجع نصوص صفحات الخدمات مع العميل قبل النشر.
   ========================================================= */
(function (g) {
  'use strict';

  /* ---------------- الخدمات ---------------- */
  var SERVICES = [
    {
      id: 'leak-detection', n: 5, file: 'leak-detection.html', icon: 'i-leak',
      img: 'assets/services/leak-detection.webp', related: ['hidden-leak-signs', 'detect-before-breaking'],
      ar: {
        name: 'كشف التسربات',
        title: 'كشف التسربات | شموخ أطلنتس',
        desc: 'كشف تسربات المياه في الحمامات والأسطح والجدران وتحديد مكان التسرب قبل الكسر والإصلاح. اطلب الخدمة عبر الاتصال أو واتساب.',
        h1: 'كشف التسربات: نحدد مصدر المشكلة قبل أي كسر',
        intro: 'كثير من التسربات لا يظهر مكانها الحقيقي. كشف التسرب يساعدك على معرفة المصدر الفعلي قبل التكسير والإصلاح، فتتجنب أعمالاً غير ضرورية.',
        whatTitle: 'أنواع التسربات التي نتعامل معها',
        whatLead: 'اكتب لنا أين تظهر المشكلة، ونوضح لك الخطوة المناسبة عند التواصل.',
        what: [
          ['تسرب مواسير المياه', 'تسربات في الشبكة الداخلية قد لا تظهر إلا من خلال بقع رطوبة أو فاتورة مرتفعة.'],
          ['تسرب الحمامات والمطابخ', 'رطوبة في الأرضيات أو الجدران المجاورة أو السقف أسفل الحمام.'],
          ['تسرب الأسطح والأسقف', 'ظهور بقع أو تساقط ماء بعد المطر أو أثناء الاستخدام.'],
          ['تسرب الجدران', 'رطوبة أو تقشر دهان في الجدران الداخلية أو الخارجية.']
        ],
        signsTitle: 'علامات تدل على وجود تسرب',
        signs: [
          'ارتفاع غير مبرر في فاتورة المياه',
          'بقع رطوبة أو تغير لون في السقف أو أسفل الجدار',
          'تقشر أو انتفاخ الدهان',
          'رائحة عفن أو رطوبة في مكان معين',
          'صوت جريان ماء رغم عدم الاستخدام',
          'انخفاض ضغط المياه'
        ],
        stepsTitle: 'كيف يتم الأمر',
        steps: [
          ['تواصل وتفاصيل', 'أرسل مكان المشكلة وصوراً للبقع إن أمكن.'],
          ['فهم الحالة', 'نحدد معك نوع التسرب المحتمل ومتى بدأ.'],
          ['تحديد الموضع', 'نوضح لك طريقة الكشف المناسبة لحالتك.'],
          ['توصية الحل', 'إصلاح أو عزل مناسب بعد معرفة المصدر.']
        ],
        faq: [
          ['كيف أعرف هل التسرب من ماسورة أم من العزل؟', 'الأعراض تتشابه أحياناً. مكان البقعة ووقت ظهورها (بعد المطر أم أثناء استخدام الماء) يعطيان مؤشراً، لكن التحديد الدقيق يحتاج فحصاً.'],
          ['هل لا بد من الكسر؟', 'الهدف تقليل التكسير بتحديد الموضع بدقة أولاً. وتختلف الحاجة للكسر من حالة لأخرى، ونوضح لك ذلك قبل البدء.'],
          ['ماذا أجهز قبل التواصل؟', 'سجّل قراءة عداد المياه، وصوّر البقع، واذكر متى لاحظتها وهل تزيد بعد المطر أو عند استخدام الماء.']
        ]
      },
      en: {
        name: 'Leak detection',
        title: 'Leak Detection | Shumookh Atlantis',
        desc: 'Water leak detection in bathrooms, roofs and walls: find the source of the leak before breaking and repairing. Request by phone or WhatsApp.',
        h1: 'Leak detection: find the source before you break anything',
        intro: 'The real source of a leak is often not where the damage shows. Leak detection helps you identify it before demolition and repair, so you avoid unnecessary work.',
        whatTitle: 'Types of leaks we deal with',
        whatLead: 'Tell us where the problem appears and we will explain the right next step when we speak.',
        what: [
          ['Water pipe leaks', 'Leaks in internal plumbing that may only show as damp patches or a high water bill.'],
          ['Bathroom and kitchen leaks', 'Moisture in floors, nearby walls or the ceiling below a bathroom.'],
          ['Roof and ceiling leaks', 'Stains or dripping after rain or during water use.'],
          ['Wall leaks', 'Dampness or peeling paint on interior or exterior walls.']
        ],
        signsTitle: 'Signs of a possible leak',
        signs: [
          'An unexplained rise in your water bill',
          'Damp patches or discoloration on a ceiling or low on a wall',
          'Peeling or bubbling paint',
          'A musty or damp smell in one area',
          'The sound of running water when nothing is in use',
          'Lower water pressure'
        ],
        stepsTitle: 'How it works',
        steps: [
          ['Contact and details', 'Send the location and photos of the stains if you can.'],
          ['Understand the case', 'We work out the likely type of leak and when it started.'],
          ['Locate the point', 'We explain the detection method that suits your case.'],
          ['Recommend a fix', 'A repair or insulation suited to the confirmed source.']
        ],
        faq: [
          ['How do I know if the leak is from a pipe or from the waterproofing?', 'Symptoms can look alike. Where the stain is and when it appears (after rain or while using water) are clues, but an exact answer needs an inspection.'],
          ['Is breaking walls or floors always necessary?', 'The aim is to break as little as possible by locating the point first. It varies by case and we explain it before starting.'],
          ['What should I prepare before contacting you?', 'Note your water meter reading, take photos of the stains, and say when you noticed them and whether they grow after rain or water use.']
        ]
      }
    },
    {
      id: 'waterproofing', n: 1, file: 'waterproofing.html', icon: 'i-drop',
      img: 'assets/services/waterproofing.webp', related: ['waterproof-vs-thermal', 'wall-dampness-causes'],
      ar: {
        name: 'عزل مائي',
        title: 'العزل المائي | شموخ أطلنتس',
        desc: 'خدمات العزل المائي للأسطح والحمامات والجدران والأساسات لمنع تسرب المياه والرطوبة. اطلب الخدمة عبر الاتصال أو واتساب.',
        h1: 'العزل المائي: حماية من الماء والرطوبة',
        intro: 'العزل المائي يمنع وصول الماء والرطوبة إلى الأسطح والجدران والأرضيات، ويحمي الإنشاء والتشطيبات من التلف مع الوقت.',
        whatTitle: 'أين نطبّق العزل المائي',
        whatLead: 'يختلف الحل بحسب المكان وحالته، ونوضح لك الأنسب عند التواصل.',
        what: [
          ['الأسطح', 'منع تسرب مياه الأمطار والتجمعات إلى الأسقف.'],
          ['الحمامات والمطابخ', 'حماية الأرضيات والجدران من تسرب المياه إلى الأدوار والغرف المجاورة.'],
          ['الجدران', 'معالجة رطوبة الجدران ومنع وصول الماء إليها.'],
          ['الأساسات', 'الحماية من الرطوبة القادمة من التربة.']
        ],
        signsTitle: 'علامات تحتاج معها إلى عزل مائي',
        signs: [
          'بقع رطوبة أو تغير لون في السقف أو الجدار',
          'تقشر الدهان أو انتفاخه',
          'رائحة عفن أو رطوبة',
          'تجمع ماء على السطح',
          'ظهور أملاح بيضاء على الجدار'
        ],
        faq: [
          ['هل أحتاج عزلاً إذا لم يكن لدي تسرب؟', 'في الأماكن المعرضة للماء، العزل قبل التشطيب أفضل من المعالجة بعد ظهور المشكلة.'],
          ['هل العزل المائي يعالج تسرب المواسير؟', 'لا. تسرب المواسير يحتاج كشفاً وإصلاحاً. راجع صفحة كشف التسربات إن لم تكن متأكداً من المصدر.'],
          ['ماذا أرسل لتقدير الطلب؟', 'نوع المكان، المساحة التقريبية، وصور واضحة للمشكلة إن وجدت.']
        ]
      },
      en: {
        name: 'Waterproofing',
        title: 'Waterproofing | Shumookh Atlantis',
        desc: 'Waterproofing for roofs, bathrooms, walls and foundations to stop water leaks and moisture. Request by phone or WhatsApp.',
        h1: 'Waterproofing: protection from water and moisture',
        intro: 'Waterproofing keeps water and moisture out of roofs, walls and floors, and protects the structure and finishes from damage over time.',
        whatTitle: 'Where waterproofing is applied',
        whatLead: 'The solution depends on the place and its condition; we explain the right one when we speak.',
        what: [
          ['Roofs', 'Stop rain and standing water from reaching the ceilings.'],
          ['Bathrooms and kitchens', 'Protect floors and walls from leaking into rooms and floors below.'],
          ['Walls', 'Treat wall dampness and keep water from reaching it.'],
          ['Foundations', 'Protection from moisture coming up from the soil.']
        ],
        signsTitle: 'Signs you may need waterproofing',
        signs: [
          'Damp patches or discoloration on a ceiling or wall',
          'Peeling or bubbling paint',
          'A musty or damp smell',
          'Water pooling on the roof',
          'White salt deposits on walls'
        ],
        faq: [
          ['Do I need it if I have no leak?', 'In wet areas, waterproofing before finishing is better than treating the problem after it appears.'],
          ['Does waterproofing fix pipe leaks?', 'No. Pipe leaks need detection and repair. See the leak detection page if you are unsure of the source.'],
          ['What should I send for an estimate?', 'The type of place, approximate area, and clear photos of the problem if there is one.']
        ]
      }
    },
    {
      id: 'thermal-insulation', n: 2, file: 'thermal-insulation.html', icon: 'i-heat',
      img: 'assets/services/thermal.webp', related: ['heat-insulation-comfort', 'waterproof-vs-thermal'],
      ar: {
        name: 'عزل حراري',
        title: 'العزل الحراري | شموخ أطلنتس',
        desc: 'عزل حراري للأسطح والجدران والأسقف لتقليل انتقال الحرارة إلى الداخل وتخفيف الحمل على التكييف. اطلب الخدمة عبر الاتصال أو واتساب.',
        h1: 'العزل الحراري: راحة أكثر داخل المبنى',
        intro: 'العزل الحراري يقلل انتقال الحرارة من الخارج إلى الداخل، فيساعد على راحة أعلى وتخفيف الحمل على أجهزة التكييف.',
        whatTitle: 'أين نطبّق العزل الحراري',
        whatLead: 'نختار الحل بحسب طبيعة المبنى ومصدر الحرارة الأكبر فيه.',
        what: [
          ['الأسطح', 'أكثر الأجزاء تعرضاً للشمس، وغالباً أولى نقاط البدء.'],
          ['الجدران الخارجية', 'تقليل الحرارة المنتقلة عبر الجدران المواجهة للشمس.'],
          ['الأسقف', 'مفيد خصوصاً للطابق الأخير والغرف تحت السطح.'],
          ['الواجهات', 'حلول للواجهات في المباني السكنية والتجارية.']
        ],
        signsTitle: 'علامات تحتاج معها إلى عزل حراري',
        signs: [
          'غرف الطابق الأخير أسخن بوضوح من بقية المبنى',
          'التكييف يعمل باستمرار دون تبريد كافٍ',
          'فرق حرارة ملحوظ بين الغرف',
          'سطح أو جدار ساخن عند اللمس'
        ],
        faq: [
          ['هل العزل الحراري يغني عن العزل المائي؟', 'لا. لكل منهما وظيفة مختلفة، وقد يحتاج المبنى إلى النوعين معاً.'],
          ['هل يخفض فاتورة الكهرباء؟', 'يقلل الحمل على التكييف، لكن مقدار التوفير يختلف بحسب المبنى والاستخدام.'],
          ['من أين نبدأ؟', 'غالباً من السطح لأنه الأكثر تعرضاً للشمس، ونؤكد لك ذلك بحسب حالة مبناك.']
        ]
      },
      en: {
        name: 'Thermal insulation',
        title: 'Thermal Insulation | Shumookh Atlantis',
        desc: 'Thermal insulation for roofs, walls and ceilings to reduce heat entering the building and ease the load on air conditioning. Request by phone or WhatsApp.',
        h1: 'Thermal insulation: more comfort indoors',
        intro: 'Thermal insulation reduces heat moving from outside to inside, helping with comfort and easing the load on air conditioning.',
        whatTitle: 'Where thermal insulation is applied',
        whatLead: 'We choose the solution based on the building and its biggest source of heat.',
        what: [
          ['Roofs', 'The part most exposed to the sun and often the first place to start.'],
          ['External walls', 'Reduce heat passing through sun-facing walls.'],
          ['Ceilings', 'Especially useful for the top floor and rooms under the roof.'],
          ['Facades', 'Solutions for facades in residential and commercial buildings.']
        ],
        signsTitle: 'Signs you may need thermal insulation',
        signs: [
          'Top-floor rooms are clearly hotter than the rest of the building',
          'The A/C runs constantly without cooling enough',
          'A noticeable temperature difference between rooms',
          'A roof or wall that feels hot to the touch'
        ],
        faq: [
          ['Does thermal insulation replace waterproofing?', 'No. Each does a different job, and a building may need both.'],
          ['Will it lower my electricity bill?', 'It reduces the load on air conditioning, but the savings vary with the building and how it is used.'],
          ['Where should we start?', 'Usually the roof, since it takes the most sun. We confirm this for your building.']
        ]
      }
    },
    {
      id: 'roof-insulation', n: 3, file: 'roof-insulation.html', icon: 'i-roof',
      img: 'assets/services/roof.webp', related: ['roof-prep-mistakes', 'heat-insulation-comfort'],
      ar: {
        name: 'عزل الأسطح',
        title: 'عزل الأسطح | شموخ أطلنتس',
        desc: 'عزل الأسطح بطبقات تساعد على الحماية من الماء والحرارة معاً. اطلب الخدمة عبر الاتصال أو واتساب.',
        h1: 'عزل الأسطح: حماية من الماء والحرارة',
        intro: 'السطح هو أكثر جزء يتعرض للشمس والأمطار. عزله بطبقات مناسبة يساعد على الحماية من الماء والحرارة معاً.',
        whatTitle: 'ماذا يشمل عزل الأسطح',
        whatLead: 'تختلف الخطوات بحسب حالة السطح ونوعه، ونوضح لك نطاق العمل قبل التنفيذ.',
        what: [
          ['فحص السطح', 'معاينة الحالة وتحديد المشكلات قبل اختيار الحل.'],
          ['معالجة الشقوق والوصلات', 'تجهيز السطح ومعالجة النقاط الضعيفة.'],
          ['طبقات الحماية من الماء', 'منع تسرب المياه إلى الأسقف.'],
          ['طبقات تقليل الحرارة', 'تخفيف الحرارة المنتقلة من السطح إلى الداخل.']
        ],
        signsTitle: 'علامات تحتاج معها إلى عزل السطح',
        signs: [
          'تسرب أو بقع في السقف بعد المطر',
          'تجمع مياه على السطح',
          'تشققات أو تقشر في الطبقة الحالية',
          'سخونة الطابق الأخير'
        ],
        faq: [
          ['متى أعزل السطح؟', 'عند ظهور علامات التسرب أو سخونة الطابق الأخير، أو عند تجديد السطح. ويفضل التنفيذ في طقس مناسب بحسب المادة.'],
          ['هل أزيل العزل القديم؟', 'يعتمد ذلك على حالته. نحدده بعد المعاينة أو من الصور.'],
          ['كيف أحصل على تقدير؟', 'أرسل مساحة السطح التقريبية وصوراً واضحة له وللمشكلة.']
        ]
      },
      en: {
        name: 'Roof insulation',
        title: 'Roof Insulation | Shumookh Atlantis',
        desc: 'Roof insulation layers that help protect against both water and heat. Request by phone or WhatsApp.',
        h1: 'Roof insulation: protection from water and heat',
        intro: 'The roof takes the most sun and rain. Insulating it with suitable layers helps protect against both water and heat.',
        whatTitle: 'What roof insulation covers',
        whatLead: 'Steps vary by the roof and its condition; we explain the scope before starting.',
        what: [
          ['Roof inspection', 'Check the condition and identify problems before choosing a solution.'],
          ['Cracks and joints', 'Prepare the roof and treat weak points.'],
          ['Waterproofing layers', 'Stop water from getting into the ceilings.'],
          ['Heat-reducing layers', 'Ease the heat passing from the roof to the interior.']
        ],
        signsTitle: 'Signs your roof needs insulation',
        signs: [
          'Leaks or stains on the ceiling after rain',
          'Water pooling on the roof',
          'Cracks or peeling in the existing layer',
          'A hot top floor'
        ],
        faq: [
          ['When should I insulate the roof?', 'When leak signs or a hot top floor appear, or when renovating the roof. Weather suitable for the material is best.'],
          ['Should the old insulation be removed?', 'It depends on its condition. We decide after an inspection or from photos.'],
          ['How do I get an estimate?', 'Send the approximate roof area and clear photos of it and of the problem.']
        ]
      }
    },
    {
      id: 'building-insulation', n: 4, file: 'building-insulation.html', icon: 'i-build',
      img: 'assets/services/building.webp', related: ['wall-dampness-causes', 'waterproof-vs-thermal'],
      ar: {
        name: 'عزل المباني',
        title: 'عزل المباني | شموخ أطلنتس',
        desc: 'عزل الواجهات والجدران في المباني السكنية والتجارية. اطلب الخدمة عبر الاتصال أو واتساب.',
        h1: 'عزل المباني: واجهات وجدران محمية',
        intro: 'نقدم عزلاً للواجهات والجدران في المباني السكنية والتجارية لتقليل الرطوبة وانتقال الحرارة وحماية التشطيبات.',
        whatTitle: 'ما الذي يشمله عزل المباني',
        whatLead: 'نحدد معك نطاق العمل بحسب المبنى والمشكلة.',
        what: [
          ['الواجهات الخارجية', 'حماية الواجهات من مياه الأمطار والرطوبة.'],
          ['الجدران الخارجية', 'تقليل الرطوبة والحرارة المنتقلة عبر الجدران.'],
          ['المناطق الرطبة', 'معالجة الجدران المجاورة للحمامات والمطابخ.'],
          ['الجدران المتصلة بالتربة', 'الحماية من الرطوبة الصاعدة من الأساسات.']
        ],
        signsTitle: 'علامات تحتاج معها إلى عزل المبنى',
        signs: [
          'رطوبة تصعد من أسفل الجدران',
          'تشققات في الواجهة',
          'أملاح بيضاء أو تقشر في الدهان',
          'فرق حرارة ملحوظ بين الغرف'
        ],
        faq: [
          ['هل تعزلون المباني السكنية والتجارية؟', 'نعم، نخدم المباني السكنية والتجارية، ونؤكد لك التفاصيل عند التواصل.'],
          ['هل يحل العزل مشكلة الرطوبة نهائياً؟', 'يعتمد على سبب الرطوبة. لذلك نحدد المصدر أولاً ثم نقترح الحل.'],
          ['ماذا أرسل؟', 'صور للواجهة أو الجدار، ومكان المشكلة، ونوع المبنى.']
        ]
      },
      en: {
        name: 'Building insulation',
        title: 'Building Insulation | Shumookh Atlantis',
        desc: 'Insulation for facades and walls in residential and commercial buildings. Request by phone or WhatsApp.',
        h1: 'Building insulation: protected facades and walls',
        intro: 'We provide insulation for facades and walls in residential and commercial buildings to reduce moisture and heat transfer and protect finishes.',
        whatTitle: 'What building insulation covers',
        whatLead: 'We define the scope with you based on the building and the problem.',
        what: [
          ['External facades', 'Protect facades from rain and moisture.'],
          ['External walls', 'Reduce moisture and heat passing through walls.'],
          ['Wet areas', 'Treat walls next to bathrooms and kitchens.'],
          ['Walls in contact with soil', 'Protection from moisture rising from the foundations.']
        ],
        signsTitle: 'Signs your building needs insulation',
        signs: [
          'Moisture rising from the base of walls',
          'Cracks in the facade',
          'White salts or peeling paint',
          'A noticeable temperature difference between rooms'
        ],
        faq: [
          ['Do you insulate residential and commercial buildings?', 'Yes, we serve both, and we confirm the details when we speak.'],
          ['Does insulation solve dampness for good?', 'It depends on the cause of the dampness, so we identify the source first and then suggest the solution.'],
          ['What should I send?', 'Photos of the facade or wall, where the problem is, and the type of building.']
        ]
      }
    }
  ];

  /* ---------------- المقالات (عامة وتعليمية) ---------------- */
  var ARTICLES = [
    {
      id: 'hidden-leak-signs', file: 'article-hidden-leak-signs.html', img: 'assets/projects/water-bathroom.webp', svc: 'leak-detection',
      ar: {
        title: 'كيف تعرف أن عندك تسرب مياه مخفي؟',
        desc: 'علامات بسيطة تدل على تسرب مخفي، واختبار سهل بعداد المياه، وماذا تفعل بعد ذلك.',
        lead: 'التسرب المخفي لا يظهر دائماً على شكل ماء على الأرض. كثيراً ما يبدأ بعلامات صغيرة يمكن ملاحظتها مبكراً.',
        body: [
          { h: 'علامات تستحق الانتباه' },
          { ul: ['ارتفاع فاتورة المياه دون تغير في الاستخدام', 'بقع رطوبة أو تغير لون على السقف أو أسفل الجدار', 'تقشر الدهان أو انتفاخه', 'رائحة عفن أو رطوبة في غرفة معينة', 'سماع صوت جريان ماء رغم عدم الاستخدام', 'انخفاض ضغط المياه'] },
          { h: 'اختبار بسيط بعداد المياه' },
          { p: 'أغلق كل الصنابير والأجهزة التي تستهلك الماء، ثم سجّل قراءة العداد وانتظر فترة دون استخدام، وقارن القراءة. إن تغيرت فقد يكون هناك تسرب في الشبكة.' },
          { p: 'هذا الاختبار لا يحدد مكان التسرب، لكنه يساعدك على معرفة هل المشكلة موجودة أصلاً.' },
          { h: 'الخطوة التالية' },
          { p: 'صوّر البقع وسجّل متى ظهرت، ولا تبدأ بالكسر قبل معرفة المصدر. ثم اطلب فحصاً لتحديد موضع التسرب.' }
        ]
      },
      en: {
        title: 'How to tell if you have a hidden water leak',
        desc: 'Simple signs of a hidden leak, an easy water-meter check, and what to do next.',
        lead: 'A hidden leak does not always show up as water on the floor. It often starts with small signs you can notice early.',
        body: [
          { h: 'Signs worth noticing' },
          { ul: ['A higher water bill with no change in usage', 'Damp patches or discoloration on a ceiling or low on a wall', 'Peeling or bubbling paint', 'A musty or damp smell in one room', 'Hearing running water when nothing is in use', 'Lower water pressure'] },
          { h: 'A simple water-meter check' },
          { p: 'Turn off all taps and water-using appliances, note the meter reading, wait a while without using water, and compare. If it changed, there may be a leak in the plumbing.' },
          { p: 'This check does not locate the leak, but it tells you whether a problem exists at all.' },
          { h: 'The next step' },
          { p: 'Photograph the stains and note when they appeared, and do not start breaking before you know the source. Then ask for an inspection to locate the leak.' }
        ]
      }
    },
    {
      id: 'waterproof-vs-thermal', file: 'article-waterproof-vs-thermal.html', img: 'assets/projects/roof-house.webp', svc: 'waterproofing',
      ar: {
        title: 'الفرق بين العزل المائي والعزل الحراري',
        desc: 'ما وظيفة كل نوع من العزل، ومتى يحتاج المبنى إلى النوعين معاً.',
        lead: 'يخلط كثيرون بين العزل المائي والعزل الحراري، لكن لكل منهما وظيفة مختلفة.',
        body: [
          { h: 'العزل المائي' },
          { p: 'يمنع وصول الماء والرطوبة إلى الأسقف والجدران والأرضيات، ويحمي الإنشاء والتشطيبات من التلف.' },
          { h: 'العزل الحراري' },
          { p: 'يبطئ انتقال الحرارة من الخارج إلى الداخل، فيساعد على راحة أعلى وتخفيف الحمل على التكييف.' },
          { h: 'أيهما تحتاج؟' },
          { ul: ['بقع وتسرب بعد المطر: عزل مائي', 'سخونة الغرف العليا: عزل حراري', 'الاثنان معاً: شائع في الأسطح'] },
          { p: 'لا يغني أحدهما عن الآخر. نوع المشكلة وحالة المبنى هما ما يحدد المناسب، ويمكنك إرسال صور وتفاصيل لنوضح لك ذلك.' }
        ]
      },
      en: {
        title: 'Waterproofing vs. thermal insulation',
        desc: 'What each type of insulation does, and when a building needs both.',
        lead: 'Many people confuse waterproofing with thermal insulation, but each does a different job.',
        body: [
          { h: 'Waterproofing' },
          { p: 'It keeps water and moisture out of ceilings, walls and floors, and protects the structure and finishes from damage.' },
          { h: 'Thermal insulation' },
          { p: 'It slows heat moving from outside to inside, helping with comfort and easing the load on air conditioning.' },
          { h: 'Which one do you need?' },
          { ul: ['Stains and leaks after rain: waterproofing', 'Hot upper rooms: thermal insulation', 'Both together: common on roofs'] },
          { p: 'Neither replaces the other. The type of problem and the condition of the building decide what suits you, and you can send photos and details so we can explain.' }
        ]
      }
    },
    {
      id: 'wall-dampness-causes', file: 'article-wall-dampness-causes.html', img: 'assets/projects/building-foundation.webp', svc: 'building-insulation',
      ar: {
        title: 'أسباب الرطوبة في الجدران وكيف تفرّق بينها',
        desc: 'أشهر أسباب رطوبة الجدران، ومؤشرات تساعدك على تخمين المصدر قبل المعاينة.',
        lead: 'رطوبة الجدران لها أسباب متعددة، ومعرفة السبب هي أول خطوة نحو الحل الصحيح.',
        body: [
          { h: 'أشهر الأسباب' },
          { ul: ['تسرب من مواسير داخل الجدار', 'تسرب من السطح أو الشرفة أو الحمام الذي فوق الجدار', 'رطوبة صاعدة من التربة عبر الأساسات', 'تكاثف بخار الماء بسبب ضعف التهوية', 'شقوق في الواجهة تسمح بدخول مياه المطر'] },
          { h: 'مؤشرات تساعدك' },
          { ul: ['بقعة أسفل الجدار: غالباً رطوبة صاعدة', 'بقعة تحت حمام أو سطح: احتمال تسرب علوي', 'عفن في الزوايا والمطبخ: احتمال تكاثف وضعف تهوية', 'تزيد بعد المطر: احتمال دخول ماء من الواجهة أو السطح'] },
          { p: 'هذه مؤشرات أولية فقط، والتحديد الدقيق يحتاج معاينة. لا تبدأ بالدهان قبل معرفة السبب، فقد تعود المشكلة.' }
        ]
      },
      en: {
        title: 'Causes of wall dampness and how to tell them apart',
        desc: 'The most common causes of damp walls, and clues to help guess the source before an inspection.',
        lead: 'Wall dampness has several possible causes, and knowing the cause is the first step to the right fix.',
        body: [
          { h: 'Common causes' },
          { ul: ['A leak from pipes inside the wall', 'A leak from the roof, balcony or bathroom above the wall', 'Moisture rising from the soil through the foundations', 'Condensation caused by poor ventilation', 'Cracks in the facade letting rain in'] },
          { h: 'Clues that help' },
          { ul: ['A stain low on the wall: often rising damp', 'A stain under a bathroom or roof: a possible leak from above', 'Mould in corners and kitchens: possible condensation and poor ventilation', 'Worse after rain: possible water entering through the facade or roof'] },
          { p: 'These are only first clues; an exact diagnosis needs an inspection. Do not repaint before knowing the cause, or the problem may come back.' }
        ]
      }
    },
    {
      id: 'detect-before-breaking', file: 'article-detect-before-breaking.html', img: 'assets/projects/water-roof.webp', svc: 'leak-detection',
      ar: {
        title: 'لماذا نكشف التسرب قبل الكسر؟',
        desc: 'كيف يوفر تحديد موضع التسرب أولاً أعمال تكسير غير ضرورية.',
        lead: 'عندما يظهر تسرب، يكون الحل السريع في ذهن كثيرين هو الكسر. لكن الكسر دون تحديد المصدر قد يزيد المشكلة.',
        body: [
          { h: 'مخاطر الكسر العشوائي' },
          { ul: ['تكسير في أماكن لا يوجد بها التسرب', 'تكلفة إضافية لإعادة التشطيب', 'تأخير في حل المشكلة الأصلية'] },
          { h: 'ما الذي يفعله كشف التسرب؟' },
          { p: 'يحدد المصدر المحتمل ثم الموضع بدقة أكبر، فيقتصر العمل بعد ذلك على المكان المناسب.' },
          { h: 'أسئلة مفيدة قبل أي عمل' },
          { ul: ['هل سيتحدد موضع التسرب قبل الكسر؟', 'هل المصدر ماسورة أم عزل؟', 'ما الحل المقترح بعد معرفة المصدر؟'] },
          { p: 'تختلف الحالات، وقد يلزم الكسر أحياناً، لكن الأفضل أن يكون بعد تحديد الموضع وليس قبله.' }
        ]
      },
      en: {
        title: 'Why detect the leak before breaking anything?',
        desc: 'How locating the leak first saves unnecessary demolition.',
        lead: 'When a leak appears, many people think of breaking walls or floors straight away. But breaking without knowing the source can make things worse.',
        body: [
          { h: 'Risks of random demolition' },
          { ul: ['Breaking in places where there is no leak', 'Extra cost to redo the finishes', 'Delay in fixing the original problem'] },
          { h: 'What leak detection does' },
          { p: 'It identifies the likely source and then the point more precisely, so work is limited to the right place.' },
          { h: 'Useful questions before any work' },
          { ul: ['Will the leak point be located before breaking?', 'Is the source a pipe or the waterproofing?', 'What fix is suggested once the source is known?'] },
          { p: 'Cases differ and breaking is sometimes needed, but it is better done after locating the point, not before.' }
        ]
      }
    },
    {
      id: 'roof-prep-mistakes', file: 'article-roof-prep-mistakes.html', img: 'assets/projects/compare-before.webp', svc: 'roof-insulation',
      ar: {
        title: 'أخطاء شائعة قبل عزل السطح',
        desc: 'أخطاء في تجهيز السطح تضعف نتيجة العزل، وكيف تتجنبها.',
        lead: 'نجاح عزل السطح لا يعتمد على المادة وحدها، بل على تجهيز السطح قبل التنفيذ.',
        body: [
          { h: 'أخطاء يجب تجنبها' },
          { ul: ['العزل فوق سطح غير نظيف أو رطب', 'تجاهل الشقوق والوصلات قبل البدء', 'إهمال تصريف المياه والميول', 'نسيان الأطراف والزوايا ومحيط الأعمدة والمخارج', 'عدم احترام مدة التجفيف أو المعالجة التي تحددها تعليمات المادة', 'اختيار المادة دون معرفة طبيعة السطح'] },
          { h: 'ماذا تفعل قبل البدء؟' },
          { p: 'صوّر السطح بوضوح، وسجّل أماكن تجمع المياه ومواضع التسرب إن وجدت، واذكر المساحة التقريبية. هذه التفاصيل تساعد على اقتراح الحل المناسب.' }
        ]
      },
      en: {
        title: 'Common mistakes before insulating a roof',
        desc: 'Roof-preparation mistakes that weaken the result, and how to avoid them.',
        lead: 'Roof insulation depends not only on the material but also on how the roof is prepared.',
        body: [
          { h: 'Mistakes to avoid' },
          { ul: ['Insulating over a dirty or damp roof', 'Ignoring cracks and joints before starting', 'Neglecting drainage and slopes', 'Forgetting edges, corners and the areas around columns and outlets', 'Not respecting the drying or curing time in the material instructions', 'Choosing a material without knowing the type of roof'] },
          { h: 'What to do before starting' },
          { p: 'Photograph the roof clearly, note where water pools and where leaks appear, and give the approximate area. These details help suggest the right solution.' }
        ]
      }
    },
    {
      id: 'heat-insulation-comfort', file: 'article-heat-insulation-comfort.html', img: 'assets/projects/thermal-ceiling.webp', svc: 'thermal-insulation',
      ar: {
        title: 'كيف يساعد العزل الحراري على راحة المبنى؟',
        desc: 'من أين تدخل الحرارة إلى المبنى، ومتى يفيد العزل الحراري.',
        lead: 'تدخل الحرارة إلى المبنى من أكثر من مكان، وأكثرها تأثيراً غالباً السطح والجدران المواجهة للشمس.',
        body: [
          { h: 'من أين تدخل الحرارة؟' },
          { ul: ['السطح الذي يتعرض للشمس معظم اليوم', 'الجدران الخارجية المواجهة للشمس', 'الفتحات والفراغات غير المحكمة'] },
          { h: 'ماذا يفعل العزل الحراري؟' },
          { p: 'يبطئ انتقال الحرارة إلى الداخل، فتبقى الغرف أكثر راحة ويقل الحمل على التكييف. ويختلف مقدار الفائدة من مبنى لآخر.' },
          { h: 'نقاط تساعدك' },
          { ul: ['ابدأ غالباً بالسطح', 'الطابق الأخير أكثر تأثراً بالحرارة', 'اللون الفاتح للسطح يعكس حرارة أكثر من الداكن'] }
        ]
      },
      en: {
        title: 'How thermal insulation improves building comfort',
        desc: 'Where heat enters a building and when thermal insulation helps.',
        lead: 'Heat enters a building from several places, and often the biggest are the roof and the sun-facing walls.',
        body: [
          { h: 'Where does heat come in?' },
          { ul: ['The roof, exposed to the sun most of the day', 'External walls facing the sun', 'Gaps and openings that are not well sealed'] },
          { h: 'What thermal insulation does' },
          { p: 'It slows heat moving indoors, so rooms stay more comfortable and the load on air conditioning drops. The benefit varies from building to building.' },
          { h: 'Helpful points' },
          { ul: ['Usually start with the roof', 'The top floor is the most affected by heat', 'A light-coloured roof reflects more heat than a dark one'] }
        ]
      }
    }
  ];

  /* ---------------- أدوات ---------------- */
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;'); }
  function byId(list, id) { for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i]; return null; }
  function ico(id, cls) { return '<svg class="ico' + (cls ? ' ' + cls : '') + '" aria-hidden="true"><use href="#' + id + '"/></svg>'; }
  function svcHref(s) { return s.file; }
  function artHref(a) { return a.file; }

  function tag(T) { return '<figcaption class="tag">' + esc(T['tag.illus']) + '</figcaption>'; }

  function crumbs(T, items) {
    return '<nav class="crumbs wrap" aria-label="breadcrumb"><ol>' + items.map(function (it, i) {
      var last = i === items.length - 1;
      return '<li>' + (last ? '<span aria-current="page">' + esc(it[0]) + '</span>' : '<a href="' + it[1] + '">' + esc(it[0]) + '</a>') + '</li>';
    }).join('') + '</ol></nav>';
  }

  function articleCard(a, L, T) {
    var d = a[L];
    return '<a class="acard" href="' + artHref(a) + '">' +
      '<figure class="acard__img" data-illus><img src="' + a.img + '" alt="" width="768" height="576" loading="lazy" decoding="async">' + tag(T) + '</figure>' +
      '<div class="acard__b"><h3>' + esc(d.title) + '</h3><p>' + esc(d.desc) + '</p>' +
      '<span class="acard__more">' + esc(T['blog.read']) + ico('i-arrow', 'ico--dir') + '</span></div></a>';
  }

  function cardsGrid(list, L, T) {
    return '<div class="acards">' + list.map(function (a) { return articleCard(a, L, T); }).join('') + '</div>';
  }

  function ctaBlock(T, title, desc, wa) {
    return '<section class="cta cta--page" data-anchor><div class="wrap"><div class="cta__copy">' +
      '<p class="eyebrow eyebrow--light"><span class="eyebrow__mark" aria-hidden="true"></span><span>' + esc(T['cta.eyebrow']) + '</span></p>' +
      '<h2>' + esc(title) + '</h2><p class="lead">' + esc(desc) + '</p>' +
      '<div class="cta__btns"><a class="btn btn--brass btn--lg" href="#" data-call>' + ico('i-phone') + '<span>' + esc(T['cta.call']) + '</span></a>' +
      '<a class="btn btn--wa btn--lg" href="#" target="_blank" rel="noopener" ' + (wa ? 'data-wa-service="' + wa + '"' : 'data-wa') + '>' + ico('i-wa') + '<span>' + esc(T['cta.wa']) + '</span></a></div></div></div></section>';
  }

  /* ---------------- صفحة خدمة ---------------- */
  function servicePage(s, L, T) {
    var d = s[L], h = '';
    h += crumbs(T, [[T['pg.home'], 'index.html'], [T['nav.services'], 'index.html#services'], [d.name]]);
    h += '<section class="phero" data-anchor><div class="wrap phero__grid"><div class="phero__copy">' +
      '<p class="eyebrow"><span class="eyebrow__mark" aria-hidden="true"></span><span>' + esc(d.name) + '</span></p>' +
      '<h1>' + esc(d.h1) + '</h1><p class="lead">' + esc(d.intro) + '</p>' +
      '<div class="hero__cta"><a class="btn btn--wa btn--lg" href="#" target="_blank" rel="noopener" data-wa-service="' + s.n + '">' + ico('i-wa') + '<span>' + esc(T['pg.cta.wa']) + '</span></a>' +
      '<a class="btn btn--line btn--lg" href="#" data-call>' + ico('i-phone') + '<span>' + esc(T['hero.cta2']) + '</span></a></div></div>' +
      '<figure class="arch phero__art" data-illus><img src="' + s.img + '" alt="' + esc(d.name) + '" width="768" height="597" fetchpriority="high" decoding="async">' + tag(T) + '</figure></div></section>';

    h += '<section class="sec" data-anchor><div class="wrap"><header class="sec__head"><h2>' + esc(d.whatTitle) + '</h2><p class="lead">' + esc(d.whatLead) + '</p></header><ul class="pgrid">' +
      d.what.map(function (w, i) { return '<li class="pcard"><span class="pcard__no" aria-hidden="true">0' + (i + 1) + '</span><h3>' + esc(w[0]) + '</h3><p>' + esc(w[1]) + '</p></li>'; }).join('') + '</ul></div></section>';

    h += '<section class="sec sec--ink" data-anchor><div class="wrap signs"><header class="sec__head"><h2>' + esc(d.signsTitle) + '</h2></header><ul class="ticks">' +
      d.signs.map(function (x) { return '<li>' + ico('i-check') + '<span>' + esc(x) + '</span></li>'; }).join('') + '</ul></div></section>';

    if (d.steps) {
      h += '<section class="sec" data-anchor><div class="wrap"><header class="sec__head"><h2>' + esc(d.stepsTitle) + '</h2></header><ol class="steps">' +
        d.steps.map(function (x, i) { return '<li class="step"><span class="step__no" aria-hidden="true">' + (i + 1) + '</span><h3>' + esc(x[0]) + '</h3><p>' + esc(x[1]) + '</p></li>'; }).join('') + '</ol></div></section>';
    }

    h += '<section class="sec sec--sand2" data-anchor><div class="wrap faq"><header class="sec__head"><h2>' + esc(T['pg.faq']) + '</h2></header><div class="acc">' +
      d.faq.map(function (f, i) {
        var q = 'pq' + (i + 1), a = 'pa' + (i + 1);
        return '<div class="acc__item"><h3><button type="button" class="acc__q" id="' + q + '" aria-expanded="false" aria-controls="' + a + '"><span>' + esc(f[0]) + '</span>' + ico('i-plus') + '</button></h3><div class="acc__a" id="' + a + '" role="region" aria-labelledby="' + q + '"><div><p>' + esc(f[1]) + '</p></div></div></div>';
      }).join('') + '</div></div></section>';

    var rel = s.related.map(function (id) { return byId(ARTICLES, id); }).filter(Boolean);
    if (rel.length) {
      h += '<section class="sec" data-anchor><div class="wrap"><header class="sec__head"><h2>' + esc(T['pg.related']) + '</h2></header>' + cardsGrid(rel, L, T) + '</div></section>';
    }

    h += '<section class="sec sec--sand2 others" data-anchor><div class="wrap"><header class="sec__head"><h2>' + esc(T['pg.others']) + '</h2></header><ul class="hero__chips">' +
      SERVICES.slice().sort(function (a, b) { return a.n - b.n; }).filter(function (o) { return o.id !== s.id; }).map(function (o) {
        return '<li><a href="' + svcHref(o) + '">' + ico(o.icon) + '<span>' + esc(o[L].name) + '</span></a></li>';
      }).join('') + '</ul></div></section>';

    h += ctaBlock(T, T['pg.ctaT'], T['pg.ctaD'], s.n);
    return h;
  }

  /* ---------------- صفحة مقال ---------------- */
  function articlePage(a, L, T) {
    var d = a[L], h = '';
    h += crumbs(T, [[T['pg.home'], 'index.html'], [T['nav.blog'], 'blog.html'], [d.title]]);
    h += '<article class="art" data-anchor><div class="wrap art__wrap"><header class="art__head"><p class="eyebrow"><span class="eyebrow__mark" aria-hidden="true"></span><span>' + esc(T['nav.blog']) + '</span></p><h1>' + esc(d.title) + '</h1><p class="lead">' + esc(d.lead) + '</p></header>' +
      '<figure class="art__img" data-illus><img src="' + a.img + '" alt="" width="768" height="576" fetchpriority="high" decoding="async">' + tag(T) + '</figure><div class="art__body">' +
      d.body.map(function (b) {
        if (b.h) return '<h2>' + esc(b.h) + '</h2>';
        if (b.p) return '<p>' + esc(b.p) + '</p>';
        if (b.ul) return '<ul>' + b.ul.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
        return '';
      }).join('') + '</div></div></article>';

    var s = byId(SERVICES, a.svc);
    if (s) {
      h += '<section class="sec sec--sand2 artsvc" data-anchor><div class="wrap"><div class="artsvc__box"><span class="badge" aria-hidden="true">' + ico(s.icon) + '</span><div><h2>' + esc(T['pg.artSvcT']) + '</h2><p>' + esc(s[L].intro) + '</p></div><a class="btn btn--navy" href="' + svcHref(s) + '"><span>' + esc(s[L].name) + '</span>' + ico('i-arrow', 'ico--dir') + '</a></div></div></section>';
    }
    var more = ARTICLES.filter(function (x) { return x.id !== a.id; }).slice(0, 3);
    h += '<section class="sec" data-anchor><div class="wrap"><header class="sec__head"><h2>' + esc(T['pg.moreArt']) + '</h2></header>' + cardsGrid(more, L, T) + '</div></section>';
    h += ctaBlock(T, T['pg.artCtaT'], T['pg.artCtaD'], s ? s.n : 0);
    return h;
  }

  /* ---------------- صفحة المقالات ---------------- */
  function blogPage(L, T) {
    return crumbs(T, [[T['pg.home'], 'index.html'], [T['nav.blog']]]) +
      '<section class="sec phead" data-anchor><div class="wrap"><header class="sec__head"><p class="eyebrow"><span class="eyebrow__mark" aria-hidden="true"></span><span>' + esc(T['nav.blog']) + '</span></p><h1>' + esc(T['pg.blog.h1']) + '</h1><p class="lead">' + esc(T['pg.blog.lead']) + '</p></header>' +
      cardsGrid(ARTICLES, L, T) + '</div></section>' + ctaBlock(T, T['pg.artCtaT'], T['pg.artCtaD'], 0);
  }

  /* ---------------- واجهة عامة ---------------- */
  var PAGES = {};
  SERVICES.forEach(function (s) { PAGES[s.id] = { type: 'service', obj: s, file: s.file }; });
  ARTICLES.forEach(function (a) { PAGES[a.id] = { type: 'article', obj: a, file: a.file }; });
  PAGES.blog = { type: 'blog', file: 'blog.html' };

  g.SitePages = {
    services: SERVICES, articles: ARTICLES, pages: PAGES,
    ids: function () { return Object.keys(PAGES); },
    render: function (spec, L, T) {
      if (spec === 'home-articles') return cardsGrid(ARTICLES.slice(0, 3), L, T);
      var p = PAGES[spec]; if (!p) return '';
      if (p.type === 'service') return servicePage(p.obj, L, T);
      if (p.type === 'article') return articlePage(p.obj, L, T);
      return blogPage(L, T);
    },
    meta: function (id, L, T) {
      var p = PAGES[id]; if (!p) return null;
      if (p.type === 'service') return { title: p.obj[L].title, desc: p.obj[L].desc };
      if (p.type === 'article') return { title: p.obj[L].title + ' | ' + T['pg.brand'], desc: p.obj[L].desc };
      return { title: T['pg.blog.title'], desc: T['pg.blog.desc'] };
    }
  };
})(window);
