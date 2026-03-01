import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Check, Camera, Image as ImageIcon, Sparkles, Calendar, MapPin, User, Mail, Phone, Instagram } from 'lucide-react';
import { T, FRAMES, ROPES, CARPETS, MOUNTS, STEPS, Language } from './data';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState({
    frame: '',
    rope: '',
    carpet: '',
    mount: '',
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    location: '',
    notes: '',
    eventType: 'Wedding',
    customEventType: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  // Location Autocomplete State
  const [locationSuggestions, setLocationSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isSearchingLocation, setIsSearchingLocation] = useState(false);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const d = date.getDate().toString().padStart(2, '0');
    const m = months[date.getMonth()];
    const y = date.getFullYear();
    return `${d}-${m}-${y}`;
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFormData({ ...formData, location: val });
    
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    
    if (val.length > 2) {
      setIsSearchingLocation(true);
      debounceTimer.current = setTimeout(async () => {
        try {
          const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(val)}&limit=5&countrycodes=il`);
          const data = await res.json();
          setLocationSuggestions(data);
          setShowSuggestions(true);
        } catch (err) {
          console.error(err);
        } finally {
          setIsSearchingLocation(false);
        }
      }, 500);
    } else {
      setLocationSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSelectLocation = (loc: string) => {
    setFormData({ ...formData, location: loc });
    setShowSuggestions(false);
  };

  const handleSelect = (category: string, id: string) => {
    setSelections(prev => ({ ...prev, [category]: id }));
    
    // Scroll to top when a mount is selected so the user can see the preview
    if (category === 'mount') {
      setTimeout(() => {
        previewRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }, 50);
    }
  };

  const nextStep = () => {
    if (currentStep < STEPS.length - 1) setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const frameName = FRAMES.find(f => f.id === selections.frame)?.name[lang] || T[lang].none;
    const ropeName = ROPES.find(r => r.id === selections.rope)?.name[lang] || T[lang].none;
    const carpetName = CARPETS.find(c => c.id === selections.carpet)?.name[lang] || T[lang].none;
    const mountName = MOUNTS.find(m => m.id === selections.mount)?.name[lang] || T[lang].none;

    const finalEventType = formData.eventType === 'Other' ? formData.customEventType : T[lang][formData.eventType.toLowerCase() as keyof typeof T['en']];

    const message = `*${T[lang].newRequest}* 📸✨

*${T[lang].eventDetails}:*
• ${T[lang].name}: ${formData.name}
• ${T[lang].email}: ${formData.email}
• ${T[lang].phone}: ${formData.phone}
• ${T[lang].eventType}: ${finalEventType}
• ${T[lang].date}: ${formatDate(formData.date)}
• ${T[lang].location}: ${formData.location}
${formData.notes ? `• ${T[lang].notes}: ${formData.notes}` : ''}

*${T[lang].selections}:*
• ${T[lang].frame}: ${frameName}
• ${T[lang].rope}: ${ropeName}
• ${T[lang].carpet}: ${carpetName}
• ${T[lang].mount}: ${mountName}`;

    const whatsappUrl = `https://wa.me/972524040714?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitted(true);
  };

  const isStepValid = () => {
    if (currentStep === 0) return selections.frame !== '';
    if (currentStep === 1) return selections.rope !== '' && selections.carpet !== '';
    if (currentStep === 2) return selections.mount !== '';
    if (currentStep === 3) return formData.name && formData.email && formData.date;
    return true;
  };

  return (
    <div className="min-h-screen bg-[#050505] overflow-hidden relative">
      <div className="luxury-frame-overlay" />
      <AnimatePresence mode="wait">
        <motion.div 
          key={lang}
          dir={lang === 'he' || lang === 'ar' ? 'rtl' : 'ltr'} 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="min-h-screen flex flex-col md:flex-row w-full"
        >
          {/* Left Panel - Visuals & Branding */}
      <div className="w-full md:w-5/12 lg:w-1/2 relative hidden md:flex flex-col justify-between p-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000" 
            alt="Event Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10">
          <img src="./logo.png" alt="Frame by Karam" className="h-48 md:h-64 object-contain mb-4" />
          <p className="text-neutral-400 tracking-widest uppercase text-xs font-semibold">{T[lang].premiumExperience}</p>
        </div>

        <div className="relative z-10 glass-panel p-8 rounded-3xl max-w-md">
          <h3 className="font-serif text-2xl mb-6">{T[lang].yourSelection}</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-neutral-400 text-sm">{T[lang].mirrorFrame}</span>
              <span className="font-medium text-right">
                {FRAMES.find(f => f.id === selections.frame)?.name[lang] || '—'}
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-neutral-400 text-sm">{T[lang].redCarpetSetup}</span>
              <span className="font-medium text-right flex items-center gap-2">
                {selections.rope && (
                  <img src={ROPES.find(r => r.id === selections.rope)?.image} alt="Rope" className="w-5 h-5 rounded-full object-cover border border-white/20" />
                )}
                {ROPES.find(r => r.id === selections.rope)?.name[lang] || '—'}
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-neutral-400 text-sm">{T[lang].carpet}</span>
              <span className="font-medium text-right flex items-center gap-2">
                {selections.carpet && (
                  <img src={CARPETS.find(c => c.id === selections.carpet)?.image} alt="Carpet" className="w-5 h-5 rounded-full object-cover border border-white/20" />
                )}
                {CARPETS.find(c => c.id === selections.carpet)?.name[lang] || '—'}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-neutral-400 text-sm">{T[lang].photoMount}</span>
              <span className="font-medium text-right flex items-center gap-2">
                {selections.mount && (
                  <img src={MOUNTS.find(m => m.id === selections.mount)?.image} alt="Mount" className="w-5 h-5 rounded object-cover border border-white/20" />
                )}
                {MOUNTS.find(m => m.id === selections.mount)?.name[lang] || '—'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Configurator */}
      <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col min-h-screen bg-[#0a0a0a] relative z-10 shadow-2xl">
        
        {/* Mobile Header */}
        <div className="md:hidden p-6 border-b border-white/10 bg-[#050505] flex justify-center">
          <img src="./logo.png" alt="Frame by Karam" className="h-32 object-contain" />
        </div>

        {/* Progress Bar */}
        <div className="px-8 pt-8 pb-10">
          <div className="flex justify-end mb-8 gap-2">
            <button onClick={() => setLang('en')} className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${lang === 'en' ? 'bg-[#C5A059] text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}>EN</button>
            <button onClick={() => setLang('he')} className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${lang === 'he' ? 'bg-[#C5A059] text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}>HE</button>
            <button onClick={() => setLang('ar')} className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${lang === 'ar' ? 'bg-[#C5A059] text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}>AR</button>
          </div>
          
          <div className="relative px-2 md:px-6">
            {/* Connecting Line */}
            <div className="absolute top-4 start-6 end-6 md:start-10 md:end-10 h-[1px] bg-white/10 z-0" />
            <div 
              className="absolute top-4 start-6 md:start-10 h-[1px] gold-gradient z-0 transition-all duration-700 ease-in-out"
              style={{ width: `calc(${(currentStep / (STEPS.length - 1)) * 100}% - 3rem)` }}
            />
            
            <div className="relative z-10 flex justify-between">
              {STEPS.map((step, idx) => {
                const isCompleted = idx < currentStep;
                const isCurrent = idx === currentStep;
                
                return (
                  <div key={step.id} className="flex flex-col items-center relative">
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-500 shadow-lg ${
                        isCompleted 
                          ? 'gold-gradient text-black' 
                          : isCurrent 
                            ? 'bg-[#0a0a0a] border border-[#C5A059] text-[#C5A059]' 
                            : 'bg-[#0a0a0a] border border-white/10 text-neutral-600'
                      }`}
                    >
                      {isCompleted ? <Check className="w-4 h-4" /> : `0${idx + 1}`}
                    </div>
                    <div className={`absolute top-10 w-20 md:w-24 text-center text-[9px] md:text-[10px] uppercase tracking-widest font-medium transition-colors duration-300 ${
                      isCurrent ? 'text-[#C5A059]' : isCompleted ? 'text-white/70' : 'text-neutral-600'
                    }`}>
                      {step.title[lang]}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto px-8 py-6 custom-scrollbar">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center h-full text-center space-y-6"
              >
                <div className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center mb-4">
                  <Check className="w-10 h-10 text-black" />
                </div>
                <h2 className="font-serif text-4xl">{T[lang].successTitle}</h2>
                <p className="text-neutral-400 max-w-md">
                  {T[lang].successMessage}
                </p>
                <button 
                  onClick={() => window.location.reload()}
                  className="mt-8 px-8 py-3 rounded-full border border-white/20 hover:bg-white/5 transition-colors"
                >
                  Start New Reservation
                </button>
              </motion.div>
            ) : (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-xl mx-auto w-full"
              >
                <div className="mb-10">
                  <h2 className="font-serif text-3xl md:text-4xl mb-2">{STEPS[currentStep].title[lang]}</h2>
                  <p className="text-neutral-400">{STEPS[currentStep].subtitle[lang]}</p>
                </div>

                {currentStep === 0 && (
                  <div className="space-y-6">
                    <div className="aspect-[4/5] sm:aspect-video rounded-2xl border border-white/10 overflow-hidden bg-white/5 relative shadow-2xl">
                      {selections.frame ? (
                        <motion.img 
                          key={selections.frame}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          src={FRAMES.find(f => f.id === selections.frame)?.image} 
                          alt="Selected Frame" 
                          className="w-full h-full object-cover absolute inset-0"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-neutral-500 text-sm">{T[lang].selectFramePreview}</span>
                        </div>
                      )}
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {FRAMES.map((frame) => (
                        <button
                          key={frame.id}
                          onClick={() => handleSelect('frame', frame.id)}
                          className={`group relative aspect-[3/4] rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                            selections.frame === frame.id ? 'border-[#C5A059]' : 'border-transparent hover:border-white/20'
                          }`}
                        >
                          <img src={frame.image} alt={frame.name.en} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col items-center text-center">
                            <span className="font-medium text-xs sm:text-sm">{frame.name[lang]}</span>
                          </div>
                          {selections.frame === frame.id && (
                            <div className="absolute top-2 right-2 w-5 h-5 rounded-full gold-gradient flex items-center justify-center shadow-lg">
                              <Check className="w-3 h-3 text-black" />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 1 && (
                  <div className="space-y-10">
                    <div>
                      <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-[#C5A059]" />
                        {T[lang].rope}
                      </h3>
                      
                      <div className="mb-4 aspect-video rounded-2xl border border-white/10 overflow-hidden bg-white/5 relative shadow-lg">
                        {selections.rope ? (
                          <motion.img 
                            key={selections.rope}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            src={ROPES.find(r => r.id === selections.rope)?.image} 
                            alt="Selected Rope" 
                            className="w-full h-full object-cover absolute inset-0"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-neutral-500 text-sm">{T[lang].selectRopePreview}</span>
                          </div>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        {ROPES.map((rope) => (
                          <button
                            key={rope.id}
                            onClick={() => handleSelect('rope', rope.id)}
                            className={`p-3 rounded-xl border transition-all duration-300 flex items-center gap-3 ${
                              selections.rope === rope.id 
                                ? 'border-[#C5A059] bg-[#C5A059]/10' 
                                : 'border-white/10 hover:border-white/30 bg-white/5'
                            }`}
                          >
                            <div className="w-10 h-10 rounded-full shadow-inner border border-white/20 overflow-hidden shrink-0">
                              <img src={rope.image} alt={rope.name.en} className="w-full h-full object-cover" />
                            </div>
                            <span className={`font-medium text-sm ${lang === 'ar' || lang === 'he' ? 'text-right' : 'text-left'}`}>{rope.name[lang]}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                        <ImageIcon className="w-5 h-5 text-[#C5A059]" />
                        {T[lang].carpet}
                      </h3>
                      
                      <div className="mb-4 aspect-video rounded-2xl border border-white/10 overflow-hidden bg-white/5 relative shadow-lg">
                        {selections.carpet ? (
                          <motion.img 
                            key={selections.carpet}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            src={CARPETS.find(c => c.id === selections.carpet)?.image} 
                            alt="Selected Carpet" 
                            className="w-full h-full object-cover absolute inset-0"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-neutral-500 text-sm">{T[lang].selectCarpetPreview}</span>
                          </div>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        {CARPETS.map((carpet) => (
                          <button
                            key={carpet.id}
                            onClick={() => handleSelect('carpet', carpet.id)}
                            className={`p-3 rounded-xl border transition-all duration-300 flex items-center gap-3 ${
                              selections.carpet === carpet.id 
                                ? 'border-[#C5A059] bg-[#C5A059]/10' 
                                : 'border-white/10 hover:border-white/30 bg-white/5'
                            }`}
                          >
                            <div className="w-10 h-10 rounded-full shadow-inner border border-white/20 overflow-hidden shrink-0">
                              <img src={carpet.image} alt={carpet.name.en} className="w-full h-full object-cover" />
                            </div>
                            <span className={`font-medium text-sm ${lang === 'ar' || lang === 'he' ? 'text-right' : 'text-left'}`}>{carpet.name[lang]}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div ref={previewRef} className="aspect-[3/4] sm:aspect-[4/5] rounded-2xl border border-white/10 overflow-hidden bg-white/5 relative shadow-lg">
                      {selections.mount ? (
                        <motion.img 
                          key={selections.mount}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          src={MOUNTS.find(m => m.id === selections.mount)?.image} 
                          alt="Selected Mount" 
                          className="w-full h-full object-contain absolute inset-0 p-4"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-neutral-500 text-sm">{T[lang].selectMountPreview}</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-3">
                      {MOUNTS.map((mount) => (
                        <button
                          key={mount.id}
                          onClick={() => handleSelect('mount', mount.id)}
                          className={`w-full p-3 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${
                            selections.mount === mount.id 
                              ? 'border-[#C5A059] bg-[#C5A059]/10' 
                              : 'border-white/10 hover:border-white/30 bg-white/5'
                          }`}
                        >
                          <div className="w-12 h-12 rounded-xl border border-white/20 overflow-hidden shrink-0 bg-white/5 p-1">
                            <img src={mount.image} alt={mount.name.en} className="w-full h-full object-contain" />
                          </div>
                          <div className={`flex-1 ${lang === 'ar' || lang === 'he' ? 'text-right' : 'text-left'}`}>
                            <h4 className="font-medium text-md mb-0.5">{mount.name[lang]}</h4>
                            <p className="text-neutral-400 text-xs">{mount.desc[lang]}</p>
                          </div>
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                            selections.mount === mount.id ? 'border-[#C5A059] bg-[#C5A059]' : 'border-white/30'
                          }`}>
                            {selections.mount === mount.id && <Check className="w-3 h-3 text-black" />}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <form id="reservation-form" onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm text-neutral-400 flex items-center gap-2">
                          <User className="w-4 h-4" /> {T[lang].formName} *
                        </label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={e => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#C5A059] transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-neutral-400 flex items-center gap-2">
                          <Mail className="w-4 h-4" /> {T[lang].formEmail} *
                        </label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#C5A059] transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-neutral-400 flex items-center gap-2">
                          <Phone className="w-4 h-4" /> {T[lang].formPhone}
                        </label>
                        <input 
                          type="tel" 
                          value={formData.phone}
                          onChange={e => setFormData({...formData, phone: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#C5A059] transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-neutral-400 flex items-center gap-2">
                          <Calendar className="w-4 h-4" /> {T[lang].eventType} *
                        </label>
                        <select
                          value={formData.eventType}
                          onChange={e => setFormData({...formData, eventType: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#C5A059] transition-colors appearance-none"
                        >
                          <option value="Wedding" className="bg-[#0a0a0a] text-white">{T[lang].wedding}</option>
                          <option value="Engagement" className="bg-[#0a0a0a] text-white">{T[lang].engagement}</option>
                          <option value="Birthday" className="bg-[#0a0a0a] text-white">{T[lang].birthday}</option>
                          <option value="Corporate" className="bg-[#0a0a0a] text-white">{T[lang].corporate}</option>
                          <option value="Other" className="bg-[#0a0a0a] text-white">{T[lang].other}</option>
                        </select>
                      </div>
                      {formData.eventType === 'Other' && (
                        <div className="space-y-2">
                          <label className="text-sm text-neutral-400 flex items-center gap-2">
                            <Sparkles className="w-4 h-4" /> {T[lang].customEventType}
                          </label>
                          <input 
                            type="text" 
                            value={formData.customEventType}
                            onChange={e => setFormData({...formData, customEventType: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#C5A059] transition-colors"
                          />
                        </div>
                      )}
                      <div className="space-y-2">
                        <label className="text-sm text-neutral-400 flex items-center gap-2">
                          <Calendar className="w-4 h-4" /> {T[lang].formDate} *
                        </label>
                        <div className="relative">
                          <input 
                            type="date" 
                            required
                            value={formData.date}
                            onChange={e => setFormData({...formData, date: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#C5A059] transition-colors [color-scheme:dark] text-transparent relative z-10"
                          />
                          <div className="absolute inset-0 flex items-center px-4 pointer-events-none z-0">
                            {formData.date ? formatDate(formData.date) : 'DD-MMM-YYYY'}
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2 md:col-span-2 relative">
                        <label className="text-sm text-neutral-400 flex items-center gap-2">
                          <MapPin className="w-4 h-4" /> {T[lang].formLocation}
                        </label>
                        <input 
                          type="text" 
                          value={formData.location}
                          onChange={handleLocationChange}
                          onFocus={() => formData.location.length > 2 && setShowSuggestions(true)}
                          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#C5A059] transition-colors"
                        />
                        {isSearchingLocation && (
                          <div className="absolute right-4 top-11">
                            <div className="w-4 h-4 border-2 border-[#C5A059] border-t-transparent rounded-full animate-spin" />
                          </div>
                        )}
                        <AnimatePresence>
                          {showSuggestions && locationSuggestions.length > 0 && (
                            <motion.div 
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="absolute left-0 right-0 top-full mt-2 bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden z-50 shadow-2xl"
                            >
                              {locationSuggestions.map((loc, i) => (
                                <button
                                  key={i}
                                  type="button"
                                  onClick={() => handleSelectLocation(loc.display_name)}
                                  className="w-full text-left px-4 py-3 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0 text-sm"
                                >
                                  {loc.display_name}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-sm text-neutral-400">{T[lang].formNotes}</label>
                        <textarea 
                          rows={3}
                          value={formData.notes}
                          onChange={e => setFormData({...formData, notes: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#C5A059] transition-colors resize-none"
                          placeholder={T[lang].formNotesPlaceholder}
                        />
                      </div>
                    </div>
                    
                    <div className="mt-8 flex justify-center">
                      <a 
                        href="https://www.instagram.com/framebykaram/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-6 py-3 rounded-xl border border-[#C5A059]/30 bg-[#C5A059]/10 hover:bg-[#C5A059]/20 transition-colors group"
                      >
                        <Instagram className="w-6 h-6 text-[#C5A059] group-hover:scale-110 transition-transform" />
                        <span className="text-[#C5A059] font-medium tracking-wide">{T[lang].followUs}</span>
                      </a>
                    </div>
                  </form>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Actions */}
        {!isSubmitted && (
          <div className="p-8 border-t border-white/10 bg-[#0a0a0a] flex justify-between items-center">
            <button
              onClick={prevStep}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-colors ${
                currentStep === 0 ? 'opacity-0 pointer-events-none' : 'hover:bg-white/5 text-neutral-300'
              }`}
            >
              {lang === 'he' || lang === 'ar' ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
              {T[lang].prevStep}
            </button>
            
            {currentStep < STEPS.length - 1 ? (
              <button
                onClick={nextStep}
                disabled={!isStepValid()}
                className="flex items-center gap-2 px-8 py-3 rounded-full gold-gradient text-black font-medium transition-all hover:opacity-90 disabled:opacity-50 disabled:grayscale"
              >
                {T[lang].nextStep}
                {lang === 'he' || lang === 'ar' ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
              </button>
            ) : (
              <button
                type="submit"
                form="reservation-form"
                disabled={!isStepValid()}
                className="flex items-center gap-2 px-8 py-3 rounded-full gold-gradient text-black font-medium transition-all hover:opacity-90 disabled:opacity-50 disabled:grayscale"
              >
                {T[lang].submitRequest} <Check className="w-5 h-5" />
              </button>
            )}
          </div>
        )}
      </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
