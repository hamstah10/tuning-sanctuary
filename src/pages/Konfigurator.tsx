import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, RotateCcw, Car, Cog, Cpu, Zap, ChevronRight, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

type Brand = { name: string; models: Model[] };
type Model = { name: string; engines: Engine[] };
type Engine = { name: string; ps: number; nm: number; stage1Ps: number; stage1Nm: number; stage2Ps: number; stage2Nm: number };

const brands: Brand[] = [
  {
    name: "Audi",
    models: [
      { name: "A3 (8V)", engines: [
        { name: "2.0 TDI 150 PS", ps: 150, nm: 340, stage1Ps: 185, stage1Nm: 400, stage2Ps: 210, stage2Nm: 430 },
        { name: "2.0 TFSI 190 PS", ps: 190, nm: 320, stage1Ps: 240, stage1Nm: 380, stage2Ps: 280, stage2Nm: 420 },
      ]},
      { name: "A4 (B9)", engines: [
        { name: "2.0 TDI 150 PS", ps: 150, nm: 340, stage1Ps: 185, stage1Nm: 400, stage2Ps: 215, stage2Nm: 440 },
        { name: "2.0 TDI 190 PS", ps: 190, nm: 400, stage1Ps: 230, stage1Nm: 460, stage2Ps: 260, stage2Nm: 500 },
        { name: "2.0 TFSI 252 PS", ps: 252, nm: 370, stage1Ps: 300, stage1Nm: 430, stage2Ps: 340, stage2Nm: 470 },
      ]},
      { name: "RS3 (8V)", engines: [
        { name: "2.5 TFSI 400 PS", ps: 400, nm: 480, stage1Ps: 460, stage1Nm: 560, stage2Ps: 520, stage2Nm: 620 },
      ]},
    ],
  },
  {
    name: "BMW",
    models: [
      { name: "330d (G20)", engines: [
        { name: "3.0d 265 PS", ps: 265, nm: 580, stage1Ps: 310, stage1Nm: 660, stage2Ps: 340, stage2Nm: 700 },
      ]},
      { name: "M340i (G20)", engines: [
        { name: "3.0i 374 PS", ps: 374, nm: 500, stage1Ps: 420, stage1Nm: 570, stage2Ps: 460, stage2Nm: 620 },
      ]},
      { name: "M2 (G87)", engines: [
        { name: "3.0i 460 PS", ps: 460, nm: 550, stage1Ps: 520, stage1Nm: 630, stage2Ps: 570, stage2Nm: 680 },
      ]},
    ],
  },
  {
    name: "Mercedes",
    models: [
      { name: "C220d (W206)", engines: [
        { name: "2.0d 200 PS", ps: 200, nm: 440, stage1Ps: 240, stage1Nm: 500, stage2Ps: 270, stage2Nm: 540 },
      ]},
      { name: "C43 AMG (W206)", engines: [
        { name: "2.0T 408 PS", ps: 408, nm: 500, stage1Ps: 460, stage1Nm: 560, stage2Ps: 500, stage2Nm: 610 },
      ]},
    ],
  },
  {
    name: "Volkswagen",
    models: [
      { name: "Golf 8 GTI", engines: [
        { name: "2.0 TSI 245 PS", ps: 245, nm: 370, stage1Ps: 300, stage1Nm: 430, stage2Ps: 340, stage2Nm: 470 },
      ]},
      { name: "Golf 8 R", engines: [
        { name: "2.0 TSI 320 PS", ps: 320, nm: 420, stage1Ps: 380, stage1Nm: 490, stage2Ps: 420, stage2Nm: 530 },
      ]},
      { name: "Tiguan 2.0 TDI", engines: [
        { name: "2.0 TDI 150 PS", ps: 150, nm: 340, stage1Ps: 185, stage1Nm: 400, stage2Ps: 210, stage2Nm: 430 },
      ]},
    ],
  },
  {
    name: "Porsche",
    models: [
      { name: "911 (992) Carrera", engines: [
        { name: "3.0T 385 PS", ps: 385, nm: 450, stage1Ps: 440, stage1Nm: 520, stage2Ps: 480, stage2Nm: 560 },
      ]},
      { name: "Macan S", engines: [
        { name: "2.9T 380 PS", ps: 380, nm: 520, stage1Ps: 430, stage1Nm: 590, stage2Ps: 470, stage2Nm: 640 },
      ]},
    ],
  },
  {
    name: "Ferrari",
    models: [
      { name: "Roma", engines: [
        { name: "3.9 V8 620 PS", ps: 620, nm: 760, stage1Ps: 680, stage1Nm: 830, stage2Ps: 720, stage2Nm: 880 },
      ]},
    ],
  },
  {
    name: "Mini",
    models: [
      { name: "Cooper S (F56)", engines: [
        { name: "2.0T 192 PS", ps: 192, nm: 280, stage1Ps: 230, stage1Nm: 340, stage2Ps: 260, stage2Nm: 380 },
      ]},
      { name: "JCW (F56)", engines: [
        { name: "2.0T 231 PS", ps: 231, nm: 320, stage1Ps: 270, stage1Nm: 380, stage2Ps: 300, stage2Nm: 420 },
      ]},
    ],
  },
];

