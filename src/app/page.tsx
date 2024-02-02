/* eslint-disable @next/next/no-img-element */
const apiKey = "seu API KEY";
const channelID = "ID do canal que você deseja";

async function getChannel() {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?key=${apiKey}&id=${channelID}&part=snippet`
  );
  const data = await response.json();

  return data.items[0].snippet;
}

async function getChannelVideos() {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelID}&part=snippet&order=date&maxResults=9`
  );
  const data = await response.json();

  return data.items;
}

export default async function Home() {
  const channel = await getChannel();
  const channelVideos = await getChannelVideos();
  return (
    <div className="max-w-[1180px] w-full mx-auto py-8 px-12">
      
      <div className="border border-zinc-300 px-4 flex flex-col ">
        <div className="flex items-center gap-4 my-5">
          <img
            src={channel.thumbnails.default.url}
            alt={`Imagem do canal ${channel.title}`}
          />
          <div className="flex flex-col justify-start items-start">
            <strong className="">{channel.title}</strong>
            <span className="text-zinc-400">{channel.customUrl}</span>
            <span>{channel.description}</span>
          </div>
        </div>
      </div>
      <div className=" border border-zinc-300 px-4  mt-4 grid grid-cols-3 items-center">
        {channelVideos.map((video) => (
          <div className="flex items-center gap-4 my-5" key={video.id}>
            <img
              src={video.snippet.thumbnails.default.url}
              alt={`Imagem do canal ${video.title}`}
            />
            <div className="flex items-center">
              <strong>{video.snippet.title}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
