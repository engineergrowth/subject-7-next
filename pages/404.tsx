import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Custom404() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-4 py-20">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-xl px-8 py-10 w-full max-w-xl text-center space-y-6">
        <div className="flex flex-col items-center space-y-2">
          <AlertTriangle className="w-10 h-10 text-yellow-500" />
          <h1 className="text-3xl font-bold">Page Not Found</h1>
        </div>
        <p className="text-gray-400 text-sm">
          The page you’re looking for doesn’t exist. It might’ve been moved, deleted, or maybe the URL is just wrong.
        </p>
        <Link href="/" passHref>
          <Button
            size="lg"
            className="w-full max-w-xs mx-auto bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
          >
            Take me home
          </Button>
        </Link>
      </div>
    </div>
  );
}
