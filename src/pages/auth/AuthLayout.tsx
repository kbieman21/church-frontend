export default function AuthLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="pt-24 px-4 md:px-8 flex justify-center">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
}
