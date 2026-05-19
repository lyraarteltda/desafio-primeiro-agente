import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronDown, MessageCircle, CheckCircle, X, Zap, Brain, Wifi, Database, Rocket } from 'lucide-react'

const CHECKOUT_URL = 'https://pay.onprofit.com.br/M5Ene7El?off=DESAFIO97'
const WHATSAPP_URL = 'https://wa.me/5511995631610'

function trackViewContent() {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'ViewContent')
  }
}

function CTAButton({ className = '', size = 'default', children }: { className?: string; size?: string; children: React.ReactNode }) {
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackViewContent}
      className={`inline-block font-bold rounded-xl transition-all duration-200 hover:-translate-y-0.5 bg-gradient-to-r from-primary-glow to-primary text-white shadow-[0_0_30px_rgba(233,152,59,0.3)] hover:shadow-[0_0_50px_rgba(233,152,59,0.5)] ${size === 'lg' ? 'text-lg px-10 py-5' : 'text-base px-8 py-4'} ${className}`}
    >
      {children}
    </a>
  )
}

function FadeIn({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function StickyHeader() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/5 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <span className="font-heading font-bold text-lg tracking-tight">
          <span className="text-primary">Maestros</span> da IA
        </span>
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackViewContent}
          className="hidden sm:inline-block text-sm font-semibold px-5 py-2.5 rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
        >
          Garantir Vaga
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(233,152,59,0.08)_0%,transparent_60%)]" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <FadeIn>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-accent-dim text-primary border border-primary/20 mb-6">
            Desafio 5 Dias &middot; Vagas Abertas
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="font-heading text-[clamp(2rem,6vw,3.5rem)] leading-[1.08] font-extrabold tracking-tight mb-5">
            Construa Seu Primeiro Agente de IA em 5 Dias
            <span className="text-primary"> — Sem Programar Uma Linha</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lg sm:text-xl text-muted max-w-xl mx-auto mb-2">
            Não é curso de ChatGPT. Não é tutorial de prompts.<br className="hidden sm:block" />
            Em 5 dias, seu agente vai estar <strong className="text-foreground">rodando, conversando e trabalhando</strong> no seu negócio.
          </p>
        </FadeIn>
        <FadeIn delay={0.25}>
          <p className="text-sm text-muted-foreground mb-8">
            n8n &middot; Claude/GPT &middot; WhatsApp &middot; Banco vetorial &middot; RAG — o stack que empresas reais usam, não o que influenciadores ensinam.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <CTAButton size="lg">QUERO MEU PRIMEIRO AGENTE &rarr; R$97</CTAButton>
          <p className="text-xs text-muted-foreground mt-4">
            7 dias de garantia incondicional &middot; 3x R$37 no cartão &middot; PIX à vista
          </p>
          <p className="text-[11px] text-muted-foreground/70 mt-3 max-w-md mx-auto">
            Ao clicar, você concorda em receber mensagens da Maestros da IA e aceita nossa{' '}
            <a href="https://politica.maestrosdaia.com/" className="underline hover:text-muted-foreground transition-colors">Política de Privacidade</a>.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

function AntiGuru() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <FadeIn>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">O Problema</span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">
                Você não precisa de mais um curso de IA
              </h2>
              <p className="text-muted mb-3">
                O mercado está cheio de cursos que ensinam a digitar no ChatGPT e chamam isso de "dominar IA."
              </p>
              <p className="text-muted mb-3">
                O resultado? Você sai sabendo gerar textos bonitos — mas seu negócio continua igual. Nenhum processo automatizado. Nenhum agente rodando. Zero ROI.
              </p>
              <p className="text-foreground font-semibold">
                Isso porque existe uma diferença brutal entre usar ferramentas de IA e construir agentes que trabalham por você.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="rounded-2xl border border-card-border bg-card p-6 sm:p-8">
              <div className="mb-5">
                <h3 className="text-red font-bold flex items-center gap-2 mb-3">
                  <X className="w-5 h-5" /> O que "cursos de IA" ensinam
                </h3>
                <ul className="space-y-2 text-muted text-sm">
                  <li className="flex items-start gap-2"><span className="text-red mt-0.5">✗</span> Digitar prompts no ChatGPT</li>
                  <li className="flex items-start gap-2"><span className="text-red mt-0.5">✗</span> Gerar imagens no Midjourney</li>
                  <li className="flex items-start gap-2"><span className="text-red mt-0.5">✗</span> Copiar e colar textos genéricos</li>
                  <li className="flex items-start gap-2"><span className="text-red mt-0.5">✗</span> Zero automação real</li>
                  <li className="flex items-start gap-2"><span className="text-red mt-0.5">✗</span> Resultado: mais um PDF de anotações</li>
                </ul>
              </div>
              <div className="h-px bg-card-border my-5" />
              <div>
                <h3 className="text-green font-bold flex items-center gap-2 mb-3">
                  <CheckCircle className="w-5 h-5" /> O que você vai construir aqui
                </h3>
                <ul className="space-y-2 text-muted text-sm">
                  <li className="flex items-start gap-2"><span className="text-green mt-0.5">✓</span> Um agente autônomo com IA</li>
                  <li className="flex items-start gap-2"><span className="text-green mt-0.5">✓</span> Conectado ao seu WhatsApp/Telegram</li>
                  <li className="flex items-start gap-2"><span className="text-green mt-0.5">✓</span> Com memória (banco vetorial + RAG)</li>
                  <li className="flex items-start gap-2"><span className="text-green mt-0.5">✓</span> Conversando com seus clientes 24/7</li>
                  <li className="flex items-start gap-2"><span className="text-green mt-0.5">✓</span> Resultado: um funcionário digital ativo</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

