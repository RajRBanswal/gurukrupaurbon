/**
 * GURUKRUPA URBAN CO-OPERATIVE CREDIT SOCIETY LTD.
 * Interactive Financial Calculator (Deposit & Loan EMI)
 */

class FinancialCalculator {
    constructor() {
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.bindDepositCalc();
            this.bindLoanCalc();
        });
    }

    formatINR(num) {
        if (isNaN(num)) return "₹0";
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(Math.round(num));
    }

    numberToWordsINR(num) {
        if (isNaN(num) || num <= 0) return "";
        if (num >= 10000000) {
            let cr = num / 10000000;
            return (cr % 1 === 0 ? cr : cr.toFixed(2)) + ' Crore';
        }
        if (num >= 100000) {
            let lakh = num / 100000;
            const lakhWords = {
                1: 'One Lakh', 2: 'Two Lakh', 3: 'Three Lakh', 4: 'Four Lakh', 5: 'Five Lakh',
                6: 'Six Lakh', 7: 'Seven Lakh', 8: 'Eight Lakh', 9: 'Nine Lakh', 10: 'Ten Lakh',
                15: 'Fifteen Lakh', 20: 'Twenty Lakh', 25: 'Twenty Five Lakh', 30: 'Thirty Lakh',
                40: 'Forty Lakh', 50: 'Fifty Lakh', 60: 'Sixty Lakh', 70: 'Seventy Lakh', 80: 'Eighty Lakh', 90: 'Ninety Lakh', 100: '1 Crore'
            };
            if (lakhWords[lakh]) return lakhWords[lakh];
            return (lakh % 1 === 0 ? lakh : lakh.toFixed(2)) + ' Lakh';
        }
        if (num >= 1000) {
            let k = num / 1000;
            return (k % 1 === 0 ? k : k.toFixed(1)) + ' Thousand';
        }
        return num.toString();
    }

    // ==========================================
    // DEPOSIT CALCULATOR LOGIC
    // ==========================================
    bindDepositCalc() {
        const depAmtSlider = document.getElementById('depAmtSlider');
        const depAmtInput = document.getElementById('depAmtInput');
        const depAmtFormatted = document.getElementById('depAmtFormatted');
        const amountInWords = document.getElementById('amountInWords');
        const depAmtDisplayContainer = document.getElementById('depAmtDisplayContainer');
        const depAmtEditIcon = document.getElementById('depAmtEditIcon');

        const depTenureSlider = document.getElementById('depTenureSlider');
        const depTenureInput = document.getElementById('depTenureInput');
        const depRateInput = document.getElementById('depRateInput');
        const depTypeSelect = document.getElementById('depTypeSelect');
        const depTypePills = document.querySelectorAll('.dep-type-pill');

        const tenureUnitBtns = document.querySelectorAll('.tenure-unit-btn');
        const tenurePresetBtns = document.querySelectorAll('.tenure-preset-btn');
        const customTenureContainer = document.getElementById('customTenureContainer');
        const customTenureValue = document.getElementById('customTenureValue');

        if (!depAmtSlider) return;

        // Default rates per deposit scheme
        const schemeRates = {
            'fd': 10.15,
            'rd': 9.50,
            'mis': 10.50,
            'dds': 7.50
        };

        let currentTenureUnit = 'months';

        const updateDepositCalc = () => {
            let principal = parseFloat(depAmtInput.value) || 500000;
            let rawTenure = parseFloat(depTenureInput.value) || 13;
            let tenureMonths = (currentTenureUnit === 'years') ? (rawTenure * 12) : rawTenure;
            if (tenureMonths <= 0) tenureMonths = 1;

            let rate = parseFloat(depRateInput.value) || 10.15;
            let type = depTypeSelect ? depTypeSelect.value : 'fd';

            let estInterest = 0;
            let maturityAmt = 0;
            let monthlyInterest = 0;

            if (type === 'fd') {
                let tYears = tenureMonths / 12;
                maturityAmt = principal * Math.pow((1 + (rate / 400)), (4 * tYears));
                estInterest = maturityAmt - principal;
                monthlyInterest = estInterest / tenureMonths;
            } else if (type === 'rd') {
                let n = tenureMonths;
                let i = rate / 1200;
                let totalInvested = principal * n;
                maturityAmt = 0;
                for (let m = 1; m <= n; m++) {
                    maturityAmt += principal * Math.pow((1 + i), (n - m + 1));
                }
                estInterest = maturityAmt - totalInvested;
                monthlyInterest = estInterest / tenureMonths;
                principal = totalInvested;
            } else if (type === 'mis') {
                monthlyInterest = principal * (rate / 1200);
                estInterest = monthlyInterest * tenureMonths;
                maturityAmt = principal + estInterest;
            } else {
                let totalInvested = principal * 30 * tenureMonths;
                estInterest = totalInvested * (rate / 100) * (tenureMonths / 12);
                monthlyInterest = estInterest / tenureMonths;
                maturityAmt = totalInvested + estInterest;
                principal = totalInvested;
            }

            if (depAmtFormatted) depAmtFormatted.innerText = this.formatINR(parseFloat(depAmtInput.value) || 0);
            if (amountInWords) amountInWords.innerText = this.numberToWordsINR(parseFloat(depAmtInput.value) || 0);

            const displayRateTop = document.getElementById('displayRateTop');
            const resRateBottom = document.getElementById('resRateBottom');
            if (displayRateTop) displayRateTop.innerText = rate.toFixed(2).replace(/\.00$/, '') + '%';
            if (resRateBottom) resRateBottom.innerText = rate.toFixed(2).replace(/\.00$/, '') + '%';

            const resInvestedEl = document.getElementById('resDepInvested');
            const resInterestEl = document.getElementById('resDepInterest');
            const resMaturityEl = document.getElementById('resDepMaturity');
            const gaugeCenterVal = document.getElementById('gaugeCenterValue');

            if (resInvestedEl) resInvestedEl.innerText = this.formatINR(principal);
            if (resInterestEl) resInterestEl.innerText = this.formatINR(estInterest);
            if (resMaturityEl) resMaturityEl.innerText = this.formatINR(maturityAmt);
            if (gaugeCenterVal) gaugeCenterVal.innerText = this.formatINR(monthlyInterest) + '*';

            // SVG Gauge Arc update
            const gaugeInterestArc = document.getElementById('gaugeInterestArc');
            if (gaugeInterestArc) {
                let totalArc = 235.6;
                let ratio = maturityAmt > 0 ? (estInterest / maturityAmt) : 0.1;
                ratio = Math.min(0.95, Math.max(0.05, ratio));
                let offset = totalArc * (1 - ratio);
                gaugeInterestArc.setAttribute('stroke-dashoffset', offset);
            }
        };

        // Amount Inline Editing
        if (depAmtDisplayContainer && depAmtInput) {
            const toggleAmountEdit = () => {
                if (depAmtInput.classList.contains('d-none')) {
                    depAmtInput.classList.remove('d-none');
                    depAmtDisplayContainer.classList.add('d-none');
                    depAmtInput.focus();
                } else {
                    depAmtInput.classList.add('d-none');
                    depAmtDisplayContainer.classList.remove('d-none');
                }
            };

            if (depAmtEditIcon) depAmtEditIcon.addEventListener('click', toggleAmountEdit);
            depAmtDisplayContainer.addEventListener('click', toggleAmountEdit);

            depAmtInput.addEventListener('blur', () => {
                depAmtInput.classList.add('d-none');
                depAmtDisplayContainer.classList.remove('d-none');
                updateDepositCalc();
            });

            depAmtInput.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') {
                    depAmtInput.blur();
                }
            });
        }

        // Scheme Pill button switcher
        depTypePills.forEach(pill => {
            pill.addEventListener('click', () => {
                depTypePills.forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                const selectedType = pill.getAttribute('data-type');
                if (depTypeSelect) depTypeSelect.value = selectedType;

                const amountLabelShort = document.querySelector('[data-i18n="label_amount_short"]');
                const scaleMarkers = document.querySelector('.scale-markers');

                if (selectedType === 'rd') {
                    if (amountLabelShort) amountLabelShort.innerText = 'Monthly Amount:';
                    if (depAmtInput.value > 100000) depAmtInput.value = 5000;
                    depAmtSlider.min = 500;
                    depAmtSlider.max = 100000;
                    depAmtSlider.step = 500;
                    depAmtSlider.value = depAmtInput.value;
                    if (scaleMarkers) scaleMarkers.innerHTML = '<span>500</span><span>2K</span><span>5K</span><span>10K</span><span>25K</span><span>1L</span>';
                } else if (selectedType === 'dds') {
                    if (amountLabelShort) amountLabelShort.innerText = 'Daily Amount:';
                    if (depAmtInput.value > 5000) depAmtInput.value = 200;
                    depAmtSlider.min = 50;
                    depAmtSlider.max = 5000;
                    depAmtSlider.step = 50;
                    depAmtSlider.value = depAmtInput.value;
                    if (scaleMarkers) scaleMarkers.innerHTML = '<span>50</span><span>100</span><span>200</span><span>500</span><span>1K</span><span>5K</span>';
                } else {
                    if (amountLabelShort) amountLabelShort.innerText = 'Amount:';
                    if (depAmtInput.value < 5000) depAmtInput.value = 500000;
                    depAmtSlider.min = 5000;
                    depAmtSlider.max = 10000000;
                    depAmtSlider.step = 5000;
                    depAmtSlider.value = depAmtInput.value;
                    if (scaleMarkers) scaleMarkers.innerHTML = '<span>5K</span><span>20L</span><span>40L</span><span>60L</span><span>80L</span><span>1Cr</span>';
                }

                if (schemeRates[selectedType] && depRateInput) {
                    depRateInput.value = schemeRates[selectedType];
                }
                updateDepositCalc();
            });
        });

        // Amount slider sync
        depAmtSlider.addEventListener('input', (e) => {
            depAmtInput.value = e.target.value;
            updateDepositCalc();
        });
        depAmtInput.addEventListener('input', (e) => {
            depAmtSlider.value = e.target.value;
            updateDepositCalc();
        });

        // Helper to update tenure preset buttons UI
        const updateTenurePresetsUI = () => {
            const preset1 = tenurePresetBtns[0];
            const preset2 = tenurePresetBtns[1];

            if (currentTenureUnit === 'years') {
                if (preset1) { preset1.innerText = '1 Year'; preset1.setAttribute('data-val', '1'); }
                if (preset2) { preset2.innerText = '2 Years'; preset2.setAttribute('data-val', '2'); }
                if (depTenureSlider) {
                    depTenureSlider.min = 1;
                    depTenureSlider.max = 10;
                    depTenureSlider.step = 1;
                }
            } else {
                if (preset1) { preset1.innerText = '13 Months'; preset1.setAttribute('data-val', '13'); }
                if (preset2) { preset2.innerText = '26 Months'; preset2.setAttribute('data-val', '26'); }
                if (depTenureSlider) {
                    depTenureSlider.min = 1;
                    depTenureSlider.max = 120;
                    depTenureSlider.step = 1;
                }
            }
        };

        // Tenure unit toggle
        tenureUnitBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tenureUnitBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentTenureUnit = btn.getAttribute('data-unit');
                
                updateTenurePresetsUI();

                let activePreset = document.querySelector('.tenure-preset-btn.active');
                if (activePreset && activePreset.getAttribute('data-months') !== 'custom') {
                    let val = parseFloat(activePreset.getAttribute('data-val')) || (currentTenureUnit === 'years' ? 1 : 13);
                    depTenureInput.value = val;
                    if (depTenureSlider) depTenureSlider.value = val;
                } else if (depTenureSlider) {
                    if (currentTenureUnit === 'years' && depTenureSlider.value > 10) {
                        depTenureSlider.value = 1;
                    }
                    depTenureInput.value = depTenureSlider.value;
                }

                if (customTenureValue) {
                    customTenureValue.innerText = depTenureInput.value + ' ' + (currentTenureUnit === 'years' ? 'Years' : 'Months');
                }
                updateDepositCalc();
            });
        });

        // Tenure presets
        tenurePresetBtns.forEach(preset => {
            preset.addEventListener('click', () => {
                tenurePresetBtns.forEach(p => p.classList.remove('active'));
                preset.classList.add('active');

                const monthsVal = preset.getAttribute('data-months');
                if (monthsVal === 'custom') {
                    if (customTenureContainer) customTenureContainer.classList.remove('d-none');
                    if (depTenureSlider) depTenureInput.value = depTenureSlider.value;
                } else {
                    if (customTenureContainer) customTenureContainer.classList.add('d-none');
                    let val = parseFloat(preset.getAttribute('data-val')) || parseFloat(monthsVal) || (currentTenureUnit === 'years' ? 1 : 13);
                    depTenureInput.value = val;
                    if (depTenureSlider) depTenureSlider.value = val;
                }

                if (customTenureValue) {
                    customTenureValue.innerText = depTenureInput.value + ' ' + (currentTenureUnit === 'years' ? 'Years' : 'Months');
                }
                updateDepositCalc();
            });
        });

        // Custom Tenure Slider
        if (depTenureSlider) {
            depTenureSlider.addEventListener('input', (e) => {
                depTenureInput.value = e.target.value;
                if (customTenureValue) {
                    customTenureValue.innerText = e.target.value + ' ' + (currentTenureUnit === 'years' ? 'Years' : 'Months');
                }
                updateDepositCalc();
            });
        }

        updateTenurePresetsUI();
        updateDepositCalc();
    }

    // ==========================================
    // LOAN EMI CALCULATOR LOGIC
    // ==========================================
    bindLoanCalc() {
        const loanAmtSlider = document.getElementById('loanAmtSlider');
        const loanAmtInput = document.getElementById('loanAmtInput');
        const loanTenureSlider = document.getElementById('loanTenureSlider');
        const loanTenureInput = document.getElementById('loanTenureInput');
        const loanRateInput = document.getElementById('loanRateInput');

        if (!loanAmtSlider || !loanAmtInput) return;

        const updateLoanCalc = () => {
            let P = parseFloat(loanAmtInput.value) || 0;
            let tenureYears = parseFloat(loanTenureInput.value) || 1;
            let annualRate = parseFloat(loanRateInput.value) || 9.5; // Default reference rate

            let N = tenureYears * 12; // Months
            let R = (annualRate / 12) / 100; // Monthly rate

            let emi = 0;
            if (R > 0 && N > 0 && P > 0) {
                emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
            }

            let totalPayable = emi * N;
            let totalInterest = totalPayable - P;

            const resEmiEl = document.getElementById('resLoanEmi');
            const resInterestEl = document.getElementById('resLoanInterest');
            const resTotalEl = document.getElementById('resLoanTotal');

            if (resEmiEl) resEmiEl.innerText = this.formatINR(emi);
            if (resInterestEl) resInterestEl.innerText = this.formatINR(totalInterest);
            if (resTotalEl) resTotalEl.innerText = this.formatINR(totalPayable);
        };

        loanAmtSlider.addEventListener('input', (e) => {
            loanAmtInput.value = e.target.value;
            updateLoanCalc();
        });
        loanAmtInput.addEventListener('input', (e) => {
            loanAmtSlider.value = e.target.value;
            updateLoanCalc();
        });

        loanTenureSlider.addEventListener('input', (e) => {
            loanTenureInput.value = e.target.value;
            updateLoanCalc();
        });
        loanTenureInput.addEventListener('input', (e) => {
            loanTenureSlider.value = e.target.value;
            updateLoanCalc();
        });

        if (loanRateInput) loanRateInput.addEventListener('input', updateLoanCalc);

        // Initial calculation
        updateLoanCalc();
    }
}

window.financialCalc = new FinancialCalculator();
