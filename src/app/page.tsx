import Nav from "@/components/Nav"
import Profile from '@/components/Profile';

export default function Home() {
  return (
    <main className="font-lexend">
      <div className="bg-black absolute w-full z-20">
        <Nav />
      </div>
      <Profile />
    </main>
  );
}
