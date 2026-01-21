import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", company: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-olive-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-olive-500 font-body text-sm font-semibold uppercase tracking-wider">
              Contact Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Let's Start a{" "}
              <span className="text-primary">Conversation</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Ready to transform your business with data-driven insights? Get in touch with our team and let's discuss how we can help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                <p className="font-body text-muted-foreground leading-relaxed">
                  We believe in transparency and building relationships with our clients that are based on trust.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-olive-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-olive-600" />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-foreground mb-1">
                      Email Us
                    </h3>
                    <a
                      href="mailto:info@ampersandprofiles.com"
                      className="font-body text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@ampersandprofiles.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-olive-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-olive-600" />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-foreground mb-1">
                      Call Us
                    </h3>
                    <a
                      href="tel:+1234567890"
                      className="font-body text-muted-foreground hover:text-primary transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-olive-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-olive-600" />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-foreground mb-1">
                      Visit Us
                    </h3>
                    <p className="font-body text-muted-foreground">
                      South Asia Regional Office
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-background rounded-2xl p-8 card-elevated">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-body text-sm font-medium text-foreground">
                        Your Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-olive-50 border-olive-200 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-body text-sm font-medium text-foreground">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        required
                        className="bg-olive-50 border-olive-200 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-body text-sm font-medium text-foreground">
                        Company
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="bg-olive-50 border-olive-200 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-body text-sm font-medium text-foreground">
                        Subject *
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        required
                        className="bg-olive-50 border-olive-200 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-body text-sm font-medium text-foreground">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows={6}
                      required
                      className="bg-olive-50 border-olive-200 focus:border-primary resize-none"
                    />
                  </div>

                  <Button type="submit" variant="olive" size="lg" className="w-full md:w-auto">
                    <Send size={18} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
