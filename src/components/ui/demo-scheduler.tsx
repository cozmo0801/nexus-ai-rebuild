"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Calendar, 
  Clock, 
  Users, 
  Building, 
  Phone, 
  Mail, 
  CheckCircle,
  ArrowRight,
  X,
  CalendarDays,
  Clock3
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DemoSlot {
  id: string;
  time: string;
  available: boolean;
  selected: boolean;
}

interface DemoOptions {
  duration: number;
  label: string;
  description: string;
}

const demoOptions: DemoOptions[] = [
  { duration: 15, label: "Quick Overview", description: "15-minute overview of our AI solutions" },
  { duration: 30, label: "Detailed Demo", description: "30-minute comprehensive walkthrough" },
  { duration: 60, label: "Full Consultation", description: "1-hour deep dive with strategy session" }
];

const timeSlots: DemoSlot[] = [
  { id: "1", time: "9:00 AM", available: true, selected: false },
  { id: "2", time: "10:00 AM", available: true, selected: false },
  { id: "3", time: "11:00 AM", available: true, selected: false },
  { id: "4", time: "1:00 PM", available: true, selected: false },
  { id: "5", time: "2:00 PM", available: true, selected: false },
  { id: "6", time: "3:00 PM", available: true, selected: false },
  { id: "7", time: "4:00 PM", available: true, selected: false },
];

const preMeetingQuestions = [
  "What industry are you in?",
  "What's your biggest automation challenge?",
  "How many employees do you have?",
  "What's your timeline for implementation?"
];

