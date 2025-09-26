import React from 'react';

const AppleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const DiscordIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const FeaturedJobs: React.FC = () => {
  const jobs = [
    {
      id: "microsoft-visual-designer",
      company: {
        name: "Microsoft",
        location: "New York, USA",
        logo: {
          type: "gradient",
          colors: ["#F25022", "#7FBA00", "#00A4EF", "#FFB900"]
        }
      },
      position: {
        title: "Visual Designer",
        type: "Full-time"
      },
      description: "You will be expected to lead the company's entire UI strategy.",
      salary: {
        amount: "$2500",
        period: "/month"
      },
      applyButton: {
        variant: "outline"
      }
    },
    {
      id: "behance-senior-ui-designer",
      company: {
        name: "Behance",
        location: "Remote",
        logo: {
          type: "text",
          text: "Be",
          bgColor: "bg-blue-600"
        }
      },
      position: {
        title: "Senior UI Designer",
        type: "Full-time"
      },
      description: "You will be expected to lead the company's entire UI strategy.",
      salary: {
        amount: "$2500",
        period: "/month"
      },
      applyButton: {
        variant: "outline"
      }
    },
    {
      id: "dailymail-convertor",
      company: {
        name: "Daily Mail",
        location: "North East, USA",
        logo: {
          type: "text",
          text: "DM",
          bgColor: "bg-red-600"
        }
      },
      position: {
        title: "Mail Convertor",
        type: "Full-time"
      },
      description: "You will be expected to lead the company's entire UI strategy.",
      salary: {
        amount: "$2500",
        period: "/month"
      },
      applyButton: {
        variant: "filled"
      }
    },
    {
      id: "etsy-marketing-officer",
      company: {
        name: "Etsy",
        location: "Remote",
        logo: {
          type: "text",
          text: "E",
          bgColor: "bg-orange-500"
        }
      },
      position: {
        title: "Marketing Officer",
        type: "Full-time"
      },
      description: "You will be expected to lead the company's entire UI strategy.",
      salary: {
        amount: "$2500",
        period: "/month"
      },
      applyButton: {
        variant: "outline"
      }
    },
    {
      id: "apple-app-development",
      company: {
        name: "Apple",
        location: "New York, USA",
        logo: {
          type: "icon",
          icon: "apple"
        }
      },
      position: {
        title: "App Development",
        type: "Full-time"
      },
      description: "You will be expected to lead the company's entire UI strategy.",
      salary: {
        amount: "$2500",
        period: "/month"
      },
      applyButton: {
        variant: "outline"
      }
    },
    {
      id: "discord-ux-engineer",
      company: {
        name: "Discord",
        location: "Freelance",
        logo: {
          type: "icon",
          icon: "discord"
        }
      },
      position: {
        title: "UX Engineer",
        type: "Full-time"
      },
      description: "You will be expected to lead the company's entire UI strategy.",
      salary: {
        amount: "$2500",
        period: "/month"
      },
      applyButton: {
        variant: "outline"
      }
    },
    {
      id: "driversed-data-varification",
      company: {
        name: "DriversEd",
        location: "Sydney, Australia",
        logo: {
          type: "text",
          text: "DE",
          bgColor: "bg-orange-400"
        }
      },
      position: {
        title: "Data Verification",
        type: "Full-time"
      },
      description: "You will be expected to lead the company's entire UI strategy.",
      salary: {
        amount: "$2500",
        period: "/month"
      },
      applyButton: {
        variant: "outline"
      }
    },
    {
      id: "patch-senior-ui-designer",
      company: {
        name: "Patch",
        location: "Freelance",
        logo: {
          type: "text",
          text: "P",
          bgColor: "bg-green-600"
        }
      },
      position: {
        title: "Senior UI Designer",
        type: "Full-time"
      },
      description: "You will be expected to lead the company's entire UI strategy.",
      salary: {
        amount: "$2500",
        period: "/month"
      },
      applyButton: {
        variant: "outline"
      }
    }
  ];

  const renderLogo = (logo: any) => {
    if (logo.type === "gradient") {
      return (
        <div 
          className="w-10 h-10 rounded-lg mr-3 flex items-center justify-center"
          style={{ background: `linear-gradient(45deg, ${logo.colors.join(', ')})` }}
        >
          <span className="text-white font-bold text-xs">MS</span>
        </div>
      );
    }
    
    if (logo.type === "icon") {
      return (
        <div className={`w-10 h-10 rounded-lg mr-3 flex items-center justify-center ${logo.icon === 'apple' ? 'bg-black' : 'bg-indigo-600'}`}>
          {logo.icon === 'apple' ? (
            <AppleIcon className="w-6 h-6 text-white" />
          ) : (
            <DiscordIcon className="w-6 h-6 text-white" />
          )}
        </div>
      );
    }
    
    return (
      <div className={`w-10 h-10 rounded-lg mr-3 flex items-center justify-center ${logo.bgColor}`}>
        <span className={`text-white font-bold ${logo.text.length === 1 ? 'text-sm' : 'text-xs'}`}>
          {logo.text}
        </span>
      </div>
    );
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              <span className="text-[#056608]">Featured</span> Job 
            </h2>
          </div>

          {/* Job Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Company Info */}
                <div className="flex items-center mb-4">
                  {renderLogo(job.company.logo)}
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{job.company.name}</div>
                    <div className="text-xs text-gray-500">{job.company.location}</div>
                  </div>
                </div>

                {/* Position */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{job.position.title}</h3>
                  <div className="text-sm text-gray-500">{job.position.type}</div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {job.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-gray-900">{job.salary.amount}</span>
                    <span className="text-sm text-gray-500">{job.salary.period}</span>
                  </div>
                  <button
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        job.applyButton.variant === "filled"
                        ? "bg-[#056608] text-white hover:bg-[#056608]"
                        : "text-[#056608] border border-[#056608] hover:bg-[#056608] hover:text-white"
                    }`}
                    >
                    Apply Now
                    </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
