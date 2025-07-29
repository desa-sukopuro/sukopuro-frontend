"use client"
import type React from "react"
interface PersonCard {
  name: string
  position: string
  image: string
}

const OrganizationalStructure: React.FC = () => {
  // Sample data - replace with your actual data
  const kepalaDesa: PersonCard = {
    name: "Yahut",
    position: "Kepala Desa",
    image: "../src/assets/picture/dody-kinky.jpeg",
  }

  const departmentHeads: PersonCard[] = [
    {
      name: "Samuel Arfita",
      position: "Kasi Pemerintahan",
      image: "../src/assets/picture/dody-kinky.jpeg",
    },
    {
      name: "Iban Sartomo, S.AP",
      position: "Sekretaris Desa",
      image: "../src/assets/picture/dody-kinky.jpeg",
    },
  ]

  const middleManagement: PersonCard[] = [
    {
      name: "",
      position: "Kasi Kesejahteraan",
      image: "../src/assets/picture/dody-kinky.jpeg",
    },
    {
      name: "Ade Ghoni",
      position: "Kasi Pelayanan",
      image: "../src/assets/picture/dody-kinky.jpeg",
    },
  ]

  const lowerManagement: PersonCard[] = [
    {
      name: "Machmudrara",
      position: "Kasi Keuangan",
      image: "../src/assets/picture/dody-kinky.jpeg",
    },
    {
      name: "Suharno",
      position: "Kaur Perencanaan",
      image: "../src/assets/picture/dody-kinky.jpeg",
    },
    {
      name: "",
      position: "Kaur Perencanaan",
      image: "../src/assets/picture/dody-kinky.jpeg",
    },
  ]

  const teamMembers: PersonCard[] = [
    {
      name: "Adi Yahya Azusari",
      position: "Kepala Dusun",
      image: "../src/assets/picture/dody-kinky.jpeg",
    },
    {
      name: "Neli Arda",
      position: "Kepala Dusun",
      image: "../src/assets/picture/dody-kinky.jpeg",
    },
    {
      name: "Suparji",
      position: "Kepala Dusun",
      image: "../src/assets/picture/dody-kinky.jpeg",
    },
    {
      name: "Oper Herlinus",
      position: "Kepala Dusun",
      image: "../src/assets/picture/dody-kinky.jpeg",
    },
  ]

  const PersonCardComponent: React.FC<{ person: PersonCard; isLeader?: boolean }> = ({ person, isLeader = false }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[200px] h-[140px] border border-gray-200">
      <div className="flex h-full">
        <div className="w-[80px] h-full bg-[#053A45] flex-shrink-0">
          <img src={person.image || "/placeholder.svg"} alt={person.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 p-3 flex flex-col  bg-white">
          <div className="bg-[#053A45] text-white px-2 py-1 rounded text-xs font-bold mb-2 text-center">
            {person.position}
          </div>
          <div className="text-gray-800 font-semibold text-sm text-center">{person.name || "TBA"}</div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen pt-20 relative">
      {/* Background with opacity using pseudo-element */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('../src/assets/picture/bg-fix.png')",
          backgroundRepeat: "repeat-y",
          backgroundSize: "auto",
          backgroundPosition: "center center",
          opacity: 0.4,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-normal text-gray-800 mb-2">Struktur Perangkat</h1>
          <p className="text-xl md:text-2xl font-bold text-gray-700">Struktur Organisasi dan Tata Kerja</p>
        </div>

        {/* Organizational Chart Container */}
        <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-3xl p-8 md:p-12 border border-gray-200 relative min-h-[800px]">
          {/* Kepala Desa - Top Level */}
          <div className="flex flex-col items-center mb-12">
            <PersonCardComponent person={kepalaDesa} isLeader={true} />
            {/* Vertical line down */}
            <div className="w-0.5 h-12 bg-gray-400 mt-4"></div>
          </div>

          {/* Department Heads - Second Level */}
          <div className="flex justify-center items-start gap-32 mb-12 relative">
            {/* Horizontal line connecting department heads */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-80 h-0.5 bg-gray-400"></div>
            {departmentHeads.map((person, index) => (
              <div key={index} className="flex flex-col items-center relative">
                {/* Vertical line up to horizontal line */}
                <div className="w-0.5 h-8 bg-gray-400 mb-4"></div>
                <PersonCardComponent person={person} />
                {/* Vertical line down */}
                <div className="w-0.5 h-12 bg-gray-400 mt-4"></div>
              </div>
            ))}
          </div>

          {/* Middle Management - Third Level */}
          <div className="flex justify-center items-start gap-32 mb-12 relative">
            {middleManagement.map((person, index) => (
              <div key={index} className="flex flex-col items-center">
                <PersonCardComponent person={person} />
                {/* Vertical line down */}
                <div className="w-0.5 h-12 bg-gray-400 mt-4"></div>
              </div>
            ))}
          </div>

          {/* Lower Management - Fourth Level */}
          <div className="flex justify-center items-start gap-8 mb-16">
            {lowerManagement.map((person, index) => (
              <div key={index} className="flex flex-col items-center">
                <PersonCardComponent person={person} />
                {index === 1 && <div className="w-0.5 h-12 bg-gray-400 mt-4"></div>}
              </div>
            ))}
          </div>

          {/* Horizontal line for team members */}
          <div className="flex justify-center mb-8">
            <div className="w-96 h-0.5 bg-gray-400"></div>
          </div>

          {/* Team Members - Bottom Level */}
          <div className="flex justify-center items-start gap-6">
            {teamMembers.map((person, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Vertical line up to horizontal line */}
                <div className="w-0.5 h-8 bg-gray-400 mb-4"></div>
                <PersonCardComponent person={person} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrganizationalStructure