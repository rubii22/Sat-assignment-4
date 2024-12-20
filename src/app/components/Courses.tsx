export default function CoursesSection() {
    const coreCourses = [
      { title: "Programming Fundamentals", image: "/course-1.png" },
      { title: "Web2 Using NextJS", image: "/course-2.png" },
      { title: "Earn as You Learn", image: "/course-3.png" },
    ];
  
    const advancedCourses = [
      { title: "Artificial Intelligence", image: "/course-4.png" },
      { title: "Web 3 and Metaverse", image: "/course-5.png" },
      { title: "Cloud-Native Computing", image: "/course-6.png" },
      { title: "Ambient Computing and IoT", image: "/course-7.png" },
      { title: "Genomics and Bioinformatics", image: "/course-8.png" },
      { title: "Network Programmability and Automation", image: "/course-9.png" },
    ];
  
    return (
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-20 text-center">
          {/* Core Courses */}
          <h2 className="text-2xl sm:text-4xl font-bold text-blue-900 mb-8 text-left">
            Core Courses Sequence
          </h2>
          <div className="flex justify-left">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {coreCourses.map((course, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-500">
                      {course.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          {/* Advanced Courses */}
          <h2 className="text-2xl sm:text-4xl font-bold text-blue-900 mt-12 mb-8 text-left">
            Advanced Courses
          </h2>
          <div className="flex justify-left">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {advancedCourses.map((course, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-500">
                      {course.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  