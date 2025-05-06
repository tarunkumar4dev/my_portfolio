
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Sty.ai</CardTitle>
              <CardDescription>AI Powered Test Generation Platform</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Developed a backend system that queries GPT-4, Gemini, Grok, and DeepSeek simultaneously,
                performs keyword matching and semantic analysis.
              </p>
              <a 
                href="https://github.com/tarunkumar4dev/sty.ai_frontend_code"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
                View on GitHub
              </a>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>MoveX</CardTitle>
              <CardDescription>Human Activity Recognition System</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Engineered a deep learning-based Human Activity Recognition (HAR) system using CNNs,
                integrating real-time video feed classification with OpenCV, achieving 85% accuracy.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
