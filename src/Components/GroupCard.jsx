import React from 'react'
function GroupCard() {

    const data=[
        {
            group:"Trip to Goa",
            uramount:"₹250",
            owe:"Joohi owes you ₹100",
            owe2:"Ishita owes you ₹150"
        },
        {
            group:"College Friends",
            uramount:"₹250",
            owe:"Joohi owes you ₹100",
            owe2:"Ishita owes you ₹150"
        },
        {
            group:"Family",
            uramount:"₹250",
            owe:"Joohi owes you ₹100",
            owe2:"Ishita owes you ₹150"
        }
        ,
        
    ]
  return (

    <div>
     
    
    <div className='p-4 md:p-[5%] flex flex-wrap gap-6 md:gap-16 items-center justify-center md:justify-around'>


        {data.map((elem,idx)=>(
        <div
          key={idx}
          className="w-[280px] md:w-72 rounded-xl md:rounded-2xl shadow-lg bg-gradient-to-r from-gray-600 to-gray-500 overflow-hidden transition-all duration-700 ease-in-out hover:shadow-xl cursor-pointer group"
        >
          <div className="p-4 md:p-6 relative">
            {/* Symbol Circle - Always Visible */}
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-md flex items-center justify-center border-3 md:border-4 border-blue-400 mx-auto -mt-3 md:-mt-4 mb-3 md:mb-4 transition-transform duration-500 group-hover:rotate-180 group-hover:scale-110">
              <span className="text-2xl md:text-3xl text-teal-600 font-semibold transition-colors duration-500 group-hover:text-blue-700">
                {elem.group.charAt(0)}
              </span>
            </div>

            {/* Content Container */}
            <div className="space-y-3 md:space-y-4">
              {/* Group Name - Always Visible */}
              <h2 className="text-white text-lg md:text-xl font-bold text-center">
                {elem.group}
              </h2>

              {/* Expandable Content */}
              <div className="overflow-hidden transition-all duration-700 ease-out max-h-0 group-hover:max-h-[200px]">
                <div className="bg-gradient-to-r from-purple-100 to-green-100 rounded-lg p-3 md:p-4">
                  <h3 className="text-blue-800 text-lg md:text-xl font-bold text-center mb-2 md:mb-3">
                    {elem.uramount}
                  </h3>
                  <div className="space-y-1 md:space-y-2">
                    <p className="text-teal-900 text-xs md:text-sm text-center font-medium">
                      {elem.owe}
                    </p>
                    <p className="text-teal-900 text-xs md:text-sm text-center font-medium">
                      {elem.owe2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        

))}
    
    </div>

    </div>
    
  )
}

export default GroupCard
