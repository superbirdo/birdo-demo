// --- General Troubleshooting Steps (shared) ---

const generalTroubleshootingSteps = [
  { html: `<ol>
    <li>Verify that you <a href="https://help.shopify.com/en/manual/sell-in-person/hardware/card-readers/tap-chip/overview" target="_blank">meet the requirements</a> to use the card reader.</li>
    <li>Verify that you have an internet connection. Shopify POS needs to connect to the internet through Wi-Fi or your device's cellular data to process payments. If you can't connect to the internet, then you need to use a different payment type during the time you're offline.</li>
    <li>Verify that the card reader is listed as a connected device in the POS app by tapping the connectivity icon in the navigation. If the card reader isn't connected, then <a href="https://help.shopify.com/en/manual/sell-in-person/hardware/card-readers/tap-chip/set-up#pair" target="_blank">pair the card reader</a> with your device.</li>
    <li>Make sure <a href="https://apps.apple.com/us/app/shopify-pos/id796883893" target="_blank"><b>the Shopify POS app is up to date</b></a>.</li>
    <li>Make sure that your device is up to date:
      <ul>
        <li><b>iOS:</b> Go to <b>Settings &gt; General &gt; Software Update</b>. If there's an update available, <b>tap Update now</b>.</li>
        <li><b>Android:</b> Go to <b>Settings &gt; Software update</b>. If there's an update available, follow the on-screen instructions to install it.</li>
      </ul>
    </li>
    <li><a href="https://help.shopify.com/en/manual/sell-in-person/shopify-pos/setting-up-your-network-for-shopify-pos#firewall-settings" target="_blank">Check your firewall settings</a>.</li>
    <li>If the reader requires a software update, and the reader doesn't have at least 50% of its battery charged, then the reader won't connect to Shopify POS. Connect the reader's charger and allow it to charge to at least 50% of its battery before reconnecting the reader to Shopify POS.</li>
    <li>Verify that your device has <a href="https://help.shopify.com/en/manual/sell-in-person/hardware/card-readers/tap-chip/security-features" target="_blank">location services</a> turned on and that the Shopify POS app has the necessary permissions to access your device's location.</li>
    <li>Verify that Bluetooth on your Shopify POS device is turned on.</li>
    <li>Verify that the POS app has permission to connect to Bluetooth in your device settings.</li>
    <li>Perform a pinhole reset of your reader. The pinhole is located next to the charging port on your reader. Wait for the card reader's status lights to blink 4 times to indicate that the reader is connected.</li>
  </ol>` }
];

// --- Tap & Chip Troubleshooter ---

const tapChipIssues = [
  { label: 'Pairing issues', issue: 'pairing' },
  { label: 'Connection issues', issue: 'connection' },
  { label: 'Over-the-air (OTA) update issues', issue: 'ota' },
  { label: 'Payment acceptance issues', issue: 'payment' },
  { label: 'Chip card issues', issue: 'chip' },
  { label: 'Tamper/two red lights', issue: 'tamper' }
];

const tapChipIssueSpecific = {
  pairing: {
    step: 'Pairing issues',
    instructions: [
      { html: '<b>Review the following permissions in your device\'s settings for your Shopify POS app:</b><ul><li><b>iOS and Android:</b> <a href="https://help.shopify.com/en/manual/sell-in-person/hardware/card-readers/tap-chip/security-features#location-permissions" target="_blank">Location</a> is set to <b>When using this app</b></li><li><b>iOS and Android:</b> <b>Camera</b> is <b>On</b> or <b>Allowed</b></li><li><b>iOS:</b> <b>Local Network</b> is <b>On</b></li><li><b>iOS:</b> <b>Bluetooth</b> is <b>On</b></li><li><b>iOS:</b> <a href="https://help.shopify.com/en/manual/sell-in-person/hardware/card-readers/tap-chip/overview#ios-15-permission-requirements" target="_blank">Allow Cross-Website Tracking</a> is <b>On</b></li></ul>' },
      { html: 'If you use a micro-USB connection with an Android device, unplug the reader and re-plug it in.' },
      { html: 'If you use a USB-C cable, try <a href="https://help.shopify.com/en/manual/sell-in-person/hardware/card-readers/tap-chip/set-up" target="_blank">connecting the reader using Bluetooth</a>. If you have an Android tablet and you connect the reader using Bluetooth, try <a href="https://help.shopify.com/en/manual/sell-in-person/hardware/card-readers/tap-chip/set-up" target="_blank">connecting the reader using a USB-C cable</a>.' },
      { html: 'Verify that your Tap & Chip card reader is charged above 50% battery. If it\'s not, charge it to above 50% before trying to pair it again.' },
      { html: 'Verify whether the Tap & Chip card reader is connected to a different device. If it is, unpair it from that device before trying to pair it with a new device. The Tap & Chip card reader can only pair to one device at a time.' },
      { html: '<a href="https://help.shopify.com/en/manual/sell-in-person/shopify-pos/troubleshooting#force-close-the-shopify-pos-app" target="_blank">Force close the POS app</a> and re-open it.' },
      { html: 'Make sure that Shopify Payments isn\'t in <a href="https://help.shopify.com/en/manual/payments/shopify-payments/testing-shopify-payments#test-mode" target="_blank">test mode</a> and that there are no notes that state that charges are deactivated.' }
    ]
  },
  connection: {
    step: 'Connection issues',
    instructions: [
      { html: '<b>Review the following permissions in your device\'s settings for your Shopify POS app:</b><ul><li><b>iOS and Android:</b> <a href="https://help.shopify.com/en/manual/sell-in-person/hardware/card-readers/tap-chip/security-features#location-permissions" target="_blank">Location</a> is set to <b>When using this app</b></li><li><b>iOS and Android:</b> <b>Camera</b> is <b>On</b> or <b>Allowed</b></li><li><b>iOS:</b> <b>Local Network</b> is <b>On</b></li><li><b>iOS:</b> <b>Bluetooth</b> is <b>On</b></li><li><b>iOS:</b> <a href="https://help.shopify.com/en/manual/sell-in-person/hardware/card-readers/tap-chip/overview#ios-15-permission-requirements" target="_blank">Allow Cross-Website Tracking</a> is <b>On</b></li></ul>' },
      { html: 'From the Shopify POS app, tap the connectivity symbol in the navigation.' },
      { html: 'Confirm whether the card reader is listed on the device information page. If it\'s listed as a device, tap <b>Forget card reader</b>.' },
      { html: 'From the device\'s Bluetooth settings, confirm whether the card reader is listed. If it\'s listed as a device, tap to forget it.' },
      { html: 'Deactivate Bluetooth on your device.' },
      { html: 'Turn the device off completely for at least 3 minutes.' },
      { html: 'Perform a pinhole reset of your reader. The pinhole is located next to the charging port on your reader.' },
      { html: 'Turn the device back on and re-activate Bluetooth in the device settings, but make sure to not re-pair the reader.' },
      { html: 'Open the Shopify POS app, and then complete the <a href="https://help.shopify.com/en/manual/sell-in-person/hardware/card-readers/tap-chip/set-up#pair" target="_blank">card reader pairing steps</a>.' }
    ]
  },
  ota: {
    step: 'Over-the-air (OTA) update issues',
    instructions: [
      { html: 'Make sure the reader is plugged into a power source and its battery is charged to at least 50% of its capacity.' },
      { html: 'Make sure you use the latest version of Shopify POS and that your device is connected to internet.' },
      { html: '<a href="https://help.shopify.com/en/manual/sell-in-person/shopify-pos/troubleshooting#force-close-the-shopify-pos-app" target="_blank">Force close the POS app</a> and re-open it.' },
      { html: 'From Shopify POS, <a href="https://help.shopify.com/en/manual/sell-in-person/hardware/card-readers/tap-chip/set-up#unpair" target="_blank">unpair</a> the card reader, and then <a href="https://help.shopify.com/en/manual/sell-in-person/hardware/card-readers/tap-chip/set-up#pair" target="_blank">pair</a> the card reader to Shopify POS again.' },
      { html: 'Restart the card reader update.' }
    ]
  },
  payment: {
    step: 'Payment acceptance issues',
    instructions: [
      { html: 'Make sure that you <a href="https://help.shopify.com/en/manual/sell-in-person/hardware/card-readers/tap-chip/supported-payment-types-and-availability" target="_blank">insert the card correctly</a>.' },
      { html: 'Make sure that the device has <a href="https://help.shopify.com/en/manual/sell-in-person/hardware/card-readers/tap-chip/security-features" target="_blank">location services</a> turned on and that the Shopify POS app has the necessary permissions to access the device\'s location.' },
      { html: '<a href="https://help.shopify.com/en/manual/sell-in-person/shopify-pos/troubleshooting#force-close-the-shopify-pos-app" target="_blank">Force close the POS app</a> and then turn off the device. Turn the device back on, open Shopify POS, and make sure that the card reader has reconnected. When the card reader\'s status light indicates that the reader is connected, try another payment.' },
      { html: 'Verify that Shopify Payments <a href="https://help.shopify.com/en/manual/payments/shopify-payments/testing-shopify-payments#test-mode" target="_blank">test mode</a> is turned off and that there are no notes that say your charges are deactivated.' },
      { html: '<div class="info"><b>Note:</b> A single Interac card tap transaction cannot exceed $250 CAD. For transactions above this amount, the customer needs to insert the card and enter their PIN.<br>For further security, Interac cards also have a cumulative Interac tap spend limit. This limit applies to the sum of all Interac contactless transactions made with the card from the last time the customer entered their PIN. When this limit is reached, the customer needs to insert the card and enter their PIN, which authorizes the purchase and resets the Interac tap spend limit.<br>Apple Pay or Google Pay Interac transactions don\'t have a tap spend limit.</div>' }
    ]
  },
  chip: {
    step: 'Chip card issues',
    instructions: [
      { html: 'Fold a piece of paper to be the same thickness as a credit card.' },
      { html: 'Insert the folded piece of paper into the chip slot and move the paper side-to-side and back-and-forth.' },
      { html: 'Remove the paper from the slot, and then use a can of compressed air to clean out the chip slot.' },
      { html: 'If these steps don\'t work, then use isopropyl alcohol and thin cotton swabs to gently clean the contacts in the chip slot.' },
      { html: '<div class="info"><b>Note:</b> Never blow into the chip slot, as the saliva particles can corrode the chip contacts. Don\'t use an adhesive, such as a sticky note or tape, as this can leave residue that can collect debris.</div>' }
    ]
  },
  tamper: {
    step: 'Tamper/two red lights',
    instructions: [
      { html: 'If the first and fourth light flash on your Tap and Chip card reader, then the reader is tampered and can no longer be used. You can request a replacement for tampered Tap and Chip card readers:' },
      { html: '<ul><li>To process a replacement for United States or Canadian orders placed before June 13, 2024 (orders ending in <code>HWS</code>), use this <a href="https://shopify-hardware-store.loopreturns.com/#/" target="_blank">Shopify replacement portal</a>.</li><li>To process a replacement for Canadian orders after June 13, 2024 (orders ending in <code>CA</code>), use this <a href="https://shopify-hardware-ca.loopreturns.com/#/" target="_blank">Shopify replacement portal</a>.</li><li>To process a replacement for United States orders after June 13, 2024 (orders ending in <code>US</code>), use this <a href="https://shopify-hardware.loopreturns.com/#/" target="_blank">Shopify replacement portal</a>.</li></ul>' },
      { html: 'You’ll need your original order number found in the order confirmation email. If you can’t find your order number, then you’ll need to <a href="https://help.shopify.com/en/manual/sell-in-person/hardware/card-readers/tap-chip/troubleshooting#contact-support" target="_blank">contact Shopify Support</a>.' }
    ]
  }
};
const tapChipGeneral = generalTroubleshootingSteps;

