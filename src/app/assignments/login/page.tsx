import { redirect } from "next/navigation";

export default function LoginPage() {
  async function handleSubmit(formData: FormData) {
    "use server";
    // FormData 객체에서 입력값 가져오기
    const username = formData.get("username");
    const password = formData.get("password");

    // 콘솔에 출력
    console.log("아이디:", username);
    console.log("비밀번호:", password);

    if (username === "admin" && password === "admin") {
      redirect("profile-card");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login Page
        </h1>
        <form action={handleSubmit}>
          {/* 아이디 입력 */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              아이디
            </label>
            <input
              type="text"
              name="username"
              placeholder="아이디를 입력하세요"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* 비밀번호 입력 */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              비밀번호
            </label>
            <input
              type="password"
              name="password"
              placeholder="비밀번호를 입력하세요"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* 로그인 버튼 */}
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white font-semibold py-2 rounded-lg hover:bg-indigo-600 transition duration-300"
          >
            로그인
          </button>

          {/* 추가 링크 */}
          <div className="mt-4 text-sm text-center text-gray-500">
            계정이 없으신가요?{" "}
            <a href="#" className="text-indigo-500 hover:underline">
              회원가입
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