const days = [
  {
    num: 1,
    title: 'Setup + Primeiro Workflow',
    badge: '20 min',
    badgeColor: 'bg-green-dim text-green',
    icon: Zap,
    desc: 'Cria sua conta n8n (grátis), conecta uma API de IA via OpenRouter, e seu primeiro workflow automático dispara. Hoje. Em 20 minutos. Nada de "pré-requisito" ou "aula teórica introdutória."',
    deliverable: 'Workflow rodando que recebe mensagem → processa com IA → responde automaticamente.',
  },
  {
    num: 2,
    title: 'Dando Cérebro ao Agente',
    badge: '25 min',
    badgeColor: 'bg-green-dim text-green',
    icon: Brain,
    desc: 'Conecta Claude ou GPT via OpenRouter, escreve o system prompt do SEU negócio, e o agente começa a entender seu contexto. Não é um chatbot genérico — é um agente que sabe quem você é, o que vende, e como falar com seus clientes.',
    deliverable: 'Agente com personalidade, conhecimento do negócio e capacidade de responder perguntas reais.',
  },
  {
    num: 3,
    title: 'Conectando Canais Reais',
    badge: '25 min',
    badgeColor: 'bg-green-dim text-green',
    icon: Wifi,
    desc: 'Integra WhatsApp (Z-API), Telegram, ou webchat. O agente sai da "janela de teste" e começa a conversar com humanos reais no canal que seus clientes já usam.',
    deliverable: 'Agente respondendo mensagens reais no WhatsApp ou Telegram.',
  },
  {
    num: 4,
    title: 'Memória + Autonomia',
    badge: 'Aula avançada',
    badgeColor: 'bg-[rgba(139,92,246,0.12)] text-[#8b5cf6]',
    icon: Database,
    desc: 'Adiciona Supabase como banco vetorial. RAG básico: o agente agora lembra conversas anteriores e consulta documentos do seu negócio para dar respostas contextuais. Isso é o que separa um chatbot inútil de um agente inteligente.',
    deliverable: 'Agente com memória persistente + base de conhecimento consultável.',
  },
  {
    num: 5,
    title: 'Deploy + Otimização + O Que Vem Depois',
    badge: 'Dia de lançamento',
    badgeColor: 'bg-accent-dim text-primary',
    icon: Rocket,
    desc: 'Seu agente vai ao ar. Monitora as primeiras conversas. Ajusta o prompt baseado em dados reais. E aí vem o reveal: "Esse agente que você construiu é 1 de 16 que formam o Ecossistema Maestro. Agora imagine os outros 15 trabalhando juntos."',
    deliverable: 'Agente de IA rodando 24/7 no seu negócio + roadmap do ecossistema completo.',
    highlight: true,
  },
]

