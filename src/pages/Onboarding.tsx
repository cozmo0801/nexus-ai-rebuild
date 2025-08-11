import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  ArrowRight, 
  MessageCircle, 
  Target, 
  DollarSign, 
  BarChart3,
  CheckCircle,
  Zap,
  Users,
  TrendingUp,
  Shield,
  ChevronRight,
  Calculator,
  Sparkles,
  Send,
  AlertCircle
} from "lucide-react";
import { useState, useEffect } from "react";

const Onboarding = () => {
  const [currentFrame, setCurrentFrame] = useState(1);
  const [selectedChallenge, setSelectedChallenge] = useState('');
  const [estimatedSavings, setEstimatedSavings] = useState(0);
  const [sliderValue, setSliderValue] = useState(50);
  const [formStep, setFormStep] = useState(1);
  const [animatedText, setAnimatedText] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    industry: '',
    website: '',
    specificNeeds: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const challenges = [
    {
      id: 'inquiries',
      title: 'Too Many Customer Inquiries',
      description: 'Overwhelmed by support requests',
      icon: MessageCircle,
      color: 'text-accent-teal'
    },
    {
      id: 'leads',
      title: 'Struggling with Lead Generation',
      description: 'Need more qualified prospects',
      icon: Target,
      color: 'text-accent-orange'
    },
    {
      id: 'costs',
      title: 'High Operational Costs',
      description: 'Looking to reduce expenses',
      icon: DollarSign,
      color: 'text-accent-green'
    },
    {
      id: 'insights',
      title: 'Lack of Customer Insights',
      description: 'Need better data analysis',
      icon: BarChart3,
      color: 'text-accent-purple'
    }
  ];

  const dynamicTexts = [
    "Tired of Manual Customer Service?",
    "Frustrated with Lost Leads?", 
    "Imagine 24/7 AI Support!",
    "Welcome to NexusCore AI"
  ];

  const industries = [
    'E-commerce', 'Professional Services', 'Healthcare', 'Real Estate', 
    'Manufacturing', 'SaaS', 'Education', 'Hospitality', 'Other'
  ];

  useEffect(() => {
    if (currentFrame === 1) {
      const interval = setInterval(() => {
        setAnimatedText(prev => (prev + 1) % dynamicTexts.length);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [currentFrame]);

  useEffect(() => {
    if (selectedChallenge && sliderValue) {
      let savings = 0;
      switch (selectedChallenge) {
        case 'inquiries':
          savings = sliderValue * 30 * 12; // $30 per inquiry per month
          break;
        case 'leads':
          savings = sliderValue * 100 * 12; // $100 per lead per month
          break;
        case 'costs':
          savings = sliderValue * 50 * 12; // $50 savings per month
          break;
        case 'insights':
          savings = sliderValue * 75 * 12; // $75 value per month
          break;
      }
      setEstimatedSavings(savings);
    }
  }, [selectedChallenge, sliderValue]);

  const nextFrame = () => {
    setCurrentFrame(prev => Math.min(prev + 1, 6));
  };

  const handleChallengeSelect = (challengeId: string) => {
    setSelectedChallenge(challengeId);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/onboarding', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          selectedChallenge,
          estimatedSavings,
          completedAt: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        nextFrame();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getChallengeDetails = () => {
    return challenges.find(c => c.id === selectedChallenge);
  };

  // Frame 1: The Hook
  if (currentFrame === 1) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Progress Bar */}
        <div className="fixed top-16 left-0 right-0 z-40">
          <div className="h-1 bg-secondary/30">
            <div 
              className="h-full bg-gradient-to-r from-accent-teal to-accent-purple transition-all duration-500"
              style={{ width: `${(currentFrame / 6) * 100}%` }}
            />
          </div>
        </div>

        <section className="pt-32 pb-16 min-h-screen flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              {/* Dynamic Headline */}
              <div className="mb-8">
                <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-accent-teal to-accent-purple bg-clip-text text-transparent min-h-[200px] flex items-center justify-center">
                  <span className="animate-pulse">
                    {dynamicTexts[animatedText]}
                  </span>
                </h1>
              </div>

              {/* Engaging Visual */}
              <div className="mb-12">
                <div className="relative mx-auto w-32 h-32 mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-teal to-accent-purple rounded-full animate-pulse opacity-20"></div>
                  <div className="absolute inset-2 bg-gradient-to-r from-accent-purple to-accent-pink rounded-full animate-ping opacity-30"></div>
                  <div className="absolute inset-4 glass-card rounded-full flex items-center justify-center backdrop-blur-glass border border-glass">
                    <Zap className="h-12 w-12 text-accent-teal animate-bounce" />
                  </div>
                </div>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Transform your business with AI automation that works 24/7, reduces costs by 60%, and increases customer satisfaction to 98.5%
                </p>
              </div>

              {/* Initial CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button 
                  onClick={nextFrame}
                  variant="hero" 
                  size="lg" 
                  className="w-full sm:w-auto group text-lg px-8 py-4"
                >
                  <Sparkles className="h-6 w-6 mr-3 group-hover:animate-spin" />
                  <span className="relative z-10">Yes, Let's Do It!</span>
                  <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  onClick={nextFrame}
                  variant="heroSecondary" 
                  size="lg" 
                  className="w-full sm:w-auto text-lg px-8 py-4"
                >
                  Tell Me More First
                </Button>
              </div>

              {/* Progress Indicator */}
              <div className="mt-12 text-accent-teal">
                <p className="text-sm">Step 1 of 6 - Let's get started!</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Frame 2: Problem Identification
  if (currentFrame === 2) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Progress Bar */}
        <div className="fixed top-16 left-0 right-0 z-40">
          <div className="h-1 bg-secondary/30">
            <div 
              className="h-full bg-gradient-to-r from-accent-teal to-accent-purple transition-all duration-500"
              style={{ width: `${(currentFrame / 6) * 100}%` }}
            />
          </div>
        </div>

        <section className="pt-32 pb-16 min-h-screen flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent-teal to-accent-purple bg-clip-text text-transparent">
                What's Your Biggest Business Challenge?
              </h1>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Help us understand your needs so we can show you the perfect AI solution
              </p>

              {/* Challenge Selection Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {challenges.map((challenge) => {
                  const IconComponent = challenge.icon;
                  const isSelected = selectedChallenge === challenge.id;
                  
                  return (
                    <div
                      key={challenge.id}
                      onClick={() => handleChallengeSelect(challenge.id)}
                      className={`glass-card rounded-3xl p-8 cursor-pointer transition-all duration-300 border backdrop-blur-glass group hover:scale-105 ${
                        isSelected 
                          ? 'border-accent-teal bg-accent-teal/10 shadow-glow' 
                          : 'border-glass hover:border-accent-teal/50'
                      }`}
                    >
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-glass mb-6 ${challenge.color} shadow-inner`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {challenge.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {challenge.description}
                      </p>
                      {isSelected && (
                        <div className="mt-4">
                          <CheckCircle className="h-6 w-6 text-accent-green mx-auto" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Next Button */}
              {selectedChallenge && (
                <div className="animate-fade-in">
                  <Button 
                    onClick={nextFrame}
                    variant="hero" 
                    size="lg" 
                    className="group text-lg px-8 py-4"
                  >
                    <span className="relative z-10">Show Me The Solution</span>
                    <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              )}

              {/* Progress Indicator */}
              <div className="mt-12 text-accent-teal">
                <p className="text-sm">Step 2 of 6 - Understanding your needs</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Frame 3: Solution Showcase
  if (currentFrame === 3) {
    const challenge = getChallengeDetails();
    
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Progress Bar */}
        <div className="fixed top-16 left-0 right-0 z-40">
          <div className="h-1 bg-secondary/30">
            <div 
              className="h-full bg-gradient-to-r from-accent-teal to-accent-purple transition-all duration-500"
              style={{ width: `${(currentFrame / 6) * 100}%` }}
            />
          </div>
        </div>

        <section className="pt-32 pb-16 min-h-screen flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent-teal to-accent-purple bg-clip-text text-transparent">
                  {selectedChallenge === 'inquiries' && "Solving Your Customer Inquiry Overload with Smart AI Chatbots"}
                  {selectedChallenge === 'leads' && "Boosting Your Lead Generation with AI-Powered Automation"}
                  {selectedChallenge === 'costs' && "Reducing Your Operational Costs with Intelligent AI Solutions"}
                  {selectedChallenge === 'insights' && "Unlocking Customer Insights with Advanced AI Analytics"}
                </h1>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Feature Highlight */}
                <div className="space-y-6">
                  <div className="glass-card rounded-3xl p-8 border border-glass backdrop-blur-glass">
                    {challenge && (
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-glass ${challenge.color} shadow-inner mb-6`}>
                        <challenge.icon className="h-8 w-8" />
                      </div>
                    )}
                    
                    <h3 className="text-2xl font-bold text-white mb-4">Key Benefits:</h3>
                    <ul className="space-y-3">
                      {selectedChallenge === 'inquiries' && (
                        <>
                          <li className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-accent-green" />
                            <span className="text-white">24/7 automated customer support</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-accent-green" />
                            <span className="text-white">98.5% customer satisfaction rate</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-accent-green" />
                            <span className="text-white">60% reduction in support costs</span>
                          </li>
                        </>
                      )}
                      {selectedChallenge === 'leads' && (
                        <>
                          <li className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-accent-green" />
                            <span className="text-white">40% increase in qualified leads</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-accent-green" />
                            <span className="text-white">Automated lead scoring & nurturing</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-accent-green" />
                            <span className="text-white">CRM integration & tracking</span>
                          </li>
                        </>
                      )}
                      {selectedChallenge === 'costs' && (
                        <>
                          <li className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-accent-green" />
                            <span className="text-white">Up to 60% cost reduction</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-accent-green" />
                            <span className="text-white">Automated workflow optimization</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-accent-green" />
                            <span className="text-white">Reduced staffing requirements</span>
                          </li>
                        </>
                      )}
                      {selectedChallenge === 'insights' && (
                        <>
                          <li className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-accent-green" />
                            <span className="text-white">Real-time customer analytics</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-accent-green" />
                            <span className="text-white">Predictive behavior modeling</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-accent-green" />
                            <span className="text-white">Custom dashboard reporting</span>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>

                  {/* Testimonial */}
                  <div className="glass-card rounded-2xl p-6 border border-glass backdrop-blur-glass">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent-teal to-accent-purple flex items-center justify-center">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">Sarah Chen</p>
                        <p className="text-muted-foreground text-sm">Tech Startup CEO</p>
                      </div>
                    </div>
                    <p className="text-white/90 italic">
                      "NexusCore AI transformed our customer service. We went from overwhelmed to optimized in just 2 weeks!"
                    </p>
                  </div>
                </div>

                {/* Visual Demo */}
                <div className="glass-card rounded-3xl p-8 border border-glass backdrop-blur-glass text-center">
                  <div className="space-y-6">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-r from-accent-teal to-accent-purple rounded-full flex items-center justify-center animate-pulse">
                      <TrendingUp className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Live Demo</h3>
                    <p className="text-muted-foreground">
                      Watch how our AI solution works in real-time for businesses just like yours.
                    </p>
                    <div className="bg-accent-green/20 rounded-xl p-4">
                      <p className="text-accent-green font-bold text-2xl">
                        {selectedChallenge === 'inquiries' && "98.5% Satisfaction"}
                        {selectedChallenge === 'leads' && "+40% More Leads"}
                        {selectedChallenge === 'costs' && "60% Cost Savings"}
                        {selectedChallenge === 'insights' && "3x Faster Insights"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="text-center mt-12">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Button 
                    variant="heroSecondary" 
                    size="lg" 
                    className="w-full sm:w-auto text-lg px-8 py-4"
                  >
                    See How It Works
                  </Button>
                  <Button 
                    onClick={nextFrame}
                    variant="hero" 
                    size="lg" 
                    className="w-full sm:w-auto group text-lg px-8 py-4"
                  >
                    <span className="relative z-10">Looks Good, What's Next?</span>
                    <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="mt-12 text-center text-accent-teal">
                <p className="text-sm">Step 3 of 6 - Your perfect solution</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Frame 4: Value Calculator
  if (currentFrame === 4) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Progress Bar */}
        <div className="fixed top-16 left-0 right-0 z-40">
          <div className="h-1 bg-secondary/30">
            <div 
              className="h-full bg-gradient-to-r from-accent-teal to-accent-purple transition-all duration-500"
              style={{ width: `${(currentFrame / 6) * 100}%` }}
            />
          </div>
        </div>

        <section className="pt-32 pb-16 min-h-screen flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent-teal to-accent-purple bg-clip-text text-transparent">
                Estimate Your Potential Savings
              </h1>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                See the real financial impact NexusCore AI could have on your business
              </p>

              <div className="glass-card rounded-3xl p-12 border border-glass backdrop-blur-glass mb-8">
                <div className="flex items-center justify-center gap-4 mb-8">
                  <Calculator className="h-8 w-8 text-accent-teal" />
                  <h2 className="text-2xl font-bold text-white">Interactive ROI Calculator</h2>
                </div>

                <div className="space-y-8">
                  <div className="text-left">
                    <label className="block text-lg font-semibold text-white mb-4">
                      {selectedChallenge === 'inquiries' && "How many customer inquiries do you get per day?"}
                      {selectedChallenge === 'leads' && "How many leads do you want to generate per month?"}
                      {selectedChallenge === 'costs' && "What's your estimated monthly operational cost?"}
                      {selectedChallenge === 'insights' && "How much would better insights be worth per month?"}
                    </label>
                    
                    <div className="relative">
                      <input
                        type="range"
                        min="10"
                        max="500"
                        value={sliderValue}
                        onChange={(e) => setSliderValue(Number(e.target.value))}
                        className="w-full h-3 bg-secondary/50 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-2">
                        <span>10</span>
                        <span className="text-accent-teal font-semibold text-lg">{sliderValue}</span>
                        <span>500</span>
                      </div>
                    </div>
                  </div>

                  {/* Dynamic Results */}
                  <div className="bg-gradient-to-r from-accent-green/20 to-accent-teal/20 rounded-2xl p-8">
                    <h3 className="text-3xl font-bold text-accent-green mb-4">
                      You could save up to
                    </h3>
                    <p className="text-6xl font-bold text-accent-green mb-4">
                      ${estimatedSavings.toLocaleString()}
                    </p>
                    <p className="text-lg text-foreground/80">per year with NexusCore AI</p>
                    
                    <div className="mt-6 text-sm text-muted-foreground">
                      <p>
                        * Based on industry averages and typical improvements seen with AI automation
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Button 
                onClick={nextFrame}
                variant="hero" 
                size="lg" 
                className="group text-lg px-8 py-4"
              >
                <span className="relative z-10">Ready to See My Savings!</span>
                <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Progress Indicator */}
              <div className="mt-12 text-accent-teal">
                <p className="text-sm">Step 4 of 6 - Calculating your ROI</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Frame 5: Contact Form
  if (currentFrame === 5) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Progress Bar */}
        <div className="fixed top-16 left-0 right-0 z-40">
          <div className="h-1 bg-secondary/30">
            <div 
              className="h-full bg-gradient-to-r from-accent-teal to-accent-purple transition-all duration-500"
              style={{ width: `${(currentFrame / 6) * 100}%` }}
            />
          </div>
        </div>

        <section className="pt-32 pb-16 min-h-screen">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent-teal to-accent-purple bg-clip-text text-transparent">
                  Great! Let's Get You Started
                </h1>
                <p className="text-xl text-muted-foreground">
                  To help us tailor the perfect AI solution for your business, please tell us a little more about you.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-8">
                <div className="glass-card rounded-3xl p-8 border border-glass backdrop-blur-glass">
                  {/* Form Step Indicator */}
                  <div className="flex items-center justify-center gap-2 mb-8">
                    {[1, 2, 3].map((step) => (
                      <div
                        key={step}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          step <= formStep 
                            ? 'bg-accent-teal' 
                            : 'bg-secondary/50'
                        }`}
                      />
                    ))}
                    <span className="ml-4 text-accent-teal text-sm">
                      Step {formStep} of 3
                    </span>
                  </div>

                  {/* Step 1: Basic Contact */}
                  {formStep === 1 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                        Basic Contact Information
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium text-white mb-2 block">
                            Full Name *
                          </label>
                          <Input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            placeholder="John Doe"
                            className="bg-secondary/50 border-glass text-white placeholder:text-muted-foreground"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="text-sm font-medium text-white mb-2 block">
                            Email Address *
                          </label>
                          <Input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            placeholder="john@company.com"
                            className="bg-secondary/50 border-glass text-white placeholder:text-muted-foreground"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="text-sm font-medium text-white mb-2 block">
                            Phone Number
                          </label>
                          <Input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            placeholder="+1 (555) 123-4567"
                            className="bg-secondary/50 border-glass text-white placeholder:text-muted-foreground"
                          />
                        </div>
                      </div>

                      <Button
                        type="button"
                        onClick={() => setFormStep(2)}
                        disabled={!formData.name || !formData.email}
                        variant="hero"
                        size="lg"
                        className="w-full group"
                      >
                        <span className="relative z-10">Continue</span>
                        <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  )}

                  {/* Step 2: Business Context */}
                  {formStep === 2 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                        Business Information
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium text-white mb-2 block">
                            Business Name *
                          </label>
                          <Input
                            type="text"
                            value={formData.businessName}
                            onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                            placeholder="Your Company Name"
                            className="bg-secondary/50 border-glass text-white placeholder:text-muted-foreground"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="text-sm font-medium text-white mb-2 block">
                            Industry *
                          </label>
                          <select
                            value={formData.industry}
                            onChange={(e) => setFormData({...formData, industry: e.target.value})}
                            className="w-full p-3 bg-secondary/50 border border-glass text-white rounded-lg"
                            required
                          >
                            <option value="">Select your industry</option>
                            {industries.map(industry => (
                              <option key={industry} value={industry} className="bg-secondary text-white">
                                {industry}
                              </option>
                            ))}
                          </select>
                        </div>
                        
                        <div>
                          <label className="text-sm font-medium text-white mb-2 block">
                            Current Website URL
                          </label>
                          <Input
                            type="url"
                            value={formData.website}
                            onChange={(e) => setFormData({...formData, website: e.target.value})}
                            placeholder="https://yourwebsite.com"
                            className="bg-secondary/50 border-glass text-white placeholder:text-muted-foreground"
                          />
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Button
                          type="button"
                          onClick={() => setFormStep(1)}
                          variant="heroSecondary"
                          size="lg"
                          className="w-full"
                        >
                          Back
                        </Button>
                        <Button
                          type="button"
                          onClick={() => setFormStep(3)}
                          disabled={!formData.businessName || !formData.industry}
                          variant="hero"
                          size="lg"
                          className="w-full group"
                        >
                          <span className="relative z-10">Continue</span>
                          <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Specific Needs */}
                  {formStep === 3 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                        Specific Requirements
                      </h3>
                      
                      <div>
                        <label className="text-sm font-medium text-white mb-2 block">
                          Any specific questions or needs you have?
                        </label>
                        <Textarea
                          value={formData.specificNeeds}
                          onChange={(e) => setFormData({...formData, specificNeeds: e.target.value})}
                          placeholder="Tell us about your specific requirements, timeline, or any questions you have..."
                          className="bg-secondary/50 border-glass text-white placeholder:text-muted-foreground min-h-[120px]"
                        />
                      </div>

                      {/* Summary */}
                      <div className="bg-accent-teal/10 rounded-xl p-6 border border-accent-teal/30">
                        <h4 className="text-lg font-semibold text-accent-teal mb-4">Your AI Solution Summary:</h4>
                        <div className="space-y-2 text-sm text-white/80">
                          <p><strong>Challenge:</strong> {getChallengeDetails()?.title}</p>
                          <p><strong>Potential Savings:</strong> ${estimatedSavings.toLocaleString()} per year</p>
                          <p><strong>Business:</strong> {formData.businessName} ({formData.industry})</p>
                        </div>
                      </div>

                      {/* Status Message */}
                      {submitStatus === 'error' && (
                        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-center gap-3">
                          <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                          <p className="text-red-500 text-sm">
                            Something went wrong. Please try again or contact us directly.
                          </p>
                        </div>
                      )}

                      <div className="flex gap-4">
                        <Button
                          type="button"
                          onClick={() => setFormStep(2)}
                          variant="heroSecondary"
                          size="lg"
                          className="w-full"
                        >
                          Back
                        </Button>
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          variant="hero"
                          size="lg"
                          className="w-full group"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                              <span className="relative z-10">Sending...</span>
                            </>
                          ) : (
                            <>
                              <Send className="h-5 w-5 mr-2" />
                              <span className="relative z-10">Submit & Get My Custom Plan</span>
                            </>
                          )}
                        </Button>
                      </div>

                      {/* Privacy Assurance */}
                      <p className="text-xs text-white/60 text-center">
                        🔒 Your information is secure and will never be shared with third parties.
                      </p>
                    </div>
                  )}
                </div>
              </form>

              {/* Progress Indicator */}
              <div className="mt-12 text-center text-accent-teal">
                <p className="text-sm">Step 5 of 6 - Almost there!</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Frame 6: Confirmation
  if (currentFrame === 6) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Progress Bar - Completed */}
        <div className="fixed top-16 left-0 right-0 z-40">
          <div className="h-1 bg-secondary/30">
            <div 
              className="h-full bg-gradient-to-r from-accent-teal to-accent-purple transition-all duration-500"
              style={{ width: '100%' }}
            />
          </div>
        </div>

        <section className="pt-32 pb-16 min-h-screen flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              {/* Success Animation */}
              <div className="mb-8">
                <div className="relative mx-auto w-32 h-32 mb-8">
                  <div className="absolute inset-0 bg-accent-green/20 rounded-full animate-ping"></div>
                  <div className="absolute inset-2 bg-accent-green/30 rounded-full animate-pulse"></div>
                  <div className="absolute inset-4 bg-accent-green rounded-full flex items-center justify-center">
                    <CheckCircle className="h-16 w-16 text-white animate-bounce" />
                  </div>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent-green to-accent-teal bg-clip-text text-transparent">
                Success! Your AI Journey Begins!
              </h1>
              
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Thank you for choosing NexusCore AI! We're excited to help transform your business.
              </p>

              {/* What Happens Next */}
              <div className="glass-card rounded-3xl p-12 border border-glass backdrop-blur-glass mb-12">
                <h2 className="text-3xl font-bold text-white mb-8">What Happens Next:</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-accent-teal to-accent-purple rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">1</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Immediate Response</h3>
                    <p className="text-white/70 text-sm">You'll receive a confirmation email within the next few minutes</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-accent-purple to-accent-orange rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">2</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Expert Consultation</h3>
                    <p className="text-white/70 text-sm">Our AI specialist will contact you within 24 hours to discuss your custom solution</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-accent-orange to-accent-green rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">3</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Custom Demo</h3>
                    <p className="text-white/70 text-sm">We'll create a personalized demo showing how AI will transform your specific business</p>
                  </div>
                </div>
              </div>

              {/* Summary Card */}
              <div className="glass-card rounded-2xl p-8 border border-accent-green/30 bg-accent-green/10 mb-12">
                <h3 className="text-2xl font-bold text-accent-green mb-4">Your Potential Transformation:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div>
                    <p className="text-white/70 text-sm">Selected Challenge:</p>
                    <p className="text-white font-semibold">{getChallengeDetails()?.title}</p>
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Estimated Annual Savings:</p>
                    <p className="text-accent-green font-bold text-xl">${estimatedSavings.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Business:</p>
                    <p className="text-white font-semibold">{formData.businessName}</p>
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Industry:</p>
                    <p className="text-white font-semibold">{formData.industry}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button 
                  onClick={() => window.location.href = '/solutions'}
                  variant="heroSecondary" 
                  size="lg" 
                  className="w-full sm:w-auto text-lg px-8 py-4"
                >
                  Explore More Solutions
                </Button>
                <Button 
                  onClick={() => window.location.href = '/'}
                  variant="hero" 
                  size="lg" 
                  className="w-full sm:w-auto group text-lg px-8 py-4"
                >
                  <span className="relative z-10">Back to Homepage</span>
                </Button>
              </div>

              {/* Progress Indicator - Completed */}
              <div className="mt-12 text-accent-green">
                <p className="text-sm">✅ Onboarding Complete - Welcome to NexusCore AI!</p>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    );
  }

  return null;
};

export default Onboarding;