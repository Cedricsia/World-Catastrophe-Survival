import AuthForm from "../components/AuthForm";

function Home() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="border-[3px] border-accent">Site overview</div>
      <AuthForm />
    </div>
  );
}

export default Home;
