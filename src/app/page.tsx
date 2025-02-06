import Header from "@/components/header";
import Link from "next/link";

const assignments = [
  {
    order: 1,
    path: "product-list",
    title: "상품 목록 만들기",
    description: "object 형식의 데이터를 이용해서 상품 목록 만들기",
  },
  {
    order: 2,
    path: "profile-card",
    title: "프로필 카드 만들기",
    description:
      "object 형식의 데이터를 만들고 그것을 이용해서 프로필 카드 만들기",
  },
  {
    order: 3,
    path: "new",
    title: "새 게시글 작성",
    description: "사용자에게 입력받기",
  },
  {
    order: 4,
    path: "login",
    title: "로그인 페이지",
    description: "로그인 페이지로 이동",
  },
  {
    order: 5,
    path: "https://www.naver.com",
    title: "네이버",
    description: "바로가기",
  },
];

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col relative overflow-hidden">
      <Header title={"Frontend 과제"} />
      <main className="w-full h-full flex flex-col overflow-y-auto py-5 px-5 gap-5">
        {assignments.map((assignment, index) => (
          <Assignment
            key={index}
            title={`${assignment.order}. ${assignment.title}`}
            href={assignment.path}
            description={assignment.description}
          />
        ))}
      </main>
    </div>
  );
}

function Assignment({
  title,
  href,
  description,
}: {
  title: string;
  href: string;
  description?: string;
}) {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  return isExternal ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white border rounded-md p-5 flex flex-col hover-bg-stone-100"
    >
      <div className="front-blod mb-2">{title}</div>
      {description && (
        <div className="text-sm text-stone-500">{description}</div>
      )}
    </a>
  ) : (
    <Link
      href={`/assignments/${href}`}
      className="bg-white border rounded-md p-5 flex flex-col hover-bg-stone-100"
    >
      <div className="font-bold mb-2">{title}</div>
      {description && (
        <div className="text-sm text-stone-500">{description}</div>
      )}
    </Link>
  );
}
