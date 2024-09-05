import { QuestionCard } from "./QuestionCard";

const QUESTIONS = [
  {
    title: "How do I return the response from an asynchronous call?",
    author: "Async Man",
    votes: "10",
    ans: "2",
    views: "100M",
    timestamp: "1 day ago",
    description:
      " Imagine that files on your desktop didn’t have names. Instead, you’d refer to them by their order — the first file, the second file, and so on. You could get used to it, but once you delete a file, it would get confusing. The second file would become the first file, the third file would be the second file, and so on.",
  },
  {
    title: "Official locator strategies for the WebDriver",
    author: "Strats",
    votes: "10",
    ans: "2",
    views: "100M",
    timestamp: "1 day ago",
    description:
      " Imagine that files on your desktop didn’t have names. Instead, you’d refer to them by their order — the first file, the second file, and so on. You could get used to it, but once you delete a file, it would get confusing. The second file would become the first file, the third file would be the second file, and so on.",
  },
  {
    title: "How can I prevent SQL injection in PHP?",
    author: "PHP Help",
    votes: "10",
    ans: "2",
    views: "100M",
    timestamp: "1 day ago",
    description:
      " Imagine that files on your desktop didn’t have names. Instead, you’d refer to them by their order — the first file, the second file, and so on. You could get used to it, but once you delete a file, it would get confusing. The second file would become the first file, the third file would be the second file, and so on.",
  },
  {
    title: "How can I get query string values in JavaScript?",
    author: "JS noob",
    votes: "10",
    ans: "2",
    views: "100M",
    timestamp: "1 day ago",
    description:
      " Imagine that files on your desktop didn’t have names. Instead, you’d refer to them by their order — the first file, the second file, and so on. You could get used to it, but once you delete a file, it would get confusing. The second file would become the first file, the third file would be the second file, and so on.",
  },
  {
    title: "What is Barca Cooking?",
    author: "Visca Barca",
    votes: "10",
    ans: "2",
    views: "100M",
    timestamp: "1 day ago",
    description:
      " Imagine that files on your desktop didn’t have names. Instead, you’d refer to them by their order — the first file, the second file, and so on. You could get used to it, but once you delete a file, it would get confusing. The second file would become the first file, the third file would be the second file, and so on.",
  },
  {
    title: "What is Barca Cooking?",
    author: "Visca Barca",
    votes: "10",
    ans: "2",
    views: "100M",
    timestamp: "1 day ago",
    description:
      " Imagine that files on your desktop didn’t have names. Instead, you’d refer to them by their order — the first file, the second file, and so on. You could get used to it, but once you delete a file, it would get confusing. The second file would become the first file, the third file would be the second file, and so on.",
  },
  {
    title: "What is Barca Cooking?",
    author: "Visca Barca",
    votes: "10",
    ans: "2",
    views: "100M",
    timestamp: "1 day ago",
    description:
      " Imagine that files on your desktop didn’t have names. Instead, you’d refer to them by their order — the first file, the second file, and so on. You could get used to it, but once you delete a file, it would get confusing. The second file would become the first file, the third file would be the second file, and so on.",
  },
  {
    title: "What is Barca Cooking?",
    author: "Visca Barca",
    votes: "10",
    ans: "2",
    views: "100M",
    timestamp: "1 day ago",
    description:
      " Imagine that files on your desktop didn’t have names. Instead, you’d refer to them by their order — the first file, the second file, and so on. You could get used to it, but once you delete a file, it would get confusing. The second file would become the first file, the third file would be the second file, and so on.",
  },
  {
    title: "What is Barca Cooking?",
    author: "Visca Barca",
    votes: "10",
    ans: "2",
    views: "100M",
    timestamp: "1 day ago",
    description:
      " Imagine that files on your desktop didn’t have names. Instead, you’d refer to them by their order — the first file, the second file, and so on. You could get used to it, but once you delete a file, it would get confusing. The second file would become the first file, the third file would be the second file, and so on.",
  },
  {
    title: "What is Barca Cooking?",
    author: "Visca Barca",
    votes: "10",
    ans: "2",
    views: "100M",
    timestamp: "1 day ago",
    description:
      " Imagine that files on your desktop didn’t have names. Instead, you’d refer to them by their order — the first file, the second file, and so on. You could get used to it, but once you delete a file, it would get confusing. The second file would become the first file, the third file would be the second file, and so on.",
  },
  {
    title: "What is Barca Cooking?",
    author: "Visca Barca",
    votes: "10",
    ans: "2",
    views: "100M",
    timestamp: "1 day ago",
    description:
      " Imagine that files on your desktop didn’t have names. Instead, you’d refer to them by their order — the first file, the second file, and so on. You could get used to it, but once you delete a file, it would get confusing. The second file would become the first file, the third file would be the second file, and so on.",
  },
];

export const QuestionGrid = () => {
  return (
    // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    <div className="flex flex-col items-center pt-2 scrollbar-none  h-[88vh] overflow-y-scroll">
      {QUESTIONS.map((question, idx) => (
        <div key={idx}>
          <QuestionCard
            title={question.title}
            author={question.author}
            votes={question.votes}
            ans={question.ans}
            views={question.views}
            timestamp={question.timestamp}
            description={question.description}
          ></QuestionCard>
        </div>
      ))}
    </div>
  );
};
