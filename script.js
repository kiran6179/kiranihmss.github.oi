/* BHA509 Fundamentals of Marketing Skills course portal.
   Content is organised from the supplied course syllabus and uploaded Unit 1–4 documents.
   Unit 5 subtopics follow the supplied syllabus; a separate Unit 5 document was not provided. */
"use strict";

const units = [
  {
    id: "unit-1", number: "Unit 1", title: "Introduction to Marketing",
    summary: "Marketing foundations, value creation, customer relationships and the marketing mix.",
    sourceNote: "Detailed section headings are based on the uploaded Unit 1 document.",
    topics: [
      ["1.1", "Introduction to Marketing", "Meaning and scope of marketing; markets and market types; definitions and characteristics of marketing."],
      ["1.1.1", "Markets and Market Types", "Consumer, business, global, nonprofit and governmental markets; offerings such as goods, services, events, experiences, places, information and ideas."],
      ["1.1.2", "Definitions of Marketing", "Key definitions and the customer-focused nature of marketing."],
      ["1.1.3", "Marketing Management", "Planning, organising, implementation and control of marketing activities."],
      ["1.2", "Marketing vs. Sales", "Customer-oriented and product-oriented approaches; long- and short-term focus; pull and push strategies; objectives, audiences, skills and performance indicators; collaboration across the customer journey."],
      ["1.3", "Evolution of Marketing Concept", "Marketing management orientations and how marketing philosophies have evolved."],
      ["1.4", "Role of Marketing", "Contribution of marketing to customers and organisations."],
      ["1.4.1", "Nature of Marketing", "Customer focus, exchange, value creation and changing market needs."],
      ["1.4.2", "Functions of Marketing", "Activities connecting customer needs with products, services, communication and delivery."],
      ["1.4.3", "Objectives of Marketing", "Customer satisfaction, profitable relationships, demand creation and organisational goals."],
      ["1.5", "Core Concepts of Marketing Skills", "Foundational ideas for understanding markets and customer relationships."],
      ["1.5.1", "Needs, Wants and Demands", "Distinguishing needs, wants and demands."],
      ["1.5.2", "Marketing Offerings", "Products, services and experiences, and the value they provide."],
      ["1.5.3", "Customer Value and Satisfaction", "Perceived value, customer expectations and satisfaction."],
      ["1.5.4", "Exchange and Relationships", "Exchange, relationship building and customer retention."],
      ["1.6", "Value Exchange Process", "Value exchange systems; components of value creation; customer value versus company value; process stages and measuring success."],
      ["1.6.1", "Barriers in Value Exchange", "Factors that may prevent or weaken successful exchange."],
      ["1.6.2", "Marketing Mix – The 4 Ps", "Product, Price, Place and Promotion and their role in marketing decisions."],
      ["1.6.3", "Extended Marketing Mix – 7 Ps", "People, Process and Physical Evidence added to the 4 Ps, particularly for services."],
      ["1.7", "Meaning and Types of Goods", "Meaning and classification of goods."],
      ["1.8", "Goods vs. Services", "Differences between goods and services and implications for marketing."]
    ],
    outcomes: [
      "Define marketing and explain the scope and role of marketing.",
      "Distinguish marketing from sales using hospitality examples.",
      "Explain needs, wants, demands, customer value, satisfaction and exchange.",
      "Apply the 4 Ps and explain the relevance of the extended 7 Ps.",
      "Differentiate goods, services and experiences."
    ],
    quiz: [
      {q:"Which statement best distinguishes marketing from sales?", options:["Marketing focuses only on closing transactions","Marketing begins with customer needs and creates value","Marketing is limited to advertising","Marketing occurs only after production"], answer:1, why:"Marketing begins with understanding customer needs and creating value; sales is more directly concerned with converting prospects."},
      {q:"In the 4 Ps, booking channels mainly relate to which element?", options:["Product","Price","Place","Promotion"], answer:2, why:"Place concerns distribution and the channels through which customers access an offering."},
      {q:"Which is an example of a service?", options:["A packaged souvenir","A room-service experience","A printed brochure","A bottled drink"], answer:1, why:"Room service is an intangible service experience delivered to a guest."},
      {q:"Which three elements extend the traditional 4 Ps to the 7 Ps?", options:["Planning, Profit, Performance","People, Process, Physical Evidence","Position, Packaging, Publicity","Purpose, Partnership, Productivity"], answer:1, why:"The extended services marketing mix adds People, Process and Physical Evidence."},
      {q:"Value exchange in marketing is best described as:", options:["Only the company receiving value","Only customers receiving value","A mutually beneficial exchange between parties","Eliminating customer choice"], answer:2, why:"Marketing exchange aims to create value for customers and the organisation."}
    ]
  },
  {
    id: "unit-2", number: "Unit 2", title: "Marketing Environment",
    summary: "Understand internal and external influences through five core strategic frameworks.",
    sourceNote: "Detailed section headings are based on the uploaded Unit 2 document.",
    topics: [
      ["2.1","Introduction to Marketing Environment","Internal and external factors; environmental change; opportunities and threats; continuous monitoring."],
      ["2.2","The 5 Cs Framework","Company, Customers, Competitors, Collaborators and Climate/Context."],
      ["2.2.1","Company Analysis","Resources, strengths and weaknesses; offerings; marketing mix; brand image; competitive advantage; goals; VRIO as referenced in the unit."],
      ["2.2.2","Customer Analysis","Needs, expectations, segmentation, buying patterns, TAM, SAM and SOM, loyalty, repeat business and feedback."],
      ["2.2.3","Competitor Analysis","Direct and indirect competitors; pricing; campaigns; service offerings; USPs; emerging competitors and market share."],
      ["2.2.4","Collaborator Analysis","Partners and intermediaries that support value creation and delivery."],
      ["2.2.5","Climate / Context Analysis","Wider political, economic, social, technological, environmental and legal conditions."],
      ["2.3","PESTEL Analysis","Political, Economic, Social, Technological, Environmental and Legal factors."],
      ["2.4","SWOT Analysis","Internal Strengths and Weaknesses; external Opportunities and Threats; strategic implications."],
      ["2.5","BCG Matrix","Portfolio analysis using market growth and relative market share; Stars, Cash Cows, Question Marks and Dogs."],
      ["2.6","Porter’s Five Forces Analysis","Competitive rivalry; threat of new entrants and substitutes; bargaining power of buyers and suppliers."],
      ["2.7","Hospitality Case Applications","Apply frameworks to eco-resorts, business hotels, heritage hotels and cloud kitchens, as reflected in the unit material."]
    ],
    outcomes: [
      "Explain the internal and external marketing environment.",
      "Apply the 5 Cs, PESTEL and SWOT frameworks to a hospitality business.",
      "Interpret the BCG Matrix for portfolio and resource decisions.",
      "Use Porter’s Five Forces to assess industry competition.",
      "Identify opportunities and threats from hospitality-market case situations."
    ],
    quiz: [
      {q:"Which of the 5 Cs refers to external partners who help deliver value?", options:["Customer","Collaborator","Context","Competitor"], answer:1, why:"Collaborators are partners and intermediaries that contribute to creating or delivering value."},
      {q:"Tax policy and employment law are primarily examined under which PESTEL dimensions?", options:["Political and Legal","Social and Technological","Economic and Environmental","Technological and Social"], answer:0, why:"Government policy is political; employment law belongs to the legal dimension."},
      {q:"SWOT analysis considers:", options:["Sales and marketing only","Products and services only","Internal strengths/weaknesses and external opportunities/threats","Costs and revenue only"], answer:2, why:"SWOT separates internal factors from external conditions."},
      {q:"The BCG Matrix commonly evaluates business units using:", options:["Price and promotion","Market growth and relative market share","Staff numbers and service hours","Customer age and income"], answer:1, why:"The matrix uses market growth and relative market share to classify portfolio offerings."},
      {q:"Porter’s Five Forces helps assess:", options:["Industry competitive pressure","Employee attendance","Website design alone","Customer satisfaction alone"], answer:0, why:"The framework evaluates rivalry, entrants, substitutes and buyer/supplier power."}
    ]
  },
  {
    id: "unit-3", number: "Unit 3", title: "Scanning the Market Environment",
    summary: "Research methods, research planning, data interpretation and competitive intelligence.",
    sourceNote: "Detailed section headings are based on the uploaded Unit 3 document.",
    topics: [
      ["3.1","Introduction to Market Research","Meaning, value and use of systematic evidence for marketing decisions."],
      ["3.1.1","Purpose of Market Research","Market size and growth; competitor analysis; customer characteristics; product-launch risk; sales trends; demand forecasting; testing designs and promotions."],
      ["3.2","The Market Research Process","Define the problem and objectives; develop a plan; select sources and methods; collect data; analyse and interpret; report findings and make decisions."],
      ["3.3","Methods of Market Research","Primary versus secondary research; qualitative versus quantitative research; choosing a method based on objectives and resources."],
      ["3.3.1","Primary Market Research","First-hand information for a current research problem; strengths, relevance, cost and time requirements."],
      ["3.3.2","Methods of Primary Research","Surveys and questionnaires; interviews; focus groups; observation; ethnographic research; experiments; online research."],
      ["3.3.3","Secondary Market Research","Existing information: internal records, government statistics, industry reports, trade journals, academic studies, company reports, websites and databases."],
      ["3.4","Qualitative Research","Non-numerical information about opinions, attitudes, motivations and behaviour."],
      ["3.5","Quantitative Research","Numerical data, measurement, structured questionnaires, percentages, averages, tables, graphs and statistical analysis."],
      ["3.6","Other Ways of Classifying Research","Additional classifications as described in the unit document, including research by purpose."],
      ["3.7","Competitive Intelligence","Meaning, concept, importance and types of competitive intelligence."],
      ["3.8","Research Quality and Reporting","Question wording, sample suitability, information quality, interpretation and presentation of findings for decisions."]
    ],
    outcomes: [
      "Explain why market research is used in marketing decisions.",
      "Describe the stages of the market research process.",
      "Distinguish primary from secondary research and qualitative from quantitative research.",
      "Select appropriate methods for a given research problem.",
      "Explain the purpose and importance of competitive intelligence."
    ],
    quiz: [
      {q:"Interviews exploring why guests prefer one hotel are usually:", options:["Quantitative research","Qualitative research","Financial auditing","Experimental costing"], answer:1, why:"Interviews can explore opinions, motivations and reasons in depth."},
      {q:"A survey of 500 guests using rating scales primarily generates:", options:["Quantitative data","Unstructured narratives only","No measurable data","Only secondary data"], answer:0, why:"Rating scales produce numerical responses that can be summarised and analysed."},
      {q:"Which is an example of secondary research?", options:["Conducting a new guest interview","Running a new focus group","Analysing an existing tourism report","Observing a new sample"], answer:2, why:"A published tourism report already exists and was collected for another purpose."},
      {q:"Competitive intelligence should help a business:", options:["Collect and analyse relevant competitor information","Copy competitors without analysis","Avoid customer research","Replace decisions with guesswork"], answer:0, why:"Competitive intelligence supports informed decisions through systematic competitor and market information."},
      {q:"To measure satisfaction and understand the reasons for low scores, a researcher can:", options:["Ignore low scores","Use only financial records","Combine quantitative measures with qualitative follow-up","Use only competitor advertisements"], answer:2, why:"Combining scores with interviews or open-ended feedback provides both measurement and explanation."}
    ]
  },
  {
    id: "unit-4", number: "Unit 4", title: "Consumer Product Acquisition Process",
    summary: "Consumer decision-making and organisational purchasing behaviour.",
    sourceNote: "Detailed section headings are based on the uploaded Unit 4 document.",
    topics: [
      ["4.1","Consumer Buying Behaviour","How individuals and households recognise needs, search, evaluate, purchase and assess satisfaction."],
      ["4.2","Types of Consumer Markets","Individual consumer market; household consumer market; consumer goods market; consumer services market; durable and non-durable goods."],
      ["4.3","Model of Consumer Behaviour","Environmental stimuli; buyer’s black box; buyer characteristics and decision process; buyer responses."],
      ["4.3.1","Environmental Stimuli","Marketing stimuli (Product, Price, Place, Promotion) and wider economic, technological, social and cultural stimuli."],
      ["4.3.2","The Buyer’s Black Box","Buyer characteristics and internal decision-making processes."],
      ["4.3.3","Buyer Responses","Product, brand and dealer choice; purchase timing and quantity; decision to purchase or not."],
      ["4.4","Characteristics Affecting Consumer Behaviour","Cultural, social, personal and psychological factors."],
      ["4.4.1","Cultural Factors","Culture, subculture and social class."],
      ["4.4.2","Social Factors","Reference groups, family, roles and status."],
      ["4.4.3","Personal Factors","Age and life-cycle stage, occupation, economic situation, lifestyle, personality and self-concept."],
      ["4.4.4","Psychological Factors","Motivation, perception, learning, beliefs and attitudes."],
      ["4.5","Types of Buying Decision Behaviour","Complex; dissonance-reducing; habitual; and variety-seeking buying behaviour."],
      ["4.6","The Buyer Decision Process","Need recognition; information search; evaluation of alternatives; purchase decision; post-purchase behaviour."],
      ["4.7","Buying Roles in Consumer Markets","Participants and roles in consumer purchase decisions."],
      ["4.8","Organisational Buying Behaviour","Meaning and characteristics of organisational purchasing."],
      ["4.9","Types of Customers in Organisational Markets","Producer, reseller, government and institutional markets."],
      ["4.10","Organisational Buying Process","Problem recognition; general need description; product specification; supplier search; proposal solicitation; supplier selection; order routine; performance review."],
      ["4.11","Major Types of Buying Situations","Straight rebuy; modified rebuy; new-task buying; systems or solutions selling."],
      ["4.12","Organisational Buying Roles","Users, influencers, buyers, deciders, gatekeepers and initiators."],
      ["4.13","Individual vs. Organisational Purchases","Differences in purpose, participants, formality, specifications, supplier selection and decision process."]
    ],
    outcomes: [
      "Describe consumer buying behaviour and the consumer behaviour model.",
      "Explain cultural, social, personal and psychological influences on buying.",
      "Outline the consumer buyer decision process and buying behaviour types.",
      "Identify buying roles in consumer and organisational markets.",
      "Compare individual and organisational purchasing processes."
    ],
    quiz: [
      {q:"A person booking a hotel room for a family holiday is an example of:", options:["Individual consumer purchase","Industrial production","Supplier negotiation only","Distribution audit"], answer:0, why:"The room is purchased for personal or household consumption."},
      {q:"In a buying decision, the person who actually uses the service is the:", options:["Gatekeeper","User","Supplier","Marketer"], answer:1, why:"The user is the person who uses the purchased product or service."},
      {q:"Organisational buying often involves:", options:["Formal procedures and multiple stakeholders","No evaluation of alternatives","No budget considerations","Only impulse decisions"], answer:0, why:"Business purchases commonly involve specifications, budgets and several decision participants."},
      {q:"The person who controls access to information or suppliers is commonly called the:", options:["User","Initiator","Gatekeeper","Consumer"], answer:2, why:"Gatekeepers control the flow of information or access to relevant decision-makers."},
      {q:"A hotel purchasing manager compares quotations and service agreements from laundry vendors. This is:", options:["Organisational purchasing","Impulse consumer buying","Personal leisure buying","Social media promotion"], answer:0, why:"The purchase is made by an organisation for its operations."}
    ]
  },
  {
    id: "unit-5", number: "Unit 5", title: "Digital Marketing",
    summary: "Digital channels, website planning and performance optimisation.",
    sourceNote: "Unit 5 follows the earlier supplied syllabus; a separate Unit 5 document was not provided.",
    topics: [
      ["5.1","Search Engine Optimization (SEO)","Purpose of SEO and improving organic search visibility."],
      ["5.2","Content Marketing","Planning and creating relevant website and digital content."],
      ["5.3","Social Media Marketing","Using social platforms to build brand presence and customer engagement."],
      ["5.4","PPC Advertising","Paid search and pay-per-click advertising."],
      ["5.5","Email Marketing","Using email campaigns to communicate with customers and prospects."],
      ["5.6","Affiliate Marketing","Partner-based promotion and referral traffic."],
      ["5.7","Influencer Marketing","Collaborating with influencers to reach target audiences."],
      ["5.8","Conversion Rate Optimization (CRO)","Improving the proportion of visitors who complete a desired action."],
      ["5.9","Web Analytics","Measuring and analysing website traffic, user behaviour and performance."],
      ["5.10","Website Content Creation and Design","Content, layout and design considerations for an effective website."],
      ["5.11","Strategy and Planning","Aligning digital channels and activities with marketing objectives."],
      ["5.12","Domain Hosting","Basic domain and hosting considerations for maintaining a website."],
      ["5.13","Security and Compliance","Website security and applicable privacy and compliance considerations."]
    ],
    outcomes: [
      "Explain the main digital marketing channels in the syllabus.",
      "Distinguish organic search visibility from paid advertising.",
      "Describe how content, social media and email support customer engagement.",
      "Explain conversion rate optimisation and web analytics.",
      "Identify website planning, hosting, security and compliance considerations."
    ],
    quiz: [
      {q:"SEO primarily aims to:", options:["Improve visibility in unpaid search results","Increase only offline walk-ins","Replace website content","Eliminate analytics"], answer:0, why:"SEO focuses on improving visibility in organic search results."},
      {q:"PPC advertising generally involves:", options:["Paying for advertising clicks under the campaign model","Publishing only unpaid articles","Avoiding audience targeting","Measuring only occupancy"], answer:0, why:"PPC campaigns commonly charge advertisers when users click an ad."},
      {q:"Which metric measures the proportion of visitors who complete a desired action?", options:["Conversion rate","Domain age","Number of pages only","Email subject length"], answer:0, why:"Conversion rate measures completed desired actions relative to visitors or sessions."},
      {q:"Web analytics can help a hotel understand:", options:["Visitor behaviour and website performance","Housekeeping inventory only","Kitchen production only","Staff uniforms"], answer:0, why:"Analytics provides data about traffic, engagement and website outcomes."},
      {q:"What is an appropriate practice when collecting customer data online?", options:["Ignore consent and security","Publish customer details","Follow applicable privacy, security and compliance requirements","Share passwords"], answer:2, why:"Digital marketing should respect applicable privacy, security and compliance requirements."}
    ]
  }
];

