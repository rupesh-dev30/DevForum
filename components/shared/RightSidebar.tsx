import Image from "next/image";
import Link from "next/link";
import RenderTag from "./RenderTag";

export default function RightSidebar() {
  const hotQuestions = [
    { _id: "1", title: "How do I use expres as a custom server in nextjs?" },
    { _id: "2", title: "How do I use expres as a custom server in nextjs?" },
    { _id: "3", title: "How do I use expres as a custom server in nextjs?" },
    { _id: "4", title: "How do I use expres as a custom server in nextjs?" },
    { _id: "5", title: "How do I use expres as a custom server in nextjs?" },
  ];

  const popularTags = [
    { _id: "1", name: "javascript", totalQuestions: "2" },
    { _id: "2", name: "typescript", totalQuestions: "8" },
    { _id: "3", name: "nextjs", totalQuestions: "4" },
    { _id: "4", name: "c++", totalQuestions: "2" },
    { _id: "5", name: "react", totalQuestions: "3" },
  ];

  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky top-0 right-0 h-screen flex flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden w-[350px]">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              href={`/questions/${question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                height={20}
                width={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200 light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
}