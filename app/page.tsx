import Posts from './components/Posts';
import MyProfilePic from './components/MyProfilePic';

export const revalidate = 86400;

export default function Home() {
  return (
    <div className="mx-auto">
      <MyProfilePic />
      <p className="mb-12 mt-12 text-center text-3xl dark:text-white">
        Example <span className="font-bold"> Website </span>
      </p>
      <Posts />
    </div>
  );
}
