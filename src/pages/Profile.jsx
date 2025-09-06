import React from "react";

const Profile = ({
  name,
  profileImage,
  location,
  rating,
  reviewsCount,
  propertiesCount,
  viewsCount,
  likesCount,
  since,
  agencyType,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/20 pt-16">
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 pt-16 lg:pt-32 pb-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Profile Section */}
            <div className="flex flex-col sm:flex-row gap-6 flex-1">
              <div className="relative group">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden relative">
                  <img
                    alt={name}
                    src={profileImage}
                    className="object-cover transition-transform duration-300 rounded-full"
                  />
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {name}
                  </h1>
                  <div className="flex gap-2 mt-2">
                    <div className="inline-flex items-center rounded-full bg-blue-500 text-white px-2.5 py-0.5 text-xs font-semibold">
                      {agencyType}
                    </div>
                    <div className="inline-flex items-center rounded-full bg-green-50 text-green-700 px-2.5 py-0.5 text-xs font-semibold">
                      Verified
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 text-gray-600">
                  <span>{location}</span>
                  <span>
                    ⭐ {rating} ({reviewsCount} reviews)
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <StatCard
                    label="Properties"
                    value={propertiesCount}
                    color="blue"
                  />
                  <StatCard
                    label="Total Views"
                    value={viewsCount}
                    color="green"
                  />
                  <StatCard
                    label="Total Likes"
                    value={likesCount}
                    color="purple"
                  />
                  <StatCard label="Since" value={since} color="amber" />
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="lg:w-80 space-y-4">
              {/* You can add dynamic contact options here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ label, value, color }) => (
  <div className={`p-3 rounded-xl bg-${color}-50 border border-${color}-200`}>
    <div className={`text-xs font-medium text-${color}-700`}>{label}</div>
    <div className={`text-xl font-bold text-${color}-900`}>{value}</div>
  </div>
);

export default Profile;