function FiveDayBreakdown() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-transparent via-accent-dim/30 to-transparent">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">O Desafio</span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">5 Dias. 1 Agente. Funcionando de Verdade.</h2>
            <p className="text-muted max-w-lg mx-auto">Cada dia é uma aula de ~20 minutos + exercício prático. No final do dia 5, seu agente está ao vivo.</p>
          </div>
        </FadeIn>
        <div className="space-y-4">
          {days.map((day, i) => {
            const Icon = day.icon
            return (
              <FadeIn key={day.num} delay={i * 0.08}>
                <div className={`rounded-2xl border p-5 sm:p-6 flex gap-4 sm:gap-5 items-start ${day.highlight ? 'border-primary/40 bg-gradient-to-br from-primary-glow/10 to-primary/5' : 'border-card-border bg-card'}`}>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-sm ${day.highlight ? 'bg-primary text-white' : 'bg-accent-dim text-primary'}`}>
                    {day.num}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className={`font-bold text-base sm:text-lg ${day.highlight ? 'text-primary' : ''}`}>
                        {day.title}
                      </h3>
                      <span className={`inline-block px-3 py-0.5 rounded-full text-xs font-bold ${day.badgeColor}`}>
                        {day.badge}
                      </span>
                    </div>
                    <p className="text-muted text-sm mb-2">{day.desc}</p>
                    <p className="text-xs text-muted-foreground"><strong className="text-foreground/80">Entregável:</strong> {day.deliverable}</p>
                  </div>
                  <Icon className={`hidden sm:block w-5 h-5 flex-shrink-0 mt-1 ${day.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  { quote: 'Processo de uma semana →', highlight: '4-6 horas com automação.', author: 'Bruno', role: 'Empresário' },
  { quote: 'Pouco tempo de curso,', highlight: 'já vendi projetos com ticket médio considerável.', author: 'André', role: 'Consultor' },
  { quote: 'Metade do que achava impossível,', highlight: 'hoje faço em casa e no trabalho.', author: 'Ricardo', role: 'Profissional de TI' },
]

function SocialProof() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">Quem Já Fez</span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold">Resultados Reais, Não Promessas</h2>
          </div>
        </FadeIn>
        <div className="grid sm:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <FadeIn key={t.author} delay={i * 0.1}>
              <div className="rounded-2xl border border-card-border bg-card p-6 h-full flex flex-col">
                <div className="text-primary text-3xl mb-3">"</div>
                <p className="text-muted flex-1 mb-4">
                  {t.quote} <strong className="text-foreground">{t.highlight}</strong>
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-glow to-primary flex items-center justify-center text-white text-sm font-bold">
                    {t.author[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.author}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function ComparisonTable() {
  const rows = [
    { label: 'Stack', old: 'ChatGPT + Midjourney', new: 'n8n + OpenRouter + Supabase + RAG' },
    { label: 'Resultado', old: 'Saber gerar textos/imagens', new: '1 agente deployed no seu negócio' },
    { label: 'Automação', old: 'Nenhuma', new: 'Agente autônomo 24/7' },
    { label: 'Duração', old: 'Semanas de vídeos teóricos', new: '5 dias, 20 min/dia' },
    { label: 'Preço', old: 'R$497+', new: 'R$97' },
  ]
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">Por Que Isso é Diferente</span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold">Agentes, Não Prompts</h2>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-card-border bg-card p-6">
              <h3 className="text-muted-foreground font-bold mb-5">Cursos de IA tradicionais</h3>
              <div className="space-y-4">
                {rows.map(r => (
                  <div key={r.label} className="flex justify-between items-baseline border-b border-card-border pb-3 last:border-0">
                    <span className="text-muted-foreground text-sm">{r.label}</span>
                    <span className="text-muted text-sm text-right">{r.old}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary-glow/5 to-primary/5 p-6">
              <h3 className="text-primary font-bold mb-5">Desafio Primeiro Agente</h3>
              <div className="space-y-4">
                {rows.map(r => (
                  <div key={r.label} className="flex justify-between items-baseline border-b border-primary/10 pb-3 last:border-0">
                    <span className="text-muted text-sm">{r.label}</span>
                    <span className={`font-semibold text-sm text-right ${r.label === 'Preço' ? 'text-green' : 'text-foreground'}`}>{r.new}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

function Founders() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <div className="rounded-2xl border border-card-border bg-card p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start">
            <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-primary-glow to-primary flex items-center justify-center text-white text-2xl font-bold">
              AE
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">Quem Ensina</span>
              <h3 className="font-heading font-bold text-lg mb-3">Arthur Endo & Lyria Zoccal</h3>
              <p className="text-muted text-sm mb-3">
                Nenhum dos dois sabia programar. Em 15 meses, construíram um sistema de 7 agentes autônomos que gerou R$2,5 milhões — começando de um simples curso de violão.
              </p>
              <p className="text-muted text-sm mb-3">
                Arthur: Doutor Honoris Causa, músico premiado que se tornou pioneiro em agentes de IA. Lyria: ex-consultora SAP/ERP, especialista em processos corporativos.
              </p>
              <p className="text-xs text-muted-foreground">
                Juntos, já implementaram sistemas de IA em 50+ empresas, 6 setores, e formaram 500+ alunos.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section id="checkout" className="py-16 sm:py-24">
      <div className="max-w-lg mx-auto px-4 sm:px-6">
        <FadeIn>
          <div className="rounded-2xl border border-primary/30 bg-gradient-to-b from-primary-glow/10 via-card to-card p-8 sm:p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative">
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">Inscrição</span>
              <h2 className="font-heading font-bold text-xl mb-1">Desafio Primeiro Agente IA</h2>
              <p className="text-muted text-sm mb-6">5 dias &middot; 1 agente &middot; rodando no seu negócio</p>
              <p className="text-muted-foreground line-through text-xl mb-1">R$497</p>
              <p className="font-heading text-5xl sm:text-6xl font-extrabold text-primary mb-1">R$97</p>
              <p className="text-xs text-muted-foreground mb-8">ou 3x R$37 &middot; PIX à vista com desconto</p>
              <CTAButton size="lg" className="w-full text-center block">
                QUERO CONSTRUIR MEU AGENTE
              </CTAButton>
              <p className="text-[11px] text-muted-foreground/70 mt-4 text-center">
                Ao clicar, você concorda em receber mensagens da Maestros da IA e aceita nossa{' '}
                <a href="https://politica.maestrosdaia.com/" className="underline hover:text-muted-foreground transition-colors">Política de Privacidade</a>.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-green" /> 7 dias de garantia incondicional</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-green" /> Acesso imediato</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-green" /> Templates n8n inclusos</span>
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-green-dim text-green">Vagas abertas</span>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[rgba(59,130,246,0.12)] text-[#3b82f6]">Próxima turma: [DATA]</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

const faqs = [
  {
    q: 'Preciso saber programar?',
    a: 'Não. O stack inteiro (n8n, OpenRouter, Supabase) é visual e no-code. Você arrasta blocos. Se sabe usar planilha, sabe fazer isso.',
  },
  {
    q: 'Quanto tempo por dia?',
    a: '~20 minutos de aula + ~30 minutos de implementação. Total: menos de 1 hora por dia, durante 5 dias.',
  },
  {
    q: 'O agente funciona com que tipo de negócio?',
    a: 'Qualquer negócio que atende clientes: e-commerce, serviços, consultoria, freelance, SaaS, clínicas. O agente se adapta ao SEU contexto — ele lê os documentos que VOCÊ alimenta.',
  },
  {
    q: 'Quanto custa manter o agente rodando depois?',
    a: 'n8n tem plano gratuito (suficiente para começar). OpenRouter cobra por uso (~R$10-30/mês para volume normal). Supabase tem free tier. Custo mensal real: R$0 a R$50, dependendo do volume.',
  },
  {
    q: 'Qual a diferença entre isso e a Formação Maestros (R$997/R$3K)?',
    a: 'O Desafio te dá 1 agente em 5 dias. A Formação te dá 16+ agentes em 10 semanas, formando um ecossistema completo com dashboard CEO, prospecção automatizada, agente SDR, e mais. Se gostar do Desafio, pode fazer upgrade — e os R$97 viram crédito na Formação.',
  },
  {
    q: 'E se eu não gostar?',
    a: '7 dias de garantia incondicional. Sem perguntas, sem formulário, sem consultor tentando te convencer a ficar. Pede o reembolso e pronto.',
  },
]

function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-center mb-10">Perguntas Frequentes</h2>
        </FadeIn>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="rounded-xl border border-card-border bg-card overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
                  aria-expanded={open === i}
                >
                  <span className="font-semibold text-sm sm:text-base pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-96' : 'max-h-0'}`}>
                  <p className="px-5 pb-4 text-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <FadeIn>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">
            Daqui a 5 dias, seu agente pode estar rodando.
          </h2>
          <p className="text-muted mb-8">Ou daqui a 5 dias, você ainda vai estar assistindo tutorial de prompt.</p>
          <CTAButton size="lg">QUERO MEU PRIMEIRO AGENTE &rarr; R$97</CTAButton>
          <p className="text-[11px] text-muted-foreground/70 mt-4 max-w-md mx-auto">
            Ao clicar, você concorda em receber mensagens da Maestros da IA e aceita nossa{' '}
            <a href="https://politica.maestrosdaia.com/" className="underline hover:text-muted-foreground transition-colors">Política de Privacidade</a>.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-card-border py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-xs text-muted-foreground mb-2">
          Maestria Academy Ltda &middot; CNPJ 62.434.578/0001-03 &middot; Todos os direitos reservados
        </p>
        <p className="text-xs text-muted-foreground mb-2">
          Este produto não garante resultados. Resultados dependem do empenho individual de cada aluno.
        </p>
        <a href="https://politica.maestrosdaia.com/" className="text-xs text-muted-foreground underline hover:text-foreground transition-colors">Política de Privacidade</a>
      </div>
    </footer>
  )
}

function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    >
      <MessageCircle className="w-7 h-7 text-white" fill="white" />
    </a>
  )
}

export default function App() {
  return (
    <>
      <StickyHeader />
      <main>
        <Hero />
        <AntiGuru />
        <FiveDayBreakdown />
        <SocialProof />
        <ComparisonTable />
        <Founders />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
