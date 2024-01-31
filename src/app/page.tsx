/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
const apiKey = 'AIzaSyCLwJClB0srUViVFAO0oiwM22OdDbnyOok'
async function getData() {
  const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=UC_-cYwuDzxD2A57aeGtDQcg&key=${apiKey}`)
  const data = await response.json()

  return data.items[0]
    ;

}

export default async function Home() {

  const channel = await getData()

  console.log(channel.snippet.thumbnails);

  return (
    <div className="flex flex-col ">
      <img
        src={channel.snippet.thumbnails.medium.url}
        alt={`Imagem do canal ${channel.title}`}
        className="w-20 h-20"
      />
      <div className="flex items-center">
        <strong>Nome do Canal:</strong>
        <span>{channel.snippet.title}</span>
      </div>
    </div>

  );
}
