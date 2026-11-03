// 80s Analog Synthesizer & Sound Effects Engine using Web Audio API
// No external MP3 downloads required - zero latency, 100% reliable in any sandbox

class SoundEffectsEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private synthInterval: number | null = null;
  private isSynthPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private synthGain: GainNode | null = null;

  constructor() {
    // AudioContext will be initialized on first user interaction
  }

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.7, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      this.synthGain = this.ctx.createGain();
      this.synthGain.gain.setValueAtTime(0.25, this.ctx.currentTime);
      this.synthGain.connect(this.masterGain);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.ctx && this.masterGain) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.7, this.ctx.currentTime);
    }
    return this.isMuted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public isThemePlaying(): boolean {
    return this.isSynthPlaying;
  }

  // Stranger Things Theme Arpeggiator (C3 - E3 - G3 - B3 - C4 - B3 - G3 - E3)
  public start80sSynthTheme() {
    this.initContext();
    if (this.isSynthPlaying || !this.ctx || !this.synthGain) return;

    this.isSynthPlaying = true;
    const notes = [
      130.81, // C3
      164.81, // E3
      196.00, // G3
      246.94, // B3
      261.63, // C4
      246.94, // B3
      196.00, // G3
      164.81  // E3
    ];

    let noteIdx = 0;
    const bpm = 126;
    const intervalMs = (60 / bpm) * 1000 / 2; // 16th notes / 8th arpeggio speed

    const playNote = () => {
      if (!this.isSynthPlaying || !this.ctx || !this.synthGain) return;

      const freq = notes[noteIdx];
      noteIdx = (noteIdx + 1) % notes.length;

      const now = this.ctx.currentTime;

      // Two detuned sawtooth oscillators for that thick 80s Roland Juno/Prophet sound
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      osc1.type = 'sawtooth';
      osc2.type = 'sawtooth';
      osc1.frequency.setValueAtTime(freq, now);
      osc2.frequency.setValueAtTime(freq * 1.006, now); // slight detune for lush analog chorus

      // Sub oscillator for deep 80s bass warmth
      const subOsc = this.ctx.createOscillator();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(freq / 2, now);

      // Low-pass resonant filter
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(950, now);
      filter.Q.setValueAtTime(4.0, now);

      // Note envelope
      const env = this.ctx.createGain();
      env.gain.setValueAtTime(0.01, now);
      env.gain.linearRampToValueAtTime(0.25, now + 0.02);
      env.gain.exponentialRampToValueAtTime(0.001, now + (intervalMs / 1000) * 1.2);

      // Sub envelope
      const subEnv = this.ctx.createGain();
      subEnv.gain.setValueAtTime(0.12, now);
      subEnv.gain.exponentialRampToValueAtTime(0.001, now + (intervalMs / 1000));

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(env);
      env.connect(this.synthGain);

      subOsc.connect(subEnv);
      subEnv.connect(this.synthGain);

      osc1.start(now);
      osc2.start(now);
      subOsc.start(now);

      const stopTime = now + (intervalMs / 1000) * 1.3;
      osc1.stop(stopTime);
      osc2.stop(stopTime);
      subOsc.stop(stopTime);
    };

    // Initial note
    playNote();
    this.synthInterval = window.setInterval(playNote, intervalMs);
  }

  public stop80sSynthTheme() {
    this.isSynthPlaying = false;
    if (this.synthInterval) {
      clearInterval(this.synthInterval);
      this.synthInterval = null;
    }
  }

  public toggle80sSynthTheme(): boolean {
    if (this.isSynthPlaying) {
      this.stop80sSynthTheme();
    } else {
      this.start80sSynthTheme();
    }
    return this.isSynthPlaying;
  }

  // 80s Mechanical Arcade / Terminal Button Click
  public playClickSound() {
    this.initContext();
    if (this.isMuted || !this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(280, now);
    osc.frequency.exponentialRampToValueAtTime(70, now + 0.04);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.05);
  }

  // Subtle Terminal Hover Blip
  public playHoverSound() {
    this.initContext();
    if (this.isMuted || !this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(640, now);
    osc.frequency.linearRampToValueAtTime(980, now + 0.03);

    gain.gain.setValueAtTime(0.07, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.04);
  }

  // Modal / Popup Reveal Impact (Hawkins Lab Suspense Chime)
  public playPopupSound() {
    this.initContext();
    if (this.isMuted || !this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;

    // Sub hit
    const subOsc = this.ctx.createOscillator();
    const subGain = this.ctx.createGain();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(110, now);
    subOsc.frequency.exponentialRampToValueAtTime(45, now + 0.4);
    subGain.gain.setValueAtTime(0.4, now);
    subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
    subOsc.connect(subGain);
    subGain.connect(this.masterGain);

    // Eerie upper harmonic shimmer
    const chime = this.ctx.createOscillator();
    const chimeGain = this.ctx.createGain();
    chime.type = 'triangle';
    chime.frequency.setValueAtTime(587.33, now); // D5
    chime.frequency.setValueAtTime(659.25, now + 0.08); // E5
    chimeGain.gain.setValueAtTime(0.18, now);
    chimeGain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
    chime.connect(chimeGain);
    chimeGain.connect(this.masterGain);

    subOsc.start(now);
    subOsc.stop(now + 0.45);
    chime.start(now);
    chime.stop(now + 0.55);
  }

  // Upside Down Portal Transition Sound (Deep dimensional whoosh with pitch bend)
  public playPortalSound() {
    this.initContext();
    if (this.isMuted || !this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;

    // Deep pitch glide
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.exponentialRampToValueAtTime(40, now + 0.7);

    // Filter sweep
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2200, now);
    filter.frequency.exponentialRampToValueAtTime(180, now + 0.7);

    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.75);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.8);
  }

  // Christmas Light Bulb Click & Electric Spark
  public playLightBulbSound() {
    this.initContext();
    if (this.isMuted || !this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, now);
    osc.frequency.setValueAtTime(440, now + 0.03);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.13);
  }

  // Walkie-Talkie (Cerebro) Static & Chirp
  public playWalkieChirp() {
    this.initContext();
    if (this.isMuted || !this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;

    // Beep burst
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(1760, now);
    osc.frequency.setValueAtTime(2200, now + 0.05);

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.13);
  }

  // Morse Code Tone
  public playMorseTone(isDash: boolean = false) {
    this.initContext();
    if (this.isMuted || !this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;
    const duration = isDash ? 0.2 : 0.08;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(750, now);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + duration + 0.01);
  }

  // Vecna Grandfather Clock Toll
  public playVecnaClock() {
    this.initContext();
    if (this.isMuted || !this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(65.41, now); // C2 low ominous gong

    gain.gain.setValueAtTime(0.5, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 1.65);
  }
}

export const soundFx = new SoundEffectsEngine();
