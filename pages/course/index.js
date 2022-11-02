import React from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";
import Add from "../../components/Favorite/Add";
import Search from "../../components/Search/Search";

const myLoader = ({ src, width, quality }) => {
  return `https://images.pexels.com/${src}?w=${width}&q=${quality || 75}`;
};

const Courses = () => {
  return (
    <div className="bg-[#F9FAFF]">
      <Layout>
        {/* A search bar. */}
        <Search />

        <div className="text-3xl text-[#221F60] pl-24 mt-9 -mb-12 font-semibold">
          Types of Listing
        </div>

        <div className="container grid items-center content-center justify-center grid-cols-1 gap-4 p-20 mx-auto lg:grid-cols-3">
          <Link href="">
            <a>
              <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
                <div>
                  <Image
                    loader={myLoader}
                    src="/photos/196644/pexels-photo-196644.jpeg"
                    alt="Evolov"
                    width="345"
                    height="231"
                    className="rounded-lg"
                  />
                </div>

                <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
                  Design
                </div>
              </div>
            </a>
          </Link>

          <Link href="">
            <a>
              <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
                <div>
                  <Image
                    loader={myLoader}
                    src="/photos/2653362/pexels-photo-2653362.jpeg"
                    alt="Evolov"
                    width="345"
                    height="231"
                    className="rounded-lg"
                  />
                </div>
                <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
                  Development
                </div>
              </div>
            </a>
          </Link>

          <Link href="">
            <a>
              <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
                <div>
                  <Image
                    loader={myLoader}
                    src="/photos/590041/pexels-photo-590041.jpeg"
                    alt="Evolov"
                    width="345"
                    height="231"
                    className="rounded-lg"
                  />
                </div>
                <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
                  Marketing
                </div>
              </div>
            </a>
          </Link>

          <Link href="">
            <a>
              <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
                <div>
                  <Image
                    loader={myLoader}
                    src="/photos/392018/pexels-photo-392018.jpeg"
                    alt="Evolov"
                    width="345"
                    height="231"
                    className="rounded-lg"
                  />
                </div>

                <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
                  IT & Software
                </div>
              </div>
            </a>
          </Link>

          <Link href="">
            <a>
              <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
                <div>
                  <Image
                    loader={myLoader}
                    src="/photos/403495/pexels-photo-403495.jpeg"
                    alt="Evolov"
                    width="345"
                    height="231"
                    className="rounded-lg"
                  />
                </div>
                <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
                  Photography
                </div>
              </div>
            </a>
          </Link>

          <Link href="">
            <a>
              <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
                <div>
                  <Image
                    loader={myLoader}
                    src="/photos/144429/pexels-photo-144429.jpeg"
                    alt="Evolov"
                    width="345"
                    height="231"
                    className="rounded-lg"
                  />
                </div>
                <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
                  Music
                </div>
              </div>
            </a>
          </Link>

          <Link href="">
            <a>
              <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
                <div>
                  <Image
                    loader={myLoader}
                    src="/photos/848618/pexels-photo-848618.jpeg"
                    alt="Evolov"
                    width="345"
                    height="231"
                    className="rounded-lg"
                  />
                </div>

                <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
                  Sports
                </div>
              </div>
            </a>
          </Link>

          <Link href="">
            <a>
              <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
                <div>
                  <Image
                    loader={myLoader}
                    src="/photos/102127/pexels-photo-102127.jpeg"
                    alt="Evolov"
                    width="345"
                    height="231"
                    className="rounded-lg"
                  />
                </div>

                <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
                  Fine Arts
                </div>
              </div>
            </a>
          </Link>

          <Link href="">
            <a>
              <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
                <div>
                  <Image
                    loader={myLoader}
                    src="/photos/3771074/pexels-photo-3771074.jpeg"
                    alt="Evolov"
                    width="345"
                    height="231"
                    className="rounded-lg"
                  />
                </div>

                <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
                  Personal Development
                </div>
              </div>
            </a>
          </Link>

          <Link href="">
            <a>
              <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
                <div>
                  <Image
                    loader={myLoader}
                    src="/photos/301926/pexels-photo-301926.jpeg"
                    alt="Evolov"
                    width="345"
                    height="231"
                    className="rounded-lg"
                  />
                </div>

                <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
                  Teaching and Academics
                </div>
              </div>
            </a>
          </Link>

          <Link href="">
            <a>
              <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
                <div>
                  <Image
                    loader={myLoader}
                    src="/photos/4567486/pexels-photo-4567486.jpeg"
                    alt="Evolov"
                    width="345"
                    height="231"
                    className="rounded-lg"
                  />
                </div>

                <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
                  Language
                </div>
              </div>
            </a>
          </Link>

          <Link href="">
            <a>
              <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
                <div>
                  <Image
                    loader={myLoader}
                    src="photos/210990/pexels-photo-210990.jpeg"
                    alt="Evolov"
                    width="345"
                    height="231"
                    className="rounded-lg"
                  />
                </div>

                <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
                  Finance
                </div>
              </div>
            </a>
          </Link>
        </div>

        <div className="text-3xl text-[#221F60] pl-24 mt-9 items-center justify-center font-semibold">
          Recently Published
        </div>

        <div className="items-center justify-center px-20 lg:flex">
          <div className="w-[399px] h-[554px] flex-[1] mx-auto lg:p-1 pr-14">
            <Link href="/property/individual">
              <a>
                <Image
                  loader={myLoader}
                  src="photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Evolov"
                  width="399"
                  height="554"
                  className="rounded-xl"
                />
              </a>
            </Link>

            <div className="flex justify-between">
              <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
                Appertment for sale
                <div className="text-sm font-normal">New jersey</div>
                <div className="text-sm font-normal">kr 4343,342,34</div>
              </div>
              <div className="flex-col p-3 font-semibold text-orange-600">
                Private
                <div className="text-sm font-normal mt-4 text-[#221F60]">
                  25,000m
                </div>
              </div>
            </div>
          </div>

          <div className="lg:flex-[2] lg:mt-4 mt-14 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:p-6 pr-20 items-center mx-auto  content-center justify-center">
            <div className="h-[278px] mb-5">
              <div className="w-[370px] h-[209px] rounded-xl">
                <Link href="/property/individual">
                  <a>
                    <Image
                      loader={myLoader}
                      src="photos/1776574/pexels-photo-1776574.jpeg"
                      alt="Evolov"
                      width="370"
                      height="209"
                      className="rounded-xl"
                    />
                  </a>
                </Link>
                <div className="flex justify-between">
                  <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
                    Appertment for sale
                    <div className="text-sm font-normal">New jersey</div>
                    <div className="text-sm font-normal">kr 4343,342,34</div>
                  </div>
                  <div className="flex-col p-3 font-semibold text-orange-600">
                    Private
                    <div className="text-sm font-normal mt-5 text-[#221F60]">
                      25,000m
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[278px] mb-5">
              <div className="w-[370px] h-[209px] rounded-xl">
                <Link href="/property/individual">
                  <a>
                    <Image
                      loader={myLoader}
                      src="photos/1571472/pexels-photo-1571472.jpeg"
                      alt="Evolov"
                      width="370"
                      height="209"
                      className="rounded-xl"
                    />
                  </a>
                </Link>

                <div className="flex justify-between">
                  <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
                    Appertment for sale
                    <div className="text-sm font-normal">New jersey</div>
                    <div className="text-sm font-normal">kr 4343,342,34</div>
                  </div>
                  <div className="flex-col p-3 font-semibold text-orange-600">
                    Private
                    <div className="text-sm font-normal mt-5 text-[#221F60]">
                      25,000m
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[278px] mb-5">
              <div className="w-[370px] h-[209px] rounded-xl">
                <Link href="/property/company">
                  <a>
                    <Image
                      loader={myLoader}
                      src="photos/323775/pexels-photo-323775.jpeg"
                      alt="Evolov"
                      width="370"
                      height="209"
                      className="rounded-xl"
                    />
                  </a>
                </Link>
                <div className="flex justify-between">
                  <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
                    Appertment for sale
                    <div className="text-sm font-normal">New jersey</div>
                    <div className="text-sm font-normal">kr 4343,342,34</div>
                  </div>
                  <div className="flex-col p-3 font-semibold text-orange-600">
                    <div className="flex">
                      <Link href="/property/individual">
                        <a>
                          <Image
                            loader={myLoader}
                            src="photos/1643384/pexels-photo-1643384.jpeg"
                            alt="Evolov"
                            width="25"
                            height="25"
                            className="rounded-full pt-7"
                          />
                        </a>
                      </Link>

                      <div className="ml-2   text-[#221F60] font-semibold">
                        Lock
                      </div>
                    </div>
                    <div className="text-sm font-normal mt-4 text-[#221F60]">
                      25,000m
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[278px] mb-5">
              <div className="w-[370px] h-[209px] rounded-xl">
                <Link href="/property/individual">
                  <a>
                    <Image
                      loader={myLoader}
                      src="photos/2251247/pexels-photo-2251247.jpeg"
                      alt="Evolov"
                      width="370"
                      height="209"
                      className="rounded-xl"
                    />
                  </a>
                </Link>
                <div className="flex justify-between">
                  <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
                    Appertment for sale
                    <div className="text-sm font-normal">New jersey</div>
                    <div className="text-sm font-normal">kr 4343,342,34</div>
                  </div>
                  <div className="flex-col p-3 font-semibold text-orange-600">
                    Private
                    <div className="text-sm font-normal mt-5 text-[#221F60]">
                      25,000m
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Courses;
