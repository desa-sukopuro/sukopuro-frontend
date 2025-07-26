import React from 'react';

interface PersonCard {
  name: string;
  position: string;
  image: string;
}

const OrganizationalStructure: React.FC = () => {
  // Sample data - replace with your actual data
  const kepalaDeasa: PersonCard = {
    name: "Yahut",
    position: "Kepala Desa",
    image: "/api/placeholder/154/208"
  };

  const departmentHeads: PersonCard[] = [
    {
      name: "Samuel Arfita",
      position: "Kasi Pemerintahan",
      image: "/api/placeholder/154/208"
    },
    {
      name: "Iban Sartomo, S.AP",
      position: "Sekretaris Desa",
      image: "/api/placeholder/154/208"
    }
  ];

  const middleManagement: PersonCard[] = [
    {
      name: "",
      position: "Kasi Kesejahteraan",
      image: "/api/placeholder/154/208"
    },
    {
      name: "Ade Ghoni",
      position: "Kasi Pelayanan",
      image: "/api/placeholder/154/208"
    }
  ];

  const lowerManagement: PersonCard[] = [
    {
      name: "Machmudrara",
      position: "Kasi Keuangan",
      image: "/api/placeholder/154/208"
    },
    {
      name: "Suharno",
      position: "Kaur Perencanaan",
      image: "/api/placeholder/154/208"
    },
    {
      name: "",
      position: "Kaur Perencanaan",
      image: "/api/placeholder/154/208"
    }
  ];

  const teamMembers: PersonCard[] = [
    {
      name: "Adi Yahya Azusari",
      position: "Kepala Dusun",
      image: "/api/placeholder/154/208"
    },
    {
      name: "Neli Arda",
      position: "Kepala Dusun",
      image: "/api/placeholder/154/208"
    },
    {
      name: "Suparji",
      position: "Kepala Dusun",
      image: "/api/placeholder/154/208"
    },
    {
      name: "Oper Herlinus",
      position: "Kepala Dusun",
      image: "/api/placeholder/154/208"
    }
  ];

  const PersonCardComponent: React.FC<{ person: PersonCard; isLeader?: boolean }> = ({ 
    person, 
    isLeader = false 
  }) => (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden w-[353px] h-[220px]`}>
      <div className="flex h-full">
        <div className="w-[154px] h-full bg-red-600 flex-shrink-0 rounded-l-lg">
          <img 
            src={person.image} 
            alt={person.name}
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>
        <div className="flex-1 p-6 flex flex-col justify-center bg-white">
          <div className="bg-teal-600 text-white px-4 py-2 rounded text-sm font-bold mb-3">
            {person.position}
          </div>
          <div className="text-gray-800 font-semibold text-base">
            {person.name || "TBA"}
          </div>
        </div>
      </div>
    </div>
  );

  const ConnectionLine: React.FC<{ className?: string }> = ({ className = "" }) => (
    <div className={`bg-gray-400 ${className}`}></div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 pt-[148px] px-4 my-0">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-[581px] h-[98px] mx-auto flex flex-col justify-center">
            <h1 className="text-5xl font-normal leading-none mb-2 text-gray-800 text-left">
              Struktur Perangkat
            </h1>
            <p className="text-2xl font-bold text-gray-700 leading-none text-left">
              Struktur Organisasi dan Tata Kerja
            </p>
          </div>
        </div>

        {/* Organizational Chart Container */}
        <div className="bg-gradient-to-b from-blue-100 to-blue-200 rounded-3xl py-8 md:p-12 border border-gray-300 relative ">
          
          {/* Kepala Desa - Top Level */}
          <div className="flex flex-col items-center mb-16">
            <PersonCardComponent person={kepalaDeasa} isLeader={true} />
            <ConnectionLine className="w-px h-16 mt-6" />
          </div>

          {/* Department Heads - Second Level */}
          <div className="flex flex-col lg:flex-row justify-center items-start gap-12 lg:gap-24 mb-16 relative">
            {/* Horizontal line connecting department heads */}
            <div className="hidden lg:block absolute top-28 left-1/2 transform -translate-x-1/2 w-96 h-px bg-gray-400"></div>
            
            {departmentHeads.map((person, index) => (
              <div key={index} className="flex flex-col items-center">
                <ConnectionLine className="w-px h-12 mb-6" />
                <PersonCardComponent person={person} />
                <ConnectionLine className="w-px h-16 mt-6" />
              </div>
            ))}
          </div>

          {/* Middle Management - Third Level */}
          <div className="flex flex-col lg:flex-row justify-center items-start gap-12 lg:gap-40 mb-16 relative">
            {middleManagement.map((person, index) => (
              <div key={index} className="flex flex-col items-center">
                <PersonCardComponent person={person} />
                <ConnectionLine className="w-px h-16 mt-6" />
              </div>
            ))}
          </div>

          {/* Lower Management - Fourth Level */}
          <div className="flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-12 mb-16">
            {lowerManagement.map((person, index) => (
              <div key={index} className="flex flex-col items-center">
                <PersonCardComponent person={person} />
                {index < lowerManagement.length - 1 && (
                  <ConnectionLine className="w-px h-16 mt-6" />
                )}
              </div>
            ))}
          </div>

          {/* Team Members - Bottom Level */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 justify-items-center mt-20">
            {teamMembers.map((person, index) => (
              <div key={index} className="flex flex-col items-center">
                <ConnectionLine className="w-px h-12 mb-6" />
                <PersonCardComponent person={person} />
              </div>
            ))}
          </div>

          {/* Connecting lines for team members */}
          <div className="hidden lg:block absolute bottom-64 left-1/2 transform -translate-x-1/2 w-4/5 h-px bg-gray-400"></div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationalStructure;