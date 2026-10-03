/**
 * YANTRIKA LABS · CUSTOMER ACQUISITION & BUSINESS MONITORING APP
 * "From Idea to Silicon · Engineering Ideas Into Hardware"
 * Motto: "Ancient Ingenuity, Modern Silicon."
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. STATE & STORAGE (Starts with ₹0 Revenue & Real Growth Pipeline)
  // =========================================================================
  const STORAGE_KEY = 'yantrika_labs_store_v2';

  // 6 In-House Flagship Projects (The founder's own work)
  const IN_HOUSE_PROJECTS = [
    {
      id: '01',
      title: 'VIDYUT RAKSHAKA',
      subtitle: 'IoT-Based Intelligent Grid Line Protection System',
      domain: 'IoT & ML',
      tagline: 'Automated Overcurrent & Voltage Fault Detection via TinyML',
      tech: ['ESP32', 'Current Sensing (ACS712)', 'Voltage Sensing (ZMPT101B)', 'Random Forest ML', 'Automated Relay Trip (<5ms)', 'Cloud Telemetry'],
      hardware: 'ESP32 DevKit V1 + ACS712-30A + ZMPT101B + 4-Channel Relay Rig',
      deliverables: 'Working Hardware Rig, Embedded C++ Firmware, Python ML Model, Web Dashboard, Complete Report',
      focus: 'IoT | Smart Grid | Embedded | ML',
      status: 'Hardware Tested & Ready to Demo'
    },
    {
      id: '02',
      title: 'AHB-LIKE BUS ARCHITECTURE',
      subtitle: 'RTL-Based Digital Bus System',
      domain: 'Digital VLSI',
      tagline: 'Pipelined Bus Master/Slave Controller with Zero Wait States',
      tech: ['Verilog RTL', 'Bus Master/Slave Protocol', 'Memory Interface', 'Burst Transfer (INCR4/WRAP8)', 'Icarus Verilog Simulation', 'GTKWave Trace Analysis'],
      hardware: 'Xilinx Vivado 2024.2 / Icarus Verilog / ModelSim Testbench',
      deliverables: 'Complete Synthesizable Verilog RTL, Self-Checking Testbench, Waveform Dump (.vcd), Timing Report',
      focus: 'RTL Design | Digital VLSI | Verification',
      status: '100% Assertion Pass'
    },
    {
      id: '03',
      title: 'RISC PROCESSOR DESIGN',
      subtitle: 'Custom RISC Processor in Verilog',
      domain: 'Computer Arch',
      tagline: '32-Bit RV32I Core with 5-Stage Datapath & Hazard Handling',
      tech: ['Verilog HDL', '5-Stage Pipeline (IF, ID, EX, MEM, WB)', 'Forwarding & Hazard Detection', 'ALU & Register File', 'FPGA Synthesis', 'Basys 3 Target'],
      hardware: 'Digilent Basys 3 FPGA (Artix-7 XC7A35T)',
      deliverables: 'Pipelined Verilog RTL, FPGA Bitstream (.bit), Instruction Test Suite, Resource Utilization Report',
      focus: 'Processor Design | RTL | Computer Architecture',
      status: 'Synthesized @ 50MHz'
    },
    {
      id: '04',
      title: 'PUF-BASED HARDWARE AUTHENTICATION',
      subtitle: 'Physical Unclonable Function for Device Security',
      domain: 'Hardware Security',
      tagline: 'Silicon Fingerprinting via Ring Oscillator Delay Mismatch',
      tech: ['RO-PUF Architecture', 'Challenge-Response Pair (CRP)', 'Inter-Die Hamming Distance (49.88%)', 'FPGA Implementation', 'Security Key Generation', 'Vivado RTL'],
      hardware: 'Digilent Nexys A7 FPGA Board',
      deliverables: 'Verilog PUF IP Core, Entropy Evaluation Report, CRP Generator, Viva Security Defense Deck',
      focus: 'Hardware Security | VLSI | FPGA',
      status: 'Entropy Verified (0.98)'
    },
    {
      id: '05',
      title: 'SMART ATTENDANCE SYSTEM',
      subtitle: 'ESP32-Based IoT Attendance Platform',
      domain: 'Embedded Systems',
      tagline: 'RFID Reader + 16x2 LCD + Cloud Synchronization',
      tech: ['ESP32-WROOM-32', 'MFRC522 RFID (13.56MHz)', '16x2 I2C LCD Display', 'Audio Feedback Buzzer', 'Google Sheets & Firebase Sync', 'Custom 3D Case'],
      hardware: 'Assembled ESP32 Hardware Kit with Enclosure & RFID Tags',
      deliverables: '3 Enclosed Hardware Units, C++ Firmware, Cloud Webhook Script, Live Mobile PWA Dashboard',
      focus: 'Embedded Systems | IoT',
      status: 'Production Hardware'
    },
    {
      id: '06',
      title: 'ENGINEERING APPLICATIONS',
      subtitle: 'Web & Software Applications for Engineering Projects',
      domain: 'Software & AI',
      tagline: 'Live Telemetry Dashboards, PWAs & Data-Driven Platforms',
      tech: ['Next.js / React', 'Chart.js Telemetry', 'WebSocket Live Bridge', 'REST API', 'AI/ML Inference Integration', 'PWA Offline Support'],
      hardware: 'Cloud Node + Local Serial-to-WebSocket Gateway',
      deliverables: 'Responsive Web Dashboard, Live Telemetry WebSocket Server, Documentation & Hosting Guide',
      focus: 'Software | IoT | AI/ML | Engineering Applications',
      status: 'Deployed & Operational'
    }
  ];

  // 11 Core Services from Poster 2
  const CORE_SERVICES = [
    { num: '01', title: 'Project Idea Refinement', icon: '💡', desc: 'Transforming rough problem statements into rigorous, achievable engineering specifications.' },
    { num: '02', title: 'Architecture Design', icon: '⚙️', desc: 'Datapath, state machine (FSM), memory mapping, and hardware-software partitioning.' },
    { num: '03', title: 'RTL / Verilog Development', icon: '💻', desc: 'Clean, synthesizable Verilog and SystemVerilog code adhering to industry standards.' },
    { num: '04', title: 'Testbench & Verification', icon: '✅', desc: 'Self-checking testbenches with corner cases, constrained random tests, and assertions.' },
    { num: '05', title: 'Simulation & Waveform Analysis', icon: '📈', desc: 'Timing analysis and signal debugging using GTKWave, ModelSim, and Vivado Simulator.' },
    { num: '06', title: 'FPGA Implementation', icon: '🔲', desc: 'Synthesis, place-and-route, constraint mapping (XDC/QSF), and bitstream generation.' },
    { num: '07', title: 'Timing & Resource Analysis', icon: '📊', desc: 'Setup/hold slack closure, LUT/FF utilization optimization, and power estimation.' },
    { num: '08', title: 'Technical Documentation', icon: '📄', desc: 'IEEE-standard project reports, architecture block diagrams, and schematic CAD files.' },
    { num: '09', title: 'Presentation Preparation', icon: '📑', desc: 'Professional pitch decks and project review slides for academic and industry panels.' },
    { num: '10', title: 'Viva Preparation', icon: '👥', desc: 'Comprehensive Q&A preparation, oral defense rehearsals, and fundamental concepts review.' },
    { num: '11', title: 'GitHub Project Setup', icon: '🐙', desc: 'Clean version control repositories, professional README documentation, and automated tests.' }
  ];

  // Initial Sample Customer Inquiries / Leads (to show founder how the pipeline works)
  const INITIAL_LEADS = [
    {
      id: 'LEAD-101',
      date: 'Today, 10:15 AM',
      name: 'Ananya Sharma',
      contact: '+91 98452 11029',
      college: 'RV College of Engineering',
      domain: 'Digital VLSI',
      idea: '16-bit Pipelined MAC Unit for DSP filtering with Verilog testbench',
      budget: 22000,
      stage: 'New Inquiry',
      notes: 'Wants delivery in 3 weeks for mid-term review'
    },
    {
      id: 'LEAD-102',
      date: 'Yesterday',
      name: 'Karthik Raja',
      contact: '+91 97890 44321',
      college: 'PES University',
      domain: 'FPGA Implementation',
      idea: 'Custom RISC-V 32I core implementation on Basys 3 FPGA',
      budget: 28500,
      stage: 'Contacted',
      notes: 'Sent WhatsApp pitch, scheduling call today'
    },
    {
      id: 'LEAD-103',
      date: '2 Oct 2026',
      name: 'Deepak Verma',
      contact: '+91 91234 56789',
      college: 'BMS College of Engineering',
      domain: 'IoT & Smart Grid',
      idea: 'IoT Solar MPPT tracker with ESP32 and remote dashboard',
      budget: 26000,
      stage: 'Quote Sent',
      notes: 'Reviewing proposal with team lead'
    }
  ];

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Storage read error, using defaults:', e);
    }
    return {
      revenueEarned: 0, // Starts at ₹0 as requested!
      revenueTarget: 100000,
      leads: INITIAL_LEADS,
      activeMode: 'customer',
      audioEnabled: true
    };
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Storage save error:', e);
    }
  }

  let state = loadState();

  // =========================================================================
  // 2. AUDIO SYNTHESIZER
  // =========================================================================
  const AudioEngine = {
    ctx: null,
    init() {
      if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      }
    },
    playTone(freq, type = 'sine', duration = 0.08, vol = 0.15) {
      if (!state.audioEnabled) return;
      try {
        this.init();
        if (!this.ctx) return;
        if (this.ctx.state === 'suspended') this.ctx.resume();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(vol, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      } catch (e) {}
    },
    click() { this.playTone(1200, 'triangle', 0.04, 0.1); },
    leadCaptured() {
      this.playTone(523.25, 'sine', 0.1, 0.2); // C5
      setTimeout(() => this.playTone(659.25, 'sine', 0.1, 0.2), 90); // E5
      setTimeout(() => this.playTone(783.99, 'sine', 0.15, 0.2), 180); // G5
      setTimeout(() => this.playTone(1046.50, 'sine', 0.25, 0.25), 270); // C6
    },
    paymentEarned() {
      this.playTone(440, 'sine', 0.08, 0.2);
      setTimeout(() => this.playTone(880, 'sine', 0.15, 0.25), 80);
    }
  };

  // =========================================================================
  // 3. BACKGROUND CANVAS & HERO MINI SCOPE
  // =========================================================================
  function initCircuitCanvas() {
    const canvas = document.getElementById('circuitCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height;
    const traces = [];
    for (let i = 0; i < 28; i++) {
      traces.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        length: 70 + Math.random() * 120,
        speed: 0.3 + Math.random() * 0.7,
        progress: Math.random(),
        direction: Math.random() > 0.5 ? 'horizontal' : 'vertical',
        color: Math.random() > 0.6 ? '#00f0ff' : '#f5a623'
      });
    }

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    function render() {
      ctx.clearRect(0, 0, width, height);
      traces.forEach(t => {
        t.progress += t.speed * 0.005;
        if (t.progress > 1) {
          t.progress = 0;
          t.x = Math.random() * width;
          t.y = Math.random() * height;
        }
        ctx.strokeStyle = 'rgba(20, 50, 85, 0.2)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(t.x, t.y);
        const endX = t.direction === 'horizontal' ? t.x + t.length : t.x;
        const endY = t.direction === 'vertical' ? t.y + t.length : t.y;
        ctx.lineTo(endX, endY);
        ctx.stroke();

        const headX = t.x + (endX - t.x) * t.progress;
        const headY = t.y + (endY - t.y) * t.progress;
        ctx.fillStyle = t.color;
        ctx.beginPath();
        ctx.arc(headX, headY, 2, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(render);
    }
    render();
  }

  function initHeroScope() {
    const canvas = document.getElementById('heroScopeCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let phase = 0;

    function renderScope() {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Faint grid
      ctx.strokeStyle = '#0a2215';
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 35) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }
      for (let y = 0; y < h; y += 25) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }

      // Sine Wave (Current / Voltage) in Neon Emerald
      ctx.strokeStyle = '#00f59b';
      ctx.lineWidth = 2;
      ctx.shadowColor = '#00f59b';
      ctx.shadowBlur = 6;
      ctx.beginPath();
      for (let x = 0; x < w; x++) {
        const y = (h / 2) + Math.sin((x * 0.04) + phase) * 32;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Digital Pulse (Trip signal) in Cyan
      ctx.strokeStyle = '#00f0ff';
      ctx.shadowColor = '#00f0ff';
      ctx.shadowBlur = 6;
      ctx.beginPath();
      for (let x = 0; x < w; x++) {
        const cycle = (x + (phase * 15)) % 60;
        const y = cycle < 30 ? 25 : 95;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      phase += 0.05;
      requestAnimationFrame(renderScope);
    }
    renderScope();
  }

  // =========================================================================
  // 4. INTERACTIVE PROJECT CALCULATOR & INSTANT QUOTE GENERATOR
  // =========================================================================
  function updateCalculator() {
    const domainActive = document.querySelector('.domain-radio-item.active');
    const tierActive = document.querySelector('.tier-card.active');

    const baseEng = domainActive ? parseInt(domainActive.getAttribute('data-base')) : 14000;
    const tierMult = tierActive ? parseFloat(tierActive.getAttribute('data-mult')) : 1.0;

    let hwSum = 0;
    const kitFpga = document.getElementById('userKitFpga');
    const kitSensors = document.getElementById('userKitSensors');
    const kitPcb = document.getElementById('userKitPcb');

    if (kitFpga && kitFpga.checked) hwSum += parseInt(kitFpga.value);
    if (kitSensors && kitSensors.checked) hwSum += parseInt(kitSensors.value);
    if (kitPcb && kitPcb.checked) hwSum += parseInt(kitPcb.value);

    const total = Math.round((baseEng * tierMult) + hwSum);

    // Update receipt
    const finalAmtEl = document.getElementById('calcFinalAmount');
    const rbEngEl = document.getElementById('rbEng');
    const rbHwEl = document.getElementById('rbHw');
    const rbTimeEl = document.getElementById('rbTime');

    if (finalAmtEl) finalAmtEl.textContent = total.toLocaleString('en-IN');
    if (rbEngEl) rbEngEl.textContent = '₹' + Math.round(baseEng * tierMult).toLocaleString('en-IN');
    if (rbHwEl) rbHwEl.textContent = '₹' + hwSum.toLocaleString('en-IN');
    if (rbTimeEl) {
      if (tierMult > 1.3) rbTimeEl.textContent = '4 - 5 Weeks (Research Publication Ready)';
      else if (tierMult > 1.1) rbTimeEl.textContent = '10 - 14 Days (Fast-Track Priority)';
      else rbTimeEl.textContent = '3 - 4 Weeks (Standard Capstone)';
    }

    return { total, baseEng, hwSum, domainName: domainActive ? domainActive.querySelector('.dri-name').textContent : 'Custom Project' };
  }

  function setupCalculatorListeners() {
    // Domain radio cards
    const domainCards = document.querySelectorAll('.domain-radio-item');
    domainCards.forEach(card => {
      card.addEventListener('click', () => {
        AudioEngine.click();
        domainCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        const radio = card.querySelector('input');
        if (radio) radio.checked = true;
        updateCalculator();
      });
    });

    // Tier cards
    const tierCards = document.querySelectorAll('.tier-card');
    tierCards.forEach(card => {
      card.addEventListener('click', () => {
        AudioEngine.click();
        tierCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        const radio = card.querySelector('input');
        if (radio) radio.checked = true;
        updateCalculator();
      });
    });

    // Hardware checkboxes
    ['userKitFpga', 'userKitSensors', 'userKitPcb'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('change', () => {
          AudioEngine.click();
          updateCalculator();
        });
      }
    });

    // Lead capture form submit button
    const btnSubmitLead = document.getElementById('btnSubmitLeadForm');
    if (btnSubmitLead) {
      btnSubmitLead.addEventListener('click', () => {
        const name = document.getElementById('custLeadName').value.trim();
        const contact = document.getElementById('custLeadContact').value.trim();
        const college = document.getElementById('custLeadCollege').value.trim() || 'Student / Innovator';
        const calcData = updateCalculator();

        if (!name || !contact) {
          alert('Please enter your name and contact (WhatsApp number / Email) so we can reach you.');
          return;
        }

        AudioEngine.leadCaptured();

        const newLead = {
          id: 'LEAD-' + Math.floor(100 + Math.random() * 900),
          date: 'Just now',
          name: name,
          contact: contact,
          college: college,
          domain: calcData.domainName,
          idea: `Custom project package configured via online calculator. Est. Investment: ₹${calcData.total.toLocaleString('en-IN')}`,
          budget: calcData.total,
          stage: 'New Inquiry',
          notes: 'Customer submitted via instant estimate receipt.'
        };

        state.leads.unshift(newLead);
        saveState();
        renderFounderCRM();

        alert(`🎉 Thank you, ${name}! Your project estimate of ₹${calcData.total.toLocaleString('en-IN')} has been received. Our lead engineer will contact you on ${contact} within 2 hours to discuss specifications and free architecture review!`);

        // Reset inputs
        document.getElementById('custLeadName').value = '';
        document.getElementById('custLeadContact').value = '';
        document.getElementById('custLeadCollege').value = '';
      });
    }
  }

  // =========================================================================
  // 5. PROOF OF WORK & SERVICES RENDERING
  // =========================================================================
  function renderProofOfWork() {
    const container = document.getElementById('customerProjectShowcase');
    if (!container) return;

    container.innerHTML = IN_HOUSE_PROJECTS.map(p => `
      <div class="showcase-card" onclick="openProjectModal('${p.id}')">
        <div>
          <div class="sc-header">
            <span class="sc-id">IN-HOUSE IP #${p.id}</span>
            <span class="sc-domain">${p.domain}</span>
          </div>
          <h3 class="sc-title">${p.title}</h3>
          <p class="sc-sub">${p.subtitle}</p>
          <div class="sc-tech-row">
            ${p.tech.slice(0, 3).map(t => `<span class="tech-tag">${t}</span>`).join('')}
            ${p.tech.length > 3 ? `<span class="tech-tag text-cyan">+${p.tech.length - 3}</span>` : ''}
          </div>
        </div>
        <div>
          <div class="sc-footer">
            <span class="sc-status-pill">● ${p.status}</span>
            <button class="btn btn-xs btn-gold" onclick="event.stopPropagation(); requestSimilarProject('${p.id}')">
              I Want This →
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  function renderCustomerServices() {
    const container = document.getElementById('customerServicesGrid');
    if (!container) return;

    container.innerHTML = CORE_SERVICES.map(s => `
      <div class="service-card">
        <div class="srv-icon">${s.icon}</div>
        <div>
          <h4 class="srv-title">${s.num}. ${s.title}</h4>
          <p class="srv-desc">${s.desc}</p>
        </div>
      </div>
    `).join('');
  }

  window.requestSimilarProject = function (projId) {
    const p = IN_HOUSE_PROJECTS.find(item => item.id === projId);
    if (!p) return;
    AudioEngine.click();
    document.getElementById('projectCalculatorSection').scrollIntoView({ behavior: 'smooth' });

    // Pre-fill notes in lead form or open submit idea modal
    const leadNotes = document.getElementById('leadNotes');
    if (leadNotes) {
      leadNotes.value = `I want to build a project similar to your in-house "${p.title}" (${p.subtitle}) with customized specifications for my college submission.`;
    }
    openSubmitIdeaModal();
  };

  // =========================================================================
  // 6. FOUNDER BUSINESS & CRM DASHBOARD (MONITORING REVENUE & LEADS)
  // =========================================================================
  function renderFounderCRM() {
    // 6.1 Update Revenue Display (starts at ₹0 or actual converted)
    const revValEl = document.getElementById('founderRevenueVal');
    const revProgressEl = document.getElementById('founderRevProgress');
    const revLabelEl = document.getElementById('founderRevLabel');
    const leadsCountEl = document.getElementById('founderLeadsCount');
    const pipelineValEl = document.getElementById('founderPipelineVal');
    const navLeadsBadge = document.getElementById('crmLeadsBadge');

    const earned = state.revenueEarned || 0;
    const target = state.revenueTarget || 100000;
    const pct = Math.min(100, Math.round((earned / target) * 100));

    if (revValEl) revValEl.textContent = '₹' + earned.toLocaleString('en-IN');
    if (revProgressEl) revProgressEl.style.width = pct + '%';
    if (revLabelEl) revLabelEl.textContent = `${pct}% of ₹${(target / 100000).toFixed(1)}L Monthly Target Reached`;

    const totalPipeline = state.leads.reduce((acc, l) => acc + (l.budget || 0), 0);
    if (leadsCountEl) leadsCountEl.innerHTML = `${state.leads.length} <span class="val-sub">Inquiries</span>`;
    if (pipelineValEl) pipelineValEl.textContent = '₹' + totalPipeline.toLocaleString('en-IN');
    if (navLeadsBadge) navLeadsBadge.textContent = `${state.leads.length} Leads`;

    // 6.2 Render Leads Table
    const tbody = document.getElementById('crmTableBody');
    if (!tbody) return;

    if (state.leads.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 30px; color: var(--text-muted);">No inquiries yet. Use the Client Portal or share your link to attract students!</td></tr>`;
      return;
    }

    tbody.innerHTML = state.leads.map(lead => `
      <tr>
        <td><span style="font-family: var(--font-mono); font-size: 11px;">${lead.date}</span></td>
        <td>
          <strong style="color: var(--text-main); font-size: 13px;">${lead.name}</strong><br>
          <span style="font-size: 11px; color: var(--text-muted);">${lead.college}</span>
        </td>
        <td>
          <a href="https://wa.me/${lead.contact.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(lead.name)},%20this%20is%20Yantrika%20Labs%20regarding%20your%20project%20inquiry." target="_blank" style="color: var(--emerald-primary); text-decoration: none; font-weight: 600;">
            💬 ${lead.contact}
          </a>
        </td>
        <td>
          <span class="stage-pill" style="margin-bottom: 4px;">${lead.domain}</span><br>
          <span style="font-size: 11px; color: var(--text-secondary);">${lead.idea}</span>
        </td>
        <td><strong style="font-family: var(--font-mono); color: var(--gold-primary); font-size: 13px;">₹${(lead.budget || 0).toLocaleString('en-IN')}</strong></td>
        <td>
          <select class="lead-stage-select" onchange="updateLeadStage('${lead.id}', this.value)">
            <option value="New Inquiry" ${lead.stage === 'New Inquiry' ? 'selected' : ''}>New Inquiry</option>
            <option value="Contacted" ${lead.stage === 'Contacted' ? 'selected' : ''}>Contacted / Calling</option>
            <option value="Quote Sent" ${lead.stage === 'Quote Sent' ? 'selected' : ''}>Quote Sent</option>
            <option value="Advance Paid (40%)" ${lead.stage === 'Advance Paid (40%)' ? 'selected' : ''}>💰 Advance Paid (40%)</option>
            <option value="Project Completed" ${lead.stage === 'Project Completed' ? 'selected' : ''}>✅ Completed & Paid</option>
            <option value="Lost" ${lead.stage === 'Lost' ? 'selected' : ''}>Lost</option>
          </select>
        </td>
        <td>
          <button class="btn btn-xs btn-outline" onclick="loadPitchForLead('${lead.name}', '${lead.domain}', ${lead.budget})">
            Pitch Script
          </button>
        </td>
      </tr>
    `).join('');
  }

  window.updateLeadStage = function (leadId, newStage) {
    const lead = state.leads.find(l => l.id === leadId);
    if (!lead) return;
    const oldStage = lead.stage;
    lead.stage = newStage;

    // If marked as paid, increment founder's realized revenue!
    if (newStage === 'Advance Paid (40%)' && oldStage !== 'Advance Paid (40%)') {
      const advanceAmt = Math.round(lead.budget * 0.4);
      state.revenueEarned = (state.revenueEarned || 0) + advanceAmt;
      AudioEngine.paymentEarned();
      alert(`🎉 CONGRATULATIONS! Advance payment of ₹${advanceAmt.toLocaleString('en-IN')} logged for ${lead.name}! Total revenue updated.`);
    } else if (newStage === 'Project Completed' && oldStage !== 'Project Completed') {
      const fullAmt = Math.round(lead.budget * 0.6); // remaining 60%
      state.revenueEarned = (state.revenueEarned || 0) + fullAmt;
      AudioEngine.paymentEarned();
      alert(`🎉 Final milestone of ₹${fullAmt.toLocaleString('en-IN')} collected from ${lead.name}! Project marked complete.`);
    } else {
      AudioEngine.click();
    }

    saveState();
    renderFounderCRM();
  };

  // =========================================================================
  // 7. 1-CLICK WHATSAPP & EMAIL PITCH GENERATOR
  // =========================================================================
  function generatePitchText() {
    const name = document.getElementById('pitchName')?.value.trim() || 'Student';
    const domain = document.getElementById('pitchDomain')?.value || 'Digital VLSI';
    const price = parseInt(document.getElementById('pitchPrice')?.value) || 22500;
    const advance = Math.round(price * 0.4);
    const midterm = Math.round(price * 0.3);
    const finalMilestone = Math.round(price * 0.3);

    const pitch = `Hi ${name}! This is Dhanraj from *Yantrika Labs* (From Idea to Silicon).

I reviewed your project requirements for *${domain}*. We can definitely build and mentor your team end-to-end for this project!

Here is what we provide at Yantrika Labs:
✅ *Complete Synthesizable Source Code & Architecture Design* (RTL / Firmware / Software)
✅ *100% Real Working Hardware Bring-Up & Verification* (No fake simulations)
✅ *Testbenches & Signal Waveform Analysis* (Vivado / GTKWave)
✅ *IEEE-Standard Project Documentation & Schematics*
✅ *Viva Defense Preparation & 1-on-1 Mentorship Sessions* (So you score high with confidence!)

💰 *Project Investment:* ₹${price.toLocaleString('en-IN')} (All-inclusive)
📅 *Milestone Payment:*
• Advance (40%): ₹${advance.toLocaleString('en-IN')} (to begin architecture & specs)
• Mid-Term (30%): ₹${midterm.toLocaleString('en-IN')} (after simulation & RTL review)
• Final Handover (30%): ₹${finalMilestone.toLocaleString('en-IN')} (after hardware testing & report)

Let me know if you would like a quick 10-minute Google Meet / phone call today to finalize your block diagram and timeline!

*Yantrika Labs* | "Ancient Ingenuity, Modern Silicon."`;

    const box = document.getElementById('pitchOutputText');
    if (box) box.textContent = pitch;
    return pitch;
  }

  window.loadPitchForLead = function (name, domain, budget) {
    AudioEngine.click();
    const nameEl = document.getElementById('pitchName');
    const priceEl = document.getElementById('pitchPrice');
    if (nameEl) nameEl.value = name;
    if (priceEl) priceEl.value = budget;
    generatePitchText();
    document.getElementById('pitchOutputText').scrollIntoView({ behavior: 'smooth' });
  };

  function setupPitchGenerator() {
    ['pitchName', 'pitchDomain', 'pitchPrice'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('input', generatePitchText);
        el.addEventListener('change', generatePitchText);
      }
    });

    const btnCopy = document.getElementById('btnCopyPitch');
    if (btnCopy) {
      btnCopy.addEventListener('click', () => {
        AudioEngine.click();
        const text = generatePitchText();
        navigator.clipboard.writeText(text).then(() => {
          alert('📋 Pitch script copied to clipboard! Paste directly into WhatsApp or Email.');
        });
      });
    }

    const btnRefresh = document.getElementById('btnRefreshPitch');
    if (btnRefresh) {
      btnRefresh.addEventListener('click', () => {
        AudioEngine.click();
        generatePitchText();
      });
    }
  }

  // =========================================================================
  // 8. DUAL MODE SWITCHER (Client Portal vs Founder CRM)
  // =========================================================================
  function switchMode(mode) {
    AudioEngine.click();
    state.activeMode = mode;
    saveState();

    const btnCust = document.getElementById('btnModeCustomer');
    const btnFound = document.getElementById('btnModeFounder');
    const viewCust = document.getElementById('viewCustomer');
    const viewFound = document.getElementById('viewFounder');

    if (mode === 'customer') {
      btnCust.classList.add('active');
      btnFound.classList.remove('active');
      viewCust.classList.add('active');
      viewFound.classList.remove('active');
    } else {
      btnCust.classList.remove('active');
      btnFound.classList.add('active');
      viewCust.classList.remove('active');
      viewFound.classList.add('active');
      renderFounderCRM();
    }
  }

  const btnCust = document.getElementById('btnModeCustomer');
  const btnFound = document.getElementById('btnModeFounder');
  if (btnCust) btnCust.addEventListener('click', () => switchMode('customer'));
  if (btnFound) btnFound.addEventListener('click', () => switchMode('founder'));

  // Hero action buttons
  const btnHeroCalc = document.getElementById('btnHeroCalculateQuote');
  const btnHeroIdea = document.getElementById('btnHeroSubmitIdea');
  const btnBookCTA = document.getElementById('btnCustomerBookCTA');

  if (btnHeroCalc) {
    btnHeroCalc.addEventListener('click', () => {
      AudioEngine.click();
      document.getElementById('projectCalculatorSection').scrollIntoView({ behavior: 'smooth' });
    });
  }
  if (btnBookCTA) {
    btnBookCTA.addEventListener('click', () => {
      AudioEngine.click();
      document.getElementById('projectCalculatorSection').scrollIntoView({ behavior: 'smooth' });
    });
  }
  if (btnHeroIdea) {
    btnHeroIdea.addEventListener('click', openSubmitIdeaModal);
  }

  // =========================================================================
  // 9. MODALS: DOSSIER, SUBMIT IDEA, DUAL POSTERS
  // =========================================================================
  // 9.1 Project Dossier Modal
  const projectModal = document.getElementById('projectModal');
  const btnCloseModal = document.getElementById('btnCloseProjectModal');
  const btnModalClose = document.getElementById('btnModalClose');
  const btnModalHire = document.getElementById('btnModalHireForSimilar');

  window.openProjectModal = function (projId) {
    AudioEngine.click();
    const proj = IN_HOUSE_PROJECTS.find(p => p.id === projId);
    if (!proj) return;

    document.getElementById('modalProjId').textContent = proj.id;
    document.getElementById('modalProjTitle').textContent = proj.title;
    document.getElementById('modalProjDomain').textContent = proj.domain;

    const body = document.getElementById('modalProjBody');
    body.innerHTML = `
      <div style="margin-bottom: 14px;">
        <h4 style="font-family: var(--font-display); color: var(--gold-primary); font-size: 15px; margin-bottom: 4px;">${proj.subtitle}</h4>
        <p style="color: var(--text-secondary); font-size: 13px;">${proj.tagline}</p>
      </div>

      <div style="margin-bottom: 16px;">
        <h5 style="font-family: var(--font-display); color: var(--cyan-primary); font-size: 12px; margin-bottom: 6px;">TECHNICAL STACK & VERIFICATION</h5>
        <div style="display: flex; flex-wrap: wrap; gap: 6px;">
          ${proj.tech.map(t => `<span class="tech-tag" style="padding: 4px 8px; font-size: 11px;">${t}</span>`).join('')}
        </div>
      </div>

      <div style="margin-bottom: 16px;">
        <h5 style="font-family: var(--font-display); color: var(--gold-primary); font-size: 12px; margin-bottom: 6px;">HARDWARE & SILICON TARGET</h5>
        <div style="background: rgba(10, 18, 30, 0.6); padding: 10px 14px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); font-family: var(--font-mono); font-size: 12px; color: var(--text-main);">
          ⚡ ${proj.hardware}
        </div>
      </div>

      <div>
        <h5 style="font-family: var(--font-display); color: var(--emerald-primary); font-size: 12px; margin-bottom: 6px;">DELIVERABLE PACKAGE INCLUDED</h5>
        <p style="font-size: 12px; color: var(--text-secondary); line-height: 1.5;">${proj.deliverables}</p>
      </div>
    `;

    if (btnModalHire) {
      btnModalHire.onclick = () => {
        closeProjectModal();
        requestSimilarProject(proj.id);
      };
    }

    projectModal.classList.add('show');
  };

  function closeProjectModal() {
    AudioEngine.click();
    projectModal.classList.remove('show');
  }

  if (btnCloseModal) btnCloseModal.addEventListener('click', closeProjectModal);
  if (btnModalClose) btnModalClose.addEventListener('click', closeProjectModal);

  // 9.2 Submit Project Idea Modal
  const submitIdeaModal = document.getElementById('submitIdeaModal');
  const btnCloseSubmitIdea = document.getElementById('btnCloseSubmitIdea');
  const btnCancelSubmitIdea = document.getElementById('btnCancelSubmitIdea');
  const btnConfirmSubmitIdea = document.getElementById('btnConfirmSubmitIdea');

  function openSubmitIdeaModal() {
    AudioEngine.click();
    submitIdeaModal.classList.add('show');
  }
  function closeSubmitIdeaModal() {
    AudioEngine.click();
    submitIdeaModal.classList.remove('show');
  }

  if (btnCloseSubmitIdea) btnCloseSubmitIdea.addEventListener('click', closeSubmitIdeaModal);
  if (btnCancelSubmitIdea) btnCancelSubmitIdea.addEventListener('click', closeSubmitIdeaModal);

  if (btnConfirmSubmitIdea) {
    btnConfirmSubmitIdea.addEventListener('click', (e) => {
      e.preventDefault();
      const name = document.getElementById('leadName').value.trim();
      const phone = document.getElementById('leadPhone').value.trim();
      const college = document.getElementById('leadCollege').value.trim() || 'Student / Innovator';
      const domain = document.getElementById('leadDomain').value;
      const budget = parseInt(document.getElementById('leadBudget').value) || 20000;
      const notes = document.getElementById('leadNotes').value.trim();

      if (!name || !phone) {
        alert('Please fill in your name and WhatsApp number.');
        return;
      }

      AudioEngine.leadCaptured();

      const newLead = {
        id: 'LEAD-' + Math.floor(100 + Math.random() * 900),
        date: 'Just now',
        name: name,
        contact: phone,
        college: college,
        domain: domain,
        idea: notes || `Custom ${domain} Project`,
        budget: budget,
        stage: 'New Inquiry',
        notes: notes
      };

      state.leads.unshift(newLead);
      saveState();
      renderFounderCRM();
      closeSubmitIdeaModal();

      alert(`🎉 Thank you, ${name}! Your project idea has been submitted to Yantrika Labs. We will reach out on WhatsApp (${phone}) shortly!`);
      document.getElementById('submitIdeaForm').reset();
    });
  }

  // 9.3 Dual Poster Showcase Modal
  const posterModal = document.getElementById('posterModal');
  const btnViewPosters = document.getElementById('btnViewPosters');
  const btnLogo = document.getElementById('brandLogoBtn');
  const btnClosePoster1 = document.getElementById('btnClosePosterModal');
  const btnClosePoster2 = document.getElementById('btnClosePosterModal2');
  const tabPoster1Btn = document.getElementById('tabPoster1Btn');
  const tabPoster2Btn = document.getElementById('tabPoster2Btn');
  const activePosterImg = document.getElementById('activePosterImg');

  function openPosterModal() {
    AudioEngine.click();
    posterModal.classList.add('show');
  }
  function closePosterModal() {
    AudioEngine.click();
    posterModal.classList.remove('show');
  }

  if (btnViewPosters) btnViewPosters.addEventListener('click', openPosterModal);
  if (btnLogo) btnLogo.addEventListener('click', openPosterModal);
  if (btnClosePoster1) btnClosePoster1.addEventListener('click', closePosterModal);
  if (btnClosePoster2) btnClosePoster2.addEventListener('click', closePosterModal);

  if (tabPoster1Btn && tabPoster2Btn && activePosterImg) {
    tabPoster1Btn.addEventListener('click', () => {
      AudioEngine.click();
      tabPoster1Btn.classList.add('active');
      tabPoster2Btn.classList.remove('active');
      activePosterImg.src = 'assets/yantrika_poster.jpg';
    });
    tabPoster2Btn.addEventListener('click', () => {
      AudioEngine.click();
      tabPoster2Btn.classList.add('active');
      tabPoster1Btn.classList.remove('active');
      activePosterImg.src = 'assets/yantrika_services_poster.jpg';
    });
  }

  // Audio Toggle
  const btnAudio = document.getElementById('btnSoundToggle');
  if (btnAudio) {
    btnAudio.addEventListener('click', () => {
      state.audioEnabled = !state.audioEnabled;
      btnAudio.innerHTML = `<span class="icon">${state.audioEnabled ? '🔊' : '🔇'}</span> Audio: ${state.audioEnabled ? 'ON' : 'OFF'}`;
      AudioEngine.click();
      saveState();
    });
  }

  // Manual Add Lead in Founder CRM
  const btnManualAdd = document.getElementById('btnManualAddLead');
  if (btnManualAdd) {
    btnManualAdd.addEventListener('click', openSubmitIdeaModal);
  }

  // =========================================================================
  // 10. FAULT INJECTION SIMULATOR (Demonstrating Hardware Know-how)
  // =========================================================================
  const btnSimSurge = document.getElementById('btnSimulateSurge');
  window.tripFault = function () {
    AudioEngine.playTone(220, 'sawtooth', 0.3, 0.25);
    alert('⚡ Simulated Overcurrent Surge Injected! Vidyut Rakshaka Random Forest Classifier triggered 4-Channel Relay in 4.18ms.');
  };
  if (btnSimSurge) btnSimSurge.addEventListener('click', window.tripFault);

  window.triggerBenchAction = function (bench) {
    AudioEngine.click();
    alert('Vivado 2024.2 synthesis bitstream verified. Ready to demonstrate to prospective students.');
  };

  // Clock Ticker
  setInterval(() => {
    const clockEl = document.getElementById('systemClock');
    if (clockEl) {
      clockEl.textContent = new Date().toTimeString().split(' ')[0] + ' IST';
    }
  }, 1000);

  // Startup
  window.addEventListener('DOMContentLoaded', () => {
    initCircuitCanvas();
    initHeroScope();
    updateCalculator();
    setupCalculatorListeners();
    renderProofOfWork();
    renderCustomerServices();
    renderFounderCRM();
    setupPitchGenerator();
    generatePitchText();

    // Restore mode if saved
    if (state.activeMode) {
      switchMode(state.activeMode);
    }
  });

})();
