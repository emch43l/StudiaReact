export default function MainCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center sm:pt-12">
      <div className="bg-slate-50 sm:rounded-xl overflow-hidden shadow-lg sm:max-w-xl w-full sm:w-5/6">
        {children}
      </div>
    </div>
  );
}