export const DemoScheduler = ({ 
  isOpen, 
  onClose, 
  onSchedule 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  onSchedule: (data: any) => void;
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDuration, setSelectedDuration] = useState<number>(30);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    challenge: "",
    employees: "",
    timeline: ""
  });

  const handleDurationSelect = (duration: number) => {
    setSelectedDuration(duration);
    setCurrentStep(2);
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setCurrentStep(3);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setCurrentStep(4);
  };

  const handleContactInfoChange = (field: string, value: string) => {
    setContactInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    const demoData = {
      ...contactInfo,
      demoType: demoOptions.find(opt => opt.duration === selectedDuration)?.label,
      selectedDate,
      selectedTime,
      duration: selectedDuration
    };
    onSchedule(demoData);
    onClose();
  };

  const getCurrentDate = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      if (date.getDay() !== 0 && date.getDay() !== 6) { // Exclude weekends
        dates.push(date.toISOString().split('T')[0]);
      }
    }
    return dates;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-background rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-accent-purple to-accent-teal p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Schedule Your Demo</h2>
                <p className="text-white/80">Experience our AI solutions firsthand</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-white hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="p-6 border-b border-border">
            <div className="flex items-center justify-between">
              {[1, 2, 3, 4, 5].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                    step <= currentStep 
                      ? "bg-accent-purple text-white" 
                      : "bg-muted text-muted-foreground"
                  )}>
                    {step < currentStep ? <CheckCircle className="h-4 w-4" /> : step}
                  </div>
                  {step < 5 && (
                    <div className={cn(
                      "w-16 h-0.5 mx-2",
                      step < currentStep ? "bg-accent-purple" : "bg-muted"
                    )} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 max-h-[60vh] overflow-y-auto">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-semibold mb-4">Choose Demo Type</h3>
                  <div className="space-y-3">
                    {demoOptions.map((option) => (
                      <div
                        key={option.duration}
                        className={cn(
                          "p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105",
                          selectedDuration === option.duration
                            ? "border-accent-purple bg-accent-purple/5"
                            : "border-border hover:border-accent-purple/30"
                        )}
                        onClick={() => handleDurationSelect(option.duration)}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-foreground">{option.label}</h4>
                            <p className="text-sm text-muted-foreground">{option.description}</p>
                          </div>
                          <div className="text-2xl">⏱️</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-semibold mb-4">Select Date</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {getAvailableDates().slice(0, 9).map((date) => {
                      const dateObj = new Date(date);
                      const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'short' });
                      const dayNum = dateObj.getDate();
                      const month = dateObj.toLocaleDateString('en-US', { month: 'short' });
                      
                      return (
                        <div
                          key={date}
                          className={cn(
                            "p-3 border-2 rounded-lg cursor-pointer text-center transition-all duration-300 hover:scale-105",
                            selectedDate === date
                              ? "border-accent-purple bg-accent-purple/5"
                              : "border-border hover:border-accent-purple/30"
                          )}
                          onClick={() => handleDateSelect(date)}
                        >
                          <div className="text-xs text-muted-foreground">{dayName}</div>
                          <div className="text-lg font-bold text-foreground">{dayNum}</div>
                          <div className="text-xs text-muted-foreground">{month}</div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-semibold mb-4">Select Time</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map((slot) => (
                      <div
                        key={slot.id}
                        className={cn(
                          "p-4 border-2 rounded-lg cursor-pointer text-center transition-all duration-300 hover:scale-105",
                          selectedTime === slot.time
                            ? "border-accent-purple bg-accent-purple/5"
                            : "border-border hover:border-accent-purple/30"
                        )}
                        onClick={() => handleTimeSelect(slot.time)}
                      >
                        <div className="text-lg font-semibold text-foreground">{slot.time}</div>
                        <div className="text-sm text-muted-foreground">EST</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-semibold mb-4">Your Information</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={contactInfo.firstName}
                          onChange={(e) => handleContactInfoChange("firstName", e.target.value)}
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={contactInfo.lastName}
                          onChange={(e) => handleContactInfoChange("lastName", e.target.value)}
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={contactInfo.email}
                          onChange={(e) => handleContactInfoChange("email", e.target.value)}
                          placeholder="john@company.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          value={contactInfo.phone}
                          onChange={(e) => handleContactInfoChange("phone", e.target.value)}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="company">Company *</Label>
                      <Input
                        id="company"
                        value={contactInfo.company}
                        onChange={(e) => handleContactInfoChange("company", e.target.value)}
                        placeholder="Your Company Name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="industry">Industry *</Label>
                      <Input
                        id="industry"
                        value={contactInfo.industry}
                        onChange={(e) => handleContactInfoChange("industry", e.target.value)}
                        placeholder="e.g., Healthcare, Retail, Manufacturing"
                      />
                    </div>

                    <div>
                      <Label htmlFor="challenge">Biggest Automation Challenge *</Label>
                      <Textarea
                        id="challenge"
                        value={contactInfo.challenge}
                        onChange={(e) => handleContactInfoChange("challenge", e.target.value)}
                        placeholder="Describe your biggest automation challenge..."
                        rows={3}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="employees">Number of Employees</Label>
                        <Input
                          id="employees"
                          value={contactInfo.employees}
                          onChange={(e) => handleContactInfoChange("employees", e.target.value)}
                          placeholder="e.g., 10-50"
                        />
                      </div>
                      <div>
                        <Label htmlFor="timeline">Implementation Timeline</Label>
                        <Input
                          id="timeline"
                          value={contactInfo.timeline}
                          onChange={(e) => handleContactInfoChange("timeline", e.target.value)}
                          placeholder="e.g., 1-3 months"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 5 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-accent-green" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Demo Scheduled!</h3>
                    <p className="text-muted-foreground mb-6">
                      We've scheduled your {demoOptions.find(opt => opt.duration === selectedDuration)?.label.toLowerCase()} 
                      for {selectedDate} at {selectedTime} EST.
                    </p>
                    
                    <div className="bg-muted/50 rounded-lg p-4 mb-6 text-left">
                      <h4 className="font-semibold mb-2">Demo Details:</h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <CalendarDays className="h-4 w-4" />
                          <span>{new Date(selectedDate).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock3 className="h-4 w-4" />
                          <span>{selectedTime} EST ({selectedDuration} minutes)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span>With our AI Solutions Specialist</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-6">
                      You'll receive a calendar invite and confirmation email shortly. 
                      We'll also send you a reminder 15 minutes before your demo.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-border bg-muted/20">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Step {currentStep} of 5
              </div>
              
              <div className="flex gap-3">
                {currentStep > 1 && currentStep < 5 && (
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(currentStep - 1)}
                  >
                    Back
                  </Button>
                )}
                
                {currentStep < 4 && (
                  <Button
                    onClick={() => setCurrentStep(currentStep + 1)}
                    disabled={
                      (currentStep === 1 && !selectedDuration) ||
                      (currentStep === 2 && !selectedDate) ||
                      (currentStep === 3 && !selectedTime)
                    }
                    className="bg-gradient-to-r from-accent-purple to-accent-teal hover:from-accent-purple/90 hover:to-accent-teal/90 text-white border-0"
                  >
                    Next
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                )}
                
                {currentStep === 4 && (
                  <Button
                    onClick={() => setCurrentStep(5)}
                    disabled={!contactInfo.firstName || !contactInfo.lastName || !contactInfo.email || !contactInfo.company || !contactInfo.industry || !contactInfo.challenge}
                    className="bg-gradient-to-r from-accent-purple to-accent-teal hover:from-accent-purple/90 hover:to-accent-teal/90 text-white border-0"
                  >
                    Schedule Demo
                    <Calendar className="h-4 w-4 ml-2" />
                  </Button>
                )}
                
                {currentStep === 5 && (
                  <Button
                    onClick={handleSubmit}
                    className="bg-gradient-to-r from-accent-purple to-accent-teal hover:from-accent-purple/90 hover:to-accent-teal/90 text-white border-0"
                  >
                    Send to Contact Form
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DemoScheduler;