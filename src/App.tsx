import { HiOutlineHome } from 'solid-icons/hi'
import { RiUserFacesUserLine } from 'solid-icons/ri'
import { CgMore, CgMoreR } from 'solid-icons/cg'
import { ImNotification } from 'solid-icons/im'
import { VsCompass } from 'solid-icons/vs'
import { Component } from 'solid-js'

const App: Component = () => {
  return (
    <div class='w-full h-full bg-[#fff] text-[#000]'>
      <div class='flex h-full min-h-252'>
        <header class='lg:flex-grow flex-it items-end'>
          <div class='xl:w-80 w-20 flex-it'>
            <div class='h-full fixed flex-it top-0'>
              <div class='flex-it h-full xl:w-80 w-20 overflow-y-auto px-3 justify-between'>
                <div class='flex-it items-start'>
                  <div class='p-3 pt-4 xl:pb-3 pb-0 xl:text-2xl text-sm font-bold transition duration-200 hover:text-[#ff4500]'>
                    <a href='#'>
                      <h1>Trends</h1>
                    </a>
                  </div>
                  <div class='my-1 w-full flex-it'>
                    <nav class='flex-it items-start'>
                      <a class='flex-it items-start flex-grow w-full' href='#'>
                        <div class='p-3 flex-row justify-center items-center flex-it rounded-xl hover:rounded-xl transition duration-200'>
                          <div class='flex-it'>
                            <HiOutlineHome size={24} />
                          </div>
                          <div class='mx-4 text-2xl truncate xl:block hidden'>
                            <span class='truncate'>Home</span>
                          </div>
                        </div>
                      </a>
                      <a class='flex-it items-start flex-grow w-full' href='#'>
                        <div class='p-3 flex-row justify-center items-center flex-it rounded-xl hover:bg-[#ff4500] hover:rounded-xl transition duration-200'>
                          <div class='flex-it'>
                            <RiUserFacesUserLine size={24} />
                          </div>
                          <div class='mx-4 text-2xl truncate xl:block hidden'>
                            <span class='truncate'>Profile</span>
                          </div>
                        </div>
                      </a>
                      <a class='flex-it items-start flex-grow w-full' href='#'>
                        <div class='p-3 flex-row justify-center items-center flex-it rounded-xl hover:bg-[#ff4500] hover:rounded-xl transition duration-200'>
                          <div class='flex-it'>
                            <CgMoreR size={24} />
                          </div>
                          <div class='mx-4 text-2xl truncate xl:block hidden'>
                            <span class='truncate'>More</span>
                          </div>
                        </div>
                      </a>
                      <a class='flex-it items-start flex-grow w-full' href='#'>
                        <div class='p-3 flex-row justify-center items-center flex-it rounded-xl hover:bg-[#ff4500] hover:rounded-xl transition duration-200'>
                          <div class='flex-it'>
                            <ImNotification size={24} />
                          </div>
                          <div class='mx-4 text-2xl truncate xl:block hidden'>
                            <span class='truncate'>Notification</span>
                          </div>
                        </div>
                      </a>
                      <a class='flex-it items-start flex-grow w-full' href='#'>
                        <div class='p-3 flex-row justify-center items-center flex-it rounded-xl hover:bg-[#ff4500] hover:rounded-xl transition duration-200'>
                          <div class='flex-it'>
                            <VsCompass size={24} />
                          </div>
                          <div class='mx-4 text-2xl truncate xl:block hidden'>
                            <span class='truncate'>Discover</span>
                          </div>
                        </div>
                      </a>
                    </nav>
                  </div>
                  <div class='my-1 flex-it w-10/12 cursor-pointer'>
                    <div class='bg-[#ff4500] hover:bg-[#000] text-[#fff] font-bold py-2 px-4 rounded-full flex-it transition'>
                      <div class='flex-it flex-row text-xl font-bold text-[#fff] items-start justify-center truncate duration-200'>
                        <div>Notify</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='flex-it my-3 hover:cursor-pointer'>
                  <div class="flex-it items-center flex-row p-3 rounded-3xl hover:text-[#fff] hover:bg-[#ff4500] hover:rounded-3xl transition duration-200 cursor-pointer">
                    <div class="flex-it">
                      <div class="w-10 h-10 overflow-visible">
                        <img
                          class="rounded-full"
                          src="/billy.png"
                        ></img>
                      </div>
                    </div>
                    <div class="flex-it xl:flex hidden flex-grow flex-row justify-between items-center">
                      <div class="flex-it mx-3 font-bold">Nick</div>
                      <div class="flex-it">
                        <CgMore />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main class='flex-it flex-grow flex-shrink items-start'>
          <div class='flex md:w-248 w-full h-full'>
            <div class='flex-it flex-grow flex-shrink'>
              <div class='flex-it flex-row justify-between min-h-full'>
                <div class='flex-it md:max-w-152 w-full border-x-1 border-solid border-[#000]'>
                  <div class='sticky z-10 flex-it top-0'>
                    <div class='flex-it h-14 p-4 xl:text-xl text-sm font-bold z-10 backdrop-blur-md bg-opacity-70'>
                      Home
                    </div>
                  </div>
                </div>
                <div class='flex-it md:w-92 w-0 mt-4'>
                  <div class='bg-[#000] text-[#fff] overflow-hidden flex-it rounded-2xl'>
                    <div class='flex-it p-4'>
                      <span class='text-xl font-bold'>Trends</span>
                    </div>
                    <div class='flex-it p-4 cursor-pointer transition duration-200 hover:bg-[#ff4500]'>
                      <div class='flex-it'>
                        <span class='text-[#fff] text-sm'>
                          Trends in Europe
                        </span>
                        <span class='text-lg font-bold hover:text-[#000] transition duration-200'>Sports</span>
                        <span class='text-[#fff] text-sm'>10 000 glides</span>
                      </div>
                    </div>
                    <div class='flex-it p-4 cursor-pointer transition duration-200 hover:bg-[#ff4500]'>
                      <div class='flex-it'>
                        <span class='text-[#fff] text-sm'>
                          Trends in Europe
                        </span>
                        <span class='text-lg font-bold hover:text-[#000] transition duration-200'>Sports</span>
                        <span class='text-[#fff] text-sm'>10 000 glides</span>
                      </div>
                    </div>
                    <div class='flex-it p-4 cursor-pointer transition duration-200 hover:bg-[#ff4500]'>
                      <div class='flex-it'>
                        <span class='text-[#fff] text-sm'>
                          Trends in Europe
                        </span>
                        <span class='text-lg font-bold hover:text-[#000] transition duration-200'>Sports</span>
                        <span class='text-[#fff] text-sm'>10 000 glides</span>
                      </div>
                    </div>
                    <div class='flex-it p-4 cursor-pointer transition duration-200 hover:bg-[#ff4500]'>
                      <div class='flex-it'>
                        <span class='text-[#fff] text-sm'>
                          Trends in Europe
                        </span>
                        <span class='text-lg font-bold hover:text-[#000] transition duration-200'>Sports</span>
                        <span class='text-[#fff] text-sm'>10 000 glides</span>
                      </div>
                    </div>
                    <div class='flex-it p-4 cursor-pointer transition duration-200 hover:bg-[#ff4500]'>
                      <div class='flex-it'>
                        <span class='text-[#fff] text-sm'>
                          Trends in Europe
                        </span>
                        <span class='text-lg font-bold hover:text-[#000] transition duration-200'>Sports</span>
                        <span class='text-[#fff] text-sm'>10 000 glides</span>
                      </div>
                    </div>
                    <div class='flex-it p-4 cursor-pointer transition duration-200 hover:bg-[#ff4500]'>
                      <div class='flex-it'>
                        <span class='text-[#fff] text-sm'>
                          Trends in Europe
                        </span>
                        <span class='text-lg font-bold hover:text-[#000] transition duration-200'>Sports</span>
                        <span class='text-[#fff] text-sm'>10 000 glides</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App