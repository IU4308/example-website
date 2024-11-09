import Posts from "./components/Posts";
import MyProfilePic from "./components/MyProfilePic";

export const revalidate = 10

export default function Home() {
  return (
    <div className="mx-auto">
      <MyProfilePic />
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Welcome 
        <span className="whitespace-nowrap">
          &nbsp;to my<span className="font-bold"> Website</span>
        </span>
      </p>
      <Posts />
    </div>
  );
}
