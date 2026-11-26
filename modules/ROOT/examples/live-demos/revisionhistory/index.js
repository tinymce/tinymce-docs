const API_URL = 'https://demouserdirectory.tiny.cloud/v1/users';

const fakeDelay = 200;

// Saved revisions of the protocol, newest first. In an application, these come from the server.
// The newest revision matches the content of the textarea.
const revisions = [
  {
    revisionId: '5',
    createdAt: '2026-11-18T16:40:00.000Z',
    author: {
      id: 'anna-petrov',
      name: 'Anna Petrov',
      avatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_anna-petrov_128_00f7f951.jpg'
    },
    metadata: { tags: [ { label: 'APPROVED' } ] },
    content: `
      <h1>Protocol CRX-214-02: once-daily inhaler for adults with moderate asthma</h1>
      <p>Version 1.0, November 18, 2026. Approved by the institutional review board.</p>
      <h2>Plain-language summary</h2>
      <p>This study tests whether a once-a-day inhaler, CRX-214, helps adults with moderate asthma breathe more easily. Half of the participants use CRX-214 and half use a placebo inhaler with no medicine in it. Neither the participants nor the study team know who receives which inhaler until the study ends.</p>
      <h2>Study design</h2>
      <table style="border-collapse: collapse; width: 100%;" border="1">
        <colgroup><col style="width: 31.4%;"><col style="width: 68.6%;"></colgroup>
        <tbody>
          <tr>
            <th>Phase</th>
            <td>2</td>
          </tr>
          <tr>
            <th>Design</th>
            <td>Randomized, double-blind, placebo-controlled</td>
          </tr>
          <tr>
            <th>Sample size</th>
            <td>144 participants, which allows for 15% dropout</td>
          </tr>
          <tr>
            <th>Treatment period</th>
            <td>12 weeks</td>
          </tr>
        </tbody>
      </table>
      <h2>Objectives</h2>
      <p>Primary endpoint: <strong>Change in FEV1 (the volume of air breathed out in the first second) from baseline to Week 12</strong>.</p>
      <p>Secondary endpoints:</p>
      <ul>
        <li>Number of asthma attacks that need oral corticosteroids</li>
        <li>Change in Asthma Control Questionnaire score</li>
        <li>Use of rescue inhaler, in puffs per day</li>
      </ul>
      <h2>Eligibility</h2>
      <p>Participants must be aged 18 to 75, have had a diagnosis of asthma for at least 12 months, and use a daily inhaled corticosteroid. Participants are excluded for any of the following reasons:</p>
      <ul>
        <li>Current smoker, or more than 10 pack-years of smoking history</li>
        <li>Asthma attack that needed a hospital stay in the past 12 months</li>
        <li>Pregnant or breastfeeding</li>
      </ul>
      <h2>Schedule of visits</h2>
      <table style="border-collapse: collapse; width: 100%;" border="1">
        <colgroup><col style="width: 17.4%;"><col style="width: 26.7%;"><col style="width: 55.9%;"></colgroup>
        <thead>
          <tr>
            <th>Visit</th>
            <th>Timing</th>
            <th>Main procedures</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Screening</td>
            <td>Day -14 to Day -1</td>
            <td>Consent, medical history, lung function test</td>
          </tr>
          <tr>
            <td>Baseline</td>
            <td>Day 1</td>
            <td>Randomization, first dose, lung function test</td>
          </tr>
          <tr>
            <td>Week 4</td>
            <td>Day 29 ± 3</td>
            <td>Lung function test, adverse event review</td>
          </tr>
          <tr>
            <td>Week 12</td>
            <td>Day 85 ± 3</td>
            <td>Lung function test, questionnaires, last dose</td>
          </tr>
          <tr>
            <td>Follow-up</td>
            <td>Day 113 ± 7</td>
            <td>Safety phone call</td>
          </tr>
        </tbody>
      </table>
      <h2>Contacts</h2>
      <p>Medical monitor: Dr. Samuel Ortiz, (555) 010-0142. Report serious adverse events within 24 hours.</p>
    `
  },
  {
    revisionId: '4',
    createdAt: '2026-11-04T10:15:00.000Z',
    author: {
      id: 'celeste-henderson',
      name: 'Celeste Henderson',
      avatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_celeste-henderson_128_7e537722.jpg'
    },
    metadata: { tags: [ { label: 'IRB SUBMITTED' } ] },
    content: `
      <h1>Protocol CRX-214-02: once-daily inhaler for adults with moderate asthma</h1>
      <p>Version 1.0, November 4, 2026. Submitted to the institutional review board.</p>
      <h2>Plain-language summary</h2>
      <p>This study tests whether a once-a-day inhaler, CRX-214, helps adults with moderate asthma breathe more easily. Half of the participants use CRX-214 and half use a placebo inhaler with no medicine in it. Neither the participants nor the study team know who receives which inhaler until the study ends.</p>
      <h2>Study design</h2>
      <table style="border-collapse: collapse; width: 100%;" border="1">
        <colgroup><col style="width: 31.4%;"><col style="width: 68.6%;"></colgroup>
        <tbody>
          <tr>
            <th>Phase</th>
            <td>2</td>
          </tr>
          <tr>
            <th>Design</th>
            <td>Randomized, double-blind, placebo-controlled</td>
          </tr>
          <tr>
            <th>Sample size</th>
            <td>144 participants, which allows for 15% dropout</td>
          </tr>
          <tr>
            <th>Treatment period</th>
            <td>12 weeks</td>
          </tr>
        </tbody>
      </table>
      <h2>Objectives</h2>
      <p>Primary endpoint: Change in FEV1 (the volume of air breathed out in the first second) from baseline to Week 12.</p>
      <p>Secondary endpoints:</p>
      <ul>
        <li>Number of asthma attacks that need oral corticosteroids</li>
        <li>Change in Asthma Control Questionnaire score</li>
        <li>Use of rescue inhaler, in puffs per day</li>
      </ul>
      <h2>Eligibility</h2>
      <p>Participants must be aged 18 to 75, have had a diagnosis of asthma for at least 12 months, and use a daily inhaled corticosteroid. Participants are excluded for any of the following reasons:</p>
      <ul>
        <li>Current smoker, or more than 10 pack-years of smoking history</li>
        <li>Asthma attack that needed a hospital stay in the past 12 months</li>
        <li>Pregnant or breastfeeding</li>
      </ul>
      <h2>Schedule of visits</h2>
      <table style="border-collapse: collapse; width: 100%;" border="1">
        <colgroup><col style="width: 17.4%;"><col style="width: 26.7%;"><col style="width: 55.9%;"></colgroup>
        <thead>
          <tr>
            <th>Visit</th>
            <th>Timing</th>
            <th>Main procedures</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Screening</td>
            <td>Day -14 to Day -1</td>
            <td>Consent, medical history, lung function test</td>
          </tr>
          <tr>
            <td>Baseline</td>
            <td>Day 1</td>
            <td>Randomization, first dose, lung function test</td>
          </tr>
          <tr>
            <td>Week 4</td>
            <td>Day 29 ± 3</td>
            <td>Lung function test, adverse event review</td>
          </tr>
          <tr>
            <td>Week 12</td>
            <td>Day 85 ± 3</td>
            <td>Lung function test, questionnaires, last dose</td>
          </tr>
          <tr>
            <td>Follow-up</td>
            <td>Day 113 ± 7</td>
            <td>Safety phone call</td>
          </tr>
        </tbody>
      </table>
      <h2>Contacts</h2>
      <p>Medical monitor: Dr. Samuel Ortiz, (555) 010-0142. Report serious adverse events within 24 hours.</p>
    `
  },
  {
    revisionId: '3',
    createdAt: '2026-10-21T14:05:00.000Z',
    author: {
      id: 'genevieve-simmons',
      name: 'Genevieve Simmons',
      avatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_genevieve-simmons_128_827c7ebe.jpg'
    },
    metadata: { source: 'ai' },
    content: `
      <h1>Protocol CRX-214-02: once-daily inhaler for adults with moderate asthma</h1>
      <p>Version 0.3, October 21, 2026. Draft for internal review.</p>
      <h2>Plain-language summary</h2>
      <p>This study tests whether a once-a-day inhaler, CRX-214, helps adults with moderate asthma breathe more easily. Half of the participants use CRX-214 and half use a placebo inhaler with no medicine in it. Neither the participants nor the study team know who receives which inhaler until the study ends.</p>
      <h2>Study design</h2>
      <table style="border-collapse: collapse; width: 100%;" border="1">
        <colgroup><col style="width: 31.4%;"><col style="width: 68.6%;"></colgroup>
        <tbody>
          <tr>
            <th>Phase</th>
            <td>2</td>
          </tr>
          <tr>
            <th>Design</th>
            <td>Randomized, double-blind, placebo-controlled</td>
          </tr>
          <tr>
            <th>Sample size</th>
            <td>144 participants, which allows for 15% dropout</td>
          </tr>
          <tr>
            <th>Treatment period</th>
            <td>12 weeks</td>
          </tr>
        </tbody>
      </table>
      <h2>Objectives</h2>
      <p>Primary endpoint: Change in FEV1 (the volume of air breathed out in the first second) from baseline to Week 12.</p>
      <p>Secondary endpoints:</p>
      <ul>
        <li>Number of asthma attacks that need oral corticosteroids</li>
        <li>Change in Asthma Control Questionnaire score</li>
        <li>Use of rescue inhaler, in puffs per day</li>
      </ul>
      <h2>Eligibility</h2>
      <p>Participants must be aged 18 to 65, have had a diagnosis of asthma for at least 12 months, and use a daily inhaled corticosteroid. Participants are excluded for any of the following reasons:</p>
      <ul>
        <li>Current smoker, or more than 10 pack-years of smoking history</li>
        <li>Asthma attack that needed a hospital stay in the past 12 months</li>
      </ul>
      <h2>Schedule of visits</h2>
      <table style="border-collapse: collapse; width: 100%;" border="1">
        <colgroup><col style="width: 17.4%;"><col style="width: 26.7%;"><col style="width: 55.9%;"></colgroup>
        <thead>
          <tr>
            <th>Visit</th>
            <th>Timing</th>
            <th>Main procedures</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Screening</td>
            <td>Day -14 to Day -1</td>
            <td>Consent, medical history, lung function test</td>
          </tr>
          <tr>
            <td>Baseline</td>
            <td>Day 1</td>
            <td>Randomization, first dose, lung function test</td>
          </tr>
          <tr>
            <td>Week 4</td>
            <td>Day 29 ± 3</td>
            <td>Lung function test, adverse event review</td>
          </tr>
          <tr>
            <td>Week 12</td>
            <td>Day 85 ± 3</td>
            <td>Lung function test, questionnaires, last dose</td>
          </tr>
        </tbody>
      </table>
      <h2>Contacts</h2>
      <p>Medical monitor: Dr. Samuel Ortiz.</p>
    `
  },
  {
    revisionId: '2',
    createdAt: '2026-10-13T09:30:00.000Z',
    author: {
      id: 'clara-schmidt',
      name: 'Clara Schmidt',
      avatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_clara-schmidt_128_5c828d39.jpg'
    },
    content: `
      <h1>Protocol CRX-214-02: once-daily inhaler for adults with moderate asthma</h1>
      <p>Version 0.2, October 13, 2026. Draft for internal review.</p>
      <h2>Plain-language summary</h2>
      <p>This study will find out whether taking the CRX-214 inhaler once a day makes it easier for adults with moderate asthma to breathe, compared with a placebo inhaler that contains no medicine, and whether the inhaler is safe enough to study further.</p>
      <h2>Study design</h2>
      <table style="border-collapse: collapse; width: 100%;" border="1">
        <colgroup><col style="width: 31.4%;"><col style="width: 68.6%;"></colgroup>
        <tbody>
          <tr>
            <th>Phase</th>
            <td>2</td>
          </tr>
          <tr>
            <th>Design</th>
            <td>Randomized, double-blind, placebo-controlled</td>
          </tr>
          <tr>
            <th>Sample size</th>
            <td>144 participants, which allows for 15% dropout</td>
          </tr>
          <tr>
            <th>Treatment period</th>
            <td>12 weeks</td>
          </tr>
        </tbody>
      </table>
      <h2>Objectives</h2>
      <p>Primary endpoint: Change in FEV1 (the volume of air breathed out in the first second) from baseline to Week 12.</p>
      <p>Secondary endpoints:</p>
      <ul>
        <li>Number of asthma attacks that need oral corticosteroids</li>
        <li>Change in Asthma Control Questionnaire score</li>
        <li>Use of rescue inhaler, in puffs per day</li>
      </ul>
      <h2>Eligibility</h2>
      <p>Participants must be aged 18 to 65, have had a diagnosis of asthma for at least 12 months, and use a daily inhaled corticosteroid. Participants are excluded for any of the following reasons:</p>
      <ul>
        <li>Current smoker, or more than 10 pack-years of smoking history</li>
        <li>Asthma attack that needed a hospital stay in the past 12 months</li>
      </ul>
      <h2>Schedule of visits</h2>
      <table style="border-collapse: collapse; width: 100%;" border="1">
        <colgroup><col style="width: 17.4%;"><col style="width: 26.7%;"><col style="width: 55.9%;"></colgroup>
        <thead>
          <tr>
            <th>Visit</th>
            <th>Timing</th>
            <th>Main procedures</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Screening</td>
            <td>Day -14 to Day -1</td>
            <td>Consent, medical history, lung function test</td>
          </tr>
          <tr>
            <td>Baseline</td>
            <td>Day 1</td>
            <td>Randomization, first dose, lung function test</td>
          </tr>
          <tr>
            <td>Week 4</td>
            <td>Day 29 ± 3</td>
            <td>Lung function test, adverse event review</td>
          </tr>
          <tr>
            <td>Week 12</td>
            <td>Day 85 ± 3</td>
            <td>Lung function test, questionnaires, last dose</td>
          </tr>
        </tbody>
      </table>
      <h2>Contacts</h2>
      <p>Medical monitor: Dr. Samuel Ortiz.</p>
    `
  },
  {
    revisionId: '1',
    createdAt: '2026-10-05T11:00:00.000Z',
    author: {
      id: 'genevieve-simmons',
      name: 'Genevieve Simmons',
      avatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_genevieve-simmons_128_827c7ebe.jpg'
    },
    content: `
      <h1>Protocol CRX-214-02: once-daily inhaler for adults with moderate asthma</h1>
      <p>Version 0.1, October 5, 2026. Draft for internal review.</p>
      <h2>Plain-language summary</h2>
      <p>This study will find out whether taking the CRX-214 inhaler once a day makes it easier for adults with moderate asthma to breathe, compared with a placebo inhaler that contains no medicine, and whether the inhaler is safe enough to study further.</p>
      <h2>Study design</h2>
      <table style="border-collapse: collapse; width: 100%;" border="1">
        <colgroup><col style="width: 31.4%;"><col style="width: 68.6%;"></colgroup>
        <tbody>
          <tr>
            <th>Phase</th>
            <td>2</td>
          </tr>
          <tr>
            <th>Design</th>
            <td>Randomized, double-blind, placebo-controlled</td>
          </tr>
          <tr>
            <th>Sample size</th>
            <td>120 participants</td>
          </tr>
          <tr>
            <th>Treatment period</th>
            <td>12 weeks</td>
          </tr>
        </tbody>
      </table>
      <h2>Objectives</h2>
      <p>Primary endpoint: Change in FEV1 (the volume of air breathed out in the first second) from baseline to Week 12.</p>
      <p>Secondary endpoints:</p>
      <ul>
        <li>Number of asthma attacks that need oral corticosteroids</li>
        <li>Change in Asthma Control Questionnaire score</li>
      </ul>
      <h2>Eligibility</h2>
      <p>Participants must be aged 18 to 65, have had a diagnosis of asthma for at least 12 months, and use a daily inhaled corticosteroid. Participants are excluded for any of the following reasons:</p>
      <ul>
        <li>Current smoker, or more than 10 pack-years of smoking history</li>
        <li>Asthma attack that needed a hospital stay in the past 12 months</li>
      </ul>
      <h2>Schedule of visits</h2>
      <table style="border-collapse: collapse; width: 100%;" border="1">
        <colgroup><col style="width: 17.4%;"><col style="width: 26.7%;"><col style="width: 55.9%;"></colgroup>
        <thead>
          <tr>
            <th>Visit</th>
            <th>Timing</th>
            <th>Main procedures</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Screening</td>
            <td>Day -14 to Day -1</td>
            <td>Consent, medical history, lung function test</td>
          </tr>
          <tr>
            <td>Baseline</td>
            <td>Day 1</td>
            <td>Randomization, first dose, lung function test</td>
          </tr>
          <tr>
            <td>Week 4</td>
            <td>Day 29 ± 3</td>
            <td>Lung function test, adverse event review</td>
          </tr>
          <tr>
            <td>Week 12</td>
            <td>Day 85 ± 3</td>
            <td>Lung function test, questionnaires, last dose</td>
          </tr>
        </tbody>
      </table>
      <h2>Contacts</h2>
      <p>Medical monitor: Dr. Samuel Ortiz.</p>
    `
  }
];

