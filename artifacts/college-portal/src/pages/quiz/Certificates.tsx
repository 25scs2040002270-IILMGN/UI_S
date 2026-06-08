import { motion } from "framer-motion";
import { Download, Award, ShieldCheck } from "lucide-react";
import { certificates } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Certificates() {
  const { toast } = useToast();

  const handleDownload = (title: string) => {
    toast({
      title: "Download Started",
      description: `Downloading certificate: ${title}`,
      variant: "default",
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }} 
      className="p-6 lg:p-10 max-w-6xl mx-auto"
    >
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">My Certificates</h1>
          <p className="text-muted-foreground">Official recognition of your achievements on CollegeHub.</p>
        </div>
        <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-lg font-medium flex items-center gap-2">
          <ShieldCheck className="w-5 h-5" /> Verified by CollegeHub
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {certificates.map((cert, idx) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            key={cert.id}
            className="group relative p-1 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 overflow-hidden"
          >
            {/* Inner frame */}
            <div className="bg-card border border-white/5 h-full rounded-xl p-8 flex flex-col relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px]"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[40px]"></div>
              
              <div className="flex justify-between items-start mb-12 relative z-10">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                  <Award className="w-6 h-6 text-blue-500" />
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Grade</div>
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                    {cert.grade}
                  </div>
                </div>
              </div>
              
              <div className="relative z-10 flex-1">
                <div className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-2">Certificate of Achievement</div>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-muted-foreground mb-8">{cert.issuedFor}</p>
              </div>

              <div className="mt-auto pt-6 border-t border-white/10 flex justify-between items-center relative z-10">
                <span className="text-sm font-medium text-muted-foreground">Issued: {cert.date}</span>
                <Button 
                  onClick={() => handleDownload(cert.title)}
                  variant="outline" 
                  className="border-blue-500/30 hover:bg-blue-500/10 text-blue-400 hover:text-blue-300"
                >
                  <Download className="w-4 h-4 mr-2" /> Download PDF
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
