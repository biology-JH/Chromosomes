const lessons = [
  {
    id: "core-1", number: "CORE 1", title: "Chromosomes and DNA",
    text: "Chromosomes are structures of coiled DNA inside the nucleus. Genes lie along DNA, so chromosomes carry hereditary information.",
    images: [
      { src: "/manus-storage/image-6-1_6e83e527.jpg", alt: "DNA double helix", caption: "DNA coils to form chromosomes." }
    ],
    questions: [
      { q: "What is a chromosome?", a: "A DNA structure that carries genes." },
      { q: "Where is DNA found in a cell, and what does it carry?", a: "In the nucleus; it carries genetic information in genes." }
    ]
  },
  {
    id: "core-2", number: "CORE 2", title: "Genes code for proteins",
    text: "A gene is a length of DNA that codes for a protein. Proteins are chains of amino acids.",
    images: [
      { src: "/manus-storage/image-7-1_c2a4a8a8.png", alt: "Diagram locating a gene along chromosome DNA", caption: "A gene is a section of DNA." }
    ],
    questions: [
      { q: "Define a gene.", a: "A length of DNA that codes for a protein." },
      { q: "What is a protein made from?", a: "A chain of amino acids." }
    ]
  },
  {
    id: "core-3", number: "CORE 3", title: "Alleles",
    text: "An allele is an alternative form of a gene. The two alleles on a chromosome pair may be the same or different.",
    images: [
      { src: "/manus-storage/image-8-1_5e50b9f2.png", alt: "Paired chromosomes showing alternative alleles", caption: "A gene can have alternative forms called alleles." }
    ],
    questions: [
      { q: "What is an allele?", a: "An alternative form of a gene." },
      { q: "Can the two alleles in a pair differ?", a: "Yes. They may be the same or different." }
    ]
  },
  {
    id: "core-4", number: "CORE 4", title: "Sex inheritance",
    text: "Pair 23 is the sex chromosomes: females are XX and males XY. Eggs carry X; sperm carry X or Y, giving a 1:1 expectation. Each fertilisation is independent.",
    images: [
      { src: "/manus-storage/image-14-1_b7c522a9.png", alt: "X chromosome and Y chromosome", caption: "Eggs carry X; sperm carry X or Y." }
    ],
    questions: [
      { q: "Which sex chromosomes are shown for females and males?", a: "Female: XX. Male: XY." },
      { q: "What is the chance that a child will be a girl, even after three sons?", a: "50% (one half). Each fertilisation is independent." }
    ]
  },
  {
    id: "extension-5", number: "EXTENSION 5", title: "The DNA code",
    text: "The order of bases in a gene determines the order of amino acids in its protein.",
    images: [
      { src: "/manus-storage/image-20-1_cf04423c.png", alt: "DNA bases paired with amino acids", caption: "The base sequence carries the code." }
    ],
    questions: [
      { q: "What does a gene’s base sequence determine?", a: "The amino acid sequence of the protein." },
      { q: "What is the coded sequence made from?", a: "The order of bases in DNA." }
    ]
  },
  {
    id: "extension-6", number: "EXTENSION 6", title: "Protein shape",
    text: "Different amino-acid sequences give protein molecules different shapes. Shape determines function, including the shape of an enzyme’s active site.",
    images: [
      { src: "/manus-storage/image-21-1_d71bbdd5.png", alt: "A linear sequence of amino acids", caption: "First, the amino acids are in a particular order." },
      { src: "/manus-storage/image-21-2_760a90c5.png", alt: "Folded protein showing its active site", caption: "Then the chain folds into a specific shape." }
    ],
    questions: [
      { q: "What determines the order of amino acids?", a: "The gene’s base sequence." },
      { q: "How could a base change affect an enzyme?", a: "It may change the amino acid sequence and folding, altering the active site’s shape." }
    ]
  },
  {
    id: "extension-7", number: "EXTENSION 7", title: "Proteins and cell function",
    text: "DNA controls cell function by controlling protein production. Enzymes control cell reactions, membrane carriers move substances, and receptors bind neurotransmitters.",
    images: [
      { src: "/manus-storage/image-22-1_e3d17320.png", alt: "Enzyme protein illustration", caption: "Enzymes control cell reactions.", icon: true },
      { src: "/manus-storage/image-22-2_6e5a303d.png", alt: "Membrane carrier protein illustration", caption: "Carriers move substances across membranes.", icon: true },
      { src: "/manus-storage/image-22-3_8ede6de2.png", alt: "Neurotransmitter receptor illustration", caption: "Receptors bind neurotransmitters.", icon: true }
    ],
    questions: [
      { q: "How does DNA control cell function?", a: "By controlling the production of proteins." },
      { q: "Name three protein roles in cells.", a: "Enzymes control reactions; carriers move substances across membranes; receptors bind neurotransmitters." }
    ]
  },
  {
    id: "extension-8", number: "EXTENSION 8", title: "Protein synthesis",
    text: "The gene stays in the nucleus. A single-stranded mRNA copy is made there, moves to the cytoplasm and passes through a ribosome. Its base sequence determines amino-acid order, and the ribosome joins them into a protein. Detailed transcription and translation are not required.",
    images: [
      { src: "/manus-storage/image-2-1_99437f00.png", alt: "Sequence from DNA gene to mRNA, ribosome, and protein", caption: "The path from gene to protein.", featured: true },
      { src: "/manus-storage/image-23-1_d29643ba.png", alt: "mRNA copy leaving the nucleus through a nuclear pore", caption: "mRNA carries a gene copy out of the nucleus." },
      { src: "/manus-storage/image-24-1_1453f349.png", alt: "Single-stranded mRNA showing its base sequence", caption: "The mRNA base sequence determines amino-acid order." },
      { src: "/manus-storage/image-25-1_08a02a78.png", alt: "Ribosome joining amino acids to make a protein", caption: "A ribosome joins amino acids into a protein." }
    ],
    questions: [
      { q: "Where is mRNA made, and what does it copy?", a: "In the nucleus; it is a copy of one gene." },
      { q: "What determines the amino-acid sequence in the protein?", a: "The base sequence of the mRNA." },
      { q: "Where does mRNA pass, and where are amino acids assembled?", a: "mRNA passes through a ribosome, where amino acids are joined into a protein." }
    ]
  },
  {
    id: "extension-9", number: "EXTENSION 9", title: "Gene expression",
    text: "Most body cells contain the same genes, but many are not expressed because each cell makes only the proteins it needs. Beta cells make insulin, red-cell precursors make haemoglobin, and skin cells make keratin.",
    images: [
      { src: "/manus-storage/image-29-1_86520cbc.png", alt: "Different cell types expressing different genes", caption: "Different cells make different proteins from shared genetic information." }
    ],
    questions: [
      { q: "Do skin cells lack the insulin gene?", a: "No. They carry it but do not express it." },
      { q: "Why can body cells behave differently if they share genes?", a: "Different cells express different genes and make different proteins." }
    ]
  },
  {
    id: "extension-10", number: "EXTENSION 10", title: "Haploid nuclei",
    text: "A haploid nucleus contains one set of chromosomes. Human gametes—eggs and sperm—have 23 single chromosomes.",
    images: [
      { src: "/manus-storage/image-10-1_8e963353.jpg", alt: "Egg and sperm cells", caption: "Egg and sperm are gametes." },
      { src: "/manus-storage/image-11-2_07e59d36.png", alt: "Haploid nucleus with one chromosome set", caption: "A haploid nucleus has one set." }
    ],
    questions: [
      { q: "What does haploid mean?", a: "Having one set of chromosomes." },
      { q: "How many chromosomes are in a human gamete?", a: "23 unpaired chromosomes." }
    ]
  },
  {
    id: "extension-11", number: "EXTENSION 11", title: "Diploid nuclei",
    text: "A diploid nucleus contains two sets of chromosomes.",
    images: [
      { src: "/manus-storage/image-11-1_66c4a9d6.png", alt: "Diploid nucleus with paired chromosomes", caption: "A diploid nucleus has two chromosome sets." }
    ],
    questions: [
      { q: "What does diploid mean?", a: "A nucleus containing two sets of chromosomes." },
      { q: "How does diploid differ from haploid?", a: "Diploid has two sets; haploid has one set." }
    ]
  },
  {
    id: "extension-12", number: "EXTENSION 12", title: "Chromosome pairs in humans",
    text: "A diploid cell has a pair of each type of chromosome. Human diploid cells have 23 pairs (46 chromosomes).",
    images: [
      { src: "/manus-storage/image-9-1_1f6a6559.jpg", alt: "Human chromosome karyotype", caption: "The human diploid number is 23 pairs." }
    ],
    questions: [
      { q: "How many copies of each chromosome type are in a diploid cell?", a: "Two, forming a pair." },
      { q: "How many chromosome pairs are in a human diploid cell?", a: "23 pairs, or 46 chromosomes." }
    ]
  }
];