// --- WisePad 3 Troubleshooter ---

const wisepad3Issues = [
  { label: 'Pairing issues', issue: 'pairing' },
  { label: 'Connection issues', issue: 'connection' },
  { label: 'System Tampered error', issue: 'tamper' },
  { label: 'Over-the-air update issues', issue: 'ota' },
  { label: 'Payment acceptance issues', issue: 'payment' },
  { label: 'Chip card issues', issue: 'chip' }
];

const wisepad3IssueSpecific = {
  pairing: {
    step: 'Pairing issues',
    instructions: [
      { html: 'Ensure the WisePad 3 is not paired with another device.' },
      { html: 'Restart both the WisePad 3 and your device.' },
      { html: 'Forget the WisePad 3 in Bluetooth settings and re-pair.' }
    ]
  },
  connection: {
    step: 'Connection issues',
    instructions: [
      { html: 'Ensure the WisePad 3 is within range (less than 10 meters) of your device.' },
      { html: 'Restart both the WisePad 3 and your device.' },
      { html: 'Forget the WisePad 3 in Bluetooth settings and re-pair.' }
    ]
  },
  tamper: {
    step: 'System Tampered error',
    instructions: [
      { html: '<div class="info"><b>System Tampered error:</b> If the WisePad 3 displays a "System Tampered" error, it cannot be used. Contact Shopify Support for a replacement.</div>' }
    ]
  },
  ota: {
    step: 'Over-the-air update issues',
    instructions: [
      { html: 'Ensure the WisePad 3 is charged above 50%.' },
      { html: 'Ensure the POS app is up to date.' },
      { html: 'Restart both the WisePad 3 and your device.' },
      { html: 'Try the update again.' }
    ]
  },
  payment: {
    step: 'Payment acceptance issues',
    instructions: [
      { html: 'Ensure the card is inserted/tapped correctly.' },
      { html: 'Ensure the POS app is up to date.' },
      { html: 'Restart both the WisePad 3 and your device.' },
      { html: 'Try another card if possible.' },
      { html: '<div class="info"><b>Note:</b> If the issue persists, contact Shopify Support.</div>' }
    ]
  },
  chip: {
    step: 'Chip card issues',
    instructions: [
      { html: 'Ensure the card is inserted correctly.' },
      { html: 'Try another card if possible.' },
      { html: '<div class="info"><b>Note:</b> If the issue persists, contact Shopify Support.</div>' }
    ]
  }
};
const wisepad3General = generalTroubleshootingSteps;

