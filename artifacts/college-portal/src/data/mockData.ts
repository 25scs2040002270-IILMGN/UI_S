export const stats = {
  totalStudents: 12847,
  placementRate: 94.2,
  activeCourses: 487,
  quizParticipation: 8234,
};

export const founders = [
  { id: 1, name: "Dr. Arjun Sharma", designation: "Founder & President", bio: "Former Dean of Computer Science with a vision to redefine technical education globally. Dr. Sharma has authored 40+ papers on AI and EdTech.", linkedin: "#", email: "arjun@example.com", photoInitials: "AS", gradientFrom: "from-blue-500", gradientTo: "to-cyan-400" },
  { id: 2, name: "Prof. Meera Patel", designation: "Co-Founder & Academic Director", bio: "A pioneer in modern pedagogy. She structured the curriculum to bridge the gap between theoretical knowledge and practical industry skills.", linkedin: "#", email: "meera@example.com", photoInitials: "MP", gradientFrom: "from-purple-500", gradientTo: "to-blue-500" },
  { id: 3, name: "Rajesh Kumar", designation: "Co-Founder & Technology Director", bio: "Ex-FAANG engineering leader. Rajesh built the underlying architecture of CollegeHub, ensuring it scales flawlessly for competitive programming.", linkedin: "#", email: "rajesh@example.com", photoInitials: "RK", gradientFrom: "from-cyan-500", gradientTo: "to-emerald-400" }
];

export const timeline = [
  { year: "2018", title: "Founded", description: "Established with a core team of 5 visionaries." },
  { year: "2019", title: "First batch", description: "Welcomed our founding class of 250 students." },
  { year: "2021", title: "10k students", description: "Reached a major milestone in student enrollment." },
  { year: "2023", title: "National ranking", description: "Ranked among the top 10 institutions nationally." },
  { year: "2024", title: "Global partnerships", description: "Partnered with 50+ international tech companies." },
  { year: "2026", title: "AI-powered platform", description: "Launched CollegeHub with advanced analytics." }
];

export const studentsOfTheYear = {
  "2023": { id: "s23", name: "Ananya Singh", branch: "Computer Science", cgpa: 9.8, codingRank: 4, competitionWins: 12, researchContributions: 2, achievementScore: 92, batch: "2023" },
  "2024": { id: "s24", name: "Rohan Gupta", branch: "Information Technology", cgpa: 9.9, codingRank: 2, competitionWins: 15, researchContributions: 1, achievementScore: 95, batch: "2024" },
  "2025": { id: "s25", name: "Sneha Reddy", branch: "Electronics", cgpa: 9.7, codingRank: 8, competitionWins: 10, researchContributions: 4, achievementScore: 90, batch: "2025" },
  "2026": { id: "s26", name: "Vikram Das", branch: "Computer Science", cgpa: 10.0, codingRank: 1, competitionWins: 18, researchContributions: 5, achievementScore: 99, batch: "2026" }
};

export const leaderboardData = [
  { rank: 1, name: "Vikram Das", branch: "CSE", totalPoints: 14500, codingScore: 8000, mathScore: 6500, streak: 45, badge: "gold" },
  { rank: 2, name: "Rohan Gupta", branch: "IT", totalPoints: 13800, codingScore: 7500, mathScore: 6300, streak: 30, badge: "silver" },
  { rank: 3, name: "Priya Sharma", branch: "CSE", totalPoints: 13200, codingScore: 7000, mathScore: 6200, streak: 28, badge: "bronze" },
  { rank: 4, name: "Ananya Singh", branch: "CSE", totalPoints: 12900, codingScore: 7100, mathScore: 5800, streak: 25, badge: null },
  { rank: 5, name: "Arjun Verma", branch: "ECE", totalPoints: 12500, codingScore: 6500, mathScore: 6000, streak: 20, badge: null },
  { rank: 6, name: "Sneha Reddy", branch: "ECE", totalPoints: 12100, codingScore: 6200, mathScore: 5900, streak: 18, badge: null },
  { rank: 7, name: "Neha Patel", branch: "IT", totalPoints: 11800, codingScore: 6000, mathScore: 5800, streak: 15, badge: null },
  { rank: 8, name: "Rahul Kumar", branch: "CSE", totalPoints: 11500, codingScore: 5800, mathScore: 5700, streak: 14, badge: null },
  { rank: 9, name: "Karan Singh", branch: "Mech", totalPoints: 11200, codingScore: 5500, mathScore: 5700, streak: 12, badge: null },
  { rank: 10, name: "Divya Das", branch: "CSE", totalPoints: 10900, codingScore: 5200, mathScore: 5700, streak: 10, badge: null }
];

