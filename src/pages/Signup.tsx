import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GraduationCap, Eye, EyeOff, ArrowRight, ArrowLeft, Check } from "lucide-react";

const orgTypes = [
  { id: "academic", label: "Academic Institution", desc: "University, college, or school" },
  { id: "training", label: "Training Institute", desc: "Professional training center" },
  { id: "corporate", label: "Corporate Training", desc: "Company or enterprise training" },
  { id: "ministry", label: "Ministry School", desc: "Church, ministry, or faith-based" },
  { id: "creator", label: "Course Creator", desc: "Individual or team selling courses" },
];

const Signup = () => {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [form, setForm] = useState({ name: "", email: "", orgName: "", password: "" });

  return (
    <div className="min-h-screen flex">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary flex-col justify-between p-12">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-accent-foreground" />
          </div>
          <span className="text-lg font-bold text-primary-foreground tracking-tight">
            GenieHub <span className="font-light opacity-80">LMS</span>
          </span>
        </Link>

        <div className="max-w-md">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Set up your learning platform in minutes
          </h2>
          <p className="text-primary-foreground/60 leading-relaxed">
            Select your organization type and we will configure the right modules,
            navigation, and features for you automatically.
          </p>
          <div className="mt-8 space-y-3">
            {[
              "Automatic module configuration",
              "Custom branding support",
              "Unlimited free trial",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-primary-foreground/70 text-sm">
                <Check className="w-4 h-4 text-accent flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <p className="text-primary-foreground/30 text-sm">
          &copy; {new Date().getFullYear()} GenieHub LMS
        </p>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center p-6 bg-background">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center gap-2.5 mb-10">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground tracking-tight">GenieHub</span>
          </div>

          {/* Progress */}
          <div className="flex items-center gap-2 mb-8">
            {[1, 2].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}>
                  {step > s ? <Check className="w-4 h-4" /> : s}
                </div>
                {s < 2 && <div className={`w-12 h-0.5 ${step > 1 ? "bg-primary" : "bg-muted"}`} />}
              </div>
            ))}
            <span className="text-sm text-muted-foreground ml-2">
              Step {step} of 2
            </span>
          </div>

          {step === 1 && (
            <>
              <h1 className="text-2xl font-bold text-foreground mb-1">Choose your organization type</h1>
              <p className="text-muted-foreground text-sm mb-8">
                This helps us configure the right modules for you
              </p>

              <div className="space-y-3 mb-8">
                {orgTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      selectedType === type.id
                        ? "border-primary bg-primary/5 ring-1 ring-primary/20"
                        : "border-border hover:border-muted-foreground/30"
                    }`}
                  >
                    <p className="font-medium text-foreground text-sm">{type.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{type.desc}</p>
                  </button>
                ))}
              </div>

              <Button
                className="w-full"
                size="lg"
                disabled={!selectedType}
                onClick={() => setStep(2)}
              >
                Continue
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </>
          )}

          {step === 2 && (
            <>
              <h1 className="text-2xl font-bold text-foreground mb-1">Create your account</h1>
              <p className="text-muted-foreground text-sm mb-8">
                Set up your admin account to get started
              </p>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="Kwame Mensah"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="orgName">Organization Name</Label>
                    <Input
                      id="orgName"
                      placeholder="Ashesi University"
                      value={form.orgName}
                      onChange={(e) => setForm({ ...form, orgName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="you@organization.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <div className="relative">
                    <Input
                      id="signup-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      value={form.password}
                      onChange={(e) => setForm({ ...form, password: e.target.value })}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <Button className="w-full" size="lg">Create Account</Button>
              </form>

              <button
                onClick={() => setStep(1)}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mt-4 mx-auto"
              >
                <ArrowLeft className="w-3 h-3" /> Back
              </button>
            </>
          )}

          <p className="text-center text-sm text-muted-foreground mt-8">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
