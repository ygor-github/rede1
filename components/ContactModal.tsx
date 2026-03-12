
import React, { useState } from 'react';
import { Language, TranslationSchema } from '../types';

interface ContactModalProps {
  onClose: () => void;
  t: TranslationSchema;
  language: Language;
  jobTitle?: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ onClose, t, language, jobTitle }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const webhookUrl = process.env.LEAD_WEBHOOK_URL;
      const webhookToken = process.env.LEAD_WEBHOOK_TOKEN;

      if (!webhookUrl) {
        throw new Error('Webhook URL not configured');
      }

      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Lead-Token': webhookToken || ''
        },
        body: JSON.stringify({
          ...formData,
          language,
          source: jobTitle ? 'careers' : 'landing-page',
          job_title: jobTitle || undefined,
          timestamp: new Date().toISOString()
        })
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('success');
    } catch (err) {
      console.error('Lead submission failed:', err);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRetry = () => {
    setStatus('idle');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-background-dark/80 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="relative w-full max-w-[500px] bg-card-dark border border-white/10 rounded-2xl overflow-hidden shadow-2xl animate-[fadeIn_0.3s_ease-out]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {status === 'success' ? (
          <div className="p-12 text-center space-y-6">
            <div className="size-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto">
              <span className="material-symbols-outlined text-4xl">check_circle</span>
            </div>
            <h2 className="text-3xl font-black">{t.contactModal.successTitle}</h2>
            <p className="text-white/50">{t.contactModal.successDescription}</p>
            <button
              onClick={onClose}
              className="w-full py-4 bg-primary text-background-dark font-bold rounded-xl"
            >
              {t.contactModal.close}
            </button>
          </div>
        ) : status === 'error' ? (
          <div className="p-12 text-center space-y-6">
            <div className="size-20 bg-red-500/10 rounded-full flex items-center justify-center text-red-400 mx-auto">
              <span className="material-symbols-outlined text-4xl">error</span>
            </div>
            <h2 className="text-3xl font-black">{t.contactModal.errorTitle}</h2>
            <p className="text-white/50">{t.contactModal.errorDescription}</p>
            <button
              onClick={handleRetry}
              className="w-full py-4 bg-primary text-background-dark font-bold rounded-xl"
            >
              ↻ Retry
            </button>
          </div>
        ) : (
          <div className="p-8 lg:p-12">
            <h2 className="text-2xl font-black mb-2 tracking-tight uppercase">
              {jobTitle ? 'Apply for' : 'Redeon'}<span className="text-primary">{jobTitle ? ` ${jobTitle}` : '.cloud'}</span>
            </h2>
            <p className="text-white/50 mb-8 font-medium">
              {jobTitle ? 'Fill in the details below to join our team.' : t.contactModal.description}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2">{t.contactModal.name}</label>
                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder={t.contactModal.placeholderName}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2">{t.contactModal.email}</label>
                  <input
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder={t.contactModal.placeholderEmail}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2">{t.contactModal.company}</label>
                  <input
                    required
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    type="text"
                    placeholder={t.contactModal.placeholderCompany}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2">{t.contactModal.challenge}</label>
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder={t.contactModal.placeholderMessage}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary outline-none transition-colors resize-none"
                />
              </div>

              <button
                disabled={status === 'submitting'}
                type="submit"
                className="w-full bg-primary text-background-dark py-4 rounded-xl font-black text-base mt-4 shadow-[0_10px_30px_rgba(6,249,249,0.2)] hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? (
                  <div className="size-5 border-2 border-background-dark/30 border-t-background-dark rounded-full animate-spin" />
                ) : (
                  <>{t.contactModal.submit} <span className="material-symbols-outlined text-base">send</span></>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