const lessonsRoot = document.querySelector("#lessons");
const lessonNav = document.querySelector("#lesson-nav");
const progressCopy = document.querySelector("#progress-copy");
const progressFill = document.querySelector("#progress-fill");

function renderImage(image, index, total) {
  const figure = document.createElement("figure");
  figure.className = image.featured ? "artwork artwork-featured" : image.icon ? "artwork artwork-icon" : "artwork";
  const trigger = document.createElement("button");
  trigger.className = "image-trigger";
  trigger.type = "button";
  trigger.setAttribute("aria-label", `View image larger: ${image.caption}`);
  trigger.dataset.viewerSrc = image.src;
  trigger.dataset.viewerAlt = image.alt;
  trigger.dataset.viewerCaption = image.caption;
  const img = document.createElement("img");
  img.src = image.src;
  img.alt = image.alt;
  img.loading = "lazy";
  img.decoding = "async";
  trigger.append(img);
  const caption = document.createElement("figcaption");
  caption.textContent = image.caption;
  figure.append(trigger, caption);
  if (total > 1) figure.dataset.position = `${index + 1} of ${total}`;
  return figure;
}

function renderLesson(lesson, index) {
  const section = document.createElement("section");
  section.className = "lesson-card";
  section.id = `point-${lesson.id}`;
  section.dataset.index = String(index);
  section.setAttribute("aria-labelledby", `title-${lesson.id}`);

  const heading = document.createElement("div");
  heading.className = "lesson-heading";
  const number = document.createElement("p");
  number.className = "lesson-number";
  number.textContent = lesson.number;
  const title = document.createElement("h2");
  title.id = `title-${lesson.id}`;
  title.textContent = lesson.title;
  heading.append(number, title);

  const copy = document.createElement("p");
  copy.className = "lesson-copy";
  copy.textContent = lesson.text;
  section.append(heading, copy);

  if (lesson.images.length) {
    const grid = document.createElement("div");
    grid.className = `artwork-grid artwork-count-${lesson.images.length}`;
    lesson.images.forEach((image, imageIndex) => grid.append(renderImage(image, imageIndex, lesson.images.length)));
    section.append(grid);
  }

  const review = document.createElement("div");
  review.className = "review-block";
  const reviewTitle = document.createElement("h3");
  reviewTitle.textContent = "Check your understanding";
  const questions = document.createElement("div");
  questions.className = "questions";
  lesson.questions.forEach((question, questionIndex) => {
    const details = document.createElement("details");
    details.className = "question";
    const summary = document.createElement("summary");
    summary.textContent = `${questionIndex + 1}. ${question.q}`;
    const answer = document.createElement("p");
    answer.className = "answer";
    answer.textContent = `Answer: ${question.a}`;
    details.append(summary, answer);
    questions.append(details);
  });
  review.append(reviewTitle, questions);
  section.append(review);

  const next = document.createElement("a");
  next.className = "next-lesson";
  next.href = index < lessons.length - 1 ? `#point-${lessons[index + 1].id}` : "#lesson-finish";
  next.innerHTML = index < lessons.length - 1
    ? `Next: ${lessons[index + 1].number} <span aria-hidden="true">→</span>`
    : `Finish the lesson <span aria-hidden="true">→</span>`;
  section.append(next);
  lessonsRoot.append(section);

  const navLink = document.createElement("a");
  navLink.href = `#point-${lesson.id}`;
  navLink.className = "lesson-nav-link";
  navLink.dataset.index = String(index);
  navLink.innerHTML = `<span class="nav-index">${String(index + 1).padStart(2, "0")}</span><span>${lesson.number}</span>`;
  lessonNav.append(navLink);
}