const steps = [
  { label: "Marke", icon: Car },
  { label: "Modell", icon: Cog },
  { label: "Motor", icon: Cpu },
  { label: "Tuning", icon: Zap },
];

const KonfiguratorPage = () => {
  const [step, setStep] = useState(0);
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);
  const [selectedEngine, setSelectedEngine] = useState<Engine | null>(null);

  const reset = () => {
    setStep(0);
    setSelectedBrand(null);
    setSelectedModel(null);
    setSelectedEngine(null);
  };

  const goBack = () => {
    if (step === 1) { setSelectedBrand(null); setStep(0); }
    else if (step === 2) { setSelectedModel(null); setStep(1); }
    else if (step === 3) { setSelectedEngine(null); setStep(2); }
  };

  const selectBrand = (b: Brand) => { setSelectedBrand(b); setStep(1); };
  const selectModel = (m: Model) => { setSelectedModel(m); setStep(2); };
  const selectEngine = (e: Engine) => { setSelectedEngine(e); setStep(3); };

  const psDiff1 = selectedEngine ? selectedEngine.stage1Ps - selectedEngine.ps : 0;
  const nmDiff1 = selectedEngine ? selectedEngine.stage1Nm - selectedEngine.nm : 0;
  const psDiff2 = selectedEngine ? selectedEngine.stage2Ps - selectedEngine.ps : 0;
  const nmDiff2 = selectedEngine ? selectedEngine.stage2Nm - selectedEngine.nm : 0;

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 pt-28">
        <div className="container text-center">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Chiptuning Konfigurator</span>
          <h1 className="font-display text-4xl md:text-5xl font-black mt-2 mb-4">
            Finden Sie Ihr <span className="text-gradient">Tuning-Potential</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Wählen Sie Ihr Fahrzeug und erfahren Sie, welche Leistungssteigerung möglich ist.
          </p>
        </div>
      </section>

      {/* Stepper */}
      <section className="pb-4">
        <div className="container max-w-3xl">
          <div className="flex items-center justify-center gap-2 md:gap-4">
            {steps.map((s, i) => {
              const active = i === step;
              const done = i < step;
              return (
                <div key={i} className="flex items-center gap-2 md:gap-4">
                  <div className="flex flex-col items-center gap-1">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                        active
                          ? "bg-gradient-hero shadow-glow"
                          : done
                          ? "bg-primary/20 border border-primary/40"
                          : "bg-card border border-border"
                      }`}
                    >
                      {done ? (
                        <CheckCircle className="w-5 h-5 text-primary" />
                      ) : (
                        <s.icon className={`w-5 h-5 ${active ? "text-primary-foreground" : "text-muted-foreground"}`} />
                      )}
                    </div>
                    <span className={`text-xs font-medium ${active ? "text-primary" : "text-muted-foreground"}`}>
                      {s.label}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <ChevronRight className={`w-4 h-4 mb-5 ${i < step ? "text-primary" : "text-muted-foreground/30"}`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 pb-20">
        <div className="container max-w-4xl">
          <div className="rounded-2xl border border-border bg-card shadow-card p-8">
            {/* Nav */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={goBack}
                disabled={step === 0}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Zurück
              </button>
              <button
                onClick={reset}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <RotateCcw className="w-4 h-4" /> Neu starten
              </button>
            </div>

            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div key="brands" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                  <h2 className="font-display text-xl font-bold mb-6">Wählen Sie Ihre Marke</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {brands.map((b) => (
                      <button
                        key={b.name}
                        onClick={() => selectBrand(b)}
                        className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border bg-background/50 hover:border-primary/40 hover:shadow-glow transition-all group"
                      >
                        <Car className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="font-medium text-sm">{b.name}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 1 && selectedBrand && (
                <motion.div key="models" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                  <h2 className="font-display text-xl font-bold mb-2">Wählen Sie Ihr Modell</h2>
                  <p className="text-sm text-muted-foreground mb-6">Marke: <span className="text-primary font-medium">{selectedBrand.name}</span></p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedBrand.models.map((m) => (
                      <button
                        key={m.name}
                        onClick={() => selectModel(m)}
                        className="flex items-center gap-3 p-5 rounded-xl border border-border bg-background/50 hover:border-primary/40 hover:shadow-glow transition-all text-left group"
                      >
                        <Cog className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                        <div>
                          <div className="font-medium text-sm">{m.name}</div>
                          <div className="text-xs text-muted-foreground">{m.engines.length} Motorisierung{m.engines.length > 1 ? "en" : ""}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && selectedModel && (
                <motion.div key="engines" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                  <h2 className="font-display text-xl font-bold mb-2">Wählen Sie Ihren Motor</h2>
                  <p className="text-sm text-muted-foreground mb-6">
                    {selectedBrand?.name} <span className="text-primary font-medium">{selectedModel.name}</span>
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedModel.engines.map((e) => (
                      <button
                        key={e.name}
                        onClick={() => selectEngine(e)}
                        className="flex items-center gap-3 p-5 rounded-xl border border-border bg-background/50 hover:border-primary/40 hover:shadow-glow transition-all text-left group"
                      >
                        <Cpu className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                        <div>
                          <div className="font-medium text-sm">{e.name}</div>
                          <div className="text-xs text-muted-foreground">{e.ps} PS / {e.nm} Nm</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 3 && selectedEngine && (
                <motion.div key="result" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                  <h2 className="font-display text-xl font-bold mb-2">Ihr Tuning-Potential</h2>
                  <p className="text-sm text-muted-foreground mb-8">
                    {selectedBrand?.name} {selectedModel?.name} – {selectedEngine.name}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Stage 1 */}
                    <div className="rounded-xl border border-border bg-background/50 p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Zap className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <div className="font-display font-bold">Stage 1</div>
                          <div className="text-xs text-muted-foreground">ECU Optimierung</div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-muted-foreground">Leistung</span>
                            <span className="text-primary font-semibold">+{psDiff1} PS</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${(selectedEngine.stage1Ps / selectedEngine.stage2Ps) * 100}%` }}
                              transition={{ duration: 1, delay: 0.3 }}
                              className="h-full rounded-full bg-gradient-hero"
                            />
                          </div>
                          <div className="flex justify-between text-xs text-muted-foreground mt-1">
                            <span>{selectedEngine.ps} PS</span>
                            <span>{selectedEngine.stage1Ps} PS</span>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-muted-foreground">Drehmoment</span>
                            <span className="text-primary font-semibold">+{nmDiff1} Nm</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${(selectedEngine.stage1Nm / selectedEngine.stage2Nm) * 100}%` }}
                              transition={{ duration: 1, delay: 0.4 }}
                              className="h-full rounded-full bg-gradient-hero"
                            />
                          </div>
                          <div className="flex justify-between text-xs text-muted-foreground mt-1">
                            <span>{selectedEngine.nm} Nm</span>
                            <span>{selectedEngine.stage1Nm} Nm</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 text-lg font-bold">ab 399€</div>
                    </div>

                    {/* Stage 2 */}
                    <div className="rounded-xl border border-primary/40 bg-background/50 p-6 shadow-glow relative">
                      <span className="absolute -top-3 right-4 px-3 py-0.5 rounded-full bg-gradient-hero text-primary-foreground text-xs font-semibold">
                        Empfohlen
                      </span>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Zap className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <div className="font-display font-bold">Stage 2</div>
                          <div className="text-xs text-muted-foreground">Performance Upgrade</div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-muted-foreground">Leistung</span>
                            <span className="text-primary font-semibold">+{psDiff2} PS</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              transition={{ duration: 1, delay: 0.3 }}
                              className="h-full rounded-full bg-gradient-hero"
                            />
                          </div>
                          <div className="flex justify-between text-xs text-muted-foreground mt-1">
                            <span>{selectedEngine.ps} PS</span>
                            <span>{selectedEngine.stage2Ps} PS</span>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-muted-foreground">Drehmoment</span>
                            <span className="text-primary font-semibold">+{nmDiff2} Nm</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              transition={{ duration: 1, delay: 0.4 }}
                              className="h-full rounded-full bg-gradient-hero"
                            />
                          </div>
                          <div className="flex justify-between text-xs text-muted-foreground mt-1">
                            <span>{selectedEngine.nm} Nm</span>
                            <span>{selectedEngine.stage2Nm} Nm</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 text-lg font-bold">ab 599€</div>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4 justify-center">
                    <Button size="lg" className="bg-gradient-hero hover:opacity-90 gap-2" asChild>
                      <Link to="/kontakt">Jetzt anfragen <ArrowRight className="w-4 h-4" /></Link>
                    </Button>
                    <Button size="lg" variant="outline" className="gap-2" asChild>
                      <Link to="/preisliste">Preisliste ansehen</Link>
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default KonfiguratorPage;
