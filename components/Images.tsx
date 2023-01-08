import { useEffect, useState } from "react";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import client from "../client";

export default function Images({}: any) {
  const [images, setImages] = useState([]);
  useEffect(() => {
    client
      .fetch(`*[_type == "photos"]{photos[]{asset->{url}}}`)
      .then((photos: any) => {
        console.log("fetched photos", photos);
        if (!photos)
          return console.error(`Photos is not properly defined from query`);
        setImages(
          photos[0].photos.map((photo: any) => {
            return { img: photo.asset.url, title: "photo", author: "anthony" };
          })
        );
      })
      .catch((err) => {
        console.error("Failed at sanity photo fetch");
        console.error(err);
      });
  }, []);

  const author = { author: "Anthony" };
  const itemData = [
    { img: "/images/city.png", title: "city", ...author },
    { img: "/images/parking.png", title: "parking", ...author },
    { img: "/images/nice_dorms.png", title: "parking", ...author },
    { img: "/images/bss.png", title: "bss", ...author },
    { img: "/images/aiden.png", title: "aiden", ...author },
    { img: "/images/camp.png", title: "camp", ...author },
    { img: "/images/walk_way.png", title: "walk_way", ...author },
    { img: "/images/campus.png", title: "campus", ...author },
    { img: "/images/env.png", title: "env", ...author },
  ];
  return (
    <div style={{ margin: "2rem auto", padding: "0 8rem" }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {images.map((item: any) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar position="below" title={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