// --- POS Terminal Troubleshooter ---

const posTerminalIssues = [
  { label: 'Lost connection and no QR code showing', issue: 'lostConnection' },
  { label: 'List of items too long to display', issue: 'itemListLong' },
  { label: 'DNS error: "The network was blocked by a DNS error"', issue: 'dnsError' },
  { label: 'Had to log in again after undocking', issue: 'undockLogin' },
  { label: "POS Terminal isn't charging", issue: 'notCharging' },
  { label: 'Battery is swollen or needs replacement', issue: 'battery' }
];
const posTerminalIssueSpecific = {
  lostConnection: {
    step: 'Lost connection and no QR code showing',
    instructions: [
      { html: 'On the POS Terminal, swipe from right to left to reveal the setting panel, then tap <b>Reset connection</b> to POS to force the QR code to display on the screen.' }
    ]
  },
  itemListLong: {
    step: 'List of items too long to display',
    instructions: [
      { html: 'Use one finger to scroll the list up and down to display all items in the cart.' }
    ]
  },
  dnsError: {
    step: 'DNS error: "The network was blocked by a DNS error"',
    instructions: [
      { html: 'If you encounter the error that "The network was blocked by a DNS error", your DNS provider likely blocks local IP resolution. Change your network settings to use one of the following known DNS providers that don’t block local IP resolution:' },
      { html: '<ul><li><b>Changing DNS on the router:</b> This method avoids changing the DNS settings on each device. Example instructions on changing the DNS settings on your router are <a href="https://www.howtogeek.com/167533/the-ultimate-guide-to-changing-your-dns-server/#on-your-router" target="_blank">available here</a>.</li><li><b>Change DNS on the device:</b> On iPads, this can be done by heading to <b>Settings</b> &gt; <b>Wi-Fi</b> and then tapping on the <b>i</b> button next to the Wi-Fi network you want to configure. Under <b>DNS</b>, tap <b>Configure DNS</b> and choose <b>Manual</b>. Tap <b>Add Server</b> and add each of the following servers one-by-one and then tap <b>Save</b> after you have added the servers:<ul><li>1.1.1.1</li><li>1.0.0.1</li><li>8.8.8.8</li><li>8.8.4.4</li></ul></li></ul>' }
    ]
  },
  undockLogin: {
    step: 'Had to log in again after undocking',
    instructions: [
      { html: '<div class="info">This is by design. When you undock your POS Terminal, it converts to a reader instead of mobile point of sale. You can log in to POS again, but docking logs you out again.</div>' }
    ]
  },
  notCharging: {
    step: "POS Terminal isn't charging",
    instructions: [
      { html: 'You can charge the POS Terminal Reader using the included USB-C cable. To charge the reader, plug the small end of the USB connector into the POS Terminal Reader, and then plug the large end into a phone charger.' },
      { html: 'Make sure your charger meets the minimum specifications of <b>5V/2A - Output 10W</b> or <b>9V/2A - Output 18W</b>. The charger should be able to supply at least 2A of current. A higher current or a charger with a dual label, such as with 5V and 9V, also charges the POS Go.' },
      { html: 'If the minimum charger specifications are met, then the POS Terminal Reader takes 2-3 hours to charge fully using a wall adapter. After the POS Terminal Reader is fully charged, its battery should last for a whole day of selling.' }
    ]
  },
  battery: {
    step: 'Battery is swollen or needs replacement',
    instructions: [
      { html: '<b>How can I tell if my battery has swollen?</b> It\'s important to periodically inspect your battery and replace your device if it\'s swollen. You can inspect your device by looking at the device from the side. If the portion of the case below the card swipe reader isn\'t flat, your device is swollen. If your device is in a dock, remove it from the dock to inspect it. Difficulty swiping or cracking or bulging of your device case are also evidence that you might have a swollen battery.' },
      { html: '<b>What should I do if I have a swollen battery?</b> If you have a swollen battery, stop charging and using the device. Please recycle the device at your nearest electronics recycling facility in accordance with your local regulations. You can also reach out to Shopify Support for a <a href="https://help.shopify.com/en/manual/sell-in-person/hardware/pos-go/troubleshooting#battery-replacements" target="_blank">replacement</a>.' }
    ]
  }
};
const posTerminalGeneral = generalTroubleshootingSteps;