export const codingQuestions = [
  { id: 1, title: "Two Sum", difficulty: "Easy", category: "DSA", tags: ["Array", "Hash Table"], timeEstimate: "15 mins", acceptance: "48.2%", solved: true },
  { id: 2, title: "Reverse Linked List", difficulty: "Easy", category: "DSA", tags: ["Linked List"], timeEstimate: "20 mins", acceptance: "60.1%", solved: true },
  { id: 3, title: "Longest Substring Without Repeating Characters", difficulty: "Medium", category: "DSA", tags: ["String", "Sliding Window"], timeEstimate: "30 mins", acceptance: "33.8%", solved: false },
  { id: 4, title: "Median of Two Sorted Arrays", difficulty: "Hard", category: "DSA", tags: ["Array", "Binary Search"], timeEstimate: "45 mins", acceptance: "35.5%", solved: false },
  { id: 5, title: "Spring Boot Authentication", difficulty: "Medium", category: "Java", tags: ["Spring", "Security"], timeEstimate: "40 mins", acceptance: "45.0%", solved: false },
  { id: 6, title: "Concurrency in Java", difficulty: "Hard", category: "Java", tags: ["Multithreading"], timeEstimate: "50 mins", acceptance: "25.4%", solved: false },
  { id: 7, title: "Django REST API", difficulty: "Medium", category: "Python", tags: ["Django", "API"], timeEstimate: "35 mins", acceptance: "50.2%", solved: true },
  { id: 8, title: "Pandas Data Analysis", difficulty: "Easy", category: "Python", tags: ["Pandas", "Data"], timeEstimate: "25 mins", acceptance: "70.5%", solved: false },
  { id: 9, title: "SQL Window Functions", difficulty: "Medium", category: "DBMS", tags: ["SQL", "Advanced"], timeEstimate: "30 mins", acceptance: "40.1%", solved: true },
  { id: 10, title: "Database Normalization", difficulty: "Hard", category: "DBMS", tags: ["Design", "Theory"], timeEstimate: "45 mins", acceptance: "30.9%", solved: false },
  { id: 11, title: "Page Replacement Algorithms", difficulty: "Medium", category: "OS", tags: ["Memory Management"], timeEstimate: "35 mins", acceptance: "42.3%", solved: false },
  { id: 12, title: "Deadlock Avoidance", difficulty: "Hard", category: "OS", tags: ["Concurrency"], timeEstimate: "50 mins", acceptance: "28.7%", solved: false },
  { id: 13, title: "React Context API", difficulty: "Medium", category: "Web Development", tags: ["React", "State"], timeEstimate: "30 mins", acceptance: "55.6%", solved: true },
  { id: 14, title: "CSS Grid Layout", difficulty: "Easy", category: "Web Development", tags: ["CSS", "Layout"], timeEstimate: "20 mins", acceptance: "65.4%", solved: true },
  { id: 15, title: "Node.js Streams", difficulty: "Hard", category: "Web Development", tags: ["Node.js", "Performance"], timeEstimate: "45 mins", acceptance: "32.1%", solved: false }
];

export const mathQuestions = [
  { id: 1, title: "Eigenvalues and Eigenvectors", category: "Algebra", difficulty: "Medium", timeEstimate: "30 mins", solved: true },
  { id: 2, title: "Matrix Inversion", category: "Algebra", difficulty: "Easy", timeEstimate: "20 mins", solved: true },
  { id: 3, title: "Double Integrals", category: "Calculus", difficulty: "Medium", timeEstimate: "35 mins", solved: false },
  { id: 4, title: "Taylor Series Expansion", category: "Calculus", difficulty: "Hard", timeEstimate: "45 mins", solved: false },
  { id: 5, title: "Bayes' Theorem", category: "Probability", difficulty: "Medium", timeEstimate: "30 mins", solved: true },
  { id: 6, title: "Normal Distribution", category: "Probability", difficulty: "Easy", timeEstimate: "20 mins", solved: false },
  { id: 7, title: "Hypothesis Testing", category: "Statistics", difficulty: "Hard", timeEstimate: "50 mins", solved: false },
  { id: 8, title: "Linear Regression", category: "Statistics", difficulty: "Medium", timeEstimate: "40 mins", solved: true },
  { id: 9, title: "Graph Coloring", category: "Discrete Mathematics", difficulty: "Medium", timeEstimate: "35 mins", solved: false },
  { id: 10, title: "Combinatorics and Permutations", category: "Discrete Mathematics", difficulty: "Easy", timeEstimate: "25 mins", solved: true },
  { id: 11, title: "Time and Work", category: "Aptitude", difficulty: "Easy", timeEstimate: "15 mins", solved: true },
  { id: 12, title: "Permutations & Combinations", category: "Aptitude", difficulty: "Medium", timeEstimate: "25 mins", solved: false }
];

export const certificates = [
  { id: 1, title: "Data Structures Expert", issuedFor: "Completed 100 DSA Challenges", date: "Oct 12, 2023", grade: "A+", downloadable: true },
  { id: 2, title: "Calculus Mastery", issuedFor: "Top 5% in Calculus Quiz", date: "Nov 05, 2023", grade: "A", downloadable: true },
  { id: 3, title: "Web Dev Challenger", issuedFor: "Completed Frontend Track", date: "Dec 20, 2023", grade: "A+", downloadable: true },
  { id: 4, title: "Python Advanced", issuedFor: "Completed Python Hard Track", date: "Jan 15, 2024", grade: "A", downloadable: true }
];

export const analyticsData = [
  { week: "Week 1", codingAccuracy: 65, mathAccuracy: 70, quizAttempts: 12, timeSpent: 10 },
  { week: "Week 2", codingAccuracy: 68, mathAccuracy: 72, quizAttempts: 15, timeSpent: 12 },
  { week: "Week 3", codingAccuracy: 75, mathAccuracy: 71, quizAttempts: 18, timeSpent: 15 },
  { week: "Week 4", codingAccuracy: 82, mathAccuracy: 76, quizAttempts: 22, timeSpent: 20 },
  { week: "Week 5", codingAccuracy: 85, mathAccuracy: 80, quizAttempts: 20, timeSpent: 18 },
  { week: "Week 6", codingAccuracy: 88, mathAccuracy: 85, quizAttempts: 25, timeSpent: 22 },
  { week: "Week 7", codingAccuracy: 92, mathAccuracy: 88, quizAttempts: 30, timeSpent: 25 }
];