lessons.forEach(renderLesson);
const finalSection = document.querySelector(".lesson-footer");
finalSection.id = "lesson-finish";
const initialAnchor = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
if (initialAnchor) requestAnimationFrame(() => initialAnchor.scrollIntoView({ block: "start" }));

const navLinks = [...document.querySelectorAll(".lesson-nav-link")];
const observer = new IntersectionObserver((entries) => {
  const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  const index = Number(visible.target.dataset.index);
  navLinks.forEach((link, linkIndex) => link.classList.toggle("is-active", linkIndex === index));
  progressCopy.textContent = `Point ${index + 1} of ${lessons.length}`;
  progressFill.style.width = `${((index + 1) / lessons.length) * 100}%`;
}, { rootMargin: "-18% 0px -60% 0px", threshold: [0, 0.1, 0.35, 0.7] });
document.querySelectorAll(".lesson-card").forEach((section) => observer.observe(section));

const viewer = document.querySelector("#image-viewer");
const viewerImage = document.querySelector("#viewer-image");
const viewerCaption = document.querySelector("#viewer-caption");
document.addEventListener("click", (event) => {
  const trigger = event.target.closest(".image-trigger");
  if (trigger && trigger.dataset.viewerSrc) {
    viewerImage.src = trigger.dataset.viewerSrc;
    viewerImage.alt = trigger.dataset.viewerAlt;
    viewerCaption.textContent = trigger.dataset.viewerCaption;
    viewer.showModal();
  }
});
document.querySelector("#viewer-close").addEventListener("click", () => viewer.close());
viewer.addEventListener("click", (event) => {
  if (event.target === viewer) viewer.close();
});