// --- Troubleshooter Logic ---

const models = [
  {
    label: 'Tap & Chip card reader',
    key: 'tapchip',
    issues: tapChipIssues,
    general: tapChipGeneral,
    issueSpecific: tapChipIssueSpecific,
    skipGeneralFor: ['tamper']
  },
  {
    label: 'WisePad 3 card reader',
    key: 'wisepad3',
    issues: wisepad3Issues,
    general: wisepad3General,
    issueSpecific: wisepad3IssueSpecific,
    skipGeneralFor: ['tamper']
  },
  {
    label: 'POS Terminal card reader',
    key: 'posterminal',
    issues: posTerminalIssues,
    general: posTerminalGeneral,
    issueSpecific: posTerminalIssueSpecific,
    skipGeneralFor: []
  }
];

let history = [];
let currentModel = null;
let currentIssue = null;

function renderStep(stepObj) {
  const container = document.getElementById('troubleshooter');
  container.innerHTML = '';

  // Step title
  if (stepObj.step) {
    const stepDiv = document.createElement('div');
    stepDiv.className = 'step';
    stepDiv.innerHTML = `<h2>${stepObj.step}</h2>`;
    container.appendChild(stepDiv);
  }

  // Instructions
  if (stepObj.instructions) {
    const ul = document.createElement('ul');
    for (const instr of stepObj.instructions) {
      const li = document.createElement('li');
      if (typeof instr === 'string') {
        li.textContent = instr;
      } else if (instr.html) {
        li.innerHTML = instr.html;
      }
      ul.appendChild(li);
    }
    container.appendChild(ul);
  }

  // Options (buttons)
  if (stepObj.options) {
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'options';
    for (const opt of stepObj.options) {
      const btn = document.createElement('button');
      btn.textContent = opt.label;
      btn.onclick = () => {
        history.push({ stepObj, selected: opt });
        if (typeof opt.next === 'function') {
          opt.next();
        } else if (typeof opt.next === 'object') {
          renderStep(opt.next);
        }
      };
      optionsDiv.appendChild(btn);
    }
    container.appendChild(optionsDiv);
  }

  // Back button
  if (history.length > 0) {
    const backBtn = document.createElement('button');
    backBtn.textContent = 'Back';
    backBtn.className = 'back-btn';
    backBtn.onclick = () => {
      history.pop();
      if (history.length === 0) {
        renderModelSelector();
      } else {
        const prev = history[history.length - 1];
        renderStep(prev.stepObj);
      }
    };
    container.appendChild(backBtn);
  }
}