const nav = document.getElementById("course-nav");
const page = document.getElementById("page-content");
const breadcrumbs = document.getElementById("breadcrumbs");
const searchInput = document.getElementById("course-search");
const searchStatus = document.getElementById("search-status");
const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menu-toggle");
const viewed = new Set();
let openUnits = new Set(units.map(u => u.id));
let currentRoute = {type:"home"};

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
}
function topicKey(unitId, index) { return `${unitId}--topic-${index}`; }
function navButton(label, route, cls="") {
  return `<button class="${cls}" type="button" data-route="${escapeHTML(route)}">${escapeHTML(label)}</button>`;
}
function renderNav(filter="") {
  const q = filter.trim().toLowerCase();
  let html = `<button type="button" class="nav-home ${currentRoute.type==="home"?"active":""}" data-route="home">⌂ <span>Course home</span></button>`;
  let visibleCount = 0;
  units.forEach(unit => {
    const matching = unit.topics.map((t,i)=>({t,i})).filter(({t}) =>
      !q || `${unit.title} ${t[0]} ${t[1]} ${t[2]}`.toLowerCase().includes(q));
    const unitMatches = !q || `${unit.title} ${unit.summary}`.toLowerCase().includes(q);
    const visible = !q || unitMatches || matching.length > 0;
    if (!visible) return;
    visibleCount += matching.length || unit.topics.length;
    const expanded = q ? true : openUnits.has(unit.id);
    html += `<div class="unit-group" data-unit-group="${unit.id}">
      <button class="unit-nav-button" type="button" data-toggle-unit="${unit.id}" aria-expanded="${expanded}">
        <span>${escapeHTML(unit.number)}: ${escapeHTML(unit.title)}</span><span class="chevron" aria-hidden="true">›</span>
      </button>
      <div class="topic-list" ${expanded?"":"hidden"}>`;
    unit.topics.forEach((t,i) => {
      const match = !q || unitMatches || `${t[0]} ${t[1]} ${t[2]}`.toLowerCase().includes(q);
      if (!match) return;
      const key = topicKey(unit.id,i);
      const active = currentRoute.type==="topic" && currentRoute.unitId===unit.id && currentRoute.index===i;
      html += `<button class="topic-link ${active?"active":""}" type="button" data-route="${key}">${escapeHTML(t[0])} ${escapeHTML(t[1])}</button>`;
    });
    html += `</div></div>`;
  });
  nav.innerHTML = html;
  searchStatus.textContent = q ? `${visibleCount} matching topic${visibleCount===1?"":"s"}` : "";
}
function unitFor(id) { return units.find(u=>u.id===id); }
function markViewed(key) {
  viewed.add(key);
  const total = units.reduce((sum,u)=>sum+u.topics.length,0);
  const pct = Math.round(viewed.size/total*100);
  document.getElementById("progress-fill").style.width = `${pct}%`;
  const bar = document.getElementById("progress-bar");
  bar.setAttribute("aria-valuenow", String(pct));
  document.getElementById("progress-text").textContent = `${viewed.size} of ${total} sections viewed`;
}
function renderHome() {
  currentRoute={type:"home"};
  breadcrumbs.textContent="Course home";
  const cards=units.map(u=>`<article class="unit-card">
    <span class="unit-number">${escapeHTML(u.number)}</span>
    <h3>${escapeHTML(u.title)}</h3><p>${escapeHTML(u.summary)}</p>
    <p><strong>${u.topics.length}</strong> learning sections</p>
    <button class="button secondary" type="button" data-route="${u.id}">Explore unit →</button>
  </article>`).join("");
  page.innerHTML=`
    <section class="hero">
      <span class="hero-kicker">Course learning portal</span>
      <h2>Understand customers. Create value. Make better marketing decisions.</h2>
      <p>A structured learning space for <strong>BHA509 – Fundamentals of Marketing Skills</strong>, with five units, topic-level navigation, learning outcomes and self-check quizzes. Examples and applications are framed around hospitality and service businesses where appropriate.</p>
      <div class="hero-actions">
        <button class="button" type="button" data-route="unit-1">Start Unit 1 →</button>
        <button class="button secondary" type="button" data-route="all-quizzes">Take a unit quiz</button>
      </div>
    </section>
    <div class="stats-grid">
      <div class="stat-card"><strong>5</strong><span>Units in the syllabus</span></div>
      <div class="stat-card"><strong>30</strong><span>Class hours</span></div>
      <div class="stat-card"><strong>25</strong><span>Self-check MCQs</span></div>
    </div>
    <h2 class="section-heading">Explore the course</h2>
    <div class="card-grid">${cards}</div>
    <div class="content-card">
      <h3>Course objectives</h3>
      <ul class="learning-list">
        <li>Explain marketing fundamentals and distinguish marketing from sales.</li>
        <li>Analyse the marketing environment using the 5 Cs, PESTEL, SWOT, BCG Matrix and Porter’s Five Forces.</li>
        <li>Understand market research methods and competitive intelligence.</li>
        <li>Explain consumer and organisational buying behaviour.</li>
        <li>Describe digital marketing channels, website planning and performance measurement.</li>
      </ul>
    </div>
    <div class="callout"><strong>Content note:</strong> Units 1–4 are organised from the uploaded unit documents. Unit 5 follows the supplied course syllabus because a separate Unit 5 document was not provided.</div>`;
  renderNav(searchInput.value);
}
function renderUnit(unitId) {
  const unit=unitFor(unitId);
  if(!unit) return renderHome();
  currentRoute={type:"unit",unitId};
  breadcrumbs.textContent=`Course home / ${unit.number}: ${unit.title}`;
  const topics=unit.topics.map((t,i)=>`<button type="button" class="topic-tile" data-route="${topicKey(unit.id,i)}">
    <strong>${escapeHTML(t[0])} · ${escapeHTML(t[1])}</strong><span>${escapeHTML(t[2])}</span></button>`).join("");
  page.innerHTML=`
    <div class="page-title-row"><div><span class="unit-number">${escapeHTML(unit.number)}</span><h2>${escapeHTML(unit.title)}</h2><p>${escapeHTML(unit.summary)}</p></div><span class="pill">${unit.topics.length} sections</span></div>
    <div class="content-card"><h3>Learning outcomes</h3><ul class="learning-list">${unit.outcomes.map(x=>`<li>${escapeHTML(x)}</li>`).join("")}</ul></div>
    <h3 class="section-heading">Unit sub-sections</h3>
    <div class="topic-grid">${topics}</div>
    <div class="callout">${escapeHTML(unit.sourceNote)}</div>
    <div class="hero-actions"><button class="button" type="button" data-route="${topicKey(unit.id,0)}">Begin this unit →</button><button class="button secondary" type="button" data-route="quiz-${unit.id}">Practice quiz</button></div>`;
  renderNav(searchInput.value);
}
function renderTopic(unitId,index) {
  const unit=unitFor(unitId), topic=unit?.topics[index];
  if(!unit || !topic) return renderHome();
  currentRoute={type:"topic",unitId,index};
  const key=topicKey(unitId,index); markViewed(key);
  breadcrumbs.textContent=`Course home / ${unit.number}: ${unit.title} / ${topic[1]}`;
  const prev=index>0?`<button class="button secondary" type="button" data-route="${topicKey(unitId,index-1)}">← Previous topic</button>`:`<button class="button secondary" type="button" data-route="${unitId}">← Unit overview</button>`;
  const next=index<unit.topics.length-1?`<button class="button" type="button" data-route="${topicKey(unitId,index+1)}">Next topic →</button>`:`<button class="button" type="button" data-route="quiz-${unitId}">Take unit quiz →</button>`;
  page.innerHTML=`
    <div class="page-title-row"><div><span class="unit-number">${escapeHTML(unit.number)} · ${escapeHTML(topic[0])}</span><h2>${escapeHTML(topic[1])}</h2><p>${escapeHTML(unit.title)}</p></div><span class="pill">Topic notes</span></div>
    <article class="content-card topic-body">
      <h3>Key coverage</h3><p>${escapeHTML(topic[2])}</p>
      <h3>Study prompts</h3>
      <ul class="learning-list">
        <li>Define the key terms in this topic in your own words.</li>
        <li>Identify the main concepts, stages or framework described in the prescribed unit material.</li>
        <li>Apply the topic to a hotel, restaurant, travel business or another relevant service organisation.</li>
        <li>Prepare one example and one question for classroom discussion.</li>
      </ul>
      <div class="callout"><strong>Study guidance:</strong> This page is a topic guide, not a replacement for the full unit notes. Use the uploaded course document for detailed explanations, diagrams, caselets and references.</div>
    </article>
    <div class="hero-actions">${prev}${next}</div>`;
  renderNav(searchInput.value);
}
function renderQuiz(unitId) {
  const unit=unitFor(unitId);
  if(!unit) {
    currentRoute={type:"all-quizzes"}; breadcrumbs.textContent="Course home / Unit quizzes";
    page.innerHTML=`<div class="page-title-row"><div><h2>Unit self-check quizzes</h2><p>Select a unit to test your understanding.</p></div></div>
    <div class="card-grid">${units.map(u=>`<article class="unit-card"><span class="unit-number">${escapeHTML(u.number)}</span><h3>${escapeHTML(u.title)}</h3><p>5 multiple-choice questions</p><button class="button secondary" data-route="quiz-${u.id}" type="button">Start quiz →</button></article>`).join("")}</div>`;
    renderNav(searchInput.value); return;
  }
  currentRoute={type:"quiz",unitId};
  breadcrumbs.textContent=`Course home / ${unit.number} / Quiz`;
  const questions=unit.quiz.map((q,i)=>`<fieldset class="quiz-question">
    <legend>${i+1}. ${escapeHTML(q.q)}</legend><div class="quiz-options">
    ${q.options.map((o,j)=>`<label class="quiz-option"><input type="radio" name="q${i}" value="${j}"><span>${escapeHTML(o)}</span></label>`).join("")}
    </div><div class="explanation" id="explain-${i}" hidden></div></fieldset>`).join("");
  page.innerHTML=`<div class="page-title-row"><div><span class="unit-number">${escapeHTML(unit.number)}</span><h2>${escapeHTML(unit.title)} · Quiz</h2><p>Choose one answer for each question, then submit to see your score and explanations.</p></div><span class="pill">${unit.quiz.length} questions</span></div>
  <form id="quiz-form" class="quiz-card"><div class="content-card"><h3>Self-check</h3><p>These questions are for practice and revision; they are not an official university examination paper.</p></div>${questions}
  <button class="button" type="submit">Submit answers</button><button class="button secondary" type="button" id="reset-quiz">Try again</button><div id="quiz-result" aria-live="polite"></div></form>`;
  document.getElementById("quiz-form").addEventListener("submit", e=>{
    e.preventDefault(); let score=0, unanswered=0;
    unit.quiz.forEach((q,i)=>{
      const selected=document.querySelector(`input[name="q${i}"]:checked`);
      const box=document.getElementById(`explain-${i}`);
      box.hidden=false;
      if(!selected) { unanswered++; box.textContent=`No answer selected. Correct answer: ${q.options[q.answer]}. ${q.why}`; box.className="quiz-feedback error"; }
      else if(Number(selected.value)===q.answer) { score++; box.textContent=`Correct. ${q.why}`; box.className="quiz-feedback"; }
      else { box.textContent=`Not quite. Correct answer: ${q.options[q.answer]}. ${q.why}`; box.className="quiz-feedback error"; }
    });
    const result=document.getElementById("quiz-result");
    result.className="quiz-feedback";
    result.textContent=`Your score: ${score}/${unit.quiz.length}${unanswered?` · ${unanswered} unanswered`:""} (${Math.round(score/unit.quiz.length*100)}%).`;
    result.scrollIntoView({behavior:"smooth",block:"nearest"});
  });
  document.getElementById("reset-quiz").addEventListener("click",()=>renderQuiz(unitId));
  renderNav(searchInput.value);
}
function routeTo(route) {
  if(route==="home") return renderHome();
  if(route==="all-quizzes") return renderQuiz(null);
  if(route.startsWith("quiz-")) return renderQuiz(route.slice(5));
  if(route.startsWith("unit-")) return renderUnit(route);
  const match=route.match(/^(unit-[1-5])--topic-(\d+)$/);
  if(match) return renderTopic(match[1],Number(match[2]));
  renderHome();
}
nav.addEventListener("click",e=>{
  const routeButton=e.target.closest("[data-route]");
  if(routeButton) { routeTo(routeButton.dataset.route); if(window.innerWidth<=760){sidebar.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");} return; }
  const toggle=e.target.closest("[data-toggle-unit]");
  if(toggle) {
    const id=toggle.dataset.toggleUnit;
    if(openUnits.has(id)) openUnits.delete(id); else openUnits.add(id);
    renderNav(searchInput.value);
  }
});
page.addEventListener("click",e=>{
  const button=e.target.closest("[data-route]");
  if(button) routeTo(button.dataset.route);
});
searchInput.addEventListener("input",()=>renderNav(searchInput.value));
menuToggle.addEventListener("click",()=>{
  const open=sidebar.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded",String(open));
});
window.addEventListener("hashchange",()=>{
  const route=decodeURIComponent(location.hash.slice(1));
  if(route) routeTo(route);
});
/* Support direct links and browser back/forward. */
const originalRouteTo=routeTo;
routeTo=function(route){ originalRouteTo(route); if(location.hash.slice(1)!==route) history.replaceState(null,"",`#${encodeURIComponent(route)}`); };
if(location.hash) {
  const initial=decodeURIComponent(location.hash.slice(1));
  routeTo(initial);
} else renderHome();
