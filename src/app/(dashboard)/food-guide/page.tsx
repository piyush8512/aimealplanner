import React from "react";
import { Sparkles,MapPin } from "lucide-react";

const page = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">AI Food Guide</h1>
            <p className="text-gray-600">
              Intelligent recommendations based on location, weather, and
              preferences
            </p>
          </div>
        </div>
      </div>
      {/*grid*/}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
            <div className="flex items-center space-x-3 mb-4">
                <MapPin className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-blue-900">Your Location</h3>
            </div>

        </div>


      </div>
    </div>
  );
};

export default page;
