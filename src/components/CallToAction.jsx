import { Button } from "flowbite-react"

const CallToAction = () => {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl text-center ">

        <div className="flex-1 justify-center flex flex-col">
            <h2 className="text-2xl">
                Want to learn more about C#?
            </h2>

            <p className="text-gray-500 my-5">
                Checkout these resource with 100 JAvaScript Projects
            </p>

            <Button
            className="rounded-tl-xl rounded-bl-none"
            gradientDuoTone={'purpleToPink'}>
                    <a href="https://wwwjsprojects.com" target="_blank" rel="noopener noreferror">
                        100 JavaScript Projects
                    </a>
            </Button>
        </div>

        <div className="p-7 flex-1">
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*LyZcwuLWv2FArOumCxobpA.png"  />
        </div>
    </div>
  )
}

export default CallToAction