// Model selector
function renderModelSelector() {
  history = [];
  currentModel = null;
  currentIssue = null;
  document.getElementById('main-title').textContent = 'Shopify card reader troubleshooter';
  const container = document.getElementById('troubleshooter');
  container.innerHTML = '';
  const stepDiv = document.createElement('div');
  stepDiv.className = 'step';
  stepDiv.innerHTML = `<h2>Which card reader are you using?</h2>`;
  container.appendChild(stepDiv);

  const optionsDiv = document.createElement('div');
  optionsDiv.className = 'options';
  for (const model of models) {
    const btn = document.createElement('button');
    btn.textContent = model.label;
    btn.onclick = () => {
      currentModel = model;
      renderIssueSelector();
    };
    optionsDiv.appendChild(btn);
  }
  container.appendChild(optionsDiv);
}

// Issue selector
function renderIssueSelector() {
  history = [];
  currentIssue = null;
  document.getElementById('main-title').textContent = currentModel.label + ' troubleshooter';
  const container = document.getElementById('troubleshooter');
  container.innerHTML = '';
  const stepDiv = document.createElement('div');
  stepDiv.className = 'step';
  stepDiv.innerHTML = `<h2>What issue are you having?</h2>`;
  container.appendChild(stepDiv);

  const optionsDiv = document.createElement('div');
  optionsDiv.className = 'options';
  for (const issue of currentModel.issues) {
    const btn = document.createElement('button');
    btn.textContent = issue.label;
    btn.onclick = () => {
      currentIssue = issue.issue;
      // If this issue is in skipGeneralFor, go straight to issue-specific
      if (currentModel.skipGeneralFor && currentModel.skipGeneralFor.includes(currentIssue)) {
        renderIssueSpecific();
      } else {
        renderGeneralTroubleshooting();
      }
    };
    optionsDiv.appendChild(btn);
  }
  container.appendChild(optionsDiv);

  // Back button to model selector
  const backBtn = document.createElement('button');
  backBtn.textContent = 'Back';
  backBtn.className = 'back-btn';
  backBtn.onclick = renderModelSelector;
  container.appendChild(backBtn);
}

// General troubleshooting
function renderGeneralTroubleshooting() {
  renderStep({
    step: 'General troubleshooting steps',
    instructions: currentModel.general,
    options: [
      { label: 'This resolved my issue', next: () => renderStep({
        step: 'Troubleshooting complete!',
        instructions: [],
        options: [
          { label: 'Start over', next: renderModelSelector }
        ]
      }) },
      { label: 'This did not resolve the issue', next: renderIssueSpecific }
    ]
  });
}

// Issue-specific troubleshooting
function renderIssueSpecific() {
  const issueObj = currentModel.issueSpecific[currentIssue];
  if (!issueObj) {
    renderStep({
      step: 'Contact Shopify Support',
      instructions: ['We could not find steps for this issue. Please contact Shopify Support.'],
      options: [
        { label: 'Start over', next: renderModelSelector }
      ]
    });
    return;
  }
  // Special case: some issues only have "OK, understood"
  let onlyOk = (
    issueObj.step === 'Had to log in again after undocking' ||
    issueObj.step === 'Battery is swollen or needs replacement' ||
    issueObj.step === 'System Tampered error' ||
    issueObj.step === 'Tamper/two red lights'
  );
  renderStep({
    step: issueObj.step,
    instructions: issueObj.instructions,
    options: onlyOk
      ? [
          { label: 'OK, understood', next: () => renderStep({
            step: 'Troubleshooting complete!',
            instructions: [],
            options: [
              { label: 'Start over', next: renderModelSelector }
            ]
          }) }
        ]
      : [
          { label: 'This resolved my issue', next: () => renderStep({
            step: 'Troubleshooting complete!',
            instructions: [],
            options: [
              { label: 'Start over', next: renderModelSelector }
            ]
          }) },
          { label: 'This did not resolve the issue', next: () => renderStep({
            step: 'Contact Shopify Support',
            instructions: ['Please contact Shopify Support for further assistance.'],
            options: [
              { label: 'Start over', next: renderModelSelector }
            ]
          }) }
        ]
  });
}

// Start the troubleshooter
renderModelSelector();
