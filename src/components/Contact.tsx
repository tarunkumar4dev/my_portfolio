import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaGithub, FaTwitter, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400">
            Let's Connect
          </h2>
          
          <p className="text-lg text-gray-600 text-center max-w-2xl mb-12">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl bg-white/90">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                    Send me a message
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-5">
                  <div className="space-y-1">
                    <Input 
                      placeholder="Your name" 
                      className="py-6 px-4 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                    />
                  </div>
                  <div className="space-y-1">
                    <Input 
                      type="email" 
                      placeholder="Your email" 
                      className="py-6 px-4 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                    />
                  </div>
                  <div className="space-y-1">
                    <Input 
                      placeholder="Subject" 
                      className="py-6 px-4 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                    />
                  </div>
                  <div className="space-y-1">
                    <Textarea 
                      placeholder="Your message" 
                      className="min-h-[180px] py-4 px-4 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full py-6 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-lg font-semibold shadow-md hover:shadow-lg transition-all"
                  >
                    <FaPaperPlane className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                    Contact Information
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8 flex flex-col justify-between h-[calc(100%-80px)]">
                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                    <p className="text-lg font-semibold text-gray-600 mb-2">📞 Phone:</p>
                    <a 
                      href="tel:9310200167" 
                      className="text-xl font-medium text-blue-600 hover:text-cyan-600 hover:underline transition"
                    >
                      +91 9310200167
                    </a>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                    <p className="text-lg font-semibold text-gray-600 mb-2">📧 Email:</p>
                    <a 
                      href="mailto:tarunkumar442002@gmail.com" 
                      className="text-xl font-medium text-blue-600 hover:text-cyan-600 hover:underline transition"
                    >
                      tarunkumar442002@gmail.com
                    </a>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-lg font-semibold text-gray-600 mb-6 text-center">
                    Find me on social media
                  </p>
                  <div className="flex justify-center gap-8">
                    <a 
                      href="https://www.linkedin.com/in/tarun-kumar-121b5921a/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 text-3xl hover:text-blue-700 transition hover:scale-110"
                    >
                      <FaLinkedin />
                    </a>
                    <a 
                      href="https://github.com/tarunkumar4dev" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-800 text-3xl hover:text-black transition hover:scale-110"
                    >
                      <FaGithub />
                    </a>
                    <a 
                      href="https://x.com/_tarunpathak_" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-black text-3xl hover:text-blue-400 transition hover:scale-110"
                    >
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;