export default function Loading({ loadingText = "Loading" }) {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <p className="text-gray-500 font-semibold animate-pulse">
        {loadingText}...
      </p>
    </div>
  );
}