// Return the list of revisions. Only the latest revision includes its content;
// the content of older revisions is loaded on demand by revisionhistory_fetch_revision.
const revisionhistory_fetch = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(revisions.map(({ content, ...revision }, index) =>
      index === 0 ? { ...revision, content } : revision
    ));
  }, fakeDelay);
});

const revisionhistory_fetch_revision = (_editor, revision) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const saved = revisions.find((r) => r.revisionId === revision.revisionId);
    if (saved) {
      resolve(saved);
    } else {
      reject(`Revision ${revision.revisionId} was not found`);
    }
  }, fakeDelay);
});

tinymce.init({
  selector: 'textarea#revisionhistory',
  height: 720,
  plugins: [
    'revisionhistory',
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'revisionhistory | undo redo | blocks | ' +
    'bold italic forecolor backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'link image table | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  revisionhistory_fetch,
  revisionhistory_fetch_revision,
  revisionhistory_display_author: true,
  view_show: 'revision',
  // The signed-in user, shown as the author of the unsaved draft.
  // Replace with the ID of the user in your application.
  user_id: 'genevieve-simmons',
  fetch_users: (userIds) => Promise.all(userIds
    .map((userId) =>
      fetch(`${API_URL}/${userId}`)
        .then((response) => response.json())
        .catch(() => ({ id: userId }))))
});
