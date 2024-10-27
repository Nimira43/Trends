import { Component } from 'solid-js'

const App: Component = () => {
  return (
    <div>
      <div class="w-full h-full bg-[#0b0b2e] text-[#ff4500]">
        <div class="flex h-full min-h-252">
          <header class="lg:flex-grow flex-it items-end">
            <div class="xl:w-80 w-20 flex-it">
              <div class="h-full fixed flex-it top-0">
                <div class="flex-it h-full xl:w-80 w-20 overflow-y-auto px-3 justify-between">
                  <div class="flex-it items-start">
                    <div class="p-3 pt-4 xl:pb-3 pb-0 xl:text-2xl text-sm font-bold transition duration-200 hover:text-[#eee]">
                      <a href="#">
                        <h1>Trends</h1>
                      </a>
                    </div>
                    <div class="my-1 w-full flex-it">
                      <nav class="flex-it items-start">
                        <a class="flex-it items-start flex-grow w-full" href="#">
                          <div class="p-3 flex-row justify-center items-center flex-it rounded-3xl hover:bg-[#000] hover:rounded-xl transition duration-200">
                            <div class="flex-it">
                              {/* <AiOutlineHome size={24} /> */}
                            </div>
                            <div class="mx-4 text-2xl truncate xl:block hidden">
                              <span class="truncate">Home</span>
                            </div>
                          </div>
                        </a>
                        <a class="flex-it items-start flex-grow w-full" href="#">
                          <div class="p-3 flex-row justify-center items-center flex-it rounded-3xl hover:bg-[#000] hover:rounded-xl transition duration-200">
                            <div class="flex-it">
                              {/* <CgProfile size={24} /> */}
                            </div>
                            <div class="mx-4 text-2xl truncate xl:block hidden">
                              <span class="truncate">Profile</span>
                            </div>
                          </div>
                        </a>
                        <a class="flex-it items-start flex-grow w-full" href="#">
                          <div class="p-3 flex-row justify-center items-center flex-it rounded-3xl hover:bg-[#000] hover:rounded-xl transition duration-200">
                            <div class="flex-it">
                              {/* <CgMoreO size={24} /> */}
                            </div>
                            <div class="mx-4 text-2xl truncate xl:block hidden">
                              <span class="truncate">More</span>
                            </div>
                          </div>
                        </a>
                        <a class="flex-it items-start flex-grow w-full" href="#">
                          <div class="p-3 flex-row justify-center items-center flex-it rounded-3xl hover:bg-[#000] hover:rounded-xl transition duration-200">
                            <div class="flex-it">
                              {/* <IoNotificationsCircleOutline size={24} /> */}
                            </div>
                            <div class="mx-4 text-2xl truncate xl:block hidden">
                              <span class="truncate">Notification</span>
                            </div>
                          </div>
                        </a>
                        <a class="flex-it items-start flex-grow w-full" href="#">
                          <div class="p-3 flex-row justify-center items-center flex-it rounded-3xl hover:bg-[#000] hover:rounded-xl transition duration-200">
                            <div class="flex-it">
                              {/* <RiMapCompassDiscoverLine size={24} /> */}
                            </div>
                            <div class="mx-4 text-2xl truncate xl:block hidden">
                              <span class="truncate">Discover</span>
                            </div>
                          </div>
                        </a>
                      </nav>
                    </div>
                    <div class="my-1 flex-it w-10/12 cursor-pointer">
                      <div class="bg-[#ff4500] text-[#111] hover:text-[#eee] font-bold py-2 px-4 rounded-xl flex-it transition">
                        <div class="flex-it flex-row text-xl font-bold text-[#000] hover:text-[#eee] items-start justify-center truncate duration-200">
                          <div>Glide It</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex-it my-3 hover:cursor-pointer">
                    
                  </div>
                </div>
              </div>
            </div>
          </header>
          <main class="flex-it flex-grow flex-shrink items-start">
            <div class="flex md:w-248 w-full h-full">
              <div class="flex-it flex-grow flex-shrink">
                <div class="flex-it flex-row justify-between min-h-full">
                  <div class="flex-it md:max-w-152 w-full border-x-1 border-solid border-[#eee]">
                    <div class="sticky z-10 flex-it top-0">
                      <div class="flex-it h-14 p-4 xl:text-xl text-sm font-bold z-10 backdrop-blur-md bg-opacity-70">
                        Home
                      </div>
                    </div>
                  </div>
                  <div class="flex-it md:w-92 w-0 mt-4">
                    <div class="bg-[#000] overflow-hidden flex-it rounded-2xl">
                      <div class="flex-it p-4">
                        <span class="text-xl font-bold">Trends</span>
                      </div>
                      <div class="flex-it p-4 cursor-pointer transition duration-200 hover:bg-[#ff4500]">
                        <div class="flex-it">
                          <span class="text-[#eee] text-sm">
                            Trends in Europe
                          </span>
                          <span class="text-lg font-bold">Sports</span>
                          <span class="text-[#eee] text-sm">10 000 posts</span>
                        </div>
                      </div>
                      <div class="flex-it p-4 cursor-pointer transition duration-200 hover:bg-[#ff4500]">
                        <div class="flex-it">
                          <span class="text-[#eee] text-sm">
                            Trends in Europe
                          </span>
                          <span class="text-lg font-bold">Sports</span>
                          <span class="text-[#eee] text-sm">10 000 posts</span>
                        </div>
                      </div>
                      <div class="flex-it p-4 cursor-pointer transition duration-200 hover:bg-[#ff4500]">
                        <div class="flex-it">
                          <span class="text-[#eee] text-sm">
                            Trends in Europe
                          </span>
                          <span class="text-lg font-bold">Sports</span>
                          <span class="text-[#eee] text-sm">10 000 posts</span>
                        </div>
                      </div>
                      <div class="flex-it p-4 cursor-pointer transition duration-200 hover:bg-[#ff4500]">
                        <div class="flex-it">
                          <span class="text-[#eee] text-sm">
                            Trends in Europe
                          </span>
                          <span class="text-lg font-bold">Sports</span>
                          <span class="text-[#eee] text-sm">10 000 posts</span>
                        </div>
                      </div>
                      <div class="flex-it p-4 cursor-pointer transition duration-200 hover:bg-[#ff4500]">
                        <div class="flex-it">
                          <span class="text-[#eee] text-sm">
                            Trends in Europe
                          </span>
                          <span class="text-lg font-bold">Sports</span>
                          <span class="text-[#eee] text-sm">10 000 posts</span>
                        </div>
                      </div>
                      <div class="flex-it p-4 cursor-pointer transition duration-200 hover:bg-[#ff4500]">
                        <div class="flex-it">
                          <span class="text-[#eee] text-sm">
                            Trends in Europe
                          </span>
                          <span class="text-lg font-bold">Sports</span>
                          <span class="text-[#eee] text-sm">10 000 posts</span>
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
    </div>
  )
}

export default App