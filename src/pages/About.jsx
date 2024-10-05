import { Button } from "flowbite-react"

const About = () => {
  return (
    <div className="min-h-screen f;ex items-center justify-center">

        <div className="max-w-2xl mx-auto p-3 text-start">
            <div >
                <h1 className="text-3xl font font-semibold text-center my-7">
                  About MSK Blog
                </h1>

                <div className="text-md text-gray-500 flex flex-col gap-6">
                  <h3 className="flex justify-start text-lg text-gray-800 dark:text-gray-300 border-b">Welcome to MSK Blog</h3>
                 <p className=" ">
                      At <Button className="inline" gradientDuoTone={'purpleToPink'}  size={'xs'} outline>MSK Blog</Button>, we are dedicated to providing cutting-edge programming services and the latest in technology information. Our platform is designed to offer valuable insights, resources, and updates in the rapidly evolving world of technology.
                 </p>

                
                 <h3 className="flex justify-start text-lg text-gray-800 dark:text-gray-300 border-b">Our Services</h3>
                 <p>
                 MSK Blog offers a range of programming services tailored to meet your needs. Whether you`re looking for software development, web applications, or mobile app solutions, our team of experts is ready to assist you. We specialize in delivering high-quality, scalable, and innovative solutions that drive business growth.
                 </p>

                 <h3 className="flex justify-start text-lg text-gray-800 dark:text-gray-300 border-b">Technology Insights</h3>

                  <p>
                  Stay informed with our technology insights section, where we cover topics such as artificial intelligence, blockchain, cybersecurity, cloud computing, and more. Our goal is to keep you updated on the latest trends and advancements in the tech industry, empowering you to make informed decisions for your projects and businesses.
                  </p>
                
                  <h3 className="flex justify-start text-lg text-gray-800 dark:text-gray-300 border-b">Why Choose MSK Blog?</h3>

                  <p>
                  Expertise: Our team comprises experienced professionals with a passion for technology.
                  Innovation: We are committed to staying ahead of the curve and delivering innovative solutions.
                  Resource Hub: Access a wealth of knowledge through our informative articles, tutorials, and case studies.
                  </p>




                  <p className="">
                  Explore MSK Blog today and embark on a journey of discovery in the realm of modern technology. Let us be your trusted partner in navigating the complexities of software development and technology advancement.
                  </p>


                </div>
            </div>
        </div>

    </div>
  )
}

export default About