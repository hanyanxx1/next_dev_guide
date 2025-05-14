import { photos } from "../../data";

export default async function PhotoPage(props) {
  const params = await props.params; // 确保 params 被正确解析
  const photo = photos.find((p) => p.id === params.id);

  return (
    <img
      style={{
        width: "50%",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
      }}
      src={photo.src}
    />
  );
}
