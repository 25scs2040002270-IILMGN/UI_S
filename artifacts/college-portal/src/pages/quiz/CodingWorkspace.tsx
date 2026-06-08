import { useState } from "react";
import { useParams, Link } from "wouter";
import { ArrowLeft, Play, Check, ChevronDown, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { codingQuestions } from "@/data/mockData";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

export default function CodingWorkspace() {
  const { id } = useParams();
  const { toast } = useToast();
  const [language, setLanguage] = useState("Python");
  const [code, setCode] = useState("def solve():\n    # Write your code here\n    pass\n");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const question = codingQuestions.find(q => q.id === Number(id)) || codingQuestions[0];

  const handleRun = () => {
    setIsRunning(true);
    setOutput("");
    setTimeout(() => {
      setIsRunning(false);
      setOutput("Running test cases...\nTest Case 1: Passed (12ms)\nTest Case 2: Passed (14ms)\nTest Case 3: Passed (15ms)\n\nAll Test Cases Passed!");
    }, 1500);
  };

  const handleSubmit = () => {
    setIsRunning(true);
    setOutput("");
    setTimeout(() => {
      setIsRunning(false);
      setOutput("Submitting code to evaluation server...\nEvaluating 54 hidden test cases...\n\nSuccess! Your solution beat 84% of submissions in runtime.");
      toast({
        title: "Solution Accepted!",
        description: "You've successfully solved " + question.title,
        variant: "default",
      });
    }, 2000);
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col bg-background">
      <div className="h-14 border-b border-white/10 flex items-center justify-between px-4 bg-card shrink-0">
        <div className="flex items-center gap-4">
          <Link href="/quiz-arena/coding">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div className="w-px h-6 bg-white/10"></div>
          <h2 className="font-semibold">{question.title}</h2>
          <span className={`px-2 py-0.5 rounded text-xs font-semibold ${
            question.difficulty === 'Easy' ? 'text-emerald-400 bg-emerald-400/10' :
            question.difficulty === 'Medium' ? 'text-yellow-400 bg-yellow-400/10' :
            'text-rose-400 bg-rose-400/10'
          }`}>
            {question.difficulty}
          </span>
        </div>
        
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="bg-background border-white/10">
                {language} <ChevronDown className="ml-2 w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-card border-white/10">
              <DropdownMenuRadioGroup value={language} onValueChange={setLanguage}>
                <DropdownMenuRadioItem value="Python">Python 3</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="JavaScript">JavaScript (Node)</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Java">Java 17</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="C++">C++ 20</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="secondary" size="sm" onClick={handleRun} disabled={isRunning} className="bg-white/10 hover:bg-white/20">
            {isRunning ? <Activity className="w-4 h-4 animate-spin mr-2" /> : <Play className="w-4 h-4 mr-2" />}
            Run
          </Button>
          <Button size="sm" onClick={handleSubmit} disabled={isRunning} className="bg-blue-600 hover:bg-blue-700 text-white">
            <Check className="w-4 h-4 mr-2" /> Submit
          </Button>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Left Panel: Description & Test Cases */}
        <div className="w-full md:w-1/3 flex flex-col border-r border-white/10 bg-card overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6 border-b border-white/10">
            <h3 className="text-xl font-bold mb-4">{question.title}</h3>
            <div className="prose prose-invert prose-sm max-w-none">
              <p>
                Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to <code>target</code>.
              </p>
              <p>
                You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the same element twice.
              </p>
              <p>You can return the answer in any order.</p>
              
              <h4 className="text-white mt-6 mb-2">Example 1:</h4>
              <pre className="bg-black/40 p-4 rounded-lg border border-white/10">
                <code>
                  Input: nums = [2,7,11,15], target = 9<br/>
                  Output: [0,1]<br/>
                  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
                </code>
              </pre>
            </div>
          </div>
          <div className="h-64 shrink-0 overflow-y-auto p-4 bg-background">
            <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">Test Cases</h4>
            <div className="space-y-3">
              <div className="p-3 rounded bg-card border border-white/10">
                <div className="text-xs text-muted-foreground mb-1">Input:</div>
                <code className="text-sm">nums = [2,7,11,15], target = 9</code>
              </div>
              <div className="p-3 rounded bg-card border border-white/10">
                <div className="text-xs text-muted-foreground mb-1">Input:</div>
                <code className="text-sm">nums = [3,2,4], target = 6</code>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel: Editor & Output */}
        <div className="w-full md:w-2/3 flex flex-col overflow-hidden bg-[#1e1e1e]">
          <div className="flex-1 relative">
            <textarea
              className="w-full h-full bg-transparent text-[#d4d4d4] font-mono text-sm p-4 resize-none focus:outline-none focus:ring-0 leading-relaxed"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              spellCheck="false"
            />
          </div>
          <div className="h-64 shrink-0 border-t border-[#333333] bg-[#1e1e1e] flex flex-col">
            <div className="h-10 bg-[#252526] flex items-center px-4 border-b border-[#333333]">
              <span className="text-xs text-[#cccccc] font-medium uppercase tracking-wider">Console Output</span>
            </div>
            <div className="flex-1 p-4 overflow-y-auto font-mono text-sm text-[#cccccc] whitespace-pre-wrap">
              {output || "Run your code to see the output here."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
