import { Footer } from "flowbite-react"
import { Link } from "react-router-dom"
import {BsLinkedin , BsTwitter , BsGithub,BsInstagram , BsTelegram} from 'react-icons/bs'

const FooterCom = () => {
  return (
    <Footer container className="border border-t-8 border-teal-500">

      <div className="w-full max-w-7xl mx-auto">

        {/* LOGO FOOTER */}
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link to={"/"} className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white">
                    <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                    rounded-lg text-white
                    ">MSK</span>
                    Blog
                </Link>
          </div>

        {/* COLUMNS */}
        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
          {/* COL ABOUT */}
            <div>

                <Footer.Title title='About' />
                <Footer.LinkGroup col>

                    <Footer.Link href="https://www.100projects.com" target="_blank" rel="noopener noreferrer">
                        100 JS Projects
                      </Footer.Link>

                      <Footer.Link href="/about" target="_blank" rel="noopener noreferrer">
                        MSK Blog
                      </Footer.Link>

                </Footer.LinkGroup>
            </div>

          {/* COL FOLLOW */}
            <div>

                <Footer.Title title='Follow us' />
                <Footer.LinkGroup col>

                    <Footer.Link href="https://github.com/saeed-karout" target="_blank" rel="noopener noreferrer">
                    Github
                    </Footer.Link>

                    <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                      Discord
                    </Footer.Link>

                </Footer.LinkGroup>
            </div>

          {/* COL LEGAL */}
          <div>

              <Footer.Title title='LEGAL' />
              <Footer.LinkGroup col>

                  <Footer.Link href="#">
                  Privacy Policy
                  </Footer.Link>

                  <Footer.Link href="#" >
                    Teams &amp; Conditions
                  </Footer.Link>

              </Footer.LinkGroup>
          </div>

        </div>

        </div>

          <Footer.Divider/>
              <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright href="#" by="MSK Blog" year={new Date().getFullYear()}/>

                  {/* Icon social */}
                    <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                      <Footer.Icon href="https://www.linkedin.com/in/saeed-karout/" icon={BsLinkedin} />
                      <Footer.Icon href="https://www.instagram.com/mohamad_saeed_karout/" icon={BsInstagram} />
                      <Footer.Icon href="https://github.com/saeed-karout" icon={BsGithub} />
                      <Footer.Icon href="#" icon={BsTwitter} />
                      <Footer.Icon href="https://t.me/Saeed_karout" icon={BsTelegram} />


                    </div>
              </div>
      </div>
    </Footer>
  )
}

export default FooterCom