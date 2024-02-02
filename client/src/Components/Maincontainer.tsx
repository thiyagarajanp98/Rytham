import { useSelector } from "react-redux";
import {
  selectAllHomeData,
  getHomeDataStatus,
  getHomeDataError,
} from "../features/homeData";
import Header from "./Header";
import Player from "./Player";

const Maincontainer = () => {
  const data = useSelector(selectAllHomeData);
  const loading = useSelector(getHomeDataStatus);
  const error = useSelector(getHomeDataError);

  if (loading) {
    return <span className="cursor-pointer">Loading...</span>;
  }
  if (error) {
    return <span className="cursor-pointer">Error: {error}</span>;
  }

  return (
    <main className="px-9 py-[0.6rem] w-[90%]">
      <Header />
      {/* <div className="flex justify-center"> */}
      {/* <span className="cursor-pointer">
          {data ? (
            <>
              <span className="text-white">
                <p className="tracking-[1px] text-[15px] mt-2">User Data:</p>
                {Object.keys(data.modules).map((result) => {
                  return data.modules[result].title;
                })}
              </span>
            </>
          ) : (
            <span className="cursor-pointer">No user data found.</span>
          )}
        </span> */}

      {/* </div> */}
      <div className=" flex flex-col items-center justify-center">
        <h2 className="album-title text-white  self-start text-[1.3333333333rem] mb-5">
          Trending Now
        </h2>
        <div className="album-card-container flex flex-col justify-center overflow-x-scroll scrollbar-hide w-full">
          <div className="card-container flex gap-5">
            <a href="/album" className="peer">
              <span className="cursor-pointer group">
                <div className="album-card shrink-0 w-[142px] h-[142px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] overflow-hidden transition-transform duration-[0.3s] rounded-lg hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  <img
                    src="https://c.saavncdn.com/118/Katchi-Sera-from-Think-Indie-Tamil-2024-20240122043105-500x500.jpg?bch=474137"
                    alt="Katchi Sera from Think Indie"
                    className="album-image w-full h-full object-contain object-center transition-opacity duration-[0.3s]"
                  />
                </div>
                <span className="album-details  text-center text-base w-[142px] block overflow-hidden whitespace-nowrap text-ellipsis text-[#f3edf0] px-[0%] py-[5%] transition-transform duration-[0.3s] group-hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  Katchi Sera from Think Indie
                </span>
              </span>
            </a>
            <a
              href="/album"
              className="peer peer-hover:translate-x-2  transition-transform duration-[0.3s]"
            >
              <span className="cursor-pointer group">
                <div className="album-card shrink-0 w-[142px] h-[142px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] overflow-hidden transition-transform duration-[0.3s] rounded-lg hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  <img
                    src="https://c.saavncdn.com/823/Chithha-Tamil-2023-20230926235310-500x500.jpg?bch=474137"
                    alt="Chithha"
                    className="album-image w-full h-full object-contain object-center transition-opacity duration-[0.3s]"
                  />
                </div>
                <span className="album-details  text-center text-base w-[142px] block overflow-hidden whitespace-nowrap text-ellipsis text-[#f3edf0] px-[0%] py-[5%] transition-transform duration-[0.3s] group-hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  Chithha
                </span>
              </span>
            </a>
            <a
              href="/album"
              className="peer peer-hover:translate-x-2  transition-transform duration-[0.3s]"
            >
              <span className="cursor-pointer group">
                <div className="album-card shrink-0 w-[142px] h-[142px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] overflow-hidden transition-transform duration-[0.3s] rounded-lg hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  <img
                    src="https://c.saavncdn.com/editorial/HeartbreakHits_20220919121933.jpg"
                    alt="Heartbreak Hits"
                    className="album-image w-full h-full object-contain object-center transition-opacity duration-[0.3s]"
                  />
                </div>
                <span className="album-details  text-center text-base w-[142px] block overflow-hidden whitespace-nowrap text-ellipsis text-[#f3edf0] px-[0%] py-[5%] transition-transform duration-[0.3s] group-hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  Heartbreak Hits
                </span>
              </span>
            </a>
            <a
              href="/album"
              className="peer peer-hover:translate-x-2  transition-transform duration-[0.3s]"
            >
              <span className="cursor-pointer group">
                <div className="album-card shrink-0 w-[142px] h-[142px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] overflow-hidden transition-transform duration-[0.3s] rounded-lg hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  <img
                    src="https://c.saavncdn.com/editorial/Let_sPlayAnirudhRavichanderTamil_20231218061547.jpg"
                    alt="Let's Play - Anirudh Ravichander - Tamil"
                    className="album-image w-full h-full object-contain object-center transition-opacity duration-[0.3s]"
                  />
                </div>
                <span className="album-details  text-center text-base w-[142px] block overflow-hidden whitespace-nowrap text-ellipsis text-[#f3edf0] px-[0%] py-[5%] transition-transform duration-[0.3s] group-hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  Let's Play - Anirudh Ravichander - Tamil
                </span>
              </span>
            </a>
            <a
              href="/album"
              className="peer peer-hover:translate-x-2  transition-transform duration-[0.3s]"
            >
              <span className="cursor-pointer group">
                <div className="album-card shrink-0 w-[142px] h-[142px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] overflow-hidden transition-transform duration-[0.3s] rounded-lg hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  <img
                    src="https://c.saavncdn.com/415/Leo-Original-Motion-Picture-Soundtrack-English-2023-20231019170311-500x500.jpg?bch=474137"
                    alt="Leo (Original Motion Picture Soundtrack)"
                    className="album-image w-full h-full object-contain object-center transition-opacity duration-[0.3s]"
                  />
                </div>
                <span className="album-details  text-center text-base w-[142px] block overflow-hidden whitespace-nowrap text-ellipsis text-[#f3edf0] px-[0%] py-[5%] transition-transform duration-[0.3s] group-hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  Leo (Original Motion Picture Soundtrack)
                </span>
              </span>
            </a>
            <a
              href="/album"
              className="peer peer-hover:translate-x-2  transition-transform duration-[0.3s]"
            >
              <span className="cursor-pointer group">
                <div className="album-card shrink-0 w-[142px] h-[142px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] overflow-hidden transition-transform duration-[0.3s] rounded-lg hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  <img
                    src="https://c.saavncdn.com/editorial/BestofRomanceTamil_20240131165551.jpg"
                    alt="Best of Romance - Tamil"
                    className="album-image w-full h-full object-contain object-center transition-opacity duration-[0.3s]"
                  />
                </div>
                <span className="album-details  text-center text-base w-[142px] block overflow-hidden whitespace-nowrap text-ellipsis text-[#f3edf0] px-[0%] py-[5%] transition-transform duration-[0.3s] group-hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  Best of Romance - Tamil
                </span>
              </span>
            </a>
            <a
              href="/album"
              className="peer peer-hover:translate-x-2  transition-transform duration-[0.3s]"
            >
              <span className="cursor-pointer group">
                <div className="album-card shrink-0 w-[142px] h-[142px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] overflow-hidden transition-transform duration-[0.3s] rounded-lg hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  <img
                    src="https://c.saavncdn.com/editorial/FolkMelodyTamil_20230620055049.jpg"
                    alt="Folk Melody - Tamil"
                    className="album-image w-full h-full object-contain object-center transition-opacity duration-[0.3s]"
                  />
                </div>
                <span className="album-details  text-center text-base w-[142px] block overflow-hidden whitespace-nowrap text-ellipsis text-[#f3edf0] px-[0%] py-[5%] transition-transform duration-[0.3s] group-hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  Folk Melody - Tamil
                </span>
              </span>
            </a>
            <a
              href="/album"
              className="peer peer-hover:translate-x-2  transition-transform duration-[0.3s]"
            >
              <span className="cursor-pointer group">
                <div className="album-card shrink-0 w-[142px] h-[142px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] overflow-hidden transition-transform duration-[0.3s] rounded-lg hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  <img
                    src="https://c.saavncdn.com/544/Badass-From-Leo-Tamil-2023-20230928162246-500x500.jpg?bch=474137"
                    alt="Badass (From &amp;quot;Leo&amp;quot;)"
                    className="album-image w-full h-full object-contain object-center transition-opacity duration-[0.3s]"
                  />
                </div>
                <span className="album-details  text-center text-base w-[142px] block overflow-hidden whitespace-nowrap text-ellipsis text-[#f3edf0] px-[0%] py-[5%] transition-transform duration-[0.3s] group-hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  Badass (From "Leo")
                </span>
              </span>
            </a>
            <a
              href="/album"
              className="peer peer-hover:translate-x-2  transition-transform duration-[0.3s]"
            >
              <span className="cursor-pointer group">
                <div className="album-card shrink-0 w-[142px] h-[142px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] overflow-hidden transition-transform duration-[0.3s] rounded-lg hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  <img
                    src="https://c.saavncdn.com/437/Jawan-TAMIL-Tamil-2023-20230921213838-500x500.jpg?bch=474137"
                    alt="Jawan (TAMIL)"
                    className="album-image w-full h-full object-contain object-center transition-opacity duration-[0.3s]"
                  />
                </div>
                <span className="album-details  text-center text-base w-[142px] block overflow-hidden whitespace-nowrap text-ellipsis text-[#f3edf0] px-[0%] py-[5%] transition-transform duration-[0.3s] group-hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  Jawan (TAMIL)
                </span>
              </span>
            </a>
            <a
              href="/album"
              className="peer peer-hover:translate-x-2  transition-transform duration-[0.3s]"
            >
              <span className="cursor-pointer group">
                <div className="album-card shrink-0 w-[142px] h-[142px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] overflow-hidden transition-transform duration-[0.3s] rounded-lg hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  <img
                    src="https://c.saavncdn.com/626/Lal-Salaam-Original-Motion-Picture-Soundtrack-Tamil-2024-20240126174611-500x500.jpg?bch=474137"
                    alt="Lal Salaam (Original Motion Picture Soundtrack)"
                    className="album-image w-full h-full object-contain object-center transition-opacity duration-[0.3s]"
                  />
                </div>
                <span className="album-details  text-center text-base w-[142px] block overflow-hidden whitespace-nowrap text-ellipsis text-[#f3edf0] px-[0%] py-[5%] transition-transform duration-[0.3s] group-hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  Lal Salaam (Original Motion Picture Soundtrack)
                </span>
              </span>
            </a>
            <a
              href="/album"
              className="peer peer-hover:translate-x-2  transition-transform duration-[0.3s]"
            >
              <span className="cursor-pointer group">
                <div className="album-card shrink-0 w-[142px] h-[142px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] overflow-hidden transition-transform duration-[0.3s] rounded-lg hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  <img
                    src="https://c.saavncdn.com/916/Ordinary-Person-From-Leo-Tamil-2023-20231023221744-500x500.jpg?bch=474137"
                    alt="Ordinary Person (From &amp;quot;Leo&amp;quot;)"
                    className="album-image w-full h-full object-contain object-center transition-opacity duration-[0.3s]"
                  />
                </div>
                <span className="album-details  text-center text-base w-[142px] block overflow-hidden whitespace-nowrap text-ellipsis text-[#f3edf0] px-[0%] py-[5%] transition-transform duration-[0.3s] group-hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  Ordinary Person (From "Leo")
                </span>
              </span>
            </a>
            <a
              href="/album"
              className="peer peer-hover:translate-x-2  transition-transform duration-[0.3s]"
            >
              <span className="cursor-pointer group">
                <div className="album-card shrink-0 w-[142px] h-[142px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] overflow-hidden transition-transform duration-[0.3s] rounded-lg hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  <img
                    src="https://c.saavncdn.com/269/Blue-Star-Tamil-2023-20240123230306-500x500.jpg?bch=474137"
                    alt="Blue Star"
                    className="album-image w-full h-full object-contain object-center transition-opacity duration-[0.3s]"
                  />
                </div>
                <span className="album-details  text-center text-base w-[142px] block overflow-hidden whitespace-nowrap text-ellipsis text-[#f3edf0] px-[0%] py-[5%] transition-transform duration-[0.3s] group-hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  Blue Star
                </span>
              </span>
            </a>
            <a
              href="/album"
              className="peer peer-hover:translate-x-2  transition-transform duration-[0.3s]"
            >
              <span className="cursor-pointer group">
                <div className="album-card shrink-0 w-[142px] h-[142px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] overflow-hidden transition-transform duration-[0.3s] rounded-lg hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  <img
                    src="https://c.saavncdn.com/187/Jailer-Tamil-2023-20230728081443-500x500.jpg?bch=474137"
                    alt="Jailer"
                    className="album-image w-full h-full object-contain object-center transition-opacity duration-[0.3s]"
                  />
                </div>
                <span className="album-details  text-center text-base w-[142px] block overflow-hidden whitespace-nowrap text-ellipsis text-[#f3edf0] px-[0%] py-[5%] transition-transform duration-[0.3s] group-hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  Jailer
                </span>
              </span>
            </a>
            <a
              href="/album"
              className="peer peer-hover:translate-x-2  transition-transform duration-[0.3s]"
            >
              <span className="cursor-pointer group">
                <div className="album-card shrink-0 w-[142px] h-[142px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] overflow-hidden transition-transform duration-[0.3s] rounded-lg hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  <img
                    src="https://c.saavncdn.com/487/Villain-Yaaru-From-Leo-Tamil-2023-20231020174554-500x500.jpg?bch=474137"
                    alt="Villain Yaaru (From &amp;quot;Leo&amp;quot;)"
                    className="album-image w-full h-full object-contain object-center transition-opacity duration-[0.3s]"
                  />
                </div>
                <span className="album-details  text-center text-base w-[142px] block overflow-hidden whitespace-nowrap text-ellipsis text-[#f3edf0] px-[0%] py-[5%] transition-transform duration-[0.3s] group-hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  Villain Yaaru (From "Leo")
                </span>
              </span>
            </a>
            <a
              href="/album"
              className="peer peer-hover:translate-x-2  transition-transform duration-[0.3s]"
            >
              <span className="cursor-pointer group">
                <div className="album-card shrink-0 w-[142px] h-[142px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] overflow-hidden transition-transform duration-[0.3s] rounded-lg hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  <img
                    src="https://c.saavncdn.com/033/Hayyoda-From-Jawan-Tamil-2023-20230814014351-500x500.jpg?bch=474137"
                    alt="Hayyoda (From &amp;quot;Jawan&amp;quot;)"
                    className="album-image w-full h-full object-contain object-center transition-opacity duration-[0.3s]"
                  />
                </div>
                <span className="album-details  text-center text-base w-[142px] block overflow-hidden whitespace-nowrap text-ellipsis text-[#f3edf0] px-[0%] py-[5%] transition-transform duration-[0.3s] group-hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  Hayyoda (From "Jawan")
                </span>
              </span>
            </a>
            <a
              href="/album"
              className="peer peer-hover:translate-x-2  transition-transform duration-[0.3s]"
            >
              <span className="cursor-pointer group">
                <div className="album-card shrink-0 w-[142px] h-[142px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] overflow-hidden transition-transform duration-[0.3s] rounded-lg hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  <img
                    src="https://c.saavncdn.com/179/ANIMAL-TAMIL-Tamil-2023-20231125141021-500x500.jpg?bch=474137"
                    alt="ANIMAL - TAMIL"
                    className="album-image w-full h-full object-contain object-center transition-opacity duration-[0.3s]"
                  />
                </div>
                <span className="album-details  text-center text-base w-[142px] block overflow-hidden whitespace-nowrap text-ellipsis text-[#f3edf0] px-[0%] py-[5%] transition-transform duration-[0.3s] group-hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  ANIMAL - TAMIL
                </span>
              </span>
            </a>
            <a
              href="/album"
              className="peer peer-hover:translate-x-2  transition-transform duration-[0.3s]"
            >
              <span className="cursor-pointer group">
                <div className="album-card shrink-0 w-[142px] h-[142px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] overflow-hidden transition-transform duration-[0.3s] rounded-lg hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  <img
                    src="https://c.saavncdn.com/077/Jigarthanda-DoubleX-Tamil-2023-20231103022907-500x500.jpg?bch=474137"
                    alt="Jigarthanda DoubleX"
                    className="album-image w-full h-full object-contain object-center transition-opacity duration-[0.3s]"
                  />
                </div>
                <span className="album-details  text-center text-base w-[142px] block overflow-hidden whitespace-nowrap text-ellipsis text-[#f3edf0] px-[0%] py-[5%] transition-transform duration-[0.3s] group-hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  Jigarthanda DoubleX
                </span>
              </span>
            </a>
            <a
              href="/album"
              className="peer peer-hover:translate-x-2  transition-transform duration-[0.3s]"
            >
              <span className="cursor-pointer group">
                <div className="album-card shrink-0 w-[142px] h-[142px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] overflow-hidden transition-transform duration-[0.3s] rounded-lg hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  <img
                    src="https://c.saavncdn.com/145/Varisu-Tamil-2022-20221226190213-500x500.jpg?bch=474137"
                    alt="Varisu"
                    className="album-image w-full h-full object-contain object-center transition-opacity duration-[0.3s]"
                  />
                </div>
                <span className="album-details  text-center text-base w-[142px] block overflow-hidden whitespace-nowrap text-ellipsis text-[#f3edf0] px-[0%] py-[5%] transition-transform duration-[0.3s] group-hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  Varisu
                </span>
              </span>
            </a>
            <a
              href="/album"
              className="peer peer-hover:translate-x-2  transition-transform duration-[0.3s]"
            >
              <span className="cursor-pointer group">
                <div className="album-card shrink-0 w-[142px] h-[142px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] overflow-hidden transition-transform duration-[0.3s] rounded-lg hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  <img
                    src="https://c.saavncdn.com/959/Hukum-Thalaivar-Alappara-From-Jailer-Tamil-2023-20230717071502-500x500.jpg?bch=474137"
                    alt="Hukum - Thalaivar Alappara (From &amp;quot;Jailer&amp;quot;)"
                    className="album-image w-full h-full object-contain object-center transition-opacity duration-[0.3s]"
                  />
                </div>
                <span className="album-details  text-center text-base w-[142px] block overflow-hidden whitespace-nowrap text-ellipsis text-[#f3edf0] px-[0%] py-[5%] transition-transform duration-[0.3s] group-hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  Hukum - Thalaivar Alappara (From "Jailer")
                </span>
              </span>
            </a>
            <a
              href="/album"
              className="peer peer-hover:translate-x-2  transition-transform duration-[0.3s]"
            >
              <span className="cursor-pointer group">
                <div className="album-card shrink-0 w-[142px] h-[142px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] overflow-hidden transition-transform duration-[0.3s] rounded-lg hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  <img
                    src="https://c.saavncdn.com/381/Vikram-Original-Background-Score-Tamil-2022-20220707163303-500x500.jpg?bch=474137"
                    alt="Vikram (Original Background Score)"
                    className="album-image w-full h-full object-contain object-center transition-opacity duration-[0.3s]"
                  />
                </div>
                <span className="album-details  text-center text-base w-[142px] block overflow-hidden whitespace-nowrap text-ellipsis text-[#f3edf0] px-[0%] py-[5%] transition-transform duration-[0.3s] group-hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  Vikram (Original Background Score)
                </span>
              </span>
            </a>
            <a
              href="/album"
              className="peer peer-hover:translate-x-2  transition-transform duration-[0.3s]"
            >
              <span className="cursor-pointer group">
                <div className="album-card shrink-0 w-[142px] h-[142px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] overflow-hidden transition-transform duration-[0.3s] rounded-lg hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  <img
                    src="https://c.saavncdn.com/428/King-of-Kotha-Tamil-Original-Motion-Picture-Soundtrack-Tamil-2023-20230823184511-500x500.jpg?bch=474137"
                    alt="King of Kotha (Tamil) (Original Motion Picture Soundtrack)"
                    className="album-image w-full h-full object-contain object-center transition-opacity duration-[0.3s]"
                  />
                </div>
                <span className="album-details  text-center text-base w-[142px] block overflow-hidden whitespace-nowrap text-ellipsis text-[#f3edf0] px-[0%] py-[5%] transition-transform duration-[0.3s] group-hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  King of Kotha (Tamil) (Original Motion Picture Soundtrack)
                </span>
              </span>
            </a>
            <a
              href="/album"
              className="peer peer-hover:translate-x-2  transition-transform duration-[0.3s]"
            >
              <span className="cursor-pointer group">
                <div className="album-card shrink-0 w-[142px] h-[142px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] overflow-hidden transition-transform duration-[0.3s] rounded-lg hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  <img
                    src="https://c.saavncdn.com/872/Cover-of-the-Sara-Black-Rendition-Unakku-Thaan-Tamil-2023-20231217225934-500x500.jpg?bch=474137"
                    alt="Cover of the Sara Black Rendition Unakku Thaan"
                    className="album-image w-full h-full object-contain object-center transition-opacity duration-[0.3s]"
                  />
                </div>
                <span className="album-details  text-center text-base w-[142px] block overflow-hidden whitespace-nowrap text-ellipsis text-[#f3edf0] px-[0%] py-[5%] transition-transform duration-[0.3s] group-hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  Cover of the Sara Black Rendition Unakku Thaan
                </span>
              </span>
            </a>
            <a
              href="/album"
              className="peer peer-hover:translate-x-2  transition-transform duration-[0.3s]"
            >
              <span className="cursor-pointer group">
                <div className="album-card shrink-0 w-[142px] h-[142px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] overflow-hidden transition-transform duration-[0.3s] rounded-lg hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  <img
                    src="https://c.saavncdn.com/195/3-Tamil-2011-20210522203119-500x500.jpg?bch=474137"
                    alt="3"
                    className="album-image w-full h-full object-contain object-center transition-opacity duration-[0.3s]"
                  />
                </div>
                <span className="album-details  text-center text-base w-[142px] block overflow-hidden whitespace-nowrap text-ellipsis text-[#f3edf0] px-[0%] py-[5%] transition-transform duration-[0.3s] group-hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  3
                </span>
              </span>
            </a>
            <a
              href="/album"
              className="peer peer-hover:translate-x-2  transition-transform duration-[0.3s]"
            >
              <span className="cursor-pointer group">
                <div className="album-card shrink-0 w-[142px] h-[142px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] overflow-hidden transition-transform duration-[0.3s] rounded-lg hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  <img
                    src="https://c.saavncdn.com/036/Ratata-From-Leo-Tamil-2023-20231109190209-500x500.jpg?bch=474137"
                    alt="Ratata (From &amp;quot;Leo&amp;quot;)"
                    className="album-image w-full h-full object-contain object-center transition-opacity duration-[0.3s]"
                  />
                </div>
                <span className="album-details  text-center text-base w-[142px] block overflow-hidden whitespace-nowrap text-ellipsis text-[#f3edf0] px-[0%] py-[5%] transition-transform duration-[0.3s] group-hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  Ratata (From "Leo")
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Maincontainer;